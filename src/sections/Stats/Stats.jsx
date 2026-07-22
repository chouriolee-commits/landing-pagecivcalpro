import { STATS } from '../../data/stats';
import StatCard from '../../components/cards/StatCard';
import Container from '../../components/ui/Container';
import './Stats.css';

/**
 * Stats — banda oscura con las métricas de la plataforma.
 */
function Stats() {
  return (
    <section className="stats" aria-label="Estadísticas de CivCalPro">
      <Container>
        <div className="stats__band dark-band">
          {STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;
