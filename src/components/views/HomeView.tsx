import React from 'react';
import { ArrowRight, Sparkles, Shield, Clock, Award, Compass, ChevronRight } from 'lucide-react';
import { TIMEPIECES, COLLECTIONS_INFO } from '../../data/timepieces';

interface HomeViewProps {
  onNavigate: (view: string, itemId?: string) => void;
  onOpenConsultation: () => void;
  onSelectTimepiece: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectTimepiece
}) => {
  const featuredWatch = TIMEPIECES[0]; // Éclat 38

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Ambient Dark Gradient Background */}
        <div className="absolute inset-0 bg-radial from-[#181a24] via-[#0c0d10] to-[#08090b] opacity-80" />

        {/* Hero Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Block */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161822] border border-[#c5a880]/30 text-[#c5a880] text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haute Horlogerie Suisse</span>
            </div>

            <h1 className="font-display-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-[0.15em] leading-tight">
              TIME, <br />
              <span className="font-serif italic font-normal text-[#c5a880]">REFINED.</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 font-light max-w-lg leading-relaxed">
              Experience the pinnacle of Swiss mechanical mastery. Handcrafted in the Jura valleys with
              uncompromising purity, ultra-slim silhouettes, and certified chronometric precision.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                id="hero-explore-collections-btn"
                onClick={() => {
                  onNavigate('collections');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[#d8bd97] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#c5a880]/10"
              >
                <span>Discover the Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-discover-craft-btn"
                onClick={() => {
                  onNavigate('manufacture');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] rounded-md hover:border-[#c5a880] hover:text-[#c5a880] hover:bg-white/5 transition-all"
              >
                <span>Our Manufacture</span>
              </button>
            </div>

            {/* Quick Hero Stats */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-left">
              <div>
                <span className="font-serif text-xl sm:text-2xl text-white font-medium">7.2 mm</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">Ultra-Slim Case</p>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl text-white font-medium">72 Hrs</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">Twin-Barrel Reserve</p>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl text-[#c5a880] font-medium">100%</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">Geneva Finished</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative group cursor-pointer" onClick={() => onSelectTimepiece(featuredWatch.id)}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#c5a880]/20 to-transparent rounded-2xl blur-xl group-hover:opacity-100 opacity-60 transition duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#12141c] shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARaXbLHsDCKWGQ8-uDi6-jQJ9TppFsO0pRm1d14pXxKspv3MyMzHW4Dy6xuq3LgKgZr4LBAUNGp3SmvScJLFLeYRIkx4IZDegrQcLlBSxDDJtW9duy1qv-HQ9WRhHQp-C9fHIQmH4-QVAPmOJqKolV6Jpa0VY4XVmtT8TiPtzea-fMYAc65fEKenmQNCk9YdJVGhnAe9spAOpRbSLmyyijs3CHDqoqo3BzY0nBIpt6AKitlPgF-Ue-3Q"
                  alt="Aurevant Éclat 38 Dial"
                  className="w-[340px] sm:w-[460px] h-[380px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-[#0e1017]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-mono">
                      Ref. 3801-RG
                    </span>
                    <h3 className="font-serif-luxury text-base font-semibold text-white">ÉCLAT 38</h3>
                    <p className="text-[11px] text-gray-400">Calibre AV-01 Ultra-Plat • 18K Rose Gold</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono font-semibold text-white">$145,000</span>
                    <span className="block text-[10px] text-[#c5a880] flex items-center justify-end group-hover:translate-x-1 transition-transform">
                      View Piece <ChevronRight className="w-3 h-3 ml-0.5 inline" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL / PRECISION HAS A CHARACTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#13151e] to-[#0c0d12] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Watchmaker image */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#090a0e] relative group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwSoL1ozHnE_lOoDsd-dcHw62pzMBnesEbAemXD9mzJJhbm9LHaQNfUtqGN5zGudYny1EWIqUAm34xiPBPDP7AP7c3Abje4OInThoBWIvEZadDffNwwQR7xhb2_byCIHAdRkku_UDfPbjV_acne8KQ6dWzdEKLKd1ig7x0XjTMhiKvVUWIUpNGLaEIW-jdKhNyuxK3Lv16Z_vJjpeshAwYL21aRTrzZ5KYpVjLJm-wo2uOdOb3OfEPxw"
                  alt="Aurevant Master Watchmaker at Work"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
                />
                <div className="absolute bottom-3 left-3 bg-[#0a0b0e]/80 backdrop-blur-sm px-3 py-1 rounded text-[10px] text-gray-300 border border-white/10">
                  Geneva Atelier 4 • Hand Anglage
                </div>
              </div>

              {/* Movement close-up photo */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#090a0e] relative group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcxMABgKBZwe20jtyDhpcX7ruNUqzLpcRMcrLcJwAfB01IQC7NGjj49_L5smk7JZosZ4OyQtkW47DVnPAmDoprHDIn_7mMotqtS2lJsXUj92VaGlnJL-mUMNagsfP6ef0-_XiaeKalP67OHtTlr5H-DehlzHc9YvMW5srzjoTkstRaKrrfWhVDYwaZJZta5pJwNrewtbgqtD-iqzgL5AChPfEXKEiMN9iB69TXkKPLvYG0BTWpV2VblQ"
                  alt="Movement Gear Train"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Editorial Story */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                THE MANUFACTURE PHILOSOPHY
              </span>

              <h2 className="font-display-luxury text-3xl sm:text-4xl text-white font-light tracking-wide leading-tight">
                PRECISION HAS A <br />
                <span className="font-serif italic text-[#c5a880]">SOUL & CHARACTER.</span>
              </h2>

              <p className="text-sm text-gray-300 font-light leading-relaxed">
                In an era dominated by transient digital speed, Aurevant stands as a citadel of mechanical permanence.
                Every component within our movements is sculpted from raw noble metals, chamfered with boxwood peg
                paste, and assembled by a single dedicated master watchmaker.
              </p>

              <p className="text-sm text-gray-400 font-light leading-relaxed">
                We believe true luxury is invisible to the casual glance: it exists in the 45-degree hand-beveled inner
                angles of a bridge, the perfect mirror polish on a screw head measuring under a millimeter, and the
                effortless silence of a twin-barrel escapement beating in unyielding harmony.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#181a24]/80 border border-white/5 space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#c5a880]">
                    <Award className="w-4 h-4" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                      Poinçon de Genève
                    </h4>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Compliant with all 12 rigorous criteria of the historic Geneva Seal.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#181a24]/80 border border-white/5 space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#c5a880]">
                    <Clock className="w-4 h-4" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                      120+ Hours Finishing
                    </h4>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Dedicated hand-decoration per movement before first casing.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('manufacture')}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-white transition-colors"
                >
                  <span>Explore the Geneva Manufacture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURATED MASTERWORK COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880]">THE ATELIER LINES</span>
            <h2 className="font-display-luxury text-3xl sm:text-4xl text-white font-light">
              CURATED COLLECTIONS
            </h2>
          </div>
          <button
            onClick={() => onNavigate('collections')}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-white transition-colors self-start md:self-auto"
          >
            <span>View All Masterworks ({TIMEPIECES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS_INFO.map((col) => (
            <div
              key={col.id}
              onClick={() => onNavigate('collections')}
              className="group relative rounded-xl overflow-hidden bg-[#12141c] border border-white/10 hover:border-[#c5a880]/60 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image container */}
              <div className="h-64 sm:h-72 overflow-hidden relative bg-[#090a0d]">
                <img
                  src={col.heroImage}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-[#12141c]/20 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-mono font-medium px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[#c5a880] border border-white/10">
                  {col.number}
                </span>
              </div>

              {/* Text content */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg font-semibold text-white group-hover:text-[#c5a880] transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-1 leading-relaxed">{col.description}</p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/5 text-xs text-gray-400">
                  <span className="text-[11px] uppercase tracking-wider text-[#c5a880]">Explore Line</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#c5a880]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED TIMEPIECE SPOTLIGHT (ÉCLAT 38) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0f1118] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181a24] text-[#c5a880] text-xs uppercase tracking-widest border border-[#c5a880]/30">
                <span>Featured Masterwork</span>
              </div>

              <h2 className="font-display-luxury text-3xl sm:text-5xl text-white font-light">
                ÉCLAT 38 <br />
                <span className="font-serif italic text-2xl sm:text-3xl text-gray-300 font-normal">
                  Ref. 3801-RG
                </span>
              </h2>

              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Sculpted from 18K 4N rose gold with an ultra-thin 7.2mm case profile. The opaline grand feu enamel
                dial reflects light with ethereal serenity, powered by the in-house twin-barrel Calibre AV-01.
              </p>

              {/* Technical badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-[#161822] rounded border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase block">Calibre</span>
                  <span className="text-white font-semibold">AV-01 Manual</span>
                </div>
                <div className="p-3 bg-[#161822] rounded border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase block">Case Height</span>
                  <span className="text-white font-semibold">7.2 mm</span>
                </div>
                <div className="p-3 bg-[#161822] rounded border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase block">Power Reserve</span>
                  <span className="text-[#c5a880] font-semibold">72 Hours</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onSelectTimepiece('eclat-38')}
                  className="px-8 py-3 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[#d8bd97] transition-all flex items-center space-x-2"
                >
                  <span>Examine Timepiece</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-6 py-3 border border-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] rounded-md hover:border-[#c5a880] hover:text-[#c5a880] transition-all"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group cursor-pointer" onClick={() => onSelectTimepiece('eclat-38')}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzRX_e2WMjob1vvMcrKeIhAx1WLI1jWvV4wi-H78VOhG_S-Ev0S56FrgZLCErmIx1G_nJ-amkJM3VyfYg1x00ppmwK2BmmXCctTHDezn15kaf6Y153tjd4XJ1IIWgONEvE5K4fb_hhkHXpX-TukyHvutq8mJGr4WKff6AIye0BV9G_OcVY87WmW4FtD0MMEnxTHpb1jGmOLiam3JuzlyS5BZwc6RZki77xZ4R2J4AepKxs9vg0eFmUg"
                  alt="Éclat 38 Dial Close-up"
                  className="w-80 sm:w-96 rounded-xl border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-xs text-white">
                    <span className="text-[#c5a880] uppercase tracking-widest font-mono text-[10px] block">
                      Limited Allocation
                    </span>
                    <span className="font-serif-luxury font-medium text-base">25 Pieces Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VANGUARD CLIENT VAULT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#141620] via-[#10121a] to-[#0c0d12] border border-[#c5a880]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center space-x-2 text-[#c5a880]">
              <Shield className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium">Vanguard Client Portal</span>
            </div>
            <h3 className="font-display-luxury text-2xl sm:text-3xl text-white font-light">
              THE CONNOISSEUR'S VAULT
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Track your acquired horological collection, view cryptographic Poinçon de Genève provenance records,
              and manage direct consultations with Elena Rostova and our Geneva horologists.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-8 py-3.5 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[#d8bd97] transition-all flex items-center space-x-2 shadow-lg"
            >
              <span>Enter Vanguard Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
