# Aakash — Premium DevOps Portfolio

Built with React + Vite + Tailwind CSS + Framer Motion + Three.js

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📦 Production Build

```bash
npm run build
npm run preview
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Deploy (zero config needed)

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag & drop the `dist/` folder to Netlify
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/          # 3D sphere + typing animation + stats
│   ├── About/         # Bio card + career timeline
│   ├── Skills/        # Animated skill bars + tech icons
│   ├── Projects/      # Hover cards + tech badges
│   ├── DevOps/        # Interactive CI/CD pipeline
│   ├── Experience/    # Work + education + certifications
│   ├── Contact/       # Terminal + contact form + socials
│   ├── Terminal/      # Interactive CLI (about/skills/projects)
│   ├── Cursor/        # Custom mouse cursor
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Loader.jsx
└── utils/
    └── data.js        # All portfolio content — edit this!
```

## ✏️ Customization

All content lives in `src/utils/data.js`. Update:
- `personalInfo` — name, email, links
- `skills` — tech stack levels
- `projects` — your projects + GitHub links
- `experience` — work history
- `certifications` — your certs

## Tech Stack

- React 18 + Vite 6
- Tailwind CSS 3
- Framer Motion (animations)
- Three.js / React Three Fiber (3D hero)
- React Type Animation (typing effect)
