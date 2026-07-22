import {
  BadgeDollarSign,
  FlaskConical,
  IdCard,
  type LucideIcon,
} from 'lucide-react';

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

type ActionIconType = (typeof actions)[number]['icon'];

const actionIcons: Record<ActionIconType, LucideIcon> = {
  kyc: IdCard,
  spot: BadgeDollarSign,
  assay: FlaskConical,
};

function ActionIcon({ type }: { type: ActionIconType }) {
  const Icon = actionIcons[type];
  return <Icon />;
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
