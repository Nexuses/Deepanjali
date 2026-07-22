import {
  BadgeCheck,
  Building2,
  FileCheck2,
  Globe2,
  type LucideIcon,
} from 'lucide-react';

const cards = [
  {
    label: 'AML / CFT Compliant',
    icon: 'aml' as const,
  },
  {
    label: 'Certified 999.9 Purity',
    icon: 'purity' as const,
  },
  {
    label: 'Conflict-Free Sourcing',
    icon: 'conflict' as const,
  },
  {
    label: 'Institutional KYC Engine',
    icon: 'kyc' as const,
  },
];

const icons: Record<(typeof cards)[number]['icon'], LucideIcon> = {
  aml: FileCheck2,
  purity: BadgeCheck,
  conflict: Globe2,
  kyc: Building2,
};

function SourcingCardIcon({ type }: { type: (typeof cards)[number]['icon'] }) {
  const Icon = icons[type];
  return (
    <span className="sourcing__card-icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

export default function SourcingStandards() {
  return (
    <section className="sourcing" aria-labelledby="sourcing-heading">
      <div className="sourcing__intro">
        <div className="sourcing__intro-inner">
          <p className="sourcing__label">Sourcing Standards</p>
          <span className="sourcing__rule" aria-hidden="true" />

          <h2 className="sourcing__title" id="sourcing-heading">
            Every Gram.{' '}
            <span className="sourcing__title-accent">Fully Traceable.</span>{' '}
            Conflict-Free.
          </h2>

          <p className="sourcing__text sourcing__text--two">
            Our sourcing policy is non-negotiable. Dipanjali Gold Trading
            maintains strict procurement standards that mandate conflict-free,
            environmentally responsible, and ethically managed supply networks
            across our entire inventory chain. We do not source from unverified
            intermediaries.
          </p>
          <p className="sourcing__text sourcing__text--three">
            This commitment extends beyond compliance — it is a commercial and
            moral obligation to our counterparties, our market, and the
            communities connected to the mines and refineries we work with. Every
            batch of metal that enters our facility arrives with documented
            origin, certified assay credentials, and a clear chain of custody.
          </p>
        </div>
      </div>

      <div className="sourcing__cards-panel">
        <ul className="sourcing__cards">
          {cards.map((card) => (
            <li key={card.label} className="sourcing__card">
              <SourcingCardIcon type={card.icon} />
              <p className="sourcing__card-label">{card.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
