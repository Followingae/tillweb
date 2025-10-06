'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function IndustryBadges() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!badgesRef.current) return

    const badges = badgesRef.current.querySelectorAll('.badge-item')

    // Stagger entrance only - no floating
    gsap.fromTo(
      badges,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        }
      }
    )

    // Advanced hover animations for each badge
    badges.forEach((badge) => {
      const image = badge.querySelector('.badge-image') as HTMLElement
      const textContainer = badge.querySelector('.badge-text') as HTMLElement
      const textLines = badge.querySelectorAll('.text-line')
      const decorLine = badge.querySelector('.decor-line') as HTMLElement

      badge.addEventListener('mouseenter', () => {
        // Image: scale and slight rotation with elastic bounce
        gsap.to(image, {
          scale: 1.08,
          rotation: 2,
          duration: 0.6,
          ease: 'back.out(1.7)'
        })

        // Container: reveal with slide up
        gsap.to(textContainer, {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        })

        // Text lines: stagger reveal with split animation
        gsap.fromTo(textLines,
          {
            opacity: 0,
            y: 20,
            rotationX: -90,
            transformOrigin: 'top center'
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(2)',
            delay: 0.1
          }
        )

        // Decorative line: expand from center
        gsap.fromTo(decorLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.2
          }
        )
      })

      badge.addEventListener('mouseleave', () => {
        // Image: return to normal
        gsap.to(image, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        })

        // Text lines: reverse animation
        gsap.to(textLines, {
          opacity: 0,
          y: -10,
          rotationX: 90,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.in'
        })

        // Container: collapse
        gsap.to(textContainer, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
          delay: 0.2
        })

        // Decorative line: collapse
        gsap.to(decorLine, {
          scaleX: 0,
          duration: 0.3,
          ease: 'power2.in'
        })
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-golden/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-navy/20" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/40 font-medium">
              Built for
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-navy/20" />
          </div>
          <h2 className="font-palmore text-6xl lg:text-7xl text-navy uppercase">
            Every Service
          </h2>
        </motion.div>

        <div
          ref={badgesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-6xl mx-auto"
          style={{ perspective: '1200px' }}
        >
          <div className="badge-item relative text-center cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
            <Image
              src="/images/tillforrestaurants.png"
              alt="Restaurants"
              width={240}
              height={96}
              className="badge-image h-20 w-auto object-contain mx-auto mb-6"
            />

            <div className="badge-text h-0 opacity-0 overflow-hidden">
              <div className="h-px w-12 bg-coral mx-auto mb-4 decor-line" style={{ transformOrigin: 'center' }} />
              <p className="text-line text-navy font-semibold text-sm mb-2">Full-service dining</p>
              <p className="text-line text-navy/60 text-xs leading-relaxed">Table management, POS, and kitchen sync for complete restaurant operations</p>
            </div>
          </div>

          <div className="badge-item relative text-center cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
            <Image
              src="/images/tillcoffee.png"
              alt="Coffee Houses"
              width={240}
              height={96}
              className="badge-image h-20 w-auto object-contain mx-auto mb-6"
            />

            <div className="badge-text h-0 opacity-0 overflow-hidden">
              <div className="h-px w-12 bg-golden mx-auto mb-4 decor-line" style={{ transformOrigin: 'center' }} />
              <p className="text-line text-navy font-semibold text-sm mb-2">Quick-service coffee</p>
              <p className="text-line text-navy/60 text-xs leading-relaxed">Fast ordering and payment for high-volume café environments</p>
            </div>
          </div>

          <div className="badge-item relative text-center cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
            <Image
              src="/images/tillsupermarkets.png"
              alt="Supermarkets"
              width={240}
              height={96}
              className="badge-image h-20 w-auto object-contain mx-auto mb-6"
            />

            <div className="badge-text h-0 opacity-0 overflow-hidden">
              <div className="h-px w-12 bg-navy/40 mx-auto mb-4 decor-line" style={{ transformOrigin: 'center' }} />
              <p className="text-line text-navy font-semibold text-sm mb-2">Markets & grocers</p>
              <p className="text-line text-navy/60 text-xs leading-relaxed">Self-service scanning, inventory, and checkout for retail stores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
