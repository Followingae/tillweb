'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { Sparkles, Brain, TrendingUp, Target } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip)
}

export default function AIIntelligence() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [activeFeature, setActiveFeature] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
    layoutEffect: false
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    if (!buttonRef.current || !sectionRef.current) return

    const ctx = gsap.context(() => {
      // Magnetic button
      const button = buttonRef.current
      const handleMouseMove = (e: MouseEvent) => {
        if (!button) return
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(button, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.5,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        if (!button) return
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.4)'
        })
      }

      button?.addEventListener('mousemove', handleMouseMove)
      button?.addEventListener('mouseleave', handleMouseLeave)

      // Animate feature cards with stagger
      gsap.from('.ai-feature-card', {
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotation: (index) => (index % 2 === 0 ? -3 : 3),
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.ai-features-grid',
          start: 'top center+=100'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const aiFeatures = [
    { icon: Brain, title: 'Smart Analytics', description: 'Customer behavior and sales patterns in real time' },
    { icon: TrendingUp, title: 'Demand Prediction', description: 'Forecast inventory with machine learning' },
    { icon: Target, title: 'Dynamic Pricing', description: 'Optimize pricing based on demand' },
    { icon: Sparkles, title: 'Auto-optimization', description: 'Continuous improvement, no manual work' }
  ]

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-48 bg-gradient-to-br from-coral via-coral to-coral-dark overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-golden/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.06, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="font-palmore text-[30vw] leading-none text-white uppercase"
        >
          AI
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8">
        {/* Asymmetric grid layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Main heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="h-px w-24 bg-white/60" />
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              <h2 className="font-palmore text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-normal leading-[1] mb-12">
                Intelligence<br />Built In
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-16">
                Predict demand. Optimize pricing. Maximize efficiency. All automatic.
              </p>

              <button
                ref={buttonRef}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-coral font-semibold rounded-full hover:bg-white/95 transition-all text-lg shadow-2xl hover:shadow-3xl"
              >
                <span>Explore AI Features</span>
                <div className="w-8 h-px bg-coral group-hover:w-12 transition-all" />
              </button>
            </motion.div>
          </div>

          {/* Right: Feature cards grid */}
          <div className="lg:col-span-7">
            <div className="ai-features-grid grid sm:grid-cols-2 gap-6">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="ai-feature-card relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-500 h-full">
                      <div className="mb-6">
                        <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">
                        {feature.title}
                      </h3>

                      <p className="text-white/80 leading-relaxed font-light">
                        {feature.description}
                      </p>

                      {/* Hover gradient */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
