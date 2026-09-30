import type { Metadata } from "next";
import Link from "next/link";
import MediaCarousel from "@/components/MediaCarousel";

export const metadata: Metadata = {
  title: "Bevor es bald wieder losgeht: unser Rückblick auf Brasilien – Mach's eifach",
  description:
    "Von November 2024 bis Ende Mai 2025 waren wir auf Weltreise. Ein paar Highlights aus unserem ersten Land: Rio de Janeiro, die Copacabana, ein Beachvolleyball-Weltstar und die Wasserfälle von Foz do Iguaçu.",
};

const INSTAGRAM_POST_URL = "https://www.instagram.com/p/Dd0pOm8juwE/";

const media = [
  {
    src: "/blog/weltreise-brasilien-rueckblick/rio-aussicht.jpg",
    alt: "Aussicht über Rio de Janeiro mit Zuckerhut und Bucht",
    caption: "Blick über Rio: Zuckerhut, Bucht und die ganze Stadt.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/ankunft-flughafen.jpg",
    alt: "«Bem-vindo ao Brasil»-Schriftzug am Flughafen",
    caption: "Willkommen in Brasilien, gleich nach der Landung.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/spiegel-fotobox.jpg",
    alt: "Patrick in einer Spiegel-Fotobox",
    caption: "Eine der skurrileren Fotoecken, die wir unterwegs entdeckt haben.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/copacabana-palmen.jpg",
    alt: "Palmen und Strand an der Copacabana",
    caption: "An der Copacabana ist ständig etwas los.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/feijoada.jpg",
    alt: "Feijoada, ein brasilianischer Bohneneintopf, mit Beilagen",
    caption: "Feijoada, der brasilianische Bohneneintopf, mit allem Drum und Dran.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/caipirinha-strand.jpg",
    alt: "Mirjam mit einem Caipirinha in einer Strandbar am Abend",
    caption: "Ein Caipirinha für knapp 4 Franken macht Rio nicht schlechter.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/affen-wald.jpg",
    alt: "Zwei Affen im Wald mitten in Rio de Janeiro",
    caption: "Affen im Wald, mitten in der Stadt.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/selaron-treppe.jpg",
    alt: "Mirjam auf der bunten Escadaria Selarón in Rio",
    caption: "Die berühmte Escadaria Selarón.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/christo-redentor.jpg",
    alt: "Patrick und Mirjam beim Cristo Redentor auf dem Corcovado",
    caption: "Oben beim Cristo Redentor, mit Blick über ganz Rio.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/aussicht-affe.jpg",
    alt: "Aussicht vom Corcovado mit einem Affen auf dem Geländer",
    caption: "Aussicht vom Corcovado, mit tierischem Besuch.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/strand-tag.jpg",
    alt: "Die Copacabana bei Tag",
    caption: "Die Copacabana nochmals bei Tageslicht.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/agatha-rippel.jpg",
    alt: "Patrick und Mirjam mit Beachvolleyball-Weltmeisterin Ágatha Rippel",
    caption:
      "Zufällig bei einem Beachvolleyball-Turnier gelandet: mit Ágatha Rippel, Weltmeisterin von 2015 und Olympia-Silbermedaillengewinnerin.",
  },
  {
    src: "/blog/weltreise-brasilien-rueckblick/iguacu-wasserfaelle.jpg",
    alt: "Die Wasserfälle von Foz do Iguaçu von der brasilianischen Seite",
    caption: "Die Wasserfälle von Foz do Iguaçu, von der brasilianischen Seite aus.",
  },
];

export default function WeltreiseBrasilienRueckblickPost() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link href="/blog" className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]">
        ← Alle Beiträge
      </Link>

      <div className="mt-6 flex items-center gap-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        <span className="text-[13px] font-semibold tracking-wide text-[var(--accent-soft)] uppercase">
          Persönlich · Weltreise
        </span>
      </div>

      <h1 className="mt-5 text-[32px] font-bold leading-tight sm:text-[40px]">
        Bevor es bald wieder losgeht: unser Rückblick auf Brasilien
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        Von November 2024 bis Ende Mai 2025 waren wir auf Weltreise. Bevor es bei uns schon bald
        wieder losgeht, blicken wir nochmals auf ein paar Highlights zurück, angefangen bei unserem
        ersten Land: Brasilien.
      </p>

      <p className="mt-4 text-[13px] text-[var(--muted-2)]">28. September 2026 · 4 Min. Lesezeit</p>

      <div className="mx-auto mt-8 max-w-sm">
        <MediaCarousel items={media} />
        <a
          href={INSTAGRAM_POST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
        >
          Original auf Instagram ansehen →
        </a>
      </div>

      <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <p>
          Unser erstes richtiges Ziel war Rio de Janeiro, und was für ein Start. Patrick war schon
          einmal dort, für Mirjam war es das erste Mal. Die Energie dieser Stadt ist einfach
          speziell.
        </p>
        <p>
          An der Copacabana ist ständig etwas los: Fussball, Beachvolleyball, Jogger, Leute im Meer,
          Musik in den Strandbars und Menschen, die tanzen. Die Lebensfreude ist überall spürbar.
          Zufällig landeten wir sogar bei einem Beachvolleyball-Turnier, bei dem Ágatha Rippel,
          Weltmeisterin von 2015 und Olympia-Silbermedaillengewinnerin, eines ihrer letzten Turniere
          spielte. Danach konnten wir noch ein Foto mit ihr abstauben.
        </p>
        <p>
          Und ein Caipirinha für knapp 4 Franken macht Rio natürlich auch nicht schlechter. Dazu
          diese Kulisse: Zuckerhut, Corcovado mit dem Cristo Redentor, Berge, Meer und Aussichtspunkte
          über die ganze Stadt.
        </p>
        <p>
          Wir waren viel zu Fuss, mit der Metro und teilweise mit Uber unterwegs. Vor Rio hatten wir
          wegen der vielen Geschichten über die Sicherheit etwas Respekt, haben uns persönlich aber
          nie wirklich unsicher gefühlt.
        </p>
        <p>
          Später auf unserer Reise kamen wir nochmals nach Brasilien, diesmal nach Foz do Iguaçu. Die
          Wasserfälle sind definitiv einen Besuch wert. Man sagt: Die Wasserfälle gehören
          Argentinien, aber Brasilien hat die Aussicht. Und tatsächlich ist der Blick von der
          brasilianischen Seite unglaublich.
        </p>
        <p>
          Eine kleine Erinnerung blieb uns ebenfalls: Patrick bat beim Eingang eine Mitarbeiterin,
          kurz auf unseren Koffer aufzupassen. Als Mirjam ihn wenig später holen wollte, sprang sie
          sofort auf und hielt sie davon ab. Auftrag erfüllt.
        </p>
        <p>
          Brasilien war ein ziemlich starker Start in unsere Weltreise, und trotzdem haben wir nur
          einen winzigen Teil dieses riesigen Landes gesehen. Wir kommen bestimmt nochmals zurück.
        </p>
        <p className="font-semibold text-[var(--foreground)]">
          Was sollten wir beim nächsten Mal in Brasilien unbedingt sehen?
        </p>
      </div>
    </div>
  );
}
