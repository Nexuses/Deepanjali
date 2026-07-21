type RegulatoryCard = {
  title: string;
  text: string;
  icon: 'aml' | 'kyc' | 'sourcing' | 'transparency';
  variant: 'gold' | 'dark';
};

const paragraphs = [
  'Operational integrity is our primary asset. Dipanjali Gold Trading enforces rigorous Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) protocols fully aligned with international regulatory mandates and Indian regulatory oversight frameworks.',
  'We deploy institutional-grade Know Your Customer (KYC) onboarding engines to verify all trading partners before any transaction is initiated. Our compliance infrastructure is not a checkbox — it is the backbone of every counterparty relationship we maintain.',
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
    text: 'Accelerated digital onboarding with full counterparty verification — including entity registration, beneficial ownership, and source-of-funds documentation — before any trade is executed.',
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

function RegulatoryIcon({
  type,
  tone,
}: {
  type: RegulatoryCard['icon'];
  tone: 'dark' | 'light';
}) {
  const stroke = tone === 'dark' ? '#1a2332' : '#d4af37';

  return (
    <span className="regulatory__icon" aria-hidden="true">
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'aml' && (
          <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 38V22l10-6 10 6v16" />
            <path d="M15 38h26" />
            <path d="M22 30h12M22 34h8" />
            <path d="M32 26l4 4 6-7" />
            <circle cx="38" cy="20" r="5" />
            <path d="M36.5 20l1 1 2.5-2.5" />
          </g>
        )}
        {type === 'kyc' && (
          <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="18" width="28" height="20" rx="2" />
            <circle cx="22" cy="26" r="3" />
            <path d="M17 34c1.2-2 2.8-3 5-3s3.8 1 5 3" />
            <path d="M30 26h10M30 30h7" />
            <circle cx="40" cy="16" r="5" />
            <path d="M38.5 16l1 1 2.5-2.5" />
          </g>
        )}
        {type === 'sourcing' && (
          <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 20h20l4 6v16H16V20z" />
            <path d="M16 20l3-5h14l3 5" />
            <path d="M20 30h16M20 34h12" />
            <circle cx="40" cy="18" r="5" />
            <path d="M38.5 18l1 1 2.5-2.5" />
          </g>
        )}
        {type === 'transparency' && (
          <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 38V22h14l6 6v10" />
            <path d="M30 22v6h6" />
            <path d="M19 30h8M19 34h6" />
            <path d="M38 34l4 4M42 30v8h-8" />
            <path d="M40 36l2 2" />
          </g>
        )}
      </svg>
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
