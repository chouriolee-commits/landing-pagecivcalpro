import Icon from '../ui/Icon';

/**
 * StatCard — métrica de la banda oscura de estadísticas.
 *
 * @param {object} props
 * @param {{icon: string, value: string, label: string}} props.stat
 */
function StatCard({ stat }) {
  return (
    <div className="stat-card">
      <span className="stat-card__icon">
        <Icon name={stat.icon} size={28} />
      </span>
      <div>
        <p className="stat-card__value">{stat.value}</p>
        <p className="stat-card__label">{stat.label}</p>
      </div>
    </div>
  );
}

export default StatCard;
