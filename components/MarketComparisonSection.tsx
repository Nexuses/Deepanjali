const rows = [
  {
    feature: 'Pricing tied to live spot rate',
    broker: 'Sometimes',
    dealer: 'no',
  },
  {
    feature: 'Zero intermediary markup',
    broker: 'no',
    dealer: 'no',
  },
  {
    feature: 'Independent assay certification',
    broker: 'Varies',
    dealer: 'no',
  },
  {
    feature: 'AML / CFT compliant operations',
    broker: 'Partial',
    dealer: 'no',
  },
  {
    feature: 'Allocated vault storage',
    broker: 'no',
    dealer: 'no',
  },
  {
    feature: 'Dedicated named dealer',
    broker: 'no',
    dealer: 'no',
  },
  {
    feature: 'Conflict-free sourcing policy',
    broker: 'Unverified',
    dealer: 'no',
  },
  {
    feature: '24-hour institutional trading desk',
    broker: 'no',
    dealer: 'no',
  },
  {
    feature: 'Comprehensive all-risk insurance',
    broker: 'Sometimes',
    dealer: 'no',
  },
] as const;

function CheckIcon() {
  return (
    <span className="market-comparison__check" aria-label="Yes">
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="currentColor" />
        <path
          d="M8.4 14.2l3.5 3.5 7.7-7.7"
          stroke="#ffffff"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span className="market-comparison__cross" aria-label="No">
      ×
    </span>
  );
}

function CellValue({ value }: { value: string }) {
  if (value === 'no') return <CrossIcon />;
  return <span className="market-comparison__muted">{value}</span>;
}

export default function MarketComparisonSection() {
  return (
    <section className="market-comparison" aria-label="Market comparison">
      <div className="market-comparison__inner">
        <header className="market-comparison__header">
          <p className="market-comparison__eyebrow">MARKET COMPARISON</p>
          <span className="market-comparison__rule" aria-hidden="true" />
          <h2 className="market-comparison__title">
            <span className="market-comparison__title-gold">Dipanjali</span>
            <span> vs. The Regional Market</span>
          </h2>
          <span className="market-comparison__rule" aria-hidden="true" />
        </header>

        <div className="market-comparison__tableWrap">
          <table className="market-comparison__table">
            <caption className="sr-only">
              Feature comparison of Dipanjali Gold Trading versus regional
              brokers and unorganised dealers
            </caption>
            <colgroup>
              <col className="market-comparison__col-feature" />
              <col className="market-comparison__col-dipanjali" />
              <col className="market-comparison__col-broker" />
              <col className="market-comparison__col-dealer" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col" className="market-comparison__th-dipanjali">
                  Dipanjali Gold Trading
                </th>
                <th scope="col">Regional Broker</th>
                <th scope="col">Unorganised Dealer</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td className="market-comparison__td-dipanjali">
                    <CheckIcon />
                  </td>
                  <td>
                    <CellValue value={row.broker} />
                  </td>
                  <td>
                    <CellValue value={row.dealer} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
