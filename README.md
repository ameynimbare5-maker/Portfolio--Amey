# Amey Vasant Nimbare - Personal Portfolio

A modern, high-performance, responsive personal developer brand portfolio website built using **React 18**, **Tailwind CSS**, and **Framer Motion**.

Designed with a premium dark theme, glassmorphism aesthetics, electric blue/cyan/purple glow accents, smooth scroll navigation, interactive project modals, and a modular architecture.

---

## 🌟 Key Features

- **Dark Premium Aesthetic**: Charcoal / deep black background (`#07080d`), glassmorphic panels, and glowing gradient borders.
- **Dark & Light Mode**: Seamless theme switcher with `localStorage` persistence.
- **Hero Dynamic Typing**: Cycles through roles (*Frontend Developer*, *React.js Developer*, *Aspiring Full Stack Developer*, *Creative Problem Solver*).
- **Responsive Navigation**: Sticky navbar with backdrop blur, active section scroll-spy indicator, and animated mobile menu drawer.
- **Custom Glowing Cursor**: Interactive cursor on desktop with a toggle switch to turn it on/off according to user preference.
- **Filterable Showcase Projects**: Interactive project cards with category filters (*All*, *Full Stack*, *Frontend*, *Web Apps & PWA*).
- **Project Deep-Dive Modal**: Detailed architecture highlights, key features, challenges solved, and repository links.
- **Skills Matrix with Progress**: Organized by category (*Frontend*, *Backend*, *Database*, *Languages*, *Tools*) with visual percentage bars.
- **Education Timeline**: Vertical timeline highlighting TYBSc IT at *Gokhale Education Society's Shri Bhausaheb Vartak College* and foundational schooling.
- **Experience & Learning Journey**: Thoughtfully crafted for a fresher with realistic metrics (no fabricated employment history).
- **Interactive Journey**: Multi-step evolution from learning C/C++ to building full-stack applications.
- **Interactive Contact Form**: Client-side validation, direct `mailto:` fallback, one-click email copying, and celebration confetti on submission.
- **Printable Resume Modal**: Quick resume preview with instant print / PDF download.
- **Scroll-to-Top**: Floating button with circular SVG progress ring indicating reading progress.

---

## 🚀 Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Bundler & Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Confetti**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📂 Project Architecture

```
Portfolio/
├── index.html                  # SEO-optimized HTML entry point with meta tags
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite bundler configuration
├── tailwind.config.js          # Tailwind theme colors, glows, animations
├── postcss.config.js           # PostCSS configuration
├── public/
│   ├── favicon.svg             # Glowing AVN brand icon
│   └── resume.html             # Printable resume template (or place your resume.pdf)
└── src/
    ├── main.jsx                # React DOM root render
    ├── App.jsx                 # App root with state management and loaders
    ├── styles/
    │   └── index.css           # Tailwind base, utilities, custom glassmorphism
    ├── hooks/
    │   ├── useTheme.js         # Dark / Light theme toggle & persistence
    │   └── useScrollSpy.js     # Active section tracking for navbar
    ├── components/
    │   ├── Navbar.jsx          # Responsive sticky navigation bar
    │   ├── Footer.jsx          # Branded footer with links and social icons
    │   ├── Button.jsx          # Reusable styled button component
    │   ├── SectionTitle.jsx    # Section header with glowing badges
    │   ├── ThemeToggle.jsx     # Animated Sun/Moon toggle button
    │   ├── CustomCursor.jsx    # Smooth trailing cursor for desktop
    │   ├── ScrollToTop.jsx     # Floating progress circle & scroll-to-top
    │   ├── SkillCard.jsx       # Individual skill card with progress bar
    │   ├── ProjectCard.jsx     # Project preview card with action buttons
    │   ├── ProjectModal.jsx    # Deep-dive project details modal
    │   └── ResumeModal.jsx     # Interactive resume modal with print view
    ├── sections/
    │   ├── Hero.jsx            # Impressive hero section with typing effect
    │   ├── About.jsx           # Bio narrative, goals, and metric counters
    │   ├── Skills.jsx          # Filterable technical skills matrix
    │   ├── Education.jsx       # Vertical academic timeline
    │   ├── Projects.jsx        # Project showcase grid & filters
    │   ├── Experience.jsx      # Fresher learning journey & availability
    │   ├── Certifications.jsx  # Editable certifications and workshops
    │   ├── Services.jsx        # "What I Can Do" service cards
    │   ├── Journey.jsx         # Development milestone progression
    │   └── Contact.jsx         # Contact form with validation & social links
    └── data/
        ├── personalData.js     # All personal info, bio, stats, links
        ├── skills.js           # Skills list, categories, and percentages
        ├── projects.js         # Project entries, tech stack, and details
        ├── education.js        # Degrees, institutions, and coursework
        ├── experience.js       # Academic practicals and internship goals
        ├── certifications.js   # Certifications, workshops, and achievements
        ├── services.js         # Service deliverables and offerings
        └── journey.js          # Development milestone timeline steps
```

