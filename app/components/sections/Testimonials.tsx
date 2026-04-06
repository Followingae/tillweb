'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote, Shield } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    quote: 'Till transformed our operations. The dual-mode handheld means we use the same device for cashier and self-ordering during peak hours.',
    name: 'Ahmed K.',
    role: 'Operations Manager',
    restaurant: 'Fresh Bites UAE',
    stars: 5,
  },
  {
    quote: 'The kitchen display system eliminated missed orders completely. Our prep time dropped by 35% in the first month.',
    name: 'Sarah M.',
    role: 'Head Chef',
    restaurant: 'Spice Route Restaurant',
    stars: 5,
  },
  {
    quote: 'Being backed by RFM Loyalty gives us confidence. 25,000+ terminals across the UAE \u2014 that\u2019s real infrastructure.',
    name: 'Mohammed R.',
    role: 'Owner',
    restaurant: 'Cafe Arabica',
    stars: 5,
  },
  {
    quote: 'QR ordering changed our lunch rush. Customers order from their phone, payment splits three ways, and everything syncs to the kitchen.',
    name: 'Priya S.',
    role: 'Manager',
    restaurant: 'Urban Bites',
    stars: 5,
  },
  {
    quote: 'The AI invoice feature alone saves us hours every week. Photograph a supplier invoice and it\u2019s auto-populated. Game changer.',
    name: 'David L.',
    role: 'Finance Manager',
    restaurant: 'The Grill House',
    stars: 5,
  },
  {
    quote: 'We manage 8 locations from one dashboard. Inventory transfers, staff permissions, real-time sales \u2014 it\u2019s all there.',
    name: 'Fatima A.',
    role: 'Director of Operations',
    restaurant: 'Tasty Group',
    stars: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Stagger card entrance
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top center+=150',
          },
        }
      )

      // Badge entrance
      gsap.fromTo(
        '.trust-badge',
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-cream overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-golden/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        {/* Trust badge */}
        <div className="flex justify-center mb-12">
          <div className="trust-badge inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-navy/5">
            <Shield className="w-5 h-5 text-coral" />
            <span className="text-sm font-semibold text-navy tracking-wide">
              Trusted by 500+ restaurants
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-golden text-golden" />
              ))}
            </div>
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-navy/20" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/40 font-medium">
              Social Proof
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-navy/20" />
          </div>
          <h2 className="font-palmore text-5xl lg:text-7xl text-navy uppercase tracking-normal leading-[0.95] mb-6">
            Trusted by Restaurants<br />Across the UAE
          </h2>
          <p className="text-xl text-navy/60 font-light max-w-2xl mx-auto leading-relaxed">
            From small cafes to multi-location chains, restaurants trust Till to power their operations
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-navy/5"
            >
              {/* Quote accent */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-coral/15 group-hover:text-coral/30 transition-colors duration-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-coral text-coral"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-navy/80 leading-relaxed mb-8 font-light text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-navy/5">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-coral/20 to-coral/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-coral font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-navy/50 text-xs">
                      {testimonial.role}, {testimonial.restaurant}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-coral to-coral-light rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
