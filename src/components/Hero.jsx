import React from 'react';
import { ArrowRight, MapPin, Globe, Shield, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onOpenQuote }) {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-wrapper">
      {/* High-Resolution Cinematic Gulf Port Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80" 
        alt="Gulf Container Port Terminal" 
        className="hero-bg-image"
      />

      {/* Dark Navy Radial Overlay */}
      <div className="hero-navy-overlay"></div>

      {/* SVG Animated Route Glow Overlay */}
      <svg className="route-network-overlay" viewBox="0 0 1440 900" fill="none">
        <path d="M 200 450 Q 720 150 1240 450" stroke="rgba(197, 160, 89, 0.2)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M 350 600 Q 720 300 1100 600" stroke="rgba(229, 193, 88, 0.25)" strokeWidth="1.5" />
        <circle cx="720" cy="300" r="6" fill="#E5C158" />
        <circle cx="720" cy="300" r="14" stroke="rgba(229, 193, 88, 0.4)" strokeWidth="1" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content-center">
          {/* Small Eyebrow Badge */}
          <div className="eyebrow-badge" style={{ marginBottom: '1.5rem' }}>
            <Globe size={14} /> GLOBAL LOGISTICS • UAE
          </div>

          {/* Main H1 Title */}
          <h1 className="hero-title">
            Connecting the Gulf to the World <br />
            <span className="text-gold-gradient">with Sovereign Precision.</span>
          </h1>

          {/* Supporting Body Copy */}
          <p className="hero-subtitle">
            Reliable air, sea and international courier solutions engineered to move your cargo across borders with confidence.
          </p>

          {/* Call-to-Action Group */}
          <div className="hero-cta-group">
            <button className="btn-primary-gold" onClick={onOpenQuote}>
              Request a Quote <ArrowRight size={18} />
            </button>
            <button className="btn-secondary-outline" onClick={scrollToServices}>
              Explore Our Services
            </button>
          </div>

          {/* Supporting Location Line */}
          <div>
            <span className="hero-footer-location">
              <MapPin size={14} style={{ color: 'var(--gold-primary)' }} />
              Sharjah, UAE • Connecting Business to Global Trade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
