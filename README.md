# Yeon-Jae Kim — Research Homepage

A concise academic homepage for GitHub Pages. Plain HTML, CSS, and a small theme script; no build step or external dependencies.

## Structure

The homepage presents Yeon-Jae Kim's research, academic background, and contact information in a responsive layout with light and dark themes.

- Profile beside a short biography, interests, and two-line academic history
- Ongoing Research for current work and future directions
- Latest Research cards for VA-Assembly and the KSPE Spring presentation, with its presentation award marked by a star
- Contact details

Detailed experience, patents, skills, and the full publication/presentation list remain in `assets/CV_Yeonjae_Kim.pdf`.

## Files

- `index.html` — page content
- `style.css` — responsive layout, typography, and light/dark palettes
- `theme.js` — system theme detection and a persistent manual theme toggle
- `images/profile.jpg` — profile photograph
- `images/assembly_framework.svg` — supplied VA-Assembly paper framework, shown as a card thumbnail
- `framework.html` — responsive, screen-fitting framework viewer
- `images/design_automation_framework.svg` — KSPE presentation framework thumbnail
- `design-framework.html` — responsive viewer for the design automation framework
- `images/motion-concept.svg` — explanatory trajectory schematic, labeled as a concept rather than an experimental result
- `assets/CV_Yeonjae_Kim.pdf` — current CV

## Preview and publish

Open `index.html` directly, or run `python -m http.server 8000` from this folder. Publish through the existing GitHub Pages branch; no build step is needed.

Keep research status accurate when updating the page. The VA-Assembly section uses the supplied paper framework. The ongoing trajectory research still uses a labeled concept illustration.

## Appearance

The page follows the system color scheme until a visitor chooses Light mode or Dark mode in the header. This preference is stored locally in the browser. If storage is unavailable, the toggle still works for the current page. With JavaScript disabled, the system color scheme is used and the toggle is hidden.
