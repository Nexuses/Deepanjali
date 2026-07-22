const specialists = [
  {
    name: 'Rajiv Mehta',
    role: 'Managing Director',
    bio: 'With over two decades of institutional bullion trading experience across Mumbai and Dubai, Rajiv built Dipanjali on a single conviction - that institutional-grade precious metals dealing demands absolute accountability. He leads all principal trading operations and counterparty relationships.',
  },
  {
    name: 'Priya Anand',
    role: 'Head of Compliance & Governance',
    bio: 'Priya architects and enforces Dipanjali’s AML-CFT and KYC compliance infrastructure. Her background spans regulatory advisory and financial crime prevention across India’s leading financial institutions. She ensures every counterparty relationship meets international compliance standards before any trade is executed.',
  },
  {
    name: 'Anand Iyer',
    role: 'Senior Bullion Dealer',
    bio: 'Anand manages live desk execution, wholesale order flow, and institutional client relationships. With deep expertise in physical settlement, yield optimization, and scrap assay protocols, he is the operational anchor for Dipanjali’s high-volume trading counterparties.',
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

export default function AboutSpecialists() {
  return (
    <section
      className="specialists specialists--about"
      aria-labelledby="about-specialists-heading"
    >
      <div className="specialists__inner">
        <div className="specialists__header">
          <h2 className="specialists__label" id="about-specialists-heading">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
