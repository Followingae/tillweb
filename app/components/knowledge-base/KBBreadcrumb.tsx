'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface KBBreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function KBBreadcrumb({ items }: KBBreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-navy/50 flex-wrap">
      <Link href="/knowledge-base" className="hover:text-coral transition-colors">
        Knowledge Base
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5" />
          {item.href ? (
            <Link href={item.href} className="hover:text-coral transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-navy font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
