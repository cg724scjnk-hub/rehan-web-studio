import React, { useState } from 'react';
import { MessageSquare, MapPin, Globe, Sparkles } from 'lucide-react';
import { FOUNDER_INFO, getWhatsAppUrl } from '../data/agencyData';

export const ContactSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Full Business Website');
  const [selectedTimeline, setSelectedTimeline] = useState('Within 1-2 Weeks');
  const [clientName, setClientName] = useState('');
  const [clientNote, setClientNote] = useState('');

  const services = [
    'One Page Business Site',
    'Full Business Website',
    'E-commerce Online Store',
    'Landing Page Funnel',
    'SEO & Google Ranking'
  ];

  const timelines = [
    'ASAP (Rush 48h)',
    'Within 1-2 Weeks',
    'Planning Next Month'
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Rehan, I'm reaching out through Rehan Web Studio.
My Name: ${clientName || 'Business Owner'}
Interested Service: ${selectedService}
Target Timeline: ${selectedTimeline}
Project Notes: ${clientNote || 'Looking to discuss pricing and next steps.'}`;

    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#06080e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Founder Communication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
              Let's Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Next Big Asset</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Skip agency middlemen and ticket queues. Reach out directly to Rehan on WhatsApp for a quick consultation, project quotation, or SEO evaluation.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* WhatsApp Card */}
              <a
                id="contact-whatsapp-direct-card"
                href={getWhatsAppUrl("Hi Rehan, let's talk about my business website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-3xl bg-[#090f1e]/90 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200 group shadow-lg shadow-black/60"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Direct WhatsApp
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-heading">
                    {FOUNDER_INFO.phone}
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    Online & Ready to Chat
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-[#090f1e]/60 border border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    HQ Location
                  </div>
                  <div className="text-base font-bold text-white font-heading">
                    {FOUNDER_INFO.location}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Serving Islamabad, Rawalpindi & Worldwide
                  </div>
                </div>
              </div>

              {/* Freelance Availability */}
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-[#090f1e]/60 border border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Work Status
                  </div>
                  <div className="text-base font-bold text-white font-heading">
                    {FOUNDER_INFO.status}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    High-speed delivery across all time zones
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Builder Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090f1e]/90 border border-slate-800/90 shadow-2xl relative backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                    Quick Project Estimator
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Select your requirements to compose an instant WhatsApp inquiry.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Instant Reply</span>
                </div>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-6">
                {/* Select Service */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    What service do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                          selectedService === srv
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40'
                            : 'bg-[#060b17] text-slate-300 hover:bg-[#101b34] border border-slate-800'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Timeline */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Target Launch Timeline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTimeline(time)}
                        className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                          selectedTimeline === time
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 border border-emerald-400/40'
                            : 'bg-[#060b17] text-slate-300 hover:bg-[#101b34] border border-slate-800'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Your Name or Brand
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Asad from Rawalpindi"
                    className="w-full px-4 py-3 rounded-2xl bg-[#060b17] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  />
                </div>

                {/* Details / Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Project Overview or Reference Websites (Optional)
                  </label>
                  <textarea
                    id="contact-notes-input"
                    rows={3}
                    value={clientNote}
                    onChange={(e) => setClientNote(e.target.value)}
                    placeholder="Tell Rehan about your goals, products, or reference websites..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#060b17] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  id="contact-form-whatsapp-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 active:scale-95 text-white font-bold text-base shadow-xl shadow-emerald-950/70 border border-emerald-400/40 transition-all duration-200"
                >
                  <MessageSquare className="w-5 h-5 fill-white/20" />
                  <span>Chat on WhatsApp</span>
                </button>

                <p className="text-center text-xs text-slate-400">
                  Clicking will open WhatsApp with your customized message ready to send.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
