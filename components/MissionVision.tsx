type PurposeItem = {
  title: string;
  text: string;
  icon: 'mission' | 'vision';
};

const items: PurposeItem[] = [
  {
    title: 'Our Mission',
    text: 'Every transaction at Dipanjali is executed under strict AML-CFT compliance frameworks and zero-premium institutional spreads, eliminating intermediary friction.',
    icon: 'mission',
  },
  {
    title: 'Our Vision',
    text: 'Our trading desk is led by market veterans with over two decades of experience on institutional bullion desks across Mumbai, Dubai, and global financial centres.',
    icon: 'vision',
  },
];

function PurposeIcon({ type }: { type: PurposeItem['icon'] }) {
  return (
    <span className="purpose__icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'mission' ? (
          <g
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 32V20l10-6 10 6v12" />
            <path d="M18 32v-8h2.5v8M22.75 32v-8h2.5v8M27.5 32v-8H30v8" />
            <path d="M13 32h22" />
            <path d="M20 16.5l4-2.5 4 2.5" />
          </g>
        ) : (
          <g
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 33c1.8-4.5 4.2-7.2 8.2-7.5 2.2 2.8 4.5 4.2 7.3 4.2" />
            <path d="M17.5 34.5c1.8 2.4 3.8 3.5 6.2 3.5s4.4-1.1 6.2-3.5" />
            <path d="M22 28.5c.6-2.2 1.4-3.6 2.8-4.4" />
            <path
              d="M24 11.5l1.05 2.15 2.35.3-1.75 1.65.45 2.35L24 16.7l-2.1 1.25.45-2.35-1.75-1.65 2.35-.3z"
              fill="currentColor"
              stroke="none"
            />
            <path
              d="M17.2 14.2l.75 1.55 1.7.22-1.25 1.2.32 1.68-1.52-.85-1.52.85.32-1.68-1.25-1.2 1.7-.22z"
              fill="currentColor"
              stroke="none"
            />
            <path
              d="M30.8 14.2l.75 1.55 1.7.22-1.25 1.2.32 1.68-1.52-.85-1.52.85.32-1.68-1.25-1.2 1.7-.22z"
              fill="currentColor"
              stroke="none"
            />
            <path
              d="M27.8 19.2l.55 1.15 1.25.16-.95.9.25 1.25-1.1-.6-1.1.6.25-1.25-.95-.9 1.25-.16z"
              fill="currentColor"
              stroke="none"
            />
          </g>
        )}
      </svg>
    </span>
  );
}

export default function MissionVision() {
  return (
    <section className="purpose" aria-labelledby="purpose-heading">
      <div className="purpose__intro">
        <p className="purpose__label">Our Purpose</p>
        <span className="purpose__rule" aria-hidden="true" />
        <h2 className="purpose__heading" id="purpose-heading">
          Mission &amp; Vision
        </h2>
      </div>

      <div className="purpose__body">
        <div className="purpose__inner">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={
                index === 0
                  ? 'purpose__col purpose__col--mission'
                  : 'purpose__col purpose__col--vision'
              }
            >
              <PurposeIcon type={item.icon} />
              <h3 className="purpose__title">{item.title}</h3>
              <p className="purpose__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
