export const CONTACT = {
  email: 'info@dipanjaligold.com',
  phoneDisplay: '+971 45 461 616',
  phoneTel: '+97145461616',
  whatsappHref: 'https://wa.me/97145461616',
  addressLines: [
    'Office No. 213 & 214, 2nd Floor,',
    'Building No. 6A, Hind Plaza,',
    'Deira Gold Souq, Dubai',
  ],
  addressPlain:
    'Office No. 213 & 214, 2nd Floor, Building No. 6A, Hind Plaza, Deira Gold Souq, Dubai',
  /** Deira Gold Souq / Hind Plaza area */
  mapLat: 25.2714,
  mapLng: 55.2969,
  mapZoom: 16,
} as const;

export const CONTACT_MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  CONTACT.addressPlain,
)}&z=${CONTACT.mapZoom}&hl=en&output=embed`;
