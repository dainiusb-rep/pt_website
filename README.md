# Move With Dainius — landing page

A responsive, mobile-first static landing page built with real HTML, CSS and JavaScript. No build tools, framework, or subscription required for the frontend.

## Included

- `index.html` — complete landing page, FAQ, consultation form
- `styles.css` — styling, responsive layouts, animations, focus styles, reduced-motion support
- `script.js` — mobile navigation, scroll reveals, scroll progress, FAQ behaviour, local-preview form warning
- `thanks.html` — post-submission confirmation page
- `privacy.html` — starter privacy notice; **must be completed before going live**
- `assets/dainius-hero.jpg` — supplied photograph of Dainius in the gym
- `assets/brand-mark.svg` and `assets/favicon.svg` — original temporary abstract marks

## Preview locally

You can double-click `index.html` to open it in a browser. Alternatively, from this directory run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

During local previews the form **will not send data**. It clearly tells the visitor that the form is in preview mode instead of displaying a false success message.

## Launch with a working consultation form (Netlify)

1. Create or sign in to a Netlify account, and deploy the **contents** of this folder to a Netlify site.
2. In the Netlify dashboard, open **Forms** and select **Enable form detection**.
3. **Redeploy** the site after enabling detection. Netlify scans static HTML when deployed.
4. Verify that the `free-consultation` form appears in Forms. Send a test submission on the live URL and verify it appears in the dashboard, and that `/thanks.html` loads.
5. In Netlify Forms, configure email notifications to your own business inbox if you want email alerts. Otherwise, you can review submissions in the Netlify dashboard.
6. Connect your own domain in the Netlify domain settings and follow its DNS instructions.

Netlify's official documentation: https://docs.netlify.com/manage/forms/setup/

This is a **Netlify-specific** form integration. On other hosts, you must connect the form to a supported form endpoint or backend.

## Important checks before publishing

- **Replace the brand mark** with your own existing logo if you have one. `assets/brand-mark.svg` is an original temporary mark.
- **Complete and review `privacy.html`:** add your business contact email and data retention policy; verify the privacy text matches your actual providers and practices. Get professional review if appropriate.
- Confirm the coaching-location and service claims match what you currently offer.
- Update the page title, meta description, and social preview image as needed for your final domain. Relative Open Graph images should be made absolute for social previews.
- If you use Google Fonts, disclose it as appropriate in your privacy notice; you can remove external font requests and use the system fallbacks if you prefer.
- Check Netlify pricing, form quotas and any data-protection obligations for your circumstances before launch.

## Customisation

Main colours are CSS custom properties at the top of `styles.css` (`--deep`, `--lime`, `--cream`). Edit headings, services and FAQ in `index.html`. The primary conversion action is `#consultation`, linked from the navbar, hero, approach, benefits and footer. Both SVG logos are editable vectors.

Accessibility features include semantic page landmarks, one H1, labelled form fields, native FAQ details, keyboard-supported mobile menu, visible focus states, skip link, sufficient text contrast, descriptive image alt text and reduced-motion preference support.

© 2026 Move With Dainius. Website implementation prepared for customisation.
