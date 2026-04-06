import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import HorizontalScroll from './components/sections/HorizontalScroll'
import DeviceShowcase from './components/sections/DeviceShowcase'
import ProductShowcase from './components/sections/ProductShowcase'
import Testimonials from './components/sections/Testimonials'
import IndustryBadges from './components/sections/IndustryBadges'
import RestaurantTypes from './components/sections/RestaurantTypes'
import AIIntelligence from './components/sections/AIIntelligence'
import WhyTill from './components/sections/WhyTill'
import RFMPartner from './components/sections/RFMPartner'
import HomeFAQ from './components/sections/HomeFAQ'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <main className="relative bg-cream">
      <Navigation />
      <Hero />
      <HorizontalScroll />
      <DeviceShowcase />
      <ProductShowcase />
      <Testimonials />
      <IndustryBadges />
      <RestaurantTypes />
      <AIIntelligence />
      <WhyTill />
      <RFMPartner />
      <HomeFAQ />
      <Footer />
    </main>
  )
}
