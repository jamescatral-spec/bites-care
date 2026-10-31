# Bites & Care — GitHub-ready website source

Keep Code.gs and the Google-hosted Index.html in your existing Apps Script project. This folder contains only the public website: index.html, styles.css, app.js, config.js, and embedded-source assets extracted into assets/.

## Connect your existing Apps Script

1. In Apps Script, use Deploy → Manage deployments and copy the deployed Web app URL ending in /exec. The script editor URL and test /dev URL are not the public deployment URL.
2. Edit config.js and paste that URL into appsScriptWebAppUrl, inside the quotes.
3. The website's inquiry section will display an Open inquiry form button. It opens the Apps Script page at #support. Select the inquiry type and submit on that Google-hosted page.
4. Keep the existing Code.gs, Index.html, script properties, and spreadsheet. This package does not replace your backend. If using the backend supplied earlier in this chat, keep both its latest Code.gs and Index.html versions so T-shirt purchase interest is supported.
5. Verify the app's access settings permit your intended visitors, then test an inquiry and confirm its row appears in your sheet.

Your deployed Apps Script must already serve an inquiry form (the earlier supplied version does). If your own script serves a different page, link to its actual form instead. No direct Google Sheets submission is claimed from this static page. google.script.run is only used in the Google-hosted form; this folder has no cross-origin POST integration and sends no personal data in URLs.

## Use GitHub for source

Create a repository and upload this folder's contents with index.html at its root. No Code.gs file, merchant secrets, private spreadsheet exports, or credentials are needed in this public source folder.

GitHub Pages is not allowed as free hosting for sites primarily facilitating commercial transactions. Use GitHub as the code repository and a commerce-appropriate host for the active shop. Shopify remains the planned storefront and checkout. This static HTML is reference source; Shopify themes require adaptation to Liquid or a separately hosted storefront linked to Shopify.

## Later Shopify setup

Set shopifyStoreUrl in config.js to your verified HTTPS Shopify storefront URL. Its link will appear. The current products remain proposed designs with TBD facts; update those and complete provider/payment setup before opening orders. This package does not create a Shopify store or process GCash, card, or COD payments.

## Files and checks

- index.html: editorial storefront layout.
- styles.css: responsive navy, blue, and cream design.
- app.js: product dialogs, guides, and Google form handoff.
- config.js: the two public integration URLs.
- assets/: original proposal logo and documentary photo.

JavaScript syntax and static integration references were checked locally. Your actual Apps Script deployment and end-to-end inquiry submission still require verification with your deployment URL. The folder has not been uploaded to GitHub.

References:
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/guides/html/communication
