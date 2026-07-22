import {
  FileSearch,
  IdCard,
  PackageCheck,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

type RegulatoryCard = {
  title: string;
  text: string;
  icon: 'aml' | 'kyc' | 'sourcing' | 'transparency';
  variant: 'gold' | 'dark';
};

const paragraphs = [
  'Operational integrity is our primary asset. Dipanjali Gold Trading enforces rigorous Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) protocols fully aligned with international regulatory mandates and Indian regulatory oversight frameworks.',
  'We deploy institutional-grade Know Your Customer (KYC) onboarding engines to verify all trading partners before any transaction is initiated. Our compliance infrastructure is not a checkbox - it is the backbone of every counterparty relationship we maintain.',
];

const cards: RegulatoryCard[] = [
  {
    title: 'AML & CFT Compliance',
    text: 'Full Anti-Money Laundering and Counter-Terrorism Financing protocols aligned with international regulatory mandates. Zero tolerance for non-compliant counterparties at any stage of transaction.',
    icon: 'aml',
    variant: 'gold',
  },
  {
    title: 'Institutional KYC Engine',
    text: 'Accelerated digital onboarding with full counterparty verification - including entity registration, beneficial ownership, and source-of-funds documentation - before any trade is executed.',
    icon: 'kyc',
    variant: 'dark',
  },
  {
    title: 'Conflict-Free Sourcing Policy',
    text: '100% of our precious metals are drawn from conflict-free, environmentally responsible, and ethically managed supply networks. Our sourcing is auditable at every node of the supply chain.',
    icon: 'sourcing',
    variant: 'gold',
  },
  {
    title: 'Regulatory Transparency',
    text: 'All operations are conducted under the oversight of applicable Indian regulatory frameworks. Counterparties receive full documentation, audit trails, and assay certification on every transaction.',
    icon: 'transparency',
    variant: 'dark',
  },
];

const icons: Record<RegulatoryCard['icon'], LucideIcon> = {
  aml: ShieldCheck,
  kyc: IdCard,
  sourcing: PackageCheck,
  transparency: FileSearch,
};

function RegulatoryIcon({
  type,
  tone,
}: {
  type: RegulatoryCard['icon'];
  tone: 'dark' | 'light';
}) {
  const Icon = icons[type];

  return (
    <span
      className="regulatory__icon"
      aria-hidden="true"
      style={{ color: tone === 'dark' ? '#1a2332' : '#d4af37' }}
    >
      <Icon />
    </span>
  );
}

export default function RegulatoryFramework() {
  return (
    <section
      className="regulatory"
      aria-labelledby="regulatory-heading"
    >
      <div className="regulatory__inner">
        <div className="regulatory__copy">
          <p className="regulatory__label">Regulatory Framework</p>
          <h2 className="regulatory__title" id="regulatory-heading">
            <span className="regulatory__title-line">Strict Compliance.</span>
            <span className="regulatory__title-accent">
              Conflict-Free Supply Chains.
            </span>
          </h2>
          <div className="regulatory__rule" aria-hidden="true" />

          {paragraphs.map((text) => (
            <p key={text.slice(0, 40)} className="regulatory__text">
              {text}
            </p>
          ))}
        </div>

        <ul className="regulatory__cards">
          {cards.map((card) => (
            <li
              key={card.title}
              className={
                card.variant === 'gold'
                  ? 'regulatory__card regulatory__card--gold'
                  : 'regulatory__card regulatory__card--dark'
              }
            >
              <RegulatoryIcon
                type={card.icon}
                tone={card.variant === 'gold' ? 'dark' : 'light'}
              />
              <div className="regulatory__card-body">
                <h3 className="regulatory__card-title">{card.title}</h3>
                <p className="regulatory__card-text">{card.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
