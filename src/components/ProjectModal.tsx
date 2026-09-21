import React from 'react';
import { X, Check, MessageSquare, MapPin } from 'lucide-react';
import { PortfolioProject } from '../types';
import { getWhatsAppUrl } from '../data/agencyData';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const whatsappMessage = `Hi Rehan, I saw your work on "${project.title}" (${project.category}) on Rehan Web Studio. I would like a similar website for my business!`;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-3xl rounded-3xl bg-[#090f1e] border border-slate-700/80 shadow-2xl p-6 sm:p-8 my-8 text-left text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Info */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {project.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400 bg-[#060b17] px-3 py-1 rounded-full border border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            {project.location}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {project.metrics.label}: {project.metrics.value}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-heading">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Client: <strong className="text-slate-200">{project.clientName}</strong>
        </p>

        {/* Image Preview */}
        <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video max-h-72 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090f1e]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {project.liveTag}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Project Overview & Impact
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Core Features & Architecture
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#060b17] border border-slate-700 text-xs text-slate-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <span className="text-xs text-slate-400 text-center sm:text-left">
            Want a solution like this for your brand?
          </span>

          <a
            id="modal-order-similar-btn"
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/60 transition-all active:scale-95 border border-emerald-400/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Order Similar Website on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
