import logoUrl from '../../assets/logo.svg'

type LogoTone = 'ink' | 'warm-white' | 'primary' | 'accent'

type LogoProps = {
  className?: string
  /** @deprecated use tone */
  invert?: boolean
  tone?: LogoTone
}

const toneClass: Record<LogoTone, string> = {
  ink: 'bg-ink',
  'warm-white': 'bg-warm-white',
  primary: 'bg-primary',
  accent: 'bg-accent',
}

export function Logo({
  className = 'h-7 sm:h-8',
  invert = false,
  tone,
}: LogoProps) {
  const resolvedTone: LogoTone = tone ?? (invert ? 'warm-white' : 'ink')

  return (
    <span
      role="img"
      aria-label="Kubwabo Foundation"
      className={`inline-block aspect-[104/28] w-auto ${toneClass[resolvedTone]} ${className}`}
      style={{
        WebkitMaskImage: `url(${logoUrl})`,
        maskImage: `url(${logoUrl})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}
