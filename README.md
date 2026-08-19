# ds257.github.io

Personal academic site. Jekyll, single page, no theme gem.

## Deploy

This is a GitHub Pages **user site**, so anything pushed to the default branch of
`ds257/ds257.github.io` goes live at `https://ds257.github.io` within a minute or two.

```bash
# from inside this folder
git init
git remote add origin git@github.com:ds257/ds257.github.io.git
git add .
git commit -m "Rebuild site"
git push -u origin main --force   # replaces the old academicpages site
```

Force-push replaces the previous site entirely. If you want the old version kept,
tag it first (`git tag academicpages-archive && git push --tags`) or push this to a
branch and switch the Pages source in repo settings.

## Run locally

```bash
bundle install
bundle exec jekyll serve
# http://localhost:4000
```

## Where to edit what

| I want to change... | Edit |
|---|---|
| Name, title, email, social links | `_data/main_info.yaml` |
| Publications (and which are "Selected") | `_data/publications.yaml` |
| The Vitæ timeline | `_data/experience.yaml` |
| Bio, Research, Outside Research prose | `index.html` |
| Nav links, header, footer | `_layouts/default.html` |
| Styling | `libs/custom/my_css.css` |
| Profile photo | `assets/profile-pics/profile.jpg` |

### Adding a paper

Append to `_data/publications.yaml`. `selected: y` puts it in the Selected tab;
everything appears in the All tab regardless.

```yaml
  - title: "Paper Title"
    authors: "Author One, <b>Diya Saraf</b>, Author Three"
    venue: "VENUE'26: Full Conference Name. 2026."
    paper_pdf: "https://..."        # or "/assets/publications/slug/paper.pdf"
    code: "https://github.com/..."
    data: "https://..."
    slides: "/assets/publications/slug/slides.pdf"
    selected: y
```

Optional fields: `slides`, `poster`, `video`, `code`, `data`, `bibtex`. Each renders
a button only if present. Use `<sup>‡</sup>` after a name for equal contribution.

### Adding the CV

Drop the PDF at `assets/cv/cv.pdf`, then uncomment the CV line in the Vitæ section
of `index.html`.

## Notes

- `baseurl` in `_config.yml` is `""`, which is correct for a user site. If this ever
  moves to a project repo, set it to `/repo-name`.
- Icon fonts (Font Awesome, Academicons) and jQuery are bundled under `libs/external/`,
  so the site has no CDN dependency. Only the Raleway webfont loads from Google Fonts.
- **The Vitæ years in `_data/experience.yaml` need checking** — the USC M.S. dates and
  the Dell internship year were inferred, not confirmed.
