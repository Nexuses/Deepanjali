const stats = [
  {
    value: '₹0',
    title: 'Intermediary Markup',
    text: 'Direct institutional pricing tied to live global spot rates with zero premium spreads.',
  },
  {
    value: '999.9',
    title: 'Fine Purity Standard',
    text: 'Independent assay-certified gold across every commercial transaction we execute.',
  },
  {
    value: '24hr',
    title: 'Live Trading Desk',
    text: 'Continuous execution through market volatility for wholesale and institutional clients.',
  },
  {
    value: '100%',
    title: 'Conflict-Free Gold',
    text: 'All precious metals sourced from ethically managed and environmentally responsible supply networks.',
  },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Key figures">
      <div className="stats__inner">
        <ul className="stats__grid">
          {stats.map((stat) => (
            <li key={stat.title} className="stats__item">
              <p className="stats__value">{stat.value}</p>
              <h3 className="stats__title">{stat.title} -</h3>
              <p className="stats__text">{stat.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
