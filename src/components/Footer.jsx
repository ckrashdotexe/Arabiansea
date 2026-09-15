import React from 'react';
import { Anchor, MapPin, Phone, Printer, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="sovereign-footer">
      <div className="container">
        <div className="footer-columns">
          {/* Brand Column */}
          <div>
            <div className="brand-wordmark" style={{ marginBottom: '1.2rem' }}>
              <div className="brand-symbol">
                <Anchor size={22} />
              </div>
              <div className="brand-text-block">
                <span className="brand-title">Arabian Sea</span>
                <span className="brand-subtitle">Clearing & Shipping L.L.C</span>
              </div>
            </div>

            <p style={{ color: 'var(--gold-light)', fontStyle: 'italic', fontWeight: '600', fontSize: '0.95rem', marginBottom: '1rem' }}>
              "{COMPANY_INFO.tagline}"
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '380px', lineHeight: '1.6' }}>
              Professional logistics, air freight, sea cargo, and international courier coordination based in Sharjah, United Arab Emirates.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '1.2rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
              <li><a href="#hero" style={{ color: 'var(--text-muted)' }}>Home</a></li>
              <li><a href="#about" style={{ color: 'var(--text-muted)' }}>About Us</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Services</a></li>
              <li><a href="#why-us" style={{ color: 'var(--text-muted)' }}>Why Choose Us</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-muted)' }}>Contact Desk</a></li>
            </ul>
          </div>

          {/* Freight Services Column */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '1.2rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Air Freight</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Sea Freight</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>International Courier</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>DHL • FedEx • Aramex • UPS</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Custom Shipping Solutions</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '1.2rem' }}>Sharjah Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>
                <MapPin size={14} style={{ color: 'var(--gold-primary)', marginRight: '0.4rem', display: 'inline' }} />
                {COMPANY_INFO.location}
              </div>
              <div>
                <Phone size={14} style={{ color: 'var(--gold-primary)', marginRight: '0.4rem', display: 'inline' }} />
                Tel: {COMPANY_INFO.phone}
              </div>
              <div>
                <Printer size={14} style={{ color: 'var(--gold-primary)', marginRight: '0.4rem', display: 'inline' }} />
                Fax: {COMPANY_INFO.fax}
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <button 
                  className="btn-secondary-outline" 
                  style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                  onClick={onOpenQuote}
                >
                  Request Rate Quote <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal Row */}
        <div className="footer-bottom-row">
          <div>
            © 2026 Arabian Sea Clearing and Shipping L.L.C. All rights reserved. Registered in Sharjah, UAE.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-dim)' }}>
            <a href="#" style={{ color: 'inherit' }}>Terms of Carriage</a>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
