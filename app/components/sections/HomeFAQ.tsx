'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, HelpCircle } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const faqs = [
  {
    question: 'What is Till?',
    answer:
      'Till is a complete CloudPOS platform that runs on Feitian RFM Loyalty Android payment terminals. It combines POS, kitchen management, inventory, CRM, analytics, and payments into one unified system.',
  },
  {
    question: 'What devices does Till run on?',
    answer:
      'Till runs natively on Feitian RFM Loyalty Android payment terminals. The dashboard works on any web browser. QR ordering works on any smartphone.',
  },
  {
    question: 'Does Till work offline?',
    answer:
      'Yes. The Android POS app has full offline capability \u2014 take orders, process cash payments, and manage your restaurant even without internet. Data syncs automatically when reconnected.',
  },
  {
    question: 'Can I manage multiple locations?',
    answer:
      'Yes. Till\u2019s dashboard provides centralized control over all branches \u2014 inventory, menus, staff, reports, and settings \u2014 all from one place.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'Cash, card (via SmartPay/Feitian ECR), split payments (by items, amount, or guests), and tips. All synced with your sales reports.',
  },
  {
    question: 'How does QR ordering work?',
    answer:
      'Each table gets a unique QR code. Customers scan it, browse your menu, customize items, place orders, and pay \u2014 all from their phone.',
  },
  {
    question: 'Is there a Kitchen Display System?',
    answer:
      'Yes. Real-time station-based order routing, cook time tracking, priority management, Smart 86 (ingredient-level holds), and multi-course support.',
  },
  {
    question: 'What reporting is available?',
    answer:
      '20+ report types: sales, inventory, staff performance, tax, customer analytics, COGS, menu mix, commission, shift reports, Z-reports, and more.',
  },
  {
    question: 'Who is RFM Loyalty?',
    answer:
      'RFM Loyalty is Till\u2019s parent company \u2014 a UAE payment infrastructure leader with 25,000+ terminals, 20,000+ merchants, and 15+ years of experience.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Request a demo and our team will walk you through the platform. We offer a 14-day free trial with full access to all features.',
  },
]

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="faq-item"
    >
      <div
        className={`bg-white rounded-2xl border transition-all duration-400 ${
          isOpen
            ? 'shadow-lg shadow-coral/5 border-coral/20'
            : 'shadow-sm border-navy/5 hover:border-navy/15 hover:shadow-md'
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-7 lg:p-8 text-left group"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-4 pr-4">
            <span className="text-xs font-semibold text-navy/20 tabular-nums min-w-[24px]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3
              className={`font-semibold text-lg transition-colors duration-300 ${
                isOpen ? 'text-coral' : 'text-navy group-hover:text-navy/80'
              }`}
            >
              {faq.question}
            </h3>
          </div>
          <div
            className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-400 ${
              isOpen ? 'bg-coral text-white rotate-180' : 'bg-navy/5 text-navy/40 group-hover:bg-navy/10'
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-7 lg:px-8 pb-7 lg:pb-8">
                <div className="pl-10 border-l-2 border-coral/15">
                  <p className="text-navy/60 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-gradient-to-b from-cream to-beige overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-coral/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-golden/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[900px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="faq-header text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-navy/20" />
            <HelpCircle className="w-5 h-5 text-navy/30" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-navy/20" />
          </div>
          <h2 className="font-palmore text-5xl lg:text-7xl text-navy uppercase tracking-normal leading-[0.95] mb-6">
            Frequently Asked<br />Questions
          </h2>
          <p className="text-xl text-navy/60 font-light max-w-lg mx-auto leading-relaxed">
            Everything you need to know about Till
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-navy/50 text-sm mb-4">Still have questions?</p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-coral text-white rounded-full font-medium hover:bg-coral-dark transition-all duration-300 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30">
            <span>Contact Our Team</span>
            <div className="w-6 h-px bg-white/60 group-hover:w-10 transition-all duration-400" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
