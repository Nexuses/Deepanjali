const pillars = [
  { letter: 'A', title: 'Wholesale Bullion' },
  { letter: 'B', title: 'Refining & Assay' },
  { letter: 'C', title: 'Vaulting & Logistics' },
];

export default function ServicePillarsSection() {
  return (
    <section className="service-pillars" aria-label="Core service pillars">
      <div className="service-pillars__nav">
        <div className="service-pillars__navInner">
          {pillars.map((pillar) => (
            <div key={pillar.letter} className="service-pillars__item">
              <span className="service-pillars__badge" aria-hidden="true">
                {pillar.letter}
              </span>
              <p className="service-pillars__itemTitle">{pillar.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="service-pillars__body">
        <div className="service-pillars__bodyInner">
          <p className="service-pillars__eyebrow">WHAT WE DO</p>
          <h2 className="service-pillars__title">
            <span className="service-pillars__title-line">
              Three Core Service Pillars.
            </span>
            <span className="service-pillars__title-accent">
              One Principal Commitment.
            </span>
          </h2>
          <span className="service-pillars__rule" aria-hidden="true" />
          <p className="service-pillars__text">
            Dipanjali Gold Trading operates as a full-service institutional
            precious metals partner – not a broker, not a marketplace. We hold
            inventory, execute principal trades, certify purity, manage secure
            storage, and coordinate insured logistics across every transaction we
            facilitate. Every pillar of our service architecture is designed to
            eliminate the operational friction, counterparty opacity, and purity
            uncertainty that characterises the regional bullion market. Our
            clients engage us because they need a partner that performs with the
            same rigour they apply to their own operations.
          </p>
        </div>
      </div>
    </section>
  );
}
