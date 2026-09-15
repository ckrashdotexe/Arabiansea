import React, { useState } from 'react';
import { ArrowRight, MapPin, Globe, Compass, Search, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onOpenQuote }) {
  const [quickQuery, setQuickQuery] = useState('');

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenQuote();
  };

  return (
    <section id="hero" className="hero-wrapper">
      {/* High-Resolution Cinematic Gulf Port Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=80" 
        alt="Gulf Container Terminal & Global Freight" 
        className="hero-bg-image"
      />

      {/* Dark Navy Gradient Overlay */}
      <div className="hero-navy-overlay"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content-center">
          {/* Eyebrow Pill */}
          <div className="eyebrow-badge" style={{ marginBottom: '1.8rem' }}>
            <Globe size={14} /> GLOBAL LOGISTICS • UAE
          </div>

          {/* Main H1 Headline */}
          <h1 className="hero-title">
            Connecting the Gulf to the World <br />
            <span className="text-gold-gradient">with Sovereign Precision.</span>
          </h1>

          {/* Supporting Lead Text */}
          <p className="hero-subtitle">
            Reliable air, sea and international courier solutions engineered to move your cargo across borders with confidence.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-cta-group">
            <button className="btn-primary-gold" onClick={onOpenQuote}>
              Request a Quote <ArrowRight size={18} />
            </button>

            <button className="btn-secondary-outline" onClick={scrollToServices}>
              Explore Our Services
            </button>
          </div>

          {/* Location Badge */}
          <div>
            <span className="hero-footer-location">
              <MapPin size={15} style={{ color: 'var(--gold-primary)' }} />
              Sharjah, UAE • Connecting Business to Global Trade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
