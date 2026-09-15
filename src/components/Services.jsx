import React from 'react';
import { Plane, Ship, Package, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Services({ onOpenQuote, onSelectService }) {
  const serviceIcons = {
    Plane: Plane,
    Ship: Ship,
    Package: Package,
    Globe: Globe
  };

  const handleServiceQuote = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const el = document.getElementById('quote-enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuote) {
      onOpenQuote();
    }
  };

  return (
    <section id="services" className="section-padding-wide" style={{ position: 'relative' }}>
      <div className="container-full">
        <div className="section-header-wide">
          <div className="eyebrow-pill" style={{ marginBottom: '1.2rem' }}>
            SPECIALIZED FREIGHT CAPABILITIES
          </div>
          <h2>Logistics Solutions Built Around Your Cargo.</h2>
          <p>From urgent commercial documents to heavy containerized ocean shipments, we connect your cargo with precision transportation networks.</p>
        </div>

        <div className="services-full-grid">
          {COMPANY_INFO.services.map((svc) => {
            const IconComponent = serviceIcons[svc.icon] || Plane;
            return (
              <div key={svc.number} className="service-card-cinematic">
                {/* Background Photo */}
                <img 
                  src={svc.image} 
                  alt={svc.title} 
                  className="service-photo-bg"
                  loading="lazy" 
                />
                <div className="service-card-vignette"></div>

                <div className="service-card-inner">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem' }}>
                      <div className="trust-icon-container" style={{ width: '58px', height: '58px' }}>
                        <IconComponent size={28} />
                      </div>
                      <span style={{ fontSize: '0.88rem', fontWeight: '900', color: 'var(--ascs-red)', letterSpacing: '0.14em' }}>
                        SERVICE {svc.number}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)', fontWeight: '900', marginBottom: '1rem', color: '#FFFFFF' }}>
                      {svc.title}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                      {svc.description}
                    </p>

                    {/* Official Carrier Pill Badges for International Courier */}
                    {svc.carriers && (
                      <div className="service-carrier-pill-row">
                        {svc.carriers.map((carrier, cIdx) => (
                          <span key={cIdx} className="service-carrier-pill">
                            {carrier}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '1.5rem 0' }}>
                      {svc.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.96rem', color: '#FFFFFF' }}>
                          <CheckCircle2 size={18} style={{ color: 'var(--ascs-red)', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className="btn-ascs-outline" 
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1.8rem' }}
                    onClick={() => handleServiceQuote(svc.title)}
                  >
                    Request {svc.title} Quote <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
