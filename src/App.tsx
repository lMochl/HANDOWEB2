import { useEffect } from "react";
import CalendarPage from "./pages/CalendarPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import SciencePage from "./pages/SciencePage";
import TeamPage from "./pages/TeamPage";

const pages = {
  "/calendar.html": {
    title: "Hando Calendar | Hando",
    description: "Simplifica la planificación, coordinación y gestión de turnos en salud con Hando Calendar.",
    component: CalendarPage,
  },
  "/science.html": {
    title: "Hando Science | Hando",
    description: "Hando Science: investigación en salud con información estructurada.",
    component: SciencePage,
  },
  "/equipo.html": {
    title: "Equipo | Hando",
    description: "Conoce al equipo multidisciplinario detrás de Hando.",
    component: TeamPage,
  },
  "/contacto.html": {
    title: "Contacto | Hando",
    description: "Conversemos sobre las necesidades de tu organización y las soluciones de Hando.",
    component: ContactPage,
  },
} as const;

export default function App() {
  const pathname = window.location.pathname;
  const page = pages[pathname as keyof typeof pages] ?? {
    title: "Hando | Tecnología para equipos de salud",
    description: "Hando desarrolla soluciones tecnológicas para el análisis de datos y la coordinación clínica.",
    component: HomePage,
  };

  useEffect(() => {
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
  }, [page.description, page.title]);

  const Page = page.component;
  return <Page />;
}
