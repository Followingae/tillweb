'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/app/components/layout/Navigation'
import { MonitorSmartphone, Hand, Palette, UtensilsCrossed, CreditCard, Megaphone, ArrowRight, Check, ChevronDown } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SelfOrderingKioskPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!heroRef.current) return

    gsap.from('.hero-content > *', {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    })

    gsap.to('.float-element', {
      y: -20,
      duration: 2.5,
      ease: 'power1.inOut',
      stagger: 0.3,
      repeat: -1,
      yoyo: true
    })

    gsap.utils.toArray<HTMLElement>('.fade-in-section').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          toggleActions: 'play none none none'
        }
      })
    })
  }, [])

  const features = [
    {
      icon: MonitorSmartphone,
      title: 'Attract Screen',
      description: 'Eye-catching slideshow with promotional banners and brand messaging to draw customers.'
    },
    {
      icon: Hand,
      title: 'Touch-Friendly Catalog',
      description: 'Large images, easy category browsing, item details with variations and modifiers.'
    },
    {
      icon: Palette,
      title: 'Full Brand Customization',
      description: 'Custom colors, logos, backgrounds, promotional banners, and success screens.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Order Type Selection',
      description: 'Customer chooses dine-in or takeaway with custom imagery per option.'
    },
    {
      icon: CreditCard,
      title: 'Integrated Payment',
      description: 'Pay directly on terminal (card) or choose pay-at-counter for cash.'
    },
    {
      icon: Megaphone,
      title: 'Promotional Engine',
      description: 'Position-based banners (attract screen, catalog, cart) with date scheduling.'
    }
  ]

  const benefits = [
    'Reduce wait times and staff burden during peak hours',
    'Increase average order value with visual upselling',
    'Full white-label branding — looks like your own custom app',
    'Seamless kitchen integration — orders go directly to KDS',
    'Order number generation for pickup management',
    'Works on Feitian RFM Loyalty Android terminals'
  ]

  const stats = [
    { value: '25%', label: 'Higher AOV' },
    { value: '50%', label: 'Less Wait Time' },
    { value: '0', label: 'Order Errors' }
  ]

  const faqs = [
    {
      question: 'What hardware do I need?',
      answer: 'Any Feitian RFM Loyalty Android payment terminal. No additional hardware required.'
    },
    {
      question: 'Can I customize the look?',
      answer: 'Yes, full white-label branding: colors, logos, backgrounds, banners, and messaging.'
    },
    {
      question: 'How do customers pay?',
      answer: 'Card payment directly on the terminal, or pay-at-counter option for cash.'
    },
    {
      question: 'Does it show promotions?',
      answer: 'Yes, promotional banners can be placed on attract screen, catalog, and cart with date scheduling.'
    },
    {
      question: 'Do orders go to the kitchen?',
      answer: 'Yes, orders fire directly to the Kitchen Display System with full item details and notes.'
    }
  ]

  return (
    <main className="bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-forest to-navy">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl float-element" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-golden/10 rounded-full blur-3xl float-element" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="hero-content">
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <MonitorSmartphone className="w-4 h-4 text-coral" />
                <span className="text-white/80 text-sm uppercase tracking-wider font-medium">Product</span>
              </div>

              <h1 className="font-palmore text-[clamp(3rem,9vw,7rem)] text-white uppercase leading-[0.85] mb-8">
                SELF-ORDERING<br />
                <span className="text-coral">KIOSK</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 max-w-xl font-light leading-relaxed mb-12">
                Turn any Feitian terminal into a customer-facing self-ordering station. Branded attract screens, touch-friendly catalog, and integrated payment.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/demo" className="group px-10 py-5 bg-coral text-white rounded-full font-semibold text-lg hover:bg-coral-dark transition-all shadow-2xl hover:shadow-coral/50 flex items-center gap-3">
                  Request Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="/pricing" className="px-10 py-5 text-white border-2 border-white/30 rounded-full hover:bg-white/10 backdrop-blur-xl transition-all text-lg font-medium">
                  View Pricing
                </a>
              </div>
            </div>

            {/* Right - Stats Cards */}
            <div className="relative h-[500px] hidden lg:block">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                  className="float-element absolute bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl"
                  style={{
                    top: `${index * 150 + 60}px`,
                    right: `${index % 2 === 0 ? '0' : '100px'}`,
                    width: '280px'
                  }}
                >
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="fade-in-section text-center mb-20">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              LET CUSTOMERS<br /><span className="text-coral">ORDER THEMSELVES</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              A branded self-ordering experience that reduces queues, increases order accuracy, and drives higher average order value through visual upselling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-cream border-2 border-cream hover:border-coral rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-coral to-golden rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{feature.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-navy to-forest">
        <div className="max-w-[1200px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-white uppercase mb-6 leading-none">
              BOOST REVENUE,<br />
              <span className="text-golden">CUT QUEUES</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 fade-in-section">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-navy" strokeWidth={3} />
                </div>
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              COMMON<br /><span className="text-coral">QUESTIONS</span>
            </h2>
          </div>

          <div className="space-y-4 fade-in-section">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 bg-cream border-2 border-cream hover:border-coral/30 rounded-2xl p-6 text-left transition-all"
                >
                  <span className="text-lg font-semibold text-navy">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-coral flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4 pt-2"
                  >
                    <p className="text-navy/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-cream">
        <div className="max-w-[1200px] mx-auto text-center fade-in-section">
          <div className="bg-gradient-to-br from-coral to-golden rounded-3xl p-16 shadow-2xl">
            <h2 className="font-palmore text-5xl md:text-6xl text-white uppercase mb-6 leading-none">
              READY FOR<br />SELF-SERVICE?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Turn your Feitian terminal into a branded self-ordering kiosk. Customers order, pay, and go — no staff needed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/demo" className="px-12 py-5 bg-white text-coral rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                Request Demo
              </a>
              <a href="/contact" className="px-12 py-5 bg-white/10 text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
