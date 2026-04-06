'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/app/components/layout/Navigation'
import { LayoutGrid, Radio, QrCode, MapPin, Users, Layers, ArrowRight, Check, ChevronDown } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TableManagementPage() {
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

  const features = [
    {
      icon: LayoutGrid,
      title: 'Visual Floor Plans',
      description: 'Create floors with drag-and-drop table positioning and custom layouts.'
    },
    {
      icon: Radio,
      title: 'Real-Time Occupancy',
      description: 'Live status of every table: available, occupied, or reserved across all floors.'
    },
    {
      icon: QrCode,
      title: 'Per-Table QR Codes',
      description: 'Generate unique QR codes per table for customer self-ordering and payment.'
    },
    {
      icon: MapPin,
      title: 'Section & Zone Grouping',
      description: 'Organize tables into sections (patio, bar, main) for staff assignment.'
    },
    {
      icon: Users,
      title: 'Capacity Management',
      description: 'Set and track guest capacity per table and per floor.'
    },
    {
      icon: Layers,
      title: 'Multi-Floor Support',
      description: 'Manage multiple floors per branch with independent table layouts.'
    }
  ]

  const benefits = [
    'See every table\'s status at a glance from POS or dashboard',
    'Drag-and-drop tables between floors to reorganize layout',
    'QR codes enable self-ordering without extra staff involvement',
    'Track guest count and table turnover for capacity optimization',
    'Custom table shapes and sizes match your real floor plan',
    'Real-time sync across all devices and dashboard'
  ]

  const stats = [
    { value: 'Live', label: 'Real-Time Status' },
    { value: 'Drag', label: 'And Drop' },
    { value: 'QR', label: 'Per Table' }
  ]

  const faqs = [
    {
      question: 'Can I design my exact floor layout?',
      answer: 'Yes, drag-and-drop tables with custom positioning to match your real restaurant layout.'
    },
    {
      question: 'How does QR ordering work with tables?',
      answer: 'Each table has a unique QR code. When scanned, customers see your menu and can order/pay for that specific table.'
    },
    {
      question: 'Can I see table status in real-time?',
      answer: 'Yes, live occupancy updates across all devices — POS terminals and dashboard.'
    },
    {
      question: 'Can I manage multiple floors?',
      answer: 'Yes, create separate floors per branch with independent table layouts and section grouping.'
    },
    {
      question: 'Does it track table turnover?',
      answer: 'Yes, guest count and occupancy times are tracked for capacity optimization.'
    }
  ]

  return (
    <main className="bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-forest via-navy to-forest">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-golden/10 rounded-full blur-3xl float-element" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-coral/10 rounded-full blur-3xl float-element" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="hero-content">
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <LayoutGrid className="w-4 h-4 text-golden" />
                <span className="text-white/80 text-sm uppercase tracking-wider font-medium">Product</span>
              </div>

              <h1 className="font-palmore text-[clamp(3rem,8vw,7rem)] text-white uppercase leading-[0.85] mb-8">
                TABLE<br />
                <span className="text-golden">MANAGEMENT</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 max-w-xl font-light leading-relaxed mb-12">
                Visual floor plans with drag-and-drop table layouts. Real-time occupancy, per-table QR codes, section grouping, and capacity tracking.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/demo" className="group px-10 py-5 bg-golden text-navy rounded-full font-semibold text-lg hover:bg-golden/90 transition-all shadow-2xl hover:shadow-golden/50 flex items-center gap-3">
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
                  <div className="text-5xl font-bold bg-gradient-to-r from-golden to-coral bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
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
              YOUR FLOOR<br />
              <span className="text-forest">YOUR WAY</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              Design your exact restaurant layout digitally. Manage tables, sections, and capacity in real-time across every floor and every branch.
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
                  className="group bg-cream border-2 border-cream hover:border-forest rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-forest to-golden rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
      <section className="py-32 px-8 bg-gradient-to-br from-forest via-navy to-forest">
        <div className="max-w-[1200px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-white uppercase mb-6 leading-none">
              OPTIMIZE YOUR<br />
              <span className="text-golden">FLOOR</span>
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
                  className="w-full flex items-center justify-between bg-white border-2 border-white hover:border-forest/30 rounded-2xl p-6 transition-all text-left"
                >
                  <span className="text-lg font-semibold text-navy pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-forest flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
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
          <div className="bg-gradient-to-br from-forest via-navy to-forest rounded-3xl p-16 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, white 0, white 2px, transparent 2px, transparent 10px)`,
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="font-palmore text-5xl md:text-6xl text-white uppercase mb-6 leading-none">
                TAKE CONTROL OF<br />YOUR FLOOR
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Design your layout, track every table, and optimize capacity — all in real-time. Setup in under 30 minutes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/demo" className="px-12 py-5 bg-golden text-navy rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                  Request Demo →
                </a>
                <a href="/pricing" className="px-12 py-5 bg-white/10 text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
