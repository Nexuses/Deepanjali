import Image from 'next/image';
import {
  Globe,
  HandCoins,
  LockKeyhole,
  Truck,
  type LucideIcon,
} from 'lucide-react';

const VAULTING_IMAGE =
  'https://nexuses.s3.us-east-2.amazonaws.com/multiethnic-workers-team-tracking-inventory-using-bar-code-systems_1_1784630586100_f20e.png';

const features = [
  {
    title: 'ALLOCATED & SEGREGATED STORAGE',
    text: 'Your metal is held separately - never co-mingled with other client holdings. Allocated storage with full audit access and independent verification available on request.',
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

type FeatureIconType = (typeof features)[number]['icon'];

const featureIcons: Record<FeatureIconType, LucideIcon> = {
  storage: HandCoins,
  insurance: Globe,
  logistics: Truck,
  vault: LockKeyhole,
};

function FeatureIcon({ type }: { type: FeatureIconType }) {
  const Icon = featureIcons[type];
  return (
    <span className="service-vaulting__icon" aria-hidden="true">
      <Icon strokeWidth={1.5} />
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
          <div className="service-vaulting__header">
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
