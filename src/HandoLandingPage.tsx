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
              <h2>Construimos tecnología para mejorar la coordinación clínica en momentos donde la información importa de verdad.</h2>
              <p>
                Somos un equipo enfocado en desarrollar herramientas digitales para fortalecer la comunicación clínica, apoyar la continuidad asistencial y reducir
                fricciones en la operación diaria de los equipos de salud.
              </p>
              <p>
                Creemos que un mejor handover no solo mejora procesos: también protege decisiones, tiempos críticos y la experiencia de quienes cuidan pacientes todos
                los días.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <div className="container contact-grid">
            <div className="section-copy">
              <p className="contact-label">Contacto</p>
              <h2>Conversemos sobre cómo Hando puede apoyar a tu equipo.</h2>
              <p>
                Si estás explorando soluciones para handover clínico, continuidad asistencial o coordinación de equipos de salud, estamos disponibles para conversar.
              </p>
            </div>

            <div className="contact-card">
              <div>
                <p className="contact-card-title">Correo</p>
                <p>contacto@hando.health</p>
              </div>
              <div>
                <p className="contact-card-title">Empresa</p>
                <p>Hando</p>
              </div>
              <div>
                <p className="contact-card-title">Enfoque</p>
                <p>Continuidad clínica, coordinación asistencial y seguridad del paciente</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
