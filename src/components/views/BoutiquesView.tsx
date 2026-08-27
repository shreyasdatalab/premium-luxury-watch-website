import React from 'react';
import { MapPin, Phone, Clock, User, Sparkles, ChevronRight, Calendar } from 'lucide-react';
import { BOUTIQUES } from '../../data/timepieces';

interface BoutiquesViewProps {
  onOpenConsultation: (watchName?: string) => void;
}

export const BoutiquesView: React.FC<BoutiquesViewProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161822] border border-[#c5a880]/30 text-[#c5a880] text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Private Viewing Salons</span>
        </div>
        <h1 className="font-display-luxury text-4xl sm:text-5xl font-light text-white tracking-[0.15em]">
          SALONS & BOUTIQUES
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
          Step inside our intimate private sanctuaries designed for bespoke fittings, grand complication previews, and
          direct dialogue with resident master horologists.
        </p>
      </div>

      {/* Salons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BOUTIQUES.map((b) => (
          <div
            key={b.city}
            className="p-8 rounded-2xl bg-[#11131a] border border-white/10 hover:border-[#c5a880]/40 transition-all flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880]">{b.type}</span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#181a24] text-gray-400 border border-white/5">
                  Private Salon
                </span>
              </div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-white">{b.city}</h3>
              <p className="text-xs text-gray-300 flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{b.address}</span>
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2 text-xs text-gray-400">
              <div className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-gray-500" />
                  <span>Hours:</span>
                </span>
                <span className="text-white">{b.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-gray-500" />
                  <span>Direct:</span>
                </span>
                <span className="text-white font-mono">{b.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <User className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Senior Curator:</span>
                </span>
                <span className="text-[#c5a880] font-medium">{b.curator}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation()}
              className="w-full py-3 bg-[#161824] hover:bg-[#c5a880] text-gray-200 hover:text-[#0c0d10] font-semibold text-xs uppercase tracking-widest rounded-lg border border-white/10 hover:border-transparent transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment at {b.city}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Global Concierge Callout */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#141620] to-[#0c0d12] border border-[#c5a880]/30 text-center space-y-4">
        <h3 className="font-serif-luxury text-2xl text-white">Can't Visit in Person?</h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto">
          Our senior curators conduct private 4K video fittings and dispatch traveling horologists to private residences
          worldwide for Vanguard members.
        </p>
        <button
          onClick={() => onOpenConsultation()}
          className="px-6 py-2.5 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#d8bd97] transition-all inline-flex items-center space-x-2"
        >
          <span>Schedule Virtual Consultation</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
