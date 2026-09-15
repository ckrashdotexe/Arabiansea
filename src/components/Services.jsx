import React from 'react';
import { Plane, Ship, Package, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const serviceItems = [
    {
      number: "01",
      icon: Plane,
      title: "Air Freight",
      description: "Fast and dependable air freight solutions for time-sensitive shipments and international cargo.",
      features: [
        "Time-sensitive shipments",
        "International cargo",
        "Airport-to-destination coordination",
        "Flexible shipping solutions"
      ],
      ctaText: "Explore Air Freight",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80"
    },
    {
      number: "02",
      icon: Ship,
      title: "Sea Freight",
      description: "Efficient ocean freight solutions for commercial cargo, containers and larger international shipments.",
      features: [
        "Containerized cargo",
        "Commercial shipments",
        "International sea routes",
        "Cost-efficient transportation"
      ],
      ctaText: "Explore Sea Freight",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=80"
    },
    {
      number: "03",
      icon: Package,
      title: "International Courier",
      description: "Reliable international courier solutions for documents, parcels and time-sensitive shipments.",
      carriers: ["DHL", "FedEx", "Aramex", "UPS"],
      features: [
        "Express document & parcel routing",
        "Door-to-door courier coordination",
        "Major international carrier choices",
        "Commercial documentation handling"
      ],
      ctaText: "Send a Shipment",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
    },
    {
      number: "04",
      icon: Globe,
      title: "Custom Shipping Solutions",
      description: "Flexible logistics coordination designed around your shipment requirements.",
      features: [
        "Shipment coordination",
        "Carrier selection",
        "International routing",
        "Business logistics support"
      ],
      ctaText: "Discuss Your Requirement",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            OUR SERVICES
          </div>
          <h2>Logistics Solutions Built Around Your Cargo.</h2>
          <p>From urgent documents to commercial shipments, we connect your cargo with the right transportation solution.</p>
        </div>

        <div className="services-grid-4">
          {serviceItems.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <div key={svc.number} className="service-card-large">
                {/* Background Image Layer with Dark Overlay */}
                <img 
                  src={svc.image} 
                  alt={svc.title} 
                  className="service-card-bg-img"
                  loading="lazy" 
                />
                <div className="service-card-overlay-vignette"></div>

                {/* Foreground Content */}
                <div className="service-card-content">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem' }}>
                      <div className="trust-icon-box" style={{ width: '56px', height: '56px' }}>
                        <IconComponent size={28} />
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--gold-light)', letterSpacing: '0.12em' }}>
                        SERVICE {svc.number}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.9rem', color: '#fff' }}>
                      {svc.title}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                      {svc.description}
                    </p>

                    {/* Carrier Pill Badges for International Courier */}
                    {svc.carriers && (
                      <div className="carrier-badges-row">
                        {svc.carriers.map((carrier, cIdx) => (
                          <span key={cIdx} className="carrier-badge-pill">
                            {carrier}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '1.5rem 0' }}>
                      {svc.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#fff' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className="btn-secondary-outline" 
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}
                    onClick={onOpenQuote}
                  >
                    {svc.ctaText} <ArrowRight size={16} />
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
