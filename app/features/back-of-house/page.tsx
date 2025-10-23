'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from 'gsap/Observer'
import Navigation from '@/app/components/layout/Navigation'

gsap.registerPlugin(ScrollTrigger, Observer)

export default function BackOfHousePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Animated grid background
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const drawGrid = () => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.lineWidth = 1

        for (let i = 0; i < canvas.width; i += 50) {
          ctx.beginPath()
          ctx.moveTo(i, 0)
          ctx.lineTo(i, canvas.height)
          ctx.stroke()
        }

        for (let i = 0; i < canvas.height; i += 50) {
          ctx.beginPath()
          ctx.moveTo(0, i)
          ctx.lineTo(canvas.width, i)
          ctx.stroke()
        }
      }

      drawGrid()
    }

    // Stagger in sections
    gsap.utils.toArray<HTMLElement>('.boh-section').forEach((section, index) => {
      gsap.fromTo(section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top center+=100',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // KDS cards with 3D tilt on mouse move
    const kdsCards = document.querySelectorAll('.kds-card')
    kdsCards.forEach((card) => {
      Observer.create({
        target: card,
        type: 'pointer',
        onMove: (self) => {
          const rect = (card as HTMLElement).getBoundingClientRect()
          const x = ((self.x ?? 0) - rect.left) / rect.width - 0.5
          const y = ((self.y ?? 0) - rect.top) / rect.height - 0.5

          gsap.to(card, {
            rotateY: x * 15,
            rotateX: -y * 15,
            duration: 0.6,
            ease: 'power2.out'
          })
        },
        onHoverEnd: () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.5)'
          })
        }
      })
    })
  }, [])

  return (
    <main ref={containerRef} className="bg-forest relative">
      <Navigation />

      {/* Animated grid background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Hero - Command center style */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="relative">
                  <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-golden rounded-full animate-ping" />
                </div>
                <span className="text-white/80 text-sm uppercase tracking-wider">Back of House</span>
              </div>

              <h1 className="font-palmore text-7xl md:text-8xl lg:text-9xl text-white uppercase mb-8">
                Command<br />
                Your<br />
                Kitchen
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl leading-relaxed">
                From kitchen display systems to ingredient-level inventory, take complete control of your back-of-house operations with real-time visibility and automation.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">40%</div>
                  <div className="text-white/60 text-sm">Faster Prep</div>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">28%</div>
                  <div className="text-white/60 text-sm">Cost Savings</div>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">Zero</div>
                  <div className="text-white/60 text-sm">Paper Tickets</div>
                </div>
              </div>

              <button className="px-10 py-4 bg-golden text-forest font-semibold rounded-full hover:bg-golden/90 transition-all shadow-2xl text-lg">
                Watch Demo
              </button>
            </div>

            {/* KDS Preview */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="kds-card bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-white font-bold text-lg">#24</div>
                    <div className="px-3 py-1 bg-golden/20 text-golden text-sm rounded-full">New</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white/90">2x Burger</div>
                    <div className="text-white/90">1x Fries</div>
                    <div className="text-white/60 text-sm">Table 7</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-white/50 text-xs">
                    2 min ago
                  </div>
                </div>

                <div className="kds-card bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-white font-bold text-lg">#23</div>
                    <div className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Prep</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white/90">1x Pasta</div>
                    <div className="text-white/90">1x Salad</div>
                    <div className="text-white/60 text-sm">Table 12</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-white/50 text-xs">
                    5 min ago
                  </div>
                </div>

                <div className="kds-card bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-white font-bold text-lg">#22</div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">Ready</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white/90">3x Pizza</div>
                    <div className="text-white/60 text-sm">Table 3</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-white/50 text-xs">
                    8 min ago
                  </div>
                </div>

                <div className="kds-card bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-white font-bold text-lg">#21</div>
                    <div className="px-3 py-1 bg-golden/20 text-golden text-sm rounded-full">New</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white/90">2x Steak</div>
                    <div className="text-white/90">2x Sides</div>
                    <div className="text-white/60 text-sm">Table 9</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-white/50 text-xs">
                    1 min ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Display System */}
      <section className="boh-section relative py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="max-w-3xl mb-20">
            <span className="text-sm font-medium text-forest uppercase tracking-widest mb-6 block">Kitchen Display System</span>
            <h2 className="font-palmore text-6xl md:text-7xl lg:text-8xl text-navy uppercase mb-8">
              Digital Tickets<br />Zero Paper
            </h2>
            <p className="text-2xl text-navy/60 leading-relaxed">
              Orders flow from POS to kitchen screens in real-time. Color-coded priorities, prep timers, and one-tap bumping keep your line moving at peak efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 bg-cream rounded-3xl">
              <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-palmore text-2xl text-navy uppercase mb-4">Smart Routing</h3>
              <p className="text-navy/70 leading-relaxed">
                Orders automatically route to the right station. Grill, sauté, cold prep—each screen shows only relevant tickets.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-3xl">
              <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-palmore text-2xl text-navy uppercase mb-4">Color Priorities</h3>
              <p className="text-navy/70 leading-relaxed">
                Tickets change color based on prep time. Green to yellow to red—your team knows what needs attention.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-3xl">
              <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-palmore text-2xl text-navy uppercase mb-4">One-Tap Bump</h3>
              <p className="text-navy/70 leading-relaxed">
                When an item is ready, tap to bump it off the screen. Track average prep times and identify bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory - Data viz style */}
      <section className="boh-section relative py-40 bg-navy">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-sm font-medium text-golden uppercase tracking-widest mb-6 block">Inventory Management</span>
              <h2 className="font-palmore text-6xl md:text-7xl text-white uppercase mb-8">
                Ingredient<br />Level Tracking
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Track stock down to individual ingredients. Automated reorder alerts, recipe costing, and waste tracking ensure you never run out or over-order.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Tomatoes</span>
                    <span className="text-white/60">12 lbs remaining</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-golden rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Chicken Breast</span>
                    <span className="text-white/60">8 lbs remaining</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '20%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Pasta</span>
                    <span className="text-white/60">28 lbs remaining</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Cheese</span>
                    <span className="text-white/60">15 lbs remaining</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-golden rounded-full" style={{ width: '55%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">AED 30K</div>
                <div className="text-white/60 text-sm mb-4">Monthly Food Cost</div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>12% vs last month</span>
                </div>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">94%</div>
                <div className="text-white/60 text-sm mb-4">Stock Accuracy</div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>6% improvement</span>
                </div>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">3.2</div>
                <div className="text-white/60 text-sm mb-4">Avg Inventory Turns</div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <span>Per month</span>
                </div>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">AED 1,540</div>
                <div className="text-white/60 text-sm mb-4">Waste Reduction</div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>This week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Engineering */}
      <section className="boh-section relative py-40 bg-beige">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-sm font-medium text-forest uppercase tracking-widest mb-6 block">Menu Engineering</span>
            <h2 className="font-palmore text-6xl md:text-7xl lg:text-8xl text-navy uppercase mb-8">
              Data-Driven<br />Menu Optimization
            </h2>
            <p className="text-2xl text-navy/60">
              Identify stars, eliminate duds. Recipe costing, contribution margin analysis, and profitability tracking help you engineer a menu that maximizes revenue.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-navy/10">
                  <th className="text-left py-4 px-4 text-navy font-semibold">Item</th>
                  <th className="text-right py-4 px-4 text-navy font-semibold">Cost</th>
                  <th className="text-right py-4 px-4 text-navy font-semibold">Price</th>
                  <th className="text-right py-4 px-4 text-navy font-semibold">Margin</th>
                  <th className="text-right py-4 px-4 text-navy font-semibold">Popularity</th>
                  <th className="text-right py-4 px-4 text-navy font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy/5">
                  <td className="py-4 px-4 text-navy">Signature Burger</td>
                  <td className="text-right py-4 px-4 text-navy/70">AED 15.40</td>
                  <td className="text-right py-4 px-4 text-navy/70">AED 59.00</td>
                  <td className="text-right py-4 px-4 text-green-600 font-semibold">74%</td>
                  <td className="text-right py-4 px-4 text-navy/70">High</td>
                  <td className="text-right py-4 px-4">
                    <span className="px-3 py-1 bg-green-500/10 text-green-700 text-sm rounded-full">Star</span>
                  </td>
                </tr>
                <tr className="border-b border-navy/5">
                  <td className="py-4 px-4 text-navy">Pasta Carbonara</td>
                  <td className="text-right py-4 px-4 text-navy/70">AED 14.00</td>
                  <td className="text-right py-4 px-4 text-navy/70">AED 66.00</td>
                  <td className="text-right py-4 px-4 text-green-600 font-semibold">79%</td>
                  <td className="text-right py-4 px-4 text-navy/70">Medium</td>
                  <td className="text-right py-4 px-4">
                    <span className="px-3 py-1 bg-golden/10 text-golden text-sm rounded-full">Puzzle</span>
                  </td>
                </tr>
                <tr className="border-b border-navy/5">
                  <td className="py-4 px-4 text-navy">Caesar Salad</td>
                  <td className="text-right py-4 px-4 text-navy/70">AED 7.70</td>
                  <td className="text-right py-4 px-4 text-navy/70">AED 44.00</td>
                  <td className="text-right py-4 px-4 text-green-600 font-semibold">82%</td>
                  <td className="text-right py-4 px-4 text-navy/70">High</td>
                  <td className="text-right py-4 px-4">
                    <span className="px-3 py-1 bg-green-500/10 text-green-700 text-sm rounded-full">Star</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-navy">Chicken Wrap</td>
                  <td className="text-right py-4 px-4 text-navy/70">AED 19.00</td>
                  <td className="text-right py-4 px-4 text-navy/70">AED 51.00</td>
                  <td className="text-right py-4 px-4 text-red-600 font-semibold">63%</td>
                  <td className="text-right py-4 px-4 text-navy/70">Low</td>
                  <td className="text-right py-4 px-4">
                    <span className="px-3 py-1 bg-red-500/10 text-red-700 text-sm rounded-full">Dog</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-palmore text-5xl md:text-6xl lg:text-7xl text-white uppercase mb-8">
            Master Your<br />Kitchen Operations
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            See how Till's Back of House tools streamline operations and boost profitability.
          </p>
          <button className="px-12 py-5 bg-golden text-navy font-semibold rounded-full hover:bg-golden/90 transition-all shadow-2xl text-lg">
            Book a Demo
          </button>
        </div>
      </section>
    </main>
  )
}
