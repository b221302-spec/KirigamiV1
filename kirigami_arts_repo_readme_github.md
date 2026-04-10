# Kirigami Arts Website Repository

This repository contains the source code and assets for the Kirigami Arts platform. The project is divided into two major sections:

- `Design/` – Frontend website design, UI guidelines, and Vite-based source code.
- `Main/` – Main website and admin dashboard built with Next.js.

---

# Project Structure

```text
├── Design/
│   ├── guidelines/
│   ├── src/
│   ├── ATTRIBUTIONS.md
│   ├── index.html
│   ├── package.json
│   ├── JS/
│   ├── postcss.config.mjs
│   ├── README.md
│   └── vite.config.ts
│
├── Main/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── public/
│   ├── styles/
│   ├── components.json
│   ├── kirigami-admin.zip
│   ├── next-env.d.ts
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── postcss.config.mjs
│   ├── README.md
│   └── tsconfig.json
```

---

# Folder Overview

## Design/
The `Design` folder contains the frontend design files and prototype implementation of the Kirigami Arts website.

### Contents
- `guidelines/` – UI/UX guidelines, branding rules, colors, fonts, and layout references.
- `src/` – Main frontend source files.
- `ATTRIBUTIONS.md` – Credits and third-party assets used.
- `index.html` – Main HTML entry point.
- `package.json` – Project dependencies and scripts.
- `JS/` – JavaScript utility files and scripts.
- `postcss.config.mjs` – PostCSS configuration.
- `vite.config.ts` – Vite configuration file.

### Tech Stack
- HTML
- CSS / Tailwind CSS
- JavaScript / TypeScript
- Vite
- PostCSS

### Run the Design Project

```bash
cd Design
npm install
npm run dev
```

The local development server will start, usually at:

```text
http://localhost:5173
```

---

## Main/
The `Main` folder contains the production website and admin dashboard for Kirigami Arts.

### Contents
- `app/` – Application routes and pages.
- `components/` – Reusable UI components.
- `hooks/` – Custom React hooks.
- `lib/` – Utility functions and shared logic.
- `public/` – Static assets such as images and icons.
- `styles/` – Global and component-specific styles.
- `components.json` – UI component configuration.
- `kirigami-admin.zip` – Backup/export of admin dashboard files.
- `next-env.d.ts` – Next.js environment type definitions.
- `next.config.mjs` – Next.js configuration.
- `package.json` – Project dependencies and scripts.
- `postcss.config.mjs` – PostCSS configuration.
- `tsconfig.json` – TypeScript configuration.

### Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- PostCSS

### Run the Main Project

Using npm:

```bash
cd Main
npm install
npm run dev
```

Or using pnpm:

```bash
cd Main
pnpm install
pnpm dev
```

The local development server will start, usually at:

```text
http://localhost:3000
```

---

# Features

- Responsive website for Kirigami Arts
- Workshop listing and booking interface
- Product and installation showcase
- Admin dashboard for content and website management
- Reusable components and scalable project structure
- Separate design prototype and production implementation

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

Then choose which part of the project you want to run:

```bash
cd Design
# or
cd Main
```

Install dependencies and start the development server.

---

# Recommended Workflow

1. Create and test UI changes inside `Design/`.
2. Move approved frontend sections into `Main/`.
3. Use the admin dashboard to manage content and updates.
4. Keep both folders synchronized when major UI changes are made.

---

# Notes

- Ensure Node.js 18+ is installed before running the project.
- `Main/` uses both `package-lock.json` and `pnpm-lock.yaml`; use only one package manager consistently.
- Do not edit generated files inside `node_modules/`.
- Keep `kirigami-admin.zip` only as a backup copy and avoid editing it directly.

---

# Contributors

Developed for Kirigami Arts.

Project Lead: Anuj Tomar

