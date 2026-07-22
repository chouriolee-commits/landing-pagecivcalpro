import { HOW_IT_WORKS_STEPS } from '../../data/modules';
import SectionTitle from '../../components/ui/SectionTitle';
import Container from '../../components/ui/Container';
import './HowItWorks.css';

/**
 * HowItWorks — banda oscura con los 4 pasos de uso de la plataforma.
 */
function HowItWorks() {
  return (
    <section className="how-it-works" aria-label="Cómo funciona CivCalPro">
      <Container>
        <div className="how-it-works__band dark-band">
          <SectionTitle
            kicker="¿Cómo funciona?"
            title="Simple, rápido y eficiente"
            onDark
          />
          <ol className="how-it-works__steps">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <li key={step.id} className="how-it-works__step">
                <span className="how-it-works__number" aria-hidden="true">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;
