import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import HowItWorksSection from '@/components/HowItWorksSection';
import ReadyToTransactSection from '@/components/ReadyToTransactSection';
import ServiceAssaySection from '@/components/ServiceAssaySection';
import ServiceBullionSection from '@/components/ServiceBullionSection';
import ServiceComplianceSection from '@/components/ServiceComplianceSection';
import ServicePillarsSection from '@/components/ServicePillarsSection';
import ServiceVaultingSection from '@/components/ServiceVaultingSection';
import ServicesHero from '@/components/ServicesHero';

export const metadata: Metadata = {
  title: 'Services | Dipanjali Gold & Trading',
  description:
    'End-to-end execution across the gold value chain - wholesale distribution, metallurgical assaying, and institutional vaulting.',
};

export default function ServicesPage() {
  return (
    <main className="page">
      <ServicesHero />
      <ServicePillarsSection />
      <ServiceBullionSection />
      <ServiceAssaySection />
      <ServiceVaultingSection />
      <HowItWorksSection />
      <ServiceComplianceSection />
      <ReadyToTransactSection />
      <Footer />
    </main>
  );
}
