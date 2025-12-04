'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.product-card')
      cards?.forEach((card, index) => {
        // Scroll entrance animation for content
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

        // Scroll entrance animation for feature list
        const features = card.querySelectorAll('.feature-item')
        gsap.fromTo(
          features,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top center+=150',
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
      color: 'coral',
      details: ['POS & Payments', 'CRM & Loyalty', 'QR Ordering', 'Table Management']
    },
    {
      number: '02',
      title: 'Payment Terminal',
      description: 'Full order management on Android terminals. One device, everything.',
      color: 'golden',
      details: ['Order Management', 'Bill Splitting', 'Self-Service', 'Android Native']
    },
    {
      number: '03',
      title: 'Back of House',
      description: 'Kitchen displays, inventory, and staff workflows. Analytics and integrations included.',
      color: 'navy',
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

              {/* Feature List */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  {feature.details.map((detail, i) => (
                    <div
                      key={i}
                      className={`feature-item flex items-center gap-4 p-6 bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg group ${
                        feature.color === 'coral' ? 'border-navy/10 hover:border-coral/30' :
                        feature.color === 'golden' ? 'border-navy/10 hover:border-golden/30' :
                        'border-navy/10 hover:border-navy/30'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300 ${
                        feature.color === 'coral' ? 'bg-coral' :
                        feature.color === 'golden' ? 'bg-golden' :
                        'bg-navy'
                      }`} />
                      <span className="text-navy font-medium text-lg">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
