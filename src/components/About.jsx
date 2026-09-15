import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function About({ onOpenQuote }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuoteClick = () => {
    const el = document.getElementById('quote-enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuote) {
      onOpenQuote();
    }
  };

  return (
    <section id="about" className="section-padding-wide" style={{ position: 'relative' }}>
      <div className="container-full">
        <div className="about-full-layout">
          {/* Left Column Visual Showcase */}
          <div className="about-visual-banner">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80" 
              alt="Arabian Sea Clearing and Shipping UAE Logistics Terminal" 
              loading="lazy"
            />
            <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: 'rgba(8, 11, 36, 0.95)', border: '1.5px solid var(--ascs-red)', padding: '1.2rem 1.8rem', borderRadius: 'var(--radius-md)', color: '#FFFFFF', backdropFilter: 'blur(16px)', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Logo variant="emblem" size="small" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 900 }}>ASCS Operations</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Dubai Operations Hub</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Narrative */}
          <div>
            <div className="eyebrow-pill" style={{ marginBottom: '1.4rem' }}>
              WHO WE ARE
            </div>

            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '0.6rem', direction: 'rtl', textAlign: 'left' }}>
              {COMPANY_INFO.nameArabic}
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: '1.15' }}>
              Your Gateway Between the Gulf and the World.
            </h2>

            <p style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.2rem', lineHeight: '1.6' }}>
              Arabian Sea Clearing and Shipping L.L.C provides professional logistics and freight forwarding solutions across the UAE, moving cargo internationally through air, ocean, and express courier networks.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.2rem', lineHeight: '1.7' }}>
              With centralized corporate operations in <strong>Naif St, Deira, Dubai</strong>, we deliver structured cargo clearing, multimodal routing, and dedicated customer communication for commercial enterprises worldwide.
            </p>

            {/* Core Value Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
              {[
                "Reliable Coordination",
                "International Connectivity",
                "Professional Handling",
                "Flexible Shipping Solutions",
                "Transparent Communication",
                "Enterprise B2B Focus"
              ].map((val, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: '#FFFFFF' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--ascs-red)', flexShrink: 0 }} />
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <button className="btn-ascs-red" onClick={scrollToContact}>
                Contact Our Shipping Team <ArrowRight size={16} />
              </button>

              <button className="btn-ascs-outline" onClick={handleQuoteClick}>
                Get Immediate Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
