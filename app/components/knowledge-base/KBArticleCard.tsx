'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations/variants'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface KBArticleCardProps {
  slug: string
  categorySlug: string
  categoryName: string
  title: string
  description: string
}

export default function KBArticleCard({ slug, categorySlug, categoryName, title, description }: KBArticleCardProps) {
  return (
    <Link href={`/knowledge-base/${categorySlug}/${slug}`}>
      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -2 }}
        className="group bg-white rounded-2xl p-6 border border-navy/5 hover:border-coral/20 hover:shadow-md transition-all duration-300 h-full cursor-pointer"
      >
        <span className="inline-block text-xs font-medium text-coral bg-coral/10 px-2.5 py-1 rounded-full mb-3">
          {categoryName}
        </span>
        <h3 className="font-semibold text-navy mb-2 group-hover:text-coral transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-navy/60 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read guide
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.div>
    </Link>
  )
}
