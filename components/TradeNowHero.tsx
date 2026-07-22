import Link from 'next/link';
import Navbar from '@/components/Navbar';

const rows = [
  {
    metal: 'Gold 999.9 – 24K',
    detail: 'Per Gram - Kilo Bar',
    bid: '7,218',
    ask: '7,224',
  },
  {
    metal: 'Gold 916 – 22K',
    detail: 'Scrap Basis - Per Gram',
    bid: '7,218',
    ask: '7,224',
  },
  {
    metal: 'Gold 750 – 18K',
    detail: 'Scrap Basis - Per Gram',
    bid: '7,218',
    ask: '7,224',
  },
  {
    metal: 'Silver 999 Fine',
    detail: 'Per Gram - Kilo Bar',
    bid: '7,218',
    ask: '7,224',
  },
  {
    metal: 'Gold Tola Bar – 999.9',
    detail: 'Per Tola - 11.66g',
    bid: '7,218',
    ask: '7,224',
  },
];

export default function TradeNowHero() {
  return (
    <section className="trade-now-hero" aria-label="Institutional trading desk">
      <div className="trade-now-hero__pattern" aria-hidden="true" />

      <Navbar />
      <div className="trade-now-hero__rule" aria-hidden="true" />

      <div className="trade-now-hero__body">
        <div className="trade-now-hero__copy">
          <p className="trade-now-hero__eyebrow">INSTITUTIONAL TRADING DESK</p>

          <h1 className="trade-now-hero__title">
            <span className="trade-now-hero__title-line">Execute.</span>
            <span className="trade-now-hero__title-accent">Today.</span>
          </h1>

          <p className="trade-now-hero__lede">
            Live bid/ask pricing. Immediate execution. Zero intermediary markup.
            Open your corporate account or submit a high-volume trade request
            directly to our institutional desk.
          </p>

          <div
            className="trade-now-hero__actions"
            role="group"
            aria-label="Trade actions"
          >
            <Link
              className="trade-now-hero__btn trade-now-hero__btn--primary"
              href="/contact"
            >
              Initiate Corporate Account
            </Link>
            <Link
              className="trade-now-hero__btn trade-now-hero__btn--secondary"
              href="/contact"
            >
              Submit Trade Request
            </Link>
          </div>
        </div>

        <aside
          className="trade-now-hero__board"
          aria-label="Institutional live bid ask board"
        >
          <div className="trade-now-hero__board-head">
            <p className="trade-now-hero__board-title">
              INSTITUTIONAL LIVE BID / ASK BOARD
            </p>
            <p className="trade-now-hero__board-live">
              <span className="trade-now-hero__board-dot" aria-hidden="true" />
              Live Prices
            </p>
          </div>

          <div className="trade-now-hero__table-wrap">
            <table className="trade-now-hero__table">
              <thead>
                <tr>
                  <th scope="col">METAL</th>
                  <th scope="col">BID ₹</th>
                  <th scope="col">ASK ₹</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.metal}>
                    <th scope="row">
                      <span className="trade-now-hero__metal">{row.metal}</span>
                      <span className="trade-now-hero__detail">{row.detail}</span>
                    </th>
                    <td>{row.bid}</td>
                    <td>{row.ask}</td>
                    <td>
                      <Link
                        className="trade-now-hero__trade"
                        href="/contact"
                      >
                        TRADE →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="trade-now-hero__disclaimer">
            Indicative prices only. Live rates confirmed by desk at time of
            execution. Prices in INR.
          </p>
        </aside>
      </div>
    </section>
  );
}
