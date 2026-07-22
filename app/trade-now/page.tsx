import type { Metadata } from 'next';
import ExecutionWorkflowSection from '@/components/ExecutionWorkflowSection';
import Footer from '@/components/Footer';
import PrivateAdvisorySection from '@/components/PrivateAdvisorySection';
import TradeDeskChannelsSection from '@/components/TradeDeskChannelsSection';
import TradeFormsSection from '@/components/TradeFormsSection';
import TradeNowHero from '@/components/TradeNowHero';

export const metadata: Metadata = {
  title: 'Trade Now | Dipanjali Gold & Trading',
  description:
    'Execute today on Dipanjali’s institutional trading desk - live bid/ask pricing, immediate execution, and zero intermediary markup.',
};

export default function TradeNowPage() {
  return (
    <main className="page">
      <TradeNowHero />
      <ExecutionWorkflowSection />
      <TradeFormsSection />
      <PrivateAdvisorySection />
      <TradeDeskChannelsSection />
      <Footer />
    </main>
  );
}
