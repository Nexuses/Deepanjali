import Image from 'next/image';

const pillars = [
  {
    title: 'Institutional Market Spreads',
    description:
      'By leveraging deep global liquidity lines, we eliminate unnecessary intermediary markups entirely. Our clients transact on tight, institutional-grade buy/sell spreads tied directly to live global spot prices - the same spreads available to tier-one institutional desks, accessible to our counter parties regardless of transaction size.',
    link: 'Zero Premium Pricing',
    image:
      'https://nexuses.s3.us-east-2.amazonaws.com/bitcoin-trading-analysis-laptop_1_1784634157975_vgrl.png',
    imageAlt: 'Laptop showing trading analysis charts beside gold coins',
  },
  {
    title: 'Complete Risk Mitigation',
    description:
      'From the moment raw materials enter our facilities to the final delivery of minted bullion, every gram is guarded by multi-layer physical security, stringent internal audits, and comprehensive risk insurance. Our clients carry no uninsured exposure at any stage of the transaction lifecycle.',
    link: 'End-to-End Coverage',
    image:
      'https://nexuses.s3.us-east-2.amazonaws.com/image-2_1_1784634157975_9xgd.png',
    imageAlt: 'Gold bars on a dark reflective surface with soft lighting',
  },
  {
    title: 'Dedicated Relationship Desks',
    description:
      'We reject automated delay loops entirely. High-volume counterparties and institutional accounts are paired with an expert bullion dealer - a named professional who manages their order flow, margin positions, and settlement requirements. Seamless execution, no queues, no escalation chains.',
    link: 'Named Dealer Assignment',
    image:
      'https://nexuses.s3.us-east-2.amazonaws.com/young-business-owners-preparing-their-store_1_1784634157975_405d.png',
    imageAlt: 'Professionals collaborating at a dedicated relationship desk',
  },
  {
    title: 'Certified Purity Standards',
    description:
      'Every asset entering or exiting our vault system carries official, independent assay documentation. We guarantee exact fineness metrics - 999.9 fine gold - across all commercial transactions. No estimations, no approximations, no unverified lots accepted into or released from our ecosystem.',
    link: '999.9 Guaranteed',
    image:
      'https://nexuses.s3.us-east-2.amazonaws.com/aesthetic-wallpaper-with-gold-bars-high-angle_1_1784634157975_zznw.png',
    imageAlt: 'High-angle view of stacked certified gold bars',
  },
];

export default function DipanjaliAdvantageSection() {
  return (
    <section
      className="dipanjali-advantage"
      aria-label="The Dipanjali Advantage"
    >
      <div className="dipanjali-advantage__inner">
        <header className="dipanjali-advantage__header">
          <p className="dipanjali-advantage__eyebrow">
            THE DIPANJALI ADVANTAGE
          </p>
          <span className="dipanjali-advantage__rule" aria-hidden="true" />
          <h2 className="dipanjali-advantage__title">
            <span className="dipanjali-advantage__title-gold">
              Four Pillars of{' '}
            </span>
            <span className="dipanjali-advantage__title-accent">
              Competitive Difference
            </span>
          </h2>
        </header>

        <ul className="dipanjali-advantage__grid">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="dipanjali-advantage__card">
              <div className="dipanjali-advantage__media">
                <Image
                  className="dipanjali-advantage__image"
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 40vw, 320px"
                  quality={85}
                />
              </div>
              <div className="dipanjali-advantage__body">
                <h3 className="dipanjali-advantage__card-title">
                  {pillar.title}
                </h3>
                <p className="dipanjali-advantage__card-text">
                  {pillar.description}
                </p>
                <span className="dipanjali-advantage__link">
                  {pillar.link}
                  <span aria-hidden="true"> →</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
