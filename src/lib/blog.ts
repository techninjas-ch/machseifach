export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export const blogPosts: BlogPostMeta[] = [
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
