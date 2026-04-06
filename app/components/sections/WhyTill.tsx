'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X, Monitor, Repeat, Brain, Split, WifiOff, Shield, Building2 } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const comparisonRows = [
  {
    icon: Monitor,
    title: 'Runs on your payment terminal',
    others: 'Separate POS hardware + separate payment terminal = double the cost',
    till: 'Native on Feitian RFM Loyalty terminals — your POS IS your payment device',
  },
  {
    icon: Repeat,
    title: 'Dual-mode operation',
    others: 'Need separate kiosk hardware for self-ordering',
    till: 'Same device switches between cashier POS and customer self-ordering kiosk',
  },
  {
    icon: Brain,
    title: 'AI-powered operations',
    others: 'Manual data entry for supplier invoices and inventory',
    till: 'AI extracts supplier invoices from photos — auto-populates purchase orders',
  },
  {
    icon: Split,
    title: 'Three-way bill splitting',
    others: 'Basic split by guest count only',
    till: 'Split by items, by custom amount, or equally by guests — industry-leading flexibility',
  },
  {
    icon: WifiOff,
    title: 'Offline-first architecture',
    others: 'POS goes down when internet drops',
    till: 'Full order taking works offline. Auto-syncs when reconnected',
  },
  {
    icon: Shield,
    title: '50+ granular permissions',
    others: 'Basic admin/cashier roles',
    till: 'Enterprise RBAC with 50+ permission types across dashboard, catalog, orders, inventory, and more',
  },
  {
    icon: Building2,
    title: 'Backed by RFM Loyalty',
    others: 'Standalone startup with no payment infrastructure',
    till: 'Powered by 25,000+ terminals, 20,000+ merchants, 15+ years of UAE payment infrastructure',
  },
]

export default function WhyTill() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Stagger animate comparison rows from alternating sides
      const rows = gsap.utils.toArray<HTMLElement>('.why-till-row')
      rows.forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top bottom-=80',
          },
        })
      })

      // Animate the section heading
      gsap.from('.why-till-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-till-heading',
          start: 'top bottom-=50',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{
        background: 'linear-gradient(175deg, #F5F3E8 0%, #FFFFFF 35%, #FFF9ED 65%, #F5F3E8 100%)',
      }}
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
        {/* Floating geometric accents */}
        <div className="absolute top-20 right-[10%] w-64 h-64 border border-coral/8 rounded-full" />
        <div className="absolute bottom-32 left-[5%] w-48 h-48 border border-golden/10 rounded-full" />
        <div className="absolute top-1/2 right-[3%] w-3 h-3 bg-coral/20 rounded-full" />
        <div className="absolute top-1/3 left-[8%] w-2 h-2 bg-golden/30 rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="why-till-heading text-center mb-20 lg:mb-28">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-coral/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-coral font-medium">
              The Difference
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-coral/40" />
          </div>

          <h2 className="font-palmore text-5xl md:text-6xl lg:text-7xl text-navy uppercase tracking-tight mb-6 leading-[0.95]">
            What Makes Till<br />Different
          </h2>

          <p className="text-lg md:text-xl text-navy/60 max-w-2xl mx-auto font-light leading-relaxed">
            Designed with intention, built for restaurants that refuse to settle
          </p>
        </div>

        {/* Column Labels - Desktop */}
        <div className="hidden lg:grid grid-cols-12 gap-6 mb-8 px-4">
          <div className="col-span-3" />
          <div className="col-span-4">
            <span className="text-sm uppercase tracking-[0.2em] text-navy/30 font-medium">Others</span>
          </div>
          <div className="col-span-5">
            <span className="text-sm uppercase tracking-[0.2em] text-coral font-semibold">Till</span>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="space-y-4 md:space-y-5">
          {comparisonRows.map((row, index) => {
            const Icon = row.icon
            return (
              <div
                key={index}
                className="why-till-row"
              >
                <div
                  className={`rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    index % 2 === 0 ? 'bg-white' : 'bg-white/70'
                  }`}
                  style={{
                    boxShadow: '0 1px 3px rgba(26, 31, 58, 0.04), 0 4px 12px rgba(26, 31, 58, 0.02)',
                  }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid grid-cols-12 gap-0 items-stretch min-h-[100px]">
                    {/* Feature Name */}
                    <div className="col-span-3 flex items-center gap-4 p-6 pr-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-navy/70" strokeWidth={1.8} />
                      </div>
                      <h3 className="font-semibold text-navy text-[15px] leading-snug">
                        {row.title}
                      </h3>
                    </div>

                    {/* Others Column */}
                    <div className="col-span-4 flex items-center gap-3 p-6 bg-navy/[0.02] border-l border-navy/5">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-navy/5 flex items-center justify-center">
                        <X className="w-3.5 h-3.5 text-navy/30" strokeWidth={2.5} />
                      </div>
                      <p className="text-navy/40 text-sm leading-relaxed">
                        {row.others}
                      </p>
                    </div>

                    {/* Till Column */}
                    <div className="col-span-5 flex items-center gap-3 p-6 border-l-[3px] border-coral bg-gradient-to-r from-coral/[0.04] to-transparent">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-coral/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-coral" strokeWidth={3} />
                      </div>
                      <p className="text-navy font-medium text-sm leading-relaxed">
                        {row.till}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden p-5 md:p-6">
                    {/* Title Row */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-navy/70" strokeWidth={1.8} />
                      </div>
                      <h3 className="font-semibold text-navy text-base">
                        {row.title}
                      </h3>
                    </div>

                    {/* Others */}
                    <div className="flex items-start gap-3 mb-3 p-3 rounded-xl bg-navy/[0.03]">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-navy/30" strokeWidth={2.5} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.15em] text-navy/30 font-medium block mb-1">Others</span>
                        <p className="text-navy/40 text-sm leading-relaxed">{row.others}</p>
                      </div>
                    </div>

                    {/* Till */}
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-coral/[0.05] border-l-[3px] border-coral">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-coral" strokeWidth={3} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.15em] text-coral font-semibold block mb-1">Till</span>
                        <p className="text-navy font-medium text-sm leading-relaxed">{row.till}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20"
        >
          <a
            href="/pricing"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-navy text-white font-semibold rounded-full hover:bg-coral transition-all duration-500 text-lg shadow-xl hover:shadow-2xl"
          >
            <span>See Plans & Pricing</span>
            <div className="w-8 h-px bg-white/60 group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
