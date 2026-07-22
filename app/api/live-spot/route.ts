import { NextResponse } from 'next/server';

const TROY_OZ_TO_GRAMS = 31.1034768;

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
    const goldKiloInr = goldPerGramInr * 1000;

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

    return NextResponse.json(
      {
        updatedAt: gold.updatedAt ?? new Date().toISOString(),
        usdInr,
        source: {
          goldUsdOz: gold.price,
          silverUsdOz: silver.price,
        },
        items,
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
