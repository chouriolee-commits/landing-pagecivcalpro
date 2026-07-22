/**
 * Badge — etiqueta pequeña en mayúsculas (p. ej. "SOFTWARE PARA INGENIERÍA CIVIL").
 *
 * @param {object} props
 * @param {'dark'|'light'} [props.variant='dark'] - `dark` para fondos navy, `light` para secciones claras.
 * @param {React.ReactNode} props.children - Texto del badge.
 */
function Badge({ variant = 'dark', children }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}

export default Badge;
