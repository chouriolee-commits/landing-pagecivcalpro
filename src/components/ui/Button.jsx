import Icon from './Icon';

/**
 * Button — botón/enlace principal de la landing.
 *
 * Se renderiza como <a> cuando recibe `href` y como <button> en caso
 * contrario. Los enlaces externos añaden automáticamente
 * `rel="noopener noreferrer"` para evitar tabnabbing inverso.
 *
 * @param {object} props
 * @param {'primary'|'outline'|'ghost'} [props.variant='primary'] - Estilo visual.
 * @param {string} [props.href] - Destino; si empieza por http se trata como externo.
 * @param {boolean} [props.withArrow=false] - Añade flecha al final.
 * @param {string} [props.className] - Clases adicionales.
 * @param {React.ReactNode} props.children - Contenido del botón.
 */
function Button({ variant = 'primary', href, withArrow = false, className = '', children, ...rest }) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Icon name="arrow-right" size={17} />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        className={classes}
        href={href}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

export default Button;
