export default function Footer({ site }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <nav aria-labelledby="footer-prestations">
            <h3 id="footer-prestations">Prestations</h3>
            <ul>
              <li>
                <a href="#services">Programmes de développement des talents</a>
              </li>
              <li>
                <a href="#services">Formation en entreprise</a>
              </li>
              <li>
                <a href="#services">Services de conseil</a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-studio">
            <h3 id="footer-studio">Studio</h3>
            <ul>
              <li>
                <a href="#mission">Approche</a>
              </li>
              <li>
                <a href="#equipe">Équipe</a>
              </li>
              <li>
                <a href="#temoignages">Témoignages</a>
              </li>
            </ul>
          </nav>

          <div>
            <h3>Adresse</h3>
            <ul>
              <li>{site.base}</li>
              <li>UTC+3 · FR / EN</li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 {site.brand} · Site de démonstration</span>
          <span>Direction artistique — Tissage</span>
        </div>
      </div>
    </footer>
  )
}
