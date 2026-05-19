import { Link } from 'react-router-dom'

const HERO_UNSPLASH =
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=85'

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HERO_UNSPLASH}
          alt="Group of children laughing together"
          referrerPolicy="no-referrer"
          className="h-full w-full min-h-full min-w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#013333]/55" aria-hidden />
      </div>

      <div className="relative mx-auto flex h-full min-h-screen max-w-7xl items-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 md:items-center">
          <div className="w-max max-w-full">
            <h1 className="flex flex-col uppercase text-warm-white">
              <span className="whitespace-nowrap text-[clamp(3rem,11vw,8.5rem)] font-bold leading-[0.82] tracking-[-0.02em]">
                Committed
              </span>
              <span className="whitespace-nowrap text-[clamp(3rem,11vw,8.5rem)] font-bold leading-[0.82] tracking-[-0.02em]">
                To Be the
              </span>
              <span className="whitespace-nowrap text-[clamp(3rem,11vw,8.5rem)] font-bold leading-[0.82] tracking-[-0.02em]">
                Light
              </span>
            </h1>

            <Link
              to="/programs"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-warm-white px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:mt-8"
            >
              How we help
              <span className="tracking-widest" aria-hidden>
                &gt;&gt;&gt;
              </span>
            </Link>
          </div>
          <div aria-hidden className="hidden md:block" />
        </div>
      </div>
    </div>
  )
}
