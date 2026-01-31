# csalex.dev | The Digital Garden

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Tech Stack](https://img.shields.io/badge/stack-Next.js_16_|_Tailwind_|_Shadcn-000000)
![License](https://img.shields.io/badge/license-MIT-blue)

> **"Building systems that survive reality."**

This repository contains the source code for my personal professional portfolio. It serves as a central hub for my engineering projects, architectural philosophy, and contact channels. Built with a focus on **performance**, **clean code**, and **accessibility**.

**Live URL:** [https://csalex.dev](https://csalex.dev)

## 🏗️ Architecture & Tech Stack

The project is built as a static site (SSG) to ensure maximum speed and SEO performance, hosted on Vercel's Edge Network.

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Library:** [shadcn/ui](https://ui.shadcn.com/) (Base UI based)
- **Icons:** [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)
- **Form Handling:** [Formspree](https://formspree.io/)
- **Font:** Inter (Sans) & Fira Code (Mono)

## ⚡ Features

- **Dark/Light Mode:** System-aware theme switching with persistent state.
- **Responsive Design:** Mobile-first approach with optimized grid layouts.
- **Performance:** optimized images (`next/image`), local font loading, and zero layout shift.
- **Contact Form:** Serverless email handling via Formspree API.

## 🚀 Local Development

To run this project locally, you'll need Node.js 18+ and pnpm.

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/csiszaralex/csalex.dev.git](https://github.com/csiszaralex/csalex.dev.git)
    cd csalex.dev
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory:

    ```bash
    NEXT_PUBLIC_FORMSPREE_ID=your_form_id
    NEXT_PUBLIC_CONTACT_EMAIL=hello@csalex.dev
    ```

4.  **Run the development server:**

    ```bash
    pnpm dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📂 Project Structure

```bash
├── components
│   ├── ui/           # Reusable shadcn components (Button, Card, etc.)
│   ├── hero.tsx      # Main landing section
│   ├── projects.tsx  # Project showcase grid
│   ├── about.tsx     # Engineering philosophy & stack
│   └── contact.tsx   # Formspree integration
├── app
│   ├── globals.css   # Tailwind v4 configuration & theme variables
│   ├── layout.tsx    # Root layout & font injection
│   └── page.tsx      # Main composition
└── public            # Static assets (CV, icons)
```

## 📜 License

This project is open source and available under the MIT License.

