import React from 'react';

/**
 * Official Arabian Sea Clearing and Shipping L.L.C Logo Component
 * Faithfully recreated from the company emblem:
 * - Globe with longitude/latitude and "A S C S" top arc segments
 * - Forward-facing container vessel cutting through oceanic waves
 * - Scalloped water waves
 * - Arabic: ارابيان سي للتخليص والشحن ذ.م.م
 * - English: ARABIAN SEA CLEARING AND SHIPPING L.L.C
 */
export default function Logo({ 
  variant = 'full', // 'full' | 'emblem' | 'horizontal' | 'badge'
  size = 'medium',  // 'small' | 'medium' | 'large'
  className = '' 
}) {
  // Emblem Vector Graphic
  const Emblem = ({ width = 50, height = 50 }) => (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 210" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="ascs-emblem-svg"
      style={{ flexShrink: 0 }}
    >
      {/* Globe Outer Circle */}
      <circle cx="100" cy="85" r="76" stroke="#FFFFFF" strokeWidth="3" fill="rgba(27, 34, 89, 0.95)" />
      
      {/* Globe Meridians & Parallels */}
      {/* Top Arc Divider for ASCS letters */}
      <path d="M 28 65 Q 100 45 172 65" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      {/* Top vertical dividers for A S C S sectors */}
      <line x1="64" y1="20" x2="64" y2="60" stroke="#FFFFFF" strokeWidth="2.5" />
      <line x1="100" y1="10" x2="100" y2="55" stroke="#FFFFFF" strokeWidth="2.5" />
      <line x1="136" y1="20" x2="136" y2="60" stroke="#FFFFFF" strokeWidth="2.5" />

      {/* Letters A S C S in upper sectors */}
      <text x="46" y="46" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">A</text>
      <text x="82" y="38" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">S</text>
      <text x="118" y="38" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">C</text>
      <text x="154" y="46" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">S</text>

      {/* Globe Longitudinal Curves (behind the ship) */}
      <path d="M 100 10 C 60 40 60 130 100 160" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 100 10 C 140 40 140 130 100 160" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 30 100 Q 100 85 170 100" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Forward-Facing Cargo Vessel / Ship */}
      {/* Ship Superstructure / Bridge Tower */}
      <path d="M 88 56 L 90 42 L 100 36 L 110 42 L 112 56 Z" fill="#1b2259" stroke="#FFFFFF" strokeWidth="2.5" />
      <line x1="100" y1="36" x2="100" y2="28" stroke="#FFFFFF" strokeWidth="2.5" />
      {/* Radar / Mast Crossbar */}
      <line x1="94" y1="32" x2="106" y2="32" stroke="#FFFFFF" strokeWidth="2" />
      
      {/* Bridge Windows & Main Cabin */}
      <rect x="80" y="56" width="40" height="24" rx="2" fill="#1b2259" stroke="#FFFFFF" strokeWidth="2.5" />
      <line x1="84" y1="64" x2="116" y2="64" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 2" />
      
      {/* Ship Bow & Hull cutting forward */}
      <path 
        d="M 72 80 L 128 80 L 118 126 L 100 138 L 82 126 Z" 
        fill="#1b2259" 
        stroke="#FFFFFF" 
        strokeWidth="3" 
      />
      {/* Central Hull Bow Line & T-Stem */}
      <line x1="100" y1="80" x2="100" y2="136" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M 78 98 L 100 106 L 122 98" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />

      {/* Stylized Ocean Scallop Waves below ship */}
      {/* Row 1 */}
      <path d="M 46 142 Q 64 134 82 142 Q 100 134 118 142 Q 136 134 154 142" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      {/* Row 2 (scallops) */}
      <path d="M 52 152 Q 68 144 84 152 Q 100 144 116 152 Q 132 144 148 152" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      {/* Row 3 (scallops) */}
      <path d="M 60 162 Q 74 156 88 162 Q 100 156 112 162 Q 126 156 140 162" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
    </svg>
  );

  // Horizontal Header Variant (for sticky navbar)
  if (variant === 'horizontal') {
    return (
      <div className={`ascs-logo-horizontal ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        <Emblem width={46} height={48} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          {/* Arabic Name */}
          <span 
            style={{ 
              fontFamily: "'Amiri', 'Cairo', 'Segoe UI', Tahoma, sans-serif", 
              fontSize: '0.95rem', 
              color: '#FFFFFF', 
              fontWeight: 700,
              letterSpacing: '0.01em',
              direction: 'rtl',
              textAlign: 'left'
            }}
          >
            ارابيان سي للتخليص والشحن ذ.م.م
          </span>
          {/* English Name with Official Red */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginTop: '2px' }}>
            <span style={{ color: '#E52B38', fontWeight: 900, fontSize: '0.88rem', letterSpacing: '0.04em' }}>
              ARABIAN SEA
            </span>
            <span style={{ color: '#E52B38', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.04em' }}>
              CLEARING AND SHIPPING L.L.C
            </span>
          </div>
          <div style={{ height: '2px', background: '#E52B38', width: '100%', marginTop: '2px', borderRadius: '1px' }}></div>
        </div>
      </div>
    );
  }

  // Emblem-only variant
  if (variant === 'emblem') {
    const s = size === 'small' ? 36 : size === 'large' ? 84 : 52;
    return <Emblem width={s} height={s * 1.05} />;
  }

  // Full Emblem + Arabic + Red English Lockup (Hero / Footer / Modals)
  return (
    <div className={`ascs-logo-full ${className}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Emblem width={size === 'large' ? 140 : size === 'small' ? 64 : 96} height={size === 'large' ? 148 : size === 'small' ? 68 : 102} />
      
      {/* Arabic Script */}
      <div 
        style={{ 
          fontFamily: "'Amiri', 'Cairo', 'Traditional Arabic', sans-serif", 
          fontSize: size === 'large' ? '1.85rem' : size === 'small' ? '1.05rem' : '1.35rem', 
          color: '#FFFFFF', 
          fontWeight: 700,
          marginTop: '0.85rem',
          direction: 'rtl'
        }}
      >
        ارابيان سي للتخليص والشحن ذ.م.م
      </div>

      {/* English Branding */}
      <div style={{ marginTop: '0.4rem', width: '100%', maxWidth: size === 'large' ? '540px' : '380px' }}>
        <div style={{ 
          color: '#E52B38', 
          fontWeight: 900, 
          fontSize: size === 'large' ? '1.3rem' : size === 'small' ? '0.78rem' : '0.95rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          ARABIAN SEA <span style={{ fontWeight: 800 }}>CLEARING AND SHIPPING L.L.C</span>
        </div>
        <div style={{ height: '2.5px', background: '#E52B38', width: '100%', marginTop: '3px', borderRadius: '2px' }}></div>
      </div>

      {/* Optional Contact Subline (from actual card) */}
      {variant === 'card-banner' && (
        <div style={{ fontSize: '0.72rem', color: '#CBD5E1', marginTop: '0.5rem', fontWeight: 600 }}>
          Tel: 04-2729388 , Fax: 04-2725233 P.O.Box: 27597 Naif St Deira Dubai U.A.E
        </div>
      )}
    </div>
  );
}
