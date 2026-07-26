import { LogoMark, Wordmark } from "@/components/Logo";
import { platforms, INSTAGRAM_URL } from "@/lib/platforms";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <LogoMark size={34} />
          <Wordmark className="text-[22px]" color="var(--background)" />
        </div>
        <div className="flex flex-wrap gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--on-dark-label)] transition-colors hover:text-[var(--background)]"
          >
            Instagram
          </a>
          {platforms.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--on-dark-label)] transition-colors hover:text-[var(--background)]"
            >
              {p.label}
            </a>
          ))}
        </div>
        <span className="text-[13px] text-[var(--dark-muted)]">
          © {new Date().getFullYear()}{" "}Mach&apos;s eifach Podcast
        </span>
      </div>
    </footer>
  );
}
