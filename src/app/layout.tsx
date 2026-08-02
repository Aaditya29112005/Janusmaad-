import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AmbientCanvas } from '@/components/motion/AmbientCanvas';
import { MouseSpotlight } from '@/components/motion/MouseSpotlight';
import { GsapScrollEffects } from '@/components/motion/GsapScrollEffects';

export const metadata: Metadata = {
  title: 'Janusmaad — Growth Agency & Customer Data Platform Expertise',
  description: "We don't just do marketing. We deliver growth. Enterprise Customer Data Platforms, Search Everywhere Optimization, Multi-touch Attribution & Hyper-Personalisation.",
  keywords: ['Growth Agency', 'Customer Data Platform', 'CDP Implementation', 'Search Everywhere SEO', 'MarTech Architecture', 'Attribution Modeling', 'Lifecycle Marketing'],
  authors: [{ name: 'Janusmaad Team' }],
  openGraph: {
    title: 'Janusmaad — Enterprise Growth Agency',
    description: 'We deliver Growth through unified Customer Data Platforms, precision attribution, and omni-channel Search Everywhere Optimization.',
    url: 'https://janusmaad.com',
    siteName: 'Janusmaad',
    images: [
      {
        url: 'https://janusmaad.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFCFF] text-slate-900 min-h-screen flex flex-col font-body selection:bg-janus-purple selection:text-white">
        <AmbientCanvas />
        <MouseSpotlight />
        <GsapScrollEffects>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-grow z-10">{children}</main>
          <Footer />
        </GsapScrollEffects>
      </body>
    </html>
  );
}
