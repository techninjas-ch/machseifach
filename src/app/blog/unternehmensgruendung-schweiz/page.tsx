import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unternehmen gründen in der Schweiz: die Rechtsform als erste grosse Entscheidung – Mach's eifach",
  description:
    "Ein Überblick über Einzelfirma, Personengesellschaften, GmbH, AG und die Sonderformen, mit Kapital, Haftung, Steuern und den Pflichten, die 2026 neu hinzukommen.",
};

const rechtsformen = [
  { name: "Einzelfirma", kapital: "keines", haftung: "unbeschränkt, persönlich", gruender: "1 natürliche Person" },
  {
    name: "Einfache Gesellschaft",
    kapital: "keines",
    haftung: "unbeschränkt, solidarisch",
    gruender: "ab 2 Personen",
  },
  {
    name: "Kollektivgesellschaft",
    kapital: "keines",
    haftung: "unbeschränkt, solidarisch",
    gruender: "ab 2 natürliche Personen",
  },
  {
    name: "Kommanditgesellschaft",
    kapital: "keines",
    haftung: "unbeschränkt (Komplementär) / beschränkt (Kommanditär)",
    gruender: "ab 2 Personen",
  },
  {
    name: "GmbH",
    kapital: "CHF 20’000",
    haftung: "beschränkt aufs Gesellschaftsvermögen",
    gruender: "ab 1 Person",
  },
  {
    name: "AG",
    kapital: "CHF 100’000 (mind. CHF 50’000 liberiert)",
    haftung: "beschränkt aufs Gesellschaftsvermögen",
    gruender: "ab 1 Person",
  },
  { name: "Genossenschaft", kapital: "keines", haftung: "beschränkt (i.d.R.)", gruender: "ab 7 Personen" },
  { name: "Verein", kapital: "keines", haftung: "beschränkt aufs Vereinsvermögen", gruender: "ab 2 Personen" },
];

const entscheidungshilfen = [
  {
    titel: "Solo-Start, geringes Risiko, wenig Kapital",
    text: "Einzelfirma, schnell, günstig, formlos. Haftungsrisiko realistisch einschätzen, sobald Investitionen oder Auftragsvolumen wachsen.",
  },
  {
    titel: "Mehrere Partner, gemeinsames Tagesgeschäft",
    text: "Kollektivgesellschaft für den einfachen Start ohne Kapital, oder direkt GmbH, wenn Haftungsbeschränkung von Anfang an wichtig ist.",
  },
  {
    titel: "Haftung begrenzen, moderates Kapital vorhanden",
    text: "GmbH, CHF 20’000 Stammkapital, klare Trennung von Privat- und Geschäftsvermögen, aber ohne Anonymität der Gesellschafter.",
  },
  {
    titel: "Investoren, Wachstum, Anonymität gewünscht",
    text: "AG, höherer Kapitalbedarf (CHF 100’000), dafür leicht übertragbare Aktien und anonyme Aktionäre.",
  },
  {
    titel: "Ideeller Zweck, Mitgliederorganisation",
    text: "Verein oder Genossenschaft, je nachdem ob ideelle oder wirtschaftliche Mitgliederförderung im Vordergrund steht.",
  },
];

