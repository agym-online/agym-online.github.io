import { Navbar } from './components/Navbar';
import { FloatingIcons } from './components/FloatingIcons';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { CaseStudies } from './components/CaseStudies';
import { Results } from './components/Results';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily: 'Inter, sans-serif',
        background: 'var(--bg-deep)',
        color: 'var(--text-primary)'
      }}
    >
      <FloatingIcons />
      <Navbar />
      <Hero />
      <div id="services"><Services /></div>
      <div id="process"><Process /></div>
      <div id="pricing"><Pricing /></div>
      <div id="cases"><CaseStudies /></div>
      <div id="results"><Results /></div>
      <div id="cta"><FinalCTA /></div>
      <Footer />
    </div>
  );
}