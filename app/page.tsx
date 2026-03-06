import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import TechStack from '@/components/home/TechStack';
import Stats from '@/components/home/Stats';
import Portfolio from '@/components/home/Portfolio';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Tkode Labs — Technology Solutions | Desenvolvimento de Sistemas',
  description: 'Desenvolvemos sistemas web modernos, aplicações mobile e soluções tecnológicas sob medida para o seu negócio. Next.js, Supabase, React Native.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="fancy-divider" />
        <Services />
        <hr className="fancy-divider" />
        <Stats />
        <hr className="fancy-divider" />
        <TechStack />
        <hr className="fancy-divider" />
        <Portfolio />
        <hr className="fancy-divider" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
