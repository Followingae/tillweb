'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Minus, ChevronDown, Sparkles } from 'lucide-react'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Feature comparison matrix data
const featureCategories = [
  {
    category: 'Core',
    features: [
      { name: 'Terminals', starter: 'Up to 2', professional: 'Up to 10', enterprise: 'Unlimited' },
      { name: 'POS System', starter: true, professional: true, enterprise: true },
      { name: 'Payment Processing', starter: true, professional: true, enterprise: true },
      { name: 'Basic Reporting', starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Operations',
    features: [
      { name: 'Kitchen Display (KDS)', starter: false, professional: true, enterprise: true },
      { name: 'Inventory Management', starter: false, professional: true, enterprise: true },
      { name: 'QR Ordering', starter: false, professional: true, enterprise: true },
      { name: 'Self-Ordering Kiosk', starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Growth',
    features: [
      { name: 'CRM & Loyalty', starter: false, professional: true, enterprise: true },
      { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
      { name: 'Multi-Location Mgmt', starter: false, professional: false, enterprise: true },
      { name: 'Custom Integrations', starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: 'Support & Enterprise',
    features: [
      { name: 'Dedicated Account Mgr', starter: false, professional: false, enterprise: true },
      { name: 'API Access', starter: false, professional: false, enterprise: true },
      { name: 'White-Label Options', starter: false, professional: false, enterprise: true },
      { name: '24/7 Phone Support', starter: false, professional: false, enterprise: true },
      { name: 'SLA Guarantee', starter: false, professional: false, enterprise: true },
    ],
  },
]

const faqs = [
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees. Get started immediately with your 14-day free trial.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, you can cancel your subscription at any time. No long-term contracts.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers.',
  },
  {
    q: 'Do you offer custom pricing for large operations?',
    a: 'Yes, our Enterprise plan includes custom pricing for multi-location restaurants and large-scale operations.',
  },
  {
    q: 'What devices do I need?',
    a: 'Till runs on Feitian RFM Loyalty Android payment terminals. No separate POS hardware needed. Dashboard works on any browser.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, 14-day free trial with full access to all features. No credit card required.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Yes, upgrade anytime. Your data and settings transfer seamlessly to the new plan.',
  },
  {
    q: 'What support is included?',
    a: 'Starter includes email support. Professional includes priority support. Enterprise includes 24/7 phone support with a dedicated account manager.',
  },
  {
    q: 'Do you offer multi-location discounts?',
    a: 'Yes, Enterprise plan includes custom pricing for multi-location operations. Contact sales for details.',
  },
  {
    q: 'What integrations are included?',
    a: 'All plans include SmartPay payment processing. Professional adds Zoho Books accounting. Enterprise adds custom integrations and API access.',
  },
]

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-navy font-medium text-sm">{value}</span>
  }
  if (value) {
    return (
      <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center mx-auto">
        <Check className="w-3.5 h-3.5 text-coral" strokeWidth={3} />
      </div>
    )
  }
  return (
    <div className="w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center mx-auto">
      <Minus className="w-3.5 h-3.5 text-navy/20" strokeWidth={2} />
    </div>
  )
}

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-beige rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
      >
        <h3 className="text-lg md:text-xl font-semibold text-navy pr-4 group-hover:text-coral transition-colors">
          {faq.q}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-navy/40 flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 md:px-8 pb-6 md:pb-8 text-navy/70 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </motion.div>
  )
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const tableRef = useRef<HTMLDivElement>(null)

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
        delay: 0.5,
      }
    )

    // Animate feature comparison table rows
    if (tableRef.current) {
      const rows = tableRef.current.querySelectorAll('tr')
      gsap.from(rows, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top center+=100',
        },
      })
    }
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
      popular: false,
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
      popular: true,
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
      popular: false,
    },
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

      {/* Free Trial Banner */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-coral via-coral to-coral-dark py-5 md:py-6">
          <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-white/90" />
              <p className="text-white font-semibold text-base md:text-lg text-center">
                Start your 14-day free trial — no credit card required
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-white text-coral font-semibold rounded-full hover:bg-white/90 transition-all text-sm shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Get Started Free
            </Link>
          </div>
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

      {/* Feature Comparison Matrix */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-navy/15" />
              <span className="text-xs uppercase tracking-[0.3em] text-navy/40 font-medium">
                Detailed Breakdown
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-navy/15" />
            </div>
            <h2 className="font-palmore text-5xl lg:text-6xl text-navy uppercase tracking-normal mb-6">
              Compare Plans
            </h2>
            <p className="text-lg text-navy/60 font-light max-w-xl mx-auto">
              Every feature across every plan — find the perfect fit for your operation
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto -mx-4 px-4 pb-4" ref={tableRef}>
            <table className="w-full min-w-[640px]">
              {/* Sticky header */}
              <thead>
                <tr>
                  <th className="sticky top-0 bg-white z-10 text-left py-4 pr-4 w-[40%]">
                    <span className="text-sm font-medium text-navy/40 uppercase tracking-wider">Feature</span>
                  </th>
                  <th className="sticky top-0 bg-white z-10 text-center py-4 px-4 w-[20%]">
                    <span className="text-sm font-semibold text-navy uppercase tracking-wider">Starter</span>
                  </th>
                  <th className="sticky top-0 bg-white z-10 text-center py-4 px-4 w-[20%]">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xs text-coral font-semibold uppercase tracking-wider mb-1">Popular</span>
                      <span className="text-sm font-semibold text-navy uppercase tracking-wider">Professional</span>
                    </div>
                  </th>
                  <th className="sticky top-0 bg-white z-10 text-center py-4 pl-4 w-[20%]">
                    <span className="text-sm font-semibold text-navy uppercase tracking-wider">Enterprise</span>
                  </th>
                </tr>
                <tr>
                  <th colSpan={4} className="h-px bg-navy/10 p-0" />
                </tr>
              </thead>

              <tbody>
                {featureCategories.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    {/* Category header */}
                    <tr>
                      <td colSpan={4} className="pt-8 pb-3">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-coral">
                          {cat.category}
                        </span>
                      </td>
                    </tr>

                    {cat.features.map((feature, fIdx) => (
                      <tr
                        key={`${catIdx}-${fIdx}`}
                        className={`${
                          fIdx % 2 === 0 ? 'bg-beige/40' : 'bg-transparent'
                        } hover:bg-coral/[0.03] transition-colors`}
                      >
                        <td className="py-4 pr-4 pl-3 text-sm text-navy font-medium rounded-l-xl">
                          {feature.name}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <FeatureCell value={feature.starter} />
                        </td>
                        <td className="py-4 px-4 text-center bg-coral/[0.02]">
                          <FeatureCell value={feature.professional} />
                        </td>
                        <td className="py-4 pl-4 text-center rounded-r-xl">
                          <FeatureCell value={feature.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-gradient-to-b from-white to-beige/30">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-palmore text-5xl lg:text-6xl text-navy uppercase tracking-normal mb-6">
              Frequently Asked
            </h2>
            <p className="text-lg text-navy/50 font-light">
              Everything you need to know about Till pricing and plans
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
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
