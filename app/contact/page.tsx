import ContactActionsSection from '@/components/ContactActionsSection';
import ContactHero from '@/components/ContactHero';
import ContactHeadquartersSection from '@/components/ContactHeadquartersSection';
import ContactInquirySection from '@/components/ContactInquirySection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact | Dipanjali Gold & Trading',
  description:
    'Connect to the institutional desk for licensed trading support and direct outreach.',
};

export default function ContactPage() {
  return (
    <main className="page">
      <ContactHero />
      <ContactInquirySection />
      <ContactHeadquartersSection />
      <ContactActionsSection />
      <Footer />
    </main>
  );
}

