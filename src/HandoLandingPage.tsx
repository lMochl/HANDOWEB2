import {
  ArrowRight,
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
  TriangleAlert,
  UserRound,
} from "lucide-react";

const approachPoints = [
  "Estructuracion de informacion clinica relevante entre turnos",
  "Mayor visibilidad de novedades, pendientes y continuidad",
  "Apoyo a la coordinacion asistencial con foco operativo",
  "Base para aprendizaje y mejora continua del equipo",
];

const capabilities = [
  {
    title: "Seguridad del paciente",
    description:
      "Estandariza la entrega clinica para reducir omisiones, mejorar la continuidad y disminuir riesgos por informacion fragmentada.",
    tone: "a",
  },
  {
    title: "Trazabilidad y orden",
    description:
      "Centraliza la informacion relevante del turno con registros claros, seguimiento y mayor visibilidad operativa.",
    tone: "b",
  },
  {
    title: "Eficiencia del equipo",
    description:
      "Facilita la coordinacion entre profesionales y ayuda a que los equipos dediquen menos tiempo a buscar informacion dispersa.",
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
    name: "Ricardo Caceres Villar",
    text: "",
    image: "/1586991134800.webp",
    linkedin: "https://www.linkedin.com/in/ricardocaceresvillar/",
  },
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

          <nav className="main-nav" aria-label="Navegacion principal">
            <a href="#problema">
              Problema
            </a>
            <a href="#solucion">Solucion</a>
            <a href="#equipo">Equipo</a>
          </nav>

          <a href="#contacto" className="nav-contact-btn">
            Contacto
          </a>
        </div>
      </header>

      <main>
        <section id="problema" className="hero-section">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="hero-pill">
                <span className="hero-pill-dot" aria-hidden="true" />
                AI-POWERED HANDOVER
              </p>
              <h1>La calidad del handover tambien es seguridad del paciente.</h1>
              <p className="hero-text">
                Hando ayuda a los equipos de salud a estructurar, centralizar y dar continuidad a la informacion clinica critica entre turnos,
                reduciendo perdidas de informacion y mejorando la coordinacion asistencial.
              </p>
              <div className="hero-actions">
                <a href="#contacto" className="cta-btn cta-primary">
                  <span>Solicitar contacto</span>
                  <ArrowRight aria-hidden="true" strokeWidth={1.9} />
                </a>
                <a href="#solucion" className="cta-btn cta-secondary">
                  Conocer Hando
                </a>
              </div>
            </div>

            <article className="patient-panel" aria-label="Resumen de paciente en plataforma Hando">
              <div className="patient-row patient-main-row">
                <div>
                  <p className="patient-title patient-title-row">
                    <span className="patient-head-icon" aria-hidden="true">
                      <UserRound strokeWidth={1.8} />
                    </span>
                    Paciente: Martinez, R.
                  </p>
                  <p className="patient-subtitle">Cama 402 • Ingreso: 12h</p>
                </div>
                <span className="patient-tag">AI Synthesized</span>
              </div>

              <div className="patient-risk">
                <p className="risk-label">
                  <TriangleAlert aria-hidden="true" strokeWidth={1.9} />
                  Riesgo Detectado por IA
                </p>
                <p>Posible interaccion farmacologica: Heparina + AINES. Requiere revision de dosis antes del turno de noche.</p>
              </div>

              <div className="vitals-grid">
                <div>
                  <p>FC (lpm)</p>
                  <strong>84</strong>
                </div>
                <div>
                  <p>PA (mmHg)</p>
                  <strong>120/80</strong>
                </div>
                <div>
                  <p>SpO2 (%)</p>
                  <strong>98</strong>
                </div>
              </div>

              <div className="care-plan">
                <p className="care-title">Plan de Cuidado - Proximas 8h</p>
                <div className="care-row">
                  <p>Control de laboratorios</p>
                  <span>18:00</span>
                </div>
                <div className="care-row">
                  <p>Ajuste de fluidoterapia</p>
                  <span>22:00</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="risk-section">
          <div className="shell">
            <div className="risk-copy">
              <h2>Cuando el handover falla, el riesgo es clinico.</h2>
              <p>
                La fragmentacion de la informacion durante los cambios de turno es una de las principales causas de eventos adversos prevenibles en
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
                <h3>Informacion Fragmentada</h3>
                <p className="risk-description">Notas aisladas, mensajes de texto no oficiales y sistemas desconectados generan lagunas cognitivas peligrosas.</p>
                <div className="fragmented-notes">
                  <span className="note note-yellow">Revisar potasio cama 3, estaba bajo ayer... creo.</span>
                  <span className="note note-gray">WhatsApp - 14:32 Le pasamos medicación a la Sra. Gomez pero no lo anoté en sistema, te aviso por acá.</span>
                  <span className="system-alert">
                    ALERTA DE SISTEMA (IGNORADA)
                    <br />
                    ERR_SYNC: Data mismatch in patient vitals log_id
                  </span>
                </div>
              </article>

              <article className="risk-card impact-card">
                <FeatureIcon tone="d" />
                <p className="impact-value">80%</p>
                <h3>De errores medicos graves</h3>
                <p>
                  Involucran fallas de comunicacion durante la transferencia de pacientes, segun la Joint Commission. Un handover ineficiente
                  cuesta tiempo, recursos y vidas.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="solucion" className="solution-section">
          <div className="shell">
            <div className="solution-intro">
              <h2>Una capa digital para ordenar y fortalecer el handover clinico.</h2>
            </div>

            <article className="focus-board">
              <div className="focus-left">
                <p className="focus-pill">
                  <Sparkles aria-hidden="true" strokeWidth={1.9} />
                  Enfoque Hando
                </p>
                <p>
                  Hando esta disenado para apoyar la entrega clinica con una estructura mas clara, trazable y operativamente util. Nuestro
                  enfoque pone el acento en la seguridad del paciente, la continuidad del cuidado y la coordinacion de equipos de salud.
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
              <h2>Tecnologia disenada para equipos clinicos que necesitan claridad, continuidad y confianza.</h2>
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
                    Genera retroalimentacion util a partir de la practica clinica cotidiana para apoyar aprendizaje, consistencia y desempeno.
                  </p>
                  <p className="wide-chip">
                    <BadgeCheck aria-hidden="true" strokeWidth={1.9} />
                    Retroalimentacion inteligente
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
              <p>Conoce al equipo detras de Hando</p>
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
                <h2>Conversemos sobre como Hando puede apoyar a tu equipo.</h2>
                <p className="contact-line">
                  <MapPin aria-hidden="true" strokeWidth={1.8} />
                  Santiago, Chile
                </p>
              </aside>

              <div className="contact-email-panel" aria-label="Correo de contacto">
                <p className="contact-email-kicker">Correo de contacto</p>
                <a href="mailto:contacto@hando.cl" className="contact-email-link">
                  contacto@hando.cl
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
