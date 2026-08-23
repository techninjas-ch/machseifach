import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Einzelfirma gründen in der Schweiz: So sind wir vorgegangen – Mach's eifach",
  description:
    "Kein Startkapital, kein Notar, aber ein Punkt bei der AHV-Anmeldung, der uns am Anfang nicht klar war. Unsere Schritt-für-Schritt-Erfahrung zur Einzelfirmengründung.",
};

const reihenfolge = [
  "Prüfen, ob die Einzelfirma zur Tätigkeit und zum persönlichen Risiko passt.",
  "Namen festlegen und prüfen, wie wir nach aussen auftreten möchten.",
  "Tätigkeit aufnehmen und erste Kunden gewinnen.",
  "Rechnungen, Offerten, Website und andere Nachweise sauber aufbewahren.",
  "Über EasyGov oder direkt bei der zuständigen Ausgleichskasse die AHV-Anerkennung beantragen.",
  "Klären, ob ein Handelsregistereintrag nötig oder freiwillig sinnvoll ist.",
  "UID und weitere Unternehmensdaten einrichten.",
  "Separates Konto und Buchhaltung sauber aufsetzen.",
  "Prüfen, ob eine MWST-Pflicht besteht.",
  "Versicherungen und Vorsorge anschauen.",
  "Von Anfang an Geld für AHV und Steuern zurücklegen.",
];

const quellen = [
  {
    label: "KMU Portal des Bundes: Einzelunternehmen",
    href: "https://www.kmu.admin.ch/kmu/de/home/praktisches-wissen/kmu-gruenden/firmengruendung/auswahl-rechtsform/einzelfirma.html",
  },
  {
    label: "KMU Portal des Bundes: Handelsregister",
    href: "https://www.kmu.admin.ch/kmu/de/home/praktisches-wissen/kmu-gruenden/firmengruendung/handelsregister.html",
  },
  { label: "EasyGov: Einzelfirma gründen", href: "https://einzelfirma.easygov.swiss/" },
  {
    label: "AHV/IV Informationsstelle: Selbstständigerwerbende",
    href: "https://www.ahv-iv.ch/p/2.02.d",
  },
  {
    label: "Ausgleichskasse des Kantons Bern: Selbstständigerwerbende",
    href: "https://www.akbern.ch/de/Versicherungen/AHV-Beitrage/Selbstandigerwerbende/Selbstaendigerwerbende.html",
  },
  {
    label: "Eidgenössische Steuerverwaltung: Mehrwertsteuer",
    href: "https://www.estv.admin.ch/estv/de/home/mehrwertsteuer.html",
  },
  { label: "UID Register des Bundes", href: "https://www.uid.admin.ch/" },
];

const linkClass =
  "font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-2 hover:text-[var(--accent-dark)] hover:decoration-[var(--accent-dark)]/40";

