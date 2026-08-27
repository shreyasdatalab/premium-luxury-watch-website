import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Shield, Clock, Award, CheckCircle2, ChevronRight, Share2, Compass, Layers } from 'lucide-react';
import { Timepiece } from '../../types';
import { TIMEPIECES } from '../../data/timepieces';

interface ProductDetailViewProps {
  timepieceId: string;
  onBack: () => void;
  onAddToCart: (watch: Timepiece) => void;
  onOpenConsultation: (watchName?: string) => void;
  onSelectTimepiece: (id: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  timepieceId,
  onBack,
  onAddToCart,
  onOpenConsultation,
  onSelectTimepiece
}) => {
  const watch = TIMEPIECES.find((w) => w.id === timepieceId) || TIMEPIECES[0];

  const galleryImages = [
    { key: 'dial', label: 'Dial & Bezel Macro', url: watch.images.dial },
    { key: 'profile', label: '7.2mm Ultra-Slim Profile', url: watch.images.profile },
    { key: 'caseback', label: 'Exhibition Sapphire Back', url: watch.images.caseback },
    { key: 'lifestyle', label: 'On-Wrist & Slate Texture', url: watch.images.lifestyle }
  ];

  const [activeImage, setActiveImage] = useState<string>(watch.images.dial);
  const [activeSpecTab, setActiveSpecTab] = useState<'movement' | 'case' | 'strap' | 'craftsmanship'>('movement');
  const [addedNotification, setAddedNotification] = useState(false);

  const handleAdd = () => {
    onAddToCart(watch);
    setAddedNotification(true);
    setTimeout(() => setAddedNotification(false), 3000);
  };

  const relatedWatches = TIMEPIECES.filter((w) => w.id !== watch.id).slice(0, 2);

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Breadcrumb & Back */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#c5a880] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collections</span>
        </button>

        <div className="flex items-center space-x-3 text-xs text-gray-400">
          <span className="font-mono text-[#c5a880]">{watch.reference}</span>
          <span>•</span>
          <span className="text-gray-300">{watch.collection} Line</span>
        </div>
      </div>

      {/* 1. HERO PRODUCT SECTION (Images + Purchase Specs) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Selected Image Stage */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0a0b10] border border-white/10 shadow-2xl flex items-center justify-center min-h-[420px] sm:min-h-[520px]">
            <img
              src={activeImage}
              alt={`${watch.name} View`}
              className="w-full h-full max-h-[560px] object-cover object-center transition-all duration-500"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#c5a880] border border-[#c5a880]/30">
                Poinçon de Genève Certified
              </span>
            </div>
          </div>

          {/* Thumbnail Selectors */}
          <div className="grid grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <button
                key={img.key}
                onClick={() => setActiveImage(img.url)}
                className={`relative rounded-lg overflow-hidden border p-1 bg-[#10121a] transition-all ${
                  activeImage === img.url
                    ? 'border-[#c5a880] shadow-md shadow-[#c5a880]/20'
                    : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt={img.label} className="w-full h-20 sm:h-24 object-cover rounded" />
                <span className="block text-[9px] text-gray-300 truncate mt-1 text-center font-light">
                  {img.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Info & Acquisition Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-[#c5a880] text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{watch.collection} Collection • {watch.editionLimit || 'Haute Horlogerie'}</span>
            </div>

            <h1 className="font-display-luxury text-3xl sm:text-4xl text-white font-light tracking-wide">
              {watch.name}
            </h1>

            <p className="font-mono text-xs text-gray-400">{watch.reference}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#12141c] border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Acquisition Value</span>
              <span className="font-mono text-2xl font-semibold text-[#c5a880]">{watch.priceFormatted}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest block font-medium">
                {watch.availability}
              </span>
              <span className="text-[11px] text-gray-400">Insured Delivery: 4–6 Wks</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            {watch.description}
          </p>

          {/* Quick Specifications Highlights */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[#111319] border border-white/5 rounded-lg">
              <span className="text-[10px] uppercase text-gray-500 block">Manufacture Calibre</span>
              <span className="text-white font-medium">{watch.specs.calibre}</span>
            </div>
            <div className="p-3 bg-[#111319] border border-white/5 rounded-lg">
              <span className="text-[10px] uppercase text-gray-500 block">Case Dimensions</span>
              <span className="text-white font-medium">{watch.specs.caseDiameter} • {watch.specs.caseThickness}</span>
            </div>
            <div className="p-3 bg-[#111319] border border-white/5 rounded-lg">
              <span className="text-[10px] uppercase text-gray-500 block">Power Autonomy</span>
              <span className="text-white font-medium">{watch.specs.powerReserve}</span>
            </div>
            <div className="p-3 bg-[#111319] border border-white/5 rounded-lg">
              <span className="text-[10px] uppercase text-gray-500 block">Dial Execution</span>
              <span className="text-white font-medium truncate">{watch.specs.dialDescription.split(',')[0]}</span>
            </div>
          </div>

          {/* Acquisition Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleAdd}
              className="w-full py-4 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[#d8bd97] transition-all shadow-xl shadow-[#c5a880]/10 flex items-center justify-center space-x-2"
            >
              <span>Acquire Timepiece</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {addedNotification && (
              <div className="p-2.5 bg-[#17221d] border border-emerald-500/40 rounded text-xs text-emerald-300 flex items-center justify-center space-x-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Added to your Acquisitions Bag. White-glove courier reserved.</span>
              </div>
            )}

            <button
              onClick={() => onOpenConsultation(watch.name)}
              className="w-full py-3.5 bg-transparent border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] rounded-md hover:border-[#c5a880] hover:text-[#c5a880] hover:bg-white/5 transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Private Consultation</span>
            </button>
          </div>

          {/* Guarantees */}
          <div className="pt-4 border-t border-white/10 space-y-2 text-[11px] text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>8-Year International Manufacture Warranty with Full Archival Certificate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>COSC Chronometer testing with precision delta of ±0.5s/day</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TECHNICAL SPECIFICATIONS TABS (Movement, Case, Strap, Craft) */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0f1118] border border-white/10 shadow-2xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880]">PRECISION DATA</span>
            <h2 className="font-display-luxury text-2xl sm:text-3xl text-white font-light">
              TECHNICAL SPECIFICATIONS
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'movement', label: 'Calibre & Movement' },
              { id: 'case', label: 'Case & Crystal' },
              { id: 'strap', label: 'Strap & Buckle' },
              { id: 'craftsmanship', label: 'Artisanal Métiers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSpecTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-medium transition-all ${
                  activeSpecTab === tab.id
                    ? 'bg-[#c5a880] text-[#0c0d10] font-semibold'
                    : 'bg-[#151722] text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Movement */}
        {activeSpecTab === 'movement' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-xl text-white font-semibold">{watch.specs.calibre}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Conceived, engineered, and regulated inside our Geneva manufacture atelier. Built with twin mainspring
                barrels operating in series to ensure flat torque curves across all {watch.specs.powerReserve}.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-[#141622] rounded-lg border border-white/5">
                  <span className="text-gray-500 uppercase text-[10px] block">Winding Architecture</span>
                  <span className="text-white font-medium">{watch.specs.movementType}</span>
                </div>
                <div className="p-3.5 bg-[#141622] rounded-lg border border-white/5">
                  <span className="text-gray-500 uppercase text-[10px] block">Frequency</span>
                  <span className="text-[#c5a880] font-medium">{watch.specs.frequency}</span>
                </div>
                <div className="p-3.5 bg-[#141622] rounded-lg border border-white/5">
                  <span className="text-gray-500 uppercase text-[10px] block">Jewel Count</span>
                  <span className="text-white font-medium">{watch.specs.jewels} Synthetic Rubies</span>
                </div>
                <div className="p-3.5 bg-[#141622] rounded-lg border border-white/5">
                  <span className="text-gray-500 uppercase text-[10px] block">Total Components</span>
                  <span className="text-white font-medium">{watch.specs.components} Hand-Finished Parts</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden bg-[#090a0d] border border-white/10 p-4 flex flex-col items-center">
              <img
                src={watch.calibreDiagram || watch.images.caseback}
                alt="Movement Architecture Schematics"
                className="w-full max-h-72 object-contain"
              />
              <span className="text-[10px] text-[#c5a880] font-mono tracking-widest mt-2 uppercase">
                Schematic: Twin-Barrel AV Calibre Escapement
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Case */}
        {activeSpecTab === 'case' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            <div className="p-5 bg-[#141622] rounded-xl border border-white/5 space-y-3 text-xs">
              <h4 className="font-serif-luxury text-base text-white font-semibold">Case Architecture & Materials</h4>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Material & Finish:</span>
                  <span className="text-white font-medium text-right">{watch.specs.caseMaterial}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Diameter:</span>
                  <span className="text-white font-medium">{watch.specs.caseDiameter}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Total Thickness:</span>
                  <span className="text-[#c5a880] font-medium font-mono">{watch.specs.caseThickness}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Water Resistance:</span>
                  <span className="text-white font-medium">{watch.specs.waterResistance}</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#141622] rounded-xl border border-white/5 space-y-3 text-xs">
              <h4 className="font-serif-luxury text-base text-white font-semibold">Crystal & Dial Finish</h4>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Front Crystal:</span>
                  <span className="text-white font-medium text-right">{watch.specs.crystal}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Case Back:</span>
                  <span className="text-white font-medium text-right">{watch.specs.casebackSpec}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Dial Craft:</span>
                  <span className="text-white font-medium text-right max-w-xs">{watch.specs.dialDescription}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Strap */}
        {activeSpecTab === 'strap' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            <div className="p-5 bg-[#141622] rounded-xl border border-white/5 space-y-3 text-xs">
              <h4 className="font-serif-luxury text-base text-white font-semibold">Strap Tailoring</h4>
              <p className="text-gray-400 leading-relaxed">
                Hand-cut and saddle-stitched by bespoke leather artisans in Geneva using certified sustainable skins.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Material:</span>
                  <span className="text-white font-medium">{watch.specs.strapMaterial}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lug Width:</span>
                  <span className="text-white font-medium">20.0 mm taper to 16.0 mm</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#141622] rounded-xl border border-white/5 space-y-3 text-xs">
              <h4 className="font-serif-luxury text-base text-white font-semibold">Buckle & Clasp</h4>
              <p className="text-gray-400 leading-relaxed">
                Machined from solid ingot gold or titanium with chamfered inner prongs to prevent strap wear.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Buckle Type:</span>
                  <span className="text-white font-medium">{watch.specs.buckle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Engraving:</span>
                  <span className="text-[#c5a880] font-medium">Hand-Chiseled Aurevant Chevron</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Artisanal Métiers */}
        {activeSpecTab === 'craftsmanship' && (
          <div className="space-y-4 animate-in fade-in duration-300 text-xs text-gray-300">
            <h4 className="font-serif-luxury text-base text-white font-semibold">Hand-Finishing Directives</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {watch.craftsmanshipNotes.map((note, idx) => (
                <div key={idx} className="p-4 bg-[#141622] rounded-lg border border-white/5 space-y-2">
                  <span className="text-[#c5a880] font-mono text-[10px]">RULE 0{idx + 1}</span>
                  <p className="text-white font-light leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. EDITORIAL SECTION / ENGINEERED BENEATH THE SURFACE */}
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#12141f] via-[#0c0d12] to-[#08090d] border border-white/10 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880]">CALIBRE ARCHITECTURE</span>
            <h2 className="font-display-luxury text-3xl sm:text-4xl text-white font-light leading-tight">
              ENGINEERED BENEATH <br />
              <span className="font-serif italic text-[#c5a880]">THE SURFACE.</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Every curve of the bridge was drawn by hand before machining. The bridges are adorned with traditional
              Côtes de Genève ribbing, spaced precisely at 1.5mm intervals and hand-angled to a 45-degree mirror sheen.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Variable Inertia Balance</h4>
                  <p className="text-gray-400 text-[11px]">
                    4 micro-gold inertia blocks eliminate hairspring stud disruption.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Black Mirror Polish (Spéculaire)</h4>
                  <p className="text-gray-400 text-[11px]">
                    Executed on tin laps with diamond paste, turning steel surfaces black when viewed straight on.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#08090d] p-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwSoL1ozHnE_lOoDsd-dcHw62pzMBnesEbAemXD9mzJJhbm9LHaQNfUtqGN5zGudYny1EWIqUAm34xiPBPDP7AP7c3Abje4OInThoBWIvEZadDffNwwQR7xhb2_byCIHAdRkku_UDfPbjV_acne8KQ6dWzdEKLKd1ig7x0XjTMhiKvVUWIUpNGLaEIW-jdKhNyuxK3Lv16Z_vJjpeshAwYL21aRTrzZ5KYpVjLJm-wo2uOdOb3OfEPxw"
                alt="Watchmaker hand-angling bridge"
                className="w-full h-72 sm:h-80 object-cover rounded filter grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. RELATED MASTERWORKS */}
      <div className="space-y-6">
        <h3 className="font-display-luxury text-xl text-white uppercase tracking-wider">
          COMPLEMENTARY MANUFACTURE TIMEPIECES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedWatches.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onSelectTimepiece(rel.id)}
              className="p-4 rounded-xl bg-[#11131a] border border-white/10 hover:border-[#c5a880]/50 transition-all flex gap-4 cursor-pointer group"
            >
              <img
                src={rel.images.dial}
                alt={rel.name}
                className="w-24 h-24 object-cover rounded-lg bg-[#090a0d] border border-white/10 shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#c5a880] uppercase">{rel.reference}</span>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#c5a880] font-serif-luxury truncate">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{rel.specs.caseMaterial}</p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#c5a880] font-mono font-medium">{rel.priceFormatted}</span>
                  <span className="text-gray-400 group-hover:text-white flex items-center text-[11px]">
                    View <ChevronRight className="w-3 h-3 ml-0.5 inline" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
