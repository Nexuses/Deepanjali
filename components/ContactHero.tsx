import Image from 'next/image';
import Navbar from '@/components/Navbar';

const CONTACT_HERO_BG =
  'https://nexuses.s3.us-east-2.amazonaws.com/Exquisite_24k_gold_bars_stacked_perfectly_on_a_luxurious_black_marble_surface__reflecting_soft_ambient_lighting_in_a_high-end_vault_setting._The_scene_captures_the_essence_of_pure_wealth_and_precision_craftsmanship_1784625237352_qo7c.png';

const CONTACT_HERO_OVERLAY =
  'https://nexuses.s3.us-east-2.amazonaws.com/Rectangle_34624223__2__1784625254691_8405.png';

export default function ContactHero() {
  return (
    <section className="contact-hero" aria-label="Contact hero">
      <div className="contact-hero__media" aria-hidden="true">
        <Image
          className="contact-hero__image"
          src={CONTACT_HERO_BG}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <Image
          className="contact-hero__overlay"
          src={CONTACT_HERO_OVERLAY}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="contact-hero__gradient" aria-hidden="true" />
      </div>

      <Navbar />
      <div className="contact-hero__rule" aria-hidden="true" />

      <div className="contact-hero__content">
        <p className="contact-hero__eyebrow">GET IN TOUCH</p>

        <h1 className="contact-hero__title">
          <span className="contact-hero__title-line">Connect to the</span>
          <span className="contact-hero__title-accent">
            Institutional Desk.
          </span>
        </h1>

        <p className="contact-hero__lede">
          Every inquiry is handled by a licensed desk professional — not a
          chatbot, not a call centre. Submit your inquiry below or reach us
          directly through our dedicated trading channels.
        </p>
      </div>
    </section>
  );
}

