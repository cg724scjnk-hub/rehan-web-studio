import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, ArrowUpRight, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS, getWhatsAppUrl } from '../data/agencyData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Business', 'E-commerce', 'Landing Page', 'Healthcare'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#06080e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Recent Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Live Client Systems</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real client platforms engineered for restaurants, salons, real estate groups, clothing stores, and healthcare clinics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                  : 'bg-[#090f1e]/80 text-slate-400 hover:text-white hover:bg-[#101b34] border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const whatsappText = `Hi Rehan, I saw "${project.title}" (${project.category}) on Rehan Web Studio. How much would a website like this cost for my business?`;

            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-3xl bg-[#090f1e]/80 border border-slate-800/90 hover:border-blue-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 backdrop-blur-md"
              >
                <div>
                  {/* Image container */}
                  <div
                    className="relative aspect-video overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090f1e] via-black/20 to-transparent"></div>

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#060b17]/90 backdrop-blur-md text-blue-300 border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Result pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-300 bg-[#061814]/90 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                        {project.metrics.value}
                      </span>

                      <button
                        id={`btn-view-${project.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProject(project);
                        }}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                        title="View Case Study"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{project.location}</span>
                    </div>

                    <h3
                      onClick={() => setActiveProject(project)}
                      className="text-lg sm:text-xl font-bold text-white mb-2 cursor-pointer hover:text-blue-300 transition-colors font-heading"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#060b17] text-slate-300 border border-slate-700/60 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    id={`details-btn-${project.id}`}
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    id={`whatsapp-project-${project.id}`}
                    href={getWhatsAppUrl(whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-600 text-emerald-400 hover:text-white text-xs font-semibold border border-emerald-500/30 transition-all duration-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
