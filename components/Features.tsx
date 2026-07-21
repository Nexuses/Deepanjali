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

function FeatureIcon({ type }: { type: FeatureIconType }) {
  return (
    <span className="features__icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gold-${type}`} x1="8" y1="4" x2="40" y2="44">
            <stop offset="0%" stopColor="#F5E6A3" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A67C00" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" fill={`url(#gold-${type})`} />
        {type === 'integrity' && (
          <g stroke="#1a1408" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 32V20l8-5 8 5v12" />
            <path d="M19 32v-8h2v8M23 32v-8h2v8M27 32v-8h2v8" />
            <path d="M15 32h18" />
          </g>
        )}
        {type === 'experience' && (
          <g stroke="#1a1408" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 30c0-2.5 2.5-4.5 6-4.5s6 2 6 4.5" />
            <path d="M17 30h14v3H17z" />
            <path d="M24 14l1.1 2.3 2.5.3-1.9 1.8.5 2.5L24 19.7l-2.2 1.2.5-2.5-1.9-1.8 2.5-.3z" fill="#1a1408" stroke="none" />
            <path d="M18.5 16.5l.8 1.6 1.8.2-1.3 1.3.4 1.7-1.7-.9-1.7.9.4-1.7-1.3-1.3 1.8-.2z" fill="#1a1408" stroke="none" />
            <path d="M29.5 16.5l.8 1.6 1.8.2-1.3 1.3.4 1.7-1.7-.9-1.7.9.4-1.7-1.3-1.3 1.8-.2z" fill="#1a1408" stroke="none" />
          </g>
        )}
        {type === 'purity' && (
          <g stroke="#1a1408" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="21" r="7" />
            <path d="M24 14v-2M19 28l-2.5 6h15L29 28" />
            <path d="M21 21l2 2 4-4" />
          </g>
        )}
        {type === 'track' && (
          <g stroke="#1a1408" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 12l10 4v7c0 6.5-4.2 10.5-10 12-5.8-1.5-10-5.5-10-12v-7l10-4z" />
            <path d="M18.5 24.5c1.2 1.8 3.2 3 5.5 3.2 1.6-.1 3-.7 4.2-1.8" />
            <path d="M18.5 24.5c1.5-1.2 3.2-1.5 5-.8" />
          </g>
        )}
        {type === 'desk' && (
          <g stroke="#1a1408" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="24" r="9" />
            <path d="M24 18v6l4 2.5" />
            <path d="M33 24a9 9 0 0 1-2.4 6.2" />
            <path d="M15 24a9 9 0 0 1 2.4-6.2" strokeDasharray="2 2" />
            <text
              x="24"
              y="26.5"
              textAnchor="middle"
              fill="#1a1408"
              stroke="none"
              fontSize="6"
              fontFamily="Arial, sans-serif"
              fontWeight="700"
            >
              24/7
            </text>
          </g>
        )}
        {type === 'sourcing' && (
          <g stroke="#1a1408" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 26c1.5-3 3.8-5 6.5-5.2 1.5 1.8 3.2 2.7 5 2.7" />
            <path d="M33 26c-1.5-3-3.8-5-6.5-5.2-1.5 1.8-3.2 2.7-5 2.7" />
            <path d="M18 28c1.8 2.8 3.8 4 6 4s4.2-1.2 6-4" />
            <path d="M22 18l2-3 2 3-2 4z" fill="#1a1408" fillOpacity="0.15" />
          </g>
        )}
      </svg>
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
