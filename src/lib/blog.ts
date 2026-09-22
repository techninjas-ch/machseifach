export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export const blogPosts: BlogPostMeta[] = [
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
