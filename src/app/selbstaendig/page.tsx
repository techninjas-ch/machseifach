import type { Metadata } from "next";
import Link from "next/link";
import { selbstaendigPosts } from "@/lib/selbstaendig";

export const metadata: Metadata = {
  title: "Selbstständig – Mach's eifach",
  description:
    "Alles, was du für den Schritt in die Selbstständigkeit in der Schweiz wissen musst: von der ersten Idee bis zur Gründung.",
};

export default function SelbstaendigPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="mb-14 text-center">
        <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
          Für alle, die es wagen
        </div>
        <h1 className="mt-1.5 text-[38px] font-bold">Selbstständig</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Alles, was du für den Schritt in die Selbstständigkeit in der Schweiz wissen musst: von
          der ersten Idee bis zur Gründung.
        </p>
      </div>

      {selbstaendigPosts.length > 0 ? (
        <div className="flex flex-col gap-7">
          {selbstaendigPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-7"
            >
              <p className="mb-1.5 text-[13px] text-[var(--muted-2)]">
                {new Date(post.date).toLocaleDateString("de-CH", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {post.readingTime} Lesezeit
              </p>
              <h2 className="m-0 mb-2 text-xl font-bold">
                <Link href={`/selbstaendig/${post.slug}`} className="hover:text-[var(--accent)]">
                  {post.title}
                </Link>
              </h2>
              <p className="m-0 mb-3.5 text-[15px] leading-relaxed text-[var(--muted)]">
                {post.excerpt}
              </p>
              <Link
                href={`/selbstaendig/${post.slug}`}
                className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
              >
                Weiterlesen →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-10 text-center">
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">
            Hier entstehen bald die ersten Beiträge. Schau bald wieder vorbei.
          </p>
        </div>
      )}
    </div>
  );
}
