import useReveal from '../hooks/useReveal.js'

export default function Mission({ site }) {
  const ref = useReveal()

  return (
    <section className="mission" id="mission">
      <div className="wrap reveal" ref={ref}>
        <div>
          <p className="mission__kicker">Notre conviction</p>
          <p className="mission__statement">
            L'externalisation n'a de sens que si elle fait grandir
            <em> les deux côtés</em> de la relation.
          </p>
        </div>

        <div className="mission__pillars">
          {site.pillars.map((pillar, i) => (
            <article className="pillar" key={pillar.title}>
              <span className="pillar__idx" aria-hidden="true">
                P.{String(i + 1).padStart(2, '0')}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
