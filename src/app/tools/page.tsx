import type { Metadata } from "next";
import Link from "next/link";
import { toolPosts } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Tools – Mach's eifach",
  description:
    "Software und Tools, die sich für Selbstständige und KMU in der Schweiz in der Praxis bewährt haben.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="mb-14 text-center">
        <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
          Was wirklich hilft
        </div>
        <h1 className="mt-1.5 text-[38px] font-bold">Tools</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Software und Tools, die sich für Selbstständige und KMU in der Schweiz in der Praxis
          bewährt haben.
        </p>
      </div>

      {toolPosts.length > 0 ? (
        <div className="flex flex-col gap-7">
          {toolPosts.map((post) => (
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
                <Link href={`/tools/${post.slug}`} className="hover:text-[var(--accent)]">
                  {post.title}
                </Link>
              </h2>
              <p className="m-0 mb-3.5 text-[15px] leading-relaxed text-[var(--muted)]">
                {post.excerpt}
              </p>
              <Link
                href={`/tools/${post.slug}`}
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
