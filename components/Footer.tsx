import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { CONTACT } from '@/lib/contact';

const LOGO_SRC =
  'https://nexuses.s3.us-east-2.amazonaws.com/Group_9__1__1784610916350_h8av.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Bullion Trading', href: '/services' },
  { label: 'Market Analysis', href: '/services' },
];

const policyLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Use', href: '#terms' },
  { label: 'AML Policy', href: '#aml' },
];

const socialLinks: {
  type: 'instagram' | 'linkedin' | 'facebook';
  label: string;
  href: string;
  Icon: IconType;
}[] = [
  {
    type: 'instagram',
    label: 'Instagram',
    href: '#instagram',
    Icon: FaInstagram,
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    href: '#linkedin',
    Icon: FaLinkedinIn,
  },
  {
    type: 'facebook',
    label: 'Facebook',
    href: '#facebook',
    Icon: FaFacebookF,
  },
];

function SocialIcon({
  label,
  href,
  Icon,
}: {
  label: string;
  href: string;
  Icon: IconType;
}) {
  return (
    <a className="footer__social" href={href} aria-label={label}>
      <Icon aria-hidden="true" />
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
              {CONTACT.addressLines.map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </address>
            <a className="footer__contact-link" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            <a className="footer__contact-link" href={`tel:${CONTACT.phoneTel}`}>
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2024 Dipanjali Gold Trading. All rights reserved.
          </p>

          <div className="footer__socials">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.type}
                label={social.label}
                href={social.href}
                Icon={social.Icon}
              />
            ))}
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
