"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LogoMark, Wordmark } from "@/components/Logo";
import { SPOTIFY_URL } from "@/lib/platforms";

const links = [
  { href: "/#episoden", label: "Episoden" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--accent-soft)]/15 bg-[var(--background)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={40} />
          <Wordmark className="text-xl" />
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-medium sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SPOTIFY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent)] px-[18px] py-[9px] text-sm font-semibold text-[var(--background)] transition-colors hover:bg-[var(--accent-dark)]"
          >
            Jetzt hören
          </a>
        </nav>

        <button
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-[var(--foreground)]" />
          <span className="h-0.5 w-6 bg-[var(--foreground)]" />
          <span className="h-0.5 w-6 bg-[var(--foreground)]" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-[var(--accent-soft)]/15 px-6 py-4 text-sm font-medium sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                pathname === link.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--foreground)]/80"
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SPOTIFY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block w-fit rounded-full bg-[var(--accent)] px-[18px] py-[9px] text-sm font-semibold text-[var(--background)]"
          >
            Jetzt hören
          </a>
        </nav>
      )}
    </header>
  );
}
