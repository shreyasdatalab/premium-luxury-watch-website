import React, { useState } from 'react';
import { X, ArrowRightLeft, Check, Sparkles, ShoppingBag, ShieldCheck, Cpu, Clock, Layers, Ruler } from 'lucide-react';
import { TIMEPIECES } from '../../data/timepieces';
import { Timepiece } from '../../types';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialWatchId1?: string;
  initialWatchId2?: string;
  onAddToCart: (watch: Timepiece) => void;
  onOpenConsultation: (watchName?: string) => void;
  onSelectTimepiece: (id: string) => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  initialWatchId1,
  initialWatchId2,
  onAddToCart,
  onOpenConsultation,
  onSelectTimepiece,
}) => {
  const [firstId, setFirstId] = useState<string>(initialWatchId1 || TIMEPIECES[0].id);
  const [secondId, setSecondId] = useState<string>(
    initialWatchId2 || (initialWatchId1 === TIMEPIECES[1].id ? TIMEPIECES[0].id : TIMEPIECES[1].id)
  );

  React.useEffect(() => {
    if (initialWatchId1) {
      setFirstId(initialWatchId1);
    }
    if (initialWatchId2) {
      setSecondId(initialWatchId2);
    } else if (initialWatchId1) {
      const alt = TIMEPIECES.find((w) => w.id !== initialWatchId1);
      if (alt) setSecondId(alt.id);
    }
  }, [initialWatchId1, initialWatchId2, isOpen]);

  if (!isOpen) return null;

  const watch1 = TIMEPIECES.find((w) => w.id === firstId) || TIMEPIECES[0];
  const watch2 = TIMEPIECES.find((w) => w.id === secondId) || TIMEPIECES[1];

  const handleSwap = () => {
    const temp = firstId;
    setFirstId(secondId);
    setSecondId(temp);
  };

  const specRows = [
    { label: 'Collection / Lineage', val1: watch1.collection, val2: watch2.collection, icon: Layers },
    { label: 'Manufacture Calibre', val1: watch1.specs.calibre, val2: watch2.specs.calibre, icon: Cpu },
    { label: 'Movement Type', val1: watch1.specs.movementType, val2: watch2.specs.movementType, icon: Cpu },
    { label: 'Power Reserve', val1: `${watch1.specs.powerReserveHours} Hours`, val2: `${watch2.specs.powerReserveHours} Hours`, icon: Clock },
    { label: 'Frequency', val1: watch1.specs.frequency, val2: watch2.specs.frequency, icon: Clock },
    { label: 'Case Material', val1: watch1.specs.caseMaterial, val2: watch2.specs.caseMaterial, icon: ShieldCheck },
    { label: 'Case Diameter', val1: `${watch1.specs.caseDiameterMm} mm`, val2: `${watch2.specs.caseDiameterMm} mm`, icon: Ruler },
    { label: 'Case Thickness', val1: `${watch1.specs.caseThicknessMm} mm`, val2: `${watch2.specs.caseThicknessMm} mm`, icon: Ruler },
    { label: 'Water Resistance', val1: watch1.specs.waterResistance, val2: watch2.specs.waterResistance, icon: ShieldCheck },
    { label: 'Components Count', val1: `${watch1.specs.componentsCount} Parts`, val2: `${watch2.specs.componentsCount} Parts`, icon: Layers },
    { label: 'Jewels Count', val1: `${watch1.specs.jewelsCount} Rubies`, val2: `${watch2.specs.jewelsCount} Rubies`, icon: Sparkles },
    { label: 'Certification', val1: watch1.specs.finishingStandard, val2: watch2.specs.finishingStandard, icon: ShieldCheck },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div 
        id="comparison-backdrop"
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div 
        id="comparison-modal-card"
        className="relative bg-[#101217] border border-[#c5a880]/30 rounded-xl max-w-5xl w-full shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#141720]/80">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-md bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#c5a880]">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#c5a880]">
                Haute Horlogerie Comparison
              </span>
              <h2 className="text-xl font-serif text-white tracking-wide">
                Side-by-Side Chronometric Specifications
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="comparison-swap-btn"
              onClick={handleSwap}
              title="Swap Left and Right"
              className="p-2 rounded-lg border border-white/10 hover:border-[#c5a880]/40 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
            <button
              id="comparison-close-btn"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable Comparison Grid */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Top Timepiece Selector & Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Watch 1 Card */}
            <div className="bg-[#161922] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-wider">
                    Timepiece 1
                  </span>
                  <select
                    id="comparison-select-watch-1"
                    value={firstId}
                    onChange={(e) => setFirstId(e.target.value)}
                    className="bg-[#0c0d10] text-gray-200 border border-[#c5a880]/30 rounded px-2.5 py-1 text-xs focus:outline-none focus:border-[#c5a880]"
                  >
                    {TIMEPIECES.map((t) => (
                      <option key={t.id} value={t.id} disabled={t.id === secondId}>
                        {t.name} ({t.reference})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative aspect-square max-h-56 mx-auto rounded-lg overflow-hidden bg-[#0c0d10] border border-white/5 flex items-center justify-center p-3">
                  <img
                    src={watch1.heroImage}
                    alt={watch1.name}
                    className="h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-gray-300 font-mono">
                    Ref. {watch1.reference}
                  </div>
                </div>

                <div className="text-center pt-2">
                  <h3 className="text-lg font-serif text-white font-medium">{watch1.name}</h3>
                  <p className="text-xs text-[#c5a880] tracking-wider uppercase mt-0.5">{watch1.subtitle}</p>
                  <p className="text-xl font-serif text-white mt-2">
                    CHF {watch1.price.toLocaleString('de-CH')}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex gap-2">
                <button
                  id="comparison-watch1-details-btn"
                  onClick={() => {
                    onSelectTimepiece(watch1.id);
                    onClose();
                  }}
                  className="flex-1 py-2 text-xs uppercase tracking-wider font-semibold border border-white/20 text-gray-200 rounded hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
                >
                  View Details
                </button>
                <button
                  id="comparison-watch1-cart-btn"
                  onClick={() => {
                    onAddToCart(watch1);
                  }}
                  className="px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#c5a880] text-[#0c0d10] rounded hover:bg-[#d8bd97] transition-all flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Bag</span>
                </button>
              </div>
            </div>

            {/* Watch 2 Card */}
            <div className="bg-[#161922] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-wider">
                    Timepiece 2
                  </span>
                  <select
                    id="comparison-select-watch-2"
                    value={secondId}
                    onChange={(e) => setSecondId(e.target.value)}
                    className="bg-[#0c0d10] text-gray-200 border border-[#c5a880]/30 rounded px-2.5 py-1 text-xs focus:outline-none focus:border-[#c5a880]"
                  >
                    {TIMEPIECES.map((t) => (
                      <option key={t.id} value={t.id} disabled={t.id === firstId}>
                        {t.name} ({t.reference})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative aspect-square max-h-56 mx-auto rounded-lg overflow-hidden bg-[#0c0d10] border border-white/5 flex items-center justify-center p-3">
                  <img
                    src={watch2.heroImage}
                    alt={watch2.name}
                    className="h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-gray-300 font-mono">
                    Ref. {watch2.reference}
                  </div>
                </div>

                <div className="text-center pt-2">
                  <h3 className="text-lg font-serif text-white font-medium">{watch2.name}</h3>
                  <p className="text-xs text-[#c5a880] tracking-wider uppercase mt-0.5">{watch2.subtitle}</p>
                  <p className="text-xl font-serif text-white mt-2">
                    CHF {watch2.price.toLocaleString('de-CH')}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex gap-2">
                <button
                  id="comparison-watch2-details-btn"
                  onClick={() => {
                    onSelectTimepiece(watch2.id);
                    onClose();
                  }}
                  className="flex-1 py-2 text-xs uppercase tracking-wider font-semibold border border-white/20 text-gray-200 rounded hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
                >
                  View Details
                </button>
                <button
                  id="comparison-watch2-cart-btn"
                  onClick={() => {
                    onAddToCart(watch2);
                  }}
                  className="px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#c5a880] text-[#0c0d10] rounded hover:bg-[#d8bd97] transition-all flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Bag</span>
                </button>
              </div>
            </div>
          </div>

          {/* Technical Specs Comparison Table */}
          <div className="bg-[#141720] border border-white/10 rounded-xl overflow-hidden">
            <div className="px-5 py-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <h4 className="text-xs uppercase font-semibold tracking-[0.2em] text-[#c5a880] flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Technical & Calibre Comparison
              </h4>
              <span className="text-[11px] text-gray-400">Geneva Seal & COSC Benchmarks</span>
            </div>

            <div className="divide-y divide-white/5 text-xs">
              {specRows.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <div key={idx} className="grid grid-cols-3 p-3.5 hover:bg-white/[0.02] transition-colors items-center">
                    <div className="text-gray-400 font-medium flex items-center gap-2 pr-2">
                      <Icon className="w-3.5 h-3.5 text-[#c5a880]/70 shrink-0" />
                      <span>{row.label}</span>
                    </div>
                    <div className="text-white font-mono px-2 break-words">
                      {row.val1}
                    </div>
                    <div className="text-white font-mono px-2 border-l border-white/5 break-words">
                      {row.val2}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Complications Checklist Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#141720] border border-white/10 rounded-xl p-4">
              <span className="text-[10px] uppercase font-semibold text-[#c5a880] tracking-wider block mb-2">
                {watch1.name} — Integrated Functions
              </span>
              <div className="space-y-1.5">
                {watch1.complications.map((comp, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#141720] border border-white/10 rounded-xl p-4">
              <span className="text-[10px] uppercase font-semibold text-[#c5a880] tracking-wider block mb-2">
                {watch2.name} — Integrated Functions
              </span>
              <div className="space-y-1.5">
                {watch2.complications.map((comp, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#141720] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Unsure which piece suits your vault? Schedule a private comparative curation session with a master horologist.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="comparison-consultation-btn"
              onClick={() => {
                onOpenConsultation(`${watch1.name} vs ${watch2.name}`);
                onClose();
              }}
              className="w-full sm:w-auto px-4 py-2 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#d8bd97] transition-all flex items-center justify-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Comparative Viewing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
