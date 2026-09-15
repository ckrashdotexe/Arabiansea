import React, { useState } from 'react';
import { MapPin, Phone, Printer, Mail, Send, CheckCircle2, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            HEADQUARTERS & SUPPORT
          </div>
          <h2>Contact Our Shipping Operations Desk</h2>
          <p>We welcome business inquiries regarding international air freight, sea cargo, and express courier logistics.</p>
        </div>

        <div className="contact-layout">
          {/* Head Office Information Card */}
          <div className="hq-info-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div className="trust-icon-box" style={{ width: '48px', height: '48px' }}>
                <Building2 size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff' }}>Headquarters</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>Sharjah, United Arab Emirates</p>
              </div>
            </div>

            <div className="hq-contact-line">
              <MapPin size={22} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>OFFICE LOCATION</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#fff' }}>{COMPANY_INFO.location}</div>
              </div>
            </div>

            <div className="hq-contact-line">
              <Phone size={22} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>TELEPHONE</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--gold-light)' }}>{COMPANY_INFO.phone}</div>
              </div>
            </div>

            <div className="hq-contact-line">
              <Printer size={22} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>TELEFAX</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#fff' }}>{COMPANY_INFO.fax}</div>
              </div>
            </div>

            {/* Embedded Interactive Map Card */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-gold)', marginTop: '2rem', height: '180px', background: 'rgba(6, 10, 23, 0.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem' }}>
              <MapPin size={32} style={{ color: 'var(--gold-light)', marginBottom: '0.5rem' }} />
              <div style={{ fontWeight: '800', color: '#fff', fontSize: '0.95rem' }}>Petrofac House, Al Soor</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Sharjah, United Arab Emirates</div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="glass-card" style={{ padding: '2.8rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#fff' }}>
              Send Direct Business Message
            </h3>

            {sent ? (
              <div style={{ background: 'rgba(197, 160, 89, 0.12)', border: '1px solid var(--border-gold)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: '#fff' }}>
                <CheckCircle2 size={40} style={{ color: 'var(--gold-light)', display: 'block', margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>Message Transmitted</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Thank you for contacting Arabian Sea Clearing and Shipping L.L.C. Our Sharjah office will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Your Name"
                      className="calc-input"
                      style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="email@company.com"
                      className="calc-input"
                      style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Phone / WhatsApp
                    </label>
                    <input 
                      type="tel"
                      placeholder="+971 6 568 6515"
                      className="calc-input"
                      style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Inquiry Subject
                    </label>
                    <input 
                      type="text"
                      placeholder="Freight Inquiry / Clearing"
                      className="calc-input"
                      style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea 
                    rows="4"
                    required
                    placeholder="Provide details regarding your international cargo requirements..."
                    className="calc-input"
                    style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff', resize: 'vertical' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message to Operations <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
