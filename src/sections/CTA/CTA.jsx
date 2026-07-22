import { APP_URL } from '../../data/navigation';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import Icon from '../../components/ui/Icon';
import './CTA.css';

/**
 * CTA — llamada a la acción final antes del footer.
 */
function CTA() {
  return (
    <section className="cta" aria-label="Comienza a usar CivCalPro">
      <Container>
        <div className="cta__band dark-band">
          <div className="cta__content">
            <span className="cta__icon" aria-hidden="true">
              <Icon name="rocket" size={30} />
            </span>
            <div>
              <h2 className="cta__title">¿Listo para llevar tus proyectos a otro nivel?</h2>
              <p className="cta__subtitle">
                Únete a CivCalPro y descubre cómo la tecnología puede hacerte más eficiente.
              </p>
            </div>
          </div>
          <div className="cta__actions">
            <Button href={APP_URL} withArrow>
              Probar CivCalPro gratis
            </Button>
            <Button href={APP_URL} variant="outline">
              Ir a la plataforma
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
