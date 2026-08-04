import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – Mach's eifach",
  description:
    "Lerne Mirjam und Patrick kennen, die Menschen hinter dem Podcast Mach's eifach.",
};

const LINKEDIN_MIRJAM = "https://www.linkedin.com/in/mirjam-g%C3%A4mperli/";
const WEBSITE_MIRJAM = "https://www.mirjamgaemperli.com/";
const LINKEDIN_PATRICK =
  "https://www.linkedin.com/in/patrick-christen-b5a52b89/?skipRedirect=true";
const WEBSITE_PATRICK = "https://patrickchristen.com";
const WEBSITE_TECHNINJAS = "https://techninjas.ch/";
const WEBSITE_SPARFUCHS = "https://sparfuchs24.ch/";

const linkClass =
  "text-sm font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 transition-colors hover:text-[var(--accent-dark)] hover:decoration-[var(--accent-dark)]/40";

const hosts = [
  {
    name: "Mirjam",
    responsibility: "Struktur, Details & die guten Fragen",
    image: "/mirjam.png",
    imageClass: "object-contain translate-x-2",
    imageWrapperClass: "bg-black/5",
    paragraphs: [
      "Mirjam hat ihren eigenen Weg genommen: vom Sportgymnasium über ein Lebensmitteltechnologie-Studium bis zu einem Sprachaufenthalt in Australien, bevor sie den Schritt in die Selbstständigkeit gewagt hat.",
      "Durch ihre Erfahrung im Projektmanagement und in der Leitung eines Technikteams weiss sie, was es braucht, damit aus einer Idee auch wirklich etwas wird. Genau diesen Blick bringt sie auch in den Podcast ein.",
    ],
    highlight:
      "Kein ewiges Abwägen. Sondern der Mut, den eigenen Weg einfach zu gehen.",
    personalNote:
      "Abseits vom Podcast findet man Mirjam oft auf dem Tennisplatz, auf Reisen oder draussen in der Natur.",
    links: [
      { href: LINKEDIN_MIRJAM, label: "LinkedIn" },
      { href: WEBSITE_MIRJAM, label: "mirjamgaemperli.com" },
      { href: WEBSITE_TECHNINJAS, label: "Tech Ninjas" },
      { href: WEBSITE_SPARFUCHS, label: "Sparfuchs24" },
    ],
  },
  {
    name: "Patrick",
    responsibility: "Technik & Umsetzung",
    image: "/patrick.jpg",
    imageClass: "object-cover",
    imageWrapperClass: "",
    paragraphs: [
      "Patrick wollte ursprünglich alles andere, als den ganzen Tag vor einem Computer zu sitzen. Über den Umweg als Automatiker landete er schliesslich in der Softwareentwicklung und ist seit über zehn Jahren dabei.",
      "Der Schritt in die Selbstständigkeit war für ihn die logische Konsequenz: mehr Fokus, weniger Ablenkung und die Freiheit, Dinge auf seine eigene Art anzugehen.",
    ],
    highlight:
      "Kein perfekter Plan. Einfach machen und unterwegs daraus lernen.",
    personalNote:
      "Wenn Patrick nicht gerade an einer neuen Podcastfolge arbeitet, steht er meistens auf dem Tennisplatz.",
    links: [
      { href: LINKEDIN_PATRICK, label: "LinkedIn" },
      { href: WEBSITE_PATRICK, label: "patrickchristen.com" },
      { href: WEBSITE_TECHNINJAS, label: "Tech Ninjas" },
      { href: WEBSITE_SPARFUCHS, label: "Sparfuchs24" },
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
        Mach&apos;s eifach ist der Podcast über Selbstständigkeit, Unternehmertum und
        ein selbstbestimmtes Leben.
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        Wir sprechen mit spannenden Persönlichkeiten, die ihren eigenen Weg
        gehen, Ideen umsetzen und nicht auf den perfekten Moment warten. Dabei
        geht es um mutige Entscheidungen, ortsunabhängiges Arbeiten,
        persönliche Erfahrungen und die Realität hinter dem Schritt in die
        Selbstständigkeit.
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
            Wir haben beide unterschiedliche Wege in die Selbstständigkeit
            gefunden, und genau das wollten wir teilen. Nicht die eine
            perfekte Formel, sondern echte Geschichten, Umwege und die
            Momente, in denen man sich einfach getraut hat.
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
