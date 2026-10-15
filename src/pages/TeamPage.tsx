import { ArrowRight, UsersRound } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { LinkedInIcon } from "../components/SocialIcons";

const members = [
  {
    name: "Felipe Jil Vargas",
    degree: "Enfermero · Universidad de Chile",
    role: "CEO & Co-founder",
    bio: "Magíster en Innovación por la Universidad Católica. Diplomado en Informática Médica y académico de la Facultad de Ingeniería UNAB.",
    image: "/hando-design/people/felipe.png",
    linkedin: "https://www.linkedin.com/in/felipejilvargas/",
  },
  {
    name: "Isidora Céspedes Gaete",
    degree: "Diseñadora Industrial y Servicios · U. de Chile",
    role: "UX/UI Design",
    bio: "Especialista en diseño de experiencias digitales, interfaces y servicios centrados en las personas.",
    image: "/hando-design/people/isidora.png",
    linkedin: "https://www.linkedin.com/in/isidora-cespedes-gaete/",
  },
  {
    name: "Ricardo Cáceres Villar",
    degree: "Médico Cirujano · Universidad de Chile",
    role: "Co-founder",
    bio: "Experiencia clínica y una visión orientada a la transformación digital y la innovación aplicada al sector salud.",
    image: "/hando-design/people/ricardo.png",
    linkedin: "https://www.linkedin.com/in/ricardocaceresvillar/",
  },
  {
    name: "Matías Guiñez Monsalve",
    degree: "Ingeniero Civil en Informática · U. del Bío-Bío",
    role: "Full Stack Developer",
    bio: "Desarrollo de productos digitales y evaluación de soluciones tecnológicas para el ecosistema de salud.",
    image: "/hando-design/people/matias.png",
    linkedin: "https://www.linkedin.com/in/mat%C3%ADas-alexander-gui%C3%B1ez-monsalve/",
  },
  {
    name: "Priscilla Vergara",
    degree: "Tecnóloga en Informática Biomédica · DUOC UC",
    role: "Informática Biomédica",
    bio: "Integra conocimientos tecnológicos y clínicos para construir soluciones útiles, seguras y conectadas con la práctica asistencial.",
    image: "/hando-design/people/priscilla.png",
    linkedin: "https://www.linkedin.com/in/priscilla-vergara-c-1bab36179/",
  },
];

export default function TeamPage() {
  return (
    <div className="site-page team-page">
      <SiteHeader activePage="team" />
      <main>
        <section className="inner-hero team-hero">
          <div className="site-shell centered-heading">
            <span className="section-tag calendar-tag">Equipo</span>
            <h1>Las personas <em>detrás de Hando.</em></h1>
            <p>Un equipo multidisciplinario que combina experiencia en tecnología, salud, investigación y diseño de producto con un propósito compartido.</p>
          </div>
        </section>

        <section className="content-section team-list-section">
          <div className="site-shell team-grid">
            {members.map((member) => (
              <article className="team-profile" key={member.name}>
                <div className="team-photo"><img src={member.image} alt={`Retrato de ${member.name}`} /></div>
                <div className="team-profile-copy">
                  <span>{member.degree}</span>
                  <h2>{member.name}</h2>
                  <strong>{member.role}</strong>
                  <p>{member.bio}</p>
                  <a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="join-section">
          <div className="site-shell join-content">
            <UsersRound aria-hidden="true" />
            <div><h2>Estamos abiertos a conocerte.</h2><p>Buscamos personas con experiencia en salud, tecnología, investigación y diseño que quieran transformar problemas reales.</p></div>
            <a className="button button-primary" href="/contacto.html">Contáctanos <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
