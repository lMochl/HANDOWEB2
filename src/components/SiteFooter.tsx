import { InstagramIcon, LinkedInIcon } from "./SocialIcons";

export default function SiteFooter({ accent = "teal" }: { accent?: "teal" | "calendar" | "science" }) {
  return (
    <footer className={`site-footer footer-${accent}`}>
      <div className="site-shell">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="/" className="footer-logo" aria-label="Hando, página de inicio">
              <img src="/hando-design/logos/hando-iso-white.svg" alt="" />
              <span>Hando</span>
            </a>
            <p>Ecosistema tecnológico para mejorar la coordinación, continuidad e información en el sector salud.</p>
            <div className="social-links" aria-label="Redes sociales">
              <a href="https://www.linkedin.com/company/hando-health" target="_blank" rel="noreferrer" aria-label="Hando en LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://www.instagram.com/hando.health" target="_blank" rel="noreferrer" aria-label="Hando en Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h2>Soluciones</h2>
            <a href="/calendar.html">Hando Calendar</a>
            <a href="/science.html">Hando Science</a>
          </div>

          <div>
            <h2>Empresa</h2>
            <a href="/#que-es">Qué es Hando</a>
            <a href="/#vision">Filosofía y visión</a>
            <a href="/equipo.html">Equipo</a>
            <a href="/contacto.html">Contacto</a>
          </div>

          <div>
            <h2>Contacto</h2>
            <a href="mailto:felipe@hando.health">felipe@hando.health</a>
            <a href="mailto:ricardo@hando.health">ricardo@hando.health</a>
            <a className="button button-primary footer-button" href="/contacto.html">Solicitar cotización</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Hando. Todos los derechos reservados.</span>
          <div>
            <span>Política de privacidad</span>
            <span>Términos de uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
