import Image from 'next/image';

const SHOWROOM_SRC =
  'https://nexuses.s3.us-east-2.amazonaws.com/Showroom_1784611440459_gdr4.png';

const capabilities = [
  {
    title: 'Wholesale Bullion Distribution',
    text: 'Direct tier-one sourcing of investment-grade bars from LBMA-certified refineries. Inventory spans 1g to 1kg minted and cast bars, with continuous execution capacity through periods of high market volatility.',
  },
  {
    title: 'Metallurgical Assaying & Refining',
    text: 'State-of-the-art XRF and fire assay chemical analysis provides complete material composition transparency. Clients receive exact, verified yields with fast financial settlement or direct weight exchange terms.',
  },
  {
    title: 'Allocated Vaulting & Insured Logistics',
    text: 'Segregated storage in high-security vaulting facilities under comprehensive all-risk insurance coverage. Strategic partnerships with armoured logistics providers guarantee secure end-to-end physical delivery.',
  },
  {
    title: '24-Hour Institutional Trading Desk',
    text: 'Live bid/ask pricing and immediate execution across all precious metals. High-volume counterparties are paired with a dedicated dealer — no automated queues, no settlement delays.',
  },
];

function CheckIcon() {
  return (
    <span className="infrastructure__check" aria-hidden="true">
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#D4AF37" />
        <path
          d="M8.5 14.2l3.4 3.4 7.6-7.6"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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
