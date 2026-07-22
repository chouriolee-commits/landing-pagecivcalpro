import { APP_URL } from '../../data/navigation';
import { TRUSTED_BY } from '../../data/testimonials';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import dashboardApp from '../../assets/images/hero/dashboard-app.png';
import './Hero.css';

/**
 * Hero — sección principal: titular, CTAs, instituciones y mockup del dashboard.
 */
function Hero() {
  return (
    <section id="inicio" className="hero">
      <Container className="hero__inner">
        <div className="hero__content animate-fade-in-up">
          <Badge>Software para Ingeniería Civil</Badge>

          <h1 className="hero__title">
            Calcula mejor.
            <br />
            Construye con
            <br />
            <span className="text-accent">confianza.</span>
          </h1>

          <p className="hero__subtitle">
            CivCalPro es la plataforma digital que simplifica los cálculos,
            cómputos y estimaciones en tus proyectos de ingeniería civil.
          </p>

          <div className="hero__actions">
            <Button href={APP_URL} withArrow>
              Probar CivCalPro gratis
            </Button>
            <Button href="#modulos" variant="outline" withArrow>
              Ver módulos
            </Button>
          </div>

          <div className="hero__trust">
            <p>Con la confianza de estudiantes y profesionales</p>
            <ul className="hero__trust-logos">
              {TRUSTED_BY.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero__media animate-fade-in">
          <div className="hero__window">
            <div className="hero__window-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img
              src={dashboardApp}
              alt="Dashboard de CivCalPro con los módulos de cálculo"
              fetchPriority="high"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
