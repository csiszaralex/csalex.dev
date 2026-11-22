# csalex.dev | The Digital Garden

[![CI](https://github.com/csiszaralex/csalex.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/csiszaralex/csalex.dev/actions/workflows/ci.yml)

> **"Building systems that survive reality."**

This repository contains the source code for my personal professional portfolio. It serves as a central hub for my engineering projects, architectural philosophy, and contact channels.

**Live URL:** [https://csalex.dev](https://csalex.dev)

## 🏗️ Architecture & Tech Stack

The site is statically prerendered and hosted on Vercel.

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router), built with webpack because the service worker plugin requires it
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Library:** [shadcn/ui](https://ui.shadcn.com/) (Base UI based)
- **Icons:** [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)
- **Form Handling:** [Formspree](https://formspree.io/)
- **Offline support:** [Serwist](https://serwist.pages.dev/) service worker
- **Font:** Inter (Sans) & Fira Code (Mono)

## ⚡ Features

- **Dark/Light Mode:** System-aware theme switching with persistent state.
- **Installable PWA:** Visited pages keep working offline, with a fallback page for the rest.
- **Security headers:** Content Security Policy and related headers, set in `next.config.ts`.
- **SEO:** Canonical URL, Open Graph and Twitter metadata, a generated link preview image, `robots.txt` and a sitemap.
- **Contact Form:** Serverless email handling via Formspree, with an error message when sending fails.

## 🚀 Local Development

To run this project locally, you'll need Node.js 20.9+ (required by Next.js 16) and pnpm.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/csiszaralex/csalex.dev.git
    cd csalex.dev
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory. The production build fails without it, so the contact form never ships broken:

    ```bash
    NEXT_PUBLIC_FORMSPREE_ID=your_form_id
    ```

4.  **Run the development server:**

    ```bash
    pnpm dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser. The service worker is only active in a production build (`pnpm build && pnpm start`).

## 📄 CV

The CV's LaTeX source is `cv/cv.tex`. After changing it, run `pnpm cv` (needs a LaTeX distribution with `latexmk`, plus `pdfinfo` and `pdftotext`) and commit `public/CV.pdf` together with the source.

## 📂 Project Structure

```bash
├── app
│   ├── globals.css            # Tailwind v4 configuration & theme variables
│   ├── layout.tsx             # Root layout, fonts & page metadata
│   ├── page.tsx               # Main composition
│   ├── manifest.ts            # PWA manifest
│   ├── sw.ts                  # Service worker (Serwist)
│   ├── ~offline/              # Offline fallback page
│   ├── opengraph-image.tsx    # Generated link preview image
│   └── robots.ts, sitemap.ts  # Search engine files
├── components
│   ├── ui/                    # shadcn components (Button, Card, etc.)
│   ├── hero.tsx               # Main landing section
│   ├── projects.tsx           # Project showcase grid
│   ├── about.tsx              # Engineering philosophy & stack
│   └── contact.tsx            # Formspree integration
├── lib
│   └── site.ts                # Site identity and contact links
└── public                     # Static assets (CV, icons)
```

## 📜 License

The content of this site (texts, CV, images) is personal and all rights are reserved. Feel free to read the code for ideas.
