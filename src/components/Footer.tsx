import React from 'react';
import { MessageSquare, MapPin, Globe, CheckCircle, ArrowUp } from 'lucide-react';
import { FOUNDER_INFO, getWhatsAppUrl } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#04060a] border-t border-slate-850 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-black text-base">
                R
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-heading">
                REHAN
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>2026 PRO - Verified</span>
              </span>
            </div>

            <p className="text-sm text-slate-200 font-semibold">
              Rehan Web Studio
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Founder: Rehan, a professional Website Developer & SEO Expert from Kahuta, Punjab, Pakistan.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#080e1c] border border-emerald-500/30 text-emerald-300">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{FOUNDER_INFO.status}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services Grid
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-blue-400 transition-colors">
                  Recent Work & Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  Transparent Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Offerings */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>Business Website Development</li>
              <li>E-commerce Online Store</li>
              <li>High-Converting Landing Pages</li>
              <li>Google #1 SEO & Local GMB</li>
              <li>Core Web Vitals & Speed 100</li>
              <li>Conversion Rate Optimization</li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct WhatsApp */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Kahuta, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {FOUNDER_INFO.phone}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-whatsapp-btn"
                href={getWhatsAppUrl("Hi Rehan, I want to discuss a website project for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/60 border border-emerald-400/40 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Rehan Web Studio • Founder: Rehan (Kahuta, Punjab). Worldwide Remote - Available for freelance.
          </div>

          <button
            id="scroll-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
