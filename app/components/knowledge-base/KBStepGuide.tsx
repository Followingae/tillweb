'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations/variants'
import { Step, Tip } from '@/lib/knowledge-base/types'
import { Lightbulb } from 'lucide-react'

interface KBStepGuideProps {
  steps: Step[]
  tips?: Tip[]
}

export default function KBStepGuide({ steps, tips }: KBStepGuideProps) {
  return (
    <div>
      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {steps.map((step, i) => (
          <motion.li
            key={i}
            id={`step-${i + 1}`}
            variants={fadeInUp}
            className="scroll-mt-32"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-navy/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>

      {tips && tips.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-golden/10 border border-golden/20 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-golden" />
            <h4 className="font-semibold text-navy">Tips</h4>
          </div>
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i}>
                <p className="text-sm font-medium text-navy">{tip.title}</p>
                <p className="text-sm text-navy/60 mt-0.5">{tip.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}
