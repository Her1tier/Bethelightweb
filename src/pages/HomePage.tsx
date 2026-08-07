import { HeroSection } from '../components/home/HeroSection'
import { AboutProgramsSection } from '../components/home/AboutProgramsSection'
import { ImpactStatsSection } from '../components/home/ImpactStatsSection'
import { HomeNewsSection } from '../components/home/HomeNewsSection'
import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { HomeNewsletterSection } from '../components/home/HomeNewsletterSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutProgramsSection />

      <ImpactStatsSection />

      <HomeCtaSection />

      <HomeNewsSection />

      <HomeNewsletterSection />
    </>
  )
}
