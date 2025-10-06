'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  useEffect(() => {
    const cards = document.querySelectorAll('.pricing-card')

    gsap.fromTo(
      cards,
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.4)',
        delay: 0.5
      }
    )
  }, [])

  const plans = [
    {
      name: 'Starter',
      price: annual ? '99' : '129',
      description: 'Perfect for small cafes and food trucks',
      features: [
        'Up to 2 terminals',
        'Basic POS features',
        'Payment processing',
        'Email support',
        'Basic reporting',
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: annual ? '249' : '299',
      description: 'Ideal for growing restaurants',
      features: [
        'Up to 10 terminals',
        'Full POS suite',
        'Kitchen Display System',
        'CRM & Loyalty',
        'Priority support',
        'Advanced analytics',
        'Inventory management',
        'QR ordering',
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For multi-location operations',
      features: [
        'Unlimited terminals',
        'Everything in Professional',
        'Multi-location management',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'White-label options',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <main className="bg-white">
      {/* Hero - Bold like homepage */}
      <section className="relative h-screen flex items-center bg-navy overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-golden/10 rounded-full blur-3xl" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 2 }}
            className="font-palmore text-[25vw] leading-none text-white uppercase whitespace-nowrap"
          >
            PRICING
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-24 bg-coral" />
              <span className="text-sm font-medium text-coral uppercase tracking-widest">
                Pricing Plans
              </span>
            </div>
            <h1 className="font-palmore text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase tracking-normal leading-[0.85] mb-12">
              Transparent<br />Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
              Flexible plans designed to grow with your restaurant. No hidden fees, no surprises—just powerful features at transparent prices.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
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

      {/* Pricing Toggle */}
      <section className="py-20 bg-beige border-t border-navy/5">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setAnnual(false)}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  !annual ? 'bg-coral text-white' : 'text-navy hover:bg-navy/5'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  annual ? 'bg-coral text-white' : 'text-navy hover:bg-navy/5'
                }`}
              >
                Annual
                <span className="ml-2 text-sm opacity-80">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card relative bg-white rounded-3xl p-8 ${
                  plan.popular
                    ? 'ring-4 ring-coral shadow-2xl scale-105'
                    : 'shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-coral text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-navy mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-navy/60">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    {plan.price !== 'Custom' && (
                      <>
                        <span className="text-5xl font-bold text-navy">${plan.price}</span>
                        <span className="text-navy/60">/month</span>
                      </>
                    )}
                    {plan.price === 'Custom' && (
                      <span className="text-5xl font-bold text-navy">Custom</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-coral flex-shrink-0 mt-1" size={20} strokeWidth={2.5} />
                      <span className="text-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-coral text-white hover:bg-coral-dark shadow-lg'
                      : 'bg-beige text-navy hover:bg-navy hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-palmore text-5xl lg:text-6xl text-navy uppercase tracking-normal mb-6">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees. Get started immediately with your 14-day free trial.'
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, you can cancel your subscription at any time. No long-term contracts.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers.'
              },
              {
                q: 'Do you offer custom pricing for large operations?',
                a: 'Yes, our Enterprise plan includes custom pricing for multi-location restaurants and large-scale operations.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-beige rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {faq.q}
                </h3>
                <p className="text-navy/70 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-palmore text-6xl lg:text-7xl text-white uppercase tracking-normal mb-8">
              Still Have Questions?
            </h2>
            <p className="text-2xl text-white/70 font-light mb-12">
              Our team is here to help you find the perfect plan
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-coral text-white font-semibold rounded-full hover:bg-coral-dark transition-all text-lg"
            >
              Talk to Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
