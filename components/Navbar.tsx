'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';

const LOGO_SRC =
  'https://6clicks.s3.us-east-2.amazonaws.com/Group_9_1784545605607_fw51.png';

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const navId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (link: NavLink) => {
    if (link.href === '/') return pathname === '/';
    if (link.href === '/about') return pathname === '/about';
    if (link.href === '/services') return pathname === '/services';
    if (link.href === '/why-us') return pathname === '/why-us';
    if (link.href === '/contact') return pathname === '/contact';
    return false;
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`navbar${menuOpen ? ' navbar--menu-open' : ''}`}>
      <Link
        className="navbar__logo"
        href="/"
        aria-label="Dipanjali Gold Trading home"
      >
        <Image
          className="navbar__logo-image"
          src={LOGO_SRC}
          alt="Dipanjali Gold Trading"
          width={160}
          height={72}
          priority
        />
      </Link>

      <div className="navbar__right">
        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls={navId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span className="navbar__toggle-bar" aria-hidden="true" />
          <span className="navbar__toggle-bar" aria-hidden="true" />
          <span className="navbar__toggle-bar" aria-hidden="true" />
        </button>

        {menuOpen ? (
          <button
            type="button"
            className="navbar__backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}

        <nav
          id={navId}
          className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className={
                isActive(link)
                  ? 'navbar__link navbar__link--active'
                  : 'navbar__link'
              }
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="navbar__cta navbar__cta--menu"
            href="/#contact"
            onClick={() => setMenuOpen(false)}
          >
            Trade Now
          </Link>
        </nav>

        <Link className="navbar__cta navbar__cta--bar" href="/#contact">
          Trade Now
        </Link>
      </div>
    </header>
  );
}
