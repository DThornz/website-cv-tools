# website-cv-tools

**Personal academic website for Dr. Asad Mirza** — Research Assistant Professor,  
Department of Biomedical Engineering, Florida International University.

Deployed via **GitHub Pages** · Static hosting · No backend required

**Live site:** [dthornz.github.io/website-cv-tools](https://dthornz.github.io/website-cv-tools)

---

## Pages in this repo

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Landing page linking to all tools |
| **Curriculum Vitae** | `AsadMirza_CV.html` | Full interactive academic CV |
| **Project Showcase** | `projects.html` | Research portfolio with modal detail cards |
| **PhD Dissertation** | `dissertation.html` | Dissertation overview page |

## Linked tool repos (separate GitHub Pages)

Each tool lives in its own repository and GitHub Pages deployment. The nav bar and shared design system are reproduced in each repo so all pages feel like one site.

| Tool | Repo | Live URL |
|------|------|----------|
| **HH Neuron Model** | [DThornz/hodgkin-huxley](https://github.com/DThornz/hodgkin-huxley) | [dthornz.github.io/hodgkin-huxley](https://dthornz.github.io/hodgkin-huxley/) |
| **Maxwell–Boltzmann Simulator** | [DThornz/maxwell-boltzmann](https://github.com/DThornz/maxwell-boltzmann) | [dthornz.github.io/maxwell-boltzmann](https://dthornz.github.io/maxwell-boltzmann/) |
| **LBM CFD Simulator** | [DThornz/lbm-cfd](https://github.com/DThornz/lbm-cfd) | [dthornz.github.io/lbm-cfd](https://dthornz.github.io/lbm-cfd/) |
| **Engineering FEA/CFD Calc** | [DThornz/eng-fea-cfd-calc](https://github.com/DThornz/eng-fea-cfd-calc) | [dthornz.github.io/eng-fea-cfd-calc](https://dthornz.github.io/eng-fea-cfd-calc/) |
| **Reference Validator** | [DThornz/academic-ref-validator](https://github.com/DThornz/academic-ref-validator) | [dthornz.github.io/academic-ref-validator](https://dthornz.github.io/academic-ref-validator/) |

All pages share a consistent site-wide navigation bar and an accessibility panel (⚙) for dark/light mode, font size, and font style — preferences saved across pages via `localStorage`.

---

## Curriculum Vitae (`AsadMirza_CV.html`)

Interactive single-page academic CV built with vanilla HTML/CSS/JS.

**Features:**
- Collapsible sections at three levels: Section → Group → Entry
- Expandable publication cards with abstract, DOI, image, and video slots
- Sidebar navigation with scroll-based active highlighting
- **Expand All / Collapse All** toggle
- **Download Word CV** button — exports a pre-formatted `.docx` (embedded base64, no server)
- **Settings panel** — light/dark mode, three font families, three font sizes
- Print-friendly `@media print` styles (Times New Roman, APA/academic format)
- Fully responsive — mobile collapses sidebar

**Sections:**
Education · Work Experience · Publications (Patent, Book Chapter, 9 Articles) ·  
Conference Proceedings (8 Oral · 25+ Posters) · Teaching · Supervision & Mentorship ·  
Funding & Awards · Technical Skills · Service & Outreach

**Supervision & Mentorship (as of Spring 2026):**
- 4 PhD Co-Mentees (Tsoukias Lab: Khakpour, Saadat, Saha; Alevriadou co-I: Muñoz)
- 3 Undergraduate Research Interns
- 19+ Senior Design Teams (2017–2026), including:
  - **Spring 2026 Faculty Mentor** — Team F3 (IDD 2.0: Wearable Capsular Contracture Device)
  - **Spring 2026 Consulting Advisor** — Teams F5 (FMT System), F7 (ECMO Phantom), F8 (RESTORE)
  - **Fall 2025 Faculty Mentor** — Team F3 (Fully Mechanical Prosthetic Ankle)

---

## Project Showcase (`projects.html`)

Research portfolio with filterable cards that expand into full-detail modals.

- Filter by: CFD/FSI · FEA · Biomedical · Image/ML · Software
- Each card expands to show: description, metrics, equations, image gallery, links
- 8 projects pre-populated including CAVD hemodynamics, NO transport, calcium signaling, and more
- Media slots: YouTube embed, local image/video, or placeholder

---

## Tool repos (see their own READMEs for full details)

Each tool is documented in its own repository:

- **[hodgkin-huxley](https://github.com/DThornz/hodgkin-huxley)** — Interactive HH neuron model (RK4, 6 real-time plots, channel blockers, temperature scaling)
- **[maxwell-boltzmann](https://github.com/DThornz/maxwell-boltzmann)** — 2D ideal-gas molecular dynamics with live MB speed distribution
- **[lbm-cfd](https://github.com/DThornz/lbm-cfd)** — GPU D2Q9 LBM hemodynamics solver (WebGL2, Carreau–Yasuda, 8 vascular presets)
- **[eng-fea-cfd-calc](https://github.com/DThornz/eng-fea-cfd-calc)** — 25+ client-side FEA/CFD/biomedical engineering calculators
- **[academic-ref-validator](https://github.com/DThornz/academic-ref-validator)** — Reference list validator (CrossRef, EPMC, Semantic Scholar, DOI verification)

---

## Local Development / Editor

`cv_editor.jsx` is a React-based GUI editor for the CV. Run locally with any JSX bundler (Vite, CRA).

**Features:** sidebar tree navigation · rich text editing · undo/redo (60-step, Ctrl+Z/Y) · media slots (images, YouTube, video) · Export HTML / Export JSON / Import JSON · new entries added at top (reverse chronological)

The editor does **not** need to be deployed — run locally, export `AsadMirza_CV.html`, commit to this repo.

**Editor data is kept in sync with `AsadMirza_CV.html`** and covers all sections: publications, conference proceedings (oral + poster), teaching (primary instructor + TA + course material dev), supervision (PhD co-mentees + undergrad interns + 19+ senior design teams), funding, skills, and service.

---

## Repository Structure

```
website-cv-tools/
├── index.html              ← Landing page
├── AsadMirza_CV.html       ← Interactive academic CV
├── projects.html           ← Research project showcase
├── dissertation.html       ← PhD dissertation page
├── AsadMirza_CV.docx       ← Word export (embedded in CV page)
├── cv_editor.jsx           ← React GUI editor (run locally)
├── README.md               ← This file
└── LICENSE                 ← Apache 2.0
```

---

## Deployment

Site is deployed on **GitHub Pages** from the `main` branch root.

To update content:
1. Edit `AsadMirza_CV.html` directly, or use `cv_editor.jsx` locally to export it
2. Commit changes to `main`
3. GitHub Pages rebuilds in ~60 seconds

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5, SVG |
| Styling | CSS3 (custom properties, grid, flexbox, `@media print`) |
| Interactivity | Vanilla JavaScript — Canvas API, RK4 ODE solver |
| Math rendering | KaTeX (simulator pages) |
| Fonts | Google Fonts — DM Serif Display, DM Mono, DM Sans |
| Editor | React (JSX hooks) |
| Hosting | GitHub Pages |

No build step required for deployed pages. Open any `.html` file in a browser.

---

## Contact

**Dr. Asad Mirza, PhD**  
Research Assistant Professor · Biomedical Engineering  
Florida International University · Miami, FL 33174

📧 [amirza@fiu.edu](mailto:amirza@fiu.edu)  
🔗 [ORCID: 0000-0003-4515-2203](https://orcid.org/0000-0003-4515-2203)  
📑 [Google Scholar](https://scholar.google.com/citations?user=a8fYPM0AAAAJ)  
🔬 [ResearchGate](https://www.researchgate.net/profile/Asad_Mirza2)  
⌥ [GitHub](https://github.com/DThornz)

---

*Last updated: April 2026*
