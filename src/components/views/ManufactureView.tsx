import React from 'react';
import { Award, Shield, Clock, Compass, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface ManufactureViewProps {
  onOpenConsultation: () => void;
  onNavigate: (view: string) => void;
}

export const ManufactureView: React.FC<ManufactureViewProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161822] border border-[#c5a880]/30 text-[#c5a880] text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Geneva & Vallée de Joux</span>
        </div>
        <h1 className="font-display-luxury text-4xl sm:text-6xl font-light text-white tracking-[0.15em] leading-tight">
          THE MANUFACTURE
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
          Where centuries of horological wisdom converge with modern high-precision micromechanics. Discover the
          ateliers responsible for crafting Aurevant's limited-edition calibres.
        </p>
      </div>

      {/* 1. THE HERITAGE & JURA VALLEY ORIGINS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880]">GENEVA ATELIER 4</span>
          <h2 className="font-display-luxury text-3xl sm:text-4xl text-white font-light">
            THE PURSUIT OF HOROLOGICAL PERFECTION
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            Founded with a singular commitment to pure mechanical architecture, Aurevant designs, manufactures, and
            assembles all proprietary movements within its Geneva workshops. We refuse outsourced calibres, ensuring
            that every wheel, spring, and bridge is conceived specifically for our cases.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-[#11131a] rounded-lg border border-white/5 space-y-1">
              <span className="font-serif text-xl text-[#c5a880] font-semibold">100%</span>
              <p className="text-white font-medium">In-House Conception</p>
              <p className="text-[11px] text-gray-400">Proprietary architecture without compromise.</p>
            </div>
            <div className="p-4 bg-[#11131a] rounded-lg border border-white/5 space-y-1">
              <span className="font-serif text-xl text-[#c5a880] font-semibold">25 Pieces</span>
              <p className="text-white font-medium">Average Annual Run</p>
              <p className="text-[11px] text-gray-400">Strictly regulated production quotas.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#090a0d] shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Alu4KRMc9F84dXuR1cZG03O6xqfTgPSgdPqZxizkZE05gYBM7M-P4zrYI4c2hf6AE64oeTl5Xl8DQapbItCh7YysTxok1qifHoaELmNn31-tM70XkKk9hHXr4QrOvctgxcLjVT8a5fGRTITrnTqiTa0iwin3ra-V1y4pFBdZ5nBTAIR2X0ZT9NRpxp3ScVek0fYWAZ4VMNiWK0mFpixpd-X2_NrIl9juKZ2p6Laxb_I00jLLubbuLQ"
              alt="Watchmaker Tools"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. THE THREE PILLARS OF AUREVANT CRAFTSMANSHIP */}
      <div className="space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880]">MÉTIERS D'ART</span>
          <h2 className="font-display-luxury text-2xl sm:text-3xl text-white font-light">
            THE THREE PILLARS OF FINISHING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-6 rounded-xl bg-[#11131a] border border-white/10 space-y-4 hover:border-[#c5a880]/40 transition-all">
            <div className="w-10 h-10 rounded-full bg-[#181a24] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-semibold text-white">Manual Anglage & Chamfering</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every bridge edge is filed by hand with files and gentian wood sticks dipped in diamond paste to form a
              uniform 45-degree mirror sheen with crisp inward corners.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-xl bg-[#11131a] border border-white/10 space-y-4 hover:border-[#c5a880]/40 transition-all">
            <div className="w-10 h-10 rounded-full bg-[#181a24] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-semibold text-white">Grand Feu Enamel Dials</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Silica powder dusted over solid gold bases and fired in high-temperature ovens at 800°C across multiple
              layers, creating an immaculate finish that never fades across centuries.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-xl bg-[#11131a] border border-white/10 space-y-4 hover:border-[#c5a880]/40 transition-all">
            <div className="w-10 h-10 rounded-full bg-[#181a24] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-lg font-semibold text-white">COSC & Poinçon de Genève</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Exacting 15-day temperature and position testing overseen by independent Geneva horological authorities to
              guarantee ultimate rate stability.
            </p>
          </div>
        </div>
      </div>

      {/* 3. CALIBRE EXPLODED VIEW */}
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#12141f] via-[#0c0e14] to-[#090a0e] border border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqnt-kuxgv9Gk2iysglu8EIYAhz5OiYt8ao5lxEg6JS3D8Vzg4JTi8tGKPebGDyG7Cnjfu010O0_lPg6OCvuvYa7ZG2QxQx5l-KSwi59fMFKCnLWEb1UR08tsLhuXld2xv52G71M1KgIDdKmmDriGZjPeec7mw3pycBhpX0GwQXbGjvCBshwan9Zb7NCemV3uoEPg3dMCrwwnEQjeXqzBj9QLfSg8cwW1GvAh96gPNdUZYyAErjj5zVg"
              alt="Calibre Schematics"
              className="w-full max-h-80 object-contain"
            />
          </div>

          <div className="lg:col-span-5 space-y-4 text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-mono">
              ENGINEERING SCHEMATIC
            </span>
            <h3 className="font-serif-luxury text-2xl text-white font-semibold">The Twin-Barrel Escapement</h3>
            <p className="text-gray-300 leading-relaxed">
              By distributing mainspring tension across two synchronized micro-barrels, the Calibre AV-01 eliminates
              isochronism errors and maintains a consistent balance amplitude from hour 1 to hour 72.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('collections')}
                className="px-6 py-2.5 bg-[#c5a880] text-[#0c0d10] font-semibold uppercase tracking-widest rounded hover:bg-[#d8bd97] transition-all flex items-center space-x-2"
              >
                <span>View Timepieces with Calibre AV-01</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
