import Icon from '../ui/Icon';

/**
 * ModuleCard — tarjeta de módulo con icono, descripción, ilustración
 * y enlace "Explorar módulo" hacia la plataforma real.
 *
 * @param {object} props
 * @param {{icon: string, title: string, description: string, image: string, href: string}} props.module
 */
function ModuleCard({ module }) {
  return (
    <article className="module-card">
      <div className="module-card__header">
        <span className="module-card__icon">
          <Icon name={module.icon} size={18} />
        </span>
        <h3 className="module-card__title">{module.title}</h3>
      </div>

      <p className="module-card__description">{module.description}</p>

      <div className="module-card__media">
        <img src={module.image} alt={`Ilustración del módulo ${module.title}`} loading="lazy" />
      </div>

      <a
        className="module-card__link"
        href={module.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Explorar módulo ${module.title} en CivCalPro`}
      >
        Explorar módulo <Icon name="arrow-right" size={15} />
      </a>
    </article>
  );
}

export default ModuleCard;
