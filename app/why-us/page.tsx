import type { Metadata } from 'next';
import DipanjaliAdvantageSection from '@/components/DipanjaliAdvantageSection';
import DipanjaliDifferenceSection from '@/components/DipanjaliDifferenceSection';
import ExperienceDifferenceSection from '@/components/ExperienceDifferenceSection';
import Footer from '@/components/Footer';
import IndustryObjectionsSection from '@/components/IndustryObjectionsSection';
import MarketComparisonSection from '@/components/MarketComparisonSection';
import WhyUsHero from '@/components/WhyUsHero';
import WhyUsProofSection from '@/components/WhyUsProofSection';

export const metadata: Metadata = {
  title: 'Why Us | Dipanjali Gold & Trading',
  description:
    'Why choose Dipanjali Gold Trading — institutional spreads, certified purity, dedicated relationship desks, and zero compromise on compliance.',
};

export default function WhyUsPage() {
  return (
    <main className="page">
      <WhyUsHero />
      <DipanjaliDifferenceSection />
      <DipanjaliAdvantageSection />
      <MarketComparisonSection />
      <IndustryObjectionsSection />
      <WhyUsProofSection />
      <ExperienceDifferenceSection />
      <Footer />
    </main>
  );
}
