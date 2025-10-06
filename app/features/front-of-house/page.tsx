'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import Navigation from '@/app/components/layout/Navigation'

gsap.registerPlugin(ScrollTrigger, Flip)

export default function FrontOfHousePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    if (!heroRef.current) return

    // Stagger in hero content
    gsap.from('.hero-content > *', {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    })

    // Floating animation for device mockups
    gsap.to('.float-device', {
      y: -20,
      duration: 2.5,
      ease: 'power1.inOut',
      stagger: 0.3,
      repeat: -1,
      yoyo: true
    })

    // Parallax sections
    gsap.utils.toArray<HTMLElement>('.parallax-section').forEach((section) => {
      const content = section.querySelector('.parallax-content')
      if (!content) return

      gsap.fromTo(content,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top center+=100',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Interactive feature cards with FLIP
    const cards = document.querySelectorAll('.feature-card')
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        const state = Flip.getState(card)
        card.classList.add('expanded')
        Flip.from(state, {
          duration: 0.5,
          ease: 'power2.out',
          absolute: true
        })
      })

      card.addEventListener('mouseleave', () => {
        const state = Flip.getState(card)
        card.classList.remove('expanded')
        Flip.from(state, {
          duration: 0.5,
          ease: 'power2.out',
          absolute: true
        })
      })
    })
  }, [])

  return (
    <main ref={containerRef} className="bg-cream">
      <Navigation />

      {/* Hero - Split screen with glassmorphic cards */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        <div className="grid lg:grid-cols-2 gap-0 w-full max-w-[1800px] mx-auto">
          {/* Left - Content */}
          <div className="hero-content relative z-10 px-8 lg:px-16 py-32 flex flex-col justify-center">
            <motion.div style={{ opacity, scale }}>
              <div className="inline-flex items-center gap-4 mb-8 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
                <span className="text-white/80 text-sm uppercase tracking-wider">Front of House</span>
              </div>

              <h1 className="font-palmore text-7xl md:text-8xl lg:text-9xl text-white uppercase mb-8">
                Guest<br />
                Experience<br />
                Perfected
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl leading-relaxed">
                QR ordering. Tableside payments. Loyalty built in. Turn first-time guests into regulars.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-navy font-semibold rounded-full hover:bg-white/90 transition-all shadow-2xl">
                  See It In Action
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right - Device showcase */}
          <div className="relative h-screen flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-lg">
              <div className="float-device absolute top-1/4 left-0 w-64 h-96 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="w-full h-8 bg-white/20 rounded-lg mb-4" />
                  <div className="space-y-3">
                    <div className="w-full h-16 bg-white/10 rounded-xl" />
                    <div className="w-full h-16 bg-white/10 rounded-xl" />
                    <div className="w-full h-16 bg-white/10 rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="float-device absolute top-1/2 right-0 w-72 h-80 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between mb-6">
                    <div className="w-20 h-6 bg-white/20 rounded" />
                    <div className="w-12 h-6 bg-golden/50 rounded" />
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-24 bg-white/10 rounded-2xl" />
                    <div className="w-full h-24 bg-white/10 rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Ordering - Horizontal scroll gallery */}
      <section className="parallax-section py-40 bg-white overflow-hidden">
        <div className="parallax-content max-w-[1600px] mx-auto px-8">
          <div className="mb-20">
            <span className="text-sm font-medium text-golden uppercase tracking-widest mb-6 block">QR Ordering</span>
            <h2 className="font-palmore text-6xl md:text-7xl lg:text-8xl text-navy uppercase mb-8">
              Zero Contact<br />Total Control
            </h2>
            <p className="text-2xl text-navy/60 max-w-2xl">
              Scan, browse, order, pay. All from their phone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card group p-8 bg-cream rounded-3xl hover:bg-beige transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-golden/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 text-golden group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-palmore text-3xl text-navy uppercase mb-4">Scan & Order</h3>
              <p className="text-navy/70 text-lg leading-relaxed">
                Dynamic menus, customization, direct to kitchen.
              </p>
            </div>

            <div className="feature-card group p-8 bg-cream rounded-3xl hover:bg-beige transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-golden/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 text-golden group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-palmore text-3xl text-navy uppercase mb-4">Pay at Table</h3>
              <p className="text-navy/70 text-lg leading-relaxed">
                Split bills, tip, pay. No waiting.
              </p>
            </div>

            <div className="feature-card group p-8 bg-cream rounded-3xl hover:bg-beige transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-golden/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 text-golden group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-palmore text-3xl text-navy uppercase mb-4">Real-Time Sync</h3>
              <p className="text-navy/70 text-lg leading-relaxed">
                Menu updates, pricing changes, and item availability sync instantly across all QR ordering channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRM & Loyalty - Asymmetric layout */}
      <section className="parallax-section py-40 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-golden rounded-full blur-3xl" />
        </div>

        <div className="parallax-content relative max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-sm font-medium text-golden uppercase tracking-widest mb-6 block">CRM & Loyalty</span>
              <h2 className="font-palmore text-6xl md:text-7xl text-white uppercase mb-8">
                Turn Diners<br />Into Regulars
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Built-in CRM tracks guest preferences, visit history, and spending patterns. Automated loyalty programs reward repeat customers and drive retention.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-golden rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Guest Profiles</h4>
                    <p className="text-white/60">Track preferences, allergies, birthdays, and visit history automatically.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-golden rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Points & Rewards</h4>
                    <p className="text-white/60">Customizable loyalty tiers, point accrual, and automated reward campaigns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-golden rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Targeted Campaigns</h4>
                    <p className="text-white/60">Send personalized offers based on guest behavior and preferences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="text-5xl font-bold text-white mb-2">2.4x</div>
                      <div className="text-white/60">Repeat Visit Rate</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="text-5xl font-bold text-white mb-2">68%</div>
                      <div className="text-white/60">Guest Enrollment</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="text-5xl font-bold text-white mb-2">AED 120</div>
                      <div className="text-white/60">Avg Check Increase</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="text-5xl font-bold text-white mb-2">4.8★</div>
                      <div className="text-white/60">Guest Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Management - Interactive */}
      <section className="parallax-section py-40 bg-beige">
        <div className="parallax-content max-w-[1600px] mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-forest uppercase tracking-widest mb-6 block">Table Management</span>
            <h2 className="font-palmore text-6xl md:text-7xl lg:text-8xl text-navy uppercase mb-8">
              Visual Floor Plans<br />Intelligent Seating
            </h2>
            <p className="text-2xl text-navy/60 max-w-3xl mx-auto">
              Drag-and-drop floor plans. Real-time table status. Reservation integration. Optimize seating flow and maximize covers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-navy mb-2">Drag & Drop Layout</h4>
                    <p className="text-navy/60">Design your floor plan exactly as it exists. Add tables, sections, and service areas visually.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-navy mb-2">Real-Time Status</h4>
                    <p className="text-navy/60">Color-coded tables show occupied, reserved, available, and needs-cleaning status at a glance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-navy mb-2">Reservation Sync</h4>
                    <p className="text-navy/60">Integrates with reservation systems. Auto-assign tables based on party size and preferences.</p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 w-full max-w-md">
                  <div className="aspect-square bg-forest/20 rounded-xl" />
                  <div className="aspect-square bg-golden/20 rounded-xl" />
                  <div className="aspect-square bg-forest/20 rounded-xl" />
                  <div className="aspect-square bg-white rounded-xl" />
                  <div className="aspect-square bg-golden/20 rounded-xl" />
                  <div className="aspect-square bg-forest/20 rounded-xl" />
                  <div className="aspect-square bg-white rounded-xl" />
                  <div className="aspect-square bg-golden/20 rounded-xl" />
                  <div className="aspect-square bg-white rounded-xl" />
                  <div className="aspect-square bg-golden/20 rounded-xl" />
                  <div className="aspect-square bg-forest/20 rounded-xl" />
                  <div className="aspect-square bg-white rounded-xl" />
                  <div className="aspect-square bg-forest/20 rounded-xl" />
                  <div className="aspect-square bg-white rounded-xl" />
                  <div className="aspect-square bg-golden/20 rounded-xl" />
                  <div className="aspect-square bg-forest/20 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-palmore text-5xl md:text-6xl lg:text-7xl text-white uppercase mb-8">
            Ready To Elevate<br />Your Guest Experience?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            See how Till transforms every guest interaction into a moment of delight.
          </p>
          <button className="px-12 py-5 bg-golden text-navy font-semibold rounded-full hover:bg-golden/90 transition-all shadow-2xl text-lg">
            Schedule Demo
          </button>
        </div>
      </section>
    </main>
  )
}
