export type Guest = {
  name: string;
  role: string;
  bio: string;
  links: { label: string; href: string }[];
};

export type HostLinks = {
  name: string;
  links: { label: string; href: string }[];
};

export type Episode = {
  number: number;
  slug: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  spotifyUrl?: string;
  guest?: Guest;
  host?: HostLinks;
  summary?: string[];
  tips?: string[];
  /** ISO datetime (with timezone offset) before which this episode stays hidden site-wide. */
  publishAt?: string;
};

export function isPublished(episode: Episode): boolean {
  if (!episode.publishAt) return true;
  // In lokalem `next dev` immer sichtbar, damit wir Folgen vor dem
  // Release-Zeitpunkt noch anschauen können. Im echten Build/Deploy
  // (NODE_ENV=production) gilt das Zeit-Gate wie gewohnt.
  if (process.env.NODE_ENV !== "production") return true;
  return Date.now() >= new Date(episode.publishAt).getTime();
}

export const nextEpisode = {
  guestName: "Reto Wallimann",
  date: "2026-08-12T15:15:00+02:00",
};

export const episodes: Episode[] = [
  {
    number: 7,
    slug: "7-reto-wallimann-vom-hobby-zum-beruf",
    title:
      "Vom Hobby zum Beruf: Reto Wallimann über Bike-Guiding und Mental-Coaching (Teil 2)",
    date: "2026-08-19",
    duration: "1 Std 5 Min",
    publishAt: "2026-08-19T15:15:00+02:00",
    description:
      "Teil 2: Nach dem Verkauf seiner Firma machte Reto Wallimann seine grösste Leidenschaft zum Beruf, als Bike-Guide und Mental-Coach mit Hypnose-Ausbildung. Über den Sprung vom Hobby zum Business, warum 70 bis 90 % im Spitzensport mental entschieden wird und sein Lebensmotto: im schlimmsten Fall wird's eine Erfahrung.",
    guest: {
      name: "Reto Wallimann",
      role: "Bike- & Mental-Coach, mental-bike-trainer.ch",
      bio: "Reto lebt mit seiner Frau Luzia in Sachseln, mitten im geografischen Zentrum der Schweiz. Er baute eine Reinigungsfirma auf über 100 Angestellte auf und verkaufte sie 2022, bevor er seine Leidenschaft fürs Biken zum Beruf machte: heute ist er Swiss-Cycling-Guide und diplomierter Mental-Coach mit Hypnose-Ausbildung.",
      links: [
        { label: "mental-bike-trainer.ch", href: "https://www.mental-bike-trainer.ch/" },
        { label: "Instagram", href: "https://www.instagram.com/mental.bike.trainer/" },
        { label: "Facebook", href: "https://www.facebook.com/reto.wallimann" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/reto-wallimann-b36289108/",
        },
      ],
    },
    summary: [
      "Während eines zweimonatigen Sabbaticals mit seiner Frau in den Niederlanden 2023 wurde Reto klar: Was wäre, wenn er seine grösste Leidenschaft, das Biken, zum Beruf machen würde? Kaum zurück in der Schweiz, meldete er sich für die erste Ausbildung zum Swiss Cycling Guide an.",
      "Heute gibt er Fahrtechnik-Kurse für Mountainbike, Gravel und Rennvelo, von Kindern bis zu 75-Jährigen, und führt jedes Jahr Gruppenreisen nach Südafrika. Parallel dazu bildete er sich über mehrere Jahre zum Mentaltrainer, diplomierten Sportmentaltrainer und schliesslich Hypnose-Therapeuten weiter.",
      "Aktuell macht er die eidgenössische Berufsprüfung zum Mountainbike-Lehrer und eine weitere Ausbildung zum diplomierten Mental-Coach. Seine Kundschaft: rund 50 % Sport, 30 % privat, 20 % Business, meist über Mundpropaganda statt über Werbung.",
      "Neustes Projekt: Zusammen mit zwei Kollegen hat er kürzlich einen Bike-Shop in Sarnen übernommen und sitzt dort im Verwaltungsrat. Sein Erfolgsrezept bleibt dasselbe: im schlimmsten Fall wird es eine Erfahrung.",
    ],
    tips: [
      "Dein Marketing ist deine Arbeit: Reto hat kaum Werbung geschaltet, seine Kundschaft kam fast ausschliesslich über Mundpropaganda und Empfehlungen.",
      "Sei nicht der Chef, der alles besser kann: fördere Leute, die etwas gut können, statt alles selbst kontrollieren zu wollen.",
      "Lebe im Hier und Jetzt: 95 % dessen, wovor wir uns fürchten, tritt nie ein. Investier deine Energie lieber in den nächsten kleinen Schritt als in Sorgen über die Zukunft.",
    ],
  },
  {
    number: 6,
    slug: "6-reto-wallimann-vom-bauspengler-zum-firmenverkauf",
    title:
      "Im schlimmsten Fall wird's eine Erfahrung: Reto Wallimann vom Bauspengler zum Firmenverkauf (Teil 1)",
    date: "2026-08-12",
    duration: "58 Min",
    publishAt: "2026-08-12T15:15:00+02:00",
    description:
      "Teil 1: Reto Wallimann übernahm mit 27 eine kleine Reinigungsfirma neben seinem Job, baute sie zu einem 100-Personen-Betrieb aus und verkaufte sie 2022 an einen Mitarbeiter. Über den Weg dahin, eine persönliche Krise, eine dreiwöchige Solo-Wanderung durch die Schweizer Alpen und warum er nie ein ängstlicher Mensch war.",
    guest: {
      name: "Reto Wallimann",
      role: "Bike- & Mental-Coach, mental-bike-trainer.ch",
      bio: "Reto lebt mit seiner Frau Luzia in Sachseln, mitten im geografischen Zentrum der Schweiz. Er baute eine Reinigungsfirma auf über 100 Angestellte auf und verkaufte sie 2022, bevor er seine Leidenschaft fürs Biken zum Beruf machte: heute ist er Swiss-Cycling-Guide und diplomierter Mental-Coach mit Hypnose-Ausbildung.",
      links: [
        { label: "mental-bike-trainer.ch", href: "https://www.mental-bike-trainer.ch/" },
        { label: "Instagram", href: "https://www.instagram.com/mental.bike.trainer/" },
        { label: "Facebook", href: "https://www.facebook.com/reto.wallimann" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/reto-wallimann-b36289108/",
        },
      ],
    },
    summary: [
      "Reto machte 1990 eine Lehre als Bauspengler und später eine Handelsschule, weil er merkte, dass er nicht sein Leben lang aufs Dach wollte. 2009 wechselte er als Projektleiter ins Büro, bei der Kooperation Altnau für ein Holzheizwerk.",
      "2011 übernahm er die Reinigungsfirma Gschaffig AG, ursprünglich als 50-Prozent-Nebenjob gedacht, nach wenigen Monaten stieg er zu 100 % ein. Die Firma wuchs auf rund 100 Angestellte, mit Gebäudereinigung und -unterhalt für Architekten und Liegenschaften.",
      "2019 geriet er durch die Verantwortung für so viele Mitarbeitende in eine persönliche Krise. Nach vier Hypnosesitzungen entschied er sich für die Via Alpina, eine dreiwöchige Solo-Wanderung quer durch die Schweizer Alpen im Juli 2020, ganz ohne Musik oder Podcasts, nur um sich selbst zuzuhören.",
      "Am 1. März 2022 verkaufte er die Firma an einen langjährigen Mitarbeiter und arbeitete bis Ende 2022 noch zu 80 % für die Übergabe. Persönlich erzählt er offen von einem Schicksalsschlag aus seiner Kindheit: Als Baby verlor er durch einen Tumor sein linkes Auge, was ihn zu dem extrem positiven Menschen gemacht hat, der er heute ist.",
    ],
    tips: [
      "Wenn dir die Verantwortung über den Kopf wächst, nimm dir bewusst Zeit für dich, auch wenn das eine radikale Auszeit wie eine dreiwöchige Solo-Wanderung bedeutet.",
      "Gib Menschen, denen du vertraust, echte Verantwortung: Reto hat sein Wachstum vor allem dadurch geschafft, dass er gute Leute gefördert statt kontrolliert hat.",
      "Eine gute Übergabe braucht Vorbereitung, nicht Perfektion: Reto und sein Nachfolger waren sich in den ersten Minuten einig, weil die Übergabe langfristig vorbereitet war.",
    ],
  },
  {
    number: 5,
    slug: "5-michael-rohrer-schwingsport-selbststaendigkeit",
    title:
      "Warte nicht auf 100 % Sicherheit: Michael Rohrer über Schwingsport und den Sprung in die Vollzeit-Selbstständigkeit",
    date: "2026-08-05",
    duration: "1 Std 28 Min",
    publishAt: "2026-08-05T15:15:00+02:00",
    spotifyUrl: "https://open.spotify.com/episode/1YymoYD7bTw5ZXaLeqOeM6",
    description:
      "Michael Rohrer war jahrelang Schreiner, Chauffeur und Fitnesstrainer, bevor er sich als Athletiktrainer für Schwinger, Ringer und Judokas selbstständig machte. Über den Schwingsport, den schrittweisen Sprung in die Vollzeit-Selbstständigkeit und warum man nie auf die perfekte Sicherheit warten sollte.",
    guest: {
      name: "Michael Rohrer",
      role: "Athletiktrainer, Limitless Athletes",
      bio: "Michael ist in einem Bergdorf in Obwalden aufgewachsen und schwingt seit seinem zehnten Lebensjahr. Nach Lehren als Schreiner und einer Zeit als Chauffeur liess er sich zum Fitnesstrainer ausbilden und machte sich schrittweise selbstständig. Heute betreut er als Athletiktrainer Schwinger, Ringer und Judokas.",
      links: [
        { label: "limitless-athletes.ch", href: "https://www.limitless-athletes.ch/" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/limitless_athletes_by_michael/",
        },
        { label: "YouTube", href: "https://www.youtube.com/@Michl97" },
      ],
    },
    summary: [
      "Michael ist in einem kleinen Bergdorf in Obwalden aufgewachsen und schwingt seit seinem zehnten Lebensjahr, nachdem er den Eidgenössischen Schwingertag im Fernsehen gesehen hatte. Als Jungschwinger war er lange erfolglos, bis ihn der neue Partner seiner Mutter fürs Training begeisterte und er mit 16 seinen ersten Kranz gewann.",
      "Beruflich absolvierte er zunächst eine Schreinerlehre, arbeitete danach als Chauffeur und liess sich parallel zum Fitnesstrainer ausbilden. Im April 2025 wagte er den Sprung zu 20 % Selbstständigkeit neben einer 80-Prozent-Anstellung im Fitnessstudio.",
      "Über Instagram-Videos, die er zusammen mit einem befreundeten Werbefachmann produzierte, kamen die ersten Kundschaften, darunter Schwinger aus seinem eigenen Klub. Seit Juni 2025 ist er zu 100 % selbstständig als Athletiktrainer für Schwinger, Ringer und Judokas tätig.",
      "Sein Ziel: ein eigener Standort mit mehreren angestellten Trainern in der Zentralschweiz, und sportlich ein Kranz am Eidgenössischen Schwingfest 2028. Sein wichtigster Rat an alle, die mit der Selbstständigkeit liebäugeln: nicht auf 100 % Sicherheit warten, die kommt sowieso nie.",
    ],
    tips: [
      "Warte nicht auf 100 % Sicherheit, sie wird nie kommen. Irgendwann musst du den Schritt einfach wagen.",
      "Nutze dein direktes Netzwerk: Michaels erste Kundschaften kamen über Instagram und persönliche Kontakte, nicht über bezahlte Werbung.",
      "Hol dir Unterstützung, wo sie Sinn ergibt: Michael liess seine Videos von einem befreundeten Werbefachmann produzieren, statt alles allein zu stemmen.",
    ],
  },
  {
    number: 4,
    slug: "4-stefan-amport-mit-19-selbststaendig",
    title: "Mit 19 selbstständig: Stefan Amport über Mut, Fokus und ein vielseitiges Leben",
    date: "2026-07-29",
    duration: "1 Std 17 Min",
    description:
      "Stefan Amport hat mit 19 sein erstes Unternehmen gegründet. Wie er sich vom Webentwickler über eine Digitalagentur bis zum Coaching entwickelt hat, warum weniger Angebote manchmal zu mehr Umsatz führen und warum der erste Schritt wichtiger ist als der perfekte Plan.",
    spotifyUrl: "https://open.spotify.com/episode/4Pw4l0UWAt823c6nMyHN6f",
    guest: {
      name: "Stefan Amport",
      role: "Leadership & Business Coach, Work and Grow",
      bio: "Stefan hat mit 19 seine erste Firma gegründet und über zehn Jahre lang Webseiten und digitale Projekte umgesetzt. Aus einer Digitalagentur mit über 60 Mitarbeitenden heraus hat er sein Interesse an Führung und Menschen entdeckt und sich mit einem CAS in Leadership an der Hochschule Luzern weitergebildet. Heute begleitet er als Coach Menschen und Führungskräfte dabei, ihre eigene Energie und Klarheit zu finden.",
      links: [
        { label: "stefanamport.ch", href: "https://stefanamport.ch/" },
        { label: "Instagram", href: "https://www.instagram.com/stefanamport/" },
        { label: "LinkedIn", href: "https://ch.linkedin.com/in/stefan-amport" },
      ],
    },
    summary: [
      "Stefan wollte eigentlich Informatiker werden, schaffte aber die Aufnahmeprüfung nicht und landete stattdessen in einer KV-Lehre. Dort entdeckte ein Ausbildner sein technisches Flair und liess ihn schon während der Lehre an der Website des Betriebs mitbauen, der Startpunkt für alles, was folgte.",
      "Mit 19 gründete er seine erste eigene Firma, zuerst mit Webseiten in Joomla und HTML, ohne grosses Studium, einfach ausprobiert. Zehn Jahre lang baute er sein Business auf eigene Faust auf, bis ihn das ständige Alleinarbeiten gesundheitlich einholte: Erschöpfung, Angstzustände, der Punkt, an dem er merkte, dass ihm der menschliche Austausch fehlte.",
      "Aus dieser Erfahrung heraus schloss er sich mit einer Werbeagentur zusammen und baute eine Digitalagentur auf, die von 5 auf über 60 Mitarbeitende wuchs. Dort entdeckte er, dass ihn Führung und Menschen mehr interessierten als Technik, ein CAS in Leadership an der Hochschule Luzern brachte ihn schliesslich zum Coaching.",
      "Heute ist Coaching sein Hauptfokus, ergänzt durch technische Projekte, Fitness-Kurse und, ganz nebenbei, eine Leidenschaft fürs Kaffeerösten. Sein Rat für alle, die mit der Selbstständigkeit liebäugeln: nicht fragen, was der Markt will, sondern der eigenen Energie und Freude folgen und es einfach ausprobieren.",
    ],
    tips: [
      "Folge deiner eigenen Energie und Freude statt zu fragen, was der Markt gerade will, und probier es einfach aus.",
      "Weniger ist mehr: Je stärker Stefan sich spezialisiert und Angebote weggelassen hat, desto mehr Umsatz hat er gemacht.",
      "Gib dir bewusst Raum und Pausen im Alltag, ohne freie Zeit entsteht nichts Neues.",
    ],
  },
  {
    number: 3,
    slug: "3-christian-rueegg-verkauf-dich-nicht-unter-wert",
    title: "Verkauf dich nicht unter Wert: Christian Rüegg über 15 Jahre Selbstständigkeit",
    date: "2026-07-22",
    duration: "56 Min",
    description:
      "Christian Rüegg (StaySafe) erzählt von seinem Weg vom Koch über die Gastronomie und Sicherheitsbranche bis zum eigenen Unternehmen: über faire Preise, echte Beziehungen statt Social-Media-Zahlen und warum man sich nicht unter Wert verkaufen sollte.",
    spotifyUrl: "https://open.spotify.com/episode/0aKu743uCs7ZCl7U0yDcy6",
    guest: {
      name: "Christian Rüegg",
      role: "Gründer, StaySafe",
      bio: "Christian hat ursprünglich eine Kochlehre gemacht und lange Gastrobetriebe geführt und saniert, bevor er über die Sicherheitsbranche zu seiner heutigen Firma StaySafe kam. Seit 2011 bildet er Firmen und Vereine in Erster Hilfe und Sicherheit aus, seit 2019 zu 100 % selbstständig.",
      links: [
        { label: "staysafe.swiss", href: "https://staysafe.swiss/" },
        { label: "Instagram", href: "https://www.instagram.com/staysafeschweiz/" },
        { label: "Facebook", href: "https://www.facebook.com/staysafeswiss" },
        {
          label: "LinkedIn",
          href: "https://de.linkedin.com/in/christian-r%C3%BCegg-529632234",
        },
      ],
    },
    summary: [
      "Christian hat als Koch angefangen, stieg über die Gastronomie ins Management ein und sanierte jahrelang schlecht laufende Gastrobetriebe für grössere Ketten. Parallel dazu rutschte er über die Türsteher-Szene in die Sicherheitsbranche, zuerst als Nebenjob, irgendwann zu 100 %.",
      "2011 gründete er StaySafe, seine Ausbildungsfirma für Erste Hilfe und Sicherheitskonzepte. Nach ein paar Jahren mit eigenen Angestellten und gesundheitsbedingtem Verkauf seiner Firmenanteile führt er StaySafe heute bewusst als Einzelfirma, mit Freelancern statt Festangestellten, weil er so nur mit Leuten arbeitet, die wirklich Lust haben. Seit dem 1. Januar 2019 ist er zu 100 % selbstständig.",
      "Sein wichtigster Ratschlag: sich nicht unter Wert verkaufen. Wer zu billig kalkuliert, verliert am Ende, und ein Kunde, der nicht zahlen will, ist kein guter Kunde, egal wie prestigeträchtig der Auftrag klingt. Kunden kommen bei ihm fast nie über Social Media, sondern über Mundpropaganda und persönliche Kontakte, Social Media sieht er eher als Vertrauensaufbau denn als Verkaufskanal.",
      "Aktuellstes Projekt: das Notfall Case, eine mobile Sicherheitsstation mit Feuerlöschern und Erste-Hilfe-Ausrüstung in einem robusten Koffer, gedacht für Events, Theaterproduktionen, Baustellen oder grosse Anlässe. Davor lancierte er individuell zusammengestellte Erste-Hilfe-Boxen fürs Auto oder Business, seit dem Start im September 2024 bereits über 75 Stück verkauft.",
    ],
    tips: [
      "Verkauf dich nicht unter Wert, wer zu billig kalkuliert, verliert am Ende.",
      "Bleib authentisch, verkauf nicht irgendetwas, sondern das, wofür du wirklich stehst.",
      "Geh raus, stell Fragen und nutz die Erfahrung anderer, du musst nicht alles allein im stillen Kämmerlein herausfinden.",
    ],
  },
  {
    number: 2,
    slug: "2-patrick-vom-automatiker-zur-selbststaendigkeit",
    title: "Patricks Weg vom Automatiker zur Selbstständigkeit",
    date: "2026-07-15",
    duration: "29 Min",
    description:
      "Patrick wollte ursprünglich auf keinen Fall den ganzen Tag vor einem Computer sitzen. Wie er trotzdem zum Softwareentwickler wurde, warum ihm konzentriertes Arbeiten so wichtig ist und wie der Schritt in die Selbstständigkeit gelang.",
    spotifyUrl: "https://open.spotify.com/episode/6jmjDXtjEue5voQHyVROOa",
    host: {
      name: "Patrick",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/patrick-christen-b5a52b89/",
        },
        { label: "patrickchristen.com", href: "https://patrickchristen.com/" },
        { label: "Instagram", href: "https://www.instagram.com/patrick.christen9/" },
      ],
    },
    summary: [
      "Patrick wollte ursprünglich alles, nur nicht Informatik, weil er nicht den ganzen Tag vor dem PC im Büro sitzen wollte. Also machte er eine Lehre als Automatiker, wechselte während der Lehre aber selbst schon vom Werkstatt- in den Büroalltag als Elektroplaner und merkte, dass ihn das nicht bis zur Pensionierung erfüllen würde. Nach einem kurzen Flirt mit einer Pilotenausbildung entschied er sich für ein Studium in Wirtschaftsinformatik, halb Betriebswirtschaft, halb Programmieren.",
      "Nach dem Studium blieb er sechs Jahre bei dem Unternehmen, für das er schon seine Bachelorarbeit geschrieben hatte, ein kleiner Betrieb mit kurzen Wegen und viel Gestaltungsspielraum. 2022 wechselte er für eine neue Herausforderung in ein grösseres Unternehmen, mit mehr Regulatorien, mehr Komplexität und deutlich mehr Meetings, als er es aus dem kleinen Betrieb gewohnt war.",
      "Den Wunsch nach Selbstständigkeit trug er schon lange mit sich, die Freiheit, sich die Zeit selbst einzuteilen, ohne Vorschriften. Verstärkt hat das eine Weltreise vor zwei Jahren, nach der die Rückkehr in den klassischen Bürojob schwerfiel, und die Entdeckung der Indie-Hacker- und Solopreneur-Szene, wo Leute eigene kleine Projekte bauen und oft ortsunabhängig als digitale Nomaden arbeiten.",
      "Ausschlaggebend war am Ende auch die Rechnung dahinter: Die Schweiz bietet ein Sicherheitsnetz, Ausbildung, Familie, genug Jobs, falls es nicht klappt. Das Risiko, es einfach zu versuchen, wog für ihn weniger schwer als die Chance, die es bietet.",
    ],
    tips: [
      "Wenn dich fokussierte Arbeit erfüllt, aber ständige Meetings und Unterbrechungen dich auslaugen, ist das ein starkes Signal für die Richtung, die du einschlagen solltest.",
      "Lösungen kommen oft, wenn man loslässt: eine bewusste Pause nach intensiver Fokusarbeit bringt manchmal mehr als stures Weiterarbeiten.",
      "Rechne dir das Worst-Case-Szenario aus: Mit einem Sicherheitsnetz aus Ausbildung, Familie und Arbeitsmarkt im Rücken ist das Risiko meist kleiner, als es sich anfühlt.",
    ],
  },
  {
    number: 1,
    slug: "1-mirjam-vom-sportgymnasium-zur-selbststaendigkeit",
    title: "Mirjams Weg vom Sportgymnasium zur Selbstständigkeit",
    date: "2026-07-08",
    duration: "32 Min",
    description:
      "Mirjams Weg vom Sportgymnasium über das Lebensmitteltechnologie-Studium und einen Sprachaufenthalt in Australien bis zur Selbstständigkeit, inklusive der ersten finanziellen Lektionen und wie sie ihre Leidenschaft gefunden hat.",
    spotifyUrl: "https://open.spotify.com/episode/6wkBrWFlVmWsi60fvaeqyV",
    host: {
      name: "Mirjam",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/mirjamgamperli/" },
        { label: "mirjamgaemperli.com", href: "https://www.mirjamgaemperli.com/" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/mirjam-g%C3%A4mperli/",
        },
      ],
    },
    summary: [
      "In der ersten Folge unseres Podcasts «Mach's eifach» steht Mirjam im Mittelpunkt. Sie erzählt von ihrem bisherigen Weg, den Entscheidungen, die sie geprägt haben, und davon, weshalb sie heute gemeinsam mit Patrick den Schritt in die Selbstständigkeit wagt.",
      "Bereits während ihrer Schulzeit führte Mirjam ein etwas anderes Leben als viele Gleichaltrige. Durch das Sportgymnasium und den Tennissport war sie früh auf sich allein gestellt und lernte, Verantwortung zu übernehmen. Obwohl der Profisport grundsätzlich ein möglicher Weg gewesen wäre, entschied sie sich aufgrund der gesundheitlichen und finanziellen Unsicherheiten dagegen.",
      "Stattdessen führte ihr Weg über ein Praktikum in einer Schokoladenfabrik zum Studium der Lebensmitteltechnologie. Nach dem Abschluss erfüllte sie sich zunächst einen Kindheitstraum und verbrachte zwei Monate in Australien. Dort lernte sie nicht nur eine neue Kultur, sondern auch eine deutlich entspanntere und offenere Lebensweise kennen. Die Rückkehr in die Schweiz fiel ihr deshalb zunächst schwer.",
      "Beruflich sammelte Mirjam anschliessend Erfahrungen in verschiedenen Unternehmen und Funktionen. Bereits in jungen Jahren übernahm sie die Verantwortung für ein Team mit mehreren Abteilungen. Dabei merkte sie, wie wichtig ihr ein respektvolles Miteinander ist: nicht als klassische Vorgesetzte, sondern als Teil eines Teams, das gemeinsam Lösungen findet.",
      "Später wechselte sie bewusst ins Projektmanagement. Heute betreut sie strategische Projekte und ist für viele Menschen die erste Ansprechperson, wenn Probleme gelöst, Themen koordiniert oder Entscheidungen vorangetrieben werden müssen.",
      "Parallel dazu baut sie gemeinsam mit Patrick die eigene Selbstständigkeit auf. Auch wenn dadurch viele neue Aufgaben und Herausforderungen entstehen, fühlt es sich für sie nicht wie eine Belastung an. Im Gegenteil: Die Arbeit gibt ihr Energie und eröffnet jeden Tag neue Möglichkeiten.",
      "Wie die beiden in einem Jahr dastehen werden, wissen sie noch nicht. Sicher ist jedoch: Es warten viele neue Begegnungen, Erfahrungen und kleine Erfolge auf sie. Besonders wichtig ist ihnen dabei die Freiheit, das eigene Leben flexibler zu gestalten und in den kalten, grauen Wintermonaten auch einmal der Schweiz entfliehen zu können.",
      "Der Weg ist noch nicht vollständig geplant, aber genau darum geht es: nicht auf den perfekten Moment zu warten, sondern es einfach zu machen.",
    ],
  },
];
