import { impactStats } from '../../data/site'

const IMPACT_BG =
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=80'

export function ImpactStatsSection() {
  return (
    <section className="relative overflow-hidden border-b border-primary/20">
      <div className="absolute inset-0" aria-hidden>
        <img
          src={IMPACT_BG}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#013333]/78" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-14 lg:grid-cols-4 lg:gap-10">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-bold tracking-tight text-warm-white sm:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 text-base font-medium uppercase tracking-[0.14em] text-warm-white/85 sm:mt-4 sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
