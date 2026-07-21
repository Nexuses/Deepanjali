import Image from 'next/image';

const ASSAY_IMAGE =
  'https://nexuses.s3.us-east-2.amazonaws.com/pollution-industry-exterior-daylight_1_1784630504149_ahll.png';

const features = [
  {
    title: 'XRF & FIRE ASSAY ANALYSIS',
    text: 'State-of-the-art X-ray Fluorescence and fire assay chemical analysis delivers exact, verifiable fineness metrics for every lot submitted — no approximations.',
    icon: 'assay' as const,
  },
  {
    title: 'INDUCTION MELTING TECHNOLOGY',
    text: 'Modern induction melting techniques ensure complete material processing with maximum yield extraction and minimal processing loss across all scrap and industrial lots.',
    icon: 'melting' as const,
  },
  {
    title: 'SAME-DAY FINANCIAL SETTLEMENT',
    text: 'Ultra-fast financial settlement options or direct weight exchange terms. Clients choose: cash settlement against verified yield, or equivalent fine metal return.',
    icon: 'settlement' as const,
  },
  {
    title: 'FULL COMPOSITION TRANSPARENCY',
    text: 'Detailed material composition report issued with every assay — covering gold, silver, and base metal content. Documentation provided for audit and compliance use.',
    icon: 'composition' as const,
  },
];

function FeatureIcon({ type }: { type: (typeof features)[number]['icon'] }) {
  return (
    <span className="service-assay__icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'assay' && (
          <>
            <rect
              x="6"
              y="7"
              width="12"
              height="16"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9 12h6M9 16h6M9 20h4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="22" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M25.5 23.5L29 27"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        )}
        {type === 'melting' && (
          <>
            <path
              d="M10 12c0-3.2 2.7-6 6-6s6 2.8 6 6c0 4.5-6 12-6 12s-6-7.5-6-12z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M14 13.5c.6-1.2 1.5-2 2.8-2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M8 26h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        )}
        {type === 'settlement' && (
          <>
            <path
              d="M8 14c0-2.5 3.5-4.5 8-4.5s8 2 8 4.5c0 1.6-1.4 3-3.8 3.8L18 24H14l-2.2-5.7C9.4 17 8 15.6 8 14z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="13.5" r="3.2" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M16 11.2v4.6M14.4 12.4h2.4c.7 0 1.2.4 1.2 1s-.5 1-1.2 1h-2.8"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </>
        )}
        {type === 'composition' && (
          <>
            <circle cx="16" cy="16" r="5.2" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M16 8.2V5.8M16 26.2v-2.4M23.8 16h2.4M5.8 16h2.4M21.5 10.5l1.7-1.7M8.8 23.2l1.7-1.7M21.5 21.5l1.7 1.7M8.8 8.8l1.7 1.7"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M14 14.5v5l2-1.2 2 1.2v-5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    </span>
  );
}

export default function ServiceAssaySection() {
  return (
    <section
      className="service-assay"
      aria-label="Advanced metallurgical assaying and industrial refining"
    >
      <div className="service-assay__inner">
        <div className="service-assay__media">
          <Image
            className="service-assay__image"
            src={ASSAY_IMAGE}
            alt="Industrial refining facility exterior"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>

        <div className="service-assay__copy">
          <div className="service-assay__labelBlock">
            <span className="service-assay__badge" aria-hidden="true">
              B
            </span>
            <p className="service-assay__label">SERVICE PILLAR (B)</p>
          </div>

          <h2 className="service-assay__title">
            Advanced Metallurgical Assaying &amp; Industrial Refining
          </h2>

          <p className="service-assay__intro">
            Dipanjali provides comprehensive refining solutions engineered to
            extract maximum value from scrap gold and industrial primary lots.
            Utilising modern induction melting techniques and precise X-ray
            Fluorescence (XRF) and fire assay chemical analysis, we provide
            complete transparency into material composition. Our clients receive
            exact, verified yields with ultra-fast financial settlement options
            or direct weight exchange terms.
          </p>

          <ul className="service-assay__list">
            {features.map((feature) => (
              <li key={feature.title} className="service-assay__item">
                <FeatureIcon type={feature.icon} />
                <div className="service-assay__itemBody">
                  <h3 className="service-assay__itemTitle">{feature.title}</h3>
                  <p className="service-assay__itemText">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a className="service-assay__cta" href="/contact">
            ENQUIRE ABOUT BULLION ALLOCATION
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
