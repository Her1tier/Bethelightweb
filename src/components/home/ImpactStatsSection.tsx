import { impactStats } from '../../data/site'

export function ImpactStatsSection() {
  return (
    <section className="bg-warm-white">
      <div className="site-container py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-14 lg:grid-cols-4 lg:gap-10">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 text-base font-medium uppercase tracking-[0.14em] text-primary/80 sm:mt-4 sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