const quellen = [
  { label: "Goldblum, „Einzelfirma gründen Schweiz“ (2026)", href: "https://goldblum.ch/de/firmengruendung/einzelfirma-gruenden/" },
  {
    label: "Pfeffersack, „Buchhaltung Einzelfirma Schweiz – was ist Pflicht?“ (2026)",
    href: "https://pfeffersack.ch/blog/buchhaltung-einzelfirma-schweiz-pflicht",
  },
  {
    label: "Magic Heidi, „Schweizer GmbH gründen 2026: Kompletter Leitfaden“",
    href: "https://magicheidi.ch/de/swiss-llc-deep-dive",
  },
  {
    label: "ag-kaufen.com, „AG gründen Schweiz – Anleitung, Kosten & Ablauf 2026“",
    href: "https://ag-kaufen.com/ag-gruenden-schweiz/",
  },
  {
    label: "Bundesamt für Justiz, „Schweizerisches Transparenzregister“ (2026)",
    href: "https://www.bj.admin.ch/de/schweizerisches-transparenzregister",
  },
  {
    label: "Gründung Schweiz, „Gesellschaftsformen Schweiz: Rechtsformen im Vergleich“ (2026)",
    href: "https://xn--grndung-schweiz-0vb.com/gesellschaften/",
  },
  {
    label: "Baloise, „Rechtsformen in der Schweiz: Übersicht und Entscheidungshilfe“",
    href: "https://www.baloise.ch/de/unternehmenskunden/firma-gruenden/vor-gruendung/rechtsformen.html",
  },
  {
    label: "Insolution, „Rechtsformen Schweiz: Leitfaden zu den Gesellschaftsformen“",
    href: "https://www.insolution.ch/rechtsformen.html",
  },
  {
    label: "KMU Portal (admin.ch), „Übersicht Rechtsformen“",
    href: "https://www.kmu.admin.ch/de/ubersicht-rechtsformen-eigenschaften-der-verschiedenen-rechtsformen",
  },
  {
    label: "Kredes, „GmbH gründen Schweiz Checkliste 2026“",
    href: "https://kredes.ch/gmbh-gruenden-schweiz-checkliste-2026-kosten-anleitung/",
  },
  {
    label: "selbständige.ch, „GmbH gründen in der Schweiz: Ablauf, Kosten und Pflichten“ (2026)",
    href: "https://www.xn--selbstndige-q8a.ch/guide/gmbh-gruenden-schweiz",
  },
  {
    label: "economiesuisse, „Neue Pflichten für Unternehmen ab 1. Oktober 2026“",
    href: "https://www.economiesuisse.ch/de/artikel/transparenzregister-neue-pflichten-fuer-unternehmen-ab-1-oktober-2026",
  },
  {
    label: "SwissCompany, „Transparenzregister und Geldwäschereigesetz Schweiz 2026“",
    href: "https://www.swisscompany.com/transparenzregister-und-geldwaeschereigesetz-schweiz-2026/",
  },
];

const linkClass =
  "font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-2 hover:text-[var(--accent-dark)] hover:decoration-[var(--accent-dark)]/40";

