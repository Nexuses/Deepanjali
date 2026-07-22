import Image from 'next/image';

const paragraphs = [
  'Dipanjali Gold Trading operates at the intersection of traditional asset security and modern trading efficiency. Established to bridge global institutional liquidity with localized bullion markets, we serve as a premier counterparty for high-volume traders, industrial jewellery manufacturers, and private wealth managers.',
  'Our operations are anchored by physical infrastructure, advanced assay technologies, and a trading desk led by market veterans committed to zero-premium spreads and absolute transactional transparency. Every gram that moves through our ecosystem carries verifiable chain of custody and independent fineness certification.',
  'We are not a marketplace. We are a principal - accountable for every transaction, every certification, and every delivery we execute on behalf of our counterparties.',
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
