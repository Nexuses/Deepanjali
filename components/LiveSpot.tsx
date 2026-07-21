type SpotItemData = {
  name: string;
  price: string;
  change: number;
};

const spotItems: SpotItemData[] = [
  { name: 'Gold 999.9 (24K)', price: '₹7,842 /g', change: 0.42 },
  { name: 'Gold 916 (22K)', price: '₹7,179 /g', change: 0.38 },
  { name: 'Gold Kilo Bar', price: '₹78,42,000', change: 0.42 },
  { name: 'Silver 999', price: '₹96.40 /g', change: -0.12 },
];

function SpotItem({ name, price, change }: SpotItemData) {
  const isUp = change >= 0;

  return (
    <span className="live-spot__item">
      <span className="live-spot__name">{name}</span>
      <span className="live-spot__price">{price}</span>
      <span
        className={
          isUp ? 'live-spot__change live-spot__change--up' : 'live-spot__change live-spot__change--down'
        }
      >
        <span aria-hidden="true">{isUp ? '▲' : '▼'}</span>
        {Math.abs(change).toFixed(2)}%
      </span>
    </span>
  );
}

export default function LiveSpot() {
  const track = [...spotItems, ...spotItems];

  return (
    <div className="live-spot" aria-label="Live spot prices">
      <span className="live-spot__label">Live Spot :</span>
      <div className="live-spot__viewport">
        <div className="live-spot__track">
          {track.map((item, index) => (
            <SpotItem key={`${item.name}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
