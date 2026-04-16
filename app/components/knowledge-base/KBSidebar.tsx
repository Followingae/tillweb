'use client'

import Link from 'next/link'
import { categories } from '@/lib/knowledge-base/categories'
import { Step } from '@/lib/knowledge-base/types'

interface KBSidebarCategoriesProps {
  mode: 'categories'
  currentCategorySlug?: string
}

interface KBSidebarTOCProps {
  mode: 'toc'
  steps: Step[]
}

type KBSidebarProps = KBSidebarCategoriesProps | KBSidebarTOCProps

export default function KBSidebar(props: KBSidebarProps) {
  if (props.mode === 'toc') {
    return (
      <aside className="sticky top-32">
        <div className="bg-white rounded-2xl border border-navy/5 p-5">
          <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
            In this Article
          </h4>
          <ol className="space-y-2">
            {props.steps.map((step, i) => (
              <li key={i}>
                <a
                  href={`#step-${i + 1}`}
                  className="flex items-start gap-2.5 text-sm text-navy/60 hover:text-coral transition-colors group"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy/5 group-hover:bg-coral/10 flex items-center justify-center text-xs font-medium text-navy/40 group-hover:text-coral transition-colors mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-snug">{step.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    )
  }

  return (
    <aside className="sticky top-32">
      <div className="bg-white rounded-2xl border border-navy/5 p-5">
        <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
          Categories
        </h4>
        <ul className="space-y-1">
          {categories.map(cat => {
            const Icon = cat.icon
            const isActive = props.currentCategorySlug === cat.slug
            return (
              <li key={cat.slug}>
                <Link
                  href={`/knowledge-base/${cat.slug}`}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-coral/10 text-coral font-medium'
                      : 'text-navy/60 hover:text-navy hover:bg-navy/5'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {cat.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
