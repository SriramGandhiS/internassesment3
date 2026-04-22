# Accredian Enterprise Page Clone (Partial)

A high-fidelity partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website, built as part of the Full Stack Developer Intern assignment.

## 🚀 Live Demo
**Deployed Link:** [https://accredian-enterprise-clone-omega.vercel.app/](https://accredian-enterprise-clone-omega.vercel.app/)

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS (v4)
- **Icons:** Custom SVGs & Lucide React
- **Deployment:** Vercel

## 🤖 AI-Centric Development Process
This project was developed using a cutting-edge **AI-First workflow**, leveraging multiple advanced AI agents to achieve high-fidelity results in record time.

### Which AI tools were used?
- **Antigravity (Primary Assistant):** Used for end-to-end development, including repository management, complex SVG engineering, and automated Vercel deployments.
- **Claude (Claude 3.5 Sonnet):** Used for architectural planning, high-quality component scaffolding, and content structuring.
- **ChatGPT (GPT-4o):** Used for initial logic brainstorming and Tailwind utility optimization.
- **GitHub Copilot:** Used for real-time code completion and boilerplate acceleration.

### How AI helped in development:
- **SVG Engineering:** The complex "S-curve" wave in the **CAT Framework** and the alternating "Accredian Edge" diagram were engineered using AI to calculate precise mathematical paths, ensuring pixel-perfect parity with the reference design.
- **Rapid Debugging:** When image fetching issues occurred (CORS/Hotlinking), AI quickly pivoted the strategy to use **Base64** and **Local Assets**, ensuring 100% reliability on the live deployment.
- **Automated Deployment:** Used AI to manage the entire Git workflow and Vercel CLI integration, allowing for near-instant "Code-to-Live" updates.
- **Styling Precision:** AI was instrumental in extracting and applying the exact color tokens (`#1A73E8`) and spacing hierarchies from the reference screenshots.
- **Lead Capture Logic:** Built a functional Next.js API route and a validated lead form with AI assistance in under 5 minutes.

## 🏗️ Approach Taken
1. **Component-First Architecture:** Divided the page into 14+ modular, reusable components (e.g., `Navbar`, `LeadForm`, `AccredianEdge`) to ensure high readability and maintainability.
2. **Standardized Design System:** Implemented a central layout container (`container-custom`) and standardized spacing utilities to ensure visual consistency across the entire clone.
3. **Robust Styling:** Switched from fragile absolute positioning to a modern Flexbox and Grid-based layout for better responsiveness and stability.
4. **API Integration:** Built a mock backend using Next.js API Routes (`/api/leads`) to handle enterprise inquiries, fulfilling both mandatory and bonus requirements.

## 📋 Features
- **Responsive Design:** Optimized for Mobile, Tablet, and Desktop.
- **Modern UI:** Recreated branding with custom gradients, Inter typography, and premium shadows.
- **Functional Lead Capture:** Bonus feature implemented with a controlled form and a Next.js API route.
- **Smooth Navigation:** Anchor-link based navigation for all primary sections.
- **Interactive Elements:** Animated number counters, accordion FAQs, and tabbed interfaces.

## ⏳ Future Improvements
- **Dynamic Content:** Implement a CMS (like Sanity or Contentful) to manage program details dynamically.
- **Unit Testing:** Add Vitest/Jest tests for the API routes and key UI components.
- **Dark Mode:** Add a toggle for a native dark mode experience.
- **Database Integration:** Switch the mock in-memory lead storage to a persistent database like MongoDB or PostgreSQL.

## ⚙️ Setup Instructions
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.
