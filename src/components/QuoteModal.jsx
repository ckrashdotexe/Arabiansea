import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Anchor } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    mode: 'Air Freight',
    origin: 'Sharjah / Dubai (UAE)',
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
        origin: 'Sharjah / Dubai (UAE)',
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

        <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
          FREIGHT QUOTE REQUEST
        </div>

        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>
          Request Shipping Rate Quote
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
          Connect with Arabian Sea Clearing and Shipping L.L.C headquarters in Sharjah, UAE.
        </p>

        {submitted ? (
          <div style={{ background: 'rgba(197, 160, 89, 0.12)', border: '1px solid var(--border-gold)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: '#fff' }}>
            <CheckCircle2 size={48} style={{ color: 'var(--gold-light)', display: 'block', margin: '0 auto 1rem auto' }} />
            <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>Quote Request Submitted</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Your inquiry reference <strong>#ASCS-{Math.floor(10000 + Math.random() * 90000)}</strong> has been routed to our shipping desk in Sharjah, UAE.
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
                  placeholder="John Smith"
                  className="calc-input"
                  style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Company Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="Enterprise Trade LLC"
                  className="calc-input"
                  style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Corporate Email *
                </label>
                <input 
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="calc-input"
                  style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Phone Number *
                </label>
                <input 
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  className="calc-input"
                  style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Mode of Freight
                </label>
                <select 
                  className="calc-select"
                  style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                >
                  <option>Air Freight</option>
                  <option>Sea Freight</option>
                  <option>International Courier (DHL / FedEx / Aramex / UPS)</option>
                  <option>Custom Shipping Solution</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Destination Country / Port *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Frankfurt, Germany / Singapore"
                  className="calc-input"
                  style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Cargo Details & Requirements
              </label>
              <textarea 
                rows="3"
                placeholder="Specify commodity type, estimated weight (kg), volume, or specific handling requests..."
                className="calc-input"
                style={{ width: '100%', background: 'rgba(6, 10, 23, 0.7)', border: '1px solid var(--border-gold)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', color: '#fff', resize: 'vertical' }}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary-gold" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Quote Request <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
