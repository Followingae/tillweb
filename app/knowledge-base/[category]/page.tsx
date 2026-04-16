'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import Navigation from '../../components/layout/Navigation'
import Footer from '../../components/sections/Footer'
import KBBreadcrumb from '../../components/knowledge-base/KBBreadcrumb'
import KBArticleCard from '../../components/knowledge-base/KBArticleCard'
import KBSidebar from '../../components/knowledge-base/KBSidebar'
import KBSearchBar from '../../components/knowledge-base/KBSearchBar'
import { getCategoryBySlug } from '@/lib/knowledge-base/categories'
import { getArticlesByCategorySlug } from '@/lib/knowledge-base'

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.category as string
  const category = getCategoryBySlug(categorySlug)
  const articles = getArticlesByCategorySlug(categorySlug)

  if (!category) {
    return (
      <main className="relative bg-beige">
        <Navigation />
        <div className="pt-40 pb-20 text-center">
          <h1 className="font-palmore text-4xl text-navy uppercase">Category not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  const Icon = category.icon

  return (
    <main className="relative bg-beige">
      <Navigation />

      {/* Category Header */}
      <section className="pt-36 pb-12 bg-navy">
        <div className="max-w-[1200px] mx-auto px-8">
          <KBBreadcrumb items={[{ label: category.name }]} />

          <div className="mt-6 flex items-start gap-5">
            <div className="w-14 h-14 rounded-xl bg-coral/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-coral" />
            </div>
            <div>
              <h1 className="font-palmore text-3xl md:text-4xl text-white uppercase tracking-normal">
                {category.name}
              </h1>
              <p className="text-white/60 mt-2 max-w-xl">
                {category.description}
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-md">
            <KBSearchBar />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Article Grid */}
            <div className="flex-1 min-w-0">
              {articles.length > 0 ? (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  {articles.map(article => (
                    <KBArticleCard
                      key={article.slug}
                      slug={article.slug}
                      categorySlug={article.categorySlug}
                      categoryName={category.name}
                      title={article.title}
                      description={article.description}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-navy/5 p-12 text-center"
                >
                  <Icon className="w-12 h-12 text-navy/20 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Guides coming soon
                  </h3>
                  <p className="text-navy/50 text-sm">
                    We are working on detailed guides for {category.name}. Check back shortly.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <KBSidebar mode="categories" currentCategorySlug={categorySlug} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
