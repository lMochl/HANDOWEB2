import { Menu, X } from "lucide-react";
import { useState } from "react";

export type SitePage = "home" | "calendar" | "science" | "team" | "contact";

const navItems: Array<{ page: SitePage; label: string; href: string }> = [
  { page: "home", label: "Hando", href: "/" },
  { page: "calendar", label: "Calendar", href: "/calendar.html" },
  { page: "science", label: "Science", href: "/science.html" },
  { page: "team", label: "Equipo", href: "/equipo.html" },
  { page: "contact", label: "Contacto", href: "/contacto.html" },
];

export default function SiteHeader({ activePage }: { activePage: SitePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="site-logo" href="/" aria-label="Ir al inicio de Hando">
          <img src="/hando-design/logos/hando.svg" alt="Hando" />
        </a>

        <nav className="desktop-navigation" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.page}
              href={item.href}
              className={item.page === activePage ? "is-active" : undefined}
              aria-current={item.page === activePage ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-dark header-quote" href="/contacto.html">
          Solicitar cotización
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        aria-label="Navegación móvil"
      >
        {navItems.map((item) => (
          <a
            key={item.page}
            href={item.href}
            className={item.page === activePage ? "is-active" : undefined}
            aria-current={item.page === activePage ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="button button-primary" href="/contacto.html" onClick={() => setMenuOpen(false)}>
          Solicitar cotización
        </a>
      </nav>
    </header>
  );
}
