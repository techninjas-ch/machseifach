export type Episode = {
  number: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  spotifyUrl: string;
};

export const episodes: Episode[] = [
  {
    number: 3,
    title: "Verkauf dich nicht unter Wert: Christian Rüegg über 15 Jahre Selbstständigkeit",
    date: "2026-07-22",
    duration: "56 Min",
    description:
      "Christian Rüegg (StaySafe) erzählt von seinem Weg vom Koch über die Gastronomie und Sicherheitsbranche bis zum eigenen Unternehmen: über faire Preise, echte Beziehungen statt Social-Media-Zahlen und warum man sich nicht unter Wert verkaufen sollte.",
    spotifyUrl: "https://open.spotify.com/episode/0aKu743uCs7ZCl7U0yDcy6",
  },
  {
    number: 2,
    title: "Patricks Weg vom Automatiker zur Selbstständigkeit",
    date: "2026-07-15",
    duration: "29 Min",
    description:
      "Patrick wollte ursprünglich auf keinen Fall den ganzen Tag vor einem Computer sitzen. Wie er trotzdem zum Softwareentwickler wurde, warum ihm konzentriertes Arbeiten so wichtig ist und wie der Schritt in die Selbstständigkeit gelang.",
    spotifyUrl: "https://open.spotify.com/episode/6jmjDXtjEue5voQHyVROOa",
  },
  {
    number: 1,
    title: "Mirjams Weg vom Sportgymnasium zur Selbstständigkeit",
    date: "2026-07-08",
    duration: "32 Min",
    description:
      "Mirjams Weg vom Sportgymnasium über das Lebensmitteltechnologie-Studium und einen Sprachaufenthalt in Australien bis zur Selbstständigkeit, inklusive der ersten finanziellen Lektionen und wie sie ihre Leidenschaft gefunden hat.",
    spotifyUrl: "https://open.spotify.com/episode/6wkBrWFlVmWsi60fvaeqyV",
  },
];
