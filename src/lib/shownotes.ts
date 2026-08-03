import type { Episode } from "@/lib/episodes";

const ABOUT_US_HTML = `<p><strong>Mehr über uns:</strong></p>

<p>
<a href="https://techninjas.ch/">Tech Ninjas</a><br>
<a href="https://www.machseifa.ch/">Mach’s eifach</a><br>
<a href="https://www.instagram.com/machs.eifach/">Mach’s eifach auf Instagram</a><br>
<a href="https://www.instagram.com/techninjas.ch/">Tech Ninjas auf Instagram</a>
</p>`;

export function buildShownotesHtml(episode: Episode): string {
  const parts: string[] = [`<p>${episode.description}</p>`];

  if (episode.guest) {
    parts.push(`<p><strong>Zu Gast: ${episode.guest.name}</strong> – ${episode.guest.role}</p>`);
    parts.push(`<p>${episode.guest.bio}</p>`);
    if (episode.guest.links.length > 0) {
      const links = episode.guest.links
        .map((link) => `<a href="${link.href}">${link.label}</a>`)
        .join("<br>\n");
      parts.push(`<p>\n${links}\n</p>`);
    }
  }

  if (episode.host) {
    const links = episode.host.links
      .map((link) => `<a href="${link.href}">${link.label}</a>`)
      .join("<br>\n");
    parts.push(`<p><strong>Mehr von ${episode.host.name}:</strong></p>`);
    parts.push(`<p>\n${links}\n</p>`);
  }

  if (episode.tips && episode.tips.length > 0) {
    parts.push(`<p><strong>Die wichtigsten Erkenntnisse:</strong></p>`);
    const tips = episode.tips.map((tip, i) => `${i + 1}. ${tip}`).join("<br>\n");
    parts.push(`<p>\n${tips}\n</p>`);
  }

  if (episode.summary && episode.summary.length > 0) {
    parts.push(`<p><strong>Worum es in dieser Folge geht:</strong></p>`);
    parts.push(...episode.summary.map((paragraph) => `<p>${paragraph}</p>`));
  }

  parts.push(ABOUT_US_HTML);

  return parts.join("\n\n");
}
