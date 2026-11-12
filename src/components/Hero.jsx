export default function Hero({ site }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <p className="hero__eyebrow mono">Externalisation de talents — Madagascar</p>
            <h1>
              Le talent
              <em>se cultive.</em>
            </h1>
          </div>

          <aside className="rail" aria-label="Repères du studio">
            <p>
              18.8792° S
              <br />
              47.5079° E
              <strong>
                Antananarivo
                <br />
                UTC+3 · FR / EN
              </strong>
            </p>
            <span className="knot" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
          </aside>
        </div>

        <div className="hero__sub">
          <p className="hero__lead">{site.intro}</p>
          <div className="hero__actions">
            <a className="btn btn--ink" href="#services">
              Explorer les services
            </a>
            <a className="btn btn--line" href="#contact">
              Parler du projet
            </a>
          </div>
        </div>
      </div>

      <figure className="hero__band">
        <img
          src="/studio.jpg"
          srcSet="/studio-800.webp 800w, /studio-1280.webp 1280w"
          sizes="100vw"
          alt="Trois collègues penchés sur un ordinateur portable dans un bureau lumineux"
          width="1280"
          height="800"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__band-inner wrap">
          <figcaption className="hero__tag">
            <p className="mono">Le studio</p>
            <span>Une équipe courte, un interlocuteur unique, des livraisons tenues.</span>
          </figcaption>
        </div>
      </figure>
    </section>
  )
}
