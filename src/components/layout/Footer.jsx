import { useState } from 'react';
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '../../data/navigation';
import Icon from '../ui/Icon';
import logo from '../../assets/logo/civcalpro-logo.png';

/** Patrón básico de email para validación en cliente. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Endpoint de FormSubmit: reenvía cada suscripción al buzón del propietario
 * sin necesidad de backend propio. La primera vez que se envíe un formulario,
 * FormSubmit manda un correo de activación a esa dirección — hay que
 * confirmarlo una única vez para que empiecen a llegar las suscripciones.
 */
const NEWSLETTER_ENDPOINT = 'https://formsubmit.co/ajax/chouriolee@gmail.com';

/**
 * Footer — pie de página con columnas de enlaces, newsletter y redes.
 *
 * Actúa como sección "Contacto" (id="contacto", destino del navbar).
 *
 * Seguridad del formulario de newsletter:
 * - Validación y saneamiento del email en cliente (trim + patrón + longitud máxima).
 * - Campo honeypot oculto para descartar bots.
 * - React escapa todo el contenido renderizado (sin dangerouslySetInnerHTML).
 */
function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'error' | 'invalid'

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot: si un bot rellenó el campo oculto, se ignora el envío.
    if (event.target.elements.website.value !== '') return;

    const sanitized = email.trim().toLowerCase().slice(0, 254);
    if (!EMAIL_PATTERN.test(sanitized)) {
      setStatus('invalid');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: sanitized,
          _subject: 'Nueva suscripción al newsletter de CivCalPro',
          _template: 'table',
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('ok');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer id="contacto" className="footer">
      <div className="container footer__inner">
        <div className="footer__grid">
          {/* Marca */}
          <div className="footer__brand">
            <div className="footer__brand-head">
              <img src={logo} alt="" width="48" height="42" />
              <span className="footer__brand-name">
                CIVCAL<span className="text-accent">PRO</span>
              </span>
            </div>
            <p className="footer__tagline">Software de Cálculo para la Construcción</p>
            <ul className="footer__social" aria-label="Redes sociales">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columnas de enlaces */}
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} className="footer__column" aria-label={column.title}>
              <h3 className="footer__column-title">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Newsletter */}
          <div className="footer__column footer__newsletter">
            <h3 className="footer__column-title">Newsletter</h3>
            <p>Recibe tips y novedades sobre ingeniería civil y CivCalPro.</p>
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot invisible para bots */}
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                className="sr-only"
                aria-hidden="true"
              />
              <div className="footer__newsletter-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  maxLength="254"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus(null);
                  }}
                />
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando…' : 'Suscribirme'}
                </button>
              </div>
              <p className="footer__newsletter-status" role="status" aria-live="polite">
                {status === 'ok' && '¡Gracias por suscribirte!'}
                {status === 'invalid' && 'Ingresa un correo electrónico válido.'}
                {status === 'error' && 'No se pudo enviar. Intenta de nuevo en unos minutos.'}
              </p>
            </form>
            <p className="footer__contact-line">
              Escríbenos: <a href="mailto:contacto@civcalpro.app">contacto@civcalpro.app</a>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} CivCalPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
