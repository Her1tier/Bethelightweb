import { Link } from 'react-router-dom'
import { site } from '../../data/site'

const STORY_IMAGE =
  'https://images.unsplash.com/flagged/photo-1579210504744-6b283eddf3ac?auto=format&fit=crop&w=1600&q=85'

export function AboutProgramsSection() {
  return (
    <section id="our-story" className="relative w-full overflow-hidden bg-black">
      <div className="site-container relative z-10 grid grid-cols-1 lg:min-h-[91vh] lg:max-h-dvh lg:grid-cols-2 lg:items-stretch lg:gap-14">
        <div className="relative flex flex-col justify-center gap-6 py-14 pb-20 sm:py-16 sm:pb-24 lg:py-20 lg:pb-24">
          <div>
            <span className="inline-flex bg-accent px-4 py-1.5 text-sm font-semibold text-ink">
              Our Story
            </span>
            <h2 className="mt-5 max-w-md text-3xl font-bold leading-[1.15] tracking-tight text-warm-white sm:text-4xl lg:text-5xl">
              It Started With a Visit and a Promise.
            </h2>
          </div>

          <p className="text-base leading-relaxed text-warm-white/70 sm:text-lg">
            {site.name} began when a small group of friends visited a rural
            community and saw children studying by candlelight. They didn&apos;t
            have much but they promised to return. That promise grew into a
            movement — focused on food relief, education, health, and housing
            where need is greatest.
          </p>
          <Link
            to="/about"
            className="inline-flex min-w-[7.5rem] w-fit items-center justify-center border border-warm-white bg-warm-white px-6 py-2 text-sm font-medium leading-normal text-ink transition-colors hover:bg-transparent hover:text-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Read The Full Story
          </Link>

          {/* Mobile / stacked: pattern under text column only */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] -left-4 bg-[length:300px_60px] bg-repeat-x bg-bottom sm:-left-6 lg:hidden"
            style={{ backgroundImage: 'url(/pattern1.svg)' }}
          />
        </div>

        <div className="relative z-10 min-h-[18rem] sm:min-h-[22rem] lg:min-h-0">
          <img
            src={STORY_IMAGE}
            alt="Boy wearing a beige and yellow striped polo shirt"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Desktop: full-bleed left to image edge (50vw + half of gap-14) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-[1] hidden h-[60px] w-[calc(50vw+1.75rem)] bg-[length:300px_60px] bg-repeat-x bg-bottom lg:block"
        style={{ backgroundImage: 'url(/pattern1.svg)' }}
      />
    </section>
  )
}
