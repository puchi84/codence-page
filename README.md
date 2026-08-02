# Codence Landing Page

A responsive, modern light-theme landing page for Codence.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive design and animations
- `script.js` — mobile menu, scroll interactions, workflow demo, and beta form

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
