import useReveal from '../hooks/useReveal.js'

export default function Services({ services }) {
  const ref = useReveal()

  return (
    <section className="services" id="services">
      <div className="wrap reveal" ref={ref}>
        <div className="section-head">
          <div>
            <span className="mono">01 — Les trois fils</span>
            <h2>
              Trois métiers, <em>une même exigence.</em>
            </h2>
          </div>
          <p className="section-head__lead">
            Des prestations cadrées, mesurables, pensées pour les PME qui n'ont pas de temps à
            perdre — ni d'argent à gaspiller.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <article className="service-card" key={service._id}>
              <span className="service-card__num">Fil {String(i + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.points?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
