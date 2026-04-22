# Accredian Enterprise Page Clone (Partial)

A high-fidelity partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website, built as part of the Full Stack Developer Intern assignment.

## 🚀 Live Demo
**Deployed Link:** [https://accredian-enterprise-clone.vercel.app/](https://accredian-enterprise-clone.vercel.app/) *(Placeholder)*

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS (v4)
- **Icons:** Custom SVGs & Lucide React
- **Deployment:** Vercel

## 📋 Features
- **Responsive Design:** Optimized for Mobile, Tablet, and Desktop.
- **Modern UI:** Recreated branding with custom gradients, Inter typography, and premium shadows.
- **Functional Lead Capture:** Bonus feature implemented with a controlled form and a Next.js API route.
- **Smooth Navigation:** Anchor-link based navigation for all primary sections.
- **Interactive Elements:** Animated number counters, accordion FAQs, and tabbed interfaces.

## 🏗️ Approach Taken
1. **Component-First Architecture:** Divided the page into 14+ modular, reusable components (e.g., `Navbar`, `LeadForm`, `AccredianEdge`) to ensure high readability and maintainability.
2. **Standardized Design System:** Implemented a central layout container (`container-custom`) and standardized spacing utilities to ensure visual consistency across the entire clone.
3. **Robust Styling:** Switched from fragile absolute positioning to a modern Flexbox and Grid-based layout for better responsiveness and stability.
4. **API Integration:** Built a mock backend using Next.js API Routes (`/api/leads`) to handle enterprise inquiries, fulfilling both mandatory and bonus requirements.

## 🤖 AI Usage & Improvements
This project was developed in collaboration with **Antigravity (AI Coding Assistant)** and **Claude**.

### Where AI Helped:
- **Rapid Prototyping:** **Claude** and **Antigravity** assisted in generating the initial scaffolding for complex sections like the zigzag "Accredian Edge" diagram and the interactive FAQ accordion.
- **Logic Implementation:** Assisted in creating the logic for the intersection observer-based counter in the `Stats` section.
- **Debugging:** **Antigravity** helped identify and resolve a critical CSS conflict that was causing layout smushing in the earlier versions.

### Manual Modifications & Improvements:
- **Styling Refinement:** Manually tuned the color palette (e.g., `#1A73E8`) and spacing (`py-20`) to achieve pixel-perfect visual parity with the reference site.
- **Accessibility:** Manually added ARIA labels and optimized semantic HTML tags for better screen reader support.
- **Optimization:** Manually optimized Next.js `Image` components for faster LCP (Largest Contentful Paint).

## ⏳ Improvements with More Time
- **Dynamic Content:** Implement a CMS (like Sanity or Contentful) to manage program details dynamically.
- **Unit Testing:** Add Vitest/Jest tests for the API routes and key UI components.
- **Dark Mode:** Add a toggle for a native dark mode experience.
- **Database Integration:** Switch the mock in-memory lead storage to a persistent database like MongoDB or PostgreSQL.

## ⚙️ Setup Instructions
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.
