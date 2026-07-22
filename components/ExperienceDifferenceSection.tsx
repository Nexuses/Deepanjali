export default function ExperienceDifferenceSection() {
  return (
    <section
      className="ready-transact experience-difference"
      aria-label="Experience the difference"
    >
      <div className="ready-transact__pattern" aria-hidden="true" />
      <div className="ready-transact__inner">
        <p className="ready-transact__eyebrow">EXPERIENCE THE DIFFERENCE</p>
        <span className="ready-transact__rule" aria-hidden="true" />

        <h2 className="ready-transact__title">
          <span className="experience-difference__title-line">
            The Market Has Options.
          </span>
          <span className="experience-difference__title-accent">
            Few Have Our Standards.
          </span>
        </h2>

        <p className="ready-transact__text">
          Connect directly with our institutional desk and experience the
          Dipanjali difference on your first transaction.
        </p>

        <div className="ready-transact__actions" role="group" aria-label="CTA">
          <a
            className="conversation__btn conversation__btn--primary"
            href="/trade-now"
          >
            Trade Now
          </a>
          <a
            className="conversation__btn conversation__btn--secondary"
            href="/contact"
          >
            Book A Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
