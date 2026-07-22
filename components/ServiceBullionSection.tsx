import Image from 'next/image';
import {
  Factory,
  Gauge,
  Layers,
  Percent,
  type LucideIcon,
} from 'lucide-react';

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

type FeatureIconType = (typeof features)[number]['icon'];

const featureIcons: Record<FeatureIconType, LucideIcon> = {
  refinery: Factory,
  inventory: Layers,
  execution: Gauge,
  spreads: Percent,
};

function FeatureIcon({ type }: { type: FeatureIconType }) {
  const Icon = featureIcons[type];
  return (
    <span className="service-bullion__icon" aria-hidden="true">
      <Icon />
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
