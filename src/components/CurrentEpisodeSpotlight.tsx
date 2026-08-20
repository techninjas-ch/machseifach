import Link from "next/link";
import { episodes, isPublished } from "@/lib/episodes";
import { spotifyEmbedUrl } from "@/lib/platforms";

export default function CurrentEpisodeSpotlight() {
  const latest = episodes.filter(isPublished)[0];
  if (!latest?.spotifyUrl) return null;

  return (
    <div className="mx-auto mt-14 max-w-3xl px-6 text-center">
      <div className="font-[family-name:var(--font-caveat)] text-xl font-bold text-[var(--accent-soft)]">
        Aktuelle Folge
      </div>
      <h2 className="mt-0.5 mb-3 text-[28px] font-bold">{latest.title}</h2>
      <p className="mx-auto mb-6 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
        {latest.description}
      </p>

      <div className="overflow-hidden rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] text-left">
        <iframe
          src={spotifyEmbedUrl(latest.spotifyUrl)}
          width="100%"
          height="232"
          style={{ border: 0 }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3.5">
        <a
          href={latest.spotifyUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[var(--accent)] px-6 py-3.5 text-[15px] font-semibold text-[var(--background)] transition-colors hover:bg-[var(--accent-dark)]"
        >
          Auf Spotify anhören
        </a>
        <Link
          href={`/episoden/${latest.slug}`}
          className="rounded-full border-[1.5px] border-[var(--accent)] px-6 py-3.5 text-[15px] font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/5"
        >
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
}
