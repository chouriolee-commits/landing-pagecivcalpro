import { MODULES } from '../../data/modules';
import ModuleCard from '../../components/cards/ModuleCard';
import SectionTitle from '../../components/ui/SectionTitle';
import Container from '../../components/ui/Container';
import './Modules.css';

/**
 * Modules — los cinco módulos de cálculo de la plataforma.
 */
function Modules() {
  return (
    <section id="modulos" className="modules">
      <Container>
        <SectionTitle
          kicker="Módulos"
          title="Herramientas diseñadas para ingenieros"
          subtitle="Todo lo que necesitas para planificar, calcular y construir con éxito."
        />
        <div className="modules__grid">
          {MODULES.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Modules;
