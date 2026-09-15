import React, { useState, useEffect } from 'react';
import { Anchor, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ activeSection, setActiveSection, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' }
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
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo & Wordmark */}
        <a 
          href="#hero" 
          className="brand-wordmark" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="brand-symbol">
            <Anchor size={24} />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">Arabian Sea</span>
            <span className="brand-subtitle">Clearing & Shipping L.L.C</span>
          </div>
        </a>

        {/* Desktop Menu Links */}
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

        {/* Right CTA Button & Mobile Hamburger Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-primary-gold" onClick={onOpenQuote}>
            Request a Quote <ArrowRight size={16} />
          </button>

          <button 
            className="mobile-hamburger" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer-overlay">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
                <ChevronRight size={18} style={{ color: 'var(--gold-primary)' }} />
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-glass)' }}>
            <button 
              className="btn-primary-gold" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                setMobileOpen(false);
                onOpenQuote();
              }}
            >
              Request a Quote <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
