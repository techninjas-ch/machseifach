import { google } from "googleapis";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { episodes, type Episode } from "../src/lib/episodes";
import { buildShownotesHtml } from "../src/lib/shownotes";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));

export const SCOPES = ["https://www.googleapis.com/auth/youtube.upload"];

export const CLIENT_SECRET_PATH = path.join(scriptsDir, ".youtube-client-secret.json");
export const TOKEN_PATH = path.join(scriptsDir, ".youtube-token.json");

export function findEpisodeByNumber(number: number): Episode | undefined {
  return episodes.find((ep) => ep.number === number);
}

/** Reads the leading number out of a filename, e.g. "9-nadia-teil1.mp4" -> 9. */
export function parseEpisodeNumberFromFilename(filename: string): number | null {
  const match = filename.match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

/** Converts the shownotes HTML (built for the Spotify description field) to plain text for YouTube. */
export function htmlToPlainText(html: string): string {
  return html
    .replace(/<a href="([^"]+)">([^<]*)<\/a>/g, "$2: $1")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*/gi, "\n\n")
    .replace(/<p>/gi, "")
    .replace(/<\/?strong>/gi, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .trim()
    .replace(/\n{3,}/g, "\n\n");
}

const YOUTUBE_TITLE_LIMIT = 100;
const YOUTUBE_DESCRIPTION_LIMIT = 5000;

function truncate(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : limit - 1)}…`;
}

export function buildYoutubeTitle(episode: Episode): string {
  return truncate(episode.title, YOUTUBE_TITLE_LIMIT);
}

export function buildYoutubeDescription(episode: Episode): string {
  const plain = htmlToPlainText(buildShownotesHtml(episode));
  return truncate(plain, YOUTUBE_DESCRIPTION_LIMIT);
}

export function loadClientSecret(): { client_id: string; client_secret: string } {
  if (!fs.existsSync(CLIENT_SECRET_PATH)) {
    throw new Error(
      `Keine OAuth-Client-Datei gefunden unter ${CLIENT_SECRET_PATH}.\n` +
        `Lade sie aus der Google Cloud Console herunter (OAuth-Client-ID vom Typ "Desktop-App")\n` +
        `und speichere sie genau unter diesem Pfad, dann "npm run youtube:auth" ausführen.`,
    );
  }
  const raw = JSON.parse(fs.readFileSync(CLIENT_SECRET_PATH, "utf-8"));
  const creds = raw.installed ?? raw.web;
  if (!creds?.client_id || !creds?.client_secret) {
    throw new Error(`Unerwartetes Format in ${CLIENT_SECRET_PATH}.`);
  }
  return { client_id: creds.client_id, client_secret: creds.client_secret };
}

export function getAuthenticatedClient() {
  const { client_id, client_secret } = loadClientSecret();
  if (!fs.existsSync(TOKEN_PATH)) {
    throw new Error(
      `Kein gespeichertes Token unter ${TOKEN_PATH}.\n` +
        `Erst einmalig "npm run youtube:auth" ausführen und den Login-Schritt im Browser abschliessen.`,
    );
  }
  const token = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
  // redirect_uri doesn't matter for refreshing an already-issued token.
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, "http://127.0.0.1");
  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}

export function getYoutubeClient() {
  return google.youtube({ version: "v3", auth: getAuthenticatedClient() });
}
