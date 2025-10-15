'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/app/components/layout/Navigation'
import { FileText, Scan, Edit3, Check, CreditCard, Users, Shield, TrendingUp, FileCheck, UserCheck, ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PayAtTablePage() {
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

  const workflow = [
    {
      icon: Scan,
      title: 'Scan & Browse',
      description: 'Guests scan the QR code at their table and access your full digital menu with rich photos, descriptions, and allergen information.',
      badge: 'Guest Control'
    },
    {
      icon: Edit3,
      title: 'Customize & Order',
      description: 'Guests select items, add modifiers and special requests, then submit orders that go straight to the kitchen display system.',
      badge: 'Instant to Kitchen'
    },
    {
      icon: Check,
      title: 'Enjoy the Meal',
      description: 'Staff prepares and serves the meal. Guests can add more items through the digital menu at any time during their visit.',
      badge: null
    },
    {
      icon: CreditCard,
      title: 'Tableside Payment',
      description: 'When ready to pay, guests signal staff who brings a payment terminal to the table for secure, face-to-face payment processing.',
      badge: 'Personal Touch'
    }
  ]

  const whyItWorks = [
    {
      number: '1',
      title: 'Guest Control + Staff Service',
      description: 'Guests browse and order independently, but complete payment with staff assistance—combining efficiency with hospitality.'
    },
    {
      number: '2',
      title: 'Security & Trust',
      description: 'Payment happens face-to-face with staff at the table, providing reassurance for guests who prefer human interaction during transactions.'
    },
    {
      number: '3',
      title: 'Regulatory Compliance',
      description: 'Perfect for regions with strict payment regulations that require staff-operated terminals or physical receipt handling.'
    },
    {
      number: '4',
      title: 'Tipping Control',
      description: 'Staff can guide the tipping process on the terminal, maintaining personal interaction during the gratuity selection.'
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Staff Efficiency',
      description: 'Reduce order-taking time while maintaining tableside service'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'PCI-compliant terminals with face-to-face verification'
    },
    {
      icon: TrendingUp,
      title: 'Higher Tips',
      description: 'Staff presence during payment increases tip amounts'
    },
    {
      icon: FileCheck,
      title: 'Compliance Ready',
      description: 'Meets regulatory requirements for payment processing'
    }
  ]

  const stats = [
    { value: '38%', label: 'Faster Table Turns' },
    { value: '100%', label: 'Order Accuracy' },
    { value: '95%', label: 'Guest Satisfaction' }
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
                <FileText className="w-4 h-4 text-golden" />
                <span className="text-white/80 text-sm uppercase tracking-wider font-medium">Product</span>
              </div>

              <h1 className="font-palmore text-[clamp(3.5rem,10vw,8rem)] text-white uppercase leading-[0.85] mb-8">
                PAY AT<br />
                <span className="text-golden">TABLE</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 max-w-xl font-light leading-relaxed mb-12">
                Combine digital menus with seamless tableside payment. Staff brings the payment terminal—guests control the experience.
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

      {/* Best of Both Worlds */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="fade-in-section text-center mb-20">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              THE BEST OF<br />
              <span className="text-forest">BOTH WORLDS</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              Deliver the convenience of digital menus while maintaining that personal touch. Guests browse and order on their phones, then complete payment when staff brings the terminal to their table.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  {/* Connector */}
                  {index < workflow.length - 1 && (
                    <div className="hidden lg:block absolute top-14 -right-4 w-8 h-0.5 bg-gradient-to-r from-forest to-golden z-0" />
                  )}

                  <div className="bg-cream border-2 border-cream hover:border-forest rounded-2xl p-8 h-full transition-all hover:shadow-xl relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-forest to-golden rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{step.title}</h3>
                    <p className="text-navy/70 leading-relaxed mb-4">{step.description}</p>
                    {step.badge && (
                      <span className="inline-block px-4 py-1.5 bg-golden text-navy text-xs font-bold uppercase tracking-wider rounded-full">
                        {step.badge}
                      </span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-32 px-8 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              WHY PAY AT<br />TABLE WORKS
            </h2>
          </div>

          <div className="space-y-8">
            {whyItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex gap-6 bg-white border-2 border-white hover:border-forest rounded-2xl p-8 transition-all hover:shadow-xl"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-forest to-golden rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-navy/70 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="font-palmore text-6xl md:text-7xl text-navy uppercase mb-6 leading-none">
              BUILT FOR<br />
              <span className="text-golden">RESTAURANT SUCCESS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-cream border-2 border-cream hover:border-golden rounded-2xl p-8 transition-all hover:shadow-xl text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-forest to-golden rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-forest via-navy to-forest">
        <div className="max-w-[1000px] mx-auto text-center fade-in-section">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16">
            <div className="w-20 h-20 bg-gradient-to-br from-golden to-coral rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-white">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="text-2xl md:text-3xl text-white font-medium italic mb-8 leading-relaxed">
              "Pay at Table gives us the efficiency of digital ordering with the personal touch our guests expect. Our tips are up 22% since implementation."
            </p>
            <div className="text-xl font-bold text-golden">Sarah Mitchell</div>
            <div className="text-white/60 mt-2">Restaurant Manager, The Garden Bistro</div>
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
              <div className="inline-block px-6 py-2.5 bg-golden/20 text-golden rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Perfect Blend of Tech & Service
              </div>
              <h2 className="font-palmore text-5xl md:text-6xl text-white uppercase mb-6 leading-none">
                READY TO TRANSFORM<br />YOUR SERVICE?
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Join restaurants that deliver modern convenience without losing the human touch. Setup in under 30 minutes.
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
