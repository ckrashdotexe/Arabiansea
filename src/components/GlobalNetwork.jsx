import React from 'react';
import { Globe, Navigation, Compass, MapPin } from 'lucide-react';

export default function GlobalNetwork() {
  const tradeLanes = [
    { region: "Middle East & GCC", route: "Direct Overland & Feeder Links" },
    { region: "Europe", route: "Air & Ocean Cargo Gateways" },
    { region: "Asia & Subcontinent", route: "Transshipment Trade Corridors" },
    { region: "Africa", route: "East & West Ocean Routes" },
    { region: "The Americas", route: "Transatlantic & Transpacific Interline" }
  ];

  return (
    <section className="network-section-dark">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            GLOBAL CONNECTIVITY
          </div>
          <h2 style={{ fontSize: '2.8rem' }}>From Sharjah to Global Markets.</h2>
          <p>Strategically positioned in the United Arab Emirates to connect your commercial shipments across international trade corridors.</p>
        </div>

        {/* World Map SVG with Animated Glowing Gulf Route Lines */}
        <div className="world-map-svg-container">
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--gold-light)', boxShadow: '0 0 10px var(--gold-primary)' }}></div>
              <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#fff' }}>ORIGIN HUB: Sharjah (UAE)</span>
            </div>

            <span className="eyebrow-badge" style={{ fontSize: '0.7rem' }}>
              Multimodal International Network
            </span>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', background: 'rgba(6, 10, 23, 0.9)', padding: '2rem 1rem' }}>
            <svg viewBox="0 0 900 450" fill="none" style={{ width: '100%', height: 'auto' }}>
              {/* Simplified Stylized World Continents Background Shapes */}
              <path d="M 120 120 Q 200 80 280 140 T 200 240 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.08)" />
              <path d="M 400 100 Q 520 70 580 140 T 450 220 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.08)" />
              <path d="M 600 130 Q 750 90 840 180 T 700 300 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.08)" />
              <path d="M 460 240 Q 540 250 520 380 T 440 320 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.08)" />

              {/* UAE / Sharjah Hub Focal Node */}
              <circle cx="510" cy="190" r="8" fill="#E5C158" className="anim-pulse" />
              <circle cx="510" cy="190" r="18" stroke="rgba(229, 193, 88, 0.4)" strokeWidth="1.5" />
              <text x="510" y="222" fill="#E5C158" fontSize="11" fontWeight="800" textAnchor="middle">SHARJAH, UAE</text>

              {/* Route Arcs Originating from Sharjah */}
              {/* Route to Europe */}
              <path d="M 510 190 Q 450 130 430 110" stroke="var(--gold-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="430" cy="110" r="4" fill="#F8FAFC" />
              <text x="410" y="100" fill="#94A3B8" fontSize="10" fontWeight="600">EUROPE</text>

              {/* Route to Asia */}
              <path d="M 510 190 Q 640 150 720 160" stroke="var(--gold-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="720" cy="160" r="4" fill="#F8FAFC" />
              <text x="730" y="165" fill="#94A3B8" fontSize="10" fontWeight="600">ASIA</text>

              {/* Route to Africa */}
              <path d="M 510 190 Q 480 260 480 320" stroke="var(--gold-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="480" cy="320" r="4" fill="#F8FAFC" />
              <text x="490" y="335" fill="#94A3B8" fontSize="10" fontWeight="600">AFRICA</text>

              {/* Route to Americas */}
              <path d="M 510 190 Q 300 120 200 160" stroke="var(--gold-primary)" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="200" cy="160" r="4" fill="#F8FAFC" />
              <text x="180" y="150" fill="#94A3B8" fontSize="10" fontWeight="600">AMERICAS</text>

              {/* Route to Middle East / GCC */}
              <path d="M 510 190 Q 540 210 570 200" stroke="var(--gold-primary)" strokeWidth="2" />
              <circle cx="570" cy="200" r="4" fill="#F8FAFC" />
              <text x="580" y="215" fill="#94A3B8" fontSize="10" fontWeight="600">GCC & MIDDLE EAST</text>
            </svg>
          </div>

          {/* Trade Lanes Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {tradeLanes.map((tl, idx) => (
              <div key={idx} style={{ background: 'rgba(6, 10, 23, 0.6)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)', fontWeight: '700' }}>{tl.region}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{tl.route}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
