import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { PageHero } from '../components/layout/PageHero'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        compact
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Partnerships, press, volunteering, or general questions."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Card className="p-8">
            {sent ? (
              <p className="text-primary font-semibold">Message sent! We'll respond within 2 business days.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-muted">Name *</span>
                  <input required className="mt-1 w-full rounded-xl border border-sand px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-muted">Email *</span>
                  <input type="email" required className="mt-1 w-full rounded-xl border border-sand px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-muted">Subject</span>
                  <input className="mt-1 w-full rounded-xl border border-sand px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-muted">Message *</span>
                  <textarea required rows={5} className="mt-1 w-full rounded-xl border border-sand px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </label>
                <Button type="submit" size="lg">Send message</Button>
              </form>
            )}
          </Card>

          <div className="space-y-6">
            <Card hover={false}>
              <h3 className="text-lg font-bold">Our info</h3>
              <ul className="mt-4 space-y-2 text-muted">
                <li>{site.phone}</li>
                <li>
                  <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>{site.address}</li>
              </ul>
            </Card>
            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-sand bg-sand/20 text-muted">
              Map placeholder — embed Google Maps in Phase 2
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
