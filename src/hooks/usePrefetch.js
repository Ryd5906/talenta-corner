import { useEffect } from 'react'

let warmed = false

// Charge à la demande le bloc témoignages (code splitting). Appelé au survol
// du lien « Témoignages » ou pendant les temps morts du navigateur.
export function prefetchTestimonials() {
  if (warmed) return
  warmed = true
  import('../components/Testimonials.jsx').catch(() => {})
}

export default function useIdlePrefetch() {
  useEffect(() => {
    if (!('requestIdleCallback' in window)) {
      const timer = setTimeout(prefetchTestimonials, 2500)
      return () => clearTimeout(timer)
    }
    const id = requestIdleCallback(() => prefetchTestimonials(), { timeout: 2500 })
    return () => cancelIdleCallback(id)
  }, [])
}
