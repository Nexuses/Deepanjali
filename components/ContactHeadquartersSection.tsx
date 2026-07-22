import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function ContactHeadquartersSection() {
  return (
    <section className="contact-hq" aria-label="Corporate headquarters">
      <div className="contact-hq__header">
        <div className="contact-hq__headerInner">
          <MapPin className="contact-hq__pin" aria-hidden="true" />
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
            src="https://nexuses.s3.us-east-2.amazonaws.com/image_48_1784710438350_robp.png"
            alt="Corporate headquarters location map"
            width={1200}
            height={520}
            sizes="(max-width: 900px) 100vw, min(76rem, 94vw)"
          />
        </div>
      </div>
    </section>
  );
}
