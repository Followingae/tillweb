'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations/variants'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface KBCategoryCardProps {
  slug: string
  name: string
  description: string
  icon: LucideIcon
  articleCount: number
}

export default function KBCategoryCard({ slug, name, description, icon: Icon, articleCount }: KBCategoryCardProps) {
  return (
    <Link href={`/knowledge-base/${slug}`}>
      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -4 }}
        className="group bg-white rounded-2xl p-6 border border-navy/5 hover:border-coral/20 hover:shadow-lg transition-all duration-300 h-full cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-coral" />
        </div>
        <h3 className="font-semibold text-navy text-lg mb-2 group-hover:text-coral transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-navy/60 leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>
        <span className="text-xs text-navy/40 font-medium">
          {articleCount} {articleCount === 1 ? 'article' : 'articles'}
        </span>
      </motion.div>
    </Link>
  )
}
