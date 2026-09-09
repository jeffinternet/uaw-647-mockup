# UAW Local 647 — Concept 3: Institutional

A full Jekyll build of the "Institutional" homepage concept, extended across
every page of the site (About, Officers, Standing Committees, Grievance Form,
Contact, Events, Contract, By-Laws, Constitution, Seniority Report).

This repo shares the same underlying architecture as the live site:

- `_layouts/default.html` — shared page shell (nav, dropdown, footer)
- `_data/*.yml` — officers, officer roles, committees, committee chairs, and
  nav structure. Edit these to change site content without touching HTML.
- `assets/css/style.css` — this concept's visual language (serif type,
  navy/gold/red palette, formal directory-style layouts).
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

- Officer names/photos and committee chairs are blank/TBD placeholders,
  matching the live site's current data.
- The seniority report pulls from a placeholder Google Sheet CSV URL — swap
  `SHEET_CSV_URL` in `seniority-report.html` for the real published sheet.
