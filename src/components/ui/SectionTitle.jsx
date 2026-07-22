/**
 * SectionTitle — cabecera estándar de sección: kicker verde + título + subtítulo.
 *
 * @param {object} props
 * @param {string} props.kicker - Texto pequeño en verde y mayúsculas (p. ej. "MÓDULOS").
 * @param {string} props.title - Título principal de la sección.
 * @param {string} [props.subtitle] - Texto descriptivo opcional.
 * @param {boolean} [props.onDark=false] - Ajusta los colores para fondos oscuros.
 */
function SectionTitle({ kicker, title, subtitle, onDark = false }) {
  return (
    <header className={`section-title ${onDark ? 'section-title--dark' : ''}`}>
      <p className="section-title__kicker">{kicker}</p>
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </header>
  );
}

export default SectionTitle;
