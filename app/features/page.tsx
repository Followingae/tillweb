'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Store, Smartphone, ChefHat, Users, BarChart3, CreditCard, QrCode, Wifi, Database, Zap } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturesPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const features = document.querySelectorAll('.feature-card')

    features.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
          }
        }
      )
    })
  }, [])

  const featureCategories = [
    {
      title: 'Front of House',
      icon: Store,
      color: 'from-coral to-coral/80',
      features: [
        { icon: QrCode, name: 'QR Ordering', desc: 'Contactless ordering with integrated payments' },
        { icon: Users, name: 'CRM & Loyalty', desc: 'Build lasting customer relationships' },
        { icon: Database, name: 'Table Management', desc: 'Dynamic floor plans and reservations' },
        { icon: Smartphone, name: 'Waiter Handhelds', desc: 'Mobile POS for tableside service' },
      ]
    },
    {
      title: 'Payment Terminal',
      icon: Smartphone,
      color: 'from-golden to-golden/80',
      features: [
        { icon: CreditCard, name: 'Integrated Payments', desc: 'Accept all payment methods seamlessly' },
        { icon: Wifi, name: 'CloudPOS Sync', desc: 'Real-time synchronization across devices' },
        { icon: BarChart3, name: 'Bill Splitting', desc: 'Flexible payment options for groups' },
        { icon: Zap, name: 'Fast Checkout', desc: 'Optimized for speed and efficiency' },
      ]
    },
    {
      title: 'Back of House',
      icon: ChefHat,
      color: 'from-navy to-navy/80',
      features: [
        { icon: Database, name: 'Kitchen Display', desc: 'Real-time order management for kitchen' },
        { icon: BarChart3, name: 'Inventory Control', desc: 'Track stock levels and recipe costs' },
        { icon: Users, name: 'Staff Management', desc: 'Scheduling, permissions, and workflows' },
        { icon: Zap, name: 'Analytics', desc: 'Deep insights into your operations' },
      ]
    }
  ]

  return (
    <main className="bg-white">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-palmore text-[20vw] leading-none text-white/5 uppercase">
            FEATURES
          </div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="h-px w-20 bg-coral" />
              <span className="text-sm font-medium text-coral uppercase tracking-widest">
                Platform Capabilities
              </span>
            </div>
            <h1 className="font-palmore text-7xl lg:text-8xl text-white uppercase tracking-normal mb-8 leading-[0.9]">
              Everything<br />You Need
            </h1>
            <p className="text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
              Comprehensive features that power restaurants from order to payment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="space-y-32">
            {featureCategories.map((category, catIndex) => {
              const Icon = category.icon
              return (
                <div key={catIndex} className="feature-card">
                  <div className="mb-12">
                    <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${category.color} rounded-2xl px-6 py-3 mb-6`}>
                      <Icon className="text-white" size={28} strokeWidth={1.5} />
                      <h2 className="font-palmore text-3xl text-white uppercase tracking-normal">
                        {category.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.features.map((feature, index) => {
                      const FeatureIcon = feature.icon
                      return (
                        <motion.div
                          key={index}
                          whileHover={{ y: -8 }}
                          className="bg-beige rounded-2xl p-8 hover:shadow-xl transition-shadow"
                        >
                          <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6">
                            <FeatureIcon className="text-coral" size={24} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-xl font-semibold text-navy mb-3">
                            {feature.name}
                          </h3>
                          <p className="text-navy/60 leading-relaxed">
                            {feature.desc}
                          </p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-coral">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-palmore text-6xl lg:text-7xl text-white uppercase tracking-normal mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-2xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
              See how Till can transform your restaurant operations
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-coral font-semibold rounded-full hover:bg-white/95 transition-all text-lg"
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
