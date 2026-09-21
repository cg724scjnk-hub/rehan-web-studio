import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { FOUNDER_INFO, getWhatsAppUrl } from '../data/agencyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080e]/95 backdrop-blur-md border-b border-blue-900/30 shadow-2xl shadow-black/80 py-3.5'
          : 'bg-[#06080e]/70 backdrop-blur-sm py-4 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* REHAN on left with logo R & 2026 PRO - Verified badge */}
          <div className="flex items-center gap-3">
            <a
              id="nav-logo"
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              {/* Logo R: Glowing navy/blue gradient badge */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center text-white font-black text-xl tracking-wider">
                  R
                </div>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-none sm:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#06080e]"></span>
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors font-heading whitespace-nowrap">
                  REHAN
                </span>
                <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 whitespace-nowrap shrink-0">✓ Verified</span>
              </div>
            </a>
          </div>

          {/* Right side: Menu links and WhatsApp icon/button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Nav Menu */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0b1120]/80 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* WhatsApp CTA with icon */}
            <a
              id="header-whatsapp-btn"
              href={getWhatsAppUrl("Hi Rehan, I want to chat about a website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 active:scale-95 transition-all duration-200 shadow-lg shadow-emerald-950/60 border border-emerald-400/40 group"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-3 h-3 fill-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="hidden xs:inline">Chat on WhatsApp</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-slate-800 bg-[#070b15]/98 backdrop-blur-2xl px-5 pt-4 pb-6 mt-3 space-y-3"
        >
          {/* Badge inside mobile drawer */}
          <div className="sm:hidden flex items-center justify-between pb-2 border-b border-slate-800/60">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>2026 PRO - Verified</span>
            </div>
            <span className="text-[11px] text-slate-400">Kahuta, Pakistan</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              id="mobile-drawer-whatsapp-btn"
              href={getWhatsAppUrl("Hi Rehan, I want to discuss a new website project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/50"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Chat on WhatsApp ({FOUNDER_INFO.phone})</span>
            </a>
            <p className="text-center text-[11px] text-slate-400">
              Direct founder access • Instant quote within minutes
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
