import { TESTIMONIALS } from '../../data/testimonials';
import TestimonialCard from '../../components/cards/TestimonialCard';
import SectionTitle from '../../components/ui/SectionTitle';
import Container from '../../components/ui/Container';
import './Testimonials.css';

/**
 * Testimonials — opiniones de usuarios de CivCalPro.
 */
function Testimonials() {
  return (
    <section className="testimonials" aria-label="Testimonios de usuarios">
      <Container>
        <SectionTitle
          kicker="Testimonios"
          title="Lo que dicen nuestros usuarios"
        />
        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
