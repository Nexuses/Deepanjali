import type { Metadata } from 'next';
import AboutHero from '@/components/AboutHero';
import AboutWhoWeAre from '@/components/AboutWhoWeAre';
import MissionVision from '@/components/MissionVision';
import RegulatoryFramework from '@/components/RegulatoryFramework';
import OurInfrastructure from '@/components/OurInfrastructure';
import SourcingStandards from '@/components/SourcingStandards';
import AboutSpecialists from '@/components/AboutSpecialists';
import BeginConversation from '@/components/BeginConversation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us | Dipanjali Gold & Trading',
  description:
    'About Dipanjali Gold Trading - a foundation of uncompromising integrity in institutional precious metals.',
};

export default function AboutPage() {
  return (
    <main className="page">
      <AboutHero />
      <AboutWhoWeAre />
      <MissionVision />
      <RegulatoryFramework />
      <OurInfrastructure />
      <SourcingStandards />
      <AboutSpecialists />
      <BeginConversation />
      <Footer />
    </main>
  );
}
