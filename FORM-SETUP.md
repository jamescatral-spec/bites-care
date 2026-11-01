# Show inquiries inside the website

GitHub: upload index.html, styles.css, app.js, and assets/ from this package. Keep config.js and its existing URLs.

Apps Script: add the supplied Inquiry.html as an HTML file named Inquiry. In your existing Code.gs, replace only doGet with the supplied doGet implementation. Keep submitInquiry, setup_, your existing INQUIRIES_SHEET_ID property, and your spreadsheet. If using the complete Code.gs supplied in this chat already, the updated file can replace that version. Deploy a new version of the existing Web app. Do not run setup again if your sheet is already configured.

Set appsScriptWebAppUrl in GitHub config.js to that deployment's /exec URL. The dedicated inquiry page will load inside the contact section. It saves through the existing submitInquiry server function. It does not expose spreadsheet records or handle payment.

Without a deployment URL, the visible local form is a preview. It explicitly says nothing was sent when submitted; it never pretends a submission succeeded. Real storage and authorization must be tested in your Google account. No deployment URL has been supplied yet.

Only the dedicated, submission-only inquiry page enables embedding with XFrameOptionsMode.ALLOWALL. The main Apps Script site keeps its default frame protection. Customer-facing copy does not mention Google Apps Script. Browser privacy settings or Google's deployment banners may affect the embedded experience.
