import Hero from '@/components/Hero';
import LiveSpot from '@/components/LiveSpot';
import WhoWeAre from '@/components/WhoWeAre';
import Features from '@/components/Features';
import CoreServices from '@/components/CoreServices';
import Specialists from '@/components/Specialists';
import Testimonial from '@/components/Testimonial';
import TrustBar from '@/components/TrustBar';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="page">
      <Hero />
      <LiveSpot />
      <WhoWeAre />
      <Features />
      <CoreServices />
      <Specialists />
      <Testimonial />
      <TrustBar />
      <Stats />
      <Footer />
    </main>
  );
}
