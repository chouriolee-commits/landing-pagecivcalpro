import Icon from '../ui/Icon';

/**
 * TestimonialCard — cita de usuario con avatar de iniciales y valoración.
 *
 * @param {object} props
 * @param {{quote: string, name: string, role: string, initials: string, rating: number}} props.testimonial
 */
function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <span className="testimonial-card__quote-icon">
        <Icon name="quote" size={22} />
      </span>

      <blockquote className="testimonial-card__quote">{testimonial.quote}</blockquote>

      <footer className="testimonial-card__footer">
        <div className="testimonial-card__person">
          <span className="testimonial-card__avatar" aria-hidden="true">
            {testimonial.initials}
          </span>
          <div>
            <p className="testimonial-card__name">{testimonial.name}</p>
            <p className="testimonial-card__role">{testimonial.role}</p>
          </div>
        </div>

        <div
          className="testimonial-card__stars"
          role="img"
          aria-label={`Valoración: ${testimonial.rating} de 5 estrellas`}
        >
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <Icon key={i} name="star" size={15} />
          ))}
        </div>
      </footer>
    </article>
  );
}

export default TestimonialCard;
