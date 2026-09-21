import React from 'react';
import { motion } from 'motion/react';
import { Layout, ShoppingBag, Zap, TrendingUp, Check, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { SERVICES_DATA, getWhatsAppUrl } from '../data/agencyData';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  ShoppingBag,
  Zap,
  TrendingUp,
};

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#06080e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Services Built To <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Scale Your Sales</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We combine high-performance engineering, conversion psychology, and aggressive Google SEO so your business outranks competitors effortlessly.
          </p>
        </div>

        {/* 4 Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Layout;
            const whatsappText = `Hi Rehan, I am interested in your "${service.title}" service for my business. Can you share details?`;
            const isGreenAccent = index % 2 === 1;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl bg-[#090f1e]/80 border ${
                  isGreenAccent ? 'hover:border-emerald-500/50' : 'hover:border-blue-500/50'
                } border-slate-800/90 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 flex flex-col justify-between backdrop-blur-md`}
              >
                {/* Glow highlight on hover */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 rounded-tr-3xl blur-3xl transition-all ${
                    isGreenAccent ? 'bg-emerald-500/5 group-hover:bg-emerald-500/15' : 'bg-blue-500/5 group-hover:bg-blue-500/15'
                  }`}
                ></div>

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                        isGreenAccent
                          ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white'
                          : 'bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        isGreenAccent
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-white mb-2 transition-colors ${
                      isGreenAccent ? 'group-hover:text-emerald-300' : 'group-hover:text-blue-300'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isGreenAccent
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For pill */}
                  <div className="p-3.5 rounded-2xl bg-[#060b17] border border-slate-800 mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Best suited for:
                    </span>
                    <span className="text-xs text-slate-200 font-medium">
                      {service.idealFor}
                    </span>
                  </div>
                </div>

                {/* Bottom WhatsApp CTA for this Service */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    id={`service-whatsapp-link-${service.id}`}
                    href={getWhatsAppUrl(whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all group-hover:translate-x-1 ${
                      isGreenAccent
                        ? 'text-emerald-400 hover:text-emerald-300'
                        : 'text-blue-400 hover:text-blue-300'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire for this service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <span className="text-[11px] text-slate-400 font-medium">
                    Fast WhatsApp Reply
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
