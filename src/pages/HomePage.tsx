import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  ClipboardCheck,
  Database,
  HeartHandshake,
  Network,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const strengths = [
  ["Coordinación", "Centralizada"],
  ["Continuidad", "Garantizada"],
  ["Información", "Estructurada"],
  ["Seguridad", "Fundamental"],
];

const aiCapabilities = [
  {
    icon: Bot,
    title: "Automatización de tareas repetitivas",
    copy: "Reducimos la carga de procesos manuales para que los equipos puedan enfocarse en lo que importa.",
  },
  {
    icon: Database,
    title: "Organización inteligente de información",
    copy: "Identificamos y estructuramos información relevante de forma automática, sin intervención manual.",
  },
  {
    icon: ClipboardCheck,
    title: "Apoyo a la toma de decisiones",
    copy: "Información disponible en el momento adecuado, para que las decisiones sean más rápidas y seguras.",
  },
];

export default function HomePage() {
  return (
    <div className="site-page home-page">
      <SiteHeader activePage="home" />
      <main>
        <section className="home-hero">
          <img className="hero-background" src="/hando-design/backgrounds/hero.png" alt="" />
          <div className="hero-overlay" />
          <div className="site-shell hero-content">
            <div className="hero-copy">
              <span className="hero-status"><span /> Ecosistema tecnológico para equipos de salud</span>
              <h1>Información disponible <em>al instante</em></h1>
              <p>Hando desarrolla soluciones tecnológicas de fácil uso para el análisis de datos y la coordinación clínica.</p>
              <div className="button-row">
                <a className="button button-primary" href="#soluciones">Conoce nuestras soluciones</a>
                <a className="button button-ghost" href="#que-es">Conoce Hando</a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="que-es">
          <div className="site-shell split-section">
            <div className="section-copy">
              <span className="section-tag">Qué es Hando</span>
              <h2>Tecnología que fortalece <em>el desempeño de tu equipo</em></h2>
              <p>Hando nace de una observación concreta: los equipos de salud operan con información fragmentada, procesos desconectados y una dependencia excesiva de canales informales para coordinar tareas críticas.</p>
              <p>Desarrollamos soluciones que centralizan, organizan y hacen fluir la información entre personas, equipos y procesos, reduciendo la fricción y aumentando la seguridad en cada etapa.</p>
              <div className="strength-grid">
                {strengths.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-visual visual-with-note">
              <img src="/hando-design/images/stethoscope.png" alt="Estetoscopio, símbolo del trabajo clínico" />
              <div className="floating-note">
                <strong>2 soluciones</strong>
                <span>4 proyectos en desarrollo dentro de nuestro ecosistema</span>
              </div>
            </div>
          </div>
        </section>

        <section className="vision-section" id="vision">
          <div className="site-shell">
            <div className="centered-heading">
              <span className="section-tag">Nuestra visión</span>
              <h2>Tecnología al servicio <em>de las personas.</em></h2>
              <p>Creemos que el valor de la tecnología se mide por su impacto en las personas. Cada solución nace de un problema real y busca mejorar cómo los equipos coordinan, comunican y toman decisiones.</p>
            </div>

            <div className="vision-flow" aria-label="Flujo desde las personas hacia la continuidad del cuidado">
              <div><span><Users aria-hidden="true" /></span><strong>Personas</strong></div>
              <i />
              <div><span><Database aria-hidden="true" /></span><strong>Información</strong></div>
              <i />
              <div><span><Network aria-hidden="true" /></span><strong>Coordinación</strong></div>
              <i />
              <div><span className="flow-highlight"><Check aria-hidden="true" /></span><strong>Continuidad</strong></div>
            </div>

            <div className="vision-panels">
              <article className="vision-panel vision-panel-dark">
                <span>Nuestra visión</span>
                <h3>Un ecosistema de salud donde la información fluye sin fricción.</h3>
                <Workflow aria-hidden="true" />
              </article>
              <article className="vision-panel vision-panel-light">
                <span>Qué nos mueve</span>
                <h3>Problemas reales que exigen soluciones reales.</h3>
                <ul>
                  <li><Check aria-hidden="true" /> Información fragmentada entre sistemas y personas</li>
                  <li><Check aria-hidden="true" /> Procesos desconectados que generan errores</li>
                  <li><Check aria-hidden="true" /> Canales informales para decisiones críticas</li>
                  <li><Check aria-hidden="true" /> Pérdida de continuidad en los cuidados</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section ai-section">
          <div className="site-shell split-section split-reversed">
            <div className="feature-visual visual-with-note">
              <img src="/hando-design/images/ai-applied.png" alt="Ilustración de inteligencia artificial aplicada a la salud" />
              <div className="floating-note light-note">
                <span className="live-dot" />
                <strong>IA integrada</strong>
                <small>Automatización de procesos</small>
              </div>
            </div>
            <div className="section-copy">
              <span className="section-tag">Tecnología e IA</span>
              <h2>Tecnología inteligente para equipos de salud</h2>
              <p>Integramos tecnología y automatización para simplificar los procesos y fortalecer el trabajo de los equipos.</p>
              <div className="capability-list">
                {aiCapabilities.map(({ icon: Icon, title, copy }) => (
                  <div key={title}>
                    <span><Icon aria-hidden="true" /></span>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="solutions-section" id="soluciones">
          <div className="site-shell">
            <div className="centered-heading compact-heading">
              <span className="section-tag">Ecosistema Hando</span>
              <h2>Nuestras <em>soluciones</em></h2>
              <p>Cada producto de Hando aborda un área específica del ecosistema de salud, con identidad propia y propósito claro.</p>
            </div>
            <div className="solution-grid">
              <article className="solution-card calendar-card">
                <div className="solution-card-top">
                  <img src="/hando-design/logos/calendar-mark.svg" alt="" />
                  <span>Calendar</span>
                </div>
                <h3>Hando Calendar</h3>
                <strong>Planificación de turnos</strong>
                <p>Plataforma para la planificación, coordinación y gestión de turnos y equipos profesionales en el sector salud.</p>
                <a href="/calendar.html">Conocer solución <ArrowRight aria-hidden="true" /></a>
              </article>
              <article className="solution-card science-card">
                <div className="solution-card-top">
                  <img src="/hando-design/logos/science-mark.svg" alt="" />
                  <span>Science</span>
                </div>
                <h3>Hando Science</h3>
                <strong>Análisis de datos</strong>
                <p>Solución tecnológica orientada al ámbito científico y de investigación asociado al sector salud.</p>
                <a href="/science.html">Conocer solución <ArrowRight aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section closing-section">
          <div className="site-shell">
            <div className="closing-card">
              <HeartHandshake aria-hidden="true" />
              <h2>Construyamos juntos una mejor salud.</h2>
              <p>Cuéntanos sobre tu organización y encontraremos la solución adecuada dentro del ecosistema Hando.</p>
              <a className="button button-primary" href="/contacto.html">Solicitar cotización</a>
            </div>
            <div className="support-block">
              <div>
                <Sparkles aria-hidden="true" />
                <h2>Innovación, ciencia y colaboración</h2>
                <p>Desarrollamos tecnología en diálogo con los desafíos reales del sector salud.</p>
              </div>
              <div className="support-logos">
                <img src="/hando-design/logos/startup-chile.png" alt="Start-Up Chile" />
                <img src="/hando-design/logos/udd-ventures.svg" alt="UDD Ventures" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
