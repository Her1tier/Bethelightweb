import { Link } from 'react-router-dom'
import { PageHero } from '../components/layout/PageHero'

export function ForTheParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="For Their Family"
        subtitle="Support for caregivers — so parents can rebuild stability for their families."
        cta={{ label: 'Contact us', to: '/contact' }}
        compact
      />

      <section className="bg-warm-white py-16 lg:py-20">
        <div className="site-container max-w-3xl">
          <p className="text-base leading-relaxed text-ink/75 sm:text-lg">
            For Their Family focuses on the adults holding families together:
            food relief, skills workshops, and connections to housing and health
            resources. When parents are steadier, children thrive.
          </p>
          <ul className="mt-8 list-disc space-y-2 pl-5 text-base text-ink/75 sm:text-lg">
            <li>Emergency food and household essentials</li>
            <li>Caregiver peer groups and guidance</li>
            <li>Referrals for work, housing, and health</li>
            <li>Tools that protect dignity and independence</li>
          </ul>
          <div className="mt-10">
            <Link
              to="/programs/every-kid-deserves-it"
              className="inline-flex min-w-[7.5rem] items-center justify-center border border-ink px-6 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-primary hover:text-warm-white"
            >
              See Every Child Deserves It
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
