import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#06080e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Local Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Trusted by Business Owners in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Rawalpindi & Islamabad</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Hear from local entrepreneurs whose digital revenue and foot traffic surged after launching with Rehan Web Studio.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-[#090f1e]/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 relative group backdrop-blur-md"
            >
              <div>
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/30">
                    {item.projectType}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-200 leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white truncate font-heading">
                      {item.name}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {item.role}, {item.business}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Community Trust Banner */}
        <div className="max-w-2xl mx-auto text-center p-4 rounded-2xl bg-[#090f1e]/60 border border-slate-800 text-xs text-slate-300">
          Serving businesses in Kahuta, Rawalpindi, Islamabad, Lahore, Karachi, and global clients in UAE, UK, & USA.
        </div>
      </div>
    </section>
  );
};
