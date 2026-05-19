import { DonationForm } from '../components/donation/DonationForm'
import { PageHero } from '../components/layout/PageHero'
import { Card } from '../components/ui/Card'

export function DonatePage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Give"
        title="Your gift lights the way"
        subtitle="100% directed to programs. Secure, transparent, and tax-deductible (where applicable)."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <DonationForm />
            </Card>
          </div>
          <aside className="space-y-6">
            <Card hover={false}>
              <h3 className="text-lg font-bold text-ink">Why give?</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>✓ Registered nonprofit (placeholder)</li>
                <li>✓ Annual impact reports published</li>
                <li>✓ Low overhead — programs first</li>
                <li>✓ Monthly giving option available</li>
              </ul>
            </Card>
            <Card hover={false}>
              <h3 className="text-lg font-bold text-ink">Other ways to give</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Corporate matching</li>
                <li>Legacy / planned giving</li>
                <li>In-kind donations</li>
                <li>Fundraise on our behalf</li>
              </ul>
            </Card>
          </aside>
        </div>
      </section>
    </>
  )
}
