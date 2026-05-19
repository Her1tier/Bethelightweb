import type { ReactNode } from 'react'
import { Button } from '../ui/Button'

type Props = {
  title: string
  subtitle?: string
  eyebrow?: string
  cta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  children?: ReactNode
  compact?: boolean
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  cta,
  secondaryCta,
  children,
  compact = false,
}: Props) {
  return (
    <section
      className={`relative overflow-hidden bg-primary text-warm-white ${compact ? 'py-16' : 'py-24 sm:py-32'}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(243,234,216,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-warm-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-warm-white/90 sm:text-xl">{subtitle}</p>
        )}
        {(cta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {cta && (
              <Button to={cta.to} variant="secondary" size="lg">
                {cta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button to={secondaryCta.to} variant="outline" size="lg" className="border-warm-white text-warm-white hover:bg-warm-white hover:text-primary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
