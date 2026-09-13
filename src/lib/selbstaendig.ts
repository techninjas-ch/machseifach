export type SelbstaendigPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export const selbstaendigPosts: SelbstaendigPostMeta[] = [
  {
    slug: "geschaeftskonto-vergleich-schweiz",
    title: "Geschäftskonto für Selbstständige: Die Anbieter im Vergleich",
    excerpt:
      "PostFinance, UBS, Raiffeisen oder doch eine Neobank wie Yapeal, Wise Business oder Relio? Wir vergleichen Gebühren und Funktionen der wichtigsten Geschäftskonto-Anbieter für Einzelfirmen und KMU in der Schweiz.",
    date: "2026-09-13",
    readingTime: "9 Min.",
  },
  {
    slug: "einzelfirma-gruenden-schweiz",
    title: "Einzelfirma gründen in der Schweiz: So sind wir vorgegangen",
    excerpt:
      "Kein Startkapital, kein Notar, aber ein Punkt bei der AHV-Anmeldung, der uns am Anfang nicht klar war. Unsere Schritt-für-Schritt-Erfahrung zur Einzelfirmengründung.",
    date: "2026-08-23",
    readingTime: "12 Min.",
  },
];
