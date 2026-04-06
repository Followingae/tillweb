'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/app/components/layout/Navigation'
import { Plug, BookOpen, CreditCard, Cpu, Printer, Brain, Shield, Truck, Calculator, Wallet, ArrowRight, ChevronDown, Clock } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function IntegrationsPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
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

  const integrations = [
    {
      icon: BookOpen,
      name: 'Zoho Books',
      category: 'Accounting',
      description: 'Auto-sync orders as invoices, tax tracking, supplier bill management, payment reconciliation.',
      color: 'from-coral to-golden'
    },
    {
      icon: CreditCard,
      name: 'SmartPay',
      category: 'Payment Processing',
      description: 'Card payment processing on Feitian terminals, refund support, transaction tracking.',
      color: 'from-golden to-coral'
    },
    {
      icon: Cpu,
      name: 'Feitian ECR SDK',
      category: 'Payment Hardware',
      description: 'USB and Bluetooth payment terminal integration for card processing.',
      color: 'from-forest to-golden'
    },
    {
      icon: Printer,
      name: 'QZ Tray',
      category: 'Printing',
      description: 'Certificate-based thermal printer connectivity for receipts and kitchen slips.',
      color: 'from-navy to-forest'
    },
    {
      icon: Brain,
      name: 'Anthropic Claude AI',
      category: 'Intelligence',
      description: 'AI-powered invoice extraction from photos, automatic field recognition.',
      color: 'from-coral to-coral-dark'
    },
    {
      icon: Shield,
      name: 'RFM Loyalty',
      category: 'Loyalty & Payments',
      description: 'Backed by 25,000+ terminals, 20,000+ merchants, 15+ year payment infrastructure.',
      color: 'from-golden to-forest'
    }
  ]

  const comingSoon = [
    {
      icon: Truck,
      name: 'Delivery Aggregators',
      items: 'Talabat, Zomato, Deliveroo'
    },
    {
      icon: Calculator,
      name: 'Additional Accounting',
      items: 'Xero, QuickBooks'
    },
    {
      icon: Wallet,
      name: 'Additional Payment Gateways',
      items: 'More options coming'
    }
  ]

  const faqs = [
    {
      question: 'How does Zoho Books integration work?',
      answer: 'Orders auto-sync as invoices to Zoho Books. Tax tracking and supplier bills from purchase orders also sync automatically.'
    },
    {
      question: 'Do I need special hardware for payments?',
      answer: 'Just a Feitian RFM Loyalty Android payment terminal. SmartPay and ECR SDK handle the rest.'
    },
    {
      question: 'Can Till connect to delivery apps?',
      answer: 'Aggregator integration is coming soon. The backend already supports multi-menu pricing per aggregator.'
    },
    {
      question: 'Is the AI invoice feature included?',
      answer: 'Yes, AI invoice extraction is built into the purchase order workflow on the dashboard.'
    },
    {
      question: 'What printers are supported?',
      answer: 'Built-in terminal thermal, Bluetooth ESC/POS, USB, and network printers via QZ Tray.'
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
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-forest/10 rounded-full blur-3xl float-element" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="hero-content">
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Plug className="w-4 h-4 text-coral" />
                <span className="text-white/80 text-sm uppercase tracking-wider font-medium">Ecosystem</span>
              </div>

              <h1 className="font-palmore text-[clamp(3.5rem,10vw,8rem)] text-white uppercase leading-[0.85] mb-8">
                INTE<span className="text-coral">GRA</span><br />TIONS
              </h1>

              <p className="text-xl md:text-2xl text-white/70 max-w-xl font-light leading-relaxed mb-12">
                Connect Till with your existing tools. Accounting, payment processing, delivery platforms, and hardware — all working together seamlessly.
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

            {/* Right - Integration Count */}
            <div className="relative h-[500px] hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="float-element absolute top-[80px] right-[20px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl w-[280px]"
              >
                <div className="text-5xl font-bold text-white mb-2">6+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Live Integrations</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="float-element absolute top-[230px] right-[100px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl w-[280px]"
              >
                <div className="text-5xl font-bold text-white mb-2">3+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Coming Soon</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="float-element absolute top-[380px] right-[0px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-2xl w-[280px]"
              >
                <div className="text-5xl font-bold text-white mb-2">1</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Unified Platform</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="fade-in-section text-center mb-20">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              CONNECTED<br />
              <span className="text-coral">ECOSYSTEM</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              Every integration is built-in and ready to go. No marketplace, no third-party plugins — just seamless connections that work out of the box.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-cream border-2 border-cream hover:border-coral rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-bold uppercase tracking-wider rounded-full">
                      {integration.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{integration.name}</h3>
                  <p className="text-navy/70 leading-relaxed">{integration.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-navy via-forest to-navy">
        <div className="max-w-[1200px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-white uppercase mb-6 leading-none">
              COMING<br />
              <span className="text-golden">SOON</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Our integration roadmap is growing. These connections are in active development and will be available soon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in-section">
            {comingSoon.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-golden/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-white/60 leading-relaxed">{item.items}</p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-golden/80 text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    <span>In Development</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-cream">
        <div className="max-w-[900px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              FREQUENTLY<br />ASKED
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
                  className="w-full flex items-center justify-between bg-white border-2 border-white hover:border-coral/30 rounded-2xl p-6 transition-all text-left"
                >
                  <span className="text-lg font-semibold text-navy pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-coral flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-white border-2 border-t-0 border-white rounded-b-2xl px-6 pb-6 -mt-2"
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
              ONE PLATFORM<br />FULLY CONNECTED
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Stop juggling tools. Till connects your accounting, payments, printing, and intelligence into one seamless system.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/demo" className="px-12 py-5 bg-white text-coral rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                Request Demo →
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
