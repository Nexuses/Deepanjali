const specialists = [
  {
    name: 'Rajiv Mehta',
    role: 'Head of Trading',
    bio: 'Over two decades of experience on institutional bullion desks across Mumbai and Dubai. Leads our wholesale allocation strategy and tier-one liquidity relationships.',
  },
  {
    name: 'Priya Anand',
    role: 'Compliance & KYC Officer',
    bio: 'Architect of our AML-CFT onboarding framework and conflict-free supply chain policy. Ensures every counterparty meets our stringent regulatory standards.',
  },
  {
    name: 'Anand Iyer',
    role: 'Chief Assay Officer',
    bio: 'Certified metallurgist specializing in XRF and fire assay analysis. Guarantees certified 999.9 fine purity across every lot processed through our facilities.',
  },
];

function PortraitPlaceholder() {
  return (
    <div className="specialists__portrait" aria-hidden="true">
      <svg
        className="specialists__portrait-icon"
        viewBox="0 0 80 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width="77"
          height="53"
          rx="2"
          stroke="#a8b0b8"
          strokeWidth="1.5"
        />
        <circle cx="28" cy="20" r="6" stroke="#a8b0b8" strokeWidth="1.5" />
        <path
          d="M8 44l18-16 10 9 12-14 24 21"
          stroke="#a8b0b8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Specialists() {
  return (
    <section
      className="specialists"
      id="specialists"
      aria-labelledby="specialists-heading"
    >
      <div className="specialists__inner">
        <div className="specialists__header">
          <h2 className="specialists__label" id="specialists-heading">
            Senior Trading Specialists
          </h2>
          <span className="specialists__line" aria-hidden="true" />
        </div>

        <ul className="specialists__grid">
          {specialists.map((person) => (
            <li key={person.name} className="specialists__card">
              <PortraitPlaceholder />
              <h3 className="specialists__name">{person.name}</h3>
              <p className="specialists__role">{person.role}</p>
              <p className="specialists__bio">{person.bio}</p>
              <a className="specialists__link" href="#specialists">
                Learn More
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
