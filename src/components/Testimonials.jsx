import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'

export default function Testimonials({ testimonials }) {
  const [index, setIndex] = useState(0)
  const ref = useReveal()
  const current = testimonials[index]

  function move(delta) {
    setIndex((value) => (value + delta + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials" id="temoignages">
      <div className="wrap reveal" ref={ref}>
        <div className="section-head">
          <div>
            <span className="mono">03 — La parole</span>
            <h2>
              Ils nous font <em>confiance.</em>
            </h2>
          </div>
        </div>

        <div className="quote-card">
          <div className="quote-card__mark" aria-hidden="true">
            “
          </div>

          <blockquote aria-live="polite">
            <p className="quote-card__text">« {current.quote}</p>
            <footer>
              <div>
                <span className="quote-card__author">{current.author}</span>
                <span className="quote-card__company">{current.company}</span>
              </div>
            </footer>
          </blockquote>

          <div className="quote-card__nav">
            <button
              type="button"
              className="round-btn"
              onClick={() => move(-1)}
              aria-label="Témoignage précédent"
            >
              <span aria-hidden="true">←</span>
            </button>
            <span className="quote-card__count" aria-hidden="true">
              {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="round-btn"
              onClick={() => move(1)}
              aria-label="Témoignage suivant"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
