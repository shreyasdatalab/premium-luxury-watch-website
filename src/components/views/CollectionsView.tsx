import React, { useState } from 'react';
import { Filter, Search, ArrowRight, Sparkles, SlidersHorizontal, Check, Eye } from 'lucide-react';
import { TIMEPIECES, COLLECTIONS_INFO } from '../../data/timepieces';
import { Timepiece } from '../../types';

interface CollectionsViewProps {
  onSelectTimepiece: (id: string) => void;
  onAddToCart: (watch: Timepiece) => void;
  onOpenConsultation: () => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  onSelectTimepiece,
  onAddToCart,
  onOpenConsultation
}) => {
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [selectedMovement, setSelectedMovement] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredWatches = TIMEPIECES.filter((watch) => {
    const matchesCol = selectedCollection === 'All' || watch.collection === selectedCollection;
    const matchesMov = selectedMovement === 'All' || watch.specs.movementType === selectedMovement;
    const matchesSearch =
      watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      watch.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      watch.specs.caseMaterial.toLowerCase().includes(searchQuery.toLowerCase()) ||
      watch.specs.calibre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCol && matchesMov && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161822] border border-[#c5a880]/30 text-[#c5a880] text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Geneva Manufacture Masterworks</span>
        </div>
        <h1 className="font-display-luxury text-4xl sm:text-5xl font-light text-white tracking-[0.15em]">
          THE COLLECTIONS
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
          Each Aurevant timepiece is an unrepeatable dialogue between classical chronometric architecture and avant-garde
          finishing, manufactured strictly in limited allocations.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-6 rounded-xl bg-[#11131a] border border-white/10 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Collection Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Éclat', 'Noctis', 'Meridian', 'Celestial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCollection(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  selectedCollection === cat
                    ? 'bg-[#c5a880] text-[#0c0d10] font-semibold'
                    : 'bg-[#181a24] text-gray-300 hover:text-white border border-white/5'
                }`}
              >
                {cat === 'All' ? 'All Collections' : `${cat} Line`}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search reference, calibre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181a24] border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a880]"
            />
          </div>
        </div>

        {/* Secondary filters: Movement and Sorting */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-[11px] uppercase tracking-wider text-[#c5a880]">Movement:</span>
            <select
              value={selectedMovement}
              onChange={(e) => setSelectedMovement(e.target.value)}
              className="bg-[#181a24] border border-white/10 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#c5a880]"
            >
              <option value="All">All Mechanisms</option>
              <option value="Manual-Wind">Manual-Wind Ultra-Plat</option>
              <option value="Automatic">Automatic Micro-Rotor</option>
              <option value="Monopusher Chronograph">Monopusher Chronograph</option>
              <option value="Tourbillon">Flying Tourbillon</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-[11px] uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#181a24] border border-white/10 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#c5a880]"
            >
              <option value="featured">Maison Featured</option>
              <option value="price-asc">Price: Ascending</option>
              <option value="price-desc">Price: Descending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Timepieces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWatches.map((watch) => (
          <div
            key={watch.id}
            className="group rounded-xl overflow-hidden bg-[#11131a] border border-white/10 hover:border-[#c5a880]/50 transition-all duration-500 flex flex-col justify-between shadow-xl"
          >
            {/* Top image card */}
            <div
              className="relative h-80 overflow-hidden bg-[#0a0b0f] cursor-pointer"
              onClick={() => onSelectTimepiece(watch.id)}
            >
              <img
                src={watch.images.hero}
                alt={watch.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11131a] via-transparent to-black/30" />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#c5a880] border border-[#c5a880]/30">
                  {watch.reference}
                </span>
                {watch.editionLimit && (
                  <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#161824]/90 text-gray-300 border border-white/10">
                    {watch.editionLimit}
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTimepiece(watch.id);
                  }}
                  className="p-2 rounded-full bg-[#c5a880] text-[#0c0d10] hover:bg-[#d8bd97] transition-all shadow-lg"
                  title="Examine Specs"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom details card */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3
                    onClick={() => onSelectTimepiece(watch.id)}
                    className="font-serif-luxury text-lg font-semibold text-white group-hover:text-[#c5a880] transition-colors cursor-pointer"
                  >
                    {watch.name}
                  </h3>
                  <span className="font-mono text-sm font-medium text-[#c5a880]">{watch.priceFormatted}</span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{watch.tagline}</p>
              </div>

              {/* Technical summary pills */}
              <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px] text-gray-300">
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase">Calibre</span>
                  <span className="truncate font-mono">{watch.specs.calibre.replace('In-house ', '')}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase">Case Material</span>
                  <span className="truncate">{watch.specs.caseDiameter} • {watch.specs.caseMaterial.split(',')[0]}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-white/5 flex gap-2">
                <button
                  onClick={() => onSelectTimepiece(watch.id)}
                  className="flex-1 py-2.5 bg-transparent border border-white/15 hover:border-[#c5a880] text-xs font-medium uppercase tracking-wider text-white hover:text-[#c5a880] rounded transition-all flex items-center justify-center space-x-1"
                >
                  <span>Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onAddToCart(watch)}
                  className="px-4 py-2.5 bg-[#c5a880] text-[#0c0d10] hover:bg-[#d8bd97] text-xs font-semibold uppercase tracking-wider rounded transition-all"
                  title="Add to Acquisitions Bag"
                >
                  Acquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Consultation Banner */}
      <div className="p-8 rounded-xl bg-gradient-to-r from-[#141622] to-[#0c0d12] border border-[#c5a880]/30 text-center space-y-4">
        <h3 className="font-serif-luxury text-2xl text-white">Seeking a Bespoke Allocation or Unique Complication?</h3>
        <p className="text-xs text-gray-400 max-w-lg mx-auto">
          Our Geneva Master Watchmakers craft made-to-order unique pieces with custom hand-engravings and proprietary dials.
        </p>
        <button
          onClick={() => onOpenConsultation()}
          className="px-6 py-2.5 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[#d8bd97] transition-all inline-flex items-center space-x-2"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Request Private Salon Consultation</span>
        </button>
      </div>
    </div>
  );
};
