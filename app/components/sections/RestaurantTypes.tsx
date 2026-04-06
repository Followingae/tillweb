'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Zap, Coffee, UtensilsCrossed, Cloud, Building2, ShoppingCart } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const tabs = [
  {
    id: 'qsr',
    label: 'QSR',
    icon: Zap,
    tagline: 'Speed + Volume',
    description:
      'Quick-service restaurants need speed above all else. Till turns your terminal into a self-ordering kiosk during peak hours, processes payments in a single tap, and routes orders to the kitchen display instantly. Real-time queue management keeps the line moving, while barcode scanning handles grab-and-go items without friction.',
    features: [
      'Self-ordering kiosk mode',
      'Quick-pay (order + payment in one tap)',
      'Kitchen Display with expedite',
      'Counter service workflow',
      'Barcode scanning',
      'Real-time queue management',
    ],
  },
  {
    id: 'cafe',
    label: 'Cafe',
    icon: Coffee,
    tagline: 'Simplicity + Loyalty',
    description:
      'Cafes thrive on regulars. Till gives you a clean, fast POS interface paired with built-in loyalty points and rewards to keep customers coming back. QR ordering lets guests browse a photo-rich digital menu from their table, while basic inventory tracking ensures you never run out of your signature blend.',
    features: [
      'Simple POS interface',
      'QR ordering for tables',
      'Loyalty points and rewards',
      'Digital menu with photos',
      'Basic inventory tracking',
      'Customer profiles',
    ],
  },
  {
    id: 'fine-dining',
    label: 'Fine Dining',
    icon: UtensilsCrossed,
    tagline: 'Elegance + Service',
    description:
      'Fine dining demands invisible technology that enhances the guest experience. Till supports multi-course meal sequencing, a waiter-friendly order flow that never interrupts service, and elegant table management with visual floor plans. Split bills by item or by guest, and offer discreet pay-at-table via per-table QR codes.',
    features: [
      'Multi-course meal support (coursing)',
      'Waiter-friendly order flow',
      'Table management with floor plans',
      'Split bill by items or guests',
      'Per-table QR for pay-at-table',
      'Advanced customer profiles',
    ],
  },
  {
    id: 'cloud-kitchen',
    label: 'Cloud Kitchen',
    icon: Cloud,
    tagline: 'Efficiency + Delivery',
    description:
      'Cloud kitchens live and die by throughput. Till consolidates orders from every aggregator onto a single Kitchen Display System, lets you set aggregator-specific pricing rules, and tracks every order source so you know exactly where revenue comes from. Real-time performance analytics close the feedback loop.',
    features: [
      'Kitchen Display System (KDS)',
      'Multi-menu per aggregator',
      'Aggregator pricing rules',
      'Order source tracking',
      'Delivery order management',
      'Real-time performance analytics',
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: Building2,
    tagline: 'Control + Scale',
    description:
      'Enterprise operators need centralized visibility and granular control. Till provides a multi-branch dashboard with real-time data, centralized inventory with inter-branch transfers, 50+ staff permissions, role-based access control, and 20+ exportable report types. Purchase order approval workflows keep spending in check across every location.',
    features: [
      'Multi-branch dashboard',
      'Centralized inventory with transfers',
      '50+ granular staff permissions',
      '20+ report types with export',
      'Role-based access control',
      'Purchase order approval workflows',
    ],
  },
  {
    id: 'retail',
    label: 'Retail',
    icon: ShoppingCart,
    tagline: 'Inventory + Scanning',
    description:
      'Retail operations revolve around inventory accuracy. Till supports barcode scanning via camera or USB scanner, per-branch stock tracking, supplier management, and purchase unit mapping. Weighted average costing keeps your margins honest, while low-stock alerts prevent lost sales before they happen.',
    features: [
      'Barcode scanning (camera + USB)',
      'Stock tracking per branch',
      'Supplier management',
      'Purchase unit mapping',
      'Weighted average costing',
      'Low-stock alerts',
    ],
  },
]

export default function RestaurantTypes() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.restaurant-types-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
          },
        }
      )

      gsap.fromTo(
        '.tab-pills-container',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const activeData = tabs[activeTab]
  const Icon = activeData.icon

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-coral/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-golden/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="restaurant-types-header text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-navy/20" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/40 font-medium">
              Versatile
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-navy/20" />
          </div>
          <h2 className="font-palmore text-5xl lg:text-7xl text-navy uppercase tracking-normal leading-[0.95] mb-6">
            Built for Every<br />Restaurant Model
          </h2>
          <p className="text-xl text-navy/60 font-light max-w-2xl mx-auto leading-relaxed">
            Whatever you serve, however you serve it — Till adapts to your workflow
          </p>
        </div>

        {/* Tab Pills */}
        <div className="tab-pills-container flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab, index) => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`group relative flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-400 ${
                  activeTab === index
                    ? 'bg-coral text-white shadow-lg shadow-coral/25'
                    : 'bg-navy/5 text-navy/70 hover:bg-navy/10 hover:text-navy'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${activeTab === index ? 'text-white' : 'text-navy/40 group-hover:text-navy/60'} transition-colors`} />
                <span className="tracking-wide">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: Feature List */}
              <div>
                {/* Tagline */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-coral" />
                  </div>
                  <span className="text-sm font-semibold text-coral uppercase tracking-widest">
                    {activeData.tagline}
                  </span>
                </div>

                <div className="space-y-4">
                  {activeData.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-4 p-5 bg-cream/60 rounded-2xl border border-navy/5 hover:border-coral/20 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0 group-hover:bg-coral group-hover:scale-110 transition-all duration-300">
                        <Check className="w-4 h-4 text-coral group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-navy font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Description */}
              <div className="lg:pt-20">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -top-8 -left-4 font-palmore text-[100px] text-navy/3 leading-none pointer-events-none select-none">
                    {String(activeTab + 1).padStart(2, '0')}
                  </div>

                  <h3 className="font-palmore text-4xl lg:text-5xl text-navy uppercase tracking-normal leading-tight mb-6">
                    Till for {activeData.label}
                  </h3>
                  <p className="text-lg text-navy/60 font-light leading-relaxed mb-10">
                    {activeData.description}
                  </p>

                  <button className="group inline-flex items-center gap-3 px-8 py-4 bg-navy text-white rounded-full font-medium hover:bg-navy/90 transition-all duration-300 shadow-lg shadow-navy/15">
                    <span>Learn More</span>
                    <div className="w-6 h-px bg-white/60 group-hover:w-10 transition-all duration-400" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
