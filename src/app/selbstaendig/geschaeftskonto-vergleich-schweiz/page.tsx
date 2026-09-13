import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Geschäftskonto für Selbstständige: Die Anbieter im Vergleich – Mach's eifach",
  description:
    "PostFinance, UBS, Raiffeisen oder doch eine Neobank wie Yapeal, Wise Business oder Relio? Wir vergleichen Gebühren und Funktionen der wichtigsten Geschäftskonto-Anbieter für Einzelfirmen und KMU in der Schweiz.",
};

const anbieter = [
  {
    name: "PostFinance",
    typ: "Klassische Bank",
    kosten: "CHF 5.–/Monat, für Neugründungen 2 Jahre gratis",
    fuer: "Einzelfirmen mit Schweizer Fokus, die Filialen und persönliche Beratung schätzen",
  },
  {
    name: "UBS",
    typ: "Klassische Bank",
    kosten: "CHF 20.–/Quartal (≈ CHF 6.67.–/Monat), 1. Jahr gratis für Neugründungen",
    fuer: "KMU mit Wachstumsplänen, die eine grosse Bank im Rücken wollen",
  },
  {
    name: "Raiffeisen",
    typ: "Klassische Bank",
    kosten: "Individuell, keine fixen Publikumspreise",
    fuer: "Wer lokale, persönliche Beratung bei der Genossenschaftsbank vor Ort sucht",
  },
  {
    name: "Yapeal",
    typ: "Digitale Bank",
    kosten: "CHF 0.– bis CHF 119.–/Monat je nach Tarif",
    fuer: "Digitale KMU mit Kartenbedarf für mehrere Mitarbeitende",
  },
  {
    name: "Relio",
    typ: "Digitale Bank",
    kosten: "Individueller Fixpreis, kein Publikumspreis",
    fuer: "Multiwährungs- und Crypto-affine Unternehmen",
  },
  {
    name: "Wise Business",
    typ: "Fintech, Multiwährung",
    kosten: "CHF 55.– einmalig, danach nur Transaktionsgebühren",
    fuer: "Wer regelmässig in Fremdwährung zahlt oder Geld erhält",
  },
  {
    name: "amnis",
    typ: "Fintech, Treasury",
    kosten: "Individuell",
    fuer: "KMU mit regelmässigem Auslandsgeschäft und FX-Bedarf",
  },
];

const entscheidungshilfen = [
  {
    titel: "Reine Schweizer Einzelfirma, wenig Volumen",
    text: "PostFinance oder UBS reichen in den meisten Fällen, günstig, unkompliziert und mit Filiale, falls doch mal eine Frage persönlich geklärt werden soll.",
  },
  {
    titel: "Viel internationales Geschäft",
    text: "Wise Business oder amnis sparen bei Wechselkursen und Auslandszahlungen oft deutlich mehr, als die Kontoführung kostet.",
  },
  {
    titel: "Digitales KMU mit mehreren Mitarbeitenden",
    text: "Yapeal bietet gestaffelte Tarife mit vielen physischen und virtuellen Karten, praktisch für Teams mit Spesen.",
  },
  {
    titel: "Unsicher, will erst unverbindlich starten",
    text: "Yapeals Free-Tarif oder Wise Business (nur einmalige Eröffnungsgebühr) haben kaum Fixkosten zum Reinschnuppern.",
  },
];

const quellen = [
  {
    label: "moneyland.ch, „PostFinance Business Account“",
    href: "https://www.moneyland.ch/en/postfinance/company-accounts/business-account",
  },
  {
    label: "PostFinance, „Startpaket für Firmengründer:innen und Start-ups“",
    href: "https://www.postfinance.ch/en/business/company-type/founders-start-ups/start-up-package.html",
  },
  {
    label: "UBS Schweiz, „Geschäftskonto für Ihr KMU“",
    href: "https://www.ubs.com/ch/de/services/accounts-and-cards/corporate-accounts/business-account.html",
  },
  {
    label: "UBS Schweiz, „Spezialangebot für Jungunternehmen“",
    href: "https://www.ubs.com/ch/de/services/founding-and-succession/founding/young-company-offer.html",
  },
  {
    label: "Raiffeisen Schweiz, „Geschäftskonto eröffnen“",
    href: "https://www.raiffeisen.ch/rch/de/firmenkunden/liquiditaet-und-zahlungsverkehr/konto.html",
  },
  {
    label: "Yapeal, „Geschäftskonten und Karten“",
    href: "https://yapeal.ch/de/yapeal-direkt/produkte/geschaeftskonten-und-karten/",
  },
  { label: "Relio, „Ihr Online-Business-Konto“", href: "https://relio.ch/de/" },
  {
    label: "Wise, „Wise Geschäftskonto in der Schweiz“",
    href: "https://wise.com/ch/blog/wise-geschaftskonto-schweiz",
  },
  { label: "neon, Kontoübersicht", href: "https://www.neon-free.ch/en/" },
];

