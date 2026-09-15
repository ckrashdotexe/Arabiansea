import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function About() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left Column Image Showcase */}
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" 
              alt="Arabian Sea Clearing & Shipping Operations in UAE" 
              loading="lazy"
            />
            <div className="about-badge-floating">
              <Building2 size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
              Sharjah Headquarters, UAE
            </div>
          </div>

          {/* Right Column Narrative */}
          <div>
            <div className="eyebrow-badge" style={{ marginBottom: '1.2rem' }}>
              WHO WE ARE
            </div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Your Gateway Between the Gulf and the World.
            </h2>

            <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.2rem', lineHeight: '1.6' }}>
              Arabian Sea Clearing and Shipping L.L.C provides professional logistics and shipping solutions from Sharjah, UAE, helping businesses move cargo internationally through air freight, sea freight and courier networks.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
              Based in Petrofac House, Al Soor, Sharjah, we focus on delivering structured cargo coordination, transparent operational workflows, and dedicated account communication for enterprise clients across the region.
            </p>

            {/* Core Operational Values List */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                "Reliable Coordination",
                "International Connectivity",
                "Professional Handling",
                "Flexible Shipping Solutions",
                "Clear Communication",
                "Business-Focused Service"
              ].map((val, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: '#fff' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary-gold" onClick={scrollToContact}>
              Talk to Our Shipping Team <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
