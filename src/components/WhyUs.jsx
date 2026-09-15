import React from 'react';
import { ShieldCheck, Compass, Anchor, Clock, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';

export default function WhyUs({ onOpenQuote }) {
  const pillars = [
    {
      icon: Compass,
      title: "Sovereign Gulf Precision",
      description: "Rooted in Sharjah, UAE, bringing structured freight handling and regional logistics expertise to global shipping."
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
    <section id="why-us" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            WHY ARABIAN SEA SHIPPING
          </div>
          <h2>Engineered for Business Trade Reliability.</h2>
          <p>We provide enterprise clients with the clarity, precision, and coordination needed to move international freight seamlessly.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '2.2rem' }}>
                <div className="trust-icon-box" style={{ marginBottom: '1.5rem' }}>
                  <IconComponent size={26} />
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.8rem', color: '#fff' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="glass-card" style={{ padding: '3rem', background: 'linear-gradient(135deg, var(--bg-navy-mid) 0%, var(--bg-dark) 100%)', borderColor: 'var(--border-gold-bright)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#fff' }}>
            Ready to Discuss Your International Shipment?
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
            Contact our Sharjah headquarters today to receive professional rate coordination for your air, sea, or express courier cargo.
          </p>

          <button className="btn-primary-gold" onClick={onOpenQuote}>
            Request Shipping Rate Quote <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
