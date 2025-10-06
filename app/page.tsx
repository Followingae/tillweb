import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import HorizontalScroll from './components/sections/HorizontalScroll'
import DeviceShowcase from './components/sections/DeviceShowcase'
import ProductShowcase from './components/sections/ProductShowcase'
import IndustryBadges from './components/sections/IndustryBadges'
import AIIntelligence from './components/sections/AIIntelligence'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <main className="relative bg-cream">
      <Navigation />
      <Hero />
      <HorizontalScroll />
      <DeviceShowcase />
      <ProductShowcase />
      <IndustryBadges />
      <AIIntelligence />
      <Footer />
    </main>
  )
}
