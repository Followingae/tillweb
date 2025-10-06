'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Draggable)
}

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [revealedCards, setRevealedCards] = useState<boolean[]>([false, false, false])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Make feature cards draggable
      const cards = sectionRef.current?.querySelectorAll('.product-card')
      cards?.forEach((card, index) => {
        const overlay = card.querySelector('.card-overlay') as HTMLElement
        const background = card.querySelector('.card-background') as HTMLElement

        if (overlay && background) {
          const draggable = Draggable.create(overlay, {
            type: 'x',
            bounds: { minX: -400, maxX: 0 },
            onDrag: function() {
              // As you drag left, reveal the background
              const progress = Math.abs(this.x) / 400
              gsap.set(background, { opacity: progress })
            },
            onDragEnd: function() {
              if (Math.abs(this.x) > 200) {
                // Snap fully open
                gsap.to(overlay, { x: -400, duration: 0.4, ease: 'power2.out' })
                gsap.to(background, { opacity: 1, duration: 0.4 })
              } else {
                // Snap back closed
                gsap.to(overlay, { x: 0, duration: 0.5, ease: 'back.out(1.7)' })
                gsap.to(background, { opacity: 0, duration: 0.5 })
              }
            }
          })
        }

        // Scroll entrance animation
        const content = card.querySelector('.product-content')
        gsap.fromTo(
          content,
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top center+=200',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      number: '01',
      title: 'Front of House',
      description: 'POS, CRM, and loyalty. QR ordering and table management. Everything guests need.',
      color: 'from-coral to-coral/80',
      emoji: '🍽️',
      details: ['POS & Payments', 'CRM & Loyalty', 'QR Ordering', 'Table Management']
    },
    {
      number: '02',
      title: 'Payment Terminal',
      description: 'Full order management on Android terminals. One device, everything.',
      color: 'from-golden to-golden/80',
      emoji: '💳',
      details: ['Order Management', 'Bill Splitting', 'Self-Service', 'Android Native']
    },
    {
      number: '03',
      title: 'Back of House',
      description: 'Kitchen displays, inventory, and staff workflows. Analytics and integrations included.',
      color: 'from-navy to-navy/80',
      emoji: '👨‍🍳',
      details: ['Kitchen Display', 'Inventory', 'Staff Workflows', 'Analytics']
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-32 bg-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 max-w-4xl"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-24 bg-coral" />
            <span className="text-sm font-medium text-coral uppercase tracking-widest">
              Complete Platform
            </span>
          </div>
          <h2 className="font-palmore text-6xl lg:text-8xl text-navy uppercase tracking-normal leading-[0.9]">
            Everything<br />in one place
          </h2>
        </motion.div>

        <div className="space-y-48">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`product-card grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`product-content ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="font-palmore text-[120px] text-navy/5 leading-none mb-6">
                  {feature.number}
                </div>
                <h3 className="font-palmore text-5xl lg:text-6xl text-navy uppercase tracking-normal mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-2xl text-navy/60 font-light leading-relaxed mb-10">
                  {feature.description}
                </p>
                <button className="group inline-flex items-center gap-3 text-navy font-medium text-lg">
                  <span>Explore features</span>
                  <div className="w-12 h-px bg-navy group-hover:w-20 transition-all duration-500" />
                </button>
              </div>

              {/* Interactive Card */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-square">

                  {/* Background: Feature Details (revealed on drag) */}
                  <div className="card-background absolute inset-0 rounded-3xl bg-beige p-8 flex flex-col justify-center items-end shadow-xl opacity-0">
                    <div className="space-y-4 w-full">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="flex items-center justify-end gap-4 p-5 bg-white rounded-2xl border-2 border-navy/20 shadow-md ml-auto">
                          <span className="text-navy font-semibold text-lg text-right">{detail}</span>
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${feature.color} flex-shrink-0`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overlay: Draggable Card */}
                  <div className={`card-overlay absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} p-10 shadow-2xl cursor-grab active:cursor-grabbing select-none`}>
                    <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center border border-white/20">
                      <div className="text-9xl mb-6 pointer-events-none">{feature.emoji}</div>
                      <div className="text-white text-base font-semibold uppercase tracking-wider mb-12 pointer-events-none">{feature.title}</div>

                      {/* Drag Indicator */}
                      <div className="flex items-center gap-2 text-white/60 text-sm uppercase tracking-wider pointer-events-none">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Drag to reveal</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
