# Simple Discord Bot

## Requirements
- Mac, Windows oder Linux System
- Discord Server
- Node.js installiert (https://nodejs.org/en/)
- (Optional: Node.js Server)

## Getting started
1. Kopiere dir diesen Ordner
2. Erstelle eine neue App auf https://discord.com/developers/applications
3. Klick auf 0Auth2 und wähle bei OAuth2 URL Generator "bot" und bei Permissions "Administrator" aus
4. Öffne jetzt den Link der zwischen den Checkboxen steht
5. Folgend wirst du aufgefordert den Bot zum deinem Discord Server hinzuzufügen
6. Gehe zurück und kopiere dir den Client Secret von der OAuth2 Seite
7. Öffne die index.js und ersetze ihn mit CLIENT_SECRET
8. Führe `npm install` aus
9. Starte den Bot mit `npm run start`

Wichtig: Wenn du dies lokal auf deinem Rechner ausführst, funktioniert der Bot nur solange dein Rechner läuft. Alternativ musst du diesen Bot auf einem externen Server ausführen.

## Links
- https://discord.js.org/#/docs/main/stable/general/welcome
- https://github.com/discordjs/discord.js
- https://discordjs.guide/#before-you-begin