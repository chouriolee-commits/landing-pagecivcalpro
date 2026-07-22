import { NORMS } from '../../data/norms';
import SectionTitle from '../../components/ui/SectionTitle';
import Container from '../../components/ui/Container';
import Icon from '../../components/ui/Icon';
import './Norms.css';

/**
 * Norms — normas técnicas en las que se apoyan los módulos de cálculo.
 * Destino del enlace "Normas" del navbar.
 */
function Norms() {
  return (
    <section id="normas" className="norms">
      <Container>
        <SectionTitle
          kicker="Normas"
          title="Cálculos respaldados por normativa vigente"
          subtitle="Cada módulo aplica los criterios de las principales normas técnicas de la región."
        />
        <div className="norms__grid">
          {NORMS.map((norm) => (
            <article key={norm.id} className="norm-card">
              <span className="norm-card__icon">
                <Icon name={norm.icon} size={24} />
              </span>
              <span className="norm-card__code">{norm.code}</span>
              <h3 className="norm-card__title">{norm.title}</h3>
              <p className="norm-card__description">{norm.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Norms;
