import React, { useState } from 'react';
import { MapPin, Phone, Printer, Clock, Send, CheckCircle2, Building2, Globe } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    office: 'Dubai Corporate Headquarters (Naif St, Deira)',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', phone: '', office: 'Dubai Corporate Headquarters (Naif St, Deira)', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding-wide" style={{ position: 'relative' }}>
      <div className="container-full">
        <div className="section-header-wide">
          <div className="eyebrow-pill" style={{ marginBottom: '1.2rem' }}>
            UAE CORPORATE HEADQUARTERS & DESK
          </div>
          <h2>Connect With Our Shipping Operations</h2>
          <p>Direct inquiries to our Dubai corporate headquarters for air cargo, ocean shipping, customs clearing, and express courier coordination.</p>
        </div>

        {/* Dubai Corporate Headquarters Showcase Card */}
        <div style={{ maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
          <div className="office-card-box" style={{ padding: '2.5rem', border: '1px solid rgba(229, 43, 56, 0.35)', background: 'linear-gradient(135deg, rgba(20, 26, 70, 0.85) 0%, rgba(8, 11, 36, 0.95) 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="trust-icon-container" style={{ width: '54px', height: '54px' }}>
                  <Building2 size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#FFFFFF' }}>{COMPANY_INFO.offices.dubai.name}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ascs-red)', fontWeight: 700 }}>Commercial Freight & Customs Clearing Desk</p>
                </div>
              </div>
              <span className="eyebrow-pill" style={{ fontSize: '0.75rem', padding: '0.4rem 1rem' }}>
                Dubai, UAE
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.4rem', fontSize: '0.96rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <MapPin size={20} style={{ color: 'var(--ascs-red)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700 }}>Physical Address</div>
                  <span>{COMPANY_INFO.offices.dubai.address}</span>
                  <div style={{ color: 'var(--ascs-red)', fontWeight: 600, fontSize: '0.85rem', marginTop: '0.2rem' }}>
                    {COMPANY_INFO.offices.dubai.poBox}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Phone size={20} style={{ color: 'var(--ascs-red)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700 }}>Direct Telephone</div>
                  <span>Tel: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.dubai.phone}</strong></span>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
                    Intl: {COMPANY_INFO.offices.dubai.phoneIntl}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Printer size={20} style={{ color: 'var(--ascs-red)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700 }}>Facsimile (Fax)</div>
                  <span>Fax: <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.offices.dubai.fax}</strong></span>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
                    Intl: {COMPANY_INFO.offices.dubai.faxIntl}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Clock size={20} style={{ color: 'var(--ascs-red)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700 }}>Operations Schedule</div>
                  <span>{COMPANY_INFO.workingHours}</span>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
                    Emergency clearance on call
                  </div>
                </div>
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
              Our operations desk in Dubai responds directly to corporate shipping and freight clearing requests.
            </p>
          </div>

          {sent ? (
            <div style={{ background: 'rgba(229, 43, 56, 0.15)', border: '2px solid var(--ascs-red)', padding: '2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', color: '#FFFFFF', maxWidth: '650px', margin: '0 auto' }}>
              <CheckCircle2 size={46} style={{ color: 'var(--ascs-red)', display: 'block', margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem' }}>Inquiry Received</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                Thank you. Your inquiry has been routed to our Dubai Headquarters shipping desk. Our team will follow up promptly.
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
                    Routing Desk
                  </label>
                  <select 
                    style={{ width: '100%', background: 'rgba(8, 11, 36, 0.85)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                  >
                    <option>Dubai Headquarters (Naif St, Deira)</option>
                    <option>Commercial Clearing Operations</option>
                    <option>International Air & Sea Routing</option>
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
