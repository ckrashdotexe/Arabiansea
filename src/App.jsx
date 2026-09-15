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
import QuoteEnquiry from './components/QuoteEnquiry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Air Freight');

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
        <About onOpenQuote={handleOpenQuote} />
        <Services onOpenQuote={handleOpenQuote} onSelectService={setSelectedService} />
        <GlobalNetwork />
        <WhyUs onOpenQuote={handleOpenQuote} />
        <QuoteEnquiry 
          selectedService={selectedService} 
          onServiceChange={setSelectedService} 
        />
        <Contact />
      </main>

      <Footer onOpenQuote={handleOpenQuote} />

      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}
