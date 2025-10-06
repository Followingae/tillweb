'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Zap, Shield, Sparkles, TrendingUp } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return

    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.horizontal-section')

      if (sections.length === 0) return

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + scrollContainer.offsetWidth
        }
      })
    }, container)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Sparkles,
      title: 'Front of House',
      description: 'POS, CRM, and loyalty in one. QR ordering, table management, and waiter handhelds. Works across dine-in, takeaway, and delivery.',
      color: 'from-coral to-coral-dark',
      stats: ['Complete', 'Guest Experience']
    },
    {
      icon: Shield,
      title: 'Payment Terminal',
      description: 'Full CloudPOS on Android terminals. Orders, tables, payments, and self-service. One device does it all.',
      color: 'from-navy to-navy/80',
      stats: ['One Device', 'Everything']
    },
    {
      icon: TrendingUp,
      title: 'Back of House',
      description: 'Kitchen displays, inventory, and staff management. Real-time analytics and delivery integrations built in.',
      color: 'from-golden to-golden/80',
      stats: ['Streamlined', 'Operations']
    }
  ]

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-white">
      <div ref={scrollContainerRef} className="flex h-screen">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="horizontal-section flex-shrink-0 w-screen h-screen flex items-center justify-center px-16"
            >
              <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Large number and icon */}
                <div className="relative">
                  <div className="font-palmore text-[20vw] leading-none text-navy/[0.03] absolute -top-32 left-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className={`feature-card relative bg-gradient-to-br ${feature.color} rounded-3xl p-16 aspect-square flex items-center justify-center shadow-2xl`}>
                    <Icon className="w-48 h-48 text-white" strokeWidth={1} />
                    <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-navy/10">
                      <div className="text-5xl font-bold text-navy">{feature.stats[0]}</div>
                      <div className="text-sm text-navy/60 uppercase tracking-wider">{feature.stats[1]}</div>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="feature-card space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-16 bg-coral" />
                    <span className="text-coral text-sm uppercase tracking-[0.3em] font-medium">Feature {String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <h2 className="font-palmore text-7xl lg:text-8xl text-navy uppercase tracking-normal leading-[1]">
                    {feature.title}
                  </h2>

                  <p className="text-2xl text-navy/70 leading-relaxed max-w-xl">
                    {feature.description}
                  </p>

                  <button className="group flex items-center gap-3 text-coral text-lg font-semibold hover:gap-5 transition-all">
                    Learn More
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {features.map((_, index) => (
          <div
            key={index}
            className="horizontal-dot w-3 h-3 rounded-full bg-navy/20"
          />
        ))}
      </div>
    </section>
  )
}
