import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – Mach's eifach",
  description:
    "Lerne Mirjam und Patrick kennen – die Menschen hinter dem Podcast Mach's eifach.",
};

const LINKEDIN_MIRJAM = "https://www.linkedin.com/in/mirjam-g%C3%A4mperli/";
const WEBSITE_MIRJAM = "https://www.mirjamgaemperli.com/";
const LINKEDIN_PATRICK =
  "https://www.linkedin.com/in/patrick-christen-b5a52b89/?skipRedirect=true";
const WEBSITE_PATRICK = "https://patrickchristen.com";

const linkClass =
  "text-sm font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 transition-colors hover:text-[var(--accent-dark)] hover:decoration-[var(--accent-dark)]/40";

const hosts = [
  {
    name: "Mirjam",
    responsibility: "Projektführung, Details & Kommunikation",
    image: "/mirjam.png",
    imageClass: "object-contain translate-x-2",
    imageWrapperClass: "bg-black/5",
    paragraphs: [
      "Mirjam sorgt dafür, dass Projekte strukturiert und angenehm ablaufen. Sie behält den Überblick, hört genau hin und achtet auf die Details, die am Ende den Unterschied machen.",
      "Durch ihre Erfahrung im Projektmanagement und in der Leitung eines Technikteams weiss sie, wo Projekte ins Stocken geraten können und wie sich Abläufe einfacher und klarer gestalten lassen.",
    ],
    highlight:
      "Kein Chaos. Keine komplizierten Prozesse. Sondern eine Zusammenarbeit, bei der man sich gut aufgehoben fühlt.",
    personalNote:
      "Abseits vom Podcast findet man Mirjam oft auf dem Tennisplatz, auf Reisen oder draussen in der Natur.",
    links: [
      { href: LINKEDIN_MIRJAM, label: "LinkedIn" },
      { href: WEBSITE_MIRJAM, label: "mirjamgaemperli.com" },
    ],
  },
  {
    name: "Patrick",
    responsibility: "Technik & Entwicklung",
    image: "/patrick.jpg",
    imageClass: "object-cover",
    imageWrapperClass: "",
    paragraphs: [
      "Patrick entwickelt die technischen Lösungen hinter unseren Projekten. Dabei ist ihm wichtig, dass sie nicht nur modern sind, sondern zuverlässig funktionieren, verständlich bleiben und langfristig wartbar sind.",
      "Über zehn Jahre Erfahrung in der Softwareentwicklung haben ihm gezeigt, dass die beste Lösung nicht automatisch die komplizierteste ist. Er liebt es, Probleme zu analysieren, Abläufe zu automatisieren und aus komplexen Anforderungen einfache Lösungen zu machen.",
    ],
    highlight:
      "Kein unnötiges Over-Engineering. Keine vermeidbaren Abhängigkeiten. Einfach Technik, die funktioniert.",
    personalNote:
      "Wenn Patrick nicht gerade an einer Lösung tüftelt, steht er meistens auf dem Tennisplatz oder arbeitet an einer neuen Podcastfolge.",
    links: [
      { href: LINKEDIN_PATRICK, label: "LinkedIn" },
      { href: WEBSITE_PATRICK, label: "patrickchristen.com" },
    ],
  },
] as const;

export default function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
        Wer wir sind
      </div>
      <h1 className="mt-1.5 text-[38px] font-bold">Über uns</h1>
      <p className="mt-4 text-xl font-medium text-[var(--foreground)]">
        Zwei Perspektiven. Ein Podcast.
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        &apos;Mach&apos;s eifach&apos; ist entstanden, weil wir überzeugt sind: die
        besten Lösungen sind oft die einfachsten. Mirjam und Patrick nehmen in
        jeder Folge ein Thema auseinander – ohne Fachchinesisch, ohne
        Komplexität.
      </p>

      <div className="mt-12 grid gap-7 lg:grid-cols-2">
        {hosts.map((host) => (
          <article
            key={host.name}
            className="rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-6 sm:p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`relative mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-[var(--accent)]/15 ${host.imageWrapperClass}`}
              >
                <Image
                  src={host.image}
                  alt={host.name}
                  width={160}
                  height={160}
                  className={`h-full w-full ${host.imageClass}`}
                />
              </div>
              <h2 className="text-2xl font-bold">{host.name}</h2>
              <p className="mt-2 text-sm text-[var(--muted-2)]">{host.responsibility}</p>
            </div>

            <div className="mt-6 space-y-4 text-[var(--muted)]">
              {host.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="font-semibold text-[var(--foreground)]">{host.highlight}</p>
              <p>{host.personalNote}</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[var(--accent-soft)]/12 pt-5">
              {host.links.map((link, index) => (
                <span key={link.href} className="inline-flex items-center gap-x-3">
                  {index > 0 ? (
                    <span aria-hidden className="text-[var(--muted-2)]/60">
                      ·
                    </span>
                  ) : null}
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold">Warum wir das machen</h2>
        <div className="mt-5 space-y-4 text-[var(--muted)]">
          <p>
            Wir arbeiten als Team. Patrick bringt die technische Tiefe, Mirjam
            den Projekt-Flow und das Gespür für das, was wirklich gebraucht wird.
            Genau diese Kombination wollen wir auch im Podcast teilen.
          </p>
          <p className="font-semibold text-[var(--foreground)]">
            Kein Alleingang. Keine Einzelkämpfer-Mentalität. Einfach zwei
            Perspektiven, die sich ergänzen.
          </p>
        </div>
      </section>
    </div>
  );
}
