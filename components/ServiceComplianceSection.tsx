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

function ComplianceIcon({ type }: { type: (typeof items)[number]['icon'] }) {
  return (
    <span className="service-compliance__icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'aml' && (
          <>
            <rect
              x="8"
              y="8"
              width="32"
              height="32"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="22" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M24 17.5v9M21.5 19.5h3.2c1.1 0 2 .7 2 1.7s-.9 1.7-2 1.7H21.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M14 34c1.8-3.2 5-5 10-5s8.2 1.8 10 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M30 28.5c1.5 1.2 2.5 2.8 2.8 4.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === 'purity' && (
          <>
            <path
              d="M14 8h14l4 4v28H14V8z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M28 8v4h4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M18 18h10M18 23h10M18 28h7"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="31" cy="34" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M28.5 34.2l1.7 1.7 3.4-3.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {type === 'sourcing' && (
          <>
            <circle cx="16" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M9 32c1.2-3.5 3.8-5.5 7-5.5s5.8 2 7 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M25 32c1.2-3.5 3.8-5.5 7-5.5s5.8 2 7 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M24 9.2v5.6M21.8 12h4.4"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
            />
            <path
              d="M21.2 9.8l1.4 1.4M25.4 12.8l1.4 1.4M21.2 14.2l1.4-1.4M25.4 11.2l1.4-1.4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </>
        )}
        {type === 'kyc' && (
          <>
            <path
              d="M10 36V18l14-8 14 8v18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M10 36h28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 36V24h4v12M22 36V22h4v14M28 36V26h4v10"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
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
