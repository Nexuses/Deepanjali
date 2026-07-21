'use client';

import React from 'react';

function IconPhone() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.7.6 3.9.1.4 0 .8-.3 1.1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v12H4V6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.5 3.5A10.5 10.5 0 0 0 3.5 20.5L2 22l1.5-3.3A10.5 10.5 0 0 0 20.5 3.5z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M20.5 3.5A10.5 10.5 0 0 0 3.5 20.5L2 22l1.5-3.3A10.5 10.5 0 0 0 20.5 3.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 7.6c.3-.7 1.2-.7 1.6-.2l1 1c.4.4.4 1 0 1.4l-.5.5c.9 1.7 2.2 3 3.9 3.9l.5-.5c.4-.4 1-.4 1.4 0l1 1c.5.4.5 1.3-.2 1.6-.8.4-1.7.5-2.5.2-4.4-1.3-7.9-4.8-9.2-9.2-.3-.8-.2-1.7.2-2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 10.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z"
        fill="currentColor"
      />
    </svg>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="contactform__field">
      <span className="contactform__label">{label}</span>
      {children}
    </label>
  );
}

export default function ContactInquirySection() {
  return (
    <section className="contactdetails" aria-label="Send an inquiry">
      <div className="contactdetails__inner">
        <div className="contactdetails__grid">
          <aside className="contactdetails__leftcard" aria-label="Trading desk">
            <div className="contactdetails__block">
              <p className="contactdetails__overline">TRADING DESK</p>
              <h3 className="contactdetails__heading contactdetails__heading--gold">
                Direct Desk Access
              </h3>
              <p className="contactdetails__p">
                For live spot rate confirmations, large volume trades, and
                immediate execution requirements.
              </p>

              <div className="contactdetails__contactrows">
                <div className="contactdetails__row">
                  <span className="contactdetails__icon" aria-hidden="true">
                    <IconPhone />
                  </span>
                  <a
                    className="contactdetails__link"
                    href="tel:+971569901766"
                  >
                    +971 56 990 1766
                  </a>
                </div>
                <div className="contactdetails__row">
                  <span className="contactdetails__icon" aria-hidden="true">
                    <IconMail />
                  </span>
                  <a
                    className="contactdetails__link"
                    href="mailto:info@dipanjaligold.com"
                  >
                    info@dipanjaligold.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contactdetails__divider" aria-hidden="true" />

            <div className="contactdetails__block">
              <p className="contactdetails__overline">INSTANT VERIFICATION</p>
              <h3 className="contactdetails__heading contactdetails__heading--gold">
                WhatsApp Business Desk
              </h3>
              <p className="contactdetails__p">
                Instantaneous spot rate confirmations, document submissions,
                and KYC packet exchanges via our dedicated WhatsApp Business
                API endpoint.
              </p>

              <a
                className="contactdetails__waBtn"
                href="https://wa.me/971569901766"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contactdetails__waIcon" aria-hidden="true">
                  <IconWhatsapp />
                </span>
                MESSAGE ON WHATSAPP
              </a>
            </div>

            <div className="contactdetails__divider" aria-hidden="true" />

            <div className="contactdetails__block">
              <p className="contactdetails__overline">
                CORPORATE HEADQUARTERS
              </p>
              <h3 className="contactdetails__heading contactdetails__heading--gold">
                Visit Our Office
              </h3>
              <p className="contactdetails__p">
                Secure transit drop-off and parking available. Appointments
                preferred for in-person meetings.
              </p>

              <a
                className="contactdetails__mapBtn"
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contactdetails__mapIcon" aria-hidden="true">
                  <IconPin />
                </span>
                VIEW ON MAP
              </a>
            </div>

            <div className="contactdetails__divider" aria-hidden="true" />

            <div className="contactdetails__block">
              <p className="contactdetails__overline">TRADING HOURS</p>
              <h3 className="contactdetails__heading contactdetails__heading--gold">
                Desk Availability
              </h3>

              <div className="contactdetails__hours" role="table">
                <div className="contactdetails__hourRow" role="row">
                  <span className="contactdetails__hourDay" role="cell">
                    Monday – Friday
                  </span>
                  <span className="contactdetails__hourTime" role="cell">
                    24 Hours
                  </span>
                </div>
                <div className="contactdetails__hourRow" role="row">
                  <span className="contactdetails__hourDay" role="cell">
                    Saturday
                  </span>
                  <span className="contactdetails__hourTime" role="cell">
                    9:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="contactdetails__hourRow" role="row">
                  <span className="contactdetails__hourDay" role="cell">
                    Sunday
                  </span>
                  <span className="contactdetails__hourTime" role="cell">
                    By Appointment
                  </span>
                </div>
                <div className="contactdetails__hourRow" role="row">
                  <span className="contactdetails__hourDay" role="cell">
                    Public Holidays
                  </span>
                  <span className="contactdetails__hourTime" role="cell">
                    Emergency Desk Available
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <div className="contactdetails__rightcard" aria-label="Inquiry form">
            <h2 className="contactform__title">Send an Inquiry</h2>
            <p className="contactform__intro">
              For trading inquiries, institutional onboarding, assay submissions,
              and vaulting requests.
            </p>

            <form
              className="contactform"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="contactform__fields">
                <Field label="NAME">
                  <input className="contactform__input" type="text" />
                </Field>

                <Field label="CORPORATE EMAIL">
                  <input
                    className="contactform__input"
                    type="email"
                    inputMode="email"
                  />
                </Field>

                <Field label="PHONE NO.">
                  <input
                    className="contactform__input"
                    type="tel"
                    inputMode="tel"
                  />
                </Field>

                <Field label="SUBJECT OF INQUIRY">
                  <input className="contactform__input" type="text" />
                </Field>

                <Field label="DETAILED MESSAGE">
                  <textarea className="contactform__textarea" rows={5} />
                </Field>
              </div>

              <div className="contactform__sla">
                <span className="contactform__slaTitle">24-Hour Response SLA.</span>{' '}
                All inbound inquiries submitted through our secure channel
                are assigned tracking protocols and addressed by a
                licensed desk professional within 24 business hours.
              </div>

              <button className="contactform__submit" type="submit">
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

