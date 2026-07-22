import {
  BadgeCheck,
  IdCard,
  Leaf,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

type TrustIconType = 'aml' | 'purity' | 'sourcing' | 'kyc';

const items: { title: string; text: string; icon: TrustIconType }[] = [
  {
    title: 'AML & CFT Compliant',
    text: 'Full Anti-Money Laundering and Counter-Terrorism Financing protocols aligned with international regulatory mandates.',
    icon: 'aml',
  },
  {
    title: 'Certified 999.9 Purity',
    text: 'Every asset carries independent assay documentation guaranteeing exact fineness metrics across all commercial transactions.',
    icon: 'purity',
  },
  {
    title: 'Conflict-Free Sourcing',
    text: '100% of our precious metals sourced from conflict-free, environmentally responsible, and ethically managed supply networks.',
    icon: 'sourcing',
  },
  {
    title: 'Institutional KYC Engine',
    text: 'Accelerated digital KYC onboarding with full counterparty verification before any trade is executed on our platform.',
    icon: 'kyc',
  },
];

const icons: Record<TrustIconType, LucideIcon> = {
  aml: ShieldCheck,
  purity: BadgeCheck,
  sourcing: Leaf,
  kyc: IdCard,
};

function TrustIcon({ type }: { type: TrustIconType }) {
  const Icon = icons[type];
  return (
    <span className="trust__icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Compliance and trust">
      <div className="trust__inner">
        <ul className="trust__grid">
          {items.map((item) => (
            <li key={item.title} className="trust__item">
              <TrustIcon type={item.icon} />
              <h3 className="trust__title">{item.title}</h3>
              <p className="trust__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
