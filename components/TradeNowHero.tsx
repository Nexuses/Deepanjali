'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

type BoardRow = {
  id: string;
  metal: string;
  detail: string;
  bid: string;
  ask: string;
};

const FALLBACK_ROWS: BoardRow[] = [
  {
    id: 'board-gold-24k',
    metal: 'Gold 999.9 – 24K',
    detail: 'Per Gram - Kilo Bar',
    bid: '—',
    ask: '—',
  },
  {
    id: 'board-gold-22k',
    metal: 'Gold 916 – 22K',
    detail: 'Scrap Basis - Per Gram',
    bid: '—',
    ask: '—',
  },
  {
    id: 'board-gold-18k',
    metal: 'Gold 750 – 18K',
    detail: 'Scrap Basis - Per Gram',
    bid: '—',
    ask: '—',
  },
  {
    id: 'board-silver-999',
    metal: 'Silver 999 Fine',
    detail: 'Per Gram - Kilo Bar',
    bid: '—',
    ask: '—',
  },
  {
    id: 'board-gold-tola',
    metal: 'Gold Tola Bar – 999.9',
    detail: 'Per Tola - 11.66g',
    bid: '—',
    ask: '—',
  },
];

const POLL_MS = 45_000;

export default function TradeNowHero() {
  const [rows, setRows] = useState<BoardRow[]>(FALLBACK_ROWS);
  const [live, setLive] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch('/api/live-spot', { cache: 'no-store' });
        if (!response.ok) return;

        const data = (await response.json()) as {
          updatedAt?: string;
          board?: BoardRow[];
        };

        if (cancelled || !data.board?.length) return;

        setRows(data.board);
        setLive(true);
        setUpdatedAt(data.updatedAt ?? new Date().toISOString());
      } catch {
        // Keep last known / fallback values.
      }
    };

    void load();
    const timer = window.setInterval(() => {
      void load();
    }, POLL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="trade-now-hero" aria-label="Institutional trading desk">
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
          title={
            updatedAt
              ? `Live rates updated ${new Date(updatedAt).toLocaleString()}`
              : 'Fetching live rates…'
          }
        >
          <div className="trade-now-hero__board-head">
            <p className="trade-now-hero__board-title">
              INSTITUTIONAL LIVE BID / ASK BOARD
            </p>
            <p
              className={
                live
                  ? 'trade-now-hero__board-live'
                  : 'trade-now-hero__board-live trade-now-hero__board-live--pending'
              }
            >
              <span className="trade-now-hero__board-dot" aria-hidden="true" />
              {live ? 'Live Prices' : 'Updating…'}
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
                  <tr key={row.id}>
                    <th scope="row">
                      <span className="trade-now-hero__metal">{row.metal}</span>
                      <span className="trade-now-hero__detail">{row.detail}</span>
                    </th>
                    <td>{row.bid}</td>
                    <td>{row.ask}</td>
                    <td>
                      <Link className="trade-now-hero__trade" href="/contact">
                        TRADE →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="trade-now-hero__disclaimer">
            Live spot-derived bid/ask. Final rates confirmed by desk at time of
            execution. Prices in INR.
          </p>
        </aside>
      </div>
    </section>
  );
}
