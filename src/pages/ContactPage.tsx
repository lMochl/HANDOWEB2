import { Clock3, Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { InstagramIcon, LinkedInIcon } from "../components/SocialIcons";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const solutions = ["Hando Calendar", "Hando Science", "Hando (ecosistema)", "Otro"];

export default function ContactPage() {
  const initialSolution = useMemo(() => {
    const value = new URLSearchParams(window.location.search).get("solucion");
    if (value === "calendar") return "Hando Calendar";
    if (value === "science") return "Hando Science";
    return "";
  }, []);
  const [solution, setSolution] = useState(initialSolution);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const fields = [
      ["Nombre", data.get("nombre")], ["Apellido", data.get("apellido")],
      ["Organización", data.get("organizacion")], ["Cargo", data.get("cargo")],
      ["Email", data.get("email")], ["Teléfono", data.get("telefono")],
      ["Solución de interés", data.get("solucion")], ["Mensaje", data.get("mensaje")],
    ];
    const body = fields.map(([label, value]) => `${label}: ${value || "—"}`).join("\n");
    const subject = `Solicitud Hando - ${data.get("solucion") || "Contacto"}`;
    window.location.href = `mailto:felipe@hando.health?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="site-page contact-page">
      <SiteHeader activePage="contact" />
      <main>
        <section className="inner-hero contact-hero">
          <div className="site-shell">
            <span className="section-tag">Contacto</span>
            <h1>Hablemos.</h1>
            <p>Cuéntanos sobre tu organización y lo que necesitas. Encontraremos la solución adecuada dentro del ecosistema Hando.</p>
          </div>
        </section>

        <section className="content-section contact-content">
          <div className="site-shell contact-grid">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label>Nombre <span>*</span><input name="nombre" placeholder="Tu nombre" autoComplete="given-name" required /></label>
                <label>Apellido <span>*</span><input name="apellido" placeholder="Tu apellido" autoComplete="family-name" required /></label>
              </div>
              <div className="form-row">
                <label>Organización<input name="organizacion" placeholder="Nombre de tu institución" autoComplete="organization" /></label>
                <label>Cargo<input name="cargo" placeholder="Tu rol o cargo" autoComplete="organization-title" /></label>
              </div>
              <div className="form-row">
                <label>Email <span>*</span><input name="email" type="email" placeholder="tu@correo.com" autoComplete="email" required /></label>
                <label>Teléfono<input name="telefono" type="tel" placeholder="+56 9 XXXX XXXX" autoComplete="tel" /></label>
              </div>
              <fieldset>
                <legend>Solución de interés</legend>
                <div className="solution-picks">
                  {solutions.map((item) => (
                    <label key={item}><input type="radio" name="solucion" value={item} checked={solution === item} onChange={() => setSolution(item)} /><span>{item}</span></label>
                  ))}
                </div>
              </fieldset>
              <label>¿Cómo podemos ayudarte?<textarea name="mensaje" placeholder="Cuéntanos brevemente sobre tu equipo, organización y lo que estás buscando..." /></label>
              <div className="form-submit">
                <button className="button button-primary" type="submit">Enviar solicitud <Send aria-hidden="true" /></button>
                <p>Al enviar se abrirá tu aplicación de correo con la solicitud preparada. Revisa y confirma el envío.</p>
              </div>
            </form>

            <aside className="contact-aside">
              <h2>Canales de contacto</h2>
              <section><Mail aria-hidden="true" /><div><h3>Email</h3><a href="mailto:felipe@hando.health">felipe@hando.health</a><a href="mailto:ricardo@hando.health">ricardo@hando.health</a></div></section>
              <section><Clock3 aria-hidden="true" /><div><h3>Tiempo de respuesta</h3><strong>2 horas</strong><p>Nuestro equipo revisará tu solicitud y responderá a la brevedad.</p></div></section>
              <section><MapPin aria-hidden="true" /><div><h3>Ubicación</h3><p>Santiago, Chile</p></div></section>
              <section><div className="contact-socials"><a href="https://www.linkedin.com/company/hando-health" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a><a href="https://www.instagram.com/hando.health" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a></div></section>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
