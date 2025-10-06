'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/app/components/layout/Navigation'

gsap.registerPlugin(ScrollTrigger)

export default function AnalyticsPage() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const [activeMetric, setActiveMetric] = useState('sales')

  useEffect(() => {
    // Animate dashboard cards on scroll
    gsap.utils.toArray<HTMLElement>('.analytics-card').forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            toggleActions: 'play none none none'
          },
          delay: index * 0.1
        }
      )
    })

    // Animated chart bars
    gsap.utils.toArray<HTMLElement>('.chart-bar').forEach((bar, index) => {
      const height = bar.getAttribute('data-height') || '50%'
      gsap.fromTo(bar,
        { height: 0 },
        {
          height: height,
          duration: 1.2,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: '.chart-container',
            start: 'top center',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Count-up animation for numbers
    gsap.utils.toArray<HTMLElement>('.count-up').forEach((element) => {
      const target = parseInt(element.getAttribute('data-target') || '0')
      const obj = { val: 0 }

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          element.textContent = Math.round(obj.val).toString()
        }
      })
    })
  }, [])

  return (
    <main className="bg-navy">
      <Navigation />

      {/* Hero - Dashboard preview */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="relative z-10 max-w-[1800px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
                <span className="text-white/80 text-sm uppercase tracking-wider">Analytics & Intelligence</span>
              </div>

              <h1 className="font-palmore text-7xl md:text-8xl lg:text-9xl text-white uppercase mb-8">
                Data That<br />
                Drives<br />
                Decisions
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl leading-relaxed">
                Real-time dashboards, AI-powered insights, and predictive analytics transform raw data into actionable intelligence that optimizes every aspect of your business.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-golden text-navy font-semibold rounded-full hover:bg-golden/90 transition-all shadow-2xl">
                  See Live Demo
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20">
                  View Sample Reports
                </button>
              </div>
            </div>

            {/* Live metric cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 cursor-pointer"
              >
                <div className="text-white/60 text-sm mb-2">Today's Revenue</div>
                <div className="text-4xl font-bold text-white mb-1 count-up" data-target="12847">0</div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>+18% vs yesterday</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 cursor-pointer"
              >
                <div className="text-white/60 text-sm mb-2">Covers</div>
                <div className="text-4xl font-bold text-white mb-1 count-up" data-target="342">0</div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>+24 vs forecast</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 cursor-pointer"
              >
                <div className="text-white/60 text-sm mb-2">Avg Check</div>
                <div className="text-4xl font-bold text-white mb-1">AED <span className="count-up" data-target="38">0</span></div>
                <div className="flex items-center gap-2 text-golden text-sm">
                  <span>Target: AED 136</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 cursor-pointer"
              >
                <div className="text-white/60 text-sm mb-2">Table Turns</div>
                <div className="text-4xl font-bold text-white mb-1 count-up" data-target="3">0</div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <span>Per table/day</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Dashboard */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="max-w-3xl mb-20">
            <span className="text-sm font-medium text-golden uppercase tracking-widest mb-6 block">Real-Time Dashboards</span>
            <h2 className="font-palmore text-6xl md:text-7xl lg:text-8xl text-navy uppercase mb-8">
              Live Metrics<br />
              Instant Insights
            </h2>
            <p className="text-2xl text-navy/60 leading-relaxed">
              Monitor performance in real-time from any device. Track sales, labor, inventory, and guest counts as they happen—not hours later.
            </p>
          </div>

          {/* Chart */}
          <div className="chart-container bg-cream rounded-3xl p-10 mb-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-semibold text-navy text-xl">Sales Overview</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-golden text-white text-sm rounded-full">Week</button>
                <button className="px-4 py-2 bg-white text-navy text-sm rounded-full">Month</button>
                <button className="px-4 py-2 bg-white text-navy text-sm rounded-full">Year</button>
              </div>
            </div>

            <div className="flex items-end justify-between h-64 gap-2">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-golden/20 rounded-t-xl chart-bar" data-height="45%" />
                <div className="text-navy/60 text-sm mt-2">Mon</div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-golden/20 rounded-t-xl chart-bar" data-height="62%" />
                <div className="text-navy/60 text-sm mt-2">Tue</div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-golden/20 rounded-t-xl chart-bar" data-height="58%" />
                <div className="text-navy/60 text-sm mt-2">Wed</div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-golden/20 rounded-t-xl chart-bar" data-height="75%" />
                <div className="text-navy/60 text-sm mt-2">Thu</div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-golden rounded-t-xl chart-bar" data-height="88%" />
                <div className="text-navy/60 text-sm mt-2">Fri</div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-golden rounded-t-xl chart-bar" data-height="95%" />
                <div className="text-navy/60 text-sm mt-2">Sat</div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-golden/20 rounded-t-xl chart-bar" data-height="72%" />
                <div className="text-navy/60 text-sm mt-2">Sun</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="analytics-card p-6 bg-cream rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-navy/60 text-sm">Peak Hour</span>
                <span className="text-2xl">🔥</span>
              </div>
              <div className="text-3xl font-bold text-navy">7-9 PM</div>
              <div className="text-navy/60 text-sm mt-1">Friday & Saturday</div>
            </div>

            <div className="analytics-card p-6 bg-cream rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-navy/60 text-sm">Best Seller</span>
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-3xl font-bold text-navy">Burger</div>
              <div className="text-navy/60 text-sm mt-1">247 orders this week</div>
            </div>

            <div className="analytics-card p-6 bg-cream rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-navy/60 text-sm">Labor Cost</span>
                <span className="text-2xl">💰</span>
              </div>
              <div className="text-3xl font-bold text-navy">28.4%</div>
              <div className="text-navy/60 text-sm mt-1">Of revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="py-40 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-golden rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-8">
          <div className="max-w-3xl mb-20">
            <span className="text-sm font-medium text-golden uppercase tracking-widest mb-6 block">AI-Powered Insights</span>
            <h2 className="font-palmore text-6xl md:text-7xl text-white uppercase mb-8">
              Smart<br />
              Recommendations
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Machine learning algorithms analyze your data to surface actionable insights. Predict demand, optimize pricing, identify trends before they happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="analytics-card p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Demand Forecast</h4>
                  <p className="text-white/70 mb-4">
                    Based on historical data and upcoming events, we predict a 35% increase in covers this Saturday.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-golden text-sm">Recommended Action:</span>
                    <span className="text-white/60 text-sm">Schedule 2 additional servers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="analytics-card p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Price Optimization</h4>
                  <p className="text-white/70 mb-4">
                    Your Pasta Carbonara has 79% margin but medium popularity. Consider an AED 7 price reduction to boost orders.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-golden text-sm">Potential Impact:</span>
                    <span className="text-white/60 text-sm">+AED 3,100/month revenue</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="analytics-card p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Inventory Alert</h4>
                  <p className="text-white/70 mb-4">
                    Chicken breast inventory is low and typically takes 2 days to restock. Order now to avoid stockouts.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-golden text-sm">Urgency:</span>
                    <span className="text-red-400 text-sm">High - Order within 24h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="analytics-card p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-golden/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Menu Trend</h4>
                  <p className="text-white/70 mb-4">
                    Vegan options showing 42% growth over 3 months. Consider expanding plant-based menu items.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-golden text-sm">Market Opportunity:</span>
                    <span className="text-white/60 text-sm">High demand segment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Reports */}
      <section className="py-40 bg-beige">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-sm font-medium text-forest uppercase tracking-widest mb-6 block">Custom Reports</span>
            <h2 className="font-palmore text-6xl md:text-7xl lg:text-8xl text-navy uppercase mb-8">
              Build Reports<br />
              Your Way
            </h2>
            <p className="text-2xl text-navy/60">
              Drag-and-drop report builder. Filter by time, location, category, staff. Export to Excel, PDF, or schedule automated email delivery.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-cream rounded-2xl text-center cursor-pointer hover:bg-beige transition-all">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-semibold text-navy mb-1">Sales Reports</h4>
                <p className="text-navy/60 text-sm">Daily, weekly, monthly</p>
              </div>

              <div className="p-6 bg-cream rounded-2xl text-center cursor-pointer hover:bg-beige transition-all">
                <div className="text-4xl mb-3">👥</div>
                <h4 className="font-semibold text-navy mb-1">Labor Reports</h4>
                <p className="text-navy/60 text-sm">Hours, costs, efficiency</p>
              </div>

              <div className="p-6 bg-cream rounded-2xl text-center cursor-pointer hover:bg-beige transition-all">
                <div className="text-4xl mb-3">🍕</div>
                <h4 className="font-semibold text-navy mb-1">Menu Analysis</h4>
                <p className="text-navy/60 text-sm">Performance, margins</p>
              </div>

              <div className="p-6 bg-cream rounded-2xl text-center cursor-pointer hover:bg-beige transition-all">
                <div className="text-4xl mb-3">📦</div>
                <h4 className="font-semibold text-navy mb-1">Inventory Reports</h4>
                <p className="text-navy/60 text-sm">Usage, waste, costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-palmore text-5xl md:text-6xl lg:text-7xl text-white uppercase mb-8">
            Turn Data Into<br />
            Profit
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            See how Till's analytics platform helps you make smarter decisions and optimize operations.
          </p>
          <button className="px-12 py-5 bg-golden text-navy font-semibold rounded-full hover:bg-golden/90 transition-all shadow-2xl text-lg">
            Get Started
          </button>
        </div>
      </section>
    </main>
  )
}
