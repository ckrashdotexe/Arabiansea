import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ activeSection, setActiveSection, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'network', label: 'Global Network' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Offices & Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Corporate Micro-Bar */}
      <div className="top-info-bar">
        <div className="container-full top-info-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={13} style={{ color: 'var(--ascs-red)' }} />
              Dubai: Naif St, Deira | Tel: {COMPANY_INFO.offices.dubai.phone}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={13} style={{ color: 'var(--ascs-red)' }} />
              Sharjah: Petrofac House | Tel: {COMPANY_INFO.offices.sharjah.phone}
            </span>
          </div>

          <div className="top-info-arabic">
            ارابيان سي للتخليص والشحن ذ.م.م
          </div>
        </div>
      </div>

      {/* Main Header / Sticky Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-full nav-container-full">
          {/* Official Brand Logo Lockup */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Arabian Sea Clearing and Shipping Home"
          >
            <Logo variant="horizontal" />
          </a>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-menu">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-item-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action CTA & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="btn-ascs-red" onClick={onOpenQuote}>
              Request a Quote <ArrowRight size={16} />
            </button>

            <button 
              className="mobile-hamburger" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="mobile-drawer-overlay">
            <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Logo variant="horizontal" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mobile-drawer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} style={{ color: 'var(--ascs-red)' }} />
                </a>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                className="btn-ascs-red" 
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
              >
                Request a Quote <ArrowRight size={16} />
              </button>

              <div style={{ marginTop: '1.2rem', fontSize: '0.82rem', color: 'var(--text-dim)', textAlign: 'center' }}>
                Dubai: 04-2729388 • Sharjah: +971 6 568 6515
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
