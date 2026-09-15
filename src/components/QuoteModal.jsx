import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    mode: 'Air Freight',
    origin: 'UAE (Dubai / Sharjah)',
    destination: '',
    weight: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        mode: 'Air Freight',
        origin: 'UAE (Dubai / Sharjah)',
        destination: '',
        weight: '',
        description: ''
      });
    }, 4000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Logo variant="emblem" size="small" />
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 700, marginTop: '0.5rem', direction: 'rtl' }}>
            ارابيان سي للتخليص والشحن ذ.م.م
          </div>
          <h3 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 900, marginTop: '0.2rem', color: '#FFFFFF' }}>
            Request Commercial Freight Quote
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Direct routing to our Dubai & Sharjah shipping operations desks.
          </p>
        </div>

        {submitted ? (
          <div style={{ background: 'rgba(229, 43, 56, 0.15)', border: '2px solid var(--ascs-red)', padding: '2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', color: '#FFFFFF' }}>
            <CheckCircle2 size={48} style={{ color: 'var(--ascs-red)', display: 'block', margin: '0 auto 1rem auto' }} />
            <h4 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem' }}>Quote Request Dispatched</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Reference <strong>#ASCS-{Math.floor(10000 + Math.random() * 90000)}</strong> generated. Our freight coordinator will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="Your Name"
                  style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  Company Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="Enterprise Trading LLC"
                  style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  Email Address *
                </label>
                <input 
                  type="email"
                  required
                  placeholder="name@company.com"
                  style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  Phone / Mobile *
                </label>
                <input 
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  Freight Service Mode
                </label>
                <select 
                  style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                >
                  <option>Air Freight</option>
                  <option>Sea Freight (FCL / LCL Container)</option>
                  <option>International Courier (DHL / FedEx / Aramex / UPS)</option>
                  <option>Custom Shipping Solution</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  Destination Country / Port *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Frankfurt, Germany"
                  style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                Cargo Specifications & Remarks
              </label>
              <textarea 
                rows="3"
                placeholder="Specify cargo weight (kg), volume, commodity description, or delivery timeline..."
                style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none', resize: 'vertical' }}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-ascs-red" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Quote Request <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
