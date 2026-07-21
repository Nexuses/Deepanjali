export default function ReadyToTransactSection() {
  return (
    <section className="ready-transact" aria-label="Ready to transact">
      <div className="ready-transact__pattern" aria-hidden="true" />
      <div className="ready-transact__inner">
        <p className="ready-transact__eyebrow">READY TO TRANSACT</p>
        <span className="ready-transact__rule" aria-hidden="true" />

        <h2 className="ready-transact__title">
          <span className="ready-transact__title-gold">One Partner.</span>
          <span className="ready-transact__title-accent">
            Every Stage of the Gold Value Chain.
          </span>
        </h2>

        <p className="ready-transact__text">
          Connect directly with our institutional desk — no queues, no
          intermediaries, no delays.
        </p>

        <div className="ready-transact__actions" role="group" aria-label="CTA">
          <a
            className="conversation__btn conversation__btn--primary"
            href="/contact"
          >
            Connect to Desk
          </a>
          <a
            className="conversation__btn conversation__btn--secondary"
            href="/contact"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
