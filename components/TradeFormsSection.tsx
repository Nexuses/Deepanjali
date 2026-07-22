'use client';

import { FormEvent, type ReactNode } from 'react';
import { Clock } from 'lucide-react';

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label className="trade-forms__field" htmlFor={htmlFor}>
      <span className="trade-forms__label">{label}</span>
      {children}
    </label>
  );
}

export default function TradeFormsSection() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="trade-forms" aria-label="Corporate account and trade request">
      <div className="trade-forms__grid">
        <div className="trade-forms__panel trade-forms__panel--dark">
          <p className="trade-forms__eyebrow">CORPORATE ACCOUNT</p>
          <h2 className="trade-forms__title">
            Initiate Corporate Account Onboarding
          </h2>
          <p className="trade-forms__lede">
            For institutional investors, jewellery manufacturers, corporate
            treasuries, and wholesale traders requiring an ongoing counterparty
            relationship.
          </p>
          <span className="trade-forms__rule" aria-hidden="true" />

          <form className="trade-forms__form" onSubmit={onSubmit}>
            <div className="trade-forms__row">
              <Field label="Full Legal Name" htmlFor="corp-name">
                <input
                  id="corp-name"
                  name="fullLegalName"
                  type="text"
                  placeholder="As per government ID"
                  autoComplete="name"
                />
              </Field>
              <Field label="Corporate Title" htmlFor="corp-title">
                <input
                  id="corp-title"
                  name="corporateTitle"
                  type="text"
                  placeholder="e.g. Treasury Head / Director"
                />
              </Field>
            </div>

            <Field label="Registered Entity / Company Name" htmlFor="corp-entity">
              <input
                id="corp-entity"
                name="entityName"
                type="text"
                placeholder="Legal registered name"
                autoComplete="organization"
              />
            </Field>

            <div className="trade-forms__row">
              <Field label="Corporate Email" htmlFor="corp-email">
                <input
                  id="corp-email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone Number" htmlFor="corp-phone">
                <input
                  id="corp-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  autoComplete="tel"
                />
              </Field>
            </div>

            <Field label="Primary Field of Operation" htmlFor="corp-field">
              <select id="corp-field" name="fieldOfOperation" defaultValue="">
                <option value="" disabled>
                  Select your industry
                </option>
                <option value="jewellery">Jewellery Manufacturing</option>
                <option value="treasury">Corporate Treasury</option>
                <option value="wholesale">Wholesale Trading</option>
                <option value="wealth">Private Wealth / Family Office</option>
                <option value="institutional">Institutional Investor</option>
              </select>
            </Field>

            <Field
              label="Projected Monthly Trading Volume"
              htmlFor="corp-volume"
            >
              <select id="corp-volume" name="monthlyVolume" defaultValue="">
                <option value="" disabled>
                  Select expected volume
                </option>
                <option value="under-1cr">Under ₹1 Cr</option>
                <option value="1-5cr">₹1 Cr - ₹5 Cr</option>
                <option value="5-25cr">₹5 Cr - ₹25 Cr</option>
                <option value="25cr-plus">₹25 Cr+</option>
              </select>
            </Field>

            <Field label="Primary Service Interest" htmlFor="corp-service">
              <select id="corp-service" name="serviceInterest" defaultValue="">
                <option value="" disabled>
                  Select primary service
                </option>
                <option value="bullion">Wholesale Bullion</option>
                <option value="assaying">Assaying &amp; Refining</option>
                <option value="vaulting">Allocated Vaulting</option>
                <option value="desk">Institutional Trading Desk</option>
              </select>
            </Field>

            <div className="trade-forms__note">
              <Clock className="trade-forms__note-icon" aria-hidden="true" />
              <p>
                <strong>24-Hour KYC Review:</strong> All corporate onboarding
                applications are reviewed by a licensed compliance officer
                within 24 business hours. You will be assigned a named dealer
                upon approval.
              </p>
            </div>

            <button className="trade-forms__submit trade-forms__submit--gold" type="submit">
              Submit Onboarding Application →
            </button>
          </form>
        </div>

        <div className="trade-forms__panel trade-forms__panel--light">
          <p className="trade-forms__eyebrow">TRADE REQUEST</p>
          <h2 className="trade-forms__title">
            Submit High-Volume Trade Request
          </h2>
          <p className="trade-forms__lede">
            For institutional investors, jewellery manufacturers, corporate
            treasuries, and wholesale traders requiring an ongoing counterparty
            relationship.
          </p>
          <span className="trade-forms__rule" aria-hidden="true" />

          <form className="trade-forms__form" onSubmit={onSubmit}>
            <div className="trade-forms__row">
              <Field label="Full Name" htmlFor="trade-name">
                <input
                  id="trade-name"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </Field>
              <Field label="Account / Entity Name" htmlFor="trade-entity">
                <input
                  id="trade-entity"
                  name="accountName"
                  type="text"
                  placeholder="Registered account name"
                  autoComplete="organization"
                />
              </Field>
            </div>

            <Field label="Metal & Specification" htmlFor="trade-metal">
              <input
                id="trade-metal"
                name="metal"
                type="text"
                placeholder="e.g. Gold 999.9 - 24K Kilo Bar"
              />
            </Field>

            <div className="trade-forms__row">
              <Field label="Quantity / Weight" htmlFor="trade-qty">
                <input
                  id="trade-qty"
                  name="quantity"
                  type="text"
                  placeholder="e.g. 5 kg / 500 tola"
                />
              </Field>
              <Field label="Transaction Type" htmlFor="trade-type">
                <select id="trade-type" name="transactionType" defaultValue="">
                  <option value="" disabled>
                    Buy / Sell
                  </option>
                  <option value="buy">Buy</option>
                  <option value="sell">Sell</option>
                </select>
              </Field>
            </div>

            <Field
              label="Preferred Settlement Method"
              htmlFor="trade-settlement"
            >
              <select id="trade-settlement" name="settlement" defaultValue="">
                <option value="" disabled>
                  Select settlement method
                </option>
                <option value="showroom">Showroom Collection</option>
                <option value="armoured">Insured Armoured Delivery</option>
                <option value="vault">Allocated Vault Transfer</option>
              </select>
            </Field>

            <Field label="Additional Notes" htmlFor="trade-notes">
              <textarea
                id="trade-notes"
                name="notes"
                rows={4}
                placeholder="Any special instructions or timing preferences"
              />
            </Field>

            <div className="trade-forms__note">
              <Clock className="trade-forms__note-icon" aria-hidden="true" />
              <p>
                <strong>Immediate Desk Response:</strong> Trade requests from
                verified accounts are routed directly to your assigned dealer.
                Rate confirmation within 15 minutes during trading hours.
              </p>
            </div>

            <button className="trade-forms__submit trade-forms__submit--dark" type="submit">
              Submit Trade Request →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
