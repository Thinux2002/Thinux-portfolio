# Thinal Portfolio

Personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and Three.js.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- Three.js (`@react-three/fiber`, `@react-three/drei`)
- EmailJS

## Features

- Modern hero section with animated text and profile badge
- Parallax background and motion effects
- 3D canvas elements
- Sections for About, Experience, Works, Contact, and Tech Stack
- Responsive layout for desktop and mobile

## Getting Started

### 1. Clone the project

```bash
git clone <your-repo-url>
cd Thinal-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
src/
  components/
    canvas/
    Hero.jsx
    HeroText.jsx
    Astronaut.jsx
    parallaxBackground.jsx
    Profilebadge.jsx
  App.jsx
  main.jsx
```

## Notes

- Import paths are case-sensitive in Vite. Keep component file names and import names matched exactly.
- If HMR shows stale module errors, restart the dev server.
