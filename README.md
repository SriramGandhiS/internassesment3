# Accredian Enterprise - Landing Page Clone

A production-ready clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website built with **Next.js 14+**, **Tailwind CSS**, and the **App Router**.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🚀 Live Demo

🔗 **Deployed on Vercel**: [Coming Soon — Deploy with `vercel` CLI]

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Setup Instructions](#-setup-instructions)
- [Project Structure](#-project-structure)
- [Approach Taken](#-approach-taken)
- [AI Usage Explanation](#-ai-usage-explanation)
- [Improvements With More Time](#-improvements-with-more-time)

---

## ✨ Features

### Core Sections (13 Total)
1. **Sticky Navbar** — Active section tracking, smooth scroll navigation, mobile hamburger menu
2. **Hero Section** — Animated headline with gradient text, checkmarks, CTA with pulse glow
3. **Stats Section** — Animated counters (10K+, 200+, 5K+) with IntersectionObserver
4. **Client Partnerships** — Auto-scrolling logo marquee carousel
5. **Accredian Edge** — 7 feature cards with zigzag process line layout (desktop)
6. **Domain Expertise** — 7 tabbed categories with dynamic course cards
7. **Who Should Join** — Split layout with audience cards and visual illustration
8. **CAT Framework** — C-A-T visual with connected circle nodes and gradient colors
9. **How It Works** — 3-step process with numbered badges and dashed connectors
10. **FAQs** — Tabbed categories with accordion questions
11. **Testimonials** — Auto-playing carousel with dots and arrow navigation
12. **Pre-Footer CTA** — Gradient blue banner with dual CTA buttons
13. **Footer** — Brand column, social links, navigation columns, bottom bar

### Bonus Features ⭐
- **Lead Capture Form** — Full modal with validation (Enquire Now)
- **API Route** — `POST /api/leads` stores form submissions; `GET /api/leads` retrieves them
- **Form Validation** — Required fields, email format validation, loading states
- **Success Feedback** — Animated success state after submission

### Design & UX
- **Fully Responsive** — Mobile, tablet, and desktop layouts
- **Micro-Animations** — fadeInUp, slideIn, float, pulse-glow, animated counters
- **Smooth Scroll** — Section-based navigation with scroll offset
- **Modern Aesthetics** — Gradient text, blur backdrops, hover transforms, shadow depth

---

## 🔧 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14+** | Framework (App Router) |
| **React 19** | UI library (functional components + hooks) |
| **Tailwind CSS 4** | Utility-first CSS |
| **Next.js API Routes** | Backend API for lead capture |
| **Vercel** | Deployment platform |

### React Hooks Used
- `useState` — Component state management
- `useEffect` — Side effects, IntersectionObserver setup
- `useRef` — DOM references, interval management

---

## 🛠 Setup Instructions

### Prerequisites
- Node.js 18.17+ installed
- npm 9+ installed

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 📁 Project Structure

```
accredian-enterprise/
├── src/
│   └── app/
│       ├── layout.js              # Root layout (Inter font, SEO metadata)
│       ├── page.js                # Main landing page (assembles all sections)
│       ├── globals.css            # Design tokens, animations, custom styles
│       ├── api/
│       │   └── leads/
│       │       └── route.js       # API: POST/GET lead capture
│       └── components/
│           ├── Navbar.jsx         # Sticky navbar + mobile menu
│           ├── Hero.jsx           # Hero with animated headline
│           ├── Stats.jsx          # Animated counter stats
│           ├── Clients.jsx        # Logo marquee carousel
│           ├── AccredianEdge.jsx   # 7 feature process line
│           ├── DomainExpertise.jsx # Tabbed course cards
│           ├── WhoShouldJoin.jsx  # Split layout audience cards
│           ├── CATFramework.jsx   # C-A-T visual framework
│           ├── HowItWorks.jsx     # 3-step process
│           ├── FAQs.jsx           # Tabbed accordion FAQs
│           ├── Testimonials.jsx   # Auto-playing carousel
│           ├── PreFooterCTA.jsx   # Gradient CTA banner
│           ├── Footer.jsx         # Full footer with social links
│           └── EnquireModal.jsx   # Lead capture form modal
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🧠 Approach Taken

### 1. Research Phase
- Studied the reference site (enterprise.accredian.com) thoroughly
- Documented every section, its content, layout, and interactive elements
- Identified the color scheme (primary blue #1a73e8), typography, and spacing patterns

### 2. Architecture Design
- Chose Next.js App Router for modern React Server Components support
- Designed a component-per-section architecture for maximum reusability
- Created a centralized design system in `globals.css` with CSS custom properties
- Planned the data layer with mock data close to the reference site

### 3. Implementation Strategy
- **Bottom-up build**: Started with the design system (colors, typography, animations)
- **Component isolation**: Each section is a self-contained component with its own state
- **Progressive enhancement**: Core content works without JS; animations are additive
- **Mobile-first responsive**: Tailwind's responsive utilities for all breakpoints

### 4. Key Design Decisions
- **IntersectionObserver** for scroll-triggered animations instead of scroll listeners (performance)
- **CSS animations** over JS animations for GPU-accelerated, buttery-smooth transitions
- **In-memory store** for lead capture API (production would use a database like Supabase/PostgreSQL)
- **Semantic HTML** with proper heading hierarchy for SEO and accessibility

---

## 🤖 AI Usage Explanation

### Where AI Helped
- **Initial component scaffolding**: AI helped generate the boilerplate structure for 14 components
- **SVG icons**: AI provided Heroicon SVG paths for consistent iconography
- **Content generation**: Mock testimonials, FAQ answers, and course descriptions
- **CSS animations**: AI suggested keyframe definitions for fadeInUp, slideIn, marquee, float effects
- **API route template**: Basic Next.js API route structure with validation

### What I Modified / Improved Manually
- **Design system**: Customized the color palette, spacing, and typography to match the reference site
- **Layout fine-tuning**: Adjusted grid layouts, spacing, and responsive breakpoints via browser testing
- **Animation timing**: Tuned animation delays, easings, and stagger patterns for natural feel
- **Component interactivity**: Added IntersectionObserver-based reveal animations, active nav tracking
- **Form UX**: Added loading spinner, success state, error handling, and proper validation
- **Accessibility**: Added aria-labels, semantic HTML, proper heading hierarchy
- **Code organization**: Restructured components, extracted data into clean arrays/objects

---

## 🔮 Improvements With More Time

1. **Real Backend Integration**: Replace in-memory store with Supabase or PostgreSQL for persistent lead storage
2. **CMS Integration**: Use a headless CMS (Strapi/Contentful) for dynamic content management
3. **Performance Optimization**: Add `next/image` for optimized images, lazy-load below-fold sections
4. **Testing**: Add unit tests with Jest/React Testing Library, E2E tests with Playwright
5. **Advanced Animations**: Add parallax scrolling, Lottie animations, and scroll-progress indicators
6. **Dark Mode**: Implement dark/light theme toggle using CSS custom properties
7. **SEO Enhancement**: Add structured data (JSON-LD), sitemap.xml, robots.txt
8. **Analytics**: Integrate Google Analytics / Vercel Analytics for user behavior tracking
9. **i18n**: Multi-language support for global enterprise clients
10. **Email Notifications**: Send confirmation emails on form submission via Resend/SendGrid

---

## 📄 License

This project was built as an assignment for Accredian's Full Stack Developer Intern role.

---

Built with ❤️ using Next.js + Tailwind CSS
