import {
  ArrowRightLeft,
  CalendarDays,
  Check,
  Clock3,
  Eye,
  FileSpreadsheet,
  Mail,
  MessageCircle,
  RefreshCw,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

const roster = [
  ["DR", "Dr. Rodríguez", "Médico", "07:00 – 15:00"],
  ["EM", "Enf. Morales", "Enfermería", "15:00 – 23:00"],
  ["TP", "Téc. Paredes", "Técnico", "23:00 – 07:00"],
  ["DF", "Dr. Fuentes", "Médico", "07:00 – 15:00"],
];

const problems = [
  [FileSpreadsheet, "Planillas que se desactualizan constantemente y generan confusión."],
  [MessageCircle, "Coordinación por WhatsApp o correo, sin trazabilidad ni control."],
  [Mail, "Documentos aislados que no se sincronizan entre los miembros del equipo."],
  [ArrowRightLeft, "Cambios de turno gestionados informalmente que aumentan el riesgo de errores."],
  [Eye, "Sin visibilidad global de la planificación ni de las especialidades disponibles."],
  [Clock3, "Tiempo excesivo dedicado a coordinar en lugar de atender."],
];

const features = [
  "Calendarización",
  "Patrones de turno",
  "Equipos de trabajo",
  "Biblioteca de profesionales",
  "Especialidades y roles",
  "Gestión de cambios",
  "Bloques y equipos",
  "Visualización de horarios",
];

const benefits = [
  [CalendarDays, "Planificación centralizada", "Toda la información de turnos en un solo lugar, accesible para todo el equipo."],
  [RefreshCw, "Cambios sin confusión", "Gestión de cambios de turno con registro y notificación automática."],
  [Eye, "Visibilidad total", "Vista clara de la planificación por equipos, especialidades y fechas."],
  [Zap, "Menos tiempo administrativo", "Reduce significativamente el tiempo dedicado a coordinación manual."],
];

const plans = [
  {
    name: "Plan Inicial",
    description: "Para equipos pequeños que comienzan a centralizar su planificación.",
    price: "$20.000 CLP + IVA",
    features: ["1 acceso a coordinador", "20 profesionales visualizadores o 10 activos", "Patrones de turno", "Soporte por email"],
  },
  {
    name: "Plan Equipo",
    description: "Para unidades que requieren gestión avanzada de turnos y equipos.",
    price: "$40.000 CLP + IVA",
    features: ["2 accesos a coordinadores", "40 profesionales visualizadores o 30 activos", "Biblioteca de profesionales", "Soporte prioritario"],
  },
  {
    name: "Plan Empresa",
    description: "Para instituciones de salud con múltiples unidades y equipos.",
    price: "Plan personalizado",
    features: ["Más de 50 profesionales activos", "Configuración según requerimientos", "Onboarding dedicado", "SLA garantizado"],
    recommended: true,
  },
];

function CalendarPreview() {
  const [selectedDay, setSelectedDay] = useState(2);
  return (
    <div className="calendar-preview" aria-label="Vista ilustrativa de turnos semanales">
      <div className="preview-heading">
        <div><span>Semana actual</span><strong>Unidad de Urgencias</strong></div>
        <div className="weekday-selector">
          {weekDays.map((day, index) => (
            <button
              key={`${day}-${index}`}
              type="button"
              className={selectedDay === index ? "is-selected" : undefined}
              aria-pressed={selectedDay === index}
              aria-label={`Seleccionar día ${index + 1}`}
              onClick={() => setSelectedDay(index)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      <div className="roster-list">
        {roster.map(([initials, name, role, time]) => (
          <div key={name}>
            <span>{initials}</span>
            <div><strong>{name}</strong><small>{role}</small></div>
            <time>{time}</time>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonthPreview() {
  const active = new Set([4, 5, 11, 12, 18, 19, 25, 26]);
  const pale = new Set([2, 3, 9, 10, 16, 17, 23, 24, 30]);
  return (
    <div className="month-preview">
      <div className="month-heading">
        <div><strong>Organización centralizada</strong><span>Vista del mes · Equipo de cirugía</span></div>
        <CalendarDays aria-hidden="true" />
      </div>
      <div className="month-weekdays" aria-hidden="true">{weekDays.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div>
      <div className="month-grid" aria-label="Calendario mensual ilustrativo">
        {Array.from({ length: 30 }, (_, index) => {
          const day = index + 1;
          return <span key={day} className={active.has(day) ? "active" : pale.has(day) ? "pale" : undefined}>{day}</span>;
        })}
      </div>
      <div className="calendar-legend"><span><i className="legend-dark" /> Turno mañana</span><span><i className="legend-light" /> Turno tarde</span><span><i /> Libre</span></div>
    </div>
  );
}

export default function CalendarPage() {
  return (
    <div className="site-page calendar-page">
      <SiteHeader activePage="calendar" />
      <main>
        <section className="product-hero calendar-hero">
          <img src="/hando-design/backgrounds/calendar.png" alt="" className="product-hero-art" />
          <div className="product-hero-overlay" />
          <div className="site-shell product-hero-grid">
            <div className="product-hero-copy">
              <span className="product-badge"><img src="/hando-design/logos/calendar-mark.svg" alt="" /> Hando Calendar</span>
              <h1>Turnos y equipos, <em>sin el caos.</em></h1>
              <p>Simplifica la planificación, coordinación y gestión de turnos de tu equipo de salud en una sola plataforma centralizada.</p>
              <div className="button-row"><a className="button button-calendar" href="/contacto.html?solucion=calendar">Solicitar cotización</a><a className="button button-ghost" href="#solucion">Ver solución</a></div>
            </div>
            <CalendarPreview />
          </div>
        </section>

        <section className="content-section product-problem">
          <div className="site-shell">
            <div className="centered-heading">
              <span className="section-tag calendar-tag">El problema</span>
              <h2>Coordinar turnos no debería tomar <em>tanto tiempo.</em></h2>
              <p>La mayoría de los equipos de salud gestiona sus turnos con herramientas que no fueron diseñadas para eso.</p>
            </div>
            <div className="problem-grid">
              {problems.map(([Icon, copy]) => {
                const ProblemIcon = Icon as typeof CalendarDays;
                return <article key={copy as string}><ProblemIcon aria-hidden="true" /><p>{copy as string}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="product-solution calendar-solution" id="solucion">
          <div className="site-shell split-section">
            <div className="section-copy">
              <span className="section-tag calendar-tag">La solución</span>
              <h2>Todo tu equipo, <em>un solo calendario.</em></h2>
              <p>Hando Calendar centraliza la planificación de turnos, equipos y profesionales en una plataforma diseñada específicamente para el sector salud.</p>
              <div className="feature-check-grid">
                {features.map((feature) => <div key={feature}><Check aria-hidden="true" /> {feature}</div>)}
              </div>
            </div>
            <MonthPreview />
          </div>
        </section>

        <section className="content-section">
          <div className="site-shell">
            <div className="centered-heading"><span className="section-tag calendar-tag">Beneficios</span><h2>Menos coordinación manual. <em>Más claridad para el equipo.</em></h2></div>
            <div className="benefit-grid">
              {benefits.map(([Icon, title, copy]) => {
                const BenefitIcon = Icon as typeof CalendarDays;
                return <article key={title as string}><BenefitIcon aria-hidden="true" /><h3>{title as string}</h3><p>{copy as string}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="site-shell">
            <div className="centered-heading compact-heading"><span className="section-tag calendar-tag">Planes</span><h2>Un plan para cada equipo.</h2><p>Planes flexibles adaptados al tamaño y necesidades de tu organización.</p></div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article key={plan.name} className={plan.recommended ? "recommended" : undefined}>
                  {plan.recommended && <span className="recommended-label">Recomendado</span>}
                  <h3>{plan.name}</h3><p>{plan.description}</p><span className="price-label">Precio</span><strong className="price">{plan.price}</strong>
                  <ul>{plan.features.map((feature) => <li key={feature}><Check aria-hidden="true" /> {feature}</li>)}</ul>
                  <a className={`button ${plan.recommended ? "button-calendar" : "button-dark"}`} href="/contacto.html?solucion=calendar">Solicitar cotización</a>
                </article>
              ))}
            </div>
            <p className="pricing-note">Los precios se definen según el tamaño y requerimientos de cada organización. Solicita una cotización personalizada.</p>
          </div>
        </section>

        <section className="content-section closing-section">
          <div className="site-shell"><div className="closing-card"><Users aria-hidden="true" /><h2>Organiza tus turnos <em>con Hando.</em></h2><p>Cuéntanos sobre tu organización y encontraremos un plan para tus equipos de salud.</p><a className="button button-calendar" href="/contacto.html?solucion=calendar">Solicitar cotización</a></div></div>
        </section>
      </main>
      <SiteFooter accent="calendar" />
    </div>
  );
}
