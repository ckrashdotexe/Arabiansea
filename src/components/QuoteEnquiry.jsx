import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Plane, Ship, Package, Globe, Calculator, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function QuoteEnquiry({ selectedService, onServiceChange }) {
  const [formData, setFormData] = useState({
    service: 'Air Freight',
    name: '',
    company: '',
    email: '',
    phone: '',
    origin: 'UAE (Dubai)',
    destination: '',
    weight: '',
    office: 'Dubai Headquarters (Naif St, Deira)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  // Update selected service if parent changes it
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const serviceOptions = [
    { title: 'Air Freight', icon: Plane, tag: 'Fastest Transit' },
    { title: 'Sea Freight', icon: Ship, tag: 'Ocean Cargo' },
    { title: 'International Courier', icon: Package, tag: 'Express Routing' },
    { title: 'Custom Shipping Solutions', icon: Globe, tag: 'Multimodal' }
  ];

  const handleSelectService = (title) => {
    setFormData(prev => ({ ...prev, service: title }));
    if (onServiceChange) {
      onServiceChange(title);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = `ASCS-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteRef(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      service: selectedService || 'Air Freight',
      name: '',
      company: '',
      email: '',
      phone: '',
      origin: 'UAE (Dubai)',
      destination: '',
      weight: '',
      office: 'Dubai Headquarters (Naif St, Deira)',
      notes: ''
    });
  };

  return (
    <section id="quote-enquiry" className="section-padding-wide" style={{ position: 'relative' }}>
      <div className="container-full">
        {/* Section Header */}
        <div className="section-header-wide">
          <div className="eyebrow-pill" style={{ marginBottom: '1.2rem' }}>
            <Calculator size={15} style={{ color: 'var(--ascs-red)' }} />
            COMMERCIAL FREIGHT QUOTE ENQUIRY
          </div>
          <h2>Request Commercial Freight Tariff & Routing.</h2>
          <p>Direct your shipment specifications to our Dubai shipping desk for rapid rate coordination and customs clearing guidance.</p>
        </div>

        <div className="ascs-glass-panel" style={{ padding: 'clamp(2rem, 3.5vw, 3.5rem)', maxWidth: '1050px', margin: '0 auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'rgba(229, 43, 56, 0.15)', 
                  border: '2px solid var(--ascs-red)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1.5rem auto',
                  color: 'var(--ascs-red)'
                }}
              >
                <CheckCircle2 size={44} />
              </div>

              <span className="eyebrow-pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                REFERENCE #{quoteRef}
              </span>

              <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 900, marginBottom: '1rem', color: '#FFFFFF' }}>
                Freight Quote Request Dispatched
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: '1.7' }}>
                Thank you, <strong>{formData.name || 'Shipper'}</strong>. Your inquiry for <strong>{formData.service}</strong> has been assigned to our Dubai operations team. A freight coordinator will contact you promptly at <strong>{formData.email}</strong>.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
                <button className="btn-ascs-red" onClick={handleReset}>
                  Submit Another Cargo Inquiry
                </button>

                <a 
                  href={`tel:${COMPANY_INFO.offices.dubai.phone}`}
                  className="btn-ascs-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Phone size={16} style={{ color: 'var(--ascs-red)' }} />
                  Speak to Dubai Desk: {COMPANY_INFO.offices.dubai.phone}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Mode Selector Chips */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.8rem', letterSpacing: '0.04em' }}>
                  1. SELECT SHIPPING MODE *
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem' }}>
                  {serviceOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = formData.service === opt.title;
                    return (
                      <button
                        type="button"
                        key={opt.title}
                        onClick={() => handleSelectService(opt.title)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          padding: '1rem 1.2rem',
                          borderRadius: 'var(--radius-md)',
                          background: isSelected ? 'rgba(229, 43, 56, 0.18)' : 'rgba(8, 11, 36, 0.85)',
                          border: isSelected ? '2px solid var(--ascs-red)' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#FFFFFF',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all var(--transition-fast)',
                          boxShadow: isSelected ? '0 6px 20px rgba(229, 43, 56, 0.25)' : 'none'
                        }}
                      >
                        <div 
                          style={{ 
                            width: '38px', 
                            height: '38px', 
                            borderRadius: 'var(--radius-sm)', 
                            background: isSelected ? 'var(--ascs-red)' : 'rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: '#FFFFFF'
                          }}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: '0.94rem' }}>{opt.title}</div>
                          <div style={{ fontSize: '0.74rem', color: isSelected ? 'var(--ascs-red)' : 'var(--text-muted)' }}>{opt.tag}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Route & Cargo Details */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.8rem', letterSpacing: '0.04em' }}>
                  2. ROUTE & SHIPMENT SPECIFICATIONS
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Origin Location *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Dubai, UAE / Jebel Ali Port"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Destination Port / Airport / City *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. London Heathrow / Jeddah / Mumbai / Frankfurt"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Cargo Weight / Volume / Containers
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. 500 KG / 2x 40ft FCL / 3 CBM"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Routing Operations Desk
                    </label>
                    <div style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 700 }}>
                      Dubai Headquarters (Naif St, Deira)
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Shipper Contact Information */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.8rem', letterSpacing: '0.04em' }}>
                  3. SHIPPER / ENTERPRISE CONTACT
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Contact Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Company Name
                    </label>
                    <input 
                      type="text"
                      placeholder="Company / Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="corporate@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Phone / Mobile *
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Cargo Description & Special Handling Requirements
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="Provide cargo description, dangerous goods (if any), preferred carriers (DHL, FedEx, etc.), timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ width: '100%', background: 'rgba(8, 11, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', color: '#FFFFFF', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-ascs-red" 
                style={{ width: '100%', justifyContent: 'center', padding: '1.1rem 2rem', fontSize: '1.05rem', fontWeight: 900 }}
              >
                Request Commercial Freight Quote <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
