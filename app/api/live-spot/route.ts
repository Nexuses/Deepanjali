import { NextResponse } from 'next/server';

const TROY_OZ_TO_GRAMS = 31.1034768;
const TOLA_GRAMS = 11.66;
/** Half-spread applied each side of mid (~6 bps total) */
const HALF_SPREAD = 0.0004;

type MetalQuote = {
  price: number;
  updatedAt?: string;
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'DipanjaliGoldTrading/1.0',
    },
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

function formatInr(value: number, digits = 0) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function formatBoardPrice(value: number, digits = 0) {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function bidAsk(mid: number, digits = 0) {
  const bid = mid * (1 - HALF_SPREAD);
  const ask = mid * (1 + HALF_SPREAD);
  return {
    bid: formatBoardPrice(bid, digits),
    ask: formatBoardPrice(ask, digits),
    bidValue: bid,
    askValue: ask,
  };
}

export async function GET() {
  try {
    const [gold, silver, fx] = await Promise.all([
      fetchJson<MetalQuote>('https://api.gold-api.com/price/XAU'),
      fetchJson<MetalQuote>('https://api.gold-api.com/price/XAG'),
      fetchJson<{ rates: { INR: number }; date: string }>(
        'https://api.frankfurter.app/latest?from=USD&to=INR',
      ),
    ]);

    const usdInr = fx.rates.INR;
    const goldPerGramInr = (gold.price / TROY_OZ_TO_GRAMS) * usdInr;
    const silverPerGramInr = (silver.price / TROY_OZ_TO_GRAMS) * usdInr;
    const gold22kPerGramInr = goldPerGramInr * (916 / 999.9);
    const gold18kPerGramInr = goldPerGramInr * (750 / 999.9);
    const goldKiloInr = goldPerGramInr * 1000;
    const goldTolaInr = goldPerGramInr * TOLA_GRAMS;

    const items = [
      {
        id: 'gold-24k',
        name: 'Gold 999.9 (24K)',
        price: `${formatInr(goldPerGramInr, 0)} /g`,
        value: goldPerGramInr,
      },
      {
        id: 'gold-22k',
        name: 'Gold 916 (22K)',
        price: `${formatInr(gold22kPerGramInr, 0)} /g`,
        value: gold22kPerGramInr,
      },
      {
        id: 'gold-kilo',
        name: 'Gold Kilo Bar',
        price: formatInr(goldKiloInr, 0),
        value: goldKiloInr,
      },
      {
        id: 'silver-999',
        name: 'Silver 999',
        price: `${formatInr(silverPerGramInr, 2)} /g`,
        value: silverPerGramInr,
      },
    ];

    const board = [
      {
        id: 'board-gold-24k',
        metal: 'Gold 999.9 - 24K',
        detail: 'Per Gram - Kilo Bar',
        ...bidAsk(goldPerGramInr, 0),
      },
      {
        id: 'board-gold-22k',
        metal: 'Gold 916 - 22K',
        detail: 'Scrap Basis - Per Gram',
        ...bidAsk(gold22kPerGramInr, 0),
      },
      {
        id: 'board-gold-18k',
        metal: 'Gold 750 - 18K',
        detail: 'Scrap Basis - Per Gram',
        ...bidAsk(gold18kPerGramInr, 0),
      },
      {
        id: 'board-silver-999',
        metal: 'Silver 999 Fine',
        detail: 'Per Gram - Kilo Bar',
        ...bidAsk(silverPerGramInr, 2),
      },
      {
        id: 'board-gold-tola',
        metal: 'Gold Tola Bar - 999.9',
        detail: 'Per Tola - 11.66g',
        ...bidAsk(goldTolaInr, 0),
      },
    ];

    return NextResponse.json(
      {
        updatedAt: gold.updatedAt ?? new Date().toISOString(),
        usdInr,
        source: {
          goldUsdOz: gold.price,
          silverUsdOz: silver.price,
        },
        items,
        board,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
        },
      },
    );
  } catch (error) {
    console.error('live-spot error', error);
    return NextResponse.json(
      { error: 'Unable to fetch live spot prices' },
      { status: 502 },
    );
  }
}
