import React from 'react';
import { ShieldCheck, Compass, Anchor, Clock, ArrowRight } from 'lucide-react';

export default function WhyUs({ onOpenQuote }) {
  const handleQuoteClick = () => {
    const el = document.getElementById('quote-enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuote) {
      onOpenQuote();
    }
  };

  const pillars = [
    {
      icon: Compass,
      title: "Sovereign Gulf Precision",
      description: "Rooted in Dubai, UAE, bringing structured freight handling and regional logistics expertise to global shipping."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise B2B Focus",
      description: "Dedicated to commercial shippers, industrial cargo, and business logistics requirements with single-point accountability."
    },
    {
      icon: Anchor,
      title: "Multimodal Coordination",
      description: "Seamlessly combining air cargo, sea freight, and international courier networks tailored to your specific timeframe."
    },
    {
      icon: Clock,
      title: "Transparent Communication",
      description: "Clear documentation management, straightforward tariff quoting, and proactive shipment status updates."
    }
  ];

  return (
    <section id="why-us" className="section-padding-wide">
      <div className="container-full">
        <div className="section-header-wide">
          <div className="eyebrow-pill" style={{ marginBottom: '1.2rem' }}>
            WHY ARABIAN SEA SHIPPING
          </div>
          <h2>Engineered for Business Trade Reliability.</h2>
          <p>We provide enterprise clients with the clarity, precision, and coordination needed to move international freight seamlessly.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="ascs-glass-panel" style={{ padding: '2.5rem' }}>
                <div className="trust-icon-container" style={{ width: '56px', height: '56px', marginBottom: '1.5rem' }}>
                  <IconComponent size={26} />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: '900', marginBottom: '0.8rem', color: '#FFFFFF' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.65' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="ascs-glass-panel" style={{ padding: '3rem', textAlign: 'center', borderColor: 'var(--ascs-red)' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem', color: '#FFFFFF' }}>
            Ready to Discuss Your International Shipment?
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
            Contact our Dubai corporate headquarters today to receive professional rate coordination for your air, sea, or express courier cargo.
          </p>

          <button className="btn-ascs-red" onClick={handleQuoteClick}>
            Request Shipping Rate Quote <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
