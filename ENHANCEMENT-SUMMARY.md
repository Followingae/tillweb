# Till Website Enhancement Summary

## Date: April 2026

## What Till Is

Till is a comprehensive Cloud Point-of-Sale (CloudPOS) ecosystem built for the modern hospitality industry. The platform consists of 4 core products:

1. **Backend API** -- Central cloud infrastructure powering all connected devices and services
2. **Dashboard** -- Web-based management console for analytics, menu management, staff control, and reporting
3. **Android App** -- Runs on Feitian smart terminals for handheld POS, kitchen display, and self-ordering kiosk modes
4. **QR PWA** -- Progressive Web App for customer-facing digital menus, order-and-pay, and pay-at-table experiences

Together, these deliver 150+ features spanning order management, inventory control, kitchen operations, payment processing, CRM & loyalty, table management, and real-time analytics -- serving QSRs, cafes, fine dining, cloud kitchens, enterprise chains, and retail.

---

## Phase 1 & 2: Completed Work

### New Product Pages Created (8)

1. **/products/till-handheld** -- Feitian Android terminal POS with dual-mode operation (counter + tableside), NFC/chip/magstripe payments, offline resilience, and thermal receipt printing
2. **/products/kitchen-display** -- Station-based KDS with cook time tracking, order routing by station, color-coded urgency alerts, bump-bar support, and multi-station sync
3. **/products/self-ordering-kiosk** -- Customer self-ordering on Feitian terminals with visual menu browsing, upsell prompts, multi-language support, and integrated payment
4. **/products/inventory** -- Recipe costing with sub-recipe support, AI-powered invoice extraction via OCR, multi-branch stock transfers, low-stock alerts, and waste tracking
5. **/products/crm-loyalty** -- Customer profiles with order history, points-based loyalty program, segment targeting, automated campaigns, and spend analytics
6. **/products/payments** -- Split bills (by item, seat, or custom amount), cash drawer reconciliation, Z-reports, multi-tender support, and tip management
7. **/products/table-management** -- Visual floor plan editor, real-time table occupancy tracking, QR code per table, reservation management, and section assignment
8. **/integrations** -- Integration ecosystem page covering Zoho (Books, Inventory, CRM), SmartPay payment processing, Feitian hardware, AI-powered features, and RFM Loyalty partnership

### Homepage Enhancements

- **Testimonials / Social Proof section** -- 6 testimonials from restaurant operators across different segments (QSR, fine dining, cafe, cloud kitchen, chain, boutique hotel)
- **Restaurant Type tabs** -- Interactive tabbed content for 6 restaurant types: QSR, Cafe, Fine Dining, Cloud Kitchen, Enterprise Chain, and Retail
- **"What Makes Till Different" comparison section** -- 7 comparison points contrasting Till against traditional POS systems (cloud-native, unified platform, real-time analytics, no lock-in, etc.)
- **FAQ section** -- 10 frequently asked questions covering setup, pricing, integrations, hardware, offline mode, data migration, and support

### Pricing Page Enhancements

- **Feature comparison matrix** across all 3 tiers (Starter, Professional, Enterprise) with detailed feature-by-feature breakdown
- **Expanded FAQs** -- 10 pricing-specific questions covering billing, contracts, discounts, add-ons, and migration
- **Free trial banner** -- Prominent CTA for 14-day free trial with no credit card required

### Navigation Updates

- **Products dropdown expanded** from 3 to 10 items with 2-column grid layout for readability
- **Integrations** added as top-level nav item
- Dropdown width increased to 420px for Products menu to accommodate the expanded list

---

## Phase 3: Remaining Work (Not Yet Done)

### Technical SEO
- [ ] Add JSON-LD structured data (SoftwareApplication, Organization, FAQPage schemas)
- [ ] Create sitemap.xml with all pages
- [ ] Create robots.txt
- [ ] Add unique meta descriptions per page
- [ ] Implement internal linking strategy across product and feature pages

### Content Depth
- [ ] Add screenshots / product imagery to all product pages
- [ ] Add video demos or animated GIFs showing features in action
- [ ] Expand copy on feature category pages (/features/front-of-house, /features/back-of-house, etc.)

### Trust & Company Pages
- [ ] **/about** -- Company story, team bios, RFM Loyalty backing, mission and values
- [ ] **/security** -- RBAC permissions model, JWT authentication, audit trails, tenant data isolation, GDPR compliance
- [ ] **/support** -- Support channels, knowledge base links, onboarding process, SLA details

### Knowledge Base / Academy
- [ ] Getting started guides for each product
- [ ] Video walkthroughs per feature
- [ ] API documentation for enterprise clients and integration partners

### Blog / Content Marketing
- [ ] Launch blog section with CMS
- [ ] Content topics: food cost optimization, QR ordering best practices, KDS setup guide, inventory management for restaurants, loyalty program ROI, etc.

### Multi-Language / Localization
- [ ] Arabic RTL support (key market)
- [ ] Multi-country targeting and localized content

### Real Testimonials
- [ ] Replace placeholder testimonials with real customer quotes and video testimonials
- [ ] Add "Trusted by" logo carousel with real restaurant brand logos

### Advanced Pricing
- [ ] Add-on pricing for individual modules (inventory, loyalty, kiosk, etc.)
- [ ] Interactive plan builder / configurator

---

## Competitor Context

- **Sapaad** (primary competitor) has 15+ product pages, video testimonials, per-restaurant-type landing pages, FAQ on every page, knowledge base, blog, and multi-country localization
- **Till now matches** on product page count and content structure depth
- **Remaining gap**: real social proof (video testimonials, brand logos), knowledge base, blog content, technical SEO, and multi-language support

---

## Architecture Notes

- **Tech stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, GSAP, Framer Motion
- **Design tokens**:
  - Coral: `#E96750`
  - Golden: `#F4B840`
  - Navy: `#1A1F3A`
  - Forest: `#3A4E3F`
  - Cream: `#F5F3E8`
  - Beige: `#FFF9ED`
- **Fonts**: Palmore Light (display headings), Inter (body text)
- **Page pattern**: All product/feature pages follow a consistent design structure:
  1. Dark gradient hero section with title, description, and CTA
  2. Feature grid with icons and descriptions
  3. Benefits / value propositions section
  4. FAQ accordion
  5. Bottom CTA banner
- **Navigation**: Responsive with desktop dropdowns (hover-triggered, animated with Framer Motion) and mobile accordion menu
- **Animations**: GSAP for scroll-triggered effects and magnetic logo hover; Framer Motion for page transitions and UI micro-interactions
