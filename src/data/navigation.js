/**
 * Datos de navegación del sitio.
 * Los enlaces internos usan anclas (#id de sección); los externos abren
 * la plataforma real de CivCalPro.
 */

/** URL de la plataforma real de CivCalPro. */
export const APP_URL = 'https://civcalpro.vercel.app/';

/** Enlaces del menú principal (navbar). */
export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'caracteristicas', label: 'Características', href: '#caracteristicas' },
  { id: 'modulos', label: 'Módulos', href: '#modulos' },
  { id: 'normas', label: 'Normas', href: '#normas' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

/** Columnas de enlaces del footer. */
export const FOOTER_COLUMNS = [
  {
    title: 'Producto',
    links: [
      { label: 'Características', href: '#caracteristicas' },
      { label: 'Módulos', href: '#modulos' },
      { label: 'Normas', href: '#normas' },
      { label: 'Novedades', href: APP_URL, external: true },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Documentación', href: APP_URL, external: true },
      { label: 'Guías', href: APP_URL, external: true },
      { label: 'Blog', href: APP_URL, external: true },
      { label: 'Tutoriales', href: APP_URL, external: true },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Quiénes somos', href: '#inicio' },
      { label: 'Contacto', href: '#contacto' },
      { label: 'Términos', href: APP_URL, external: true },
      { label: 'Privacidad', href: APP_URL, external: true },
    ],
  },
];

/** Redes sociales del footer. */
export const SOCIAL_LINKS = [
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { id: 'youtube', label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
];
