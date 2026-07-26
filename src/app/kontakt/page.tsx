import type { Metadata } from "next";
import { platforms } from "@/lib/platforms";

export const metadata: Metadata = {
  title: "Kontakt – Mach's eifach",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
        Sag hallo
      </div>
      <h1 className="mt-1.5 text-[38px] font-bold">Kontakt</h1>
      <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
        Feedback, Themenideen oder Kooperationsanfragen? Wir freuen uns über eine Nachricht.
      </p>

      <div className="mt-10 rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-6 sm:p-8">
        <a
          href="mailto:hallo@machseifach-podcast.ch"
          className="text-lg font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
        >
          hallo@machseifach-podcast.ch
        </a>
        <p className="mt-2 text-sm text-[var(--muted-2)]">
          Platzhalter-Adresse – bitte durch echte E-Mail ersetzen.
        </p>

        <hr className="my-6 border-[var(--accent-soft)]/12" />

        <p className="text-sm text-[var(--muted)]">
          Ihr findet uns auch auf{" "}
          {platforms.map((p, i) => (
            <span key={p.label}>
              {i > 0 && (i === platforms.length - 1 ? " und " : ", ")}
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
              >
                {p.label}
              </a>
            </span>
          ))}
          .
        </p>
      </div>
    </div>
  );
}
