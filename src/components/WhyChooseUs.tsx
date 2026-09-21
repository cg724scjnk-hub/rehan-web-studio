import React from 'react';
import { motion } from 'motion/react';
import { Clock, Sparkles, Search, Coins, ShieldCheck, Check, MessageSquare } from 'lucide-react';
import { WHY_CHOOSE_US_DATA, getWhatsAppUrl } from '../data/agencyData';

const iconMap: Record<string, React.ElementType> = {
  Clock,
  Sparkles,
  Search,
  Coins,
  ShieldCheck
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#070b15] border-y border-slate-800/80 relative overflow-hidden">
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Rehan Web Studio?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We don't use clunky generic templates or hand your project off to junior interns. Every pixel and line of code is personally engineered for raw performance and high conversions.
          </p>
        </div>

        {/* 5 Reasons Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            const isGreenAccent = index === 0 || index === 3;

            return (
              <motion.div
                key={item.id}
                id={`why-card-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-6 sm:p-7 rounded-3xl bg-[#090f1e]/80 border ${
                  isGreenAccent ? 'border-emerald-500/30' : 'border-blue-500/30'
                } hover:border-slate-600 transition-all duration-300 relative group flex flex-col justify-between backdrop-blur-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isGreenAccent
                          ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                          : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isGreenAccent
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                      isGreenAccent ? 'text-emerald-400' : 'text-blue-400'
                    }`}
                  >
                    {item.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {item.metricLabel}
                  </span>
                  <span
                    className={`text-xl font-black font-heading ${
                      isGreenAccent ? 'text-emerald-400' : 'text-blue-400'
                    }`}
                  >
                    {item.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Quick CTA Bento Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0c1a36] via-[#091326] to-[#060c18] border border-blue-500/40 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 inline-block mb-4">
                Direct Founder Guarantee
              </span>
              <h3 className="text-2xl font-black text-white mb-2 font-heading">
                Ready to beat your competition?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Direct WhatsApp contact with Rehan. Get a free website and SEO audit for your current business within 15 minutes.
              </p>
            </div>

            <a
              id="why-us-whatsapp-cta"
              href={getWhatsAppUrl("Hi Rehan, I want a free quick audit for my business website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-950/60 transition-all active:scale-95 border border-emerald-400/30"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Claim Free WhatsApp Audit</span>
            </a>
          </div>
        </div>

        {/* Studio vs Average Freelancer Comparison Table */}
        <div className="rounded-3xl bg-[#090f1e]/90 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-7 border-b border-slate-800">
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              The Rehan Web Studio Standard vs The Rest
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              See why local and international business owners choose us over traditional agencies and generic freelancers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#060b17] text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Feature</th>
                  <th className="py-4 px-4 sm:px-6 text-emerald-400 font-bold bg-emerald-500/5">Rehan Web Studio</th>
                  <th className="py-4 px-4 sm:px-6 text-slate-400">Average Freelancer / Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-white">Delivery Turnaround</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-400 bg-emerald-500/5 flex items-center gap-2">
                    <Check className="w-4 h-4" /> 48 hours to 7 days guaranteed
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">3 to 6 weeks with frequent delays</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-white">SEO & Google Ranking Setup</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-400 bg-emerald-500/5 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Built-in schema, GMB & keyword dominance
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">Charged as expensive extra or ignored</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-white">Direct WhatsApp Support</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-400 bg-emerald-500/5 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Direct chat with founder Rehan
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">Slow email tickets & junior account managers</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-white">Mobile Speed & Core Web Vitals</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-400 bg-emerald-500/5 flex items-center gap-2">
                    <Check className="w-4 h-4" /> 95+ PageSpeed & instant loading
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">Bloated slow templates (score &lt; 50)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
