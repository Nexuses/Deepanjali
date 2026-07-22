import {
  Award,
  BadgeCheck,
  Clock3,
  Landmark,
  Leaf,
  Shield,
  type LucideIcon,
} from 'lucide-react';

type FeatureIconType =
  | 'integrity'
  | 'experience'
  | 'purity'
  | 'track'
  | 'desk'
  | 'sourcing';

const features: { title: string; text: string; icon: FeatureIconType }[] = [
  {
    title: 'Institutional Integrity',
    text: 'Every transaction at Dipanjali is executed under strict AML-CFT compliance frameworks and zero-premium institutional spreads, eliminating intermediary friction.',
    icon: 'integrity',
  },
  {
    title: 'Exceptional Experience',
    text: 'Our trading desk is led by market veterans with over two decades of experience on institutional bullion desks across Mumbai, Dubai, and global financial centres.',
    icon: 'experience',
  },
  {
    title: 'Certified Purity',
    text: 'Every asset carries independent assay documentation guaranteeing exact fineness metrics. We certify 999.9 fine gold across all commercial transactions.',
    icon: 'purity',
  },
  {
    title: 'Proven Track Record',
    text: 'Dipanjali has established itself as a trusted counterparty for high-volume transactions, maintaining deep institutional relationships and continuous execution capability.',
    icon: 'track',
  },
  {
    title: '24-Hour Trading Desk',
    text: 'Our live institutional trading desk operates around the clock, providing real-time bid/ask pricing and immediate execution for all precious metals transactions.',
    icon: 'desk',
  },
  {
    title: 'Conflict-Free Sourcing',
    text: '100% of our precious metals are sourced exclusively from conflict-free, environmentally responsible, and ethically managed supply networks.',
    icon: 'sourcing',
  },
];

const icons: Record<FeatureIconType, LucideIcon> = {
  integrity: Landmark,
  experience: Award,
  purity: BadgeCheck,
  track: Shield,
  desk: Clock3,
  sourcing: Leaf,
};

function FeatureIcon({ type }: { type: FeatureIconType }) {
  const Icon = icons[type];
  return (
    <span className="features__icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

export default function Features() {
  return (
    <section className="features" id="why-us" aria-label="Why Dipanjali">
      <div className="features__inner">
        <ul className="features__grid">
          {features.map((feature) => (
            <li key={feature.title} className="features__item">
              <FeatureIcon type={feature.icon} />
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__text">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
