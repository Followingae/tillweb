'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/app/components/layout/Navigation'
import { Calculator, ScanLine, BellRing, ArrowLeftRight, ClipboardList, Scale, ArrowRight, Check, ChevronDown } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function InventoryPage() {
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
      icon: Calculator,
      title: 'Recipe-Based Food Costing',
      description: 'Define recipes with ingredients, auto-calculate dish costs, track margins in real-time.'
    },
    {
      icon: ScanLine,
      title: 'AI Invoice Extraction',
      description: 'Photograph supplier invoices and AI auto-extracts items, quantities, and prices.'
    },
    {
      icon: BellRing,
      title: 'Smart Stock Alerts',
      description: 'Automatic notifications when items drop below reorder points across any branch.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Multi-Branch Transfers',
      description: 'Transfer stock between locations with full tracking and reconciliation.'
    },
    {
      icon: ClipboardList,
      title: 'Purchase Order Management',
      description: 'Create requisitions with approval workflows: Draft, Submit, Approve, Convert.'
    },
    {
      icon: Scale,
      title: 'Weighted Average Costing',
      description: 'FIFO/weighted-average cost tracking from supplier receipts with purchase unit mapping.'
    }
  ]

  const benefits = [
    'Reduce food waste with real-time ingredient tracking',
    'Know your true food cost for every menu item',
    'Auto-deduct stock on every order, reverse on voids/refunds',
    'Supplier management with payment terms and spend analytics',
    'Stock adjustments for waste, damage, and count variance',
    'Purchase unit mapping (buy cases of 12, sell as individual units)'
  ]

  const stats = [
    { value: '15%', label: 'Less Waste' },
    { value: 'Live', label: 'Real-Time COGS' },
    { value: 'AI', label: 'Powered' }
  ]

  const faqs = [
    {
      question: 'How does recipe costing work?',
      answer: 'Define ingredients per dish with quantities. Till auto-calculates dish cost and updates when ingredient prices change.'
    },
    {
      question: 'What is AI invoice extraction?',
      answer: 'Photograph a supplier invoice and AI extracts line items, quantities, and prices automatically.'
    },
    {
      question: 'Can I track stock across multiple branches?',
      answer: 'Yes, per-branch inventory with transfer capabilities and centralized reporting.'
    },
    {
      question: 'Does stock update automatically?',
      answer: 'Yes, stock deducts on every order and reverses on voids or refunds.'
    },
    {
      question: 'What costing methods are supported?',
      answer: 'Weighted average and FIFO costing from supplier purchase receipts.'
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
                <ClipboardList className="w-4 h-4 text-coral" />
                <span className="text-white/80 text-sm uppercase tracking-wider font-medium">Product</span>
              </div>

              <h1 className="font-palmore text-[clamp(3rem,9vw,7rem)] text-white uppercase leading-[0.85] mb-8">
                INVENTORY<br />
                <span className="text-coral">MANAGEMENT</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 max-w-xl font-light leading-relaxed mb-12">
                Track every ingredient from supplier to plate. Recipe-based costing, smart stock alerts, AI-powered invoice processing, and multi-branch transfers.
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
              FROM SUPPLIER<br /><span className="text-coral">TO PLATE</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              Full visibility into your ingredient costs, stock levels, and supplier spend. Know your true food cost for every dish on your menu.
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
              CONTROL YOUR<br />
              <span className="text-golden">FOOD COSTS</span>
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
              READY TO CUT<br />FOOD WASTE?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Get full visibility into your inventory, food costs, and supplier spend. AI-powered and built for multi-branch operations.
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
