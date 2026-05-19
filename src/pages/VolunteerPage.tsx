import { useState, type FormEvent } from 'react'
import { volunteerRoles } from '../data/site'
import { PageHero } from '../components/layout/PageHero'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'

export function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Join 340+ people making a difference"
        subtitle="Whether you have 2 hours or 20, there's a role for you."
        cta={{ label: 'See roles below', to: '#roles' }}
      />

      <section id="roles" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Open roles" subtitle="Flexible commitments. Training provided." />
          <div className="grid gap-6 md:grid-cols-2">
            {volunteerRoles.map((role) => (
              <Card key={role.title}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-ink">{role.title}</h3>
                  <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {role.commitment}
                  </span>
                </div>
                <p className="mt-3 text-muted">{role.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading align="left" title="Sign up" subtitle="We'll reach out within 3 business days." />
              {submitted ? (
                <Card hover={false} className="bg-primary/5">
                  <p className="font-semibold text-primary">Application received!</p>
                  <p className="mt-2 text-muted">Thanks for wanting to volunteer. Our team will be in touch soon.</p>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-muted">Full name *</span>
                    <input required className="mt-1 w-full rounded-xl border border-sand px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-muted">Email *</span>
                    <input type="email" required className="mt-1 w-full rounded-xl border border-sand px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-muted">Preferred role</span>
                    <select className="mt-1 w-full rounded-xl border border-sand px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                      {volunteerRoles.map((r) => (
                        <option key={r.title}>{r.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-muted">Why do you want to volunteer?</span>
                    <textarea rows={4} className="mt-1 w-full rounded-xl border border-sand px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <Button type="submit" size="lg">Submit application</Button>
                </form>
              )}
            </div>
            <div>
              <SectionHeading align="left" title="What to expect" />
              <ul className="space-y-4 text-muted">
                <li className="flex gap-3"><span className="text-primary">1.</span> Orientation session (1 hr)</li>
                <li className="flex gap-3"><span className="text-primary">2.</span> Background check for certain roles</li>
                <li className="flex gap-3"><span className="text-primary">3.</span> Flexible scheduling via our portal (Phase 2)</li>
                <li className="flex gap-3"><span className="text-primary">4.</span> Community and impact updates</li>
              </ul>
              <div className="mt-8 rounded-2xl bg-sand/40 p-6">
                <h4 className="font-semibold text-ink">FAQ</h4>
                <p className="mt-2 text-sm text-muted"><strong>Min age?</strong> 16 with guardian consent; 18+ for all roles.</p>
                <p className="mt-2 text-sm text-muted"><strong>Remote?</strong> Admin & outreach roles available remotely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
