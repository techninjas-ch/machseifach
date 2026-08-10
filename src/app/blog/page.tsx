import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – Mach's eifach",
  description: "Recherchen und Hintergründe rund um Selbstständigkeit und Unternehmertum in der Schweiz.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="mb-14 text-center">
        <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
          Neben dem Mikrofon
        </div>
        <h1 className="mt-1.5 text-[38px] font-bold">Blog</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Recherchen und Hintergründe rund um Selbstständigkeit und Unternehmertum in der Schweiz.
        </p>
      </div>

      <div className="flex flex-col gap-7">
        {blogPosts.map((post) => (
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
              <Link href={`/blog/${post.slug}`} className="hover:text-[var(--accent)]">
                {post.title}
              </Link>
            </h2>
            <p className="m-0 mb-3.5 text-[15px] leading-relaxed text-[var(--muted)]">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
            >
              Weiterlesen →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
