import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, Sparkles, MessageSquare } from 'lucide-react';
import { PRICING_PLANS, getWhatsAppUrl } from '../data/agencyData';

export const PricingSection: React.FC = () => {
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#070b15] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Simple & Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Invest in a Website That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Pays For Itself</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8">
            No surprise monthly software fees. No hidden markups. Pick your plan and launch your high-converting business asset.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#090f1e] border border-slate-800 shadow-xl">
            <button
              id="currency-pkr-btn"
              type="button"
              onClick={() => setCurrency('PKR')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                currency === 'PKR'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PKR (Pakistani Rupee)
            </button>
            <button
              id="currency-usd-btn"
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                currency === 'USD'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD (Overseas / International)
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan, index) => {
            const isStandard = plan.isPopular;
            const price = currency === 'PKR' ? plan.pricePKR : plan.priceUSD;

            return (
              <motion.div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-md ${
                  isStandard
                    ? 'bg-[#0b1428] border-2 border-blue-500 shadow-2xl shadow-blue-500/20 lg:-translate-y-3 z-10'
                    : 'bg-[#090f1e]/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Ribbon */}
                {isStandard && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg shadow-blue-600/40 border border-blue-400/40">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular Choice
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-white font-heading">{plan.name}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#060b17] text-slate-300 border border-slate-700">
                      {plan.deliveryTime}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white font-heading">
                        {price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        / one-time investment
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-2">
                      {plan.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      What's Included:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}

                    {/* Not included items */}
                    {plan.notIncluded && plan.notIncluded.map((notFeat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-500 line-through">
                        <div className="w-4 h-4 rounded-full bg-slate-800/80 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 stroke-[2]" />
                        </div>
                        <span>{notFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="pt-4 border-t border-slate-800">
                  <a
                    id={`btn-order-${plan.id}`}
                    href={getWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 shadow-md ${
                      isStandard
                        ? 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-emerald-950/60 border border-emerald-400/40'
                        : 'bg-[#0f1b34] hover:bg-[#16274b] text-white border border-slate-700'
                    } active:scale-95`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Order {plan.name} on WhatsApp</span>
                  </a>

                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    50% Milestone Start • Revisions Included
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Scope Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#091326] via-[#0b1730] to-[#07191e] border border-blue-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1 font-heading">
              Need a Custom Web App, Portal, or Complex API Integration?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Have unique requirements like doctor telemedicine, custom CRM, or multi-vendor platforms? Let's formulate a tailored roadmap.
            </p>
          </div>

          <a
            id="custom-scope-whatsapp-btn"
            href={getWhatsAppUrl("Hi Rehan, I need a custom quote for a unique website project. Can we talk?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0e1a33] hover:bg-[#152549] text-white font-semibold text-sm border border-slate-700 shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Request Custom Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
};
