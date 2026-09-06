/**
 * Scans the drop folder for new episode video files, matches each one to an
 * episode in src/lib/episodes.ts by the leading number in its filename
 * (e.g. "9-nadia-teil1.mp4" -> episode 9), and uploads it to YouTube with
 * the title/description derived from that episode's shownotes.
 *
 * Setup: see scripts/youtube-auth.ts. Configure the folder to watch via
 * the YOUTUBE_UPLOAD_FOLDER env var (in a local .env file) or it defaults
 * to ~/Podcast-Uploads.
 *
 * Usage:
 *   npm run youtube:upload            # asks for confirmation per video
 *   npm run youtube:upload -- --yes   # uploads without asking
 */
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import readline from "node:readline/promises";
import {
  buildYoutubeDescription,
  buildYoutubeTitle,
  findEpisodeByNumber,
  getYoutubeClient,
  parseEpisodeNumberFromFilename,
} from "./youtube-lib";

const VIDEO_EXTENSIONS = [".mp4", ".mov", ".m4v", ".mkv"];
const YOUTUBE_CATEGORY_ID = "22"; // People & Blogs
const skipConfirm = process.argv.includes("--yes") || process.argv.includes("-y");

function resolveUploadFolder(): string {
  const configured = process.env.YOUTUBE_UPLOAD_FOLDER;
  const folder = configured
    ? configured.replace(/^~(?=$|\/)/, os.homedir())
    : path.join(os.homedir(), "Podcast-Uploads");
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`Ordner erstellt: ${folder}`);
  }
  return folder;
}

async function confirm(question: string): Promise<boolean> {
  if (skipConfirm) return true;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question(`${question} [y/N] `);
  rl.close();
  return answer.trim().toLowerCase() === "y";
}

async function uploadFile(filePath: string, episodeNumber: number) {
  const episode = findEpisodeByNumber(episodeNumber);
  if (!episode) {
    console.warn(`⚠ Keine Episode Nr. ${episodeNumber} in episodes.ts gefunden, überspringe ${filePath}.`);
    return;
  }

  const title = buildYoutubeTitle(episode);
  const description = buildYoutubeDescription(episode);

  // If the episode is still time-gated on the site (publishAt in the future),
  // schedule the video for that same moment instead of publishing right away.
  const scheduledFor =
    episode.publishAt && new Date(episode.publishAt).getTime() > Date.now() ? episode.publishAt : null;

  console.log(`\n— ${path.basename(filePath)} —`);
  console.log(`Episode ${episode.number}: ${episode.title}`);
  console.log(`YouTube-Titel: ${title}`);
  console.log(`Beschreibung (${description.length} Zeichen):\n${description.slice(0, 300)}${description.length > 300 ? "…" : ""}`);
  console.log(
    scheduledFor
      ? `Sichtbarkeit: geplant für ${new Date(scheduledFor).toLocaleString("de-CH")} (bis dahin privat)`
      : "Sichtbarkeit: sofort öffentlich",
  );

  const proceed = await confirm(scheduledFor ? "\nHochladen und planen?" : "\nHochladen und veröffentlichen?");
  if (!proceed) {
    console.log("Übersprungen.");
    return;
  }

  const youtube = getYoutubeClient();
  const res = await youtube.videos.insert({
    part: ["snippet", "status"],
    requestBody: {
      snippet: {
        title,
        description,
        tags: ["Podcast", "Selbstständigkeit", "Unternehmertum", "Schweiz", "Mach's eifach", episode.guest?.name].filter(
          (t): t is string => Boolean(t),
        ),
        categoryId: YOUTUBE_CATEGORY_ID,
      },
      status: scheduledFor
        ? {
            privacyStatus: "private",
            publishAt: new Date(scheduledFor).toISOString(),
            selfDeclaredMadeForKids: false,
          }
        : {
            privacyStatus: "public",
            selfDeclaredMadeForKids: false,
          },
    },
    media: {
      body: fs.createReadStream(filePath),
    },
  });

  const videoId = res.data.id;
  console.log(
    scheduledFor
      ? `✔ Hochgeladen und geplant (privat bis ${new Date(scheduledFor).toLocaleString("de-CH")}): https://youtu.be/${videoId}`
      : `✔ Hochgeladen: https://youtu.be/${videoId}`,
  );

  const processedDir = path.join(path.dirname(filePath), "processed");
  fs.mkdirSync(processedDir, { recursive: true });
  fs.renameSync(filePath, path.join(processedDir, path.basename(filePath)));
}

async function main() {
  const folder = resolveUploadFolder();
  const files = fs
    .readdirSync(folder, { withFileTypes: true })
    .filter((entry) => entry.isFile() && VIDEO_EXTENSIONS.includes(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name);

  if (files.length === 0) {
    console.log(`Keine neuen Video-Dateien in ${folder}.`);
    return;
  }

  for (const file of files) {
    const number = parseEpisodeNumberFromFilename(file);
    if (number === null) {
      console.warn(`⚠ Konnte keine Episoden-Nummer aus "${file}" lesen (erwarte z.B. "9-....mp4"), überspringe.`);
      continue;
    }
    await uploadFile(path.join(folder, file), number);
  }
}

main().catch((err) => {
  console.error("\nFehler beim Upload:", err.message ?? err);
  process.exit(1);
});
