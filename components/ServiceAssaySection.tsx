import Image from 'next/image';
import {
  Atom,
  Flame,
  HandCoins,
  Microscope,
  type LucideIcon,
} from 'lucide-react';

const ASSAY_IMAGE =
  'https://nexuses.s3.us-east-2.amazonaws.com/pollution-industry-exterior-daylight_1_1784630504149_ahll.png';

const features = [
  {
    title: 'XRF & FIRE ASSAY ANALYSIS',
    text: 'State-of-the-art X-ray Fluorescence and fire assay chemical analysis delivers exact, verifiable fineness metrics for every lot submitted - no approximations.',
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
    text: 'Detailed material composition report issued with every assay - covering gold, silver, and base metal content. Documentation provided for audit and compliance use.',
    icon: 'composition' as const,
  },
];

type FeatureIconType = (typeof features)[number]['icon'];

const featureIcons: Record<FeatureIconType, LucideIcon> = {
  assay: Microscope,
  melting: Flame,
  settlement: HandCoins,
  composition: Atom,
};

function FeatureIcon({ type }: { type: FeatureIconType }) {
  const Icon = featureIcons[type];
  return (
    <span className="service-assay__icon" aria-hidden="true">
      <Icon strokeWidth={1.5} />
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
          <div className="service-assay__header">
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
