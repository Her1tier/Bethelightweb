import { Link } from 'react-router-dom'
import { stories } from '../../data/site'

const featured = stories.slice(0, 3)

export function HomeNewsSection() {
  return (
    <section className="bg-warm-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">News</p>
            <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">Latest updates</h2>
          </div>
          <Link
            to="/news"
            className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View all news →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {featured.map((story) => (
            <Link
              key={story.id}
              to="/news"
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={story.image}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 text-left text-xl font-bold text-ink sm:text-2xl">
                {story.title}
              </h3>
              <p className="mt-3 text-left text-base leading-relaxed text-muted line-clamp-2">
                {story.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
