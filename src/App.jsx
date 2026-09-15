import React, { useState } from 'react';
import './styles/index.css';
import './styles/components.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Services from './components/Services';
import GlobalNetwork from './components/GlobalNetwork';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <div className="app-root">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenQuote={handleOpenQuote} 
      />

      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        <TrustStrip />
        <About />
        <Services onOpenQuote={handleOpenQuote} />
        <GlobalNetwork />
        <WhyUs onOpenQuote={handleOpenQuote} />
        <Contact />
      </main>

      <Footer onOpenQuote={handleOpenQuote} />

      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}
