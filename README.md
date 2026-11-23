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
- `va-assembly.html` — illustrated VA-Assembly walkthrough, results, and hierarchical assembly
- `va-assembly.css` — guidance-section, figure, and comparison-table styles for VA-Assembly
- `images/VA-Assembly/Fig1.svg` through `Fig9.svg` — original paper figures
- `figure-viewer.js` — selects Figures 1–9 in the screen-fitting framework viewer
- `design-automation.html` — KSPE design automation project and conference photographs
- `design-automation.css` — conference project typography, overview block, workflow, and photo layout
- `project.css` — shared project-page layout and Spotlight links
- `style.css` — responsive layout, typography, and light/dark palettes
- `theme.js` — system theme detection and a persistent manual theme toggle
- `images/profile.jpg` — profile photograph
- `images/assembly_framework.svg` — supplied VA-Assembly paper framework for the image viewer
- `framework.html` — responsive, screen-fitting framework viewer
- `images/design_automation_framework.svg` — KSPE presentation framework
- `design-framework.html` — responsive viewer for the design automation framework
- `images/motion-concept.svg` — unused trajectory concept illustration, retained for reference
- `assets/CV_Yeonjae_Kim_public.pdf` — current CV

## Preview and publish

Open `index.html` directly, or run `python -m http.server 8000` from this folder. Publish through the existing GitHub Pages branch; no build step is needed.

Keep research status accurate when updating the page. The VA-Assembly section uses the supplied paper framework. The ongoing trajectory research currently has no figure; its status label follows the same style as the Spotlight research types.

## Appearance

The page follows the system color scheme until a visitor chooses Light mode or Dark mode in the header. This preference is stored locally in the browser. If storage is unavailable, the toggle still works for the current page. With JavaScript disabled, the system color scheme is used and the toggle is hidden.

## Adding project details

Spotlight cards contain publication details, a short summary, and an Explore project link. Framework images appear on the project pages. Full explanations belong in the corresponding project page.

- Expand Overview with the problem and motivation.
- Add a concept figure under Key idea, with descriptive alt text and a caption.
- Extend Method with a step-by-step example, equations, or additional diagrams.
- VA-Assembly follows Overview, View-Aligned Score Guidance, Results, and Applications. All nine figures and the numerical comparison remain visible in their relevant sections. The guidance section follows the paper's terminology; the application figure is limited to 640px. Keep captions, numerical comparisons, and evaluation qualifications synchronized with arXiv:2611.20788v1 when updating them.
- The KSPE project follows TL;DR, Overview, the design workflow, and conference photographs. It still has a hidden Results section; add real examples, videos, or evaluation data before removing its `hidden` attribute.
- Add paper, slides, or other published material to Resources as it becomes available.

The KSPE project page includes `images/kspe_presentation_2026.jpg` and an award ceremony photo placeholder. Replace the `conference-photo-placeholder` element with an image when the award photo is available; keep its figure caption.
