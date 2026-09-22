import type { Metadata } from "next";
import Link from "next/link";
import MediaCarousel from "@/components/MediaCarousel";

export const metadata: Metadata = {
  title: "Manchmal sind die spontanen Entscheidungen einfach die besten – Mach's eifach",
  description:
    "Ein spontanes Wochenende beim Treffen der Digital Nomads Schweiz: neue Perspektiven, gute Gespräche und ein Barbecue am Strand, und warum genau solche Begegnungen einer der Gründe sind, weshalb es diesen Podcast gibt.",
};

const media = [
  {
    src: "/blog/digital-nomads-treffen/dinner.jpg",
    alt: "Abendessen am Freitag beim Digital-Nomads-Treffen",
    caption: "Aus «ein bisschen arbeiten» wurde am Freitagabend ziemlich wenig.",
  },
  {
    src: "/blog/digital-nomads-treffen/strand.jpg",
    alt: "Barbecue am Strand mit Sonnenuntergang beim Digital-Nomads-Treffen",
    caption: "Barbecue am Strand, kurz vor Sonnenuntergang.",
  },
];

export default function DigitalNomadsTreffenPost() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link href="/blog" className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]">
        ← Alle Beiträge
      </Link>

      <div className="mt-6 flex items-center gap-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        <span className="text-[13px] font-semibold tracking-wide text-[var(--accent-soft)] uppercase">
          Persönlich · Digital Nomads Treffen
        </span>
      </div>

      <h1 className="mt-5 text-[32px] font-bold leading-tight sm:text-[40px]">
        Manchmal sind die spontanen Entscheidungen einfach die besten
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        Dieses Wochenende sind wir zum Treffen der Digital Nomads Schweiz gefahren und haben dort
        unglaublich viele spannende Menschen kennengelernt.
      </p>

      <p className="mt-4 text-[13px] text-[var(--muted-2)]">21. September 2026 · 3 Min. Lesezeit</p>

      <div className="mx-auto mt-8 max-w-sm">
        <MediaCarousel items={media} />
      </div>

      <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <p>
          Menschen, die ähnlich ticken wie wir. Die Dinge ausprobieren, ihr eigenes Ding machen und
          ihren eigenen Weg gehen.
        </p>
        <p>
          Am Freitag wollten wir eigentlich auch ein bisschen arbeiten. Daraus wurde dann eher
          wenig, weil die Gespräche und der Austausch einfach viel spannender waren. Neue
          Perspektiven, spannende Geschichten und richtig gute Begegnungen.
        </p>
        <p>
          Abends zusammen essen und am Samstag noch ein Barbecue am Strand. Musik, Lagerfeuer, gute
          Gespräche und einfach eine richtig schöne Stimmung. Was will man mehr?
        </p>
        <p>
          Und genau solche Begegnungen sind auch einer der Gründe, weshalb wir unseren Podcast
          «Mach's eifach» gestartet haben. Um uns mit Gleichgesinnten zu verbinden. Um spannende
          Geschichten zu teilen. Und hoffentlich auch andere Menschen ein bisschen dazu zu
          inspirieren, ihren eigenen Weg zu gehen und den Schritt zu wagen, ihr eigenes Ding zu
          machen.
        </p>
        <p>
          Denn genau darum geht es für uns am Ende: Menschen kennenlernen, voneinander lernen und
          sich gegenseitig ermutigen, einfach mal zu machen.
        </p>
      </div>
    </div>
  );
}
