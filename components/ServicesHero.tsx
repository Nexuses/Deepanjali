import Image from 'next/image';
import Navbar from '@/components/Navbar';

const SERVICES_HERO_IMAGE =
  'https://nexuses.s3.us-east-2.amazonaws.com/image_47_1784617418628_cslt.png';
const SERVICES_HERO_OVERLAY =
  'https://nexuses.s3.us-east-2.amazonaws.com/Rectangle_34624223__3__1784639084230_s8x1.png';

export default function ServicesHero() {
  return (
    <section className="services-hero" aria-label="Services hero">
      <div className="services-hero__media" aria-hidden="true">
        <Image
          className="services-hero__image"
          src={SERVICES_HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <Image
          className="services-hero__overlay"
          src={SERVICES_HERO_OVERLAY}
          alt=""
          fill
          sizes="100vw"
          unoptimized
        />
        <div className="services-hero__scrim" aria-hidden="true" />
      </div>

      <Navbar />
      <div className="services-hero__rule" aria-hidden="true" />

      <div className="services-hero__content">
        <p className="services-hero__eyebrow">OUR SERVICES</p>
        <h1 className="services-hero__title">
          <span className="services-hero__title-line">End-to-End Execution</span>
          <span className="services-hero__title-line services-hero__title-line--second">
            Across the{' '}
            <span className="services-hero__title-accent">Gold Value Chain.</span>
          </span>
        </h1>
        <p className="services-hero__lede">
          From LBMA-certified wholesale distribution to state-of-the-art
          metallurgical assaying and institutional vaulting — every service we
          offer is built around one principle: zero compromise on purity,
          security, and counterparty integrity.
        </p>
      </div>
    </section>
  );
}
