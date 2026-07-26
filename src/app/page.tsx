import Image from "next/image";
import Link from "next/link";
import { episodes } from "@/lib/episodes";
import { SPOTIFY_URL, APPLE_URL, YOUTUBE_URL, platforms } from "@/lib/platforms";

export default function Home() {
  const latest = episodes.slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 px-6 py-16 sm:py-24 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-block rounded-full border border-[var(--accent-soft)]/35 px-3.5 py-1.5 text-[13px] tracking-wide text-[var(--accent-soft)] uppercase">
            Der Podcast für dein eigenes Ding
          </div>
          <h1 className="m-0 mb-5 text-[44px] leading-[1.05] font-bold tracking-tight sm:text-[58px]">
            Mach&apos;s{" "}
            <span className="font-[family-name:var(--font-caveat)] text-[1.15em] text-[var(--accent-soft)]">
              eifach
            </span>
            .
          </h1>
          <p className="m-0 mb-8 max-w-[520px] text-lg leading-relaxed text-[var(--muted)]">
            Der Podcast über Selbstständigkeit, Unternehmertum und ein selbstbestimmtes Leben. Wir
            sprechen mit Menschen, die ihren eigenen Weg gehen, Ideen umsetzen und nicht auf den
            perfekten Moment warten.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--accent)] px-6 py-3.5 text-[15px] font-semibold text-[var(--background)] transition-colors hover:bg-[var(--accent-dark)]"
            >
              Auf Spotify hören
            </a>
            <a
              href={APPLE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-[1.5px] border-[var(--accent)] px-6 py-3.5 text-[15px] font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/5"
            >
              Auf Apple Podcasts
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="float-slow absolute -inset-4.5 rounded-full bg-[radial-gradient(circle,rgba(76,90,58,0.14),transparent_70%)]" />
          <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-full shadow-[0_30px_60px_-20px_rgba(58,69,48,0.4)]">
            <Image src="/podcast-logo.png" alt="Mach's eifach Podcast" fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* PLATFORM STRIP */}
      <div className="bg-[var(--accent)] px-6 py-5.5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-12">
          <span className="text-sm tracking-wide text-[var(--on-dark-muted)] uppercase">
            Überall zu hören:
          </span>
          {platforms.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-semibold text-[var(--background)] transition-colors hover:text-[var(--on-dark-label)]"
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>

      {/* EPISODES */}
      <div id="episoden" className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-14 text-center">
          <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
            Neueste Folgen
          </div>
          <h2 className="mt-1.5 text-[38px] font-bold">Jetzt reinhören</h2>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {latest.map((ep) => (
            <div
              key={ep.number}
              className="flex items-start gap-5 rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-7"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-[var(--background)]">
                {String(ep.number).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="mb-1.5 text-[13px] text-[var(--muted-2)]">{ep.duration}</div>
                <h3 className="m-0 mb-2 text-xl font-bold">{ep.title}</h3>
                <p className="m-0 mb-3.5 text-[15px] leading-relaxed text-[var(--muted)]">
                  {ep.description}
                </p>
                <a
                  href={ep.spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
                >
                  Anhören →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/episoden"
            className="rounded-full border-[1.5px] border-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/5"
          >
            Alle Episoden ansehen
          </Link>
        </div>
      </div>

      {/* ABOUT TEASER */}
      <div className="bg-[var(--accent)] px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center gap-4">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--background)]/15 bg-black/10 sm:h-40 sm:w-40">
              <Image
                src="/mirjam.png"
                alt="Mirjam"
                width={160}
                height={160}
                className="h-full w-full translate-x-1 object-contain"
              />
            </div>
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--background)]/15 sm:h-40 sm:w-40">
              <Image
                src="/patrick.jpg"
                alt="Patrick"
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--on-dark-label)]">
              Über uns
            </div>
            <h2 className="mt-1.5 mb-5 text-[34px] font-bold text-[var(--background)]">
              Die Stimmen hinter dem Mikro
            </h2>
            <p className="m-0 mb-6 max-w-[560px] text-[17px] leading-relaxed text-[var(--on-dark-muted)]">
              Mirjam und Patrick teilen ihre eigenen Erfahrungen und die von Gästen, die ihren Weg
              in die Selbstständigkeit gegangen sind – mit allem, was dazugehört.
            </p>
            <Link
              href="/ueber-uns"
              className="rounded-full bg-[var(--background)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--surface)]"
            >
              Mehr über uns
            </Link>
          </div>
        </div>
      </div>

      {/* NEWSLETTER + CONTACT */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
            Keine Folge verpassen
          </div>
          <h2 className="mt-1.5 mb-4.5 text-[32px] font-bold">Newsletter abonnieren</h2>
          <p className="m-0 mb-6 max-w-[420px] text-base leading-relaxed text-[var(--muted)]">
            Trag dich ein und wir schicken dir neue Folgen, Gästetipps und Behind-the-Scenes
            direkt ins Postfach.
          </p>
          <form className="flex max-w-[420px] gap-2.5">
            <input
              type="email"
              placeholder="deine@email.ch"
              className="flex-1 rounded-full border-[1.5px] border-[var(--accent-soft)]/30 bg-[var(--surface)] px-[18px] py-3.5 text-[15px]"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full border-none bg-[var(--accent)] px-6 py-3.5 text-[15px] font-semibold text-[var(--background)] transition-colors hover:bg-[var(--accent-dark)]"
            >
              Anmelden
            </button>
          </form>
        </div>
        <div>
          <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
            Kontakt
          </div>
          <h2 className="mt-1.5 mb-4.5 text-[32px] font-bold">Sag hallo</h2>
          <p className="m-0 mb-5 max-w-[420px] text-base leading-relaxed text-[var(--muted)]">
            Fragen, Gästevorschläge oder Kooperationsanfragen? Meld dich bei uns.
          </p>
          <Link
            href="/kontakt"
            className="text-base font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
          >
            Zur Kontaktseite →
          </Link>
        </div>
      </div>
    </div>
  );
}
