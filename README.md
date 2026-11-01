# ⚡ Eman Muneeb — Immersive Cyberpunk Developer Portfolio

[![Live Deployment](https://img.shields.io/badge/LIVE%20DEMO-GitHub%20Pages-00f3ff?style=for-the-badge&logo=github&logoColor=black)](https://muneeb912-cmd.github.io/Portfolio/)
[![Role](https://img.shields.io/badge/ROLE-Mobile%20Software%20Engineer-b026ff?style=for-the-badge)](https://devsinc.com)
[![Organization](https://img.shields.io/badge/ORGANIZATION-Devsinc-39ff14?style=for-the-badge)](https://devsinc.com)
[![Alumni](https://img.shields.io/badge/ALUMNI-BS%20CS%20%7C%20UET%20Lahore-ff007f?style=for-the-badge)](https://uet.edu.pk)
[![Stack](https://img.shields.io/badge/STACK-React%2018%20%7C%20Vite%205%20%7C%20Three.js-0088ff?style=for-the-badge)](https://react.dev)

> **Live Production URL:** [https://muneeb912-cmd.github.io/Portfolio/](https://muneeb912-cmd.github.io/Portfolio/)

---

## 🌌 Overview

An exceptional, production-grade, immersive 3D cyberpunk digital universe showcasing the software craftsmanship and engineering trajectory of **Eman Muneeb** — Software Engineer and Mobile Application Developer at **Devsinc**, having graduated in Computer Science from the **University of Engineering and Technology (UET) Lahore**.

Designed to captivate both engineering recruiters seeking high-impact mobile developers and technical clients looking for professional mobile architecture and consulting services.

```
███████╗███╗   ███╗ █████╗ ███╗   ██╗    ███╗   ███╗██╗   ██╗███╗   ██╗███████╗███████╗██████╗ 
██╔════╝████╗ ████║██╔══██╗████╗  ██║    ████╗ ████║██║   ██║████╗  ██║██╔════╝██╔════╝██╔══██╗
█████╗  ██╔████╔██║███████║██╔██╗ ██║    ██╔████╔██║██║   ██║██╔██╗ ██║█████╗  █████╗  ██████╔╝
██╔══╝  ██║╚██╔╝██║██╔══██║██║╚██╗██║    ██║╚██╔╝██║██║   ██║██║╚██╗██║██╔══╝  ██╔══╝  ██╔══██╗
███████╗██║ ╚═╝ ██║██║  ██║██║ ╚████║    ██║ ╚═╝ ██║╚██████╔╝██║ ╚████║███████╗███████╗██████╔╝
╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝╚═════╝ 
```

---

## ✨ Architectural & Interactive Highlights

### 🏙️ 1. Procedural 3D WebGL Cityscape (`Three.js`)
* **Dynamic Low-Poly Metropolises:** Procedurally placed holographic towers, illuminated antenna spires, glowing skyscraper windows, and volumetric fog.
* **Cyber Ground Grid & Atmospheric Particles:** Scrolling infinite neon wireframe terrain combined with 600+ floating dynamic dust and ember particles.
* **Adaptive Performance Tiers:** Integrated runtime graphics switcher (`HIGH` with post-processing and volumetric lighting, `LOW` for lightweight rendering, `STATIC` for battery conservation and accessibility).
* **Mouse Damping Parallax:** Responsive camera panning responding dynamically to desktop cursor orientation and mobile gyro movements.

### 🔊 2. Zero-Dependency Web Audio Synthesizer
* **Procedural Sound Engine (`soundFX.js`):** Built entirely with the native browser Web Audio API — zero external `.mp3` or `.wav` dependencies for instantaneous playback and zero network overhead.
* **Interactive Haptic Audio:** Micro-interactions including terminal keyclicks, blips on hover, futuristic chirp confirmations, and multi-oscillator chords.
* **Global Mute Controller:** Persistent audio toggle accessible from the top HUD navigation bar.

### 💻 3. Interactive CLI Developer Terminal
* **Full Command Parser:** Accessible from the hero HUD or nav bar with support for commands:
  * `help`, `about`, `skills`, `experience`, `projects`, `services`, `contact`, `resume`, `clear`, `matrix`, `date`, `whoami`.
* **Keyboard-Friendly & Accessible:** Command history recall (Up/Down arrow keys), mobile quick-action chips, and instant terminal clearing.

### 👤 4. Holographic Dossier & Biometric HUD
* **Dynamic Photograph Uplink:** Configured to automatically detect and display profile photography from `public/profile.jpg` with a glowing cyberpunk scanner reticle, featuring graceful biometric HUD fallback.
* **Balanced Core Pillars:** Clean full-width engineering foundation grid highlighting **Software Architect**, **Performance-First**, **CI/CD & DevOps Automation**, and **Creative Precision**.

### 📱 5. Verified Engineering Arsenal & Case Studies
* **Real Production Repositories:** Direct showcase of authentic mobile applications (Swift Stock, ChattyBuzz, Flutter PDF Downloader, SIM, The Brain Train School, Task Manager, Rest-API-CRUD).
* **Architectural Modal Deep Dives:** Interactive inspection modals breaking down system architecture, state management patterns, and GitHub source links.

### 📡 6. Secure Transmission Uplink (Formspree Integration)
* **Functional Contact Dispatch:** Live encrypted transmission form wired directly to Formspree (`https://formspree.io/f/mgejvpdz`) with validation, real-time loading feedback, success confirmation, and fallback direct email.
* **Equal-Height HUD Panels:** DIRECT TELEMETRY card with verified social credentials (GitHub, LinkedIn, YouTube, Instagram) and real-time node uplink metrics.

### 🔍 7. Complete Technical Search Engine Optimization (SEO)
* **Google Schema.org JSON-LD:** Structured graph tagging for `Person` and `WebSite` entities to power Google Knowledge Panels and rich search snippets.
* **Open Graph & Twitter Cards:** 1200×630 high-definition cyberpunk social graph preview (`public/og-preview.svg`).
* **Sitemap & Robots Directives:** Search engine crawlers enabled via `public/robots.txt` and `public/sitemap.xml`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 18, React DOM, React Router DOM v6 |
| **Build & Bundler** | Vite 5 with Rollup code-splitting chunks |
| **3D & WebGL Engine** | Three.js (Procedural geometries, fog, particle systems) |
| **Icons & Vectors** | Lucide React, Custom Brand SVGs (`GithubIcon`, `LinkedinIcon`, etc.) |
| **Audio Synthesis** | Web Audio API (Zero external assets procedural synthesis) |
| **Styling & Theme** | Cyberpunk Design System, Orbitron, Rajdhani, Space Grotesk, Fira Code |
| **Form Backend** | Formspree REST API |
| **Hosting & CI/CD** | GitHub Pages (`gh-pages`) |

---

## 📁 Repository Directory Structure

```
Web/
├── public/
│   ├── favicon.svg          # Custom cyberpunk EM brand emblem
│   ├── og-preview.svg       # 1200x630 social graph card
│   ├── robots.txt           # Search engine crawler permissions
│   ├── sitemap.xml          # XML sitemap with route priorities
│   └── vite.svg             # Fallback brand mark
├── src/
│   ├── Components/
│   │   ├── About/           # Holographic profile dossier & engineering pillars
│   │   ├── Canvas3D/        # Three.js cyberpunk procedural city & particles
│   │   ├── Contact/         # Functional Formspree transmission uplink & telemetry
│   │   ├── Experience/      # Interactive Devsinc timeline & certifications
│   │   ├── Footer/          # Cybernetic footer with live telemetry
│   │   ├── Hero/            # Hero section with glitch name reveal & stats HUD
│   │   ├── Icons/           # Standalone brand SVG components
│   │   ├── Navbar/          # Floating HUD header, audio toggle & terminal trigger
│   │   ├── Projects/        # Engineering arsenal & architectural case study modal
│   │   ├── Services/        # Deployable mobile & architecture services
│   │   ├── Skills/          # Interactive technology matrix with domain filters
│   │   └── Terminal/        # CLI terminal emulator with command parser
│   ├── styles/
│   │   └── cyberpunk.css    # Central cyberpunk tokens, scanlines & animations
│   ├── utils/
│   │   └── soundFX.js       # Native Web Audio API procedural synthesizer
│   ├── App.jsx              # Main application shell
│   ├── index.css            # Base styles
│   └── main.jsx             # React root mount
├── index.html               # Technical SEO, JSON-LD Schema & meta tags
├── package.json             # Build scripts & dependencies
└── vite.config.js           # Vite bundle configuration (base: "/Portfolio/")
```

---

## 🚀 Local Development Setup

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (v9.0.0 or higher)

### Installation & Execution

```bash
# 1. Clone the repository
git clone https://github.com/Muneeb912-cmd/Portfolio.git

# 2. Navigate to project root
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start local development server with Vite HMR
npm run dev
```

Open [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) in your browser to inspect the application.

---

## 📦 Production Build & Deployment

```bash
# Build optimized production bundle to dist/
npm run build

# Deploy production bundle directly to GitHub Pages
npm run deploy
```

The application is deployed to the `gh-pages` branch and served at `https://muneeb912-cmd.github.io/Portfolio/`.

---

## 📬 Contact & Public Identities

* **Email:** [emanmuneeb1@gmail.com](mailto:emanmuneeb1@gmail.com)
* **LinkedIn:** [Eman Muneeb](https://www.linkedin.com/in/eman-muneeb-363440225/)
* **GitHub:** [@Muneeb912-cmd](https://github.com/Muneeb912-cmd)
* **YouTube:** [@CODINGisFUN-xz2em](https://youtube.com/@CODINGisFUN-xz2em)
* **Instagram:** [@skittleclicks](https://www.instagram.com/skittleclicks/)

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
