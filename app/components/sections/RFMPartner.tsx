'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function RFMPartner() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!logoRef.current || !sectionRef.current) return

    // Logo entrance animation
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        y: 60,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        }
      }
    )

    // Magnetic hover effect on logo
    const logo = logoRef.current
    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(logo, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.6,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(logo, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)'
      })
    }

    logo.addEventListener('mousemove', handleMouseMove)
    logo.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      logo.removeEventListener('mousemove', handleMouseMove)
      logo.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-gradient-to-br from-cream via-white to-beige overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-coral/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-navy/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-navy/20" />
            <span className="text-xs uppercase tracking-[0.3em] text-navy/40 font-medium">
              Partnership
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-navy/20" />
          </div>

          <h2 className="font-palmore text-5xl lg:text-6xl text-navy uppercase mb-6 tracking-tight">
            Powered by
          </h2>
        </motion.div>

        {/* RFM Loyalty Logo */}
        <div
          ref={logoRef}
          className="relative flex justify-center mb-12 cursor-pointer"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <a
            href="https://www.rfmloyaltyco.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <Image
              src="/images/RFM-Logo8.png"
              alt="RFM Loyalty"
              width={500}
              height={100}
              className="w-full max-w-[500px] h-auto transition-all duration-500 group-hover:scale-105"
            />

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-coral/0 via-coral/5 to-coral/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </a>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg lg:text-xl text-navy/70 leading-relaxed mb-8 font-light">
            Till is proudly powered by <span className="font-semibold text-navy">RFM Loyalty</span>,
            the UAE's leading customer engagement and loyalty solutions provider. Together, we're
            transforming how restaurants connect with their customers and grow their business.
          </p>

          {/* Key benefits grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-navy/10 hover:border-coral/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm uppercase tracking-wide">Enterprise Power</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                Built on enterprise-grade infrastructure trusted by UAE's top brands
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-navy/10 hover:border-coral/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-golden/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm uppercase tracking-wide">Loyalty Expertise</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                Integrated customer engagement and rewards programs that drive retention
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-navy/10 hover:border-coral/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm uppercase tracking-wide">Local Support</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                Dedicated UAE-based team providing 24/7 support and implementation
              </p>
            </motion.div>
          </div>

          {/* Learn more link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <a
              href="https://www.rfmloyaltyco.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-coral hover:text-coral-dark transition-colors duration-300 font-medium group"
            >
              Learn more about RFM Loyalty
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
