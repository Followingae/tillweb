# Till CloudPOS Knowledge Base

A comprehensive knowledge base with 104+ how-to guides covering every feature of the Till CloudPOS dashboard, built directly into the Till website.

## Overview

- **Route:** `/knowledge-base`
- **Design:** Inspired by Toast, Square, and Syrve POS knowledge bases
- **Content:** Every guide sourced directly from the actual CloudPOS dashboard codebase -- no assumptions

## Pages

| Route | Description |
|---|---|
| `/knowledge-base` | Landing page with search hero, 13 category cards, popular guides |
| `/knowledge-base/[category]` | Category listing with article grid and sidebar navigation |
| `/knowledge-base/[category]/[slug]` | Individual article with TOC sidebar, numbered steps, tips, related articles |

## Components

| Component | Location | Purpose |
|---|---|---|
| `KBHero` | `app/components/knowledge-base/KBHero.tsx` | Search-first hero section |
| `KBSearchBar` | `app/components/knowledge-base/KBSearchBar.tsx` | Live search with dropdown results |
| `KBCategoryCard` | `app/components/knowledge-base/KBCategoryCard.tsx` | Category card with icon and article count |
| `KBArticleCard` | `app/components/knowledge-base/KBArticleCard.tsx` | Article preview with category badge |
| `KBBreadcrumb` | `app/components/knowledge-base/KBBreadcrumb.tsx` | Breadcrumb navigation |
| `KBSidebar` | `app/components/knowledge-base/KBSidebar.tsx` | TOC sidebar (articles) / category list (category pages) |
| `KBStepGuide` | `app/components/knowledge-base/KBStepGuide.tsx` | Step-by-step guide renderer with tips |

## Article Coverage (104+ articles across 13 categories)

| Category | Articles | File |
|---|---|---|
| POS | 16 | `lib/knowledge-base/articles/pos-guides.ts` |
| Orders | 4 | `lib/knowledge-base/articles/orders-guides.ts` |
| Catalog | 11 | `lib/knowledge-base/articles/catalog-guides.ts` |
| Kitchen | 6 | `lib/knowledge-base/articles/kitchen-guides.ts` |
| Tables | 6 | `lib/knowledge-base/articles/tables-guides.ts` |
| Shifts | 7 | `lib/knowledge-base/articles/shifts-guides.ts` |
| Customers | 6 | `lib/knowledge-base/articles/customers-guides.ts` |
| Reports | 15 | `lib/knowledge-base/articles/reports-guides.ts` |
| Settings | 11 | `lib/knowledge-base/articles/settings-guides.ts` |
| Discounts | 5 | `lib/knowledge-base/articles/discounts-guides.ts` |
| Inventory | 5 | `lib/knowledge-base/articles/inventory-guides.ts` |
| Users & Roles | 5 | `lib/knowledge-base/articles/users-guides.ts` |
| Purchases | 5 | `lib/knowledge-base/articles/purchases-guides.ts` |

## Data Layer

| File | Purpose |
|---|---|
| `lib/knowledge-base/types.ts` | TypeScript types: Article, Step, Tip, Category |
| `lib/knowledge-base/categories.ts` | 13 category definitions with icons and article slugs |
| `lib/knowledge-base/index.ts` | Central registry with search, filtering, and lookup helpers |

## Features

- **Full-text search** across article titles, descriptions, and step content
- **Featured articles** section on landing page (17 curated guides)
- **Related articles** linked at the bottom of each guide
- **Responsive design** matching the existing coral/navy/cream design system
- **Framer Motion animations** consistent with the rest of the site
- **Navigation link** added to the main site header

## Design Inspiration

- **Square:** Search-first "How can we help?" hero
- **Toast:** Step-by-step article format with "In this Article" TOC sidebar
- **Syrve:** Product-area category organization
