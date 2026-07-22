'use client';

import { FormEvent, type ReactNode } from 'react';
import {
  Clock,
  Coins,
  Factory,
  FileCheck,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const services = [
  {
    label: 'Corporate Treasury Hedging',
    tone: 'dark' as const,
    icon: 'hedging' as const,
  },
  {
    label: 'Wholesale Manufacturing Procurement',
    tone: 'gold' as const,
    icon: 'procurement' as const,
  },
  {
    label: 'High-Volume Refinery Contracts',
    tone: 'dark' as const,
    icon: 'refinery' as const,
  },
  {
    label: 'Private Wealth & Allocation Strategy',
    tone: 'gold' as const,
    icon: 'wealth' as const,
  },
];

type ServiceIconType = (typeof services)[number]['icon'];

const serviceIcons: Record<ServiceIconType, LucideIcon> = {
  hedging: TrendingUp,
  procurement: FileCheck,
  refinery: Factory,
  wealth: Coins,
};

function ServiceIcon({ type }: { type: ServiceIconType }) {
  const Icon = serviceIcons[type];
  return (
    <Icon className="private-advisory__service-icon" aria-hidden="true" />
  );
}

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
    <label className="private-advisory__field" htmlFor={htmlFor}>
      <span className="private-advisory__label">{label}</span>
      {children}
    </label>
  );
}

export default function PrivateAdvisorySection() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      className="private-advisory"
      aria-labelledby="private-advisory-heading"
    >
      <div className="private-advisory__grid">
        <div className="private-advisory__info">
          <p className="private-advisory__eyebrow">PRIVATE ADVISORY</p>
          <span className="private-advisory__rule" aria-hidden="true" />

          <h2
            className="private-advisory__title"
            id="private-advisory-heading"
          >
            <span className="private-advisory__title-line">Arrange a</span>
            <span className="private-advisory__title-accent">
              Private Advisory Session.
            </span>
          </h2>

          <div className="private-advisory__copy">
            <p>
              For corporate treasury hedging, regular wholesale manufacturing
              raw material procurement, or high-volume refinery contracts -
              schedule a private session with our senior desk strategists.
            </p>
            <p>
              We formulate custom liquidity structures, forward pricing options,
              and high-yield refining schedules optimized for your corporate
              financial parameters. Not a generic consultation - a structured
              commercial arrangement.
            </p>
          </div>

          <ul className="private-advisory__services">
            {services.map((service) => (
              <li
                key={service.label}
                className={`private-advisory__service private-advisory__service--${service.tone}`}
              >
                <ServiceIcon type={service.icon} />
                <span>{service.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="private-advisory__form-panel">
          <h3 className="private-advisory__form-title">Book Your Session</h3>
          <p className="private-advisory__form-lede">
            Complete the form below. A senior strategist will confirm your
            appointment within 24 hours.
          </p>

          <form className="private-advisory__form" onSubmit={onSubmit}>
            <div className="private-advisory__row">
              <Field label="Full Legal Name" htmlFor="adv-name">
                <input
                  id="adv-name"
                  name="fullLegalName"
                  type="text"
                  placeholder="As per government ID"
                  autoComplete="name"
                />
              </Field>
              <Field label="Corporate Title" htmlFor="adv-title">
                <input
                  id="adv-title"
                  name="corporateTitle"
                  type="text"
                  placeholder="e.g. Treasury Head / Director"
                />
              </Field>
            </div>

            <Field
              label="Registered Entity / Company Name"
              htmlFor="adv-entity"
            >
              <input
                id="adv-entity"
                name="entityName"
                type="text"
                placeholder="Legal registered name"
                autoComplete="organization"
              />
            </Field>

            <Field label="Primary Field of Operation" htmlFor="adv-field">
              <select id="adv-field" name="fieldOfOperation" defaultValue="">
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

            <div className="private-advisory__row">
              <Field label="Projected Monthly Volume" htmlFor="adv-volume">
                <select id="adv-volume" name="monthlyVolume" defaultValue="">
                  <option value="" disabled>
                    Select volume
                  </option>
                  <option value="under-1cr">Under ₹1 Cr</option>
                  <option value="1-5cr">₹1 Cr - ₹5 Cr</option>
                  <option value="5-25cr">₹5 Cr - ₹25 Cr</option>
                  <option value="25cr-plus">₹25 Cr+</option>
                </select>
              </Field>
              <Field label="Primary Service Interest" htmlFor="adv-service">
                <select id="adv-service" name="serviceInterest" defaultValue="">
                  <option value="" disabled>
                    Select service
                  </option>
                  <option value="hedging">Corporate Treasury Hedging</option>
                  <option value="procurement">
                    Wholesale Manufacturing Procurement
                  </option>
                  <option value="refinery">High-Volume Refinery Contracts</option>
                  <option value="wealth">
                    Private Wealth &amp; Allocation Strategy
                  </option>
                </select>
              </Field>
            </div>

            <div className="private-advisory__row">
              <Field label="Preferred Date" htmlFor="adv-date">
                <input id="adv-date" name="preferredDate" type="date" />
              </Field>
              <Field label="Preferred Time" htmlFor="adv-time">
                <select id="adv-time" name="preferredTime" defaultValue="">
                  <option value="" disabled>
                    Select time
                  </option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
              </Field>
            </div>

            <div className="private-advisory__row">
              <Field label="Corporate Email" htmlFor="adv-email">
                <input
                  id="adv-email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone Number" htmlFor="adv-phone">
                <input
                  id="adv-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  autoComplete="tel"
                />
              </Field>
            </div>

            <div className="private-advisory__note">
              <Clock className="private-advisory__note-icon" aria-hidden="true" />
              <p>
                <strong>Confirmation within 24 hours:</strong> A senior desk
                strategist will confirm your session time and send a
                pre-consultation briefing document ahead of your appointment.
              </p>
            </div>

            <button className="private-advisory__submit" type="submit">
              Book Advisory Session →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
