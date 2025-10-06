'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Button from '../ui/Button'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { Observer } from 'gsap/Observer'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip, Observer)
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoExpanded, setIsVideoExpanded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
    layoutEffect: false
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  useEffect(() => {
    if (!titleRef.current || !containerRef.current) return

    const ctx = gsap.context(() => {
      // Character-by-character reveal on title
      const chars = titleRef.current?.querySelectorAll('.hero-char')
      gsap.from(chars, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: 'top center',
        duration: 0.8,
        stagger: 0.02,
        ease: 'power4.out',
        delay: 0.5
      })

      // Floating stats with intense 3D transforms
      gsap.from('.stat-card', {
        opacity: 0,
        y: 150,
        scale: 0.7,
        rotationY: 45,
        rotationZ: (index) => (index % 2 === 0 ? 15 : -15),
        duration: 1.4,
        stagger: 0.1,
        ease: 'back.out(2)',
        delay: 0.8,
        onComplete: () => {
          // Start continuous float animation after initial animation completes
          gsap.to('.stat-card', {
            y: '+=25',
            rotationY: '+=5',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: {
              each: 0.3,
              from: 'random'
            }
          })
        }
      })

      // Mouse parallax with Observer - only background elements
      Observer.create({
        type: 'pointer',
        onMove: (self) => {
          const x = (self.x / window.innerWidth - 0.5) * 40
          const y = (self.y / window.innerHeight - 0.5) * 40

          gsap.to('.parallax-bg', {
            x: -x * 0.2,
            y: -y * 0.2,
            duration: 1.5,
            ease: 'power2.out',
            overwrite: 'auto'
          })
        }
      })

      // Scroll-triggered video scale
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to('.hero-video-bg', {
            scale: 1 + self.progress * 0.3,
            opacity: 1 - self.progress * 0.6,
            duration: 0.1
          })
        }
      })

      // Scroll indicator fade
      gsap.to('.scroll-indicator', {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300',
          scrub: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const splitTitle = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="hero-char inline-block" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-navy">
      {/* Background Video with GSAP ScrollTrigger scale */}
      <div className="hero-video-bg absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/tillhero.mp4" type="video/mp4" />
        </video>
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-transparent to-coral/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      {/* Parallax background elements */}
      <div className="parallax-bg absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-golden/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1600px] mx-auto px-8 w-full">
          {/* Ultra-modern asymmetric grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left: Massive typography */}
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-4">
                <Sparkles className="w-5 h-5 text-coral" />
                <div className="h-px w-16 bg-gradient-to-r from-coral to-transparent" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">Next-Gen CloudPOS</span>
              </div>

              <h1 ref={titleRef} className="font-palmore text-[clamp(3rem,12vw,10rem)] text-white uppercase leading-[0.75] mb-12" style={{ perspective: '1000px', letterSpacing: '-0.02em' }}>
                {splitTitle('BUILT')}<br />
                {splitTitle('FOR')}<br />
                <span className="text-coral">{splitTitle('RESTAURANTS')}</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed mb-12"
              >
                A CloudPOS that runs on Android terminals. Front-of-house, kitchen, payments, and intelligence—all in one.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a href="/demo" className="group px-10 py-5 bg-coral text-white rounded-full font-semibold text-lg hover:bg-coral-dark transition-all shadow-2xl hover:shadow-coral/50 flex items-center gap-3">
                  Request Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <button className="px-10 py-5 text-white border-2 border-white/30 rounded-full hover:bg-white/10 backdrop-blur-xl transition-all text-lg font-medium">
                  Explore Features
                </button>
              </motion.div>
            </div>

            {/* Right: 3D Floating Stats - Clean compact layout */}
            <div className="lg:col-span-5 relative h-[600px] hidden lg:block" style={{ perspective: '1200px' }}>
              {/* Card 1 - Top Right */}
              <div className="stat-card absolute bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-5 w-56 shadow-xl" style={{ top: '60px', right: '48px', transformStyle: 'preserve-3d' }}>
                <div className="text-4xl font-bold text-white mb-1.5">500+</div>
                <div className="text-white/60 text-[11px] uppercase tracking-wide">Active Restaurants</div>
              </div>

              {/* Card 2 - Left */}
              <div className="stat-card absolute bg-gradient-to-br from-coral to-coral-dark rounded-xl p-5 w-56 shadow-xl" style={{ top: '150px', left: '48px', transformStyle: 'preserve-3d' }}>
                <div className="text-4xl font-bold text-white mb-1.5">99.9%</div>
                <div className="text-white/90 text-[11px] uppercase tracking-wide">System Uptime</div>
              </div>

              {/* Card 3 - Right */}
              <div className="stat-card absolute bg-white rounded-xl p-5 w-56 shadow-xl" style={{ top: '240px', right: '48px', transformStyle: 'preserve-3d' }}>
                <div className="text-4xl font-bold text-navy mb-1.5">24/7</div>
                <div className="text-navy/50 text-[11px] uppercase tracking-wide">Global Support</div>
              </div>

              {/* Card 4 - Left */}
              <div className="stat-card absolute bg-gradient-to-br from-golden to-golden/80 rounded-xl p-5 w-56 shadow-xl" style={{ top: '330px', left: '48px', transformStyle: 'preserve-3d' }}>
                <div className="text-4xl font-bold text-navy mb-1.5">AED 7M+</div>
                <div className="text-navy/70 text-[11px] uppercase tracking-wide">Processed Daily</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator with GSAP fade */}
      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-coral to-transparent" />
          <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
