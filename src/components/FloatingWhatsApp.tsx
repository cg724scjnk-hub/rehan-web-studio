import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { FOUNDER_INFO, getWhatsAppUrl } from '../data/agencyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
    >
      {/* Mini notification popup */}
      {showTooltip && (
        <div
          id="floating-whatsapp-tooltip"
          className="relative max-w-xs bg-[#090f1e]/95 border border-emerald-500/40 p-3 rounded-2xl shadow-2xl text-xs text-slate-200 hidden sm:flex items-start gap-2.5 backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0 animate-ping"></div>
          <div className="flex-1">
            <div className="font-bold text-white text-[11px] mb-0.5">
              Rehan • Online Now
            </div>
            <div className="text-[11px] text-slate-300 leading-tight">
              Need a quick quote or free SEO audit? Chat directly on WhatsApp.
            </div>
          </div>
          <button
            id="floating-whatsapp-close-btn"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl("Hi Rehan, I want to chat about a website project on WhatsApp.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-none sm:animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
