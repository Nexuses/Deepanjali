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

function TrustIcon({ type }: { type: TrustIconType }) {
  return (
    <span className="trust__icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'aml' && (
          <g stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="14" width="24" height="18" rx="2" />
            <circle cx="16" cy="22" r="3" />
            <path d="M11 29c1.2-2 2.8-3 5-3s3.8 1 5 3" />
            <path d="M22 20h7M22 24h5" />
            <path d="M30 18l8 3v6c0 4-2.8 6.8-8 8-5.2-1.2-8-4-8-8v-2" />
            <path d="M33 27.5l2 2 4-4" />
          </g>
        )}
        {type === 'purity' && (
          <g stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 8l2.4 4.2 4.8.8-3.4 3.4.8 4.8L24 18.8 19.4 21.2l.8-4.8-3.4-3.4 4.8-.8z" />
            <circle cx="24" cy="28" r="10" />
            <path d="M20 28l2.8 2.8 6-6" />
          </g>
        )}
        {type === 'sourcing' && (
          <g stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 16h16l4 6v14H14V16z" />
            <path d="M14 16l3-5h10l3 5" />
            <path d="M18 26h12M18 30h12M18 34h8" />
          </g>
        )}
        {type === 'kyc' && (
          <g stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="22" cy="22" r="10" />
            <path d="M29.5 29.5L38 38" />
            <circle cx="22" cy="20" r="3" />
            <path d="M17 28c1.2-2 2.8-3 5-3s3.8 1 5 3" />
            <path d="M34 14l1 2 2 .3-1.5 1.5.4 2.1L34 18.6l-1.9 1.2.4-2.1L31 16.2l2-.3z" fill="#D4AF37" stroke="none" />
            <path d="M39 19l.7 1.4 1.5.2-1.1 1.1.3 1.5-1.4-.7-1.4.7.3-1.5-1.1-1.1 1.5-.2z" fill="#D4AF37" stroke="none" />
          </g>
        )}
      </svg>
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
