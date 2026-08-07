import { MapPin } from 'lucide-react';

/** Pin: coastal point just north of Daman / south of Valsad */
const HQ_LAT = 20.42;
const HQ_LNG = 72.84;

/** Regional zoom matching the design screenshot */
const MAP_ZOOM = 8;

const mapEmbedSrc = `https://maps.google.com/maps?q=${HQ_LAT},${HQ_LNG}&z=${MAP_ZOOM}&hl=en&output=embed`;

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
            Interactive map will be embedded once address is confirmed
          </p>
        </div>
      </div>

      <div className="contact-hq__mapArea">
        <div className="contact-hq__mapFrame">
          <iframe
            className="contact-hq__map"
            src={mapEmbedSrc}
            title="Corporate headquarters location near Daman and Valsad"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
