import useReveal from '../hooks/useReveal.js'

export default function Team({ team }) {
  const ref = useReveal()

  return (
    <section className="team" id="equipe">
      <div className="team__warp" aria-hidden="true" />
      <div className="wrap reveal" ref={ref}>
        <div className="section-head">
          <div>
            <span className="mono">02 — Le métier</span>
            <h2>
              Des profils qui <em>vous ressemblent.</em>
            </h2>
          </div>
          <p className="section-head__lead">
            Pas d'intermédiaires anonymes : les personnes qui travaillent sur votre projet sont
            celles que vous rencontrez.
          </p>
        </div>

        <div className="team__rows">
          {team.map((member, i) => (
            <article className="team__row" key={member._id}>
              <span className="team__idx" aria-hidden="true">
                T.{String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__bio">{member.bio}</p>
              <p className="team__meta">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
