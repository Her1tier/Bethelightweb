import { team, values } from '../data/site'
import { PageHero } from '../components/layout/PageHero'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Lighting the way since day one"
        subtitle="Kubwabo Foundation exists to bring practical help and lasting hope to communities overlooked by traditional aid."
        cta={{ label: 'Get involved', to: '/contact' }}
      />

      <section className="py-20">
        <div className="site-container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-ink">Our story</h2>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Founded by community leaders who saw neighbors going without basics, Kubwabo Foundation
                started as a weekend food drive and grew into a multi-program NGO serving 28
                communities. We believe dignity is non-negotiable — aid should empower, not
                patronize.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Today we run food relief, education, health, and housing programs with full
                transparency. Every partner, volunteer, and donor is part of a movement to pass
                kindness forward.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 p-12 flex items-center justify-center min-h-[280px]">
              <p className="text-2xl font-bold text-primary text-center">
                &ldquo;Change the world one donation at a time.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-20">
        <div className="site-container">
          <SectionHeading title="Mission & vision" align="left" />
          <div className="grid gap-8 md:grid-cols-2">
            <Card hover={false}>
              <h3 className="text-xl font-bold text-primary">Mission</h3>
              <p className="mt-3 text-ink/70">
                Deliver immediate relief and long-term opportunity to underserved communities
                through food, education, health, and shelter programs — with transparency and
                dignity at the center.
              </p>
            </Card>
            <Card hover={false}>
              <h3 className="text-xl font-bold text-primary">Vision</h3>
              <p className="mt-3 text-ink/70">
                A world where no family goes hungry, no child is denied education, and every
                community has the resources to thrive on its own terms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <SectionHeading eyebrow="Values" title="What we stand for" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-20">
        <div className="site-container">
          <SectionHeading eyebrow="Team" title="Leadership" subtitle="Placeholder bios — replace with real team content." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-primary/20" />
                <h3 className="font-semibold text-ink">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            title="Trust & credibility"
            subtitle="Registered nonprofit · Annual impact reports · Partner-verified programs · Secure donations"
          />
          <div className="flex flex-wrap justify-center gap-6 text-sm text-ink/70">
            <span className="rounded-full border border-ink/15 px-4 py-2">501(c)(3) placeholder</span>
            <span className="rounded-full border border-ink/15 px-4 py-2">GuideStar profile</span>
            <span className="rounded-full border border-ink/15 px-4 py-2">Annual report 2025</span>
          </div>
        </div>
      </section>
    </>
  )
}
