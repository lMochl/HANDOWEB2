const benefits = [
  {
    title: "Seguridad del paciente",
    description:
      "Estandariza la entrega clínica para reducir omisiones, mejorar la continuidad y disminuir riesgos por información fragmentada.",
  },
  {
    title: "Trazabilidad y orden",
    description:
      "Centraliza la información relevante del turno con registros claros, seguimiento y mayor visibilidad operativa.",
  },
  {
    title: "Eficiencia del equipo",
    description:
      "Facilita la coordinación entre profesionales y ayuda a que los equipos dediquen menos tiempo a buscar información dispersa.",
  },
  {
    title: "Mejora continua",
    description:
      "Genera retroalimentación útil a partir de la práctica clínica cotidiana para apoyar aprendizaje, consistencia y desempeño.",
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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.8A2.95 2.95 0 0 0 4.8 7.75v8.5a2.95 2.95 0 0 0 2.95 2.95h8.5a2.95 2.95 0 0 0 2.95-2.95v-8.5a2.95 2.95 0 0 0-2.95-2.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.8A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Z"
      />
    </svg>
  );
}

export default function HandoLandingPage() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img className="brand-mark" src="/hando-logo.png" alt="Logo de Hando" />
            <div>
              <p className="brand-name">Hando</p>
              <p className="brand-tagline">Clinical handover intelligence</p>
            </div>
          </div>
          <nav className="site-nav">
            <a href="#problema">Problema</a>
            <a href="#solucion">Solución</a>
            <a href="#quienes-somos">Quiénes somos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-pill">Tecnología para continuidad clínica y seguridad del paciente</div>
              <h1>La calidad del handover también es seguridad del paciente.</h1>
              <p>
                Hando ayuda a los equipos de salud a estructurar, centralizar y dar continuidad a la información clínica crítica entre turnos,
                reduciendo pérdidas de información y mejorando la coordinación asistencial.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">
                  Solicitar contacto
                </a>
                <a className="btn btn-secondary" href="#solucion">
                  Conocer Hando
                </a>
              </div>
            </div>

            <div className="hero-card-wrap">
              <div className="hero-card">
                <div className="info-card muted">
                  <p className="info-title">Problema frecuente</p>
                  <p>Información crítica repartida entre cuadernos, WhatsApp, memoria del equipo y registros dispersos.</p>
                </div>
                <div className="info-card teal">
                  <p className="info-title">Lo que buscamos cambiar</p>
                  <p>Un handover más claro, trazable y útil para la toma de decisiones clínicas y la continuidad del cuidado.</p>
                </div>
                <div className="metric-grid">
                  <div className="metric-card">
                    <p className="metric-title">Continuidad</p>
                    <p>Mejor transferencia de información entre equipos y turnos.</p>
                  </div>
                  <div className="metric-card">
                    <p className="metric-title">Trazabilidad</p>
                    <p>Mayor claridad sobre qué se registró y qué quedó pendiente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problema" className="section section-soft section-bordered">
          <div className="container">
            <div className="section-copy section-copy-wide">
              <p className="section-label">El problema</p>
              <h2>Cuando el handover falla, el riesgo no es administrativo. Es clínico.</h2>
              <p>
                En muchos entornos asistenciales, la información relevante del turno sigue circulando en formatos fragmentados. Eso dificulta la continuidad,
                aumenta la dependencia de la memoria individual y expone al equipo a omisiones evitables.
              </p>
            </div>
            <div className="card-grid thirds">
              {[
                "Información dispersa entre múltiples canales",
                "Dificultad para seguir pendientes y novedades relevantes",
                "Menor estandarización en entregas de turno críticas",
              ].map((item) => (
                <div key={item} className="surface-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solucion" className="section">
          <div className="container split-grid">
            <div className="section-copy">
              <p className="section-label">La solución</p>
              <h2>Una capa digital para ordenar y fortalecer el handover clínico.</h2>
              <p>
                Hando está diseñado para apoyar la entrega clínica con una estructura más clara, trazable y operativamente útil. Nuestro enfoque pone el acento
                en la seguridad del paciente, la continuidad del cuidado y la coordinación de equipos de salud.
              </p>
            </div>
            <div className="dark-panel">
              <p className="dark-label">Enfoque Hando</p>
              <ul>
                <li>Estructuración de información clínica relevante entre turnos</li>
                <li>Mayor visibilidad de novedades, pendientes y continuidad</li>
                <li>Apoyo a la coordinación asistencial con foco operativo</li>
                <li>Base para aprendizaje y mejora continua del equipo</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-bordered">
          <div className="container">
            <div className="section-copy section-copy-wide">
              <p className="section-label">Beneficios</p>
              <h2>Tecnología diseñada para equipos clínicos que necesitan claridad, continuidad y confianza.</h2>
            </div>
            <div className="card-grid quarters">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="surface-card benefit-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container dual-panels">
            <div className="gradient-panel">
              <div className="panel-horizontal">
                <div className="panel-copy panel-copy-title">
                  <p className="section-label">Retroalimentación inteligente</p>
                  <h2>Más que registrar: transformar la práctica diaria en aprendizaje útil.</h2>
                </div>
                <div className="panel-copy panel-copy-body">
                  <p>
                    Nuestros productos también buscan generar retroalimentaciones personalizadas a partir de la práctica clínica de los funcionarios de salud,
                    ayudando a identificar patrones, reforzar buenas prácticas y apoyar procesos de mejora continua.
                  </p>
                </div>
              </div>
            </div>
            <div className="surface-panel support-panel">
              <div className="panel-horizontal">
                <div className="panel-copy">
                  <p className="support-label">Respaldo</p>
                  <h2>Un proyecto impulsado con visión de innovación en salud.</h2>
                  <p>
                    Hando ha sido apoyado por el programa Start-Up Chile de Corfo, fortaleciendo el desarrollo de una propuesta tecnológica enfocada en continuidad
                    clínica, eficiencia operativa y seguridad del paciente.
                  </p>
                </div>
                <div className="panel-side panel-side-dark">
                  <img src="/startup-chile-blanco.png" alt="Start-Up Chile by Corfo" className="support-logo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="section section-bordered">
          <div className="container">
            <div className="section-copy section-copy-wide">
              <p className="section-label">Quiénes somos</p>
            </div>

            <div className="team-grid">
              <article className="team-card">
                <div>
                  <h2 className="team-name">Felipe Jil Vargas</h2>
                  <p className="team-role">CEO</p>
                  <p className="team-role">Co Founder</p>
                </div>
                <div className="team-links" aria-label="Redes sociales de Felipe Jil Vargas">
                  <a href="https://www.linkedin.com/in/felipejilvargas/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Felipe Jil Vargas">
                    <LinkedInIcon />
                  </a>
                  <a href="https://www.instagram.com/enfermeria_innovacion/" target="_blank" rel="noreferrer" aria-label="Instagram de Felipe Jil Vargas">
                    <InstagramIcon />
                  </a>
                </div>
              </article>

              <article className="team-card">
                <div>
                  <h2 className="team-name">Ricardo Cáceres Villar</h2>
                  <p className="team-role">COO</p>
                  <p className="team-role">Co Founder</p>
                </div>
                <div className="team-links" aria-label="Redes sociales de Ricardo Cáceres Villar">
                  <a href="https://www.linkedin.com/in/ricardocaceresvillar/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Ricardo Cáceres Villar">
                    <LinkedInIcon />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <div className="container contact-grid">
            <div className="section-copy">
              <div className="contact-brand">
                <img src="/hando-logo.png" alt="Logo de Hando" className="contact-brand-mark" />
                <span className="contact-brand-name">HANDO</span>
              </div>
              <h2 className="contact-title">Conversemos sobre cómo Hando puede apoyar a tu equipo.</h2>
            </div>

            <div className="contact-card">
              <div>
                <p className="contact-card-title">Correo</p>
                <p>contacto@hando.health</p>
              </div>
            </div>
          </div>
          <footer className="site-footer">2026 Hando. Todos los derechos reservados.</footer>
        </section>
      </main>
    </div>
  );
}
