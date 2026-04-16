import { Article } from './types'
import { categories, getCategoryBySlug } from './categories'
import { posGuides } from './articles/pos-guides'
import { ordersGuides } from './articles/orders-guides'
import { catalogGuides } from './articles/catalog-guides'
import { kitchenGuides } from './articles/kitchen-guides'
import { tablesGuides } from './articles/tables-guides'
import { shiftsGuides } from './articles/shifts-guides'
import { customersGuides } from './articles/customers-guides'
import { reportsGuides } from './articles/reports-guides'
import { settingsGuides } from './articles/settings-guides'
import { discountsGuides } from './articles/discounts-guides'
import { inventoryGuides } from './articles/inventory-guides'
import { usersGuides } from './articles/users-guides'
import { purchasesGuides } from './articles/purchases-guides'

// Article registry - all guides from researchers
const allArticles: Article[] = [
  ...posGuides,
  ...ordersGuides,
  ...catalogGuides,
  ...kitchenGuides,
  ...tablesGuides,
  ...shiftsGuides,
  ...customersGuides,
  ...reportsGuides,
  ...settingsGuides,
  ...discountsGuides,
  ...inventoryGuides,
  ...usersGuides,
  ...purchasesGuides,
]

export function getArticlesByCategorySlug(categorySlug: string): Article[] {
  return allArticles.filter(a => a.categorySlug === categorySlug)
}

export function getArticleBySlug(categorySlug: string, slug: string): Article | undefined {
  return allArticles.find(a => a.categorySlug === categorySlug && a.slug === slug)
}

export function getFeaturedArticles(): Article[] {
  return allArticles.filter(a => a.featured)
}

export function getAllArticles(): Article[] {
  return allArticles
}

export function searchArticles(query: string): Article[] {
  const lower = query.toLowerCase()
  return allArticles.filter(a =>
    a.title.toLowerCase().includes(lower) ||
    a.description.toLowerCase().includes(lower) ||
    a.steps.some(s => s.title.toLowerCase().includes(lower) || s.description.toLowerCase().includes(lower))
  )
}

export function getCategoriesWithCounts() {
  return categories.map(cat => ({
    ...cat,
    articleCount: allArticles.filter(a => a.categorySlug === cat.slug).length
  }))
}

export function getRelatedArticles(article: Article): Article[] {
  if (!article.relatedSlugs || article.relatedSlugs.length === 0) return []
  return allArticles.filter(a => article.relatedSlugs!.includes(a.slug))
}

export { categories, getCategoryBySlug }
export type { Article } from './types'
