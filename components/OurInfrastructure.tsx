import Image from 'next/image';
import { Check } from 'lucide-react';

const SHOWROOM_SRC =
  'https://nexuses.s3.us-east-2.amazonaws.com/Showroom_1784611440459_gdr4.png';

const capabilities = [
  {
    title: 'Wholesale Bullion Distribution',
    text: 'Direct tier-one sourcing of investment-grade bars from LBMA-certified refineries. Inventory spans 1g to 1kg minted and cast bars, with continuous execution capacity through periods of high market volatility.',
  },
  {
    title: '24-Hour Institutional Trading Desk',
    text: 'Live bid/ask pricing and immediate execution across all precious metals. High-volume counterparties are paired with a dedicated dealer - no automated queues, no settlement delays.',
  },
];

function CheckIcon() {
  return (
    <span className="infrastructure__check" aria-hidden="true">
      <Check />
    </span>
  );
}

export default function OurInfrastructure() {
  return (
    <section
      className="infrastructure"
      aria-labelledby="infrastructure-heading"
    >
      <div className="infrastructure__inner">
        <div className="infrastructure__copy">
          <p className="infrastructure__label">Our Infrastructure</p>
          <h2 className="infrastructure__title" id="infrastructure-heading">
            End-to-End Operational Control Across the Gold Value Chain
          </h2>

          <div className="infrastructure__rule" aria-hidden="true" />

          <ul className="infrastructure__list">
            {capabilities.map((item) => (
              <li key={item.title} className="infrastructure__item">
                <CheckIcon />
                <div className="infrastructure__item-body">
                  <h3 className="infrastructure__item-title">{item.title}</h3>
                  <p className="infrastructure__item-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="infrastructure__media">
          <Image
            className="infrastructure__image"
            src={SHOWROOM_SRC}
            alt="Dipanjali private showroom and vault display"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
      </div>
    </section>
  );
}
