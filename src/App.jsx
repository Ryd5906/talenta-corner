import { Suspense, lazy } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Mission from './components/Mission.jsx'
import Services from './components/Services.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useContent from './hooks/useContent.js'
import useIdlePrefetch from './hooks/usePrefetch.js'

// Section secondaire chargée à la demande : elle n'est pas utile au premier écran,
// donc Vite en fait un fichier séparé, précaché au premier temps mort.
const Testimonials = lazy(() => import('./components/Testimonials.jsx'))

export default function App() {
  const { content } = useContent()
  useIdlePrefetch()

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Nav brand={content.site.brand} />
      <main id="contenu">
        <Hero site={content.site} />
        <Mission site={content.site} />
        <Services services={content.services} />
        <Team team={content.team} />
        <Suspense fallback={<div className="testimonials-fallback" aria-hidden="true" />}>
          <Testimonials testimonials={content.testimonials} />
        </Suspense>
        <Contact site={content.site} />
      </main>
      <Footer site={content.site} />
    </>
  )
}
