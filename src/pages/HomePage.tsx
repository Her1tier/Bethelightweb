import { HeroSection } from '../components/home/HeroSection'
import { AboutProgramsSection } from '../components/home/AboutProgramsSection'
import { ImpactStatsSection } from '../components/home/ImpactStatsSection'
import { HomeNewsSection } from '../components/home/HomeNewsSection'
import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { FlowArt, FlowSection } from '../components/flow'
import { Button } from '../components/ui/Button'

export function HomePage() {
  return (
    <>
      <FlowArt aria-label="Home story scroll">
        <FlowSection
          aria-label="Hero"
          innerClassName="min-h-screen flex-col justify-start gap-0"
        >
          <HeroSection />
        </FlowSection>
        <FlowSection
          aria-label="About and programs"
          innerClassName="min-h-screen flex-col justify-start gap-0 bg-warm-white"
        >
          <AboutProgramsSection />
        </FlowSection>
      </FlowArt>

      <ImpactStatsSection />

      <HomeNewsSection />

      <section className="border-t border-primary/20 bg-primary py-20">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-warm-white">Subscribe to our newsletter</h2>
          <p className="mt-2 text-warm-white/85">Impact stories, events, and ways to help — monthly.</p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="flex-1 rounded-full border border-warm-white/30 bg-white px-5 py-3 text-ink placeholder:text-muted focus:border-warm-white focus:outline-none focus:ring-2 focus:ring-warm-white/40"
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <HomeCtaSection />
    </>
  )
}
