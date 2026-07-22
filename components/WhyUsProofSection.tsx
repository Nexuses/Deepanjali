const stats = [
  {
    value: '₹0',
    text: 'Intermediary markup on any transaction - pricing always tied directly to live global spot rates',
  },
  {
    value: '999.9',
    text: 'Fine gold purity guaranteed across every commercial transaction with independent assay certification',
  },
  {
    value: '24hr',
    text: 'Live institutional trading desk - continuous execution through market volatility, no automated queues',
  },
];

export default function WhyUsProofSection() {
  return (
    <section className="why-us-proof" aria-label="Client proof points">
      <div className="why-us-proof__inner">
        <blockquote className="why-us-proof__quote">
          <p>
            &ldquo;The level of institutional rigour Dipanjali brings to
            physical gold trading is genuinely rare in this market. They are the
            only counterparty we trust for allocated vaulting and high-volume
            execution.&rdquo;
          </p>
          <footer className="why-us-proof__attribution">
            <cite>
              <span className="why-us-proof__role">
                SENIOR TREASURY MANAGER -
              </span>{' '}
              <span className="why-us-proof__org">
                PRIVATE WEALTH OFFICE, MUMBAI
              </span>
            </cite>
          </footer>
        </blockquote>

        <span className="why-us-proof__rule" aria-hidden="true" />

        <ul className="why-us-proof__stats">
          {stats.map((stat) => (
            <li key={stat.value} className="why-us-proof__stat">
              <p className="why-us-proof__value">{stat.value}</p>
              <p className="why-us-proof__text">{stat.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
