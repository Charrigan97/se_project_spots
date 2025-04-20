# SPOTS — SPRINT 3

## Video Presentation:

[Click here to view the presentation]
(https://drive.google.com/file/d/1c-iTre9bEQF6yC8eti_WfKScmJq0HyvO/view?usp=sharing)

This is the **Sprint 3 project** for the TripleTen Software Engineering bootcamp.  
Built with blood, sweat, and approximately 3,000 browser refreshes.

## What This Is

- A responsive webpage for sharing spots, memories, and maybe regrets.
- A playground for Flexbox, Grid, media queries, and BEM naming conventions.
- Fully functional on desktop, tablet, and mobile

## Tech Stack

- HTML5
- CSS3
- Flexbox & Grid tag-team combo
- Media queries (so many)
- Normalize.css for cross-browser peacekeeping
- Git

## 📁 File Dumpster Dive

```
se_project_spots/
├── blocks/            # Modular BEM CSS — I did this right, I swear
├── images/            # Pics
├── pages/
│   └── index.css      # Local styles that control everything
├── vendor/
│   ├── fonts.css      # Font
│   ├── normalize.css  # Browser voodoo
│   └── fonts/         #
├── index.html         # Markup
├── .gitignore         #
├── .prettierignore    #
├── favicon.ico        #
└── DEADME.md          # This file.
```

## Layout

- Cards use **CSS Grid**:
  ```css
  grid-template-columns: repeat(auto-fit, minmax(282px, 1fr));
  ```
- Layout shifts:
  - 3 columns on desktop
  - 2 on tablet
  - 1 on mobile
- All made possible by lovingly-crafted media queries.

## Semantics

I used tags like:

- `<header>`, `<main>`, `<section>`, `<footer>`  
  Because accessibility matters — and so does passing this sprint.

## 👾 BEM, Baby

- Blocks like `.profile`
- Elements like `.profile__avatar`
- Modifiers like `.profile__button_active`

Each block has its own CSS file. It's clean & modular.

## 🔡 Fonts

- Main: Poppins
- Fallbacks: Arial, sans-serif
- Loaded locally with `@font-face`

## What I Learned

> **Biggest challenge?**  
> Making this site _actually_ match the Figma design.  
> Adaptive layouts were trial and error, rinse and repeat.  
> But I came out feeling like I learned a lot.

I can now make your site bend to any screen size or break trying.