const linkClass =
  "font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-2 hover:text-[var(--accent-dark)] hover:decoration-[var(--accent-dark)]/40";

export default function GeschaeftskontoVergleichSchweizPost() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/selbstaendig"
        className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
      >
        ← Alle Beiträge
      </Link>

      <div className="mt-6 flex items-center gap-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        <span className="text-[13px] font-semibold tracking-wide text-[var(--accent-soft)] uppercase">
          Vergleich · Geschäftskonto Schweiz
        </span>
      </div>

      <h1 className="mt-5 text-[32px] font-bold leading-tight sm:text-[40px]">
        Geschäftskonto für Selbstständige: Die Anbieter im Vergleich
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        PostFinance, UBS, Raiffeisen oder doch eine Neobank wie Yapeal, Wise Business oder Relio?
        Wir haben die wichtigsten Geschäftskonto-Anbieter für Einzelfirmen und KMU in der Schweiz
        verglichen.
      </p>

      <p className="mt-4 text-[13px] text-[var(--muted-2)]">Stand: September 2026 · ca. 9 Min. Lesezeit</p>

      <div className="mt-10 rounded-[20px] border border-[var(--accent-soft)]/20 bg-[var(--surface)] p-7">
        <p className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--accent-soft)] uppercase">
          Auf den Punkt gebracht
        </p>
        <ul className="grid gap-3 pl-5 text-[17px] leading-relaxed text-[var(--foreground)]">
          <li className="list-disc">
            Traditionelle Banken wie PostFinance oder UBS kosten <strong>CHF 5–7 pro Monat</strong>{" "}
            für die reine Kontoführung, bieten dafür aber Filialen, persönliche Beratung und oft
            Sonderkonditionen für Neugründungen.
          </li>
          <li className="list-disc">
            Digitale Geschäftskonten wie Yapeal oder Relio starten oft bei CHF 0, werden aber je
            nach Volumen und Funktionsumfang schnell teurer als eine klassische Bank.
          </li>
          <li className="list-disc">
            Für Fremdwährungen und internationale Zahlungen sind spezialisierte Anbieter wie Wise
            Business oder amnis meist deutlich günstiger als der Umtauschkurs einer klassischen
            Bank.
          </li>
          <li className="list-disc">
            Neon und Yuh, die in vielen Vergleichen als günstige Empfehlung auftauchen, bieten
            aktuell (Stand September 2026) gar kein echtes Geschäftskonto an, nur Privatkonten.
          </li>
        </ul>
      </div>

      <div className="mt-14 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <h2 className="mt-0 mb-1 text-2xl font-bold">Warum überhaupt ein separates Konto?</h2>
        <p>
          Bei einer Einzelfirma sind Privatperson und Geschäft rechtlich nicht komplett getrennt,
          ein separates Geschäftskonto ist deshalb nicht zwingend vorgeschrieben. Trotzdem lohnt es
          sich von Anfang an, private und geschäftliche Zahlungen sauber auseinanderzuhalten, auch
          das{" "}
          <a
            href="https://www.kmu.admin.ch/kmu/de/home/praktisches-wissen/kmu-gruenden/firmengruendung/auswahl-rechtsform/einzelfirma.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            KMU-Portal des Bundes
          </a>{" "}
          empfiehlt genau das. Für eine GmbH oder AG ist ein eigenes Konto ohnehin Pflicht, allein
          schon für die Kapitaleinzahlung bei der Gründung.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          Klassische Banken: PostFinance, UBS, Raiffeisen
        </h2>
        <p>
          <strong>PostFinance</strong> verlangt CHF 5 pro Monat für ein CHF-Geschäftskonto, damit
          sind bis zu 60’000 Transaktionen pro Jahr abgedeckt, ohne Mindestguthaben oder
          Mindestumsatz. Für Kundschaft mit Wohnsitz im Ausland kommt ein Zuschlag von CHF 25 pro
          Monat dazu.
        </p>
        <p>
          <strong>UBS</strong> berechnet CHF 20 pro Quartal, umgerechnet rund CHF 6.67 pro Monat,
          inklusive 500 elektronischer Inlandzahlungen pro Monat.
        </p>
        <p>
          <strong>Raiffeisen</strong> veröffentlicht keine fixen Publikumspreise, die Konditionen
          hängen von der lokalen Genossenschaftsbank und den individuellen Bedürfnissen ab. Dafür
          gibt es eine persönliche Beratung vor Ort, was bei den beiden anderen Grossbanken nicht
          überall gleich ausgeprägt ist.
        </p>
        <p className="rounded-[16px] bg-[var(--surface)] p-5 text-base">
          <strong>Startup-Bonus:</strong> Sowohl PostFinance als auch UBS haben ein eigenes
          Startpaket für Neugründungen. Bei <strong>PostFinance</strong> ist die Kontoführung für
          bis zu fünf Geschäftskonten <strong>zwei Jahre gratis</strong>, wenn die Firma nicht
          länger als zwei Jahre zurückliegt, dazu kommt die Visa Business Card im ersten Jahr ohne
          Gebühren. Bei <strong>UBS</strong> sind Geschäftskonto und Karte im{" "}
          <strong>ersten Jahr kostenlos</strong>, inklusive Kapitaleinzahlungskonto für die
          Gründung, Bedingung ist eine Firmengründung, die höchstens drei Jahre zurückliegt.
          Raiffeisen kommuniziert keinen schweizweit einheitlichen Startup-Bonus, hier lohnt sich
          eine Nachfrage bei der lokalen Bank direkt.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Digitale Geschäftskonten: Yapeal & Relio</h2>
        <p>
          <strong>Yapeal</strong> staffelt seine Tarife von einem kostenlosen Einstiegskonto (5
          Inlandzahlungen gratis pro Monat, danach CHF 0.30 pro Zahlung) über Essential (CHF
          9.–/Monat, unbegrenzte Inlandzahlungen) und Grow (CHF 49.–/Monat, mehr Karten, günstigere
          Auslandszahlungen) bis Business (CHF 119.–/Monat, bis zu 200 physische Karten). Für
          Einzelfirmen mit wenigen Zahlungen reicht oft schon der Free- oder Essential-Tarif.
        </p>
        <p>
          <strong>Relio</strong> positioniert sich als Schweizer Neobank speziell für Firmenkunden,
          inklusive Startups und Freelancer, mit Schweizer IBAN, mehreren Währungs-Wallets und
          einer persönlichen Ansprechperson. Die Kosten sind ein fixer, aber individuell
          berechneter Monatsbetrag, konkrete Zahlen nennt Relio erst im eigenen Kostenrechner.
        </p>
        <p className="rounded-[16px] bg-[var(--surface)] p-5 text-base">
          Wichtig zu wissen: Sowohl <strong>neon</strong> als auch <strong>Yuh</strong> tauchen in
          vielen älteren Vergleichen als günstige Geschäftskonto-Empfehlung auf. Beide bieten aber
          nach eigenen Angaben ausschliesslich Privatkonten an, kein echtes Geschäftskonto. Wer sie
          trotzdem für geschäftliche Zahlungen nutzt, bewegt sich ausserhalb der eigentlich
          vorgesehenen Nutzung.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          Für Fremdwährungen: Wise Business & amnis
        </h2>
        <p>
          <strong>Wise Business</strong> kostet einmalig CHF 55 bei der Eröffnung, danach fallen
          keine fixen Monats- oder Jahresgebühren an, nur nutzungsabhängige Kosten. Währungsumtausch
          und Auslandsüberweisungen starten bei rund 0.23 % zuzüglich einer kleinen Fixgebühr pro
          Transaktion, transparent einsehbar vor jedem Transfer.
        </p>
        <p>
          <strong>amnis</strong> positioniert sich als Treasury-Spezialist für KMU mit
          Multiwährungs-Bedarf, inklusive FX, Auslandszahlungen und Team-Karten in einer Plattform.
          Wer regelmässig mit Lieferantinnen oder Kunden in der EU oder Asien handelt, findet hier
          oft günstigere Konditionen als bei einer klassischen Bank, allerdings ohne CHF-Kernkonto
          als Ersatz für ein Schweizer Bankkonto.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Anbieter im Überblick</h2>
      </div>

      <div className="mt-6 overflow-x-auto rounded-[16px] border border-[var(--accent-soft)]/15">
        <table className="w-full min-w-[640px] border-collapse text-[15px]">
          <thead>
            <tr className="bg-[var(--surface)] text-left">
              <th className="p-3.5 font-semibold">Anbieter</th>
              <th className="p-3.5 font-semibold">Typ</th>
              <th className="p-3.5 font-semibold">Kosten</th>
              <th className="p-3.5 font-semibold">Besonders geeignet für</th>
            </tr>
          </thead>
          <tbody>
            {anbieter.map((a, i) => (
              <tr key={a.name} className={i % 2 === 1 ? "bg-[var(--surface)]/50" : ""}>
                <td className="border-t border-[var(--accent-soft)]/12 p-3.5 font-semibold">{a.name}</td>
                <td className="border-t border-[var(--accent-soft)]/12 p-3.5 text-[var(--muted)]">
                  {a.typ}
                </td>
                <td className="border-t border-[var(--accent-soft)]/12 p-3.5 text-[var(--muted)]">
                  {a.kosten}
                </td>
                <td className="border-t border-[var(--accent-soft)]/12 p-3.5 text-[var(--muted)]">
                  {a.fuer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-14 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <h2 className="mt-0 mb-1 text-2xl font-bold">Entscheidungshilfe</h2>
      </div>

      <div className="mt-6 grid gap-4">
        {entscheidungshilfen.map((e) => (
          <div
            key={e.titel}
            className="rounded-[20px] border border-[var(--accent-soft)]/12 bg-[var(--surface)] p-6"
          >
            <p className="m-0 mb-1.5 font-bold text-[var(--accent)]">{e.titel}</p>
            <p className="m-0 text-[15px] leading-relaxed text-[var(--muted)]">{e.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <h2 className="mt-10 mb-1 text-2xl font-bold">Fazit</h2>
        <p>
          Es gibt nicht das eine beste Geschäftskonto, nur das beste für deine Situation. Wer eine
          kleine, rein schweizerische Einzelfirma führt, kommt mit PostFinance oder UBS meist am
          einfachsten und günstigsten durch. Wer viel mit dem Ausland handelt, spart mit Wise
          Business oder amnis oft mehr bei den Wechselkursen, als eine klassische Bank überhaupt an
          Kontoführungsgebühren verlangt. Und wer ein digitales Team mit mehreren Karten führt,
          findet bei Yapeal eine Struktur, die mitwächst. Wichtig ist vor allem: das Geschäftskonto
          von Anfang an konsequent von den privaten Finanzen trennen, unabhängig davon, für welchen
          Anbieter man sich entscheidet.
        </p>
      </div>

      <section className="mt-16 border-t border-[var(--accent-soft)]/15 pt-10">
        <h2 className="mb-5 text-xl font-bold">Quellen</h2>
        <ol className="grid gap-2.5 pl-5 text-sm leading-relaxed text-[var(--muted)]">
          {quellen.map((q) => (
            <li key={q.href} className="list-decimal">
              <a href={q.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {q.label}
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[13px] text-[var(--muted-2)]">
          Dieser Bericht dient der allgemeinen Orientierung und ersetzt keine Rechts- oder
          Steuerberatung im Einzelfall. Gebühren und Konditionen basieren auf öffentlich
          zugänglichen Quellen, Stand September 2026, und können sich jederzeit ändern.
        </p>
      </section>
    </div>
  );
}