export default function EinzelfirmaGruendenSchweizPost() {
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
          Erfahrungsbericht · Firmengründung Schweiz
        </span>
      </div>

      <h1 className="mt-5 text-[32px] font-bold leading-tight sm:text-[40px]">
        Einzelfirma gründen in der Schweiz: So sind wir vorgegangen
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
        Eine eigene Firma gründen klingt zuerst nach Handelsregister, Versicherungen, Steuern,
        Formularen und ziemlich viel Papierkram. Wir haben uns deshalb am Anfang auch gefragt: Wo
        fängt man eigentlich an?
      </p>

      <p className="mt-4 text-[13px] text-[var(--muted-2)]">Stand: 23. August 2026 · ca. 12 Min. Lesezeit</p>

      <div className="mt-10 rounded-[20px] border border-[var(--accent-soft)]/20 bg-[var(--surface)] p-7">
        <p className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--accent-soft)] uppercase">
          Auf den Punkt gebracht
        </p>
        <ul className="grid gap-3 pl-5 text-[17px] leading-relaxed text-[var(--foreground)]">
          <li className="list-disc">
            Eine Einzelfirma entsteht mit der Aufnahme der Tätigkeit, es gibt keinen separaten
            Gründungsakt, kein Startkapital und keinen Notar.
          </li>
          <li className="list-disc">
            Die AHV-Anmeldung als Selbstständigerwerbende erfolgt erst, nachdem die Tätigkeit
            läuft, mit Belegen wie Rechnungen, Offerten oder einer Einnahmen-Ausgaben-Übersicht.
          </li>
          <li className="list-disc">
            Ein Handelsregistereintrag wird erst ab <strong>CHF 100’000 Jahresumsatz</strong>{" "}
            obligatorisch, darunter ist er freiwillig.
          </li>
          <li className="list-disc">
            Die MWST-Pflicht greift ebenfalls erst ab CHF 100’000 Jahresumsatz, eine doppelte
            Buchhaltung erst ab CHF 500’000.
          </li>
          <li className="list-disc">
            Als Selbstständige bist du nicht automatisch gegen Arbeitslosigkeit, Unfall oder über
            eine Pensionskasse versichert, das musst du selbst regeln.
          </li>
        </ul>
      </div>

      <div className="mt-14 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <p>
          Die gute Nachricht: Eine Einzelfirma zu gründen ist in der Schweiz tatsächlich ziemlich
          unkompliziert. Du brauchst kein Startkapital, keinen Notar und musst auch nicht zuerst
          eine Gesellschaft gründen, bevor du deine erste Rechnung schreiben kannst.
        </p>
        <p>
          Ganz ohne Administration geht es natürlich nicht. Vor allem bei der AHV gibt es einen
          Punkt, der uns am Anfang nicht ganz klar war. Hier zeigen wir dir deshalb Schritt für
          Schritt, wie wir vorgegangen sind und was du wirklich brauchst.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Was ist eine Einzelfirma überhaupt?</h2>
        <p>
          Offiziell spricht man vom Einzelunternehmen. Im Alltag wird meistens einfach Einzelfirma
          gesagt.
        </p>
        <p>
          Das Einzelunternehmen gehört einer einzigen Person. Es gibt kein vorgeschriebenes
          Mindestkapital und die Gründung ist deutlich einfacher als bei einer GmbH oder AG.
          Rechtlich bist du und deine Firma allerdings nicht komplett voneinander getrennt. Du
          haftest grundsätzlich auch mit deinem Privatvermögen.
        </p>
        <p>
          Für kleinere Unternehmen, Freelancer, Beratungen, Handwerker oder Dienstleister kann das
          trotzdem ein sehr unkomplizierter Einstieg in die Selbstständigkeit sein. Bei uns war
          das genau der Grund, weshalb wir für den Start diese Form gewählt haben.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          1. Du musst nicht zuerst offiziell eine Firma gründen
        </h2>
        <p>Das war für uns eine der wichtigsten Erkenntnisse.</p>
        <p>
          Eine Einzelfirma entsteht grundsätzlich dadurch, dass du tatsächlich eine
          selbstständige Tätigkeit aufnimmst. Es gibt also keinen einzelnen Gründungsakt wie bei
          einer GmbH.
        </p>
        <p>
          Das KMU-Portal des Bundes beschreibt es ziemlich klar: Das Einzelunternehmen entsteht
          mit der Aufnahme einer selbstständigen, auf dauernden Erwerb gerichteten
          wirtschaftlichen Tätigkeit.
        </p>
        <p>
          Du kannst also anfangen, Kunden zu suchen, Aufträge anzunehmen und Rechnungen zu
          stellen. Das ist auch für den nächsten Schritt wichtig.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          2. Die AHV-Anmeldung kommt erst, wenn du wirklich gestartet bist
        </h2>
        <p>
          Bei einer Einzelfirma musst du dich als selbstständigerwerbend bei einer
          AHV-Ausgleichskasse anerkennen lassen. Und genau hier hatten wir zuerst ein kleines
          Huhn-Ei-Problem.
        </p>
        <p>
          Für die Anmeldung soll man bereits selbstständig tätig sein. Gleichzeitig fühlt es sich
          natürlich so an, als müsste man zuerst offiziell als selbstständig anerkannt sein, bevor
          man überhaupt anfangen darf.
        </p>
        <p>In der Praxis ist es anders.</p>
        <p>
          Die Ausgleichskasse beurteilt anhand deiner tatsächlichen Tätigkeit, ob du als
          selbstständigerwerbend giltst. Deshalb möchte sie auch Belege sehen. Das können zum
          Beispiel Rechnungen, Verträge, eine Übersicht deiner Einnahmen und Ausgaben,
          Investitionen oder Werbematerial sein. Die Ausgleichskasse des Kantons Bern empfiehlt
          sogar, die Anmeldung im Verlauf des ersten Quartals nach Aufnahme der Tätigkeit
          einzureichen.
        </p>
        <p>
          Entscheidend ist dabei nicht einfach, dass du dich selbst als selbstständig
          bezeichnest. Typische Merkmale sind, dass du in eigenem Namen auftrittst, selbst
          Rechnungen stellst, dein wirtschaftliches Risiko trägst, deine Arbeit selbst
          organisierst und für mehrere Auftraggeber tätig bist. Ob du im Sinne der AHV tatsächlich
          selbstständigerwerbend bist, entscheidet am Ende die zuständige Ausgleichskasse.
        </p>
        <p>
          Wir haben unsere Anmeldung über <strong>EasyGov</strong> gemacht. EasyGov ist die
          offizielle Plattform von Bund, Kantonen und Gemeinden. Darüber lassen sich unter anderem
          die Anmeldung bei der AHV-Ausgleichskasse, beim Handelsregister, bei der Mehrwertsteuer
          und bei der Unfallversicherung abwickeln.
        </p>
        <p>
          Bei unserer AHV-Anmeldung wurden uns auch verschiedene Verbandsausgleichskassen
          angezeigt. Wenn du keinem Berufsverband mit eigener Ausgleichskasse angeschlossen bist,
          ist grundsätzlich die kantonale Ausgleichskasse am Firmensitz zuständig.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">3. Einen Firmennamen wählen</h2>
        <p>Hier gibt es bei einer Einzelfirma einen wichtigen Unterschied zu einer GmbH oder AG.</p>
        <p>
          Wenn deine Einzelfirma im Handelsregister eingetragen wird, muss dein Familienname
          Bestandteil des offiziellen Firmennamens sein. Du kannst aber einen zusätzlichen Namen
          oder eine Fantasiebezeichnung verwenden.
        </p>
        <div className="rounded-[16px] bg-[var(--surface)] p-5 text-base">
          <p className="m-0">
            Aus beispielsweise <strong>Tech Ninjas</strong> kann als offizieller Firmenname etwas
            wie <strong>Tech Ninjas Patrick Christen</strong> werden.
          </p>
        </div>
        <p>
          Der Familienname muss enthalten sein. Zusätze sind erlaubt, solange sie nicht
          irreführend sind oder den Eindruck erwecken, dass mehrere Personen Eigentümer der Firma
          sind. Das ist ein Detail, das man am besten schon bei der Namenswahl berücksichtigt.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          4. Brauche ich einen Handelsregistereintrag?
        </h2>
        <p>Nicht zwingend.</p>
        <p>
          Für ein nach kaufmännischer Art geführtes Einzelunternehmen wird der Eintrag ins
          Handelsregister grundsätzlich ab einem Jahresumsatz von CHF 100’000 obligatorisch.
          Darunter kannst du dich freiwillig eintragen lassen.
        </p>
        <p>
          Ein freiwilliger Eintrag kann trotzdem sinnvoll sein. Dein Firmenname erhält dadurch
          einen gewissen Schutz und ein Handelsregisterauszug kann beispielsweise bei Banken oder
          Geschäftspartnern hilfreich sein.
        </p>
        <p>
          Es gibt aber auch Nachteile. Mit einem Handelsregistereintrag unterliegst du als
          Einzelunternehmer der Betreibung auf Konkurs. Für den eigentlichen Start einer kleinen
          Einzelfirma brauchst du den Handelsregistereintrag deshalb nicht unbedingt.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">5. UID beantragen</h2>
        <p>Früher oder später begegnet dir auch die UID.</p>
        <p>
          UID steht für Unternehmens-Identifikationsnummer. Sie dient dazu, Unternehmen gegenüber
          Behörden eindeutig zu identifizieren.
        </p>
        <p>
          Eine UID erhält ein Unternehmen grundsätzlich, sobald es bei einer Verwaltungsstelle
          gemeldet wird, die an das UID-Register angeschlossen ist. Auch Unternehmen ohne
          Handelsregistereintrag können eine UID erhalten.
        </p>
        <p className="rounded-[16px] bg-[var(--surface)] p-5 text-base">
          Wichtig: Die UID allein bedeutet nicht, dass du mehrwertsteuerpflichtig bist. Eine
          MWST-Nummer erhältst du erst, wenn du im Register der mehrwertsteuerpflichtigen Personen
          eingetragen wirst.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          6. Geschäftskonto und Buchhaltung einrichten
        </h2>
        <p>
          Rechtlich sind Privatperson und Einzelfirma deutlich weniger getrennt als bei einer
          GmbH. Trotzdem würden wir Privates und Geschäftliches von Anfang an möglichst sauber
          auseinanderhalten.
        </p>
        <p>
          Wir haben deshalb ein separates Geschäftskonto eingerichtet und uns direkt Gedanken über
          die Buchhaltung gemacht.
        </p>
        <p>
          Das macht den Alltag später deutlich einfacher. Du siehst auf einen Blick, welche
          Zahlungen zur Firma gehören, und musst bei der Steuererklärung nicht durch ein Konto
          voller Migros-Einkäufe, Ferienbuchungen und Kundenrechnungen gehen. Auch das KMU-Portal
          empfiehlt eine saubere Trennung zwischen privaten und geschäftlichen Einnahmen, Ausgaben
          und Vermögenswerten.
        </p>
        <p>
          Bei kleineren Einzelfirmen ist die Buchhaltung zudem relativ überschaubar. Unter CHF
          500’000 Jahresumsatz reicht gesetzlich grundsätzlich eine vereinfachte Buchhaltung mit
          Einnahmen, Ausgaben und Vermögenslage. Ab CHF 500’000 gelten die umfassenderen
          Vorschriften zur Buchführung und Rechnungslegung.
        </p>
        <p>
          Wir würden trotzdem von Anfang an eine richtige Buchhaltungssoftware verwenden. Nicht
          weil eine komplizierte Buchhaltung nötig wäre, sondern weil man sich damit später viel
          Arbeit erspart.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          7. Muss ich Mehrwertsteuer bezahlen?
        </h2>
        <p>Für viele kleine Einzelfirmen am Anfang noch nicht.</p>
        <p>
          Grundsätzlich wird die MWST-Pflicht relevant, wenn du mindestens CHF 100’000
          massgebenden Jahresumsatz aus Leistungen im In- und Ausland erreichst oder bereits beim
          Start klar ist, dass du diese Grenze überschreiten wirst.
        </p>
        <p>
          Unterhalb dieser Grenze kannst du dich unter bestimmten Voraussetzungen freiwillig der
          MWST unterstellen. Das kann beispielsweise interessant sein, wenn du hohe geschäftliche
          Ausgaben hast und Vorsteuer abziehen möchtest. Ob sich das lohnt, hängt aber stark von
          deinem Geschäftsmodell und deinen Kunden ab.
        </p>
        <p>
          Für uns war deshalb zunächst wichtiger, die Umsatzgrenze im Blick zu behalten, statt die
          Mehrwertsteuer unnötig kompliziert zu machen.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          8. AHV, Unfallversicherung und Vorsorge nicht vergessen
        </h2>
        <p>
          Als selbstständigerwerbende Person zahlst du deine AHV-, IV- und EO-Beiträge selbst. Der
          maximale Beitragssatz für AHV, IV und EO beträgt 2026 insgesamt 10 Prozent des
          Erwerbseinkommens. Bei einem Jahreseinkommen unter CHF 60’500 gilt eine tiefere,
          abgestufte Beitragsskala. Dazu können je nach Ausgleichskasse weitere Beiträge und
          Verwaltungskosten kommen.
        </p>
        <p>Ein wichtiger Unterschied zu einer normalen Anstellung ist allerdings:</p>
        <p>
          Als Selbstständiger bist du nicht automatisch gegen Arbeitslosigkeit versichert. Auch
          die Unfallversicherung und die berufliche Vorsorge über eine Pensionskasse sind für dich
          grundsätzlich nicht obligatorisch.
        </p>
        <p>Das bedeutet nicht, dass du diese Themen ignorieren solltest.</p>
        <p>
          Im Gegenteil. Sobald der erste administrative Teil erledigt war, haben wir uns genau
          diese Fragen gestellt:
        </p>
        <ul className="grid gap-2.5 pl-5">
          <li className="list-disc">Wie versichern wir einen längeren Erwerbsausfall?</li>
          <li className="list-disc">Brauchen wir eine freiwillige Unfallversicherung?</li>
          <li className="list-disc">Wie lösen wir die Altersvorsorge?</li>
          <li className="list-disc">Was passiert, wenn jemand für die Firma arbeitet?</li>
        </ul>
        <p>
          Das Thema ist gross genug für einen eigenen Beitrag. Für die eigentliche Gründung musst
          du aber vor allem wissen, dass du dich als Einzelunternehmer um einige Absicherungen
          selbst kümmern musst.
        </p>
        <p>
          Sobald du Mitarbeitende beschäftigst, ändern sich die Regeln nochmals. Dann kommen unter
          anderem die obligatorische Unfallversicherung und je nach Lohn die berufliche Vorsorge
          dazu.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">9. Steuern einplanen</h2>
        <p>
          Eine Einzelfirma bezahlt nicht separat Unternehmenssteuern wie eine GmbH oder AG. Der
          Gewinn deiner Einzelfirma wird bei dir persönlich als Einkommen versteuert. Auch das
          Geschäftsvermögen fliesst in deine persönliche Vermögenssteuer ein. Geschäftlich
          begründete Ausgaben kannst du entsprechend berücksichtigen.
        </p>
        <p>Das klingt simpel, hat aber einen praktischen Haken:</p>
        <p>
          Das Geld auf deinem Geschäftskonto gehört zwar dir. Ein Teil davon wird später aber für
          AHV und Steuern gebraucht.
        </p>
        <p>
          Wir würden deshalb nicht einfach den gesamten Überschuss als verfügbares Geld
          betrachten. Lieber regelmässig einen Teil für Steuern und Sozialversicherungen
          zurücklegen. Wie viel das konkret sein sollte, hängt von deinem Gewinn, deinem Wohnort
          und deiner restlichen Einkommenssituation ab.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Was würden wir heute anders machen?</h2>
        <p>Vor allem würden wir uns am Anfang weniger verrückt machen.</p>
        <p>
          Wir hatten teilweise das Gefühl, zuerst müssten alle Registrierungen, Nummern,
          Versicherungen und Konten perfekt eingerichtet sein und erst danach könne die Firma
          richtig starten.
        </p>
        <p>Bei einer Einzelfirma ist es eher umgekehrt.</p>
        <p>Du brauchst zuerst eine echte Tätigkeit. Einen ersten Kunden. Eine erste Offerte. Eine Rechnung.</p>
        <p>
          Damit wird die Selbstständigkeit überhaupt greifbar, und genau solche Belege braucht
          später auch die Ausgleichskasse.
        </p>
        <p>
          EasyGov hat uns beim administrativen Teil geholfen, weil viele Behördengänge an einem
          Ort zusammenkommen. Trotzdem muss man nicht alles gleichzeitig erledigen.
        </p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">
          Unsere Reihenfolge für eine neue Einzelfirma
        </h2>
        <p>Wenn wir heute nochmals von vorne anfangen würden, sähe es ungefähr so aus:</p>
      </div>

      <ol className="mt-6 grid gap-3 pl-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        {reihenfolge.map((schritt) => (
          <li key={schritt} className="list-decimal">
            {schritt}
          </li>
        ))}
      </ol>

      <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-[var(--foreground)]">
        <p>Mehr braucht es für den Start einer normalen kleinen Einzelfirma oft gar nicht.</p>

        <h2 className="mt-10 mb-1 text-2xl font-bold">Unser Fazit</h2>
        <p>Die grösste Hürde bei der Gründung unserer Einzelfirma war nicht die Bürokratie.</p>
        <p>Es war herauszufinden, in welcher Reihenfolge man die Dinge überhaupt machen soll.</p>
        <p>
          Sobald man verstanden hat, dass eine Einzelfirma mit der tatsächlichen Tätigkeit beginnt
          und die AHV-Anerkennung danach erfolgt, wird vieles logisch.
        </p>
        <p>Du musst also nicht zuerst wochenlang eine Firma aufbauen, bevor du anfangen darfst.</p>
        <p>Fang mit dem Geschäft an. Kümmere dich um die ersten Kunden. Und erledige die Administration Schritt für Schritt nebenbei.</p>
        <p>Genau so haben wir es am Ende auch gemacht.</p>
      </div>

      <div className="mt-10 rounded-[16px] bg-[var(--surface)] p-5 text-[15px] leading-relaxed text-[var(--muted)]">
        Hinweis: Wir teilen hier unsere eigene Erfahrung und den Stand unserer Recherche im August
        2026. Je nach Tätigkeit, Kanton und persönlicher Situation können andere Regeln gelten.
        Bei Steuer-, Rechts- oder Versicherungsfragen solltest du deine konkrete Situation bei der
        zuständigen Behörde oder einer Fachperson prüfen.
      </div>

      <section className="mt-16 border-t border-[var(--accent-soft)]/15 pt-10">
        <h2 className="mb-5 text-xl font-bold">Quellen</h2>
        <p className="mb-4 text-[15px] leading-relaxed text-[var(--muted)]">
          Für diesen Beitrag haben wir uns hauptsächlich auf offizielle Informationen des Bundes
          und der Ausgleichskassen gestützt:
        </p>
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
          Stand der Recherche: August 2026. Wir aktualisieren diesen Beitrag, wenn sich wichtige
          Regeln oder Grenzwerte ändern.
        </p>
      </section>
    </div>
  );
}
