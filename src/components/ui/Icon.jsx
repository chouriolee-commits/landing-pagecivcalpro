/**
 * Icon — librería de iconos SVG inline.
 *
 * Los iconos se embeben como paths en lugar de cargarse desde un CDN:
 * evita peticiones a terceros (compatible con la CSP `default-src 'self'`)
 * y permite colorearlos con `currentColor`.
 *
 * @param {object} props
 * @param {string} props.name - Nombre del icono (clave de ICON_PATHS).
 * @param {number} [props.size=24] - Tamaño en píxeles.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const ICON_PATHS = {
  calculator: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16v.01" />
    </>
  ),
  layers: (
    <path d="M12 2 2 7.5l10 5.5 10-5.5L12 2ZM2 12.5 12 18l10-5.5M2 17.5 12 23l10-5.5" />
  ),
  'shield-check': (
    <>
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  devices: (
    <>
      <rect x="2" y="4" width="15" height="11" rx="2" />
      <path d="M6 19h7" />
      <rect x="17" y="9" width="5" height="10" rx="1.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.4c1.8.8 3 2.5 3 5.6" />
    </>
  ),
  'clipboard-calc': (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 3.5h6M9 9h6M9 13h.01M12 13h.01M15 13h.01M9 17h.01M12 17h.01M15 17h.01" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18M5 21V7l7-4v18M19 21V11l-7-4" />
      <path d="M9 9h.01M9 13h.01M9 17h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  ruler: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="1.5" transform="rotate(-20 12 12)" />
      <path d="m8 12.5 1-2.7M12 11l1-2.7M16 9.5l1-2.7" />
    </>
  ),
  mixer: (
    <>
      <circle cx="7" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
      <path d="M2 18h3M9 18h5M18 18h3v-4l-3-6H8l-3 6v4M8 8 6 14h11" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15v-4M12 15V8M17 15v-7" />
    </>
  ),
  'file-report': (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
      <path d="M14 2v6h6M9 17v-3M12.5 17v-5M16 17v-2" />
    </>
  ),
  'book-check': (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22H20" />
      <path d="m9 9 2.2 2.2L15.5 6.9" />
    </>
  ),
  flask: (
    <>
      <path d="M9 2h6M10 2v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8.5V2" />
      <path d="M7 15h10" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 15c-2-1-3-2-4-4 1.5-4.5 5-8 10-9-1 5-4.5 8.5-9 10Z" />
      <path d="M9 12c-2 0-3.5 1-4.5 3 1.5.3 2.5.5 3.5 1.5S9.2 19 9.5 20.5c2-1 3-2.5 3-4.5M14.5 6.5h.01" />
    </>
  ),
  'arrow-right': <path d="M4 12h16m0 0-6-6m6 6-6 6" />,
  quote: (
    <path d="M10 8c-3 1-4.5 3-4.5 6.5H9V20H3.5v-5C3.5 9.5 6 6.5 10 5v3Zm10.5 0c-3 1-4.5 3-4.5 6.5h3.5V20H14v-5c0-5.5 2.5-8.5 6.5-10v3Z" />
  ),
  star: (
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6Z" />
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
  send: <path d="m21 3-9.5 9.5M21 3l-6.5 18-3-8.5L3 9.5 21 3Z" />,
  facebook: (
    <path d="M14 8h3V4h-3a4.5 4.5 0 0 0-4.5 4.5V11H7v4h2.5v6h4v-6H16l1-4h-3.5V9a1 1 0 0 1 .5-1Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5.5" width="20" height="13" rx="4" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5M8 8v.01M12 16v-5m0 1.5c0-1 1-2 2.2-2 1.3 0 1.8 1 1.8 2.5V16" />
    </>
  ),
};

function Icon({ name, size = 24, className = '' }) {
  const paths = ICON_PATHS[name];
  if (!paths) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}

export default Icon;
