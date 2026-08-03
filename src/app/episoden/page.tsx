import type { Metadata } from "next";
import Link from "next/link";
import { episodes, isPublished } from "@/lib/episodes";
import NextEpisodeTeaser from "@/components/NextEpisodeTeaser";

export const metadata: Metadata = {
  title: "Episoden – Mach's eifach",
};

// Episodes can carry a future `publishAt`; re-check on every request so newly
// published episodes flip visible at the right time.
export const dynamic = "force-dynamic";

export default function EpisodenPage() {
  const publishedEpisodes = episodes.filter(isPublished);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="mb-14 text-center">
        <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
          Alle Folgen
        </div>
        <h1 className="mt-1.5 text-[38px] font-bold">Episoden</h1>
      </div>

      <div className="-mx-6 mb-14">
        <NextEpisodeTeaser />
      </div>

      <div className="flex flex-col gap-7">
        {publishedEpisodes.map((ep) => (
          <article
            key={ep.number}
            className="flex flex-col items-start gap-5 rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-7 sm:flex-row"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-[var(--background)]">
              {String(ep.number).padStart(2, "0")}
            </div>
            <div className="flex-1">
              <p className="mb-1.5 text-[13px] text-[var(--muted-2)]">
                {new Date(ep.date).toLocaleDateString("de-CH", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {ep.duration}
              </p>
              <h2 className="m-0 mb-2 text-xl font-bold">
                <Link href={`/episoden/${ep.slug}`} className="hover:text-[var(--accent)]">
                  {ep.title}
                </Link>
              </h2>
              <p className="m-0 mb-3.5 text-[15px] leading-relaxed text-[var(--muted)]">
                {ep.description}
              </p>
              <Link
                href={`/episoden/${ep.slug}`}
                className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
              >
                Mehr erfahren →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