---

## 🛠️ Getting Started (Local Development)

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your machine. Check with:
```bash
node -v
npm -v
```

### 2. Installation
Open your terminal in the project directory and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live website with instant Hot Module Replacement (HMR).

### 4. Build for Production
To generate optimized production bundles:
```bash
npm run build
```
The compiled static assets will be located in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Personal Details

All content is cleanly separated from UI components into the `src/data/` folder:

| File | What to Customize |
|---|---|
| `src/data/personalData.js` | Your name, bio, email, GitHub/LinkedIn links, location, typing roles, and stats |
| `src/data/skills.js` | Add, remove, or modify skills, proficiency levels (0-100), and categories |
| `src/data/projects.js` | Update project descriptions, live demo links, GitHub URLs, and screenshots |
| `src/data/education.js` | Edit college name, graduation year, grades, and previous school details |
| `src/data/experience.js` | Update internship status, academic projects, and learning journey |
| `src/data/certifications.js` | Replace placeholder certificates with your real certificates and verification links |
| `src/data/services.js` | Modify services and deliverables offered |
| `src/data/journey.js` | Update milestones and years in your coding journey |

### Adding Your PDF Resume:
1. Place your compiled PDF file inside the `public/` folder and name it `resume.pdf`.
2. In `src/components/ResumeModal.jsx` or any button linking to the resume, reference `/resume.pdf`.

---

## 📬 Connecting the Contact Form to Your Email

In `src/sections/Contact.jsx`, you have multiple flexible options:

### Option A: Free Formspree Integration (Easiest)
1. Go to [formspree.io](https://formspree.io/) and create a free account.
2. Create a new form and copy the endpoint URL (e.g. `https://formspree.io/f/mqkenbvd`).
3. Open `src/sections/Contact.jsx` and set:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
4. Now all submissions through the contact form will arrive directly in your email inbox!

### Option B: Web3Forms Integration
1. Obtain a free access key at [web3forms.com](https://web3forms.com/).
2. Submit form data directly to `https://api.web3forms.com/submit`.

### Option C: Direct Mailto Link
A native `mailto:` button is already included out of the box in the contact section, allowing visitors to click and compose an email directly in their mail app.

---

## 🌐 Deployment Instructions

### Deploy on Vercel (Recommended - Takes 1 minute)
1. Push your repository to **GitHub**.
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select your portfolio repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Your site is now live with a free SSL certificate!

### Deploy on Netlify
1. Go to [netlify.com](https://netlify.com/) and sign in.
2. Click **"Add new site"** > **"Import an existing project"** > **GitHub**.
3. Select this repository.
4. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy Site"**.

---

## 📄 License
This project is open-source and free to use for personal developer portfolios.
Designed & Developed by **Amey Vasant Nimbare**.
