# Fran Iriso Portfolio

Static portfolio site with a robotics-and-electronics engineering aesthetic, built as a modular single-page frontend using semantic HTML, CSS, and ES modules.

## Run

Use a simple local server from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

If port `8000` is already in use, run on another port:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Edit Guide

Most content lives in [content.js](/Users/franiriso/Documents/portfolio/content.js).

- Profile photo:
  Update `portfolioContent.hero.photo.src` in [content.js](/Users/franiriso/Documents/portfolio/content.js), or replace [assets/profile-photo-placeholder.svg](/Users/franiriso/Documents/portfolio/assets/profile-photo-placeholder.svg) with your image.  
  Tip: if your photo has a white background, the site now applies an automatic in-browser cutout pass for near-white pixels.
- Browser tab icon (favicon):
  Replace [assets/favicon.svg](/Users/franiriso/Documents/portfolio/assets/favicon.svg) with your own icon file.
- History location flags:
  Country flags are shown automatically in Experience and Education timeline locations in [script.js](/Users/franiriso/Documents/portfolio/script.js) via `formatLocation`.
- Summary and hero text:
  Edit `portfolioContent.hero` in [content.js](/Users/franiriso/Documents/portfolio/content.js).
- Tech stack:
  Edit `portfolioContent.home.techGroups` in [content.js](/Users/franiriso/Documents/portfolio/content.js).
- Tech specs degree section:
  Edit `portfolioContent.projects.degreeSpecs` in [content.js](/Users/franiriso/Documents/portfolio/content.js) for the four core engineering degrees shown above projects.
- Languages:
  Edit `portfolioContent.home.languages` in [content.js](/Users/franiriso/Documents/portfolio/content.js).
- Resume entries:
  Edit `portfolioContent.resume.experience` and `portfolioContent.resume.education` in [content.js](/Users/franiriso/Documents/portfolio/content.js).
- Project cards:
  Edit `portfolioContent.projects.cards` in [content.js](/Users/franiriso/Documents/portfolio/content.js).
- Links, publications, featured items:
  Update `portfolioContent.hero.contact`, `portfolioContent.home.publication`, and each card in `portfolioContent.projects.cards` inside [content.js](/Users/franiriso/Documents/portfolio/content.js).

## Structure

- [index.html](/Users/franiriso/Documents/portfolio/index.html): site shell and section containers
- [content.js](/Users/franiriso/Documents/portfolio/content.js): editable content model
- [script.js](/Users/franiriso/Documents/portfolio/script.js): rendering and tab navigation logic
- [styles.css](/Users/franiriso/Documents/portfolio/styles.css): theme, layout, animation, and responsive behavior

## Notes

- The project cards are populated from resume-based placeholders and intentionally do not contain invented public links.
- The publication section is marked as pending and should be updated once the final paper information is available.
