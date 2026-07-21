import Image from 'next/image';

const BULLION_IMAGE =
  'https://nexuses.s3.us-east-2.amazonaws.com/P5150161_1_1784630045052_ywp5.png';

const features = [
  {
    title: 'LBMA-CERTIFIED SOURCE REFINERIES',
    text: 'All bullion sourced exclusively from London Bullion Market Association certified and internationally recognised refineries — zero unverified supply.',
    icon: 'refinery' as const,
  },
  {
    title: 'FULL INVENTORY RANGE: 1G — 1KG',
    text: 'Minted and cast bars across all standard weights, plus investment coins. Accommodating both granular jewellery manufacturer requirements and large treasury allocations.',
    icon: 'inventory' as const,
  },
  {
    title: 'CONTINUOUS EXECUTION CAPACITY',
    text: 'Deep capital reserves support large-scale physical delivery even through periods of high market volatility — no execution gaps, no delayed fulfilment.',
    icon: 'execution' as const,
  },
  {
    title: 'ZERO-PREMIUM INSTITUTIONAL SPREADS',
    text: 'Pricing tied directly to live global spot rates. No intermediary markup, no hidden conversion fees. Institutional bid/ask spreads for every counterparty.',
    icon: 'spreads' as const,
  },
];

function FeatureIcon({ type }: { type: (typeof features)[number]['icon'] }) {
  return (
    <span className="service-bullion__icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'refinery' && (
          <>
            <path
              d="M6 26V14l5-3v3l5-3v15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M16 26V12l5 3v-3l5 3v11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M4 26h24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8.5 18v4M11.5 17v5M18.5 18v4M21.5 19v3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === 'inventory' && (
          <>
            <rect
              x="7"
              y="5"
              width="18"
              height="22"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M11 11h10M11 16h10M11 21h6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M11 11.2l1.4 1.4 2.4-2.6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {type === 'execution' && (
          <>
            <circle cx="16" cy="16" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M16 7.5V5.5M16 26.5v-2M24.5 16h2M5.5 16h2M21.8 10.2l1.4-1.4M8.8 23.2l1.4-1.4M21.8 21.8l1.4 1.4M8.8 8.8l1.4 1.4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M14.2 16.1l1.5 1.5 3.2-3.4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {type === 'spreads' && (
          <>
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
            <text
              x="16"
              y="20.2"
              textAnchor="middle"
              fill="currentColor"
              fontSize="9"
              fontWeight="700"
              fontFamily="var(--font-sans), sans-serif"
            >
              0%
            </text>
          </>
        )}
      </svg>
    </span>
  );
}

export default function ServiceBullionSection() {
  return (
    <section
      className="service-bullion"
      aria-label="Investment-grade physical bullion allocation"
    >
      <div className="service-bullion__inner">
        <div className="service-bullion__copy">
          <div className="service-bullion__labelRow">
            <span className="service-bullion__badge" aria-hidden="true">
              A
            </span>
            <p className="service-bullion__label">SERVICE PILLAR</p>
          </div>

          <h2 className="service-bullion__title">
            Investment-Grade Physical Bullion Allocation
          </h2>

          <p className="service-bullion__intro">
            We specialise in the high-volume distribution of investment-grade
            gold and silver bullion. Sourced exclusively from LBMA-certified and
            internationally recognised refineries, our physical inventory
            includes minted and cast bars ranging from 1 gram to 1 kilogram,
            alongside standard investment coins. Our deep capital reserves allow
            us to facilitate large-scale physical delivery orders with continuous
            execution, even during periods of high market volatility.
          </p>

          <ul className="service-bullion__list">
            {features.map((feature) => (
              <li key={feature.title} className="service-bullion__item">
                <FeatureIcon type={feature.icon} />
                <div className="service-bullion__itemBody">
                  <h3 className="service-bullion__itemTitle">{feature.title}</h3>
                  <p className="service-bullion__itemText">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a className="service-bullion__cta" href="/contact">
            ENQUIRE ABOUT BULLION ALLOCATION
            <span aria-hidden="true"> →</span>
          </a>
        </div>

        <div className="service-bullion__media">
          <Image
            className="service-bullion__image"
            src={BULLION_IMAGE}
            alt="Investment-grade silver bars and gold buffalo coins"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
