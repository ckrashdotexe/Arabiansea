import React, { useState } from 'react';
import { MapPin, Phone, Printer, Mail, Send, CheckCircle2, Building2 } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    office: 'Dubai Branch (Naif St)',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', phone: '', office: 'Dubai Branch (Naif St)', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding-wide" style={{ position: 'relative' }}>
      <div className="container-full">
        <div className="section-header-wide">
          <div className="eyebrow-pill" style={{ marginBottom: '1.2rem' }}>
            DUAL UAE OPERATIONS & DESK
          </div>
          <h2>Connect With Our Shipping Offices</h2>
          <p>Direct inquiries to our Dubai and Sharjah freight operations for air cargo, ocean shipping, and express courier coordination.</p>
        </div>

        {/* Dual Office Showcase Cards */}
        <div className="offices-dual-grid" style={{ marginBottom: '3.5rem' }}>
          {/* Dubai Office Card (from official logo/business card) */}
          <div className="office-card-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div className="trust-icon-container" style={{ width: '46px', height: '46px' }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>Dubai Branch</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--ascs-red)', fontWeight: 700 }}>Commercial Freight Desk</p>
                </div>
              </div>
              <span className="eyebrow-pill" style={{ fontSize: '0.72rem', padding: '0.35rem 0.85rem' }}>
                Dubai, UAE
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--ascs-red)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{COMPANY_INFO.offices.dubai.address} ({COMPANY_INFO.offices.dubai.poBox})</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} style={{ color: 'var(--ascs-red)', flexShrink: 0 }} />
                <span>Tel: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.dubai.phone}</strong> (Intl: {COMPANY_INFO.offices.dubai.phoneIntl})</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Printer size={18} style={{ color: 'var(--ascs-red)', flexShrink: 0 }} />
                <span>Fax: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.dubai.fax}</strong></span>
              </div>
            </div>
          </div>

          {/* Sharjah Office Card (from company specifications) */}
          <div className="office-card-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div className="trust-icon-container" style={{ width: '46px', height: '46px' }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>Sharjah Head Office</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--ascs-red)', fontWeight: 700 }}>Corporate Clearing & Shipping</p>
                </div>
              </div>
              <span className="eyebrow-pill" style={{ fontSize: '0.72rem', padding: '0.35rem 0.85rem' }}>
                Sharjah, UAE
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--ascs-red)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{COMPANY_INFO.offices.sharjah.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} style={{ color: 'var(--ascs-red)', flexShrink: 0 }} />
                <span>Tel: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.sharjah.phone}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Printer size={18} style={{ color: 'var(--ascs-red)', flexShrink: 0 }} />
                <span>Fax: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.sharjah.fax}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="ascs-glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            <h3 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', fontWeight: 900, marginBottom: '0.6rem' }}>
              Transmit Commercial Cargo Inquiry
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Our operations desks in Dubai and Sharjah respond directly to corporate shipping requests.
            </p>
          </div>

          {sent ? (
            <div style={{ background: 'rgba(229, 43, 56, 0.15)', border: '2px solid var(--ascs-red)', padding: '2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', color: '#FFFFFF', maxWidth: '650px', margin: '0 auto' }}>
              <CheckCircle2 size={46} style={{ color: 'var(--ascs-red)', display: 'block', margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem' }}>Inquiry Received</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                Thank you. Your inquiry has been routed to the selected UAE office. Our shipping team will follow up promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '850px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="Your Name"
                    style={{ width: '100%', background: 'rgba(8, 11, 36, 0.85)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="email@company.com"
                    style={{ width: '100%', background: 'rgba(8, 11, 36, 0.85)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Phone / Mobile
                  </label>
                  <input 
                    type="tel"
                    placeholder="+971 50 123 4567"
                    style={{ width: '100%', background: 'rgba(8, 11, 36, 0.85)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Select Preferred Office Desk
                  </label>
                  <select 
                    style={{ width: '100%', background: 'rgba(8, 11, 36, 0.85)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                  >
                    <option>Dubai Branch (Naif St, Deira)</option>
                    <option>Sharjah Head Office (Petrofac House)</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  Cargo & Shipment Details *
                </label>
                <textarea 
                  rows="4"
                  required
                  placeholder="Provide origin, destination, cargo type, estimated volume/weight, and timeline..."
                  style={{ width: '100%', background: 'rgba(8, 11, 36, 0.85)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none', resize: 'vertical' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-ascs-red" style={{ width: '100%', justifyContent: 'center' }}>
                Send Direct Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
