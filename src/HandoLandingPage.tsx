import {
  BadgeCheck,
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  CircleAlert,
  CircleCheck,
  Clock3,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const approachPoints = [
  "Estructuración de información clínica relevante entre turnos",
  "Mayor visibilidad de novedades, pendientes y continuidad",
  "Apoyo a la coordinación asistencial con foco operativo",
  "Base para aprendizaje y mejora continua del equipo",
];

const capabilities = [
  {
    title: "Seguridad del paciente",
    description:
      "Estandariza la entrega clínica para reducir omisiones, mejorar la continuidad y disminuir riesgos por información fragmentada.",
    tone: "a",
  },
  {
    title: "Trazabilidad y orden",
    description:
      "Centraliza la información relevante del turno con registros claros, seguimiento y mayor visibilidad operativa.",
    tone: "b",
  },
  {
    title: "Eficiencia del equipo",
    description:
      "Facilita la coordinación entre profesionales y ayuda a que los equipos dediquen menos tiempo a buscar información dispersa.",
    tone: "c",
  },
];

const teamMembers = [
  {
    role: "CEO | CO FOUNDER",
    name: "Felipe Jil Vargas",
    text: "",
    image: "/1764635220247.webp",
    linkedin: "https://www.linkedin.com/in/felipejilvargas/",
  },
  {
    role: "COO | CO FOUNDER",
    name: "Ricardo Cáceres Villar",
    text: "",
    image: "/1586991134800.webp",
    linkedin: "https://www.linkedin.com/in/ricardocaceresvillar/",
  },
  {
    role: "UX/UI Designer",
    name: "Isidora Céspedes",
    text: "",
    image: "/1688650546082.webp",
    linkedin: "https://www.linkedin.com/in/isidora-cespedes-gaete/",
  },
  {
    role: "Full Stack Developer",
    name: "Matías Guiñez",
    text: "",
    image: "/1769560685229.webp",
    linkedin: "https://www.linkedin.com/in/mat%C3%ADas-alexander-gui%C3%B1ez-monsalve/",
  },
  {
    role: "CTO",
    name: "Priscilla Vergara",
    text: "",
    image: "/1746765704898.webp",
    linkedin: "https://www.linkedin.com/in/priscilla-vergara-c-1bab36179/",
  },
  {
    role: "Full stack developer",
    name: "Vicente Inostroza",
    text: "",
    image: "/1721068505558.webp",
    linkedin: "https://www.linkedin.com/in/vicente-inostroza-5a8b4a231/",
  },
  {
    role: "Student Hardware Developer",
    name: "Jorge Pérez",
    text: "",
    image: "/1745007035136.webp",
    linkedin: "https://www.linkedin.com/in/jorge-pérez-torres-851530299/",
  },
  // {
  //   role: "Student developer",
  //   name: "Anita Lagos",
  //   text: "",
  //   image: "/.webp",
  //   linkedin: "https://www.linkedin.com/in/anita-lagos-hermosilla-23ab26291/",
  // },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM8.3 18.5H5.58V9.55H8.3v8.95ZM18.42 18.5h-2.7v-4.35c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3v4.43H9.9V9.55h2.6v1.22h.04c.36-.69 1.25-1.42 2.57-1.42 2.75 0 3.26 1.81 3.26 4.16v4.99Z"
      />
    </svg>
  );
}

function FeatureIcon({ tone }: { tone: "a" | "b" | "c" | "d" }) {
  if (tone === "a") {
    return <ShieldCheck aria-hidden="true" strokeWidth={1.9} />;
  }

  if (tone === "b") {
    return <Network aria-hidden="true" strokeWidth={1.9} />;
  }

  if (tone === "c") {
    return <Clock3 aria-hidden="true" strokeWidth={1.9} />;
  }

  return <ChartNoAxesColumnIncreasing aria-hidden="true" strokeWidth={1.9} />;
}

