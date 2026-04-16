'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations/variants'
import KBSearchBar from './KBSearchBar'

export default function KBHero() {
  return (
    <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative max-w-[800px] mx-auto px-8 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block text-sm font-medium text-coral uppercase tracking-wider mb-4"
        >
          Knowledge Base
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="font-palmore text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-normal mb-6"
        >
          How can we help?
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/60 font-light mb-10 max-w-lg mx-auto"
        >
          Find step-by-step guides, tips, and tutorials for every feature in Till CloudPOS.
        </motion.p>

        <motion.div variants={fadeInUp} className="max-w-xl mx-auto">
          <KBSearchBar large />
        </motion.div>
      </motion.div>
    </section>
  )
}
