---
name: senior-software-engineer
description: >-
  Senior Software Engineering skill for building robust, scalable, high-performance
  web applications with Next.js, React, TypeScript, and Tailwind CSS.
  Use this skill when architecting applications, establishing code standards,
  writing clean typesafe code, optimizing performance, securing endpoints,
  and setting up automated workflows and version control.
---

# Senior Software Engineer & Architecture Standards Skill

This skill enforces enterprise-grade engineering practices, architectural cleanliness, TypeScript type-safety, performance optimization, defensive security, and git version control discipline for Next.js and modern web applications.

---

## 1. Architectural Guidelines & Next.js Standards

1. **App Router Conventions**:
   - Leverage React Server Components (RSC) by default for pages and static content to eliminate client bundle overhead.
   - Use Client Components (`"use client"`) only when strictly necessary (e.g. interactive forms, stateful accordions, mobile navigation toggles).
   - Colocate page-specific utilities or keep them in structured feature/domain directories.

2. **Directory & Module Structure**:
   ```text
   src/
   ├── app/                 # Next.js App Router (pages, layouts, api routes)
   │   ├── (site)/          # Route group or clean top-level routes
   │   ├── api/             # API endpoints (e.g., /api/enquiries)
   │   ├── layout.tsx       # Root layout with font optimization & metadata
   │   ├── page.tsx         # High-converting homepage
   │   ├── sitemap.ts       # Dynamic sitemap generation
   │   ├── robots.ts        # Dynamic robots.txt
   │   └── not-found.tsx    # Accessible 404 page
   ├── components/          # Reusable UI & Layout components
   │   ├── layout/          # Header, Footer, Navigation, MobileMenu
   │   ├── ui/              # Button, Input, Card, Badge, Accordion
   │   ├── home/            # Homepage sections (Hero, ServicesGrid, etc.)
   │   └── forms/           # Service-aware enquiry forms with progressive disclosure
   ├── content/             # Structured data, service definitions, copy
   ├── lib/                 # Utility functions, validation schemas, email/enquiry handlers
   ├── types/               # TypeScript interfaces, domain types
   └── styles/              # Global styles, Tailwind imports, CSS variables
   ```

3. **Separation of Concerns**:
   - Content and configuration must be decoupled from layout components. All company copy, contact details, and service definitions should reside in typed data files under `src/content/` or `src/config/`.
   - Business logic and form validation must be encapsulated in pure utility functions under `src/lib/`.

---

## 2. TypeScript & Code Quality Standards

1. **Strict Type Safety**:
   - Enable `"strict": true` in `tsconfig.json`.
   - Disallow `any`. Use `unknown`, generic parameters, or explicit interfaces/types.
   - Define strict union types for discrete states (e.g., `type ServiceId = 'accounting' | 'tax' | 'audit' | 'training' | 'zoho';`).
   - Use Zod or native type-guards for runtime validation of user inputs and API payloads.

2. **Clean Code & SOLID Principles**:
   - **Single Responsibility**: Each component or function should do one thing well. Break complex views into small, readable presentational components.
   - **DRY (Don't Repeat Yourself)**: Extract repeated patterns (e.g., service cards, section headers, input wrappers) into reusable components.
   - **Defensive Programming**: Always handle loading, error, and empty states gracefully. Validate inputs both on the client (UX) and on the server (Security).

---

## 3. Security & Privacy Best Practices

1. **Defensive API Engineering**:
   - **Spam Prevention**: Implement a hidden honeypot field (`website` or `fax_number`) in forms; silently reject submissions if filled.
   - **Input Sanitization**: Strip dangerous HTML tags, truncate strings to max lengths, validate email formats rigorously.
   - **Server-Side Validation**: Never trust client-side validation alone. Validate API requests with strict schemas.
   - **Rate Limiting**: Protect inquiry endpoints against abuse with IP-based or timestamp-based rate limiting.

2. **Data Privacy & Secrets Management**:
   - Zero hardcoded credentials or API keys. Always use environment variables (`process.env.VARIABLE_NAME`).
   - Prefix public environment variables with `NEXT_PUBLIC_` only when intentional. Sensitive keys must remain server-side only.
   - Never log sensitive user information (passwords, banking data, personal identifiable numbers) in server logs or analytics.

3. **Strict `.gitignore` Standards**:
   - Enforce an exhaustive `.gitignore` file that prevents accidental leaks of:
     - Dependency trees (`node_modules/`)
     - Build artifacts (`.next/`, `out/`, `build/`, `dist/`)
     - Environment secret files (`.env`, `.env.local`, `.env.development.local`, `.env.production.local`)
     - Operating system noise (`.DS_Store`, `Thumbs.db`)
     - IDE state directories (`.vscode/`, `.idea/`)
     - Log files (`npm-debug.log*`, `yarn-debug.log*`)

---

## 4. Performance & Core Web Vitals Optimization

1. **Asset & Image Optimization**:
   - Use `next/image` with explicit `width`, `height`, or `fill` with `sizes` to prevent Cumulative Layout Shift (CLS).
   - Use modern formats (WebP, AVIF) with appropriate compression.
   - Lazy load images below the fold; use `priority` only on the above-the-fold hero image.

2. **Font & Resource Optimization**:
   - Use `next/font/google` with `display: 'swap'` and subset `subsets: ['latin']` for zero layout shifts and instant font loading.
   - Keep JavaScript bundles lean. Use dynamic imports (`next/dynamic`) for heavy interactive widgets not needed immediately.

---

## 5. SEO & Discoverability Architecture

1. **Metadata API**:
   - Use Next.js Metadata API (`export const metadata: Metadata = { ... }`) on every route.
   - Provide custom, descriptive `title`, `description`, `keywords`, canonical URLs, and OpenGraph/Twitter card images.
   - Implement JSON-LD structured data (`Organization`, `LocalBusiness`, `Service`, `FAQPage`) to enable Google Rich Results.

2. **Crawlers & Indexing**:
   - Provide an automated `sitemap.xml` and `robots.txt` route via Next.js App Router conventions.
   - Ensure semantic HTML (`<h1>` single instance per page, proper semantic landmarks).

---

## 6. Git Workflow, Branching & Pull Request Standards

1. **Branching Strategy**:
   - Use feature branches named with descriptive prefixes:
     - `feature/<feature-name>` (e.g. `feature/setup-core-app`, `feature/homepage`, `feature/service-pages`, `feature/contact-form`)
     - `fix/<bug-name>`
     - `docs/<doc-name>`
   - Keep commits atomic, cohesive, and clearly documented using Conventional Commits:
     - `feat: ...` for new features
     - `fix: ...` for bug fixes
     - `chore: ...` for setup and config
     - `docs: ...` for documentation

2. **Pull Request Protocol**:
   - Open descriptive PRs for every completed feature branch back into `main`.
   - Include a summary of changes, screenshot/verification notes, and acceptance checklist in each PR description.
