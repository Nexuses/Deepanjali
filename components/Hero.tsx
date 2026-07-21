import Image from 'next/image';
import Navbar from '@/components/Navbar';
import LiveSpot from '@/components/LiveSpot';

const services = [
  'Wholesale Bullion',
  'Secure Vaulting',
  'Institutional Desk',
  'Treasury Hedging',
  'Gold Refining',
];

const HERO_IMAGE =
  'https://6clicks.s3.us-east-2.amazonaws.com/Gold_Bars_1784544162334_n49b.png';
const HERO_OVERLAY =
  'https://6clicks.s3.us-east-2.amazonaws.com/Rectangle_34624223_1784544162335_pbze.png';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Dipanjali Gold Trading hero">
      <div className="hero__media" aria-hidden="true">
        <Image
          className="hero__image"
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <Image
          className="hero__overlay"
          src={HERO_OVERLAY}
          alt=""
          fill
          sizes="100vw"
        />
      </div>

      <Navbar />
      <div className="hero__rule" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Institutional Precious Metals Dealer</p>
        <h1 className="hero__title">
          <span className="hero__title-line">Purity in Value.</span>
          <span className="hero__title-line">Precision in Execution.</span>
        </h1>
        <p className="hero__lede">
          Dipanjali Gold Trading delivers institutional-grade physical bullion
          solutions, advanced market liquidity, and transparent refining
          services certified to international standards.
        </p>

        <ul className="hero__services" aria-label="Services">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>

        <div className="hero__actions" role="group" aria-label="Get started">
          <a className="hero__btn hero__btn--primary" href="#services">
            Access Live Trading Desk
          </a>
          <a className="hero__btn hero__btn--secondary" href="#contact">
            Open Corporate Account
          </a>
        </div>
      </div>

      <LiveSpot />
    </section>
  );
}
