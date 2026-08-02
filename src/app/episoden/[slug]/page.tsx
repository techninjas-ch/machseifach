import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { episodes } from "@/lib/episodes";
import { spotifyEmbedUrl } from "@/lib/platforms";

export function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.slug }));
}

function findEpisode(slug: string) {
  return episodes.find((ep) => ep.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const episode = findEpisode(slug);
  if (!episode) return {};
  return {
    title: `${episode.title} – Mach's eifach`,
    description: episode.description,
  };
}

export default async function EpisodeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = findEpisode(slug);
  if (!episode) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/episoden"
        className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
      >
        ← Alle Episoden
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-[var(--background)]">
          {String(episode.number).padStart(2, "0")}
        </div>
        <p className="text-[13px] text-[var(--muted-2)]">
          {new Date(episode.date).toLocaleDateString("de-CH", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          · {episode.duration}
        </p>
      </div>

      <h1 className="mt-5 text-[32px] font-bold leading-tight sm:text-[40px]">{episode.title}</h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        {episode.description}
      </p>

      <div className="mt-8 overflow-hidden rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)]">
        <iframe
          src={spotifyEmbedUrl(episode.spotifyUrl)}
          width="100%"
          height="232"
          style={{ border: 0 }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-3.5">
        <a
          href={episode.spotifyUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[var(--accent)] px-6 py-3.5 text-[15px] font-semibold text-[var(--background)] transition-colors hover:bg-[var(--accent-dark)]"
        >
          Auf Spotify anhören
        </a>
        <Link
          href="/ueber-uns"
          className="rounded-full border-[1.5px] border-[var(--accent)] px-6 py-3.5 text-[15px] font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/5"
        >
          Mehr über die Hosts
        </Link>
      </div>

      {episode.host && (
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="text-[var(--muted-2)]">Mehr von {episode.host.name}:</span>
          {episode.host.links.map((link, index) => (
            <span key={link.href} className="inline-flex items-center gap-x-3">
              {index > 0 ? <span className="text-[var(--muted-2)]/60">·</span> : null}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 hover:text-[var(--accent-dark)]"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      )}

      {episode.guest && (
        <div className="mt-14 rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-6 sm:p-8">
          <div className="font-[family-name:var(--font-caveat)] text-[26px] font-bold text-[var(--accent-soft)]">
            Zu Gast
          </div>
          <h2 className="mt-1 text-2xl font-bold">{episode.guest.name}</h2>
          <p className="mt-1 text-sm text-[var(--muted-2)]">{episode.guest.role}</p>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">{episode.guest.bio}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
            {episode.guest.links.map((link, index) => (
              <span key={link.href} className="inline-flex items-center gap-x-3">
                {index > 0 ? <span className="text-[var(--muted-2)]/60">·</span> : null}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 hover:text-[var(--accent-dark)]"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      )}

      {episode.tips && (
        <div className="mt-14">
          <div className="font-[family-name:var(--font-caveat)] text-[26px] font-bold text-[var(--accent-soft)]">
            Mitnehmen
          </div>
          <h2 className="mt-1 mb-5 text-2xl font-bold">
            {episode.guest
              ? `Die wichtigsten Erkenntnisse von ${episode.guest.name}`
              : "Die wichtigsten Erkenntnisse aus dieser Folge"}
          </h2>
          <ol className="space-y-4">
            {episode.tips.map((tip, index) => (
              <li key={tip} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--background)]">
                  {index + 1}
                </span>
                <p className="pt-0.5 leading-relaxed text-[var(--muted)]">{tip}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {episode.summary && (
        <div className="mt-14">
          <div className="font-[family-name:var(--font-caveat)] text-[26px] font-bold text-[var(--accent-soft)]">
            Zusammenfassung
          </div>
          <h2 className="mt-1 mb-5 text-2xl font-bold">Worum es in dieser Folge geht</h2>
          <div className="space-y-4 leading-relaxed text-[var(--muted)]">
            {episode.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
