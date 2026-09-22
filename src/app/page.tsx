import Image from "next/image";
import Link from "next/link";
import { episodes, isPublished } from "@/lib/episodes";
import { SPOTIFY_URL, APPLE_URL, YOUTUBE_URL, platforms, spotifyThumbnailUrl } from "@/lib/platforms";
import NextEpisodeTeaser from "@/components/NextEpisodeTeaser";
import CurrentEpisodeSpotlight from "@/components/CurrentEpisodeSpotlight";

// Episodes can carry a future `publishAt`; re-check on every request so newly
// published episodes (and the teaser) flip visible at the right time.
export const dynamic = "force-dynamic";

export default async function Home() {
  const latest = episodes.filter(isPublished).slice(0, 3);
  const thumbnails = Object.fromEntries(
    await Promise.all(
      latest.map(async (ep) => [ep.number, ep.spotifyUrl ? await spotifyThumbnailUrl(ep.spotifyUrl) : null]),
    ),
  );
  // Prefer the newest episode that already has a Spotify photo (a brand-new
  // episode often doesn't have one yet for the first day or two), so the
  // hero shows a real face instead of falling back to the logo too eagerly.
  const currentEpisode = latest.find((ep) => thumbnails[ep.number]) ?? latest[0];
  const heroThumbnail = currentEpisode ? thumbnails[currentEpisode.number] : null;

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
          <div className="float-slow absolute -inset-4.5 rounded-[40px] bg-[radial-gradient(circle,rgba(76,90,58,0.14),transparent_70%)]" />
          {currentEpisode && heroThumbnail ? (
            <Link
              href={`/episoden/${currentEpisode.slug}`}
              className="group relative mx-auto block aspect-[4/3] w-full max-w-[480px]"
            >
              <div className="h-full w-full overflow-hidden rounded-[28px] shadow-[0_30px_60px_-20px_rgba(58,69,48,0.4)] transition-transform group-hover:scale-[1.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroThumbnail} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[var(--background)] px-4 py-2 text-[13px] font-semibold whitespace-nowrap text-[var(--foreground)] shadow-[0_10px_25px_-8px_rgba(58,69,48,0.5)]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                Aktuelle Folge{currentEpisode.guest ? ` · ${currentEpisode.guest.name}` : ""}
              </div>
            </Link>
          ) : (
            <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-full shadow-[0_30px_60px_-20px_rgba(58,69,48,0.4)]">
              <Image src="/podcast-logo.png" alt="Mach's eifach Podcast" fill className="object-cover" priority />
            </div>
          )}
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

      <CurrentEpisodeSpotlight />

      <NextEpisodeTeaser />

      {/* EPISODES */}
      <div id="episoden" className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-14 text-center">
          <div className="font-[family-name:var(--font-caveat)] text-[32px] font-bold text-[var(--accent-soft)]">
            Neueste Folgen
          </div>
          <h2 className="mt-1.5 text-[38px] font-bold">Jetzt reinhören</h2>
        </div>
        <div className="flex flex-col gap-7">
          {latest.map((ep) => (
            <div
              key={ep.number}
              className="flex flex-col items-start gap-5 rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-7 sm:flex-row"
            >
              <div className="relative h-28 w-48 shrink-0 sm:h-36 sm:w-64">
                {thumbnails[ep.number] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumbnails[ep.number]!}
                    alt=""
                    className="h-full w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[var(--accent)] text-lg font-bold text-[var(--background)]">
                    {String(ep.number).padStart(2, "0")}
                  </div>
                )}
                {thumbnails[ep.number] && (
                  <div className="absolute -bottom-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-[var(--background)] ring-2 ring-[var(--surface)]">
                    {String(ep.number).padStart(2, "0")}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="mb-1.5 text-[13px] text-[var(--muted-2)]">{ep.duration}</div>
                <h3 className="m-0 mb-2 text-xl font-bold">
                  <Link href={`/episoden/${ep.slug}`} className="hover:text-[var(--accent)]">
                    {ep.title}
                  </Link>
                </h3>
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
              in die Selbstständigkeit gegangen sind, mit allem, was dazugehört.
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
