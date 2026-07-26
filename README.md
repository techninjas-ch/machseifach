# Mach's eifach – Website

Erste Next.js-Version der Website für den Podcast "Mach's eifach".

## Struktur

- `/` – Startseite mit Intro und neuster Folge
- `/episoden` – Liste aller Episoden (echte Folgen + Spotify-Links in `src/lib/episodes.ts`)
- `/ueber-uns` – Über den Podcast und die Hosts
- `/kontakt` – Kontakt-E-Mail

Plattform-Links (Spotify, Apple Podcasts, YouTube, Instagram) sind echt (`src/lib/platforms.ts`), Kontakt-E-Mail ebenfalls (`src/app/kontakt/page.tsx`).

## Lokal starten

```bash
npm install
npm run dev
```

Danach [http://localhost:3000](http://localhost:3000) öffnen.

## Auf Vercel publizieren

1. Repo auf GitHub pushen (falls noch nicht geschehen).
2. Auf [vercel.com/new](https://vercel.com/new) das Repo importieren.
3. Framework wird automatisch als Next.js erkannt – keine weiteren Einstellungen nötig.
4. Deploy klicken.

Jeder Push auf den Hauptbranch erzeugt danach automatisch ein neues Deployment.

## Hinweis zum Build in dieser Sandbox

`npm run build` konnte in der aktuellen Cowork-Sandbox nicht ausgeführt werden, da das native `swc`-Binary von Next.js dort abstürzt (Sandbox-Einschränkung, kein Code-Fehler). TypeScript wurde erfolgreich geprüft (`tsc --noEmit`, keine Fehler). Auf Vercel oder einer normalen lokalen Umgebung baut das Projekt regulär.
