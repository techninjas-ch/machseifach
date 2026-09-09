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
  guestName: "Isabel Kohler",
  date: "2026-09-23T15:15:00+02:00",
};

const NADIA_GUEST: Guest = {
  name: "Nadia Leuenberger",
  role: "Ernährungsberaterin & Geschäftsführerin, Peak Nutrition",
  bio: "Nadia ist Ernährungsberaterin und Ernährungswissenschaftlerin (MSc BFH), unterrichtet nebenbei an der Berner Fachhochschule und ist Geschäftsführerin von Peak Nutrition, einer auf Sporternährung spezialisierten Praxis im Medical Center Wankdorf in Bern. Sie war selbst lange Turnier-Tennis- und Beach-Tennis-Spielerin.",
  links: [
    { label: "peaknutrition.ch", href: "https://www.peaknutrition.ch/" },
    { label: "Instagram (Peak Nutrition)", href: "https://www.instagram.com/peaknutrition_ch/" },
    {
      label: "Instagram (persönlich)",
      href: "https://www.instagram.com/nadia_nutrition_sport/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nadia-leuenberger-795280133/",
    },
  ],
};

export const episodes: Episode[] = [
  {
    number: 12,
    slug: "12-isabel-kohler-starte-unperfekt",
    title:
      "Starte unperfekt: Isabel Kohler über ihren Weg von der virtuellen Assistenz zum eigenen Branding-Business",
    date: "2026-09-23",
    duration: "59 Min",
    publishAt: "2026-09-23T15:15:00+02:00",
    description:
      "Isabel Kohler startete als virtuelle Assistentin und hat sich zur Branding- und Social-Media-Spezialistin für Selbstständige und KMU entwickelt. Über ihren Umweg via Flugbegleiterin, den Absprung aus einem belastenden Job dank einer Online-Challenge und warum bei ihr immer die Strategie vor der Kreativität kommt.",
    guest: {
      name: "Isabel Kohler",
      role: "Gründerin, VAISA",
      bio: "Isabel ist gelernte Kauffrau, war ein Jahr lang Flugbegleiterin und bildete sich zur Direktionsassistentin weiter, bevor sie über eine virtuelle-Assistenz-Challenge den Sprung in die Selbstständigkeit wagte. Heute führt sie mit VAISA in Thun ein Branding- und Social-Media-Business für Selbstständige und KMU.",
      links: [
        { label: "vaisa.ch", href: "https://vaisa.ch/" },
        { label: "Instagram", href: "https://www.instagram.com/vaisa.by.isabel/" },
        { label: "LinkedIn", href: "https://ch.linkedin.com/in/isabel-kohler-4a5844242" },
      ],
    },
    summary: [
      "Isabel machte zunächst eine KV-Lehre und arbeitete im Reisebüro, bevor sie sich kurz vor Corona ein Jahr lang als Flugbegleiterin versuchte. Das Reisen begeisterte sie, doch Zeitverschiebung, Schlafmangel und der Lifestyle passten langfristig nicht zu ihr. Über eine Weiterbildung zur Direktionsassistentin stiess sie im Moneypenny-Magazin auf den Begriff virtuelle Assistenz, mitten in einem belastenden Job mit viel Überstunden und internen Konflikten in der Geschäftsleitung. Den letzten Anstoss gab eine kostenlose fünftägige Online-Challenge einer bekannten VA-Influencerin.",
      "Ihre ersten Kundinnen fand sie über ihr Netzwerk, den Verein Virtuelle Assistenz Schweiz und eine ehemalige Arbeitskollegin, die ihr einen Kontakt am Inselspital Bern vermittelte. Anfangs machte sie vor allem Backoffice- und Social-Media-Arbeit, rein remote, inklusive fünf Wochen als digitale Nomadin in Griechenland. Mit der Zeit merkte sie aber, dass ihr die persönliche, lokale Zusammenarbeit mit Kundinnen mehr liegt als reine Remote-Arbeit von überall.",
      "Vor rund zwei Jahren machte sie eine halbjährige Online-Ausbildung in Grafikdesign mit Vertiefung Branding und Layout und verlagerte ihren Fokus komplett von Backoffice zu Branding und Social Media. Ihr Prozess beginnt immer mit Strategie: Fragebogen, Strategiegespräch, Zielgruppen- und Konkurrenzanalyse, dann Moodboards, erst danach das eigentliche Design. Für professionelle Markenarbeit nutzt sie Illustrator, für die Zusammenarbeit mit Kundinnen Canva. KI setzt sie für Inspiration und Bildgenerierung ein, ist aber überzeugt, dass der persönliche Strategieprozess dadurch nicht ersetzt wird, ohne den sehen am Ende alle Marken gleich aus.",
      "Ihr wichtigster Rat: sich mit anderen Selbstständigen vernetzen, nicht nur für die Kundengewinnung, sondern als Support. Und: unperfekt starten, keine perfekte Webseite oder fertiger Businessplan nötig, sondern Schritt für Schritt das angehen, was gerade wirklich wichtig ist. Nach ihren Erfahrungen mit Überlastung im Angestelltenverhältnis ist ihr eine gute Work-Life-Balance heute besonders wichtig, mit klarer Struktur im Alltag, aber auch der Freiheit, spontan mal einen Vormittag freizunehmen.",
    ],
    tips: [
      "Bau dir ein Netzwerk aus anderen Selbstständigen auf, nicht nur zur Kundengewinnung, sondern als Support: Austausch mit Leuten in einer ähnlichen Situation ist Gold wert.",
      "Starte unperfekt: Du brauchst am Anfang keine perfekte Webseite, keinen fertigen Businessplan und keinen Newsletter, sondern nur das, was gerade wirklich wichtig ist.",
      "Strategie kommt vor Kreativität: Ohne ein klares Bild von Zielgruppe und Positionierung sieht am Ende alles gleich aus, egal wie viel KI oder wie viele Tools du einsetzt.",
    ],
  },
  {
    number: 11,
    slug: "11-nadia-leuenberger-ernaehrungs-dschungel-und-tipps",
    title:
      "Raus aus dem Ernährungs-Dschungel: Nadia Leuenberger über Sporternährung, Mythen und ihre Tipps für Selbstständige (Teil 2)",
    date: "2026-09-09",
    duration: "32 Min",
    spotifyUrl: "https://open.spotify.com/episode/3Qa7wfKiMpaLyajMEShB18",
    description:
      "Teil 2: Nadia Leuenberger räumt mit Ernährungsmythen wie dem Protein-Hype und nüchternem Training auf, gibt ihren wichtigsten praktischen Ernährungstipp und teilt, was angehenden Selbstständigen wirklich weiterhilft, von Netzwerken bis zu kostenlosen Beratungsangeboten.",
    guest: NADIA_GUEST,
    summary: [
      "Peak Nutrition arbeitet aus zwei fixen Büros im Medical Center Wankdorf, kombiniert mit viel Remote-Arbeit: Viele Athletinnen und Athleten aus der ganzen Schweiz und dem Ausland werden online betreut. Dem Team lässt Nadia bewusst Freiheit, wie und wo sie arbeiten, solange die nötigen Absprachen funktionieren.",
      "Beim Protein-Hype ordnet Nadia ein: Die meisten High-Protein-Produkte sind vor allem gutes Marketing der Lebensmittelindustrie, viele Menschen decken ihren Proteinbedarf längst über normale Lebensmittel wie Quark, Magerquark oder Käse. Auch beim Trend zum nüchternen Training rät sie zur Vorsicht, kurzfristig mag es funktionieren, langfristig sieht sie in ihrer Beratungspraxis eher Nachteile.",
      "Ihr wichtigster praktischer Tipp bleibt bewusst einfach: drei ausgewogene Mahlzeiten am Tag mit den Komponenten Protein, Gemüse und Kohlenhydrate, dazu rund 25 Gramm Eiweiss pro Mahlzeit. Das deckt schon einen grossen Teil ab, auch ein Shake mit Quark, Banane und Haferflocken zählt dabei mit.",
      "Zum Schluss gibt sie ihre wichtigsten Tipps für alle, die den Schritt in die Selbstständigkeit erwägen: sich unbedingt mit anderen austauschen, sich Mentorinnen und Mentoren suchen und kostenlose kantonale Angebote wie die Gründerberatung von be-advanced in Bern nutzen. Je grösser das eigene Netzwerk, desto mehr Know-how lässt sich mitnehmen.",
    ],
    tips: [
      "Grössere Netzwerke bringen mehr Know-how: Sprich mit anderen über deine Pläne, such dir Mentorinnen und Mentoren und nutze kostenlose Angebote wie die Gründerberatung von be-advanced in Bern.",
      "Gib deinem Team so viel Flexibilität wie möglich, solange die Absprachen stimmen: Nadias Team arbeitet remote und vor Ort, ganz danach, was für Kundschaft und Team am besten funktioniert.",
      "Trau nicht jedem Ernährungstrend: Viele Hypes wie High-Protein-Produkte sind vor allem gutes Marketing, mit drei ausgewogenen Mahlzeiten pro Tag deckst du die Basis schon ab.",
    ],
  },
  {
    number: 10,
    slug: "10-mirjam-patrick-kein-zuhause-kein-job-kein-problem",
    title: "Kein Zuhause, kein Job, kein Problem: Unser Update zur 10. Folge",
    date: "2026-09-06",
    duration: "32 Min",
    spotifyUrl: "https://open.spotify.com/episode/1az5DBJ9Ktt7SyLEI67olt",
    description:
      "Zur zehnten Folge geben wir ein persönliches Update: Wohnungsauflösung, Patricks Kündigung, Housesitting in Biel und was wir aus den ersten zehn Podcast-Folgen gelernt haben.",
    summary: [
      "Die letzten Wochen waren intensiv: Wir mussten unsere Wohnung aufgeben, veranstalteten einen Wohnungsflohmarkt (mit durchzogenem Erfolg, es kamen nur zwei Käufer trotz Flyern), wurden den Rest über Strassenverkauf, Ricardo und das Brockenhaus los und verbrachten danach eine Woche im Airbnb.",
      "Beruflich ist Patrick seit dem 1. September offiziell arbeitslos, ganz bewusst, um sich zu 100 % unserem Business zu widmen. Mirjam ist weiterhin 100 % angestellt, hat aber ausgehandelt, ab November und Dezember zu 50 % remote aus dem Ausland zu arbeiten. Unsere Firma läuft aktuell als Einzelfirma auf Patrick, weil Mirjam noch angestellt ist, dazu kommen neue Themen wie Mehrwertsteuer, AHV, Versicherungen und die Frage nach einer Adresse ohne festen Schweizer Wohnsitz.",
      "Auf der Business-Seite hatten wir ein professionelles Foto- und Videoshooting fürs Web und Social Media, dazu erste bezahlte Werbung zur Kundengewinnung. Ziemlich symbolisch: Unser bisher grösster Auftrag kam ausgerechnet am ersten Tag ohne Festanstellung herein.",
      "Beim Rückblick auf die ersten zehn Folgen ziehen wir ein positives Fazit: mehrheitlich begeistertes Feedback, von Folge zu Folge steigende Hörerzahlen und viele spannende Begegnungen mit Gästen. Als Learnings nennen wir den Wert von unvorbereiteten, authentischen Fragen statt Skript, Anfängerfehler beim Schnitt (die Software schnitt anfangs versehentlich Pausen und Betonungen weg) und den Wunsch, künftig mehr weibliche Gäste einzuladen.",
      "Aktuell sind wir für fünf Wochen Housesitter in Biel und hüten eine Katze namens Pitschi. Danach geht unsere Reise ohne festen Plan weiter, vermutlich Richtung Asien. Die nächste Jubiläumsfolge ist für Folge 20 angekündigt.",
    ],
    tips: [
      "Fang bei grossen Veränderungen früh genug an: Bei unserer Wohnungsauflösung kam viel mehr zusammen, als wir gedacht hätten.",
      "Wenn du bei etwas ein schlechtes Bauchgefühl hast, es nicht zu tun, ist das oft das Zeichen, es trotzdem anzugehen, auch ohne 100 % Sicherheit.",
      "Learning by doing: Es muss nicht von Anfang an perfekt sein, einfach starten und unterwegs besser werden.",
    ],
  },
  {
    number: 9,
    slug: "9-nadia-leuenberger-vom-tennisplatz-zu-peak-nutrition",
    title:
      "Eine Achterbahn mit Looping: Nadia Leuenberger über ihren Weg vom Tennisplatz zu Peak Nutrition (Teil 1)",
    date: "2026-09-02",
    duration: "40 Min",
    publishAt: "2026-09-02T15:15:00+02:00",
    spotifyUrl: "https://open.spotify.com/episode/1GBQr89yTXBRYIGySPc3Tu",
    description:
      "Teil 1: Nadia Leuenberger ist Ernährungsberaterin und Mitgründerin von Peak Nutrition, einer Sporternährungsfirma im Wankdorf Bern. Über ihre Tenniskarriere, einen schweren Unfall mit 16, den Weg in die Ernährungsberatung und die Achterbahn der ersten Unternehmensjahre.",
    guest: NADIA_GUEST,
    summary: [
      "Nadia spielte ihr Leben lang Tennis und ärgerte sich an Turnieren im Ausland jeweils über einseitige Verpflegung vor den Matches. Ein Referat einer Ernährungsberaterin am Zukunftstag in der Schule überzeugte sie schliesslich, selbst diesen Weg einzuschlagen. Parallel dazu spielte sie mit ihrer Schwester jahrelang sehr erfolgreich Beach-Tennis, bis in Schweizer-Meisterschafts-Finals.",
      "Mit 16 erlitt sie einen schweren Unfall und war zeitweise auf den Rollstuhl angewiesen, die Ärzte konnten ihr nicht sagen, ob und wann sich das wieder ändern würde. Die Reha-Zeit, kurz vor einem geplanten Umzug in die USA fürs Tennis, prägte sie enorm: Sie erkannte, dass sie anderen Menschen helfen wollte, und sie beschreibt sich seither als „hoffnungslose Optimistin”.",
      "Nach dem Bachelor und einer Masterarbeit zu personalisierter Ernährung im Spitzensport, die sie mit rund 50 Athletinnen und Athleten durchführte, gründete sie neben ihrer Festanstellung zunächst eine Einzelfirma für Beratungen. 2023 gründete sie zusammen mit einer guten Freundin und ehemaligen Arbeitskollegin die Peak Nutrition GmbH, mit Standort im neuen Medical Center Wankdorf.",
      "Die ersten Jahre beschreibt sie als „Achterbahn mit Looping”: Sie behielt bewusst ihre Festanstellung als Sicherheitsnetz, während die Firma nebenbei wuchs. Bei einer 50/50-Beteiligung mussten sie und ihre Partnerin sich täglich abstimmen, eine intensive, aber wichtige Zusammenarbeit. Im April 2026 stieg ihre Geschäftspartnerin aus, um sich auf ihre Familie zu konzentrieren, ein grosser, aber nachvollziehbarer Verlust, seither trifft Nadia die strategischen Entscheidungen allein.",
    ],
    tips: [
      "Eine Selbstständigkeit ist eine Achterbahn mit Looping, nicht nur ein stetiger Aufstieg: Rechne von Anfang an mit Zweifeln und Ängsten, nicht nur mit Erfolgsmomenten.",
      "Ein finanzielles Sicherheitsnetz macht den Sprung leichter: Nadia behielt bewusst ihre Festanstellung, während sie die Firma nebenbei aufbaute.",
      "Bei einer 50/50-Partnerschaft ist tägliche, ehrliche Kommunikation entscheidend, ihr müsst euch praktisch jeden Tag einigen können.",
    ],
  },
  {
    number: 8,
    slug: "8-abiran-kanagalingam-griit-ideen-sind-wertlos",
    title:
      "Ideen sind wertlos: Abiran Kanagalingam über GRIIT und 3D-Wandreliefs aus Strava-Daten",
    date: "2026-08-26",
    duration: "39 Min",
    publishAt: "2026-08-26T15:15:00+02:00",
    spotifyUrl: "https://open.spotify.com/episode/29LoVxA2xK5ek7SqfeIzWy",
    description:
      "Abiran Kanagalingam verwandelt mit seinem Startup GRIIT Strava-, Garmin- und Komoot-Routen in 3D-Wandreliefs, physische Erinnerungsstücke für Marathon-Finishes, Trailruns und Velotouren. Über die Idee aus einer Marathon-Vorbereitung trotz Verletzung, den Aufbau einer eigenen 3D-Software neben dem Studium und warum Ideen wertlos sind, wenn man sie nicht umsetzt.",
    guest: {
      name: "Abiran Kanagalingam",
      role: "Gründer, GRIIT",
      bio: "Abiran gründete schon während des Gymnasiums eine eigene Nachhilfe-Firma. Nach einer Marathon-Vorbereitung trotz ärztlichem Rat kam ihm die Idee zu GRIIT: physische 3D-Wandreliefs aus echten Strava-, Garmin- oder Komoot-Routendaten. Zusammen mit einem befreundeten Informatik-Studenten entwickelte er dafür eine eigene 3D-Modellierungssoftware und baut GRIIT heute neben seinem Studium in Bern auf.",
      links: [
        { label: "griit.ch", href: "https://griit.ch/" },
        { label: "Instagram", href: "https://www.instagram.com/griit.design/" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/abiran-kanagalingam/",
        },
      ],
    },
    summary: [
      "Abiran bereitete sich trotz einer Verletzung und ärztlichem Rat auf einen Marathon vor. Der entscheidende Gedanke kam ihm dabei: Eine solche Leistung verschwindet am Ende einfach in einer Trainings-App auf dem Handy, statt sichtbar zu bleiben. Daraus entstand die Idee zu GRIIT: die eigene Route als greifbares 3D-Relief für die Wand statt als Screenshot im Feed.",
      "Unternehmerisch war er kein Neuling: Schon während des Gymnasiums baute er eine eigene Nachhilfe-Firma auf, später folgte ein früher, gescheiterter Versuch mit einer Nachhilfe-Vermittlungsplattform. Diese Rückschläge prägen bis heute seine Überzeugung, dass eine Idee für sich allein nichts wert ist, sie zählt erst, wenn man sie tatsächlich umsetzt.",
      "Technisch basiert GRIIT auf dem GPX-Export aus Strava, Garmin oder Komoot. Zusammen mit einem befreundeten Informatik-Studenten als Co-Founder baute Abiran dafür eine eigene 3D-Modellierungssoftware, mit der Terrain, Strassen und Gebäude entlang der Route gestaltet und anschliessend als Relief gedruckt werden, ein Druckvorgang von rund drei bis vier Stunden, nach anfänglichen Fehldrucken wegen ungenauer Kalibrierung.",
      "Nach rund fünf Wochen intensivem internem Aufbau, von der Software bis zur Buchhaltung, verlagert sich der Fokus nun auf Marketing: organisch über Instagram und LinkedIn, bewusst ohne TikTok. Reliefs an Schweizer Sportpersönlichkeiten wie Peter Bolliger brachten erste Reichweite, langfristig denkt Abiran auch an andere Sportarten wie Triathlon oder eine Zusammenarbeit mit grossen Eventmarken wie Ironman.",
    ],
    tips: [
      "Ideen sind wertlos, solange du sie nicht umsetzt: Fast jede Idee hatte schon irgendjemand anders, entscheidend ist nur, wer sie wirklich angeht.",
      "Teste günstig statt perfekt zu planen: Ein einfacher Test mit ein paar hundert Franken Werbebudget zeigt schneller, ob echtes Interesse besteht, als monatelanges Ausarbeiten im Kopf.",
      "Hab keine Angst, dass dir jemand deine Idee klaut: Die meisten Leute haben weder die Zeit noch den Antrieb, sie umzusetzen, sprich offen mit den richtigen Personen und hol dir ehrliches Feedback.",
    ],
  },
  {
    number: 7,
    slug: "7-reto-wallimann-vom-hobby-zum-beruf",
    title:
      "Vom Hobby zum Beruf: Reto Wallimann über Bike-Guiding und Mental-Coaching (Teil 2)",
    date: "2026-08-19",
    duration: "1 Std 8 Min",
    publishAt: "2026-08-19T15:15:00+02:00",
    spotifyUrl: "https://open.spotify.com/episode/6QVkXxhWW6F98kXcygteQw",
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
    spotifyUrl: "https://open.spotify.com/episode/24YhdSlIl8rRwWQZB9IFLj",
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
