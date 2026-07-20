# Wiring the reserve-seat forms to the Google Sheet

Both email forms (Hero and the mid-page "Reserve your seat" section) POST to
`/api/reserve` (`src/app/api/reserve/route.ts`), which forwards the email
server-side to a Google Apps Script Web App. That script appends a row
`[timestamp, email]` to the sheet — the `email status` column is left blank,
since that's filled in later by the existing automation.

The link shared for this (`.../macros/library/d/.../5`) is an **Apps Script
library reference** — it's only usable from inside the Apps Script editor
(`Libraries` panel) and isn't an HTTP endpoint, so the site can't POST to it
directly. What the site needs instead is that same script deployed as a
**Web App**, which gives a callable `.../macros/s/.../exec` URL.

## One-time setup

1. Open the Apps Script project bound to the registrations Google Sheet
   (Extensions → Apps Script, from the Sheet itself).
2. Add this `doPost` handler (or merge it into the existing project — it
   doesn't need anything from the library, since all it does is append a row):

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); // adjust tab name if different
     var data = JSON.parse(e.postData.contents);
     var email = data.email;

     if (!email) {
       return ContentService
         .createTextOutput(JSON.stringify({ ok: false, error: "Missing email" }))
         .setMimeType(ContentService.MimeType.JSON);
     }

     sheet.appendRow([new Date(), email]);

     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Deploy → New deployment → type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy, then copy the Web app URL (ends in `/exec`).
4. Set that URL as `SHEETS_WEBHOOK_URL`:
   - Locally: add it to `.env.local` (see `.env.example`).
   - On Vercel: `vercel env add SHEETS_WEBHOOK_URL production` (and `preview`/`development` as needed), then redeploy.

Once `SHEETS_WEBHOOK_URL` is set, both forms will write real rows to the sheet.
Until then, submissions fail with "Registration is temporarily unavailable"
and the error is logged server-side — nothing is silently dropped.
