import { Mail, Phone, type LucideIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const channels = [
  {
    label: 'Direct Trading Desk',
    primary: '+91 [Desk Number]',
    primaryHref: 'tel:+91',
    text: 'For immediate rate confirmation and large-volume execution',
    footer: {
      type: 'status' as const,
      value: 'DESK ACTIVE - 24 HOURS',
    },
    icon: 'phone' as const,
  },
  {
    label: 'WhatsApp Business',
    primary: 'Instant Verification Desk',
    primaryHref: null,
    text: 'Spot rate confirmations and document submissions via WhatsApp API',
    footer: {
      type: 'link' as const,
      value: 'MESSAGE NOW',
      href: 'https://wa.me/',
    },
    showArrow: true,
    icon: 'whatsapp' as const,
  },
  {
    label: 'Secure Email',
    primary: 'trading@dipanjaligold.com',
    primaryHref: 'mailto:trading@dipanjaligold.com',
    text: 'For formal trade documentation, KYC submissions, and structured correspondence',
    footer: null,
    icon: 'mail' as const,
  },
];

type ChannelIconType = (typeof channels)[number]['icon'];

function ChannelIcon({ type }: { type: ChannelIconType }) {
  if (type === 'whatsapp') {
    return (
      <FaWhatsapp
        className="trade-desk-channels__channel-icon"
        aria-hidden="true"
      />
    );
  }

  const icons: Record<'phone' | 'mail', LucideIcon> = {
    phone: Phone,
    mail: Mail,
  };
  const Icon = icons[type];
  return <Icon className="trade-desk-channels__channel-icon" aria-hidden="true" />;
}

export default function TradeDeskChannelsSection() {
  return (
    <section
      className="trade-desk-channels"
      aria-label="Trading desk contact channels"
    >
      <div className="trade-desk-channels__inner">
        <ul className="trade-desk-channels__grid">
          {channels.map((channel) => (
            <li key={channel.label} className="trade-desk-channels__card">
              <p className="trade-desk-channels__label">
                <ChannelIcon type={channel.icon} />
                {channel.label}
                {channel.showArrow ? (
                  <span
                    className="trade-desk-channels__label-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </p>

              {channel.primaryHref ? (
                <a
                  className="trade-desk-channels__primary"
                  href={channel.primaryHref}
                >
                  {channel.primary}
                </a>
              ) : (
                <p className="trade-desk-channels__primary">{channel.primary}</p>
              )}

              <p className="trade-desk-channels__text">{channel.text}</p>

              {channel.footer?.type === 'status' ? (
                <p className="trade-desk-channels__status">
                  {channel.footer.value}
                </p>
              ) : null}

              {channel.footer?.type === 'link' ? (
                <a
                  className="trade-desk-channels__action"
                  href={channel.footer.href}
                >
                  {channel.footer.value}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
