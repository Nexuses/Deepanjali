'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { CONTACT } from '@/lib/contact';

const DESK_PHONE = CONTACT.phoneDisplay;
const DESK_PHONE_TEL = CONTACT.phoneTel;
const DESK_EMAIL = CONTACT.email;
const WHATSAPP_HREF = CONTACT.whatsappHref;

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
              <p className="contactdetails__overline contactdetails__overline--gold">
                TRADING DESK
              </p>
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
                    <Phone size={16} strokeWidth={1.75} />
                  </span>
                  <a
                    className="contactdetails__link"
                    href={`tel:${DESK_PHONE_TEL}`}
                  >
                    {DESK_PHONE}
                  </a>
                </div>
                <div className="contactdetails__row">
                  <span className="contactdetails__icon" aria-hidden="true">
                    <Mail size={16} strokeWidth={1.75} />
                  </span>
                  <a
                    className="contactdetails__link"
                    href={`mailto:${DESK_EMAIL}`}
                  >
                    {DESK_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="contactdetails__divider" aria-hidden="true" />

            <div className="contactdetails__block">
              <p className="contactdetails__overline contactdetails__overline--dark">
                INSTANT VERIFICATION
              </p>
              <h3 className="contactdetails__heading contactdetails__heading--dark">
                WhatsApp Business Desk
              </h3>
              <p className="contactdetails__p">
                Instantaneous spot rate confirmations, document submissions,
                and KYC packet exchanges via our dedicated WhatsApp Business
                API endpoint.
              </p>

              <a
                className="contactdetails__waBtn"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contactdetails__waIcon" aria-hidden="true">
                  <FaWhatsapp size={18} />
                </span>
                MESSAGE ON WHATSAPP
              </a>
            </div>

            <div className="contactdetails__divider" aria-hidden="true" />

            <div className="contactdetails__block">
              <p className="contactdetails__overline contactdetails__overline--dark">
                TRADING HOURS
              </p>
              <h3 className="contactdetails__heading contactdetails__heading--dark">
                Desk Availability
              </h3>

              <div className="contactdetails__hours" role="table">
                <div className="contactdetails__hourRow" role="row">
                  <span className="contactdetails__hourDay" role="cell">
                    Monday - Friday
                  </span>
                  <span className="contactdetails__hourLead" aria-hidden="true" />
                  <span className="contactdetails__hourTime" role="cell">
                    24 Hours
                  </span>
                </div>
                <div className="contactdetails__hourRow" role="row">
                  <span className="contactdetails__hourDay" role="cell">
                    Saturday
                  </span>
                  <span className="contactdetails__hourLead" aria-hidden="true" />
                  <span className="contactdetails__hourTime" role="cell">
                    9:00 AM - 4:00 PM
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <div className="contactdetails__rightcard" aria-label="Inquiry form">
            <h2 className="contactform__title">Send an Inquiry</h2>
            <p className="contactform__intro">
              For trading inquiries, institutional onboarding, assay
              submissions, and vaulting requests.
            </p>

            <form
              className="contactform"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="contactform__fields">
                <Field label="NAME">
                  <input className="contactform__input" type="text" name="name" />
                </Field>

                <Field label="CORPORATE EMAIL">
                  <input
                    className="contactform__input"
                    type="email"
                    name="email"
                    inputMode="email"
                  />
                </Field>

                <Field label="PHONE NO.">
                  <input
                    className="contactform__input"
                    type="tel"
                    name="phone"
                    inputMode="tel"
                  />
                </Field>

                <Field label="SUBJECT OF INQUIRY">
                  <input
                    className="contactform__input"
                    type="text"
                    name="subject"
                  />
                </Field>

                <Field label="DETAILED MESSAGE">
                  <textarea
                    className="contactform__textarea"
                    name="message"
                    rows={5}
                  />
                </Field>
              </div>

              <p className="contactform__sla">
                <strong className="contactform__slaTitle">
                  24-Hour Response SLA.
                </strong>{' '}
                All inbound inquiries submitted through our secure channel are
                assigned tracking protocols and addressed by a licensed desk
                professional within 24 business hours.
              </p>

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