export default function HandoLandingPage() {
  return (
    <div className="hando-page">
      <header className="topbar">
        <div className="shell topbar-inner">
          <a href="#problema" className="brand" aria-label="Ir al inicio de Hando">
            <img src="/hando-logo.webp" alt="Logo de Hando" className="brand-logo" />
            <span className="brand-name">Hando</span>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#problema">
              Problema
            </a>
            <a href="#solucion">Solución</a>
            <a href="#equipo">Equipo</a>
          </nav>

          <a href="#contacto" className="nav-contact-btn">
            Contacto
          </a>
        </div>
      </header>

      <main>
        <section id="problema" className="hero-section">
          <div className="shell">
            <div className="hero-centered">
              <h1>La calidad del <span className="highlight-underline">handover</span> también es seguridad del paciente.</h1>
              <p className="hero-text">
                Hando ayuda a los equipos de salud a estructurar, centralizar y dar continuidad a la información clínica crítica entre turnos,
                reduciendo pérdidas de información, errores y mejorando la continuidad del cuidado.
              </p>
              <div className="hero-actions">
                <a href="#contacto" className="cta-btn cta-primary">
                  <span>Solicitar contacto</span>
                </a>
                <a href="#solucion" className="cta-btn cta-secondary">
                  Conocer Hando
                </a>
              </div>
            </div>

            <div className="hero-banners">
              <div className="banner-full banner-ambulancia">
                <img src="/banner_4.webp" alt="Ambulancia Banner" className="banner-bg" />
                <div className="banner-content content-left content-row">
                  <img src="/ambulancia_logo.webp" alt="Hando Ambulancia" className="banner-logo" />
                  <div className="banner-text-box">
                    <h4>Información continua</h4>
                    <p>Hando Ambulancia permite generar registro confiable de los eventos en ambulancia ya que alerta proactivamente al hospital receptor, evitando que se pierdan pendientes importantes.</p>
                  </div>
                </div>
              </div>
              <div className="banner-full banner-calendar">
                <img src="/banner_3.webp" alt="Calendar Banner" className="banner-bg" />
                <div className="banner-content content-left">
                  <img src="/calendar_logo.webp" alt="Hando Calendar" className="banner-logo" />
                  <div className="banner-text-box">
                    <h4>Mejor organización para equipos de la salud</h4>
                    <p>Hando Calendar es nuestra propuesta para facilitar la organización de turnos, rotaciones y turnos vacantes de manera sencilla, rápida y limpia.</p>
                  </div>
                </div>
              </div>
              <div className="banner-grid-half">
                <div className="banner-half banner-science">
                  <img src="/banner_2.webp" alt="Science Banner" className="banner-bg" />
                  <div className="banner-content content-left">
                    <img src="/science_logo.webp" alt="Hando Science" className="banner-logo" />
                    <div className="banner-text-box">
                      <h4>Conocimiento a la mano de todos</h4>
                      <p>Una plataforma digital para personal del rubro de salud que entrega papers, investigaciones, resultados y diagnósticos de manera fácil y rápida.</p>
                    </div>
                  </div>
                </div>
                <div className="banner-half banner-cirugia">
                  <img src="/banner_1.webp" alt="Cirugia Banner" className="banner-bg" />
                  <div className="banner-content content-left">
                    <img src="/cirugia_logo.webp" alt="Hando Cirugia" className="banner-logo" />
                    <div className="banner-text-box">
                      <h4>Con Hando puedes cuidar información crítica</h4>
                      <p>Hando Cirugía esta pensado para resguardar datos e información importante que puede llegar a perderse en la transición de turnos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="risk-section">
          <div className="shell">
            <div className="risk-copy">
              <h2>Cuando el handover falla, el riesgo es clínico.</h2>
              <p>
                La fragmentación de la información durante los cambios de turno es una de las principales causas de eventos adversos prevenibles en
                entornos hospitalarios.
              </p>
            </div>

            <div className="risk-grid">
              <article className="risk-card fragmented-card">
                <p className="card-pill card-pill-alert">
                  <CircleAlert aria-hidden="true" strokeWidth={1.9} />
                  El Status Quo
                </p>
                <ClipboardList className="fragmented-watermark" aria-hidden="true" strokeWidth={1.6} />
                <h3>Información Fragmentada</h3>
                <p className="risk-description">Notas aisladas, mensajes de texto no oficiales y sistemas desconectados generan lagunas cognitivas peligrosas.</p>
                <div className="fragmented-notes">
                  <span className="note note-yellow">Revisar potasio cama 3, estaba bajo ayer... creo.</span>
                  <span className="note note-gray">WhatsApp - 14:32 Le pasamos medicación a la Sra. Gómez, pero no lo anoté en sistema, te aviso por acá.</span>
                  <span className="system-alert">
                    ALERTA DE SISTEMA (IGNORADA)
                    <br />
                    ERR_SYNC: Data mismatch in patient vitals log_id
                  </span>
                </div>
              </article>

              <article className="risk-card impact-card">
                <FeatureIcon tone="d" />
                <p className="impact-value">Hasta 80%</p>
                <h3>De los errores médicos graves</h3>
                <p>
                  Involucran fallas de comunicación durante transferencias de cuidados, según estimaciones de The Joint Commission. Un handover ineficiente
                  retrasa decisiones, consume recursos y puede comprometer vidas.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="solucion" className="solution-section">
          <div className="shell">
            <div className="solution-intro">
              <h2>Una capa digital para ordenar y fortalecer el handover clínico.</h2>
            </div>

            <article className="focus-board">
              <div className="focus-left">
                <p className="focus-pill">
                  <Sparkles aria-hidden="true" strokeWidth={1.9} />
                  Enfoque Hando
                </p>
                <p>
                  Hando está diseñado para apoyar la entrega clínica con una estructura más clara, trazable y operativamente útil. Nuestro
                  enfoque pone el acento en la seguridad del paciente, la continuidad del cuidado y la coordinación de equipos de salud.
                </p>
              </div>
              <ul className="focus-list">
                {approachPoints.map((point) => (
                  <li key={point}>
                    <CircleCheck aria-hidden="true" strokeWidth={1.9} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className="solution-copy">
              <h2>Tecnología diseñada para equipos clínicos que necesitan claridad, continuidad y confianza.</h2>
            </div>

            <div className="benefits-grid">
              {capabilities.map((item, index) => (
                <article key={item.title} className={`benefit-card benefit-card-${index + 1}`}>
                  <div className={`icon-badge icon-${item.tone}`}>
                    <FeatureIcon tone={item.tone as "a" | "b" | "c" | "d"} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}

              <article className="benefit-card benefit-card-wide">
                <div className="wide-content">
                  <h3>Mejora continua</h3>
                  <p>
                    Genera retroalimentación útil a partir de la práctica clínica cotidiana para apoyar aprendizaje, consistencia y desempeño.
                  </p>
                  <p className="wide-chip">
                    <BadgeCheck aria-hidden="true" strokeWidth={1.9} />
                    Retroalimentación inteligente
                  </p>
                </div>
                <div className="chart-card" aria-hidden="true">
                  <div className="chart-bars">
                    <span style={{ height: "42%" }} />
                    <span style={{ height: "64%" }} />
                    <span style={{ height: "83%" }} />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="equipo" className="team-section">
          <div className="shell">
            <div className="team-copy">
              <h2>Quienes somos</h2>
              <p>Conoce al equipo detrás de Hando</p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <article key={`${member.name}-${index}`} className="team-card">
                  <div className="member-avatar">
                    <img src={member.image} alt={`Foto de ${member.name}`} className="member-avatar-image" loading="lazy" />
                  </div>
                  <p className="member-role">{member.role}</p>
                  <div className="member-name-row">
                    <h3>{member.name}</h3>
                    <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn de ${member.name}`} className="member-link">
                      <LinkedInIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-strip">
          <div className="shell support-inner">
            <p>RESPALDO</p>
            <img src="/startup-chile-blanco.webp" alt="Start-Up Chile" className="support-logo" />
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="shell">
            <div className="contact-card">
              <aside className="contact-aside">
                <h2>Conversemos sobre cómo Hando puede apoyar a tu equipo.</h2>
                <p className="contact-line">
                  <MapPin aria-hidden="true" strokeWidth={1.8} />
                  Santiago, Chile
                </p>
              </aside>

              <div className="contact-email-panel" aria-label="Correo de contacto">
                <p className="contact-email-kicker">Correo de contacto</p>
                <a href="mailto:contacto@hando.cl" className="contact-email-link">
                  contacto@hando.health
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p className="footer-brand">Hando</p>
          <p>© 2026 Hando. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
