import { Link } from 'react-router-dom'

const CTA_CARDS = [
  {
    to: '/volunteer',
    title: (
      <>
        Volunteer <span className="italic font-normal">with</span> us
      </>
    ),
    description:
      'Join 340+ volunteers making a difference in food relief, education, health, and community outreach. Every hour you give helps families build a stronger future.',
    image:
      'https://images.unsplash.com/photo-1469571486292-b53601010376?auto=format&fit=crop&w=1400&q=85',
  },
  {
    to: '/donate',
    title: (
      <>
        Support <span className="italic font-normal">the</span> Mission
      </>
    ),
    description:
      'Fund direct support across food relief, education, healthcare, and housing programs. Your donation reaches communities quickly and transparently.',
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=85',
  },
] as const

export function HomeCtaSection() {
  return (
    <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {CTA_CARDS.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="group relative flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-2xl p-8 sm:min-h-[31rem] sm:p-10"
          >
            <img
              src={card.image}
              alt=""
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[#013333]/45 transition-opacity duration-300 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex items-start justify-between gap-4">
              <h2 className="max-w-[15rem] font-serif text-3xl leading-tight text-warm-white sm:text-5xl">
                {card.title}
              </h2>
              <span
                className="shrink-0 text-lg tracking-widest text-warm-white/90 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden
              >
                &gt;&gt;&gt;
              </span>
            </div>
            <p className="relative max-w-md translate-y-4 text-sm leading-relaxed text-warm-white/90 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-base">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
