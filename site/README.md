# Olga’s Wood – Static Site (Cloudflare Pages)

This is a simple, fully static website designed to be easy to edit. All editable copy lives in `site/content.json` and `site/supporters.json`. No database or CMS is required.

## How to edit content

- `site/content.json` – homepage copy (tagline, About, Why, Champions intro).
- `site/supporters.json` – supporters list displayed on `/site/supporters.html`.
- Images – currently reference existing photos in `../wetransfer_olgas-wood-photos_2025-12-01_2020/`. You can drop new images anywhere in `site/assets/` and update paths accordingly.

## Local development

```bash
cd site
python3 -m http.server 8080
# Open http://localhost:8080/
```

## Deploy to Cloudflare Pages (recommended)

Cloudflare Pages is ideal here because the site is static and doesn’t need dynamic servers or a database.

1. Create a new Cloudflare Pages project.
2. Choose “Direct Upload” if you aren’t using a repo, or connect your Git repo.
3. Upload the contents of the `site/` folder as your build output. (If using Git, set the build output directory to `site` and the framework preset to “None”.)
4. Pages will serve your files at `https://<your-subdomain>.pages.dev/`. Add a custom domain in the Pages dashboard when ready.

### Pages vs Workers

- **Cloudflare Pages**: perfect for static sites, zero maintenance, free tier generous. Use this for hosting.
- **Cloudflare Workers**: only needed for dynamic features (e.g., server-side email sending, gated content). You can add a Worker later to handle a contact form or mailing list without adding a database.

## Optional: Contact form via Worker (no database)

If you want a simple form without a database, you can:

- Use a Worker to receive POST requests and forward to email (via SendGrid/MailChannels).
- Or use a third-party form service (Formspree/Formspark) and point the form action there.

For now, the site uses a `mailto:` link on the contact section to keep things simple.

## Structure

- `index.html` – homepage
- `supporters.html` – supporters page
- `styles.css` – main styles
- `scripts.js` – loads JSON content
- `content.json` – homepage copy
- `supporters.json` – supporters list
- `README.md` – this file

## Accessibility & performance

- Uses semantic HTML and high-contrast palette.
- Responsive layout with mobile-first adjustments.
- Minimal JS; content is still readable without it.