import { InstagramIcon, LinkedInIcon } from "./SocialIcons";

export default function SiteFooter() {
  return (
    <footer className="site-footer brand-dark">
      <div className="site-shell">
        <div className="footer-grid">
          <div className="footer-about">
            <a
              className="site-brand"
              href="index.html"
              aria-label="Hando, inicio"
            >
              <img
                className="figma-svg"
                src="/figma/home/imgGroup6.svg"
                alt=""
              />
              <span>Hando</span>
            </a>
            <p>
              Ecosistema tecnológico para mejorar la coordinación, continuidad e
              información en el sector salud.
            </p>
            <div className="footer-socials" aria-label="Redes sociales">
              <a
                href="https://www.linkedin.com/company/hando-health"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/hando.health"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div>
            <h2>Soluciones</h2>
            <div className="footer-links">
              <a href="calendar.html">Hando Calendar</a>
              <a href="science.html">Hando Science</a>
            </div>
          </div>
          <div>
            <h2>Empresa</h2>
            <div className="footer-links">
              <a href="index.html#que-es">Qué es Hando</a>
              <a href="index.html#vision">Filosofía y visión</a>
              <a href="equipo.html">Equipo</a>
              <a href="contacto.html">Contacto</a>
            </div>
          </div>
          <div>
            <h2>Contacto</h2>
            <div className="footer-links footer-contact">
              <a href="mailto:felipe@hando.health">felipe@hando.health</a>
              <a href="mailto:ricardo@hando.health">ricardo@hando.health</a>
              <a className="footer-quote" href="contacto.html">
                Solicitar cotización
              </a>
            </div>
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
