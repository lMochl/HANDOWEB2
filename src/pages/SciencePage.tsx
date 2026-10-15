import { BarChart3, Check, Database, FlaskConical, Gauge, Search, UsersRound } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const problemItems = [
  [Database, "Información fragmentada", "Datos clínicos distribuidos entre diferentes fuentes y documentos."],
  [Gauge, "Procesos manuales", "Tiempo destinado a clasificar, preparar y estructurar registros."],
  [Search, "Análisis limitado", "Dificultad para convertir datos heterogéneos en información útil."],
];

const benefits = [
  [Database, "Estructura", "Información consistente y preparada para su análisis."],
  [Search, "Accesibilidad", "Datos disponibles para las necesidades de cada proyecto."],
  [UsersRound, "Colaboración", "Mejor coordinación entre equipos de investigación."],
  [BarChart3, "Eficiencia", "Menos esfuerzo destinado a tareas repetitivas."],
];

function ScienceDashboard() {
  const bars = [25, 40, 36, 55, 49, 67, 57, 75, 69, 85, 82, 96];
  return (
    <div className="science-dashboard" aria-label="Panel ilustrativo de investigación">
      <div className="dashboard-status"><span /> Hando Science · Panel de investigación</div>
      <dl>
        <div><dt>Protocolo activo</dt><dd>Estudio HSC-2026-014 <span>Activo</span></dd></div>
        <div><dt>Registros estructurados</dt><dd>2.480</dd></div>
        <div><dt>Calidad de datos</dt><dd>98,4 %</dd></div>
        <div><dt>Estado de procesamiento</dt><dd><span>Actualizado</span></dd></div>
      </dl>
      <div className="dashboard-bars" aria-hidden="true">
        {bars.map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
      </div>
    </div>
  );
}

function AnalysisPreview() {
  return (
    <div className="analysis-preview">
      <div className="analysis-heading"><div><span>Hando Science</span><h3>Panel de análisis</h3></div><strong>Datos organizados</strong></div>
      <div className="analysis-stats"><div><strong>12</strong><span>Variables</span></div><div><strong>8</strong><span>Fuentes</span></div><div><strong>96%</strong><span>Completitud</span></div></div>
      <div className="progress-list">
        <div><p><span>Normalización</span><strong>92%</strong></p><span><i style={{ width: "92%" }} /></span></div>
        <div><p><span>Procesamiento</span><strong>78%</strong></p><span><i style={{ width: "78%" }} /></span></div>
      </div>
      <p className="illustrative-note">Visualización ilustrativa de la interfaz.</p>
    </div>
  );
}

export default function SciencePage() {
  return (
    <div className="site-page science-page">
      <SiteHeader activePage="science" />
      <main>
        <section className="product-hero science-hero">
          <img src="/hando-design/backgrounds/science.png" alt="" className="product-hero-art" />
          <div className="product-hero-overlay" />
          <div className="site-shell product-hero-grid">
            <div className="product-hero-copy">
              <span className="product-badge"><img src="/hando-design/logos/science-mark.svg" alt="" /> Hando Science</span>
              <h1>Investigación con <em>información estructurada.</em></h1>
              <p>Hando Science es la solución tecnológica de Hando orientada al ámbito científico y de investigación en salud.</p>
              <div className="button-row"><a className="button button-science" href="/contacto.html?solucion=science">Solicitar cotización</a><a className="button button-ghost" href="#solucion">Ver solución</a></div>
            </div>
            <ScienceDashboard />
          </div>
        </section>

        <section className="content-section product-problem">
          <div className="site-shell">
            <div className="centered-heading"><span className="section-tag science-tag">El problema</span><h2>Datos dispersos. <em>Investigación compleja.</em></h2><p>La investigación en salud requiere información organizada, trazable y disponible para equipos interdisciplinarios.</p></div>
            <div className="problem-grid three-column-grid">
              {problemItems.map(([Icon, title, copy]) => {
                const ItemIcon = Icon as typeof Database;
                return <article key={title as string}><ItemIcon aria-hidden="true" /><div><h3>{title as string}</h3><p>{copy as string}</p></div></article>;
              })}
            </div>
          </div>
        </section>

        <section className="product-solution science-solution" id="solucion">
          <div className="site-shell split-section">
            <div className="section-copy">
              <span className="section-tag science-tag">La solución</span>
              <h2>De los datos a <em>la investigación.</em></h2>
              <p>Hando Science propone un entorno para organizar y estructurar información relevante para proyectos de investigación en salud.</p>
              <div className="feature-check-grid science-checks">
                {["Organización de datos", "Información estructurada", "Investigación científica", "Trabajo colaborativo"].map((feature) => <div key={feature}><Check aria-hidden="true" /> {feature}</div>)}
              </div>
            </div>
            <AnalysisPreview />
          </div>
        </section>

        <section className="content-section">
          <div className="site-shell">
            <div className="centered-heading"><span className="section-tag science-tag">Beneficios</span><h2>Información que impulsa <em>el conocimiento.</em></h2></div>
            <div className="benefit-grid">
              {benefits.map(([Icon, title, copy]) => {
                const BenefitIcon = Icon as typeof Database;
                return <article key={title as string}><BenefitIcon aria-hidden="true" /><h3>{title as string}</h3><p>{copy as string}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="science-image-section">
          <div className="site-shell split-section">
            <div className="feature-visual"><img src="/hando-design/images/ai-science.png" alt="Ilustración sobre análisis científico asistido por tecnología" /></div>
            <div className="section-copy"><FlaskConical aria-hidden="true" className="section-symbol" /><h2>Conocimiento que se construye con mejores datos.</h2><p>La tecnología no reemplaza la investigación: la hace más ordenada, colaborativa y capaz de convertir evidencia en decisiones.</p><a className="text-link science-link" href="/contacto.html?solucion=science">Conversemos sobre tu proyecto</a></div>
          </div>
        </section>

        <section className="content-section closing-section">
          <div className="site-shell"><div className="closing-card"><FlaskConical aria-hidden="true" /><h2>Conversemos sobre <em>tu proyecto.</em></h2><p>Cuéntanos las necesidades de investigación de tu organización y conoce cómo podemos ayudarte.</p><a className="button button-science" href="/contacto.html?solucion=science">Solicitar cotización</a></div></div>
        </section>
      </main>
      <SiteFooter accent="science" />
    </div>
  );
}
