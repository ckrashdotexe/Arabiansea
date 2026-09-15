import React from 'react';
import { Globe, Navigation, Compass, MapPin } from 'lucide-react';

export default function GlobalNetwork() {
  const tradeLanes = [
    { region: "Middle East & GCC", route: "Direct Overland & Feeder Links" },
    { region: "Europe & UK", route: "Major Air Cargo & Ocean Container Hubs" },
    { region: "Asia & Subcontinent", route: "Primary Transshipment Corridors" },
    { region: "Africa", route: "East & Southern Maritime Routes" },
    { region: "The Americas", route: "Intercontinental Air & Ocean Links" }
  ];

  return (
    <section id="network" className="section-padding-wide network-world-fullscreen">
      <div className="container-full">
        <div className="section-header-wide">
          <div className="eyebrow-pill" style={{ marginBottom: '1.2rem' }}>
            GLOBAL CONNECTIVITY
          </div>
          <h2>From the UAE to Global Trade Corridors.</h2>
          <p>Strategically positioned in Dubai to bridge international cargo flows across key worldwide destinations.</p>
        </div>

        {/* Full-Width SVG Route Map */}
        <div className="world-map-svg-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--ascs-red)', boxShadow: '0 0 15px var(--ascs-red)' }}></div>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>ORIGIN HUB: United Arab Emirates (Dubai Operations Hub)</span>
            </div>

            <span className="eyebrow-pill" style={{ fontSize: '0.75rem' }}>
              International Multimodal Network
            </span>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', background: 'rgba(8, 11, 36, 0.95)', padding: '2.5rem 1.5rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <svg viewBox="0 0 1000 480" fill="none" style={{ width: '100%', height: 'auto' }}>
              {/* Stylized Continents */}
              <path d="M 120 120 Q 220 80 300 150 T 220 260 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" />
              <path d="M 440 100 Q 560 70 630 140 T 490 230 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" />
              <path d="M 660 130 Q 820 90 920 180 T 780 320 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" />
              <path d="M 500 250 Q 600 260 570 400 T 480 340 Z" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" />

              {/* UAE ASCS Hub Focal Point */}
              <circle cx="560" cy="200" r="9" fill="#E52B38" />
              <circle cx="560" cy="200" r="22" stroke="rgba(229, 43, 56, 0.5)" strokeWidth="2" />
              <text x="560" y="238" fill="#FFFFFF" fontSize="12" fontWeight="900" textAnchor="middle">UAE (DUBAI HUB)</text>

              {/* Trade Route Arcs */}
              {/* Route to Europe */}
              <path d="M 560 200 Q 480 130 460 110" stroke="#E52B38" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="460" cy="110" r="5" fill="#FFFFFF" />
              <text x="440" y="98" fill="#CBD5E1" fontSize="11" fontWeight="700">EUROPE</text>

              {/* Route to Asia */}
              <path d="M 560 200 Q 720 150 820 170" stroke="#E52B38" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="820" cy="170" r="5" fill="#FFFFFF" />
              <text x="830" y="175" fill="#CBD5E1" fontSize="11" fontWeight="700">ASIA-PACIFIC</text>

              {/* Route to Africa */}
              <path d="M 560 200 Q 530 290 530 350" stroke="#E52B38" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="530" cy="350" r="5" fill="#FFFFFF" />
              <text x="540" y="368" fill="#CBD5E1" fontSize="11" fontWeight="700">AFRICA</text>

              {/* Route to Americas */}
              <path d="M 560 200 Q 320 120 220 170" stroke="#E52B38" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="220" cy="170" r="5" fill="#FFFFFF" />
              <text x="200" y="158" fill="#CBD5E1" fontSize="11" fontWeight="700">AMERICAS</text>

              {/* Route to GCC & Middle East */}
              <path d="M 560 200 Q 600 225 640 215" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="640" cy="215" r="5" fill="#E52B38" />
              <text x="650" y="232" fill="#CBD5E1" fontSize="11" fontWeight="700">GCC & MIDDLE EAST</text>
            </svg>
          </div>

          {/* Trade Lanes Ticker */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginTop: '2.5rem' }}>
            {tradeLanes.map((tl, idx) => (
              <div key={idx} style={{ background: 'rgba(8, 11, 36, 0.75)', padding: '1rem 1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 800 }}>{tl.region}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>{tl.route}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
