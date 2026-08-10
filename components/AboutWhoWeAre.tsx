import Image from 'next/image';

const paragraphs = [
  'Dipanjali Gold Trading operates at the intersection of traditional asset security and modern trading efficiency, aiming to connect global institutional liquidity with localised bullion markets. We serve as a premier counterparty for high-volume traders and private wealth managers.',
  'Our physical infrastructure, advanced assay technologies, and trading desk led by market veterans are focused on transactional transparency. Every gram traded is verified through a chain of custody and independent fineness certification.',
  'We are not a marketplace but a principal accountable for every transaction, certification, and delivery executed on behalf of our counterparties.',
];

export default function AboutWhoWeAre() {
  return (
    <section
      className="about-who"
      id="who-we-are"
      aria-labelledby="about-who-heading"
    >
      <div className="about-who__inner">
        <div className="about-who__header">
          <h2 className="about-who__label" id="about-who-heading">
            Who We Are
          </h2>
          <span className="about-who__line" aria-hidden="true" />
        </div>

        <div className="about-who__grid">
          <div className="about-who__copy">
            <h3 className="about-who__title">
              Bridging Global Institutional Liquidity with Physical Bullion
              Markets
            </h3>

            {paragraphs.map((text) => (
              <p key={text.slice(0, 40)} className="about-who__text">
                {text}
              </p>
            ))}
          </div>

          <div className="about-who__media">
            <Image
              className="about-who__image"
              src="/images/about-who-we-are.png"
              alt="Fine gold bullion bars on a vintage map"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
