/**
 * One-time setup: authorizes this tool against your YouTube channel and
 * stores a refresh token locally so `npm run youtube:upload` can run
 * unattended afterwards.
 *
 * Before running this, in the Google Cloud Console (console.cloud.google.com):
 *   1. Create (or reuse) a project, enable the "YouTube Data API v3".
 *   2. Create OAuth 2.0 credentials of type "Desktop app".
 *   3. Download the JSON and save it as scripts/.youtube-client-secret.json
 *      (this path is gitignored, never commit it).
 *   4. Under "OAuth consent screen", add the Google account that owns the
 *      YouTube channel as a test user (unless the app is published).
 *
 * Then run: npm run youtube:auth
 */
import { google } from "googleapis";
import fs from "node:fs";
import http from "node:http";
import { exec } from "node:child_process";
import { SCOPES, TOKEN_PATH, loadClientSecret } from "./youtube-lib";

async function main() {
  const { client_id, client_secret } = loadClientSecret();

  const server = http.createServer();
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Konnte keinen lokalen Port öffnen.");
  const redirectUri = `http://127.0.0.1:${address.port}`;

  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirectUri);
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });

  console.log("\nÖffne diesen Link im Browser und melde dich mit dem Google-Konto an,");
  console.log("dem der YouTube-Kanal gehört:\n");
  console.log(authUrl, "\n");
  exec(`open "${authUrl}"`); // macOS; harmless no-op if it fails

  const code = await new Promise<string>((resolve, reject) => {
    server.on("request", (req, res) => {
      const url = new URL(req.url ?? "/", redirectUri);
      const code = url.searchParams.get("code");
      const error = url.searchParams.get("error");
      res.end(
        error
          ? "Autorisierung fehlgeschlagen, dieses Fenster kann geschlossen werden."
          : "Erfolgreich autorisiert, dieses Fenster kann geschlossen werden.",
      );
      server.close();
      if (error) reject(new Error(error));
      else if (code) resolve(code);
      else reject(new Error("Kein Code in der Antwort erhalten."));
    });
  });

  const { tokens } = await oAuth2Client.getToken(code);
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
  console.log(`\nToken gespeichert unter ${TOKEN_PATH}.`);
  console.log("Ab jetzt kannst du \"npm run youtube:upload\" verwenden.\n");
}

main().catch((err) => {
  console.error("\nFehler bei der Autorisierung:", err.message ?? err);
  process.exit(1);
});
