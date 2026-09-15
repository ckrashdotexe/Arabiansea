import React from 'react';
import { MapPin, Phone, Printer, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="footer-fullscreen">
      <div className="container-full">
        <div className="footer-main-columns">
          {/* Official Brand Lockup Column */}
          <div>
            <div style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
              <Logo variant="horizontal" />
            </div>

            <p style={{ color: '#FFFFFF', fontStyle: 'italic', fontWeight: 600, fontSize: '0.98rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              "{COMPANY_INFO.tagline}"
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '420px', lineHeight: '1.65' }}>
              Professional multimodal freight forwarding, air freight, ocean cargo, customs clearing, and express courier logistics across international trade corridors.
            </p>
          </div>

          {/* Freight Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.4rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem' }}>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Air Freight Services</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Ocean & Sea Cargo</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>International Courier</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>DHL • FedEx • Aramex • UPS</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Custom Shipping Solutions</a></li>
            </ul>
          </div>

          {/* Dubai Branch Office (Official Card Details) */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.4rem' }}>Dubai Branch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>
                <MapPin size={15} style={{ color: 'var(--ascs-red)', marginRight: '0.4rem', display: 'inline' }} />
                {COMPANY_INFO.offices.dubai.address}
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 700 }}>
                {COMPANY_INFO.offices.dubai.poBox}
              </div>
              <div>
                <Phone size={15} style={{ color: 'var(--ascs-red)', marginRight: '0.4rem', display: 'inline' }} />
                Tel: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.dubai.phone}</strong>
              </div>
              <div>
                <Printer size={15} style={{ color: 'var(--ascs-red)', marginRight: '0.4rem', display: 'inline' }} />
                Fax: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.dubai.fax}</strong>
              </div>
            </div>
          </div>

          {/* Sharjah Head Office */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.4rem' }}>Sharjah Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>
                <MapPin size={15} style={{ color: 'var(--ascs-red)', marginRight: '0.4rem', display: 'inline' }} />
                {COMPANY_INFO.offices.sharjah.address}
              </div>
              <div>
                <Phone size={15} style={{ color: 'var(--ascs-red)', marginRight: '0.4rem', display: 'inline' }} />
                Tel: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.sharjah.phone}</strong>
              </div>
              <div>
                <Printer size={15} style={{ color: 'var(--ascs-red)', marginRight: '0.4rem', display: 'inline' }} />
                Fax: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.sharjah.fax}</strong>
              </div>
              <div style={{ marginTop: '0.6rem' }}>
                <button 
                  className="btn-ascs-red" 
                  style={{ padding: '0.55rem 1.2rem', fontSize: '0.82rem' }}
                  onClick={onOpenQuote}
                >
                  Request Rate Quote <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Legal Sub-Row */}
        <div className="footer-bottom-row">
          <div>
            © 2026 Arabian Sea Clearing and Shipping L.L.C. (ارابيان سي للتخليص والشحن ذ.م.م). All rights reserved. Registered in UAE.
          </div>

          <div style={{ display: 'flex', gap: '1.8rem', color: 'var(--text-dim)' }}>
            <a href="#" style={{ color: 'inherit' }}>Terms of Carriage</a>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Cargo Insurance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
