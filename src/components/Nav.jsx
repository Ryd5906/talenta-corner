import { useEffect, useState } from 'react'
import { prefetchTestimonials } from '../hooks/usePrefetch.js'

const LINKS = [
  { href: '#mission', label: 'Approche' },
  { href: '#services', label: 'Services' },
  { href: '#equipe', label: 'Équipe' },
  { href: '#temoignages', label: 'Témoignages' },
]

export default function Nav({ brand }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    function onKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="nav">
      <div className="wrap">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="knot" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>{brand}</span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav id="site-menu" className={`nav__menu${open ? ' is-open' : ''}`} aria-label="Navigation principale">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              onMouseEnter={link.href === '#temoignages' ? prefetchTestimonials : undefined}
              onFocus={link.href === '#temoignages' ? prefetchTestimonials : undefined}
            >
              {link.label}
            </a>
          ))}
          <a className="nav__cta" href="#contact" onClick={() => setOpen(false)}>
            Prendre contact
          </a>
        </nav>
      </div>
    </header>
  )
}
