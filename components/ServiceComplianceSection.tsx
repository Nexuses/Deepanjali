import {
  BadgeCheck,
  IdCard,
  Leaf,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

const items = [
  {
    title: 'AML & CFT Compliant',
    text: 'Full Anti-Money Laundering and Counter-Terrorism Financing protocols aligned with international regulatory mandates across every transaction.',
    icon: 'aml' as const,
  },
  {
    title: 'Certified 999.9 Purity',
    text: 'Every asset carries independent assay documentation guaranteeing exact fineness metrics. We certify 999.9 fine gold across all commercial transactions.',
    icon: 'purity' as const,
  },
  {
    title: 'Conflict-Free Sourcing',
    text: '100% of our precious metals are sourced exclusively from conflict-free, environmentally responsible, and ethically managed supply networks.',
    icon: 'sourcing' as const,
  },
  {
    title: 'Institutional KYC Engine',
    text: 'Accelerated digital KYC onboarding with full counterparty verification before any trade is executed on our platform.',
    icon: 'kyc' as const,
  },
];

type ComplianceIconType = (typeof items)[number]['icon'];

const complianceIcons: Record<ComplianceIconType, LucideIcon> = {
  aml: ShieldCheck,
  purity: BadgeCheck,
  sourcing: Leaf,
  kyc: IdCard,
};

function ComplianceIcon({ type }: { type: ComplianceIconType }) {
  const Icon = complianceIcons[type];
  return (
    <span className="service-compliance__icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

export default function ServiceComplianceSection() {
  return (
    <section className="service-compliance" aria-label="Compliance and integrity">
      <div className="service-compliance__inner">
        <div className="service-compliance__grid">
          {items.map((item) => (
            <article key={item.title} className="service-compliance__item">
              <ComplianceIcon type={item.icon} />
              <h3 className="service-compliance__title">{item.title}</h3>
              <p className="service-compliance__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
