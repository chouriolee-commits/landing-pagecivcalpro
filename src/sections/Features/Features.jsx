import { FEATURES } from '../../data/features';
import FeatureCard from '../../components/cards/FeatureCard';
import Container from '../../components/ui/Container';
import './Features.css';

/**
 * Features — beneficios clave de CivCalPro en una fila de 4 tarjetas.
 */
function Features() {
  return (
    <section id="caracteristicas" className="features">
      <Container>
        <h2 className="sr-only">Características de CivCalPro</h2>
        <div className="features__grid">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
