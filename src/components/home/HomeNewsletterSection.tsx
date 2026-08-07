import { site } from '../../data/site'

export function HomeNewsletterSection() {
  return (
    <section className="bg-warm-white py-10 sm:py-12 lg:py-16">
      <div className="site-container">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <h2 className="text-2xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-3xl">
            Join our WhatsApp community
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70 sm:text-base">
            Impact stories, events, and ways to help shared with the community.
          </p>

          <a
            href={site.whatsappCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-w-[7.5rem] items-center justify-center bg-primary px-6 py-2 text-sm font-medium leading-normal text-warm-white transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:mt-8"
          >
            Join WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
