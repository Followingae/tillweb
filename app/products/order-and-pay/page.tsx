'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/app/components/layout/Navigation'
import { CreditCard, Smartphone, Zap, Lock, RefreshCw, Split, Clock, TrendingUp, ArrowRight, Check } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function OrderAndPayPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

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

  const process = [
    {
      number: '1',
      title: 'Scan QR Code',
      description: 'Guest scans the QR code at their table—instant access to your full digital menu with photos and descriptions.'
    },
    {
      number: '2',
      title: 'Browse & Customize',
      description: 'Guests explore items, view allergen info, customize dishes with modifiers, and add to cart at their own pace.'
    },
    {
      number: '3',
      title: 'Place Order Instantly',
      description: 'Orders are sent directly to the kitchen display system in real-time—no server needed to take the order.'
    },
    {
      number: '4',
      title: 'Pay Instantly',
      description: 'Integrated payment gateway processes card, Apple Pay, Google Pay, and digital wallets instantly and securely.'
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Real-Time Ordering',
      description: 'Orders sent instantly to kitchen with full customizations'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'PCI-compliant with encryption and fraud protection'
    },
    {
      icon: RefreshCw,
      title: 'Order Again',
      description: 'Guests can easily reorder past favorites with one tap'
    },
    {
      icon: Split,
      title: 'Split Bills',
      description: 'Each guest pays for their own items hassle-free'
    },
    {
      icon: Clock,
      title: 'Table Timers',
      description: 'Track table time and optimize turnover rates'
    },
    {
      icon: TrendingUp,
      title: 'Upsell Prompts',
      description: 'Smart suggestions boost average order value'
    }
  ]

  const benefits = [
    'Reduce labor costs with automated ordering',
    'Eliminate order errors from miscommunication',
    'Increase table turns with faster service',
    'Boost revenue with smart upsell suggestions',
    'Improve guest experience with contactless service',
    'Instant payment settlement to your account'
  ]

  const stats = [
    { value: '42%', label: 'Faster Service' },
    { value: '28%', label: 'Higher AOV' },
    { value: 'Zero', label: 'Payment Errors' }
  ]

  return (
    <main className="bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-golden via-coral to-coral-dark">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl float-element" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-navy/10 rounded-full blur-3xl float-element" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="hero-content">
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <CreditCard className="w-4 h-4 text-white" />
                <span className="text-white text-sm uppercase tracking-wider font-medium">Product</span>
              </div>

              <h1 className="font-palmore text-[clamp(3.5rem,10vw,8rem)] text-white uppercase leading-[0.85] mb-8">
                ORDER<br />
                & PAY
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-xl font-light leading-relaxed mb-12">
                The complete contactless experience—guests browse, order, customize, and pay instantly from their phone. Zero friction.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/demo" className="group px-10 py-5 bg-white text-coral rounded-full font-semibold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                  className="float-element absolute bg-white backdrop-blur-2xl rounded-2xl p-8 shadow-2xl"
                  style={{
                    top: `${index * 140 + 70}px`,
                    right: `${index % 2 === 0 ? '20px' : '120px'}`,
                    width: '260px'
                  }}
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-coral to-golden bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-navy/70 text-sm uppercase tracking-wide font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="fade-in-section text-center mb-20">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              THE FUTURE OF<br />
              <span className="text-coral">RESTAURANT SERVICE</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              Empower your guests with full control over their dining experience. From browsing to payment, everything happens seamlessly on their mobile device.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-coral to-golden" />
                )}

                <div className="bg-cream border-2 border-cream hover:border-coral rounded-2xl p-8 h-full transition-all hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-coral to-golden rounded-xl flex items-center justify-center mb-6 text-white font-bold text-2xl">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{step.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-8 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              POWERFUL FEATURES<br />BUILT IN
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white border-2 border-white hover:border-golden rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-golden to-coral rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-navy via-forest to-navy">
        <div className="max-w-[1200px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-white uppercase mb-6 leading-none">
              WHY RESTAURANTS<br />
              <span className="text-golden">CHOOSE US</span>
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
                className="flex items-center gap-4 bg-gradient-to-r from-coral to-golden rounded-xl p-6 shadow-xl"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-coral" strokeWidth={3} />
                </div>
                <p className="text-white text-lg font-semibold">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-cream">
        <div className="max-w-[1200px] mx-auto text-center fade-in-section">
          <div className="bg-gradient-to-br from-golden via-coral to-coral-dark rounded-3xl p-16 shadow-2xl relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="font-palmore text-5xl md:text-6xl text-white uppercase mb-6 leading-none">
                TRANSFORM YOUR<br />SERVICE TODAY
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Join 500+ restaurants delivering seamless order & pay experiences. Get started in minutes.
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
        </div>
      </section>
    </main>
  )
}
