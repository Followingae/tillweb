'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations/variants'
import Navigation from '../../../components/layout/Navigation'
import Footer from '../../../components/sections/Footer'
import KBBreadcrumb from '../../../components/knowledge-base/KBBreadcrumb'
import KBSidebar from '../../../components/knowledge-base/KBSidebar'
import KBStepGuide from '../../../components/knowledge-base/KBStepGuide'
import KBArticleCard from '../../../components/knowledge-base/KBArticleCard'
import { getCategoryBySlug } from '@/lib/knowledge-base/categories'
import { getArticleBySlug, getRelatedArticles } from '@/lib/knowledge-base'

export default function ArticlePage() {
  const params = useParams()
  const categorySlug = params.category as string
  const slug = params.slug as string
  const category = getCategoryBySlug(categorySlug)
  const article = getArticleBySlug(categorySlug, slug)

  if (!category || !article) {
    return (
      <main className="relative bg-beige">
        <Navigation />
        <div className="pt-40 pb-20 text-center">
          <h1 className="font-palmore text-4xl text-navy uppercase">Article not found</h1>
          <p className="text-navy/60 mt-4">The article you are looking for does not exist.</p>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedArticles = getRelatedArticles(article)

  return (
    <main className="relative bg-beige">
      <Navigation />

      {/* Article Header */}
      <section className="pt-36 pb-10 bg-navy">
        <div className="max-w-[1200px] mx-auto px-8">
          <KBBreadcrumb
            items={[
              { label: category.name, href: `/knowledge-base/${category.slug}` },
              { label: article.title }
            ]}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-palmore text-3xl md:text-4xl text-white uppercase tracking-normal mt-6 max-w-3xl"
          >
            {article.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 mt-3 max-w-2xl text-lg font-light"
          >
            {article.description}
          </motion.p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* TOC Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0 order-2 lg:order-1">
              <KBSidebar mode="toc" steps={article.steps} />
            </div>

            {/* Main Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex-1 min-w-0 order-1 lg:order-2"
            >
              <div className="bg-white rounded-2xl border border-navy/5 p-8 md:p-10">
                <KBStepGuide steps={article.steps} tips={article.tips} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white border-t border-navy/5">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-palmore text-2xl md:text-3xl text-navy uppercase tracking-normal mb-8">
              Related Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedArticles.map(related => {
                const relCat = getCategoryBySlug(related.categorySlug)
                return (
                  <KBArticleCard
                    key={`${related.categorySlug}-${related.slug}`}
                    slug={related.slug}
                    categorySlug={related.categorySlug}
                    categoryName={relCat?.name ?? related.categorySlug}
                    title={related.title}
                    description={related.description}
                  />
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
