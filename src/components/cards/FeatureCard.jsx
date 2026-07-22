import Icon from '../ui/Icon';

/**
 * FeatureCard — característica con icono, título y descripción.
 *
 * @param {object} props
 * @param {{icon: string, title: string, description: string}} props.feature
 */
function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <span className="feature-card__icon">
        <Icon name={feature.icon} size={26} />
      </span>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__description">{feature.description}</p>
    </article>
  );
}

export default FeatureCard;
