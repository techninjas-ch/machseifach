/**
 * One-off: uploads a fixed list of standalone highlight clips (not tied to
 * a single episodes.ts entry) with custom title/description, each scheduled
 * privately until its own publishAt.
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
    file: "riverside_von_flugbegleiterin zu virtueller assistentin_patrick's_studio.mp4",
    title: "Vom Flugbegleiter-Job zur virtuellen Assistentin: Isabel Kohlers Weg in die Selbstständigkeit",
    description: `Wie kommt man vom Reisebüro über einen Job als Flugbegleiterin zur eigenen virtuellen Assistenz? Isabel Kohler erzählt, wie sie über das Moneypenny-Magazin auf den Begriff «virtuelle Assistenz» stiess und wie sie über ihr Netzwerk und einen Kontakt am Inselspital Bern ihre ersten Kundinnen fand.

Dieser Ausschnitt stammt aus Folge 12 von «Mach's eifach» mit Isabel Kohler, Gründerin von VAISA. Die ganze Folge hörst du auf Spotify, Apple Podcasts oder direkt auf unserer Webseite.

→ ${EPISODE_LINK}

#machseifach #podcast #selbststaendigkeit #virtuelleassistenz #unternehmertum #schweiz`,
    tags: ["Podcast", "Selbstständigkeit", "Virtuelle Assistenz", "Schweiz", "Mach's eifach", "Isabel Kohler"],
    publishAt: "2026-09-16T18:00:00+02:00",
  },
  {
    file: "riverside_markenbildung__strategie vor kreativität_patrick's_studio.mp4",
    title: "Strategie vor Kreativität: So startet gutes Branding",
    description: `Warum beginnt jedes gute Branding mit Strategie, nicht mit Design? Isabel Kohler erklärt, warum sie erst die Person oder Firma und den Markt kennenlernt, bevor überhaupt an Farben oder Logos gedacht wird, und warum sich diese Reihenfolge nicht umgehen lässt.

Ausschnitt aus Folge 12 von «Mach's eifach» mit Isabel Kohler, Gründerin von VAISA. Die ganze Folge gibt's auf Spotify, Apple Podcasts oder auf unserer Webseite.

→ ${EPISODE_LINK}

#machseifach #podcast #branding #selbststaendigkeit #schweiz`,
    tags: ["Podcast", "Branding", "Selbstständigkeit", "Schweiz", "Mach's eifach", "Isabel Kohler"],
    publishAt: "2026-09-17T18:00:00+02:00",
  },
  {
    file: "riverside_verständnis_von moodboards in der markenbildung_patrick's_studio.mp4",
    title: "Was ist eigentlich ein Moodboard? Branding-Basics erklärt",
    description: `Moodboard, Stimmungsbild, egal wie man's nennt, aber wofür braucht man das eigentlich beim Branding? Isabel Kohler erklärt, wie ein Moodboard weit mehr ist als schöne Bilder und Farben, sondern strategisch aufgebaut wird, von der Schriftwahl bis zur Bildwelt.

Ausschnitt aus Folge 12 von «Mach's eifach» mit Isabel Kohler, Gründerin von VAISA. Die ganze Folge gibt's auf Spotify, Apple Podcasts oder auf unserer Webseite.

→ ${EPISODE_LINK}

#machseifach #podcast #branding #moodboard #schweiz`,
    tags: ["Podcast", "Branding", "Moodboard", "Schweiz", "Mach's eifach", "Isabel Kohler"],
    publishAt: "2026-09-18T18:00:00+02:00",
  },
  {
    file: "riverside_die_rolle der farbe in der persönlichen markenbil_patrick's_studio.mp4",
    title: "Die richtige Farbe fürs Branding finden",
    description: `Wie findet man die passende Farbe für eine Marke, wenn die Kundschaft keine Vorgaben macht? Isabel Kohler über Konkurrenzanalyse, Farbpsychologie und den häufigsten Fehler bei der Farbwahl: die eigene Lieblingsfarbe statt die Zielgruppe.

Ausschnitt aus Folge 12 von «Mach's eifach» mit Isabel Kohler, Gründerin von VAISA. Die ganze Folge gibt's auf Spotify, Apple Podcasts oder auf unserer Webseite.

→ ${EPISODE_LINK}

#machseifach #podcast #branding #farbpsychologie #schweiz`,
    tags: ["Podcast", "Branding", "Farbpsychologie", "Schweiz", "Mach's eifach", "Isabel Kohler"],
    publishAt: "2026-09-19T18:00:00+02:00",
  },
  {
    file: "riverside_isabels_tipps für das gründen eigener unternehmen_patrick's_studio.mp4",
    title: "3 Tipps für den Start in die Selbstständigkeit",
    description: `Netzwerk statt Alleingang, das richtige Mindset und der Leitsatz «Starte unperfekt»: Isabel Kohler gibt ihre wichtigsten Tipps für alle, die den Schritt in die Selbstständigkeit wagen wollen.

Ausschnitt aus Folge 12 von «Mach's eifach» mit Isabel Kohler, Gründerin von VAISA. Die ganze Folge gibt's auf Spotify, Apple Podcasts oder auf unserer Webseite.

→ ${EPISODE_LINK}

#machseifach #podcast #selbststaendigkeit #mindset #schweiz`,
    tags: ["Podcast", "Selbstständigkeit", "Mindset", "Schweiz", "Mach's eifach", "Isabel Kohler"],
    publishAt: "2026-09-20T18:00:00+02:00",
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
