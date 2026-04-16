'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { searchArticles } from '@/lib/knowledge-base'
import { Article } from '@/lib/knowledge-base/types'

interface KBSearchBarProps {
  large?: boolean
}

export default function KBSearchBar({ large = false }: KBSearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Article[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchArticles(query).slice(0, 5))
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="relative w-full">
      <div
        className={`flex items-center gap-3 bg-white rounded-full border-2 transition-colors duration-200 ${
          isFocused ? 'border-coral' : 'border-navy/10'
        } ${large ? 'px-6 py-4' : 'px-4 py-3'}`}
      >
        <Search className={`text-navy/40 flex-shrink-0 ${large ? 'w-6 h-6' : 'w-5 h-5'}`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search guides and articles..."
          className={`w-full bg-transparent outline-none text-navy placeholder:text-navy/40 ${
            large ? 'text-lg' : 'text-base'
          }`}
        />
        {query && (
          <button
            onClick={() => { setQuery(''); inputRef.current?.focus() }}
            className="text-navy/40 hover:text-navy transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isFocused && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-navy/5 overflow-hidden z-50"
          >
            {results.map((article) => (
              <Link
                key={`${article.categorySlug}-${article.slug}`}
                href={`/knowledge-base/${article.categorySlug}/${article.slug}`}
              >
                <div className="px-5 py-3.5 hover:bg-coral/5 transition-colors border-b border-navy/5 last:border-0">
                  <p className="text-sm font-medium text-navy">{article.title}</p>
                  <p className="text-xs text-navy/50 mt-0.5 line-clamp-1">{article.description}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