export default function UnternehmensgruendungSchweizPost() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link href="/blog" className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]">
        ← Alle Beiträge
      </Link>

      <div className="mt-6 flex items-center gap-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        <span className="text-[13px] font-semibold tracking-wide text-[var(--accent-soft)] uppercase">
          Recherche · Schweizer Wirtschaftsrecht
        </span>
      </div>

      <h1 className="mt-5 text-[32px] font-bold leading-tight sm:text-[40px]">
        Unternehmen gründen in der Schweiz: die Rechtsform als erste grosse Entscheidung
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        Ein Überblick über Einzelfirma, Personengesellschaften, GmbH, AG und die Sonderformen, mit
        Kapital, Haftung, Steuern und den Pflichten, die 2026 neu hinzukommen.
      </p>

      <p className="mt-4 text-[13px] text-[var(--muted-2)]">Stand: 10. August 2026 · ca. 12 Min. Lesezeit</p>

      <div className="mt-10 rounded-[20px] border border-[var(--accent-soft)]/20 bg-[var(--surface)] p-7">
        <p className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--accent-soft)] uppercase">
          Auf den Punkt gebracht
        </p>
        <ul className="grid gap-3 pl-5 text-[17px] leading-relaxed text-[var(--foreground)]">
          <li className="list-disc">
            Die <strong>Einzelfirma</strong> braucht kein Kapital, ist in Tagen startklar, kostet aber
            unbeschränkte persönliche Haftung.
          </li>
          <li className="list-disc">
            Ab <strong>CHF 100’000 Jahresumsatz</strong> werden Handelsregistereintrag und
            Mehrwertsteuerpflicht für Personenunternehmen obligatorisch.
          </li>
          <li className="list-disc">
            <strong>GmbH</strong> (CHF 20’000 Stammkapital) und <strong>AG</strong> (CHF 100’000
            Aktienkapital, mind. CHF 50’000 liberiert) trennen Privat- und Geschäftsvermögen, gegen
            mehr Aufwand und laufende Pflichten.
          </li>
          <li className="list-disc">
            Ab <strong>1. Oktober 2026</strong> gilt das neue Transparenzregister: AG, GmbH und
            Genossenschaften müssen ihre wirtschaftlich berechtigten Personen zentral beim Bund
            melden.
          </li>
        </ul>
      </div>

      <div className="mt-14 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <h2 className="mt-0 mb-1 text-2xl font-bold">Warum die Rechtsform am Anfang steht</h2>
        <p>
          Die Wahl der Rechtsform legt fest, wie stark eine Gründerin oder ein Gründer für Schulden
          des Unternehmens persönlich haftet, wie hoch die Steuerlast auf Gewinnen ausfällt, welche
          Sozialversicherungen obligatorisch werden und wie viel administrativen Aufwand die
          Gründung und der laufende Betrieb verursachen. Ein nachträglicher Wechsel ist möglich,
          aber mit Notariats-, Steuer- und Beratungskosten verbunden, wer die Struktur erst plant
          und dann gründet, spart sich diesen Umweg.
        </p>
        <p>
          Grundsätzlich gilt: Je höher das unternehmerische Risiko oder der Kapitaleinsatz, desto
          eher lohnt sich eine Rechtsform mit beschränkter Haftung, also GmbH oder AG. Bei
          Personengesellschaften wie der Einzelfirma werden Unternehmen und Eigentümer steuerlich
          nicht getrennt; bei Kapitalgesellschaften schon, und hohe Gewinne werden dort tendenziell
          günstiger besteuert.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Die Rechtsformen im Vergleich</h2>
        <p>
          Das Schweizer Recht kennt acht praktisch relevante Gesellschaftsformen:
          Personengesellschaften (Einzelfirma, einfache Gesellschaft, Kollektiv- und
          Kommanditgesellschaft), Kapitalgesellschaften (GmbH, AG) sowie die Sonderformen Verein,
          Stiftung und Genossenschaft.
        </p>

        <div className="overflow-x-auto rounded-[16px] border border-[var(--accent-soft)]/15">
          <table className="w-full min-w-[640px] border-collapse text-[15px]">
            <thead>
              <tr className="bg-[var(--surface)] text-left">
                <th className="p-3.5 font-semibold">Rechtsform</th>
                <th className="p-3.5 font-semibold">Mindestkapital</th>
                <th className="p-3.5 font-semibold">Haftung</th>
                <th className="p-3.5 font-semibold">Gründer</th>
              </tr>
            </thead>
            <tbody>
              {rechtsformen.map((r, i) => (
                <tr key={r.name} className={i % 2 === 1 ? "bg-[var(--surface)]/50" : ""}>
                  <td className="border-t border-[var(--accent-soft)]/12 p-3.5 font-semibold">{r.name}</td>
                  <td className="border-t border-[var(--accent-soft)]/12 p-3.5 text-[var(--muted)]">
                    {r.kapital}
                  </td>
                  <td className="border-t border-[var(--accent-soft)]/12 p-3.5 text-[var(--muted)]">
                    {r.haftung}
                  </td>
                  <td className="border-t border-[var(--accent-soft)]/12 p-3.5 text-[var(--muted)]">
                    {r.gruender}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--muted-2)]">
          Übersicht der Grundzüge; Details zu Haftung und Gründungsablauf je Rechtsform im
          Folgenden.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Einzelfirma, der schnellste Weg in die Selbständigkeit</h2>
        <p>
          Die Einzelfirma ist die beliebteste Rechtsform für Selbständige in der Schweiz. Sie
          entsteht formlos mit der Aufnahme der Tätigkeit, ohne Mindestkapital, ohne Notar, ohne
          Beurkundung.
        </p>
        <p className="font-semibold text-[var(--foreground)]">Worauf zu achten ist:</p>
        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">
            Der Gewinn gilt vollständig als persönliches Einkommen und wird entsprechend besteuert,
            es gibt keine Trennung zwischen Firmen- und Privatvermögen, dafür haftet die Inhaberin
            oder der Inhaber unbeschränkt mit dem gesamten Privatvermögen.
          </li>
          <li className="list-disc">
            Der Handelsregistereintrag wird erst ab einem Jahresumsatz (Rohertrag, nicht Gewinn) von
            CHF 100’000 zur Pflicht, darunter ist er freiwillig, sichert aber den Firmennamen.
          </li>
          <li className="list-disc">
            Ab derselben Schwelle von CHF 100’000 Umsatz wird die Einzelfirma
            mehrwertsteuerpflichtig (Normalsatz 2026: 8.1 %).
          </li>
          <li className="list-disc">
            Buchführungspflicht besteht ab dem ersten Franken Umsatz; bis CHF 500’000 genügt aber
            die einfache Buchhaltung (Einnahmen, Ausgaben, Vermögenslage), darüber ist die doppelte
            Buchführung mit Bilanz Pflicht.
          </li>
          <li className="list-disc">
            Eine Anmeldung bei der kantonalen AHV-Ausgleichskasse als Selbständigerwerbende ist
            unabhängig vom Handelsregister nötig, die Kasse prüft dabei, ob die Tätigkeit
            tatsächlich als selbständig gilt.
          </li>
          <li className="list-disc">
            Als Selbständige besteht kein automatischer Schutz durch BVG und UVG; eine freiwillige
            Absicherung sowie eine Krankentaggeldversicherung sind zu prüfen.
          </li>
        </ul>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          Einfache Gesellschaft, Kollektiv- und Kommanditgesellschaft
        </h2>
        <p>
          Diese drei Formen eignen sich, wenn mehrere Personen gemeinsam ein Geschäft betreiben,
          aber (noch) keine Kapitalgesellschaft gründen wollen.
        </p>
        <p>
          <strong>Einfache Gesellschaft:</strong> eine vertragliche Partnerschaft ohne formelle
          Gründungsanforderungen, geeignet für temporäre Projekte. Jeder Partner haftet unbegrenzt
          und solidarisch für die Verbindlichkeiten.
        </p>
        <p>
          <strong>Kollektivgesellschaft:</strong> mindestens zwei natürliche Personen führen
          gemeinsam ein nach kaufmännischen Regeln geführtes Unternehmen unter gemeinsamer Firma.
          Sie besitzt keine eigene Rechtspersönlichkeit, ist selbst nicht steuerpflichtig,
          Gewinnanteile werden bei den Gesellschaftern privat besteuert, und ist stark von den
          Inhabern abhängig. Wie bei der Einzelfirma greift die Buchführungspflicht erst ab CHF
          500’000 Jahresumsatz in der einfachen Form.
        </p>
        <p>
          <strong>Kommanditgesellschaft:</strong> eine Sonderform der Kollektivgesellschaft, bei der
          mindestens ein Komplementär unbeschränkt haftet, während Kommanditäre nur mit ihrer
          einbezahlten Kommanditsumme haften, interessant, um Kapitalgeber einzubinden, ohne dass
          diese operativ mit ihrem Privatvermögen einstehen müssen.
        </p>
        <p className="rounded-[16px] bg-[var(--surface)] p-5 text-base">
          Wichtig für alle drei Formen: Kein Mindestkapital nötig, aber auch keine
          Haftungsbeschränkung für die vollhaftenden Gesellschafter, das persönliche Vermögen
          bleibt Risikoträger.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">GmbH, die meistgewählte Kapitalgesellschaft</h2>
        <p>
          Die GmbH gilt als Mischform zwischen AG und Kollektivgesellschaft und eignet sich für
          Familienbetriebe sowie kleine bis mittelgrosse Firmen. Als eigenständige juristische
          Person haftet sie mit ihrem Gesellschaftsvermögen, unabhängig vom Privatvermögen der
          Gesellschafter.
        </p>
        <p className="font-semibold text-[var(--foreground)]">Kapital und Gründung:</p>
        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">
            Das Stammkapital muss mindestens CHF 20’000 betragen und vollständig gezeichnet werden;
            es bleibt Eigentum der Gesellschaft und steht nach der Gründung für Investitionen,
            Löhne und laufende Kosten zur Verfügung.
          </li>
          <li className="list-disc">
            Nötig sind Statuten, eine öffentliche notarielle Beurkundung und der Eintrag ins
            Handelsregister; die Gründung dauert typischerweise 2–4 Wochen.
          </li>
          <li className="list-disc">
            Reine Gründungskosten ohne Stammkapital liegen 2026 bei rund CHF 1’400 im Minimum
            (Notar, Handelsregister, Bank).
          </li>
          <li className="list-disc">
            Die Geschäftsführung muss durch mindestens eine Person mit Wohnsitz in der Schweiz
            erfolgen.
          </li>
          <li className="list-disc">Doppelte Buchführung ist Pflicht, unabhängig vom Umsatz.</li>
          <li className="list-disc">
            Mitarbeitende Gesellschafter gelten sozialversicherungsrechtlich als Angestellte der
            eigenen GmbH, Lohnabrechnung, AHV als Arbeitgeber, BVG und UVG werden Pflicht.
          </li>
          <li className="list-disc">
            Anders als bei der AG sind die Gesellschafter mit ihren Stammanteilen im
            Handelsregister öffentlich einsehbar, keine Anonymität.
          </li>
        </ul>

        <h2 className="mt-10 mb-1 text-2xl font-bold">AG, Struktur für Wachstum und Investoren</h2>
        <p>
          Die Aktiengesellschaft ist eine Kapitalgesellschaft nach Obligationenrecht mit eigener
          Rechtspersönlichkeit; die Aktionäre haften ausschliesslich mit ihrer Kapitaleinlage, eine
          Nachschusspflicht besteht nicht.
        </p>
        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">
            Das Aktienkapital muss mindestens CHF 100’000 betragen; davon sind bei der Gründung
            mindestens 20 %, in jedem Fall aber CHF 50’000, effektiv einzuzahlen (zu liberieren).
          </li>
          <li className="list-disc">
            Seit der Aktienrechtsrevision 2023 kann eine AG von einer einzigen Person, natürlich
            oder juristisch, gegründet werden, sofern diese Wohnsitz in der Schweiz hat.
          </li>
          <li className="list-disc">
            Nötig sind Statuten, eine notarielle Beurkundung und der Handelsregistereintrag; die
            Gründung dauert etwa 1–2 Wochen.
          </li>
          <li className="list-disc">
            Anders als bei der GmbH bleiben die Aktionäre im Handelsregister anonym, nur der
            Verwaltungsrat und Zeichnungsberechtigte sind öffentlich sichtbar.
          </li>
          <li className="list-disc">
            Pflichtorgane sind Generalversammlung und Verwaltungsrat; die AG muss durch mindestens
            eine in der Schweiz wohnhafte Person vertreten werden können.
          </li>
          <li className="list-disc">
            Auf Gesellschaftsebene fällt Gewinnsteuer an, bei Ausschüttung zusätzlich
            Einkommenssteuer auf die Dividende bei den Aktionären, eine wirtschaftliche
            Doppelbelastung, die bei der Lohn-/Dividendenplanung berücksichtigt werden sollte.
          </li>
        </ul>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Sonderformen: Verein, Genossenschaft, Stiftung</h2>
        <p>
          Für nicht primär gewinnorientierte oder mitgliedschaftlich organisierte Vorhaben gibt es
          drei weitere Formen, die in Gründungsvergleichen oft zu kurz kommen:
        </p>
        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">
            <strong>Verein:</strong> mindestens zwei Mitglieder, kein Mindestkapital, formlos
            gründbar über Statuten; haftet grundsätzlich nur mit dem Vereinsvermögen. Geeignet für
            ideelle, sportliche oder gemeinnützige Zwecke, auch für Non-Profit-Projekte mit
            Geschäftsbetrieb.
          </li>
          <li className="list-disc">
            <strong>Genossenschaft:</strong> mindestens sieben Mitglieder, kein gesetzliches
            Mindestkapital, im Zentrum steht die Förderung eines gemeinsamen wirtschaftlichen
            Interesses der Mitglieder (z. B. Einkaufs- oder Wohngenossenschaften) statt reiner
            Kapitalrendite.
          </li>
          <li className="list-disc">
            <strong>Stiftung:</strong> ein einem bestimmten Zweck gewidmetes Vermögen ohne
            Mitglieder; braucht eine Gründungsurkunde, ein Widmungsvermögen und wird von einer
            Aufsichtsbehörde überwacht, typischerweise für gemeinnützige oder Familienzwecke.
          </li>
        </ul>
        <p>
          Genossenschaften fallen, ebenso wie bestimmte Investment- und Kommanditgesellschaften,
          ausdrücklich unter die neue Transparenzregister-Pflicht (siehe unten).
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Neu ab 1. Oktober 2026: das Transparenzregister</h2>
        <p>
          Der Bundesrat hat das revidierte Geldwäschereigesetz sowie das neue Bundesgesetz über die
          Transparenz juristischer Personen und die Identifikation der wirtschaftlich berechtigten
          Personen (TJPG) auf den 1. Oktober 2026 in Kraft gesetzt. Ein zentrales, vom Bundesamt für
          Justiz geführtes Register erfasst künftig alle Personen, die eine juristische Person mit
          Sitz in der Schweiz tatsächlich kontrollieren, etwa über Kapitalbeteiligung oder
          Stimmrechte.
        </p>
        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">
            Betroffen sind insbesondere Aktiengesellschaften, GmbH, Genossenschaften sowie
            ausgewählte Investment- und Kommanditgesellschaften; auch ausländische Unternehmen mit
            Niederlassung, tatsächlicher Verwaltung oder Grundeigentum in der Schweiz.
          </li>
          <li className="list-disc">
            Als wirtschaftlich berechtigt gilt in der Regel, wer mindestens 25 % des Kapitals oder
            der Stimmrechte hält oder auf andere Weise vergleichbare Kontrolle ausübt.
          </li>
          <li className="list-disc">
            Das Register ist nicht öffentlich einsehbar, Zugriff haben nur bestimmte Behörden und,
            unter definierten Voraussetzungen, Finanzintermediäre.
          </li>
          <li className="list-disc">
            Für bereits im Handelsregister eingetragene Gesellschaften gelten abgestufte
            Übergangsfristen; die Meldung muss grundsätzlich innerhalb eines Monats nach der ersten
            Handelsregisteränderung nach Inkrafttreten erfolgen.
          </li>
          <li className="list-disc">
            Die vorsätzliche Verletzung der Melde- oder Sorgfaltspflichten kann mit einer Busse bis
            zu CHF 500’000 geahndet werden, eine frühzeitige Registrierung über EasyGov.swiss wird
            empfohlen.
          </li>
        </ul>
        <p>
          Für Einzelfirmen, einfache Gesellschaften sowie Kollektiv- und Kommanditgesellschaften
          ohne eigene Rechtspersönlichkeit greift die neue Meldepflicht nicht, sie betrifft
          juristische Personen.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Entscheidungshilfe: wer sollte was wählen?</h2>
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
        <p>
          In der Praxis kommen drei Übergänge laufend vor: Die Einzelfirma wird bei wachsendem
          Risiko per Vermögensübertragung in eine GmbH überführt; die GmbH wird bei
          Investoreneinstieg nach Fusionsgesetz direkt in eine AG umgewandelt; und operative
          Gesellschaften erhalten eine Holding als Dach, sobald mehrere Beteiligungen zu trennen
          sind.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Fazit</h2>
        <p>
          Es gibt keine grundsätzlich „beste“ Rechtsform, nur die passende für Risiko,
          Kapitalausstattung, Partnerkonstellation und Wachstumspläne im konkreten Fall. Wer allein
          und mit überschaubarem Risiko startet, kommt mit der Einzelfirma am schnellsten los; wer
          Haftung begrenzen oder Investoren einbinden will, kalkuliert von Anfang an mit dem
          höheren Kapital- und Verwaltungsaufwand von GmbH oder AG. Unabhängig von der Wahl lohnt
          sich ab 2026 ein Blick auf das neue Transparenzregister, und generell die frühzeitige
          Klärung der Struktur, bevor die Gründungsdokumente entstehen.
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
          Steuerberatung im Einzelfall. Zahlen und Fristen basieren auf öffentlich zugänglichen
          Quellen, Stand August 2026.
        </p>
      </section>
    </div>
  );
}
