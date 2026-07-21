import React from 'react';

function IconKyc() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="12"
        width="28"
        height="22"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.5" cy="21" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12.5 29.5c.8-2.2 2.4-3.4 5-3.4s4.2 1.2 5 3.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M25 19.5h7.5M25 23.5h7.5M25 27.5h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M33.5 10.5l6.5 2.4v5.2c0 4.2-2.6 7.2-6.5 8.6-3.9-1.4-6.5-4.4-6.5-8.6v-5.2l6.5-2.4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="#f5f1e9"
      />
      <path
        d="M31.2 18.2l1.7 1.7 3.4-3.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSpot() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 6.5c1.35 0 2 1.35 3.2 1.8 1.2.45 2.65-.15 3.6.8.95.95.35 2.4.8 3.6.45 1.2 1.8 1.85 1.8 3.2s-1.35 2-1.8 3.2c-.45 1.2.15 2.65-.8 3.6-.95.95-2.4.35-3.6.8-1.2.45-1.85 1.8-3.2 1.8s-2-1.35-3.2-1.8c-1.2-.45-2.65.15-3.6-.8-.95-.95-.35-2.4-.8-3.6C12.85 21.9 11.5 21.25 11.5 19.9s1.35-2 1.8-3.2c.45-1.2-.15-2.65.8-3.6.95-.95 2.4-.35 3.6-.8C22 7.85 22.65 6.5 24 6.5z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="19.9" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M19.8 20l2.9 2.9 5.6-5.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAssay() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 16h12l3 3.5h13v18.5H10V16z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 16V12.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V16"
        stroke="currentColor"
        strokeWidth="1.55"
      />
      <path
        d="M18 11h12M19.5 8.5h9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M17 26h14M17 30.5h10"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}

const actions = [
  {
    title: 'KYC & Onboarding',
    text: 'Begin your institutional onboarding. Submit entity documents, beneficial ownership records, and source-of-funds documentation through our secure digital channel.',
    cta: 'START ONBOARDING',
    href: '#',
    icon: 'kyc' as const,
  },
  {
    title: 'Live Spot Rate',
    text: 'Request a live bid/ask quote from our trading desk. Available 24 hours Monday through Friday for all metals and all transaction sizes above minimum threshold.',
    cta: 'REQUEST QUOTE',
    href: '#',
    icon: 'spot' as const,
  },
  {
    title: 'Assay Submission',
    text: 'Submit scrap gold or dore for metallurgical assay. Receive exact fineness verification, documented yield calculation, and same-day financial settlement terms.',
    cta: 'SUBMIT FOR ASSAY',
    href: '#',
    icon: 'assay' as const,
  },
];

function ActionIcon({ type }: { type: 'kyc' | 'spot' | 'assay' }) {
  if (type === 'kyc') return <IconKyc />;
  if (type === 'spot') return <IconSpot />;
  return <IconAssay />;
}

export default function ContactActionsSection() {
  return (
    <section className="contact-actions" aria-label="Quick actions">
      <div className="contact-actions__inner">
        <div className="contact-actions__grid">
          {actions.map((action) => (
            <article key={action.title} className="contact-actions__item">
              <span className="contact-actions__icon" aria-hidden="true">
                <ActionIcon type={action.icon} />
              </span>
              <h3 className="contact-actions__title">{action.title}</h3>
              <p className="contact-actions__text">{action.text}</p>
              <a className="contact-actions__cta" href={action.href}>
                {action.cta}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
