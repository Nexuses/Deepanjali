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

function SourcingCardIcon({ type }: { type: (typeof cards)[number]['icon'] }) {
  return (
    <span className="sourcing__card-icon" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'aml' && (
          <g
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 12h24l6 6v34H14V12z" />
            <path d="M38 12v6h6" />
            <path d="M22 26h18M22 32h18M22 38h12" />
            <circle cx="44" cy="44" r="10" fill="#d4af37" />
            <circle cx="44" cy="44" r="10" />
            <path d="M39.5 44.2l3 3 6.2-6.5" />
          </g>
        )}
        {type === 'purity' && (
          <g
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="32" cy="30" r="14" />
            <path d="M24 42l-3 12 11-5 11 5-3-12" />
            <path d="M26.5 30.2l3.2 3.2 7.2-7.5" />
          </g>
        )}
        {type === 'conflict' && (
          <g
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="28" cy="28" r="14" />
            <ellipse cx="28" cy="28" rx="6" ry="14" />
            <path d="M14 28h28M28 14c4 4.5 6 9 6 14s-2 9.5-6 14M28 14c-4 4.5-6 9-6 14s2 9.5 6 14" />
            <circle cx="44" cy="44" r="9" fill="#d4af37" />
            <circle cx="44" cy="44" r="9" />
            <path d="M50.5 50.5l5 5" />
          </g>
        )}
        {type === 'kyc' && (
          <g
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 50V28l22-12 22 12v22" />
            <path d="M10 50h44" />
            <path d="M18 50V34h8v16M28 50V30h8v20M38 50V34h8v16" />
            <path d="M26 20h12" />
            <path d="M32 12v6" />
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
            Every Gram. Fully Traceable. Conflict-Free.
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
