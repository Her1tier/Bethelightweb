import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site, navLinks } from '../../data/site'

const SCROLL_THRESHOLD = 48

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const solidNav = !onHome || scrolled

  useEffect(() => {
    if (!onHome) {
      setScrolled(false)
      return
    }

    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  const linkClass = (href: string, isActive: boolean) => {
    const isDonate = href === '/donate'

    if (isDonate) {
      return solidNav
        ? 'bg-primary text-warm-white hover:bg-primary/90'
        : 'bg-warm-white text-primary hover:bg-sand'
    }

    if (solidNav) {
      return isActive ? 'bg-primary/15 text-primary' : 'text-primary hover:bg-primary/10'
    }

    return isActive ? 'bg-warm-white/20 text-warm-white' : 'text-warm-white/90 hover:bg-warm-white/10'
  }

  return (
    <header
      className={`z-50 transition-colors duration-300 ${
        solidNav
          ? 'sticky top-0 border-b border-sand/50 bg-warm-white shadow-sm'
          : 'absolute inset-x-0 top-0 border-transparent bg-gradient-to-b from-[#013333]/80 via-[#013333]/40 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Link
          to="/"
          className={`shrink-0 text-lg font-bold transition-colors sm:text-xl ${
            solidNav ? 'text-primary' : 'text-warm-white'
          }`}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 sm:flex sm:flex-wrap"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `whitespace-nowrap px-1.5 py-1.5 text-[11px] font-semibold transition-colors sm:px-2.5 sm:py-2 sm:text-xs lg:text-sm ${
                  link.href === '/donate'
                    ? 'rounded-sm px-3 sm:px-4'
                    : 'rounded-full'
                } ${linkClass(link.href, isActive)}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`shrink-0 rounded-lg p-2 sm:hidden ${solidNav ? 'text-primary' : 'text-warm-white'}`}
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

      {open && (
        <nav
          className={`px-4 py-4 sm:hidden ${
            solidNav ? 'border-t border-sand/50 bg-warm-white' : 'border-t border-warm-white/20 bg-[#013333]/95'
          }`}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-4 py-3 font-semibold ${
                      link.href === '/donate' ? 'rounded-sm' : 'rounded-lg'
                    } ${linkClass(link.href, isActive)}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
