export default function Testimonial() {
  return (
    <section className="testimonial" aria-label="Client testimonial">
      <div className="testimonial__inner">
        <div className="testimonial__card">
          <div className="testimonial__content">
            <p className="testimonial__label">Client Testimonial</p>
            <blockquote className="testimonial__quote">
              “Dipanjali&apos;s institutional spreads and same-day settlement
              capability transformed our procurement workflow. The level of
              integrity on display is simply unmatched in the regional market.”
            </blockquote>
            <footer className="testimonial__attribution">
              <cite className="testimonial__name">
                Sanjay Kapoor, Director of Procurement
              </cite>
              <span className="testimonial__company">
                Shree Ornaments Manufacturing Pvt. Ltd., Jaipur
              </span>
            </footer>
          </div>

          <div className="testimonial__actions">
            <a className="testimonial__btn testimonial__btn--primary" href="#contact">
              Book a Consultation <span aria-hidden="true">→</span>
            </a>
            <a className="testimonial__btn testimonial__btn--secondary" href="#services">
              Access Live Trading Desk <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
