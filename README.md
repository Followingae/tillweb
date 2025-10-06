# Till Website

A modern, high-performance website for Till - the next-generation CloudPOS platform built for restaurants and retail.

## 🎯 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom design system)
- **Animation**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
tillweb/
├── app/
│   ├── components/
│   │   ├── layout/          # Navigation, Footer, CustomCursor
│   │   ├── sections/        # Page sections (Hero, Products, etc.)
│   │   └── ui/              # Reusable UI components
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── lib/
│   └── animations/          # Framer Motion variants
├── public/
│   ├── fonts/               # Palmore Light font
│   └── images/              # Logos, badges, assets
└── tailwind.config.ts       # Design system tokens
```

## 🎨 Design System

### Brand Colors
- **Coral**: `#E96750` (Primary CTA, accents)
- **Golden**: `#F4B840` (Gradients, highlights)
- **Navy**: `#1A1F3A` (Text, dark backgrounds)
- **Forest**: `#3A4E3F` (Accent)
- **Cream**: `#F5F3E8` (Light text on dark)
- **Beige**: `#FFF9ED` (Backgrounds)

### Typography
- **Display Font**: Palmore Light (headings, hero)
- **Body Font**: Inter Variable (UI, body text)

### Spacing
8pt grid system: xs (8px) → sm (16px) → md (24px) → lg (48px) → xl (64px) → 2xl (96px) → 3xl (128px)

## ✨ Features

- **Hero Section**: Animated gradient background with parallax effects
- **Product Showcase**: Three-column feature display with icons
- **Industry Badges**: Pill-shaped cards with hover animations
- **AI Intelligence**: Gradient section with floating elements
- **Custom Cursor**: Desktop-only premium cursor experience
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Next.js Image optimization, code splitting

## 🎬 Animations

- Framer Motion for UI interactions and scroll animations
- Custom variants in `lib/animations/variants.ts`
- Smooth page transitions
- Hover micro-interactions

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔧 Configuration

### Tailwind Config
Custom design tokens defined in `tailwind.config.ts`

### Next.js Config
Image optimization and build settings in `next.config.mjs`

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Automatic deployments on git push when connected to Vercel.

## 📄 License

© 2025 Till. All rights reserved.

## 🤝 Contributing

Built with precision and care by the Till team.
