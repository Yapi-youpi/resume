# Resume — Frontend Developer

Minimal, professional one-page resume built with **Angular 17+** (standalone components).  
Design: black/white, subtle accent, European style. Responsive and A4-printable.

## Folder structure

```
src/app/
├── components/           # Reusable UI
│   ├── resume-header/     # Name, position, contacts
│   ├── resume-section/     # Section wrapper (title + content)
│   ├── skill-badge/       # Single skill tag
│   ├── experience-item/   # One job/role
│   └── project-item/      # One project
├── pages/
│   └── resume-page/       # Main resume layout (composes components)
├── data/
│   └── resume.data.ts     # Mock data — edit here
├── models/
│   └── resume.model.ts    # TypeScript interfaces
├── app.component.ts
└── app.config.ts
```

## Features

- **Angular 17+** with standalone components
- **Semantic HTML**: `<header>`, `<section>`, `<article>`, roles
- **SCSS** with BEM-like naming (`resume-header__name`, `resume-section__title`, etc.)
- **Responsive**: desktop view + A4 print styles (`@media print`, `@page { size: A4 }`)
- **Light/dark theme** (stored in `localStorage`)
- **No UI libraries** — plain CSS/SCSS
- **Easy editing**: all content in `resume.data.ts`

## Sections

- Header (name, position, contacts)
- About Me
- Skills (grouped, with badges)
- Work Experience
- Projects
- Education
- Additional Info

## Requirements

- **Node.js** 18.19+ or 20.11+

## Run

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build & print

```bash
npm run build
```

Open `dist/resume/browser/index.html` in a browser, then use **Print / Save as PDF** (or the “Print / Save as PDF” button on the page). Print styles use A4 and hide theme toggle and footer.

## Edit content

- **Data**: `src/app/data/resume.data.ts`  
- **Types**: `src/app/models/resume.model.ts`
