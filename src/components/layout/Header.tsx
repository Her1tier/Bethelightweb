import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site, navLinks } from '../../data/site'
import { Logo } from '../ui/Logo'

const mainLinks = navLinks.filter((link) => link.href !== '/contact')

const supportClass = 'bg-accent text-primary font-medium hover:bg-accent'

export function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = (isActive: boolean) =>
    isActive ? 'text-primary' : 'text-ink'

  return (
    <header className="sticky top-0 z-50 bg-warm-white">
      <div className="site-container grid grid-cols-[1fr_auto] items-center gap-3 py-3 sm:grid-cols-[1fr_auto_1fr] sm:gap-4 sm:py-4">
        <Link
          to="/"
          className="justify-self-start"
          onClick={() => setOpen(false)}
          aria-label={site.name}
        >
          <Logo tone="primary" />
        </Link>

        <nav
          className="hidden items-center justify-center gap-1 sm:flex"
          aria-label="Main"
        >
          {mainLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `whitespace-nowrap px-3 py-1.5 text-sm font-medium leading-normal transition-colors xl:px-4 ${linkClass(isActive)}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          <Link
            to="/#support"
            className={`hidden min-w-[7.5rem] justify-center px-6 py-2 text-sm font-medium leading-normal transition-colors sm:inline-flex ${supportClass}`}
            onClick={() => setOpen(false)}
          >
            Support
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-ink sm:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-ink/10 bg-warm-white px-4 py-4 sm:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 font-medium ${linkClass(isActive)}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/#support"
                className={`mt-1 block px-4 py-3 text-center font-medium ${supportClass}`}
                onClick={() => setOpen(false)}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
