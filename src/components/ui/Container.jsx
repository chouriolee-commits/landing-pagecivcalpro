/**
 * Container — envoltorio que centra el contenido y limita su ancho máximo.
 *
 * @param {object} props
 * @param {string} [props.className] - Clases adicionales.
 * @param {React.ReactNode} props.children - Contenido.
 */
function Container({ className = '', children }) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}

export default Container;
