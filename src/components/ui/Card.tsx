import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: Props) {
  return (
    <article
      className={`rounded-2xl border border-sand/60 bg-white p-6 shadow-sm ${hover ? 'transition-shadow hover:shadow-md' : ''} ${className}`}
    >
      {children}
    </article>
  )
}
