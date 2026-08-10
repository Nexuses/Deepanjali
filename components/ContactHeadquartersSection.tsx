import { MapPin } from 'lucide-react';
import { CONTACT, CONTACT_MAP_EMBED } from '@/lib/contact';

export default function ContactHeadquartersSection() {
  return (
    <section className="contact-hq" aria-label="Corporate headquarters">
      <div className="contact-hq__header">
        <div className="contact-hq__inner">
          <MapPin
            className="contact-hq__pin"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <h2 className="contact-hq__title">Corporate Headquarters</h2>
          <p className="contact-hq__subtitle">
            {CONTACT.addressLines.map((line) => (
              <span key={line} className="contact-hq__addressLine">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="contact-hq__mapArea">
        <div className="contact-hq__mapFrame">
          <iframe
            className="contact-hq__map"
            src={CONTACT_MAP_EMBED}
            title="Dipanjali Gold Trading - Deira Gold Souq, Dubai"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
