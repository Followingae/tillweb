'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import Navigation from '@/app/components/layout/Navigation'

gsap.registerPlugin(ScrollTrigger, Draggable)

export default function OutOfHousePage() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animated delivery routes
    gsap.utils.toArray<HTMLElement>('.delivery-path').forEach((path, index) => {
      gsap.fromTo(path,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 3,
          ease: 'none',
          repeat: -1,
          delay: index * 0.5,
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top center',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Platform cards draggable - Organize by priority
    const platformCards = document.querySelectorAll('.platform-card')
    const container = document.querySelector('.platforms-container')

    platformCards.forEach((card, index) => {
      Draggable.create(card, {
        type: 'x,y',
        edgeResistance: 0.65,
        bounds: container,
        inertia: true,
        zIndexBoost: true,
        onDrag: function() {
          // Scale up while dragging
          gsap.to(this.target, {
            scale: 1.1,
            rotation: 5,
            duration: 0.2
          })
        },
        onDragEnd: function() {
          // Scale back and check for drop zone
          gsap.to(this.target, {
            scale: 1,
            rotation: 0,
            duration: 0.3
          })

          // Snap to nearest grid position
          const containerRect = (container as HTMLElement).getBoundingClientRect()
          const cardRect = (this.target as HTMLElement).getBoundingClientRect()

          // Calculate which column this card is in (4 columns)
          const cardCenterX = cardRect.left + cardRect.width / 2 - containerRect.left
          const columnWidth = containerRect.width / 4
          const targetColumn = Math.round(cardCenterX / columnWidth)
          const targetX = (targetColumn - index % 4) * columnWidth

          gsap.to(this.target, {
            x: targetX,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)'
          })
        }
      })
    })

    // Scroll animations
    gsap.utils.toArray<HTMLElement>('.ooh-section').forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
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
  }, [])

  return (
    <main className="bg-cream">
      <Navigation />

      {/* Hero - Map style with delivery pins */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="1000" height="1000" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
                <span className="text-white/80 text-sm uppercase tracking-wider">Out of House</span>
              </div>

              <h1 className="font-palmore text-7xl md:text-8xl lg:text-9xl text-white uppercase mb-8">
                Own<br />
                Delivery<br />
                & Takeout
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl leading-relaxed">
                Commission-free online ordering. Unified delivery management. Branded mobile apps. Expand beyond your walls without losing margins to third parties.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-8 py-4 bg-golden text-navy font-semibold rounded-full hover:bg-golden/90 transition-all shadow-2xl">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20">
                  See How It Works
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">0%</div>
                  <div className="text-white/60 text-sm">Commission Fees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">3x</div>
                  <div className="text-white/60 text-sm">Order Volume</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/60 text-sm">Ordering Open</div>
                </div>
              </div>
            </div>

            {/* Delivery map visualization */}
            <div ref={mapRef} className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  {/* Center (restaurant) */}
                  <circle cx="200" cy="200" r="12" fill="#F4B840" />
                  <circle cx="200" cy="200" r="20" fill="none" stroke="#F4B840" strokeWidth="2" opacity="0.3" />
                  <circle cx="200" cy="200" r="30" fill="none" stroke="#F4B840" strokeWidth="1" opacity="0.2">
                    <animate attributeName="r" from="30" to="60" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.2" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* Delivery paths */}
                  <path className="delivery-path" d="M 200 200 Q 250 150 300 120" fill="none" stroke="#F4B840" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                  <path className="delivery-path" d="M 200 200 Q 150 250 100 300" fill="none" stroke="#F4B840" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                  <path className="delivery-path" d="M 200 200 Q 300 250 340 280" fill="none" stroke="#F4B840" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />

                  {/* Delivery destinations */}
                  <circle cx="300" cy="120" r="8" fill="white" />
                  <circle cx="100" cy="300" r="8" fill="white" />
                  <circle cx="340" cy="280" r="8" fill="white" />
                </svg>

                <div className="absolute top-8 right-8 space-y-2">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <div className="w-3 h-3 bg-golden rounded-full" />
                    <span>Active Orders: 12</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <span>Delivered: 48</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Delivery Hub */}
      <section className="ooh-section py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-medium text-golden uppercase tracking-widest mb-6 block">Unified Delivery Hub</span>
            <h2 className="font-palmore text-6xl md:text-7xl lg:text-8xl text-navy uppercase mb-8">
              All Orders<br />
              One Dashboard
            </h2>
            <p className="text-2xl text-navy/60 leading-relaxed">
              Aggregate orders from UberEats, DoorDash, Grubhub, and your own channels into a single screen. No more app switching. No more missed orders.
            </p>
          </div>

          <div className="mb-8 p-6 bg-golden/5 border border-golden/20 rounded-2xl">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-golden flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              <p className="text-navy/80 font-medium">
                <span className="text-golden font-semibold">Drag to reorder:</span> Organize your delivery platforms by priority. Left to right = highest to lowest volume.
              </p>
            </div>
          </div>

          <div className="platforms-container grid md:grid-cols-4 gap-6 mb-12 relative">
            <div className="platform-card cursor-move p-8 bg-cream rounded-3xl border-2 border-navy/10 hover:border-golden transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-full" />
              </div>
              <h4 className="font-semibold text-navy mb-2">UberEats</h4>
              <div className="text-2xl font-bold text-navy mb-1">24</div>
              <div className="text-navy/60 text-sm">Orders today</div>
            </div>

            <div className="platform-card cursor-move p-8 bg-cream rounded-3xl border-2 border-navy/10 hover:border-golden transition-all duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-red-500 rounded-full" />
              </div>
              <h4 className="font-semibold text-navy mb-2">DoorDash</h4>
              <div className="text-2xl font-bold text-navy mb-1">18</div>
              <div className="text-navy/60 text-sm">Orders today</div>
            </div>

            <div className="platform-card cursor-move p-8 bg-cream rounded-3xl border-2 border-navy/10 hover:border-golden transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full" />
              </div>
              <h4 className="font-semibold text-navy mb-2">Grubhub</h4>
              <div className="text-2xl font-bold text-navy mb-1">12</div>
              <div className="text-navy/60 text-sm">Orders today</div>
            </div>

            <div className="platform-card cursor-move p-8 bg-cream rounded-3xl border-2 border-navy/10 hover:border-golden transition-all duration-300">
              <div className="w-16 h-16 bg-golden/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-golden rounded-full" />
              </div>
              <h4 className="font-semibold text-navy mb-2">Direct</h4>
              <div className="text-2xl font-bold text-navy mb-1">31</div>
              <div className="text-navy/60 text-sm">Orders today</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy/5 rounded-3xl p-8 border border-navy/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-lg mb-2">Unified Order Management</h4>
                  <p className="text-navy/70">
                    Accept/reject orders, update menu availability, and manage all delivery channels from one screen. No more app switching.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy/5 rounded-3xl p-8 border border-navy/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-lg mb-2">Auto Menu Sync</h4>
                  <p className="text-navy/70">
                    Update once, sync everywhere. Pricing, availability, and menu changes reflect instantly across all platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission-Free Ordering */}
      <section className="ooh-section py-40 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-golden rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-sm font-medium text-golden uppercase tracking-widest mb-6 block">Commission-Free</span>
              <h2 className="font-palmore text-6xl md:text-7xl text-white uppercase mb-8">
                Your Website<br />
                Your Profits
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Stop paying 20-30% commissions to third parties. Branded online ordering directly from your website. Keep 100% of your margins.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-golden/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">0% Commission</h4>
                    <p className="text-white/60">Keep every dollar. No per-order fees, no percentage cuts, no hidden charges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-golden/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Your Brand</h4>
                    <p className="text-white/60">White-label ordering experience. Your logo, your colors, your customer relationship.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-golden/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Instant Setup</h4>
                    <p className="text-white/60">Embed ordering widget on your website in 5 minutes. No dev work required.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-semibold text-navy text-xl">Revenue Comparison</h3>
                  <span className="text-navy/60 text-sm">Per Month</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-navy font-medium">Third-Party Platforms</span>
                      <span className="text-navy/60">AED 51,400</span>
                    </div>
                    <div className="relative h-12 bg-cream rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <span className="text-navy/60 text-sm">Gross Revenue</span>
                        <span className="text-navy font-semibold">AED 73,400</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <span>-AED 22,000 in fees (30%)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-navy font-medium">Till Direct Ordering</span>
                      <span className="text-navy/60">AED 73,400</span>
                    </div>
                    <div className="relative h-12 bg-golden/10 rounded-xl overflow-hidden border-2 border-golden">
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <span className="text-navy/60 text-sm">Gross Revenue</span>
                        <span className="text-navy font-semibold">AED 73,400</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span>+AED 22,000 savings (0% fees)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-navy/10">
                  <div className="flex items-center justify-between">
                    <span className="text-navy font-semibold">Annual Savings</span>
                    <span className="text-3xl font-bold text-green-600">AED 264,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="ooh-section py-40 bg-beige">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-sm font-medium text-forest uppercase tracking-widest mb-6 block">White-Label Mobile App</span>
            <h2 className="font-palmore text-6xl md:text-7xl lg:text-8xl text-navy uppercase mb-8">
              Your Brand<br />
              In Their Pocket
            </h2>
            <p className="text-2xl text-navy/60">
              Custom iOS and Android apps with your branding. Order ahead, loyalty points, push notifications—all without a developer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl shadow-lg">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-palmore text-2xl text-navy uppercase mb-4">Order Ahead</h3>
              <p className="text-navy/70 leading-relaxed">
                Guests order from the app, skip the line, and pick up when ready. Increase throughput during peak hours.
              </p>
            </div>

            <div className="p-10 bg-white rounded-3xl shadow-lg">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="font-palmore text-2xl text-navy uppercase mb-4">Push Notifications</h3>
              <p className="text-navy/70 leading-relaxed">
                Send targeted promotions, new menu items, and order updates directly to customers' phones.
              </p>
            </div>

            <div className="p-10 bg-white rounded-3xl shadow-lg">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-palmore text-2xl text-navy uppercase mb-4">Loyalty Integration</h3>
              <p className="text-navy/70 leading-relaxed">
                Built-in loyalty tracking. Customers earn and redeem points seamlessly within the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-palmore text-5xl md:text-6xl lg:text-7xl text-white uppercase mb-8">
            Stop Losing Margins<br />
            To Third Parties
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            See how Till helps you own delivery and takeout—without the commission fees.
          </p>
          <button className="px-12 py-5 bg-golden text-navy font-semibold rounded-full hover:bg-golden/90 transition-all shadow-2xl text-lg">
            Start Saving Today
          </button>
        </div>
      </section>
    </main>
  )
}
