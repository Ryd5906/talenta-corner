import useReveal from '../hooks/useReveal.js'

export default function Contact({ site }) {
  const ref = useReveal()

  return (
    <section className="contact" id="contact">
      <div className="contact__warp" aria-hidden="true" />
      <div className="wrap reveal" ref={ref}>
        <div>
          <p className="contact__kicker">Prochaine étape</p>
          <h2 className="contact__title">
            Tirons <em>un fil ensemble.</em>
          </h2>
        </div>

        <div className="contact__side">
          <p className="contact__text">
            Un échange de trente minutes suffit pour savoir si nous sommes la bonne équipe.
            Écrivez-nous : nous répondons sous deux jours ouvrés.
          </p>
          <a className="contact__mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="contact__actions">
            <a className="btn btn--light" href={`mailto:${site.email}`}>
              Écrire à l'équipe
            </a>
            <a className="btn btn--ghost-light" href="#services">
              Revoir les services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
