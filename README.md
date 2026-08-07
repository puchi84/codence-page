# Codence Landing Page

A responsive, modern light-theme landing page for Codence.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive design and animations
- `script.js` — mobile menu, scroll interactions, workflow demo, and beta form
- `robots.txt` — crawler rules, points search engines to the sitemap
- `sitemap.xml` — lists indexable pages for search engines

## Run locally

Open `index.html` directly in a browser, or run a small local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Beta form → email delivery

The signup form (`#signupForm`) submits to [Formspree](https://formspree.io) via `fetch`, which emails every submission (email + company size) to your inbox. No backend server is required.

### One-time setup

1. Create a free account at [formspree.io](https://formspree.io) using **heidi.vieira84@gmail.com**.
2. Create a new form and confirm the destination email from the verification email Formspree sends.
3. Copy the form endpoint, which looks like `https://formspree.io/f/abcd1234`.
4. In [index.html](index.html), replace the placeholder endpoint in the form's `action` attribute:

   ```html
   <form id="signupForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

   with your real endpoint (e.g. `https://formspree.io/f/abcd1234`).

That's it — no other code changes are needed. Each submission arrives as an email containing the work email and company size, with the subject "New Codence beta signup".

### Notes

- A hidden honeypot field (`_gotcha`) is included to reduce spam without a CAPTCHA.
- The free Formspree tier allows a limited number of submissions per month; upgrade if you expect higher volume.
- If the request fails (network issue, invalid endpoint, etc.), the form shows an inline error message asking the visitor to email `hello@codence.ai` directly instead.

## SEO setup

The site is configured for `https://www.thecodence.com`. If you deploy to a different domain, update these before going live:

- `<link rel="canonical">` in [index.html](index.html)
- `og:url`, `og:image` in the Open Graph tags
- `twitter:image` in the Twitter card tags
- The `url`/`image`/`logo` fields in the JSON-LD `SoftwareApplication` structured data block
- `sitemap.xml` (`<loc>` entry) and `robots.txt` (`Sitemap:` line)

### Recommended launch checklist

1. Submit `https://www.thecodence.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console) and Bing Webmaster Tools once the domain is live.
2. Request indexing for the homepage in Search Console after DNS/hosting is set up.
3. Keep the meta `description` and `title` in [index.html](index.html) unique and under ~160 / ~60 characters if copy changes.
4. Build backlinks (directories like BetaList, Product Hunt, G2, relevant SaaS/dev communities) — off-page signals matter more than on-page tags for ranking #1.
5. Add real testimonials/case studies once available; fresh, unique content is a strong ranking factor.

### Pricing section

Public pricing intentionally does not show figures. During the beta, the "Pilot" and "Growth" cards display "Founding rate" (feature lists still shown) and every plan links to the `#early-access` form so exploratory visitors aren't scared off before they see the product's value. Update the copy in the `#pricing` section of [index.html](index.html) once public pricing is finalized.
