import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  ArrowDown, 
  Sparkles, 
  Bot, 
  TrendingUp, 
  Zap, 
  Globe, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck,
  Code2,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { FOUNDER_INFO, CLIENT_STATS, getWhatsAppUrl } from '../data/agencyData';

export const Hero: React.FC = () => {
  // Green and blue neon pill badges with icons as requested
  const neonPills = [
    {
      label: 'Founder: Rehan Website Developer & SEO Expert',
      icon: Sparkles,
      type: 'green',
      isPrimary: true
    },
    {
      label: 'AI Web Development',
      icon: Bot,
      type: 'blue'
    },
    {
      label: 'SEO Specialist',
      icon: TrendingUp,
      type: 'green'
    },
    {
      label: 'Landing Pages',
      icon: Zap,
      type: 'blue'
    },
    {
      label: 'Worldwide Remote',
      icon: Globe,
      type: 'green'
    },
    {
      label: 'Kahuta Pakistan',
      icon: MapPin,
      type: 'blue'
    }
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#06080e]"
    >
      {/* Dark Navy / Black glowing backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep blue and emerald ambient light flares */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] sm:w-[900px] sm:h-[550px] bg-blue-600/15 blur-[140px] rounded-full"></div>
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full"></div>
        <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

        {/* Subtle high-tech grid lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Below Header Neon Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-5xl mx-auto mb-8 sm:mb-10"
        >
          {neonPills.map((pill, idx) => {
            const Icon = pill.icon;
            const isGreen = pill.type === 'green';

            return (
              <div
                key={idx}
                id={`hero-neon-pill-${idx}`}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 backdrop-blur-md ${
                  isGreen
                    ? 'bg-[#061814]/80 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-[#08152c]/80 text-blue-300 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                }`}
              >
                {/* Glowing Dot - infinite ping disabled on mobile */}
                <span className="relative flex h-2 w-2">
                  <span
                    className={`animate-none sm:animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isGreen ? 'bg-emerald-400' : 'bg-blue-400'
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${
                      isGreen ? 'bg-emerald-400' : 'bg-blue-400'
                    }`}
                  ></span>
                </span>

                <Icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isGreen ? 'text-emerald-400' : 'text-blue-400'
                  }`}
                />
                <span className="truncate">{pill.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Main Headline: Build. Rank. Grow. in big bold white */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white font-heading uppercase select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
            Build. Rank. Grow.
          </h1>
        </motion.div>

        {/* Secondary Punch Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="max-w-4xl mx-auto mb-5"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-300">
            We Don't Just Build Websites, We Build Your Business That Gets Customers.
          </p>
        </motion.div>

        {/* Subheadline: AI-powered, high-converting websites and SEO-focused experiences for local businesses. */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10"
        >
          AI-powered, high-converting websites and SEO-focused experiences for local businesses in Pakistan and worldwide.
        </motion.p>

        {/* 2 Buttons: [Chat on WhatsApp] [View My Work] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16"
        >
          <a
            id="hero-whatsapp-cta"
            href={getWhatsAppUrl("Hi Rehan, I saw your agency website and want to discuss a project for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 active:scale-95 transition-all duration-200 shadow-xl shadow-emerald-950/70 border border-emerald-400/40 group"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-3.5 h-3.5 fill-white group-hover:scale-110 transition-transform" />
            </div>
            <span>Chat on WhatsApp</span>
          </a>

          <a
            id="hero-view-work-btn"
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-slate-200 bg-[#0c1322]/90 hover:bg-[#121c32] hover:text-white border border-slate-700/80 active:scale-95 transition-all duration-200 backdrop-blur-md group"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 text-blue-400 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Agency Tech & Metric Mockup Showcase (Saif-style dark navy live dashboard card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto rounded-3xl bg-[#090f1e]/90 border border-blue-900/40 p-6 sm:p-8 shadow-2xl shadow-black/80 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Subtle neon corner light */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top terminal-style bar */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs font-mono text-slate-400">
                rehan-web-studio // 2026-production-ready.tsx
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-none sm:animate-pulse"></span>
              <span>Online • Kahuta, Pakistan</span>
            </div>
          </div>

          {/* 4 Performance Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#060b17] border border-emerald-500/30 text-center">
              <div className="text-3xl font-black text-emerald-400 font-heading">
                100%
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                Google Core Web Vitals
              </div>
              <div className="text-[10px] text-emerald-400/80 mt-0.5">
                Sub-second load time
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060b17] border border-blue-500/30 text-center">
              <div className="text-3xl font-black text-blue-400 font-heading">
                #1
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                SEO Search Dominance
              </div>
              <div className="text-[10px] text-blue-400/80 mt-0.5">
                Local GMB & Organic
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060b17] border border-teal-500/30 text-center">
              <div className="text-3xl font-black text-teal-400 font-heading">
                120+
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                Websites Delivered
              </div>
              <div className="text-[10px] text-teal-400/80 mt-0.5">
                Local & Global Brands
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060b17] border border-indigo-500/30 text-center">
              <div className="text-3xl font-black text-indigo-400 font-heading">
                99.8%
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                5-Star Client Rating
              </div>
              <div className="text-[10px] text-indigo-400/80 mt-0.5">
                Direct WhatsApp Support
              </div>
            </div>
          </div>

          {/* Quick statement */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-stack custom development without bloated drag-and-drop templates</span>
            </div>
            <a
              href="#pricing"
              className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
            >
              <span>View Packages starting at Rs 15,000</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
