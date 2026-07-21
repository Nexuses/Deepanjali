type SourcingCardIcon = 'aml' | 'purity' | 'conflict' | 'kyc';

const cards: { label: string; icon: SourcingCardIcon }[] = [
  { label: 'AML / CFT Compliant', icon: 'aml' },
  { label: 'Certified 999.9 Purity', icon: 'purity' },
  { label: 'Conflict-Free Sourcing', icon: 'conflict' },
  { label: 'Institutional KYC Engine', icon: 'kyc' },
];

function SourcingCardIcon({ type }: { type: SourcingCardIcon }) {
  const stroke = '#1a2332';

  return (
    <span className="sourcing__card-icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'aml' && (
          <g stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="12" width="22" height="26" rx="2" />
            <path d="M14 18h14M14 22h14M14 26h10" />
            <circle cx="34" cy="30" r="7" />
            <path d="M31.5 30l1.8 1.8 3.5-3.8" />
          </g>
        )}
        {type === 'purity' && (
          <g stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="26" r="12" />
            <path d="M24 14v4M24 34v4M12 26h4M32 26h4" />
            <path d="M24 20l1.6 2.8 3.2.5-2.3 2.3.5 3.2L24 27.2l-3 1.6.5-3.2-2.3-2.3 3.2-.5z" />
          </g>
        )}
        {type === 'conflict' && (
          <g stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="22" cy="22" r="10" />
            <path d="M12 22h20M22 12a12 12 0 010 20M22 12a12 12 0 000 20" />
            <circle cx="34" cy="34" r="7" />
            <path d="M37.5 34h-3M34 37.5v-3" />
          </g>
        )}
        {type === 'kyc' && (
          <g stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 38V18l14-6 14 6v20" />
            <path d="M10 38h28" />
            <path d="M16 38V24h6v14M26 38V20h6v18" />
            <path d="M20 14h8" />
          </g>
        )}
      </svg>
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
            <span className="sourcing__title-line sourcing__title-line--gold">
              Every Gram. Fully Traceable.
            </span>
            <span className="sourcing__title-line">Conflict-Free.</span>
          </h2>

          <p className="sourcing__text">
            Our sourcing policy is non-negotiable. Dipanjali Gold Trading maintains
            strict procurement standards that mandate conflict-free, environmentally
            responsible, and ethically managed supply networks across our entire
            inventory chain. We do not source from unverified intermediaries.
          </p>
          <p className="sourcing__text">
            This commitment extends beyond compliance — it is a commercial and moral
            obligation to our counterparties, our market, and the communities
            connected to the mines and refineries we work with. Every batch of metal
            that enters our facility arrives with documented origin, certified assay
            credentials, and a clear chain of custody.
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
