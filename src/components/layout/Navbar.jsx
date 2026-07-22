import { useEffect, useState } from 'react';
import { NAV_LINKS, APP_URL } from '../../data/navigation';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import logo from '../../assets/logo/civcalpro-logo.png';

/**
 * Navbar — barra de navegación fija.
 *
 * - Scrollspy: resalta el enlace de la sección visible usando IntersectionObserver.
 * - Menú hamburguesa accesible en móvil (aria-expanded + cierre al navegar).
 * - El CTA "Probar CivCalPro" abre la plataforma real en una pestaña nueva.
 */
function Navbar() {
  const [activeId, setActiveId] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  // Observa las secciones para marcar el enlace activo durante el scroll.
  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Bloquea el scroll del body y permite cerrar con Escape mientras el menú está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div
        className={`navbar__backdrop ${menuOpen ? 'navbar__backdrop--visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div className="navbar__inner container">
        <a href="#inicio" className="navbar__brand" aria-label="CivCalPro — ir al inicio">
          <img src={logo} alt="" width="44" height="38" />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">
              CIVCAL<span className="text-accent">PRO</span>
            </span>
            <span className="navbar__brand-tagline">
              Software de Cálculo para la Construcción
            </span>
          </span>
        </a>

        <nav
          id="main-menu"
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={APP_URL} withArrow className="navbar__cta-mobile">
            Probar CivCalPro
          </Button>
        </nav>

        <div className="navbar__actions">
          <Button href={APP_URL} withArrow className="navbar__cta">
            Probar CivCalPro
          </Button>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
