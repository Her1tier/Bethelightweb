import { stories } from '../data/site'
import { PageHero } from '../components/layout/PageHero'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'

export function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Latest news & impact"
        subtitle="Updates and stories from the communities we serve."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest updates" />
          <div className="grid gap-8 md:grid-cols-2">
            {stories.map((story) => (
              <Card key={story.id} className="flex flex-col">
                <img
                  src={story.image}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="mb-4 h-48 w-full rounded-xl object-cover"
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {story.category}
                </span>
                <time className="mt-1 text-sm text-muted" dateTime={story.date}>
                  {new Date(story.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="mt-2 text-xl font-bold text-ink">{story.title}</h3>
                <p className="mt-2 flex-1 text-muted">{story.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-primary">Read more →</span>
              </Card>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            Phase 2: full blog with CMS, categories, and individual story pages.
          </p>
        </div>
      </section>
    </>
  )
}
