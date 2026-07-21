import Image from 'next/image';

function HqPinIcon() {
  return (
    <svg
      className="contact-hq__pin"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="36"
        cy="36"
        r="33"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M36 52c5.5-6.2 12-13.1 12-21.2a12 12 0 1 0-24 0c0 8.1 6.5 15 12 21.2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="30.8" r="3.6" fill="currentColor" />
    </svg>
  );
}

export default function ContactHeadquartersSection() {
  return (
    <section className="contact-hq" aria-label="Corporate headquarters">
      <div className="contact-hq__header">
        <div className="contact-hq__pattern" aria-hidden="true" />
        <div className="contact-hq__headerInner">
          <HqPinIcon />
          <h2 className="contact-hq__title">Corporate Headquarters</h2>
          <p className="contact-hq__subtitle">
            Interactive map will be embedded once address is confirmed
          </p>
        </div>
      </div>

      <div className="contact-hq__mapArea">
        <div className="contact-hq__mapInner">
          <Image
            className="contact-hq__map"
            src="/images/contact-headquarters-map.png"
            alt="Map placeholder showing western India until headquarters address is confirmed"
            width={899}
            height={368}
            sizes="(max-width: 900px) 100vw, min(76rem, 94vw)"
          />
        </div>
      </div>
    </section>
  );
}
