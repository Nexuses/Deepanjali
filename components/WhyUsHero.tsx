import Image from 'next/image';
import Navbar from '@/components/Navbar';

const WHY_US_HERO_IMAGE =
  'https://nexuses.s3.us-east-2.amazonaws.com/ChatGPT_Image_Jul_15__2026__06_12_22_PM_1_1784633971796_m5vp.png';
const WHY_US_HERO_OVERLAY =
  'https://nexuses.s3.us-east-2.amazonaws.com/Rectangle_34624223__3__1784639084230_s8x1.png';

export default function WhyUsHero() {
  return (
    <section className="why-us-hero" aria-label="Why choose Dipanjali">
      <div className="why-us-hero__media" aria-hidden="true">
        <Image
          className="why-us-hero__image"
          src={WHY_US_HERO_IMAGE}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
        />
        <Image
          className="why-us-hero__overlay"
          src={WHY_US_HERO_OVERLAY}
          alt=""
          fill
          sizes="100vw"
          unoptimized
        />
        <div className="why-us-hero__scrim" aria-hidden="true" />
      </div>

      <Navbar />
      <div className="why-us-hero__rule" aria-hidden="true" />

      <div className="why-us-hero__content">
        <p className="why-us-hero__eyebrow">WHY CHOOSE DIPANJALI</p>
        <h1 className="why-us-hero__title">
          <span className="why-us-hero__title-line">The Standard Others</span>
          <span className="why-us-hero__title-accent">Are Measured Against.</span>
        </h1>
        <p className="why-us-hero__lede">
          In a market defined by opacity and intermediary friction, Dipanjali
          Gold Trading was built as the alternative - institutional spreads,
          certified purity, dedicated relationship desks, and zero compromise on
          compliance.
        </p>
      </div>
    </section>
  );
}
