# UAW Local 647 — Concept 6: Region 6-Inspired

A full Jekyll build of the "Region 6-Inspired" homepage concept, extended
across every page of the site (About, Officers, Standing Committees,
Grievance Form, Contact, Events, Contract, By-Laws, Constitution, Seniority
Report).

This repo shares the same underlying architecture as the live site:

- `_layouts/default.html` — shared page shell (nav, dropdown, footer)
- `_data/*.yml` — officers, officer roles, committees, committee chairs, and
  nav structure. Edit these to change site content without touching HTML.
- `assets/css/style.css` — this concept's visual language (Baloo 2/Inter,
  diagonal clip-path panels, photo-driven hero and officer strip).
- Each `*.html` page is plain content with Jekyll front matter
  (`layout: default`) — no CMS admin panel is included in this demo repo.

## Running locally

```
bundle exec jekyll serve
```

(or just push to GitHub and enable GitHub Pages — no Gemfile/build step is
required beyond what GitHub Pages provides by default for a plain Jekyll
site.)

## Notes

- Officer photo panels use a decorative gradient stand-in until real
  photography is uploaded (`officer.photo` in `_data/officers.yml`).
- Officer names/photos and committee chairs are blank/TBD placeholders,
  matching the live site's current data.
- The seniority report pulls from a placeholder Google Sheet CSV URL — swap
  `SHEET_CSV_URL` in `seniority-report.html` for the real published sheet.
