'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Monitor, Smartphone, Tablet } from 'lucide-react'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function DeviceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Stagger device cards entrance only
      const cards = gsap.utils.toArray('.device-card')

      cards.forEach((card: any, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top center+=150',
            toggleActions: 'play none none none'
          }
        })
      })

      // Subtle parallax on images only (not cards)
      const images = gsap.utils.toArray('.device-image')
      images.forEach((image: any, index) => {
        gsap.to(image, {
          y: -30,
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const devices = [
    {
      icon: Smartphone,
      title: 'Payment Terminal',
      description: 'Orders, tables, payments, and self-service. All on one Android terminal.',
      image: '/images/img20.jpg',
      color: 'from-coral to-coral-dark'
    },
    {
      icon: Monitor,
      title: 'Desktop & Laptop',
      description: 'Catalog, analytics, reporting, and staff management. Complete control from any browser.',
      image: '/images/img24.jpg',
      color: 'from-navy to-navy/80'
    },
    {
      icon: Tablet,
      title: 'Waiter Handhelds',
      description: 'Take orders tableside. Real-time menus and instant kitchen sync.',
      image: '/images/img38.jpg',
      color: 'from-golden to-golden/80'
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-32 bg-beige overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-golden/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="mb-32 max-w-4xl">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-px w-24 bg-coral" />
            <span className="text-sm font-medium text-coral uppercase tracking-widest">
              Works Everywhere
            </span>
          </div>
          <h2 className="font-palmore text-6xl lg:text-8xl text-navy uppercase tracking-normal leading-[0.9]">
            One Platform<br />All Devices
          </h2>
          <p className="text-lg md:text-xl text-navy/60 max-w-2xl mt-8 leading-relaxed">
            Payment terminals, tablets, laptops, phones. Till works everywhere.
          </p>
        </div>

        {/* Device Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {devices.map((device, index) => {
            const Icon = device.icon
            return (
              <div
                key={index}
                className="device-card relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card container */}
                <div className="relative rounded-3xl overflow-hidden bg-white backdrop-blur-xl border border-navy/10 hover:border-coral/50 transition-all duration-500 shadow-xl">
                  {/* Image container with gradient overlay */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${device.color} opacity-20`} />
                    <Image
                      src={device.image}
                      alt={device.title}
                      fill
                      className="device-image object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${device.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy uppercase tracking-wide">
                        {device.title}
                      </h3>
                    </div>
                    <p className="text-navy/70 leading-relaxed">
                      {device.description}
                    </p>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-coral/10 to-golden/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Floating number */}
                <div className="absolute -top-8 -right-8 font-palmore text-9xl text-navy/5 leading-none select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
