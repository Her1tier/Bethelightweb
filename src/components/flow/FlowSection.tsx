import type { CSSProperties, ReactNode } from 'react'

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ')
}

export interface FlowSectionProps {
  className?: string
  innerClassName?: string
  style?: CSSProperties
  children: ReactNode
  'aria-label'?: string
}

export function FlowSection({
  className,
  innerClassName,
  style = {},
  children,
  'aria-label': ariaLabel,
}: FlowSectionProps) {
  return (
    <section
      data-flow-section
      aria-label={ariaLabel}
      className={cx('relative min-h-screen w-full overflow-hidden', className)}
    >
      <div
        data-flow-inner
        className={cx(
          'flow-art-container relative flex min-h-screen w-full flex-col will-change-transform',
          innerClassName ??
            'justify-between gap-6 px-[4vw] pt-[clamp(2rem,8vw,4vw)] pb-[4vw]',
        )}
        style={{ transformOrigin: 'bottom left', ...style }}
      >
        {children}
      </div>
    </section>
  )
}
