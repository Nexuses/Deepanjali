'use client';

import { useEffect, useState } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

type SpotItemData = {
  id: string;
  name: string;
  price: string;
  value: number;
  change: number;
};

type LiveSpotResponse = {
  updatedAt: string;
  items: Array<{
    id: string;
    name: string;
    price: string;
    value: number;
  }>;
};

type StoredBaseline = {
  date: string;
  values: Record<string, number>;
};

const FALLBACK_ITEMS: SpotItemData[] = [
  { id: 'gold-24k', name: 'Gold 999.9 (24K)', price: '₹7,842 /g', value: 7842, change: 0 },
  { id: 'gold-22k', name: 'Gold 916 (22K)', price: '₹7,179 /g', value: 7179, change: 0 },
  { id: 'gold-kilo', name: 'Gold Kilo Bar', price: '₹78,42,000', value: 7842000, change: 0 },
  { id: 'silver-999', name: 'Silver 999', price: '₹96.40 /g', value: 96.4, change: 0 },
];

const STORAGE_KEY = 'dipanjali-live-spot-baseline';
const POLL_MS = 45_000;

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function readBaseline(): StoredBaseline | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredBaseline;
  } catch {
    return null;
  }
}

function writeBaseline(values: Record<string, number>) {
  try {
    const payload: StoredBaseline = { date: todayKey(), values };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore quota / private mode errors
  }
}

function withChange(
  items: LiveSpotResponse['items'],
  baseline: Record<string, number> | null,
): SpotItemData[] {
  return items.map((item) => {
    const prev = baseline?.[item.id];
    const change =
      typeof prev === 'number' && prev > 0
        ? ((item.value - prev) / prev) * 100
        : 0;

    return {
      ...item,
      change,
    };
  });
}

function SpotItem({ name, price, change }: SpotItemData) {
  const isUp = change >= 0;
  const showChange = Math.abs(change) >= 0.005;

  return (
    <span className="live-spot__item">
      <span className="live-spot__name">{name}</span>
      <span className="live-spot__price">{price}</span>
      <span
        className={
          isUp
            ? 'live-spot__change live-spot__change--up'
            : 'live-spot__change live-spot__change--down'
        }
      >
        {showChange ? (
          <>
            <span aria-hidden="true">
              {isUp ? (
                <TrendingUp className="live-spot__trend-icon" />
              ) : (
                <TrendingDown className="live-spot__trend-icon" />
              )}
            </span>
            {Math.abs(change).toFixed(2)}%
          </>
        ) : (
          <span className="live-spot__change-flat">0.00%</span>
        )}
      </span>
    </span>
  );
}

export default function LiveSpot() {
  const [items, setItems] = useState<SpotItemData[]>(FALLBACK_ITEMS);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch('/api/live-spot', { cache: 'no-store' });
        if (!response.ok) return;

        const data = (await response.json()) as LiveSpotResponse;
        if (!data.items?.length || cancelled) return;

        const stored = readBaseline();
        const baselineValues =
          stored && stored.date === todayKey() ? stored.values : null;

        if (!baselineValues) {
          writeBaseline(
            Object.fromEntries(data.items.map((item) => [item.id, item.value])),
          );
        }

        setItems(withChange(data.items, baselineValues ?? Object.fromEntries(
          data.items.map((item) => [item.id, item.value]),
        )));
        setUpdatedAt(data.updatedAt);
      } catch {
        // Keep last known / fallback values on network errors.
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

  const track = [...items, ...items, ...items];

  return (
    <div
      className="live-spot"
      aria-label="Live spot prices"
      title={
        updatedAt
          ? `Live rates updated ${new Date(updatedAt).toLocaleString()}`
          : 'Fetching live rates…'
      }
    >
      <span className="live-spot__label">LIVE SPOT :</span>
      <div className="live-spot__viewport">
        <div className="live-spot__track">
          {track.map((item, index) => (
            <SpotItem key={`${item.id}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
