import Image from 'next/image';

const actions = [
  {
    title: 'KYC & Onboarding',
    text: 'Begin your institutional onboarding. Submit entity documents, beneficial ownership records, and source-of-funds documentation through our secure digital channel.',
    cta: 'START ONBOARDING',
    href: '#',
    iconSrc: '/icons/kyc-onboarding.png',
  },
  {
    title: 'Live Spot Rate',
    text: 'Request a live bid/ask quote from our trading desk. Available 24 hours Monday through Friday for all metals and all transaction sizes above minimum threshold.',
    cta: 'REQUEST QUOTE',
    href: '#',
    iconSrc: '/icons/live-spot-rate.png',
  },
  {
    title: 'Assay Submission',
    text: 'Submit scrap gold or dore for metallurgical assay. Receive exact fineness verification, documented yield calculation, and same-day financial settlement terms.',
    cta: 'SUBMIT FOR ASSAY',
    href: '#',
    iconSrc: '/icons/assay-submission.png',
  },
] as const;

export default function ContactActionsSection() {
  return (
    <section className="contact-actions" aria-label="Quick actions">
      <div className="contact-actions__inner">
        <div className="contact-actions__grid">
          {actions.map((action) => (
            <article key={action.title} className="contact-actions__item">
              <span className="contact-actions__icon" aria-hidden="true">
                <Image
                  className="contact-actions__iconImg"
                  src={action.iconSrc}
                  alt=""
                  width={64}
                  height={64}
                />
              </span>
              <h3 className="contact-actions__title">{action.title}</h3>
              <p className="contact-actions__text">{action.text}</p>
              <a className="contact-actions__cta" href={action.href}>
                <span className="contact-actions__ctaLabel">{action.cta}</span>
                <span className="contact-actions__ctaArrow" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
