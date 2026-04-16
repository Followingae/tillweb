'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/sections/Footer'
import KBHero from '../components/knowledge-base/KBHero'
import KBCategoryCard from '../components/knowledge-base/KBCategoryCard'
import KBArticleCard from '../components/knowledge-base/KBArticleCard'
import { getCategoriesWithCounts, getFeaturedArticles } from '@/lib/knowledge-base'
import { getCategoryBySlug } from '@/lib/knowledge-base/categories'

export default function KnowledgeBasePage() {
  const categoriesWithCounts = getCategoriesWithCounts()
  const featuredArticles = getFeaturedArticles()

  return (
    <main className="relative bg-beige">
      <Navigation />
      <KBHero />

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={fadeInUp} className="mb-10">
              <h2 className="font-palmore text-3xl md:text-4xl text-navy uppercase tracking-normal">
                Browse by Category
              </h2>
              <p className="text-navy/60 mt-2">
                Explore guides organized by feature area.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {categoriesWithCounts.map(cat => (
                <KBCategoryCard
                  key={cat.slug}
                  slug={cat.slug}
                  name={cat.name}
                  description={cat.description}
                  icon={cat.icon}
                  articleCount={cat.articleCount}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-white border-t border-navy/5">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div variants={fadeInUp} className="mb-10">
                <h2 className="font-palmore text-3xl md:text-4xl text-navy uppercase tracking-normal">
                  Popular Guides
                </h2>
                <p className="text-navy/60 mt-2">
                  The most-read articles to get you started quickly.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredArticles.slice(0, 6).map(article => {
                  const cat = getCategoryBySlug(article.categorySlug)
                  return (
                    <KBArticleCard
                      key={`${article.categorySlug}-${article.slug}`}
                      slug={article.slug}
                      categorySlug={article.categorySlug}
                      categoryName={cat?.name ?? article.categorySlug}
                      title={article.title}
                      description={article.description}
                    />
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
