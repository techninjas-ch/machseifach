export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "weltreise-brasilien-rueckblick",
    title: "Bevor es bald wieder losgeht: unser Rückblick auf Brasilien",
    excerpt:
      "Von November 2024 bis Ende Mai 2025 waren wir auf Weltreise. Ein paar Highlights aus unserem ersten Land: Rio de Janeiro, die Copacabana, ein Beachvolleyball-Weltstar und die Wasserfälle von Foz do Iguaçu.",
    date: "2026-09-28",
    readingTime: "4 Min.",
  },
  {
    slug: "digital-nomads-treffen",
    title: "Manchmal sind die spontanen Entscheidungen einfach die besten",
    excerpt:
      "Ein spontanes Wochenende beim Treffen der Digital Nomads Schweiz: neue Perspektiven, gute Gespräche und ein Barbecue am Strand, und warum genau solche Begegnungen einer der Gründe sind, weshalb es diesen Podcast gibt.",
    date: "2026-09-21",
    readingTime: "3 Min.",
  },
  {
    slug: "buchhaltung-selbstaendige-kmu",
    title: "Buchhaltung für Selbständige und KMU: Pflicht, Tools und wann sich ein Treuhänder lohnt",
    excerpt:
      "Was das Gesetz verlangt, welche Software zu welcher Betriebsgrösse passt, und ab wann Selbermachen an Grenzen stösst.",
    date: "2026-08-10",
    readingTime: "10 Min.",
  },
  {
    slug: "unternehmensgruendung-schweiz",
    title: "Unternehmen gründen in der Schweiz: die Rechtsform als erste grosse Entscheidung",
    excerpt:
      "Ein Überblick über Einzelfirma, Personengesellschaften, GmbH, AG und die Sonderformen, mit Kapital, Haftung, Steuern und den Pflichten, die 2026 neu hinzukommen.",
    date: "2026-08-10",
    readingTime: "12 Min.",
  },
];
