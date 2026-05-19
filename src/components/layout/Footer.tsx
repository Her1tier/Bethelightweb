import { Link } from 'react-router-dom'
import { site, navLinks } from '../../data/site'

export function Footer() {
  return (
    <footer className="bg-ink text-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">{site.name}</p>
            <p className="mt-4 text-warm-white/80">{site.tagline}</p>
          </div>
          <div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-warm-white/90 hover:text-primary-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              {(['linkedin', 'facebook', 'instagram'] as const).map((key) => (
                <a
                  key={key}
                  href={site.social[key]}
                  className="text-warm-white/90 capitalize hover:text-primary-light"
                  aria-label={key}
                >
                  {key}
                </a>
              ))}
            </div>
          </div>
          <div>
            <ul className="space-y-2 text-warm-white/90">
              <li>{site.phone}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-primary-light">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-warm-white/20 pt-8 text-center text-sm text-warm-white/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
