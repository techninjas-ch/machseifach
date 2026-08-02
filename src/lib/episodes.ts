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
  spotifyUrl: string;
  guest?: Guest;
  host?: HostLinks;
  summary?: string[];
  tips?: string[];
};

export const nextEpisode = {
  guestName: "Michael Rohrer",
  date: "2026-08-05",
};

export const episodes: Episode[] = [
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
