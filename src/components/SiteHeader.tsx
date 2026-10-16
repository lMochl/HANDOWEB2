import { useEffect, useState } from "react";
import Menu from "lucide-react/dist/esm/icons/menu.js";
import X from "lucide-react/dist/esm/icons/x.js";
export type SitePage = "home" | "calendar" | "science" | "team" | "contact";
const links: Array<{ page: SitePage; label: string; href: string }> = [
  { page: "home", label: "Hando", href: "index.html" },
  { page: "calendar", label: "Calendar", href: "calendar.html" },
  { page: "science", label: "Science", href: "science.html" },
  { page: "team", label: "Equipo", href: "equipo.html" },
  { page: "contact", label: "Contacto", href: "contacto.html" },
];
export default function SiteHeader({ activePage }: { activePage: SitePage }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={"site-header header-" + activePage}>
      <div className="site-shell header-inner">
        <a
          className="site-brand"
          href="index.html"
          aria-label="Hando, inicio"
        >
          <img className="figma-svg" src="/figma/home/imgGroup85.svg" alt="" />
          <span>Hando</span>
        </a>
        <nav className="desktop-navigation" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.page}
              href={link.href}
              className={link.page === activePage ? "is-active" : undefined}
              aria-current={link.page === activePage ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header-quote brand-dark" href="contacto.html">
          Solicitar cotización
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Navegación móvil"
        >
          {links.map((link) => (
            <a
              key={link.page}
              href={link.href}
              aria-current={link.page === activePage ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="mobile-quote brand-dark" href="contacto.html">
            Solicitar cotización
          </a>
        </nav>
      )}
    </header>
  );
}
