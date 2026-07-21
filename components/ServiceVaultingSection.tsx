import Image from 'next/image';

const VAULTING_IMAGE =
  'https://nexuses.s3.us-east-2.amazonaws.com/multiethnic-workers-team-tracking-inventory-using-bar-code-systems_1_1784630586100_f20e.png';

const features = [
  {
    title: 'ALLOCATED & SEGREGATED STORAGE',
    text: 'Your metal is held separately — never co-mingled with other client holdings. Allocated storage with full audit access and independent verification available on request.',
    icon: 'storage' as const,
  },
  {
    title: 'COMPREHENSIVE ALL-RISK INSURANCE',
    text: 'Every gram in our vault system is covered under comprehensive all-risk insurance policies. Full replacement value coverage with no deductible exposure for client holdings.',
    icon: 'insurance' as const,
  },
  {
    title: 'ARMOURED LOGISTICS NETWORK',
    text: 'Strategic partnerships with certified armoured logistics providers guarantee secure, fully tracked, end-to-end physical delivery across trans-regional trade routes.',
    icon: 'logistics' as const,
  },
  {
    title: 'ULTRA-FORTIFIED VAULT FACILITIES',
    text: 'High-security, purpose-built vault infrastructure with multi-layer physical access controls, 24-hour surveillance, and independent security audits.',
    icon: 'vault' as const,
  },
];

function FeatureIcon({ type }: { type: (typeof features)[number]['icon'] }) {
  return (
    <span className="service-vaulting__icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'storage' && (
          <>
            <path
              d="M8 14c0-2.2 3.6-4 8-4s8 1.8 8 4c0 1.5-1.5 2.8-3.8 3.5L18 24h-4l-2.2-6.5C9.5 16.8 8 15.5 8 14z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="13.5" cy="13.5" r="2.2" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="18.5" cy="13.5" r="2.2" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="16" cy="16.8" r="2.2" stroke="currentColor" strokeWidth="1.3" />
          </>
        )}
        {type === 'insurance' && (
          <>
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
            <ellipse
              cx="16"
              cy="16"
              rx="4.5"
              ry="10"
              stroke="currentColor"
              strokeWidth="1.35"
            />
            <path
              d="M6.5 16h19M7.8 11.5h16.4M7.8 20.5h16.4"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </>
        )}
        {type === 'logistics' && (
          <>
            <path
              d="M5 18h12v-6H5v6z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M17 15h4.5l3 3H17v-3z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="21.5" r="2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="20.5" cy="21.5" r="2" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M11 21.5h7.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M7 12V9.5h6V12"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </>
        )}
        {type === 'vault' && (
          <>
            <rect
              x="7"
              y="8"
              width="18"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="16" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.45" />
            <path
              d="M16 12.8v6.4M12.8 16h6.4"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
            />
            <path
              d="M10 11h2M20 11h2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </span>
  );
}

export default function ServiceVaultingSection() {
  return (
    <section
      className="service-vaulting"
      aria-label="Fully insured allocated storage solutions"
    >
      <div className="service-vaulting__inner">
        <div className="service-vaulting__copy">
          <div className="service-vaulting__labelBlock">
            <span className="service-vaulting__badge" aria-hidden="true">
              C
            </span>
            <p className="service-vaulting__label">SERVICE PILLAR (C)</p>
          </div>

          <h2 className="service-vaulting__title">
            Fully Insured Allocated Storage Solutions
          </h2>

          <p className="service-vaulting__intro">
            Mitigate systemic risk with our institutional vaulting frameworks.
            Dipanjali offers allocated and segregated storage options in
            high-security, ultra-fortified vaulting facilities. Managed under
            comprehensive, all-risk insurance coverage policies, our assets are
            completely protected. For trans-regional requirements, our strategic
            partnerships with armoured logistics providers guarantee fully
            secure, end-to-end transport of physical cargo.
          </p>

          <ul className="service-vaulting__list">
            {features.map((feature) => (
              <li key={feature.title} className="service-vaulting__item">
                <FeatureIcon type={feature.icon} />
                <div className="service-vaulting__itemBody">
                  <h3 className="service-vaulting__itemTitle">{feature.title}</h3>
                  <p className="service-vaulting__itemText">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a className="service-vaulting__cta" href="/contact">
            ENQUIRE ABOUT BULLION ALLOCATION
            <span aria-hidden="true"> →</span>
          </a>
        </div>

        <div className="service-vaulting__media">
          <Image
            className="service-vaulting__image"
            src={VAULTING_IMAGE}
            alt="Warehouse team tracking inventory with barcode systems"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
