import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Buchhaltung für Selbständige und KMU: Pflicht, Tools und wann sich ein Treuhänder lohnt – Mach's eifach",
  description:
    "Was das Gesetz verlangt, welche Software zu welcher Betriebsgrösse passt, und ab wann Selbermachen an Grenzen stösst.",
};

const software = [
  {
    setup: "Solo-Selbständige, Einzelfirma ohne Personal",
    wahl: "Banana Accounting, AbaNinja (Swiss21) oder schlanke Cloud-Tools",
    warum: "Günstig bis gratis im Einstieg, einfache Buchhaltung, keine Lohnbuchhaltung nötig",
  },
  {
    setup: "Klein-KMU, 1–10 Mitarbeitende",
    wahl: "bexio mit Lohn-Modul, alternativ Sage 50",
    warum: "Alles in einer Cloud-Plattform, vom Angebot bis zur AHV-Abrechnung",
  },
  {
    setup: "Mittel-KMU, 10–50+ Mitarbeitende",
    wahl: "Abacus (modular), Sage 50",
    warum: "Wächst mit, mehrere Geschäftsbereiche, Filialen, Lagerverwaltung",
  },
  {
    setup: "Treuhand-geführte Betriebe",
    wahl: "accounto, Run my Accounts, Topal",
    warum: "Gemeinsame Bearbeitung mit dem Treuhandbüro ohne CSV-Hin-und-Her",
  },
  {
    setup: "Vereine, Stiftungen, Mikrobetriebe",
    wahl: "Banana Accounting",
    warum: "Einmalige Lizenz, funktioniert offline, kein Abo nötig",
  },
];

const entscheidungshilfen = [
  {
    titel: "Einzelfirma unter CHF 100’000 Umsatz",
    text: "Einfache Buchhaltung, Software ab wenigen Franken pro Monat oder Banana als einmalige Lizenz. Kein Treuhänder nötig, ausser bei Unsicherheit zur Steuererklärung.",
  },
  {
    titel: "Einzelfirma CHF 100’000–500’000 Umsatz",
    text: "Weiterhin einfache Buchhaltung möglich, aber MWST-Pflicht und Handelsregister kommen dazu. Treuhänder oft sinnvoll für MWST-Abrechnung und Jahresabschluss.",
  },
  {
    titel: "GmbH oder AG",
    text: "Doppelte Buchhaltung ab Tag eins. Laufende Buchungen selbst mit Cloud-Software machbar, Jahresabschluss und Steuern über einen Treuhänder empfehlenswert.",
  },
  {
    titel: "KMU mit Mitarbeitenden",
    text: "Software mit Lohn-Modul (bexio, Sage 50, Abacus) oder Auslagerung der Lohnbuchhaltung ans Treuhandbüro, Sozialversicherungen und Quellensteuer sind fehleranfällig in Eigenregie.",
  },
];

const quellen = [
  { label: "Pfeffersack Lexikon, „Buchführungspflicht OR 957a“ (2026)", href: "https://pfeffersack.ch/lexikon/or-957a" },
  {
    label: "BestInSwiss, „Treuhänder oder Buchhalter? Die wichtigsten Unterschiede“ (Juni 2026)",
    href: "https://bestinswiss.ch/blog/treuhaender-oder-buchhalter-die-wichtigsten-unterschiede-fuer-unternehmen-in-der-schweiz",
  },
  {
    label: "Proffix, „Buchhaltung Schweiz für KMU: Grundlagen & Tipps“",
    href: "https://www.proffix.ch/de/buchhaltung-grundlagen-schweiz",
  },
  {
    label: "Qovera, „Buchführungspflicht in der Schweiz: Das gilt (2026)“",
    href: "https://www.qovera.ch/ratgeber/buchfuehrungspflicht-schweiz",
  },
  {
    label: "StartupSchwiiz, „Buchhaltungssoftware Schweiz 2026: 8 Anbieter im Vergleich“ (Mai 2026)",
    href: "https://www.startupschwiiz.ch/banking/buchhaltungssoftware-schweiz",
  },
  {
    label: "Gründer Schweiz, „Beste Buchhaltungssoftware Schweiz 2026“ (Juli 2026)",
    href: "https://www.xn--grnder-schweiz-hsb.ch/bestenlisten/buchhaltungssoftware-schweiz",
  },
  {
    label: "selbständig-schweiz.ch, „Buchhaltungssoftware Schweiz 2026: Bexio, Klara & Co. im Test“ (Januar 2026)",
    href: "https://www.xn--selbstndig-schweiz-qtb.ch/artikel/buchhaltungssoftware-vergleich",
  },
  {
    label: "fibu3, „Buchhaltung selber machen oder Treuhänder“ (Mai 2026)",
    href: "https://www.fibu3.ch/blogs/buchhaltung-selber-machen-oder-treuhaender.html",
  },
  {
    label: "Scalemetrics, „Beste Buchhaltungssoftware Schweizer KMU 2026“ (Juni 2026)",
    href: "https://www.scalemetrics.ai/de/beste-buchhaltungssoftware-schweizer-kmu/",
  },
  {
    label: "Goldblum, „Buchhaltung Schweiz – Pflichten, Kosten & Treuhand 2026“ (Mai 2026)",
    href: "https://goldblum.ch/de/wissensdatenbank/buchhaltung-schweiz",
  },
  {
    label: "Rothstein, „Buchhaltung in der Schweiz: Pflichten, Kosten, Software und MWST für KMU“ (März 2026)",
    href: "https://rothstein.swiss/buchhaltung-schweiz-einfach-erklaert/",
  },
  {
    label: "Balio, „bexio vs AbaNinja (2026): Preise, Funktionen, für wen was passt“ (Juni 2026)",
    href: "https://balio.ch/de/vergleich/bexio-vs-abaninja",
  },
];

