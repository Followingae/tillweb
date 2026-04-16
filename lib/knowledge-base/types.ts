import { LucideIcon } from 'lucide-react'

export interface Step {
  title: string
  description: string
  image?: string
}

export interface Tip {
  title: string
  description: string
}

export interface Article {
  slug: string
  categorySlug: string
  title: string
  description: string
  steps: Step[]
  tips?: Tip[]
  relatedSlugs?: string[]
  featured?: boolean
}

export interface Category {
  slug: string
  name: string
  description: string
  icon: LucideIcon
  articleSlugs: string[]
}
