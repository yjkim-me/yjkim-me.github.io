# Yeon-Jae Kim — Research Homepage

A concise academic homepage for GitHub Pages. Plain HTML, CSS, and a small theme script; no build step or external dependencies.

## Structure

The homepage presents Yeon-Jae Kim's research, academic background, and contact information in a responsive layout with light and dark themes.

- Profile beside a short biography, interests, and two-line academic history
- Ongoing Research for current work and future directions
- Spotlight cards for VA-Assembly and the KSPE Spring presentation, with its presentation award marked by a star
- Research organized into Spotlight, Manuscripts, Conferences, and Patents, with full author lists
- Research section shortcuts and official conference links
- Contact details

Detailed experience, skills, and the complete research record are available in `assets/CV_Yeonjae_Kim_public.pdf`.

## Files

- `index.html` — page content
- `va-assembly.html` — VA-Assembly project overview, key idea, method, and paper link
- `design-automation.html` — KSPE design automation project and conference photographs
- `project.css` — shared project-page layout and Spotlight links
- `style.css` — responsive layout, typography, and light/dark palettes
- `theme.js` — system theme detection and a persistent manual theme toggle
- `images/profile.jpg` — profile photograph
- `images/assembly_framework.svg` — supplied VA-Assembly paper framework, shown below the publication details
- `framework.html` — responsive, screen-fitting framework viewer
- `images/design_automation_framework.svg` — KSPE presentation framework
- `design-framework.html` — responsive viewer for the design automation framework
- `images/motion-concept.svg` — explanatory trajectory schematic, labeled as a concept rather than an experimental result
- `assets/CV_Yeonjae_Kim_public.pdf` — current CV

## Preview and publish

Open `index.html` directly, or run `python -m http.server 8000` from this folder. Publish through the existing GitHub Pages branch; no build step is needed.

Keep research status accurate when updating the page. The VA-Assembly section uses the supplied paper framework. The ongoing trajectory research still uses a labeled concept illustration.

## Appearance

The page follows the system color scheme until a visitor chooses Light mode or Dark mode in the header. This preference is stored locally in the browser. If storage is unavailable, the toggle still works for the current page. With JavaScript disabled, the system color scheme is used and the toggle is hidden.

## Adding project details

Spotlight cards contain a short summary, the framework image, and an Explore project link. Full explanations belong in the corresponding project page.

- Expand Overview with the problem and motivation.
- Add a concept figure under Key idea, with descriptive alt text and a caption.
- Extend Method with a step-by-step example, equations, or additional diagrams.
- Each project has a hidden Results section. Add real examples, videos, or evaluation data, remove its `hidden` attribute, and add a `#results` link to that page's navigation when ready.
- Add paper, slides, or other published material to Resources as it becomes available.

The KSPE project page includes `images/kspe_presentation_2026.jpg` and an award ceremony photo placeholder. Replace the `conference-photo-placeholder` element with an image when the award photo is available; keep its figure caption.