const linkClass =
  "font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-2 hover:text-[var(--accent-dark)] hover:decoration-[var(--accent-dark)]/40";

export default function BuchhaltungSelbstaendigeKmuPost() {
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
        Buchhaltung für Selbständige und KMU: Pflicht, Tools und wann sich ein Treuhänder lohnt
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        Was das Gesetz verlangt, welche Software zu welcher Betriebsgrösse passt, und ab wann
        Selbermachen an Grenzen stösst.
      </p>

      <p className="mt-4 text-[13px] text-[var(--muted-2)]">Stand: 10. August 2026 · ca. 10 Min. Lesezeit</p>

      <div className="mt-10 rounded-[20px] border border-[var(--accent-soft)]/20 bg-[var(--surface)] p-7">
        <p className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--accent-soft)] uppercase">
          Auf den Punkt gebracht
        </p>
        <ul className="grid gap-3 pl-5 text-[17px] leading-relaxed text-[var(--foreground)]">
          <li className="list-disc">
            Jedes Unternehmen ist buchführungspflichtig, entscheidend ist nur, wie umfangreich:
            einfache Einnahmen-Ausgaben-Rechnung oder doppelte Buchhaltung mit Bilanz.
          </li>
          <li className="list-disc">
            Einzelfirmen und Personengesellschaften dürfen bis <strong>CHF 500’000 Jahresumsatz</strong>{" "}
            die einfache Buchhaltung führen; GmbH und AG brauchen die doppelte Buchhaltung ab dem
            ersten Tag, unabhängig vom Umsatz.
          </li>
          <li className="list-disc">
            Passende Software richtet sich nach Grösse und Rechtsform, von einfachen Tools für
            Solo-Selbständige bis zu Treuhand-tauglichen Cloud-Lösungen für wachsende KMU.
          </li>
          <li className="list-disc">
            Ein Treuhänder ist nicht für jede Buchhaltung zwingend, wird aber bei MWST, Löhnen,
            Jahresabschluss oder GmbH/AG schnell sinnvoll.
          </li>
        </ul>
      </div>

      <div className="mt-14 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <h2 className="mt-0 mb-1 text-2xl font-bold">Was das Gesetz verlangt</h2>
        <p>
          Nach Art. 957 des Obligationenrechts (OR) ist grundsätzlich jedes Unternehmen
          buchführungspflichtig, eine vollständige Befreiung gibt es nicht. Der Gesetzgeber
          unterscheidet aber streng nach Rechtsform und Umsatz, wie umfangreich diese Buchführung
          sein muss.
        </p>
        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">
            Einzelunternehmen und Personengesellschaften mit weniger als CHF 500’000 Umsatzerlös im
            letzten Geschäftsjahr sind von der ordentlichen Buchführungspflicht befreit und müssen
            nur Einnahmen, Ausgaben und die Vermögenslage dokumentieren, die sogenannte einfache
            Buchhaltung oder „Milchbüechli-Rechnung“.
          </li>
          <li className="list-disc">
            Ab CHF 500’000 Umsatz sowie für sämtliche im Handelsregister eintragungspflichtigen
            juristischen Personen (AG, GmbH, Genossenschaft, Verein, Stiftung) gilt die ordentliche,
            doppelte Buchführung mit Bilanz, Erfolgsrechnung und Anhang, für Kapitalgesellschaften
            unabhängig vom Umsatz, bereits ab Gründung.
          </li>
          <li className="list-disc">
            Ab Überschreiten der Schwellen von Bilanzsumme CHF 20 Mio., Umsatz CHF 40 Mio. oder 250
            Vollzeitstellen gelten erweiterte Anforderungen mit Geldflussrechnung und Lagebericht,
            relevant erst für grössere Betriebe.
          </li>
          <li className="list-disc">
            Geschäftsbücher, Rechnungen und Belege müssen in der Regel während zehn Jahren
            aufbewahrt werden, digital oder in Papierform, wobei die Lesbarkeit jederzeit
            gewährleistet sein muss.
          </li>
          <li className="list-disc">
            Verstösse gegen die Buchführungspflicht sind nach Art. 325 StGB strafbar; unsauber
            geführte Bücher führen zudem häufig zu einer Ermessenseinschätzung des Gewinns durch das
            Steueramt, die meist teurer ausfällt als korrekte Buchhaltung.
          </li>
        </ul>
        <p className="rounded-[16px] bg-[var(--surface)] p-5 text-base">
          Zur Einordnung: MWST-Pflicht und Handelsregistereintrag für Einzelfirmen greifen bereits
          ab CHF 100’000 Umsatz, deutlich früher als die doppelte Buchführungspflicht bei CHF
          500’000. Beide Schwellen sind unabhängig voneinander zu prüfen.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Einfache vs. doppelte Buchhaltung</h2>
        <p>
          Die einfache Buchhaltung erfasst den reinen Geldfluss: was reinkommt, was rausgeht, dazu
          eine Aufstellung der Vermögenslage. Kein Soll und Haben, kein umfangreicher Kontenplan,
          keine Bilanz, und in den meisten Fällen reicht das dem Steueramt völlig aus.
        </p>
        <p>
          Die doppelte Buchhaltung bucht jeden Geschäftsvorfall auf mindestens zwei Konten und
          bildet Vermögen, Schulden und Erfolg umfassend ab, Pflichtbestandteile sind Bilanz und
          Erfolgsrechnung, strukturiert nach einem Kontenplan (in der Schweiz meist nach dem
          KMU-Kontenrahmen).
        </p>
        <p>
          Für die Praxis heisst das: Solo-Selbständige und kleine Einzelfirmen kommen mit wenigen
          Minuten Aufwand pro Woche aus, solange sie unter der 500’000-Schwelle bleiben. Wer die
          Schwelle überschreitet oder eine GmbH/AG führt, braucht ab dem Folgejahr einen
          vollständigen Kontenplan samt Jahresabschluss.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Software: was für wen passt</h2>
        <p>
          Es gibt nicht die eine beste Buchhaltungssoftware, nur die beste für die eigene
          Betriebsgrösse und Arbeitsweise. Eine grobe Einordnung nach Setup:
        </p>

        <div className="overflow-x-auto rounded-[16px] border border-[var(--accent-soft)]/15">
          <table className="w-full min-w-[640px] border-collapse text-[15px]">
            <thead>
              <tr className="bg-[var(--surface)] text-left">
                <th className="p-3.5 font-semibold">Setup</th>
                <th className="p-3.5 font-semibold">Typische Wahl</th>
                <th className="p-3.5 font-semibold">Warum</th>
              </tr>
            </thead>
            <tbody>
              {software.map((s, i) => (
                <tr key={s.setup} className={i % 2 === 1 ? "bg-[var(--surface)]/50" : ""}>
                  <td className="border-t border-[var(--accent-soft)]/12 p-3.5 font-semibold">{s.setup}</td>
                  <td className="border-t border-[var(--accent-soft)]/12 p-3.5 text-[var(--muted)]">
                    {s.wahl}
                  </td>
                  <td className="border-t border-[var(--accent-soft)]/12 p-3.5 text-[var(--muted)]">
                    {s.warum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">
            Banana bleibt die Referenz für echte doppelte Buchhaltung auf einfachster Basis, bexio
            für integrierte Admin-Prozesse (Angebote, Rechnungen, Lohn), accounto für begleitete
            Treuhand-Setups und KLARA für ein plattformartiges Cloud-Erlebnis.
          </li>
          <li className="list-disc">
            Bei Cloud-Lösungen lässt sich dem Treuhänder direkt ein Lese- oder Bearbeitungszugang
            geben, das spart das Exportieren und Verschicken von Dateien, wie es bei reinen
            Desktop-Tools wie Banana nötig ist.
          </li>
          <li className="list-disc">
            Bei Mitarbeitenden lohnt sich ein Blick auf Swissdec-zertifizierte Lohnmodule; Bexio,
            Sage 50, Abacus und Topal decken Lohnbuchhaltung, BVG- und Quellensteuerabrechnung
            vollständig ab.
          </li>
          <li className="list-disc">
            AbaNinja ist die Rechnungs- und Buchhaltungs-App im Abacus-Ökosystem Swiss21: Starter
            gratis (bis 500 Rechnungen/Jahr), Basic ab CHF 21, Pro ab CHF 49 pro Monat, damit meist
            günstiger im Einstieg als bexio, dafür mit komplexerer Einrichtung (Kontenplan muss
            selbst angelegt werden).
          </li>
          <li className="list-disc">
            Preislich liegt die Spanne 2026 zwischen kostenlosen Basisversionen und rund CHF
            100–400 pro Monat für modulare Lösungen wie Abacus, wichtiger als der Preis ist, dass
            die Software regelmässig genutzt wird.
          </li>
        </ul>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Selber machen oder Treuhänder?</h2>
        <p>
          Viele Selbständige, Vereine und kleine Unternehmen können ihre laufende Buchhaltung
          selbst erledigen, wenn die Struktur überschaubar ist und Einnahmen, Ausgaben, Belege und
          Bankbewegungen sauber und regelmässig erfasst werden.
        </p>
        <p className="font-semibold text-[var(--foreground)]">
          Ein Treuhänder wird typischerweise sinnvoll, sobald eines dieser Kriterien zutrifft:
        </p>
        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">Mehrwertsteuerpflicht (ab CHF 100’000 Umsatz) mit periodischen Abrechnungen.</li>
          <li className="list-disc">
            Mitarbeitende und damit Lohnbuchhaltung, Sozialversicherungsabrechnungen und
            Quellensteuer.
          </li>
          <li className="list-disc">
            Rechtsform GmbH oder AG mit doppelter Buchhaltung, Jahresabschluss und ggf.
            Revisionsfragen.
          </li>
          <li className="list-disc">
            Der Jahresabschluss wird für Bankgespräche, Kreditanträge oder Investorengespräche
            gebraucht und muss professionell aufbereitet sein.
          </li>
          <li className="list-disc">
            Unsicherheit bei Steuerfragen oder Spezialfällen wie Liegenschaften, internationalen
            Transaktionen oder Rückstellungen.
          </li>
        </ul>
        <p>
          Ein bewährtes Mittelmass: die laufende Buchhaltung (Belege erfassen, Rechnungen stellen,
          Bank abgleichen) selbst mit Software erledigen und nur den Jahresabschluss sowie die
          Steuererklärung an einen Treuhänder geben. Wer Routinearbeiten sauber selbst vorbereitet,
          reduziert damit oft auch den Beratungsaufwand und die Kosten beim Treuhänder.
        </p>
        <p>
          Wichtig zu unterscheiden: Ein Buchhalter verbucht laufende Geschäftsfälle, ein
          Treuhänder deckt darüber hinaus Steuererklärung, Jahresabschluss und Beratung ab, ein
          günstiger reiner Buchhalter kann am Ende teurer sein, wenn zusätzlich noch ein
          Treuhänder für Steuern gebraucht wird. Buchhaltung und Revision dürfen zudem gesetzlich
          nicht vom selben Anbieter stammen (Unabhängigkeitsgebot).
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Entscheidungshilfe</h2>
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
          Buchhaltung in der Schweiz ist kein Selbstzweck, sondern die Grundlage für Steuern,
          Bankgespräche und unternehmerische Entscheidungen. Wer klein und einfach anfängt, kommt
          mit einer schlanken Software und Eigenregie weit; sobald Umsatzschwellen, Mitarbeitende
          oder eine Kapitalgesellschaft ins Spiel kommen, lohnt sich zumindest punktuell ein
          Treuhänder, nicht für jede Buchung, aber für Jahresabschluss, Steuern und die Fälle, in
          denen ein Fehler teuer würde.
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
