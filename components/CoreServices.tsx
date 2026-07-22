import Image from 'next/image';
import { Check } from 'lucide-react';

const SHOWROOM_SRC =
  'https://nexuses.s3.us-east-2.amazonaws.com/Showroom_1784611440459_gdr4.png';

const services = [
  {
    title: 'Wholesale Bullion Distribution',
    text: 'Investment-grade gold and silver bars from LBMA-certified refineries - 1g to 1kg - with continuous execution through market volatility.',
  },
  {
    title: 'Precious Metals Refining & Assay',
    text: 'XRF and fire assay chemical analysis for scrap gold and industrial lots. Exact verified yields, ultra-fast settlement or direct weight exchange.',
  },
  {
    title: 'Allocated Vaulting & Insured Logistics',
    text: 'Segregated storage in high-security facilities with all-risk insurance. Armored trans-regional delivery via strategic logistics partners.',
  },
];

function CheckIcon() {
  return (
    <span className="services__check" aria-hidden="true">
      <Check />
    </span>
  );
}

export default function CoreServices() {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services__inner">
        <div className="services__copy">
          <p className="services__label">Core Services</p>
          <h2 className="services__title" id="services-heading">
            An overview of the services we offer.
          </h2>
          <p className="services__intro">
            From wholesale bullion procurement to end-to-end refining and
            allocated vaulting - every service is engineered to eliminate
            intermediary friction and deliver maximum asset yield.
          </p>

          <div className="services__rule" aria-hidden="true" />

          <ul className="services__list">
            {services.map((service) => (
              <li key={service.title} className="services__item">
                <CheckIcon />
                <div className="services__item-body">
                  <h3 className="services__item-title">{service.title}</h3>
                  <p className="services__item-text">{service.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a className="services__cta" href="#services">
            View All Services
            <span className="services__cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="services__media">
          <Image
            className="services__image"
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
