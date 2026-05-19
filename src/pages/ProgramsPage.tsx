import { programs } from '../data/site'
import { PageHero } from '../components/layout/PageHero'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Programs that create lasting change"
        subtitle="Each initiative addresses a real need with measurable outcomes."
        cta={{ label: 'Support our work', to: '/donate' }}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {programs.map((program, i) => (
            <Card key={program.id} className="overflow-hidden p-0">
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="min-h-[200px] bg-gradient-to-br from-primary/25 to-primary/5 lg:min-h-[280px]" />
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-ink">{program.title}</h2>
                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="font-semibold text-primary">The problem</dt>
                      <dd className="mt-1 text-muted">{program.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary">What we do</dt>
                      <dd className="mt-1 text-muted">{program.action}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary">Impact</dt>
                      <dd className="mt-1 text-muted">{program.impact}</dd>
                    </div>
                  </dl>
                  <div className="mt-6">
                    <ProgressBar raised={program.raised} goal={program.goal} label="Fundraising progress" />
                  </div>
                  <Button to="/donate" className="mt-6" size="sm">
                    Support {program.title}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-warm-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeading
            light
            title="Not sure where to give?"
            subtitle="General fund donations let us respond fastest where need is greatest."
          />
          <Button to="/donate" variant="secondary" size="lg">
            Give to general fund
          </Button>
        </div>
      </section>
    </>
  )
}
