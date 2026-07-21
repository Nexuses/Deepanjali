import Image from 'next/image';

const LOGO_SRC =
  'https://nexuses.s3.us-east-2.amazonaws.com/Group_9__1__1784610916350_h8av.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
];

const serviceLinks = [
  { label: 'Bullion Trading', href: '/services' },
  { label: 'Assaying Services', href: '/services' },
  { label: 'Gold Refinement', href: '/services' },
  { label: 'Market Analysis', href: '/services' },
];

const policyLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Use', href: '#terms' },
  { label: 'AML Policy', href: '#aml' },
];

type SocialType = 'instagram' | 'linkedin' | 'facebook';

function SocialIcon({ type }: { type: SocialType }) {
  return (
    <a
      className="footer__social"
      href={`#${type}`}
      aria-label={type}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.2" />
        {type === 'instagram' && (
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <rect x="8" y="8" width="8" height="8" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="15.2" cy="8.8" r="0.6" fill="currentColor" stroke="none" />
          </g>
        )}
        {type === 'linkedin' && (
          <g fill="currentColor" stroke="none">
            <rect x="8" y="10.5" width="1.8" height="5.5" />
            <circle cx="8.9" cy="8.4" r="1" />
            <path d="M12 16V12.2c0-1.2.8-2 1.9-2 1.1 0 1.6.7 1.6 2V16h1.8v-4.2c0-2.3-1.2-3.4-2.9-3.4-1.3 0-2 .7-2.3 1.2h-.1V10.5H12z" />
          </g>
        )}
        {type === 'facebook' && (
          <path
            d="M13.2 17v-4.2h1.4l.2-1.7h-1.6V9.9c0-.5.2-.9.9-.9h.8V7.1c-.1 0-.6-.1-1.2-.1-1.2 0-2 .7-2 2v1.1H10.4v1.7h1.3V17h1.5z"
            fill="currentColor"
            stroke="none"
          />
        )}
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__top">
          <a className="footer__brand" href="#home" aria-label="Home">
            <Image
              className="footer__logo"
              src={LOGO_SRC}
              alt="Dipanjali Gold Trading"
              width={274}
              height={213}
              priority={false}
            />
          </a>

          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.label} className="footer__nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__col">
            <h3 className="footer__heading">Services</h3>
            <ul className="footer__list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Contact</h3>
            <address className="footer__address">
              Office No. 9, 2nd Floor,
              <br />
              Al Shamsi Building, Opp. Hind
              <br />
              Plaza 8, Deira Gold Souq, Dubai
            </address>
            <a className="footer__contact-link" href="mailto:info@dipanjaligold.com">
              info@dipanjaligold.com
            </a>
            <a className="footer__contact-link" href="tel:+971569901766">
              +971 56 990 1766
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2024 Dipanjali Gold Trading. All rights reserved.
          </p>

          <div className="footer__socials">
            <SocialIcon type="instagram" />
            <SocialIcon type="linkedin" />
            <SocialIcon type="facebook" />
          </div>

          <nav className="footer__policies" aria-label="Legal">
            {policyLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
