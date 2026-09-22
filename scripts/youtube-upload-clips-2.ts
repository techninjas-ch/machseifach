/**
 * One-off: uploads 3 more standalone Isabel Kohler / VAISA highlight clips,
 * scheduled privately until their own publishAt.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { getYoutubeClient } from "./youtube-lib";

const YOUTUBE_CATEGORY_ID = "22"; // People & Blogs
const DOWNLOADS = path.join(os.homedir(), "Downloads");

const EPISODE_LINK = "https://machseifach.ch/episoden/12-isabel-kohler-starte-unperfekt";

type Clip = {
  file: string;
  title: string;
  description: string;
  tags: string[];
  publishAt: string;
};

const clips: Clip[] = [
  {
    file: "riverside_meine_flugbegleiterin-reise_patrick's_studio.mp4",
    title: "Das Leben als Flugbegleiterin: schön von aussen, anstrengend im Alltag",
    description: `Wie war das Leben als Flugbegleiterin wirklich? Isabel Kohler erzählt von Jetlag, Zeitverschiebung und ständiger Erschöpfung, aber auch von coolen Reisevergünstigungen und einer überraschend kompakten Ausbildung von nur rund drei Monaten.

Ausschnitt aus Folge 12 von «Mach's eifach» mit Isabel Kohler, Gründerin von VAISA. Die ganze Folge gibt's auf Spotify, Apple Podcasts oder auf unserer Webseite.

→ ${EPISODE_LINK}

#machseifach #podcast #flugbegleiterin #selbststaendigkeit #schweiz`,
    tags: ["Podcast", "Flugbegleiterin", "Selbstständigkeit", "Schweiz", "Mach's eifach", "Isabel Kohler"],
    publishAt: "2026-09-21T18:00:00+02:00",
  },
  {
    file: "riverside_vaisa__meine reise zur selbstständigkeit_patrick's_studio.mp4",
    title: "Der Wendepunkt: Wie Isabel Kohler den Sprung in die Selbstständigkeit wagte",
    description: `Ein stressiger Job mit vielen Überstunden und internen Konflikten, dazu eine Online-Challenge als Auslöser: Isabel Kohler erzählt, wie ihr persönlicher Wendepunkt aussah und warum ihr Netzwerk am Anfang wichtiger war, als sie zuerst dachte.

Ausschnitt aus Folge 12 von «Mach's eifach» mit Isabel Kohler, Gründerin von VAISA. Die ganze Folge gibt's auf Spotify, Apple Podcasts oder auf unserer Webseite.

→ ${EPISODE_LINK}

#machseifach #podcast #selbststaendigkeit #wendepunkt #schweiz`,
    tags: ["Podcast", "Selbstständigkeit", "Wendepunkt", "Schweiz", "Mach's eifach", "Isabel Kohler"],
    publishAt: "2026-09-22T18:00:00+02:00",
  },
  {
    file: "riverside_isabels_vision für die zukunft der selbstständigk_patrick's_studio.mp4",
    title: "Isabels Vision: mehr Zusammenarbeit mit anderen Selbstständigen",
    description: `Wohin geht die Reise für Isabel Kohler? Sie erzählt von ihrer Vision für gemeinsame Projekte mit anderen Selbstständigen, warum ihr Flexibilität wichtiger ist als ein 10-Jahres-Plan, und wie der Name VAISA eigentlich entstanden ist.

Ausschnitt aus Folge 12 von «Mach's eifach» mit Isabel Kohler, Gründerin von VAISA. Die ganze Folge gibt's auf Spotify, Apple Podcasts oder auf unserer Webseite.

→ ${EPISODE_LINK}

#machseifach #podcast #selbststaendigkeit #vision #schweiz`,
    tags: ["Podcast", "Selbstständigkeit", "Zukunft", "Schweiz", "Mach's eifach", "Isabel Kohler"],
    publishAt: "2026-09-24T18:00:00+02:00",
  },
];

async function uploadClip(clip: Clip) {
  const filePath = path.join(DOWNLOADS, clip.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠ Datei nicht gefunden: ${filePath}, überspringe.`);
    return;
  }

  console.log(`\n— ${clip.file} —`);
  console.log(`Titel: ${clip.title}`);
  console.log(`Geplant für: ${new Date(clip.publishAt).toLocaleString("de-CH")} (bis dahin privat)`);

  const youtube = getYoutubeClient();
  const fileSize = fs.statSync(filePath).size;
  const maxAttempts = 3;
  let lastError: unknown;
  let res: { data: { id?: string | null } } | undefined;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      res = await youtube.videos.insert(
        {
          part: ["snippet", "status"],
          requestBody: {
            snippet: {
              title: clip.title,
              description: clip.description,
              tags: clip.tags,
              categoryId: YOUTUBE_CATEGORY_ID,
            },
            status: {
              privacyStatus: "private",
              publishAt: new Date(clip.publishAt).toISOString(),
              selfDeclaredMadeForKids: false,
            },
          },
          media: {
            body: fs.createReadStream(filePath),
          },
        },
        {
          onUploadProgress: (evt) => {
            const pct = fileSize ? Math.min(100, Math.round((evt.bytesRead / fileSize) * 100)) : 0;
            process.stdout.write(`\rUpload: ${pct}%   `);
          },
        },
      );
      process.stdout.write("\n");
      break;
    } catch (err) {
      lastError = err;
      process.stdout.write("\n");
      if (attempt < maxAttempts) {
        console.warn(`⚠ Upload-Versuch ${attempt} fehlgeschlagen (${(err as Error).message}), versuche erneut …`);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }
  }

  if (!res) {
    throw lastError instanceof Error ? lastError : new Error(String(lastError));
  }

  console.log(
    `✔ Hochgeladen und geplant (privat bis ${new Date(clip.publishAt).toLocaleString("de-CH")}): https://youtu.be/${res.data.id}`,
  );
}

async function main() {
  for (const clip of clips) {
    await uploadClip(clip);
  }
}

main().catch((err) => {
  console.error("\nFehler beim Upload:", err.message ?? err);
  process.exit(1);
});
