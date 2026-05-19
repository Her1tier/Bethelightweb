import { Link } from 'react-router-dom'
import { aboutSummary, programs } from '../../data/site'

const featured = programs.slice(0, 3)

function ProgramIcon({ id }: { id: string }) {
  const className = 'h-20 w-20 text-primary sm:h-24 sm:w-24 lg:h-28 lg:w-28'

  switch (id) {
    case 'food-relief':
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
          <path
            d="M12 28c0-8.837 7.163-16 16-16s16 7.163 16 16v4H12v-4z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 36h48v4c0 6.627-5.373 12-12 12H20c-6.627 0-12-5.373-12-12v-4z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 12v8M24 14l4 6M40 14l-4 6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'education':
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
          <path
            d="M8 24 32 12l24 12-24 12L8 24z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M16 28v12c0 4.418 7.163 8 16 8s16-3.582 16-8V28"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M52 26v16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case 'health':
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
          <path
            d="M32 54s-18-12-18-28a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 16-18 28-18 28z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M32 26v14M25 33h14"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return (
        <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="3" />
        </svg>
      )
  }
}

export function AboutProgramsSection() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div aria-hidden className="hidden md:block" />
          <p className="max-w-xl text-left text-base leading-loose text-primary sm:text-lg lg:max-w-2xl">
            {aboutSummary}
          </p>
        </div>
      </div>

      <div className="border-t border-primary/40" aria-hidden />

      <div className="mx-auto flex w-full max-w-7xl flex-1">
        <div className="relative grid h-full w-full grid-cols-1 md:min-h-[24rem] md:grid-cols-3 lg:min-h-[27rem]">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/3 hidden border-l border-primary/40 md:block" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-2/3 hidden border-l border-primary/40 md:block" />
          {featured.map((program, index) => (
            <Link
              key={program.id}
              to="/programs"
              className={`group flex h-full flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-14 ${
                index > 0 ? 'border-t border-primary/40 md:border-t-0' : ''
              }`}
            >
              <div
                className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                aria-hidden
              >
                <ProgramIcon id={program.id} />
              </div>
              <h3 className="mt-8 font-serif text-lg font-normal uppercase leading-snug tracking-[0.12em] text-primary sm:text-xl">
                {program.title}
              </h3>
              <p className="mt-6 max-w-xs font-serif text-sm leading-relaxed text-primary/90 sm:text-base">
                {program.action}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
