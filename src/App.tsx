import { lazy, Suspense, useEffect } from "react";

const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SciencePage = lazy(() => import("./pages/SciencePage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));

const pages = {
  "/calendar.html": {
    title: "Hando Calendar | Hando",
    description:
      "Simplifica la planificación, coordinación y gestión de turnos en salud con Hando Calendar.",
    component: CalendarPage,
  },
  "/science.html": {
    title: "Hando Science | Hando",
    description:
      "Hando Science: investigación en salud con información estructurada.",
    component: SciencePage,
  },
  "/equipo.html": {
    title: "Equipo | Hando",
    description: "Conoce al equipo multidisciplinario detrás de Hando.",
    component: TeamPage,
  },
  "/contacto.html": {
    title: "Contacto | Hando",
    description:
      "Conversemos sobre las necesidades de tu organización y las soluciones de Hando.",
    component: ContactPage,
  },
} as const;

function ScrollToInitialSection() {
  useEffect(() => {
    if (!window.location.hash) return;

    let active = true;
    // Run after the lazy page mounts and fonts settle, when its anchors exist.
    void document.fonts.ready.then(() => {
      if (!active) return;
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    });

    return () => {
      active = false;
    };
  }, []);

  return null;
}

export default function App() {
  const pathname = window.location.pathname;
  const page = pages[pathname as keyof typeof pages] ?? {
    title: "Hando | Tecnología para equipos de salud",
    description:
      "Hando desarrolla soluciones tecnológicas para el análisis de datos y la coordinación clínica.",
    component: HomePage,
  };

  useEffect(() => {
    document.title = page.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", page.description);
  }, [page.description, page.title]);

  const Page = page.component;
  return (
    <Suspense
      fallback={
        <div
          className="page-loading"
          role="status"
          aria-label="Cargando página"
        />
      }
    >
      <Page />
      <ScrollToInitialSection />
    </Suspense>
  );
}
