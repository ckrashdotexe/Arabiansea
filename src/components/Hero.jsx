import React from 'react';
import { ArrowRight, MapPin, Globe, ShieldCheck, Compass, Anchor } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onOpenQuote }) {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-wrapper-fullscreen">
      {/* High-Resolution Panoramic Maritime Vessel & Port Terminal Photo */}
      <img 
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2600&q=85" 
        alt="Arabian Sea Clearing and Shipping Maritime Cargo Operations" 
        className="hero-bg-photo"
      />

      {/* Royal Navy Gradient & Vignette Filter */}
      <div className="hero-overlay-gradient"></div>

      <div className="container-full" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content-wide">
          {/* Official ASCS Emblem Display */}
          <div className="hero-logo-emblem-wrap">
            <Logo variant="emblem" size="large" />
          </div>

          {/* Official Arabic Name */}
          <div className="hero-arabic-calligraphy">
            {COMPANY_INFO.nameArabic}
          </div>

          {/* Eyebrow Pill */}
          <div style={{ marginBottom: '1.2rem' }}>
            <span className="eyebrow-pill">
              <Globe size={15} style={{ color: 'var(--ascs-red)' }} />
              UAE MULTIMODAL LOGISTICS & FREIGHT FORWARDING
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="hero-title-fullscreen">
            Connecting the Gulf to the World <br />
            <span className="text-red-accent">with Sovereign Precision.</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="hero-subtitle-wide">
            Reliable air, sea and international courier solutions engineered to move your commercial cargo across international borders with confidence.
          </p>

          {/* Primary Call-to-Action Group */}
          <div className="hero-cta-row">
            <button className="btn-ascs-red" onClick={onOpenQuote}>
              Request a Quote <ArrowRight size={18} />
            </button>

            <button className="btn-ascs-outline" onClick={scrollToServices}>
              Explore Our Services
            </button>
          </div>

          {/* Official Presence Badges (Dubai & Sharjah) */}
          <div className="hero-offices-badge-row">
            <span className="hero-office-pill">
              <MapPin size={14} style={{ color: 'var(--ascs-red)' }} />
              Dubai: Naif St, Deira (Tel: {COMPANY_INFO.offices.dubai.phone})
            </span>
            <span className="hero-office-pill">
              <MapPin size={14} style={{ color: 'var(--ascs-red)' }} />
              Sharjah: Petrofac House, Al Soor (Tel: {COMPANY_INFO.offices.sharjah.phone})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
