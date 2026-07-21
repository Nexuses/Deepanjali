import Image from 'next/image';
import Navbar from '@/components/Navbar';

const ABOUT_HERO_IMAGE =
  'https://nexuses.s3.us-east-2.amazonaws.com/image_47_1784617418628_cslt.png';
const ABOUT_HERO_OVERLAY =
  'https://nexuses.s3.us-east-2.amazonaws.com/Rectangle_34624223__1__1784618127053_tqqs.png';

export default function AboutHero() {
  return (
    <section className="about-hero" aria-label="About Dipanjali Gold Trading">
      <div className="about-hero__media" aria-hidden="true">
        <Image
          className="about-hero__image"
          src={ABOUT_HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <Image
          className="about-hero__overlay"
          src={ABOUT_HERO_OVERLAY}
          alt=""
          fill
          sizes="100vw"
        />
        <div className="about-hero__gradient" aria-hidden="true" />
      </div>

      <Navbar />
      <div className="about-hero__rule" aria-hidden="true" />

      <div className="about-hero__content">
        <p className="about-hero__eyebrow">About Dipanjali Gold Trading</p>
        <h1 className="about-hero__title">
          <span className="about-hero__title-line">A Foundation of</span>
          <span className="about-hero__title-accent">Uncompromising Integrity</span>
        </h1>
        <p className="about-hero__lede">
          Where institutional precision meets the timeless permanence of physical
          gold. Built on transparency, certified purity, and zero-compromise
          compliance.
        </p>
      </div>
    </section>
  );
}
