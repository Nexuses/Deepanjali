import Image from 'next/image';

const paragraphs = [
  'Dipanjali Gold Trading was built on a single conviction — that institutional-grade precious metals dealing demands more than market access. It demands accountability, certified purity, and relationships built on complete transparency.',
  'We operate as a principal counterparty across the full lifecycle of physical gold — from sourcing and assay certification through to wholesale distribution, allocated vaulting, and regulatory-compliant settlement. Every transaction we execute is backed by documented chain of custody and independent fineness verification.',
  'Our clients are manufacturers, treasury desks, wealth managers, and trading houses who require a partner that performs with the same rigour they apply to their own operations.',
];

export default function WhoWeAre() {
  return (
    <section className="who" id="about" aria-labelledby="who-heading">
      <div className="who__inner">
        <div className="who__header">
          <h2 className="who__label" id="who-heading">
            Who We Are
          </h2>
          <span className="who__line" aria-hidden="true" />
        </div>

        <div className="who__grid">
          <div className="who__media">
            <Image
              className="who__image"
              src="/images/about-who-we-are.png"
              alt="Fine gold bullion bars on a vintage map"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>

          <div className="who__copy">
            <h3 className="who__title">
              <span className="who__title-line">Where Institutional Trust</span>
              <span className="who__title-line">Meets Physical Gold</span>
            </h3>

            {paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className="who__text">
                {text}
              </p>
            ))}

            <a className="who__cta" href="/about">
              Our Story
              <span className="who__cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
