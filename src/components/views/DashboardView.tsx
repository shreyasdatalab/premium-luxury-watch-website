import React, { useState } from 'react';
import {
  Shield,
  Clock,
  Calendar,
  Sparkles,
  Award,
  ChevronRight,
  ExternalLink,
  Wrench,
  FileCheck,
  CheckCircle2,
  Lock,
  User,
  Settings,
  Package,
  Layers,
  PhoneCall,
  Download
} from 'lucide-react';
import { CURRENT_USER, MEMBER_VAULT_WATCHES, INITIAL_CONSULTATIONS } from '../../data/timepieces';
import { MemberWatch } from '../../types';

interface DashboardViewProps {
  onOpenConsultation: () => void;
  onRequestService: (watch: MemberWatch) => void;
  onViewCertificate: (watch: MemberWatch) => void;
  onSelectTimepiece: (id: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onOpenConsultation,
  onRequestService,
  onViewCertificate,
  onSelectTimepiece
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'collection' | 'orders' | 'appointments' | 'settings'>('overview');
  const [vaultWatches, setVaultWatches] = useState(MEMBER_VAULT_WATCHES);
  const [savedSettings, setSavedSettings] = useState<boolean>(false);

  const handleSaveSettings = () => {
    setSavedSettings(true);
    setTimeout(() => setSavedSettings(false), 3500);
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141722] via-[#10121b] to-[#0a0b10] border border-[#c5a880]/30 shadow-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={CURRENT_USER.avatar}
              alt={CURRENT_USER.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#c5a880] shadow-lg"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0c0d10]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/40">
                {CURRENT_USER.tier} • {CURRENT_USER.memberNumber}
              </span>
            </div>
            <h1 className="font-serif-luxury text-2xl sm:text-3xl text-white font-semibold mt-1">
              Good evening, {CURRENT_USER.name}.
            </h1>
            <p className="text-xs text-gray-400 font-light">
              Your horological journey continues • Dedicated Concierge: {CURRENT_USER.dedicatedConcierge}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenConsultation()}
            className="px-5 py-2.5 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-widest rounded-md hover:bg-[#d8bd97] transition-all flex items-center space-x-2 shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Specialist</span>
          </button>
        </div>
      </div>

      {/* Main Layout (Sidebar + Content) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-3 bg-[#11131a] p-4 rounded-xl border border-white/10 shadow-xl">
          <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-[#c5a880]">
            Vanguard Portal
          </div>
          <div className="space-y-1">
            {[
              { id: 'overview', label: 'Overview & Bento', icon: Layers },
              { id: 'collection', label: 'My Vault Collection', icon: Shield, badge: vaultWatches.length },
              { id: 'orders', label: 'Commissions & Orders', icon: Package, badge: '1 Active' },
              { id: 'appointments', label: 'Appointments', icon: Calendar, badge: '1 Confirmed' },
              { id: 'settings', label: 'Concierge Preferences', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#c5a880] text-[#0c0d10] font-semibold shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isActive ? 'bg-[#0c0d10] text-[#c5a880]' : 'bg-[#181a24] text-gray-400'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/5 space-y-2">
            <div className="p-3 bg-[#151722] rounded-lg border border-white/5 text-[11px] text-gray-400 space-y-1">
              <span className="text-[#c5a880] font-semibold block uppercase text-[10px]">Geneva Direct Line</span>
              <p className="text-white font-mono">+41 22 819 00 88</p>
              <p className="text-[10px] text-gray-500">Encrypted Vanguard VIP Support</p>
            </div>
          </div>
        </div>

        {/* Right Tab Content */}
        <div className="lg:col-span-9 space-y-8">
          {/* TAB 1: OVERVIEW & BENTO GRID */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Recent Selection Card */}
                <div className="p-6 rounded-2xl bg-[#11131b] border border-[#c5a880]/30 shadow-xl flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a880]">
                      Recent Selection
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center">
                      <Clock className="w-3 h-3 mr-1 inline" /> Undergoing Certification
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <img
                      src={CURRENT_USER.recentSelection.image}
                      alt={CURRENT_USER.recentSelection.name}
                      className="w-20 h-20 object-cover rounded-xl bg-[#090a0e] border border-white/10"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 font-mono">
                        {CURRENT_USER.recentSelection.reference}
                      </span>
                      <h4 className="font-serif-luxury text-base font-semibold text-white">
                        {CURRENT_USER.recentSelection.name}
                      </h4>
                      <p className="text-xs text-gray-400">{CURRENT_USER.recentSelection.edition}</p>
                      <p className="text-[11px] text-[#c5a880]">
                        Expected Delivery: {CURRENT_USER.recentSelection.expectedDelivery}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex justify-between items-center text-xs">
                    <span className="text-gray-400">Manufacture Atelier 4 • Geneva</span>
                    <button
                      onClick={() => onSelectTimepiece('celestial-tourbillon')}
                      className="text-[#c5a880] hover:text-white flex items-center space-x-1 font-medium"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. Next Consultation Card */}
                <div className="p-6 rounded-2xl bg-[#11131b] border border-white/10 shadow-xl flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a880]">
                      Next Consultation
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1 inline" /> Confirmed
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <img
                      src={INITIAL_CONSULTATIONS[0].specialist.avatar}
                      alt={INITIAL_CONSULTATIONS[0].specialist.name}
                      className="w-16 h-16 rounded-full object-cover border border-[#c5a880]/50"
                    />
                    <div className="space-y-1">
                      <h4 className="font-serif-luxury text-base font-semibold text-white">
                        {INITIAL_CONSULTATIONS[0].type}
                      </h4>
                      <p className="text-xs text-gray-300">{INITIAL_CONSULTATIONS[0].specialist.name}</p>
                      <p className="text-[11px] text-[#c5a880] font-mono">{INITIAL_CONSULTATIONS[0].date}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex justify-between items-center text-xs">
                    <span className="text-gray-400">{INITIAL_CONSULTATIONS[0].location}</span>
                    <button
                      onClick={() => setActiveTab('appointments')}
                      className="text-[#c5a880] hover:text-white flex items-center space-x-1 font-medium"
                    >
                      <span>Manage Booking</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. My Collection Section (Vault Pieces) */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-serif-luxury text-xl text-white font-semibold">Registered Vault Pieces</h3>
                    <p className="text-xs text-gray-400">Authenticated Swiss Timepieces in Alexander Voss's Portfolio</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('collection')}
                    className="text-xs uppercase tracking-wider text-[#c5a880] hover:text-white flex items-center space-x-1"
                  >
                    <span>View Complete Vault ({vaultWatches.length})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {vaultWatches.map((watch) => (
                    <div
                      key={watch.id}
                      className="p-4 rounded-xl bg-[#11131a] border border-white/10 hover:border-[#c5a880]/50 transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="relative rounded-lg overflow-hidden bg-[#090a0d] h-40">
                        <img
                          src={watch.image}
                          alt={watch.name}
                          className="w-full h-full object-cover object-center"
                        />
                        <span className="absolute top-2 left-2 text-[9px] font-mono px-2 py-0.5 rounded bg-black/70 text-[#c5a880] border border-white/10">
                          {watch.reference}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-serif-luxury text-sm font-semibold text-white truncate">{watch.name}</h4>
                        <div className="flex items-center justify-between text-[11px] text-gray-400">
                          <span>Serial: {watch.serialNumber}</span>
                          <span className="text-[#c5a880] font-mono">{watch.marketValuation}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex gap-2">
                        <button
                          onClick={() => onViewCertificate(watch)}
                          className="flex-1 py-1.5 bg-[#181a24] hover:bg-[#202432] text-white text-[11px] rounded border border-white/10 flex items-center justify-center space-x-1"
                          title="Provenance Certificate"
                        >
                          <FileCheck className="w-3 h-3 text-[#c5a880]" />
                          <span>COSC Cert</span>
                        </button>
                        <button
                          onClick={() => onRequestService(watch)}
                          className="px-2.5 py-1.5 bg-[#c5a880]/15 hover:bg-[#c5a880]/25 text-[#c5a880] border border-[#c5a880]/30 text-[11px] rounded flex items-center justify-center space-x-1"
                          title="Request Maintenance"
                        >
                          <Wrench className="w-3 h-3" />
                          <span>Service</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MY VAULT COLLECTION */}
          {activeTab === 'collection' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-2xl text-white font-semibold">Your Registered Horological Vault</h3>
                <p className="text-xs text-gray-400">
                  Each timepiece is cryptographically ledgered with Poinçon de Genève certification and full service histories.
                </p>
              </div>

              <div className="space-y-4">
                {vaultWatches.map((watch) => (
                  <div
                    key={watch.id}
                    className="p-5 rounded-xl bg-[#11131a] border border-white/10 flex flex-col md:flex-row items-center gap-6"
                  >
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="w-28 h-28 object-cover rounded-lg bg-[#090a0e] border border-white/10 shrink-0"
                    />

                    <div className="flex-1 space-y-2 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-mono text-[#c5a880] uppercase">{watch.reference}</span>
                          <h4 className="font-serif-luxury text-lg font-semibold text-white">{watch.name}</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-gray-400 block uppercase">Insured Valuation</span>
                          <span className="font-mono text-sm text-[#c5a880] font-semibold">{watch.marketValuation}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/5 text-[11px] text-gray-400">
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase">Serial Number</span>
                          <span className="text-white font-mono">{watch.serialNumber}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase">Warranty Until</span>
                          <span className="text-emerald-400">{watch.warrantyValidUntil}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase">Chronometer Delta</span>
                          <span className="text-white font-mono">{watch.provenance.accuracyDelta}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase">Next Overhaul</span>
                          <span className="text-gray-300">{watch.nextServiceRecommended}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
                      <button
                        onClick={() => onViewCertificate(watch)}
                        className="px-4 py-2 bg-[#181a24] hover:bg-[#202432] text-white text-xs rounded border border-white/10 flex items-center justify-center space-x-1.5"
                      >
                        <Award className="w-3.5 h-3.5 text-[#c5a880]" />
                        <span>View Provenance</span>
                      </button>
                      <button
                        onClick={() => onRequestService(watch)}
                        className="px-4 py-2 bg-[#c5a880] hover:bg-[#d8bd97] text-[#0c0d10] font-semibold text-xs rounded flex items-center justify-center space-x-1.5"
                      >
                        <Wrench className="w-3.5 h-3.5" />
                        <span>Request Service</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ORDERS & COMMISSIONS */}
          {activeTab === 'orders' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-2xl text-white font-semibold">Active Commissions & Allocations</h3>
                <p className="text-xs text-gray-400">Real-time status from our Geneva manufacture assembly line.</p>
              </div>

              <div className="p-6 rounded-xl bg-[#11131a] border border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[10px] text-[#c5a880] uppercase tracking-widest font-mono">
                      Allocation Ref: AUR-ALLOC-9901-03
                    </span>
                    <h4 className="font-serif-luxury text-lg text-white font-semibold">The Celestial Tourbillon</h4>
                    <p className="text-xs text-gray-400">Piece 03 of 08 Worldwide • Solid Platinum Case Core</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-[#c5a880]">$320,000</span>
                    <span className="block text-[10px] text-emerald-400">Deposit Cleared</span>
                  </div>
                </div>

                {/* Progress tracker */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span className="text-white font-medium">Stage 4 of 5: COSC 15-Day Chronometer Chamber Test</span>
                    <span className="text-[#c5a880] font-mono">85% Complete</span>
                  </div>
                  <div className="h-2 w-full bg-[#181a24] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#c5a880] to-[#e4d0b2] w-[85%] rounded-full" />
                  </div>
                  <div className="grid grid-cols-4 text-[10px] text-gray-500 pt-1">
                    <span>1. Ingot Milling</span>
                    <span>2. Bridge Anglage</span>
                    <span>3. Tourbillon Assembly</span>
                    <span className="text-[#c5a880] font-semibold text-right">4. Geneva Certification</span>
                  </div>
                </div>

                <div className="p-4 bg-[#151722] rounded-lg border border-white/5 text-xs text-gray-300 space-y-1">
                  <p className="text-[#c5a880] font-medium">Master Watchmaker Note from Marc-Aurèle Vauthey:</p>
                  <p className="text-[11px] text-gray-400 italic">
                    "The flying tourbillon carriage passed the 6-position timing test with an average rate of +0.3 sec/day. Final casing scheduled for next Tuesday."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: APPOINTMENTS */}
          {activeTab === 'appointments' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif-luxury text-2xl text-white font-semibold">Consultations & Private Fittings</h3>
                  <p className="text-xs text-gray-400">Manage your bookings with senior curators and master watchmakers.</p>
                </div>
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-4 py-2 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#d8bd97]"
                >
                  Schedule New
                </button>
              </div>

              <div className="space-y-4">
                {INITIAL_CONSULTATIONS.map((c) => (
                  <div key={c.id} className="p-5 rounded-xl bg-[#11131a] border border-[#c5a880]/30 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-3.5">
                        <img
                          src={c.specialist.avatar}
                          alt={c.specialist.name}
                          className="w-12 h-12 rounded-full object-cover border border-[#c5a880]"
                        />
                        <div>
                          <span className="text-[10px] uppercase font-mono text-[#c5a880]">{c.type}</span>
                          <h4 className="font-serif-luxury text-base text-white font-semibold">{c.specialist.name}</h4>
                          <p className="text-xs text-gray-400">{c.specialist.title}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-[#c5a880] font-mono font-medium">{c.date}</span>
                        <p className="text-xs text-gray-300">{c.time}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-[#151722] rounded border border-white/5 text-xs text-gray-400">
                      <span className="text-white font-medium">Session Directives: </span>
                      {c.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CONCIERGE SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-2xl text-white font-semibold">Vanguard Concierge Preferences</h3>
                <p className="text-xs text-gray-400">Customize private allocation dispatches and encrypted communication.</p>
              </div>

              <div className="p-6 rounded-xl bg-[#11131a] border border-white/10 space-y-4 text-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#151722] rounded border border-white/5">
                    <div>
                      <h4 className="text-white font-semibold">Private Allocation Early Notification</h4>
                      <p className="text-gray-400 text-[11px]">
                        Receive private previews 48 hours before international public announcements.
                      </p>
                    </div>
                    <input type="checkbox" defaultChecked className="accent-[#c5a880] w-4 h-4" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#151722] rounded border border-white/5">
                    <div>
                      <h4 className="text-white font-semibold">Armored Courier Delivery Mode</h4>
                      <p className="text-gray-400 text-[11px]">
                        Require dual-identity cryptographic key handoff upon timepiece arrival.
                      </p>
                    </div>
                    <input type="checkbox" defaultChecked className="accent-[#c5a880] w-4 h-4" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#151722] rounded border border-white/5">
                    <div>
                      <h4 className="text-white font-semibold">Annual Atelier Inspection Reminder</h4>
                      <p className="text-gray-400 text-[11px]">
                        Automated dispatch of diagnostic box to your Geneva residence every 24 months.
                      </p>
                    </div>
                    <input type="checkbox" defaultChecked className="accent-[#c5a880] w-4 h-4" />
                  </div>
                </div>

                {savedSettings && (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded flex items-center space-x-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Vanguard concierge encryption and dispatch preferences updated.</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={handleSaveSettings}
                    className="px-6 py-2.5 bg-[#c5a880] text-[#0c0d10] font-semibold uppercase tracking-widest text-xs rounded hover:bg-[#d8bd97]"
                  >
                    {savedSettings ? 'Preferences Saved' : 'Save Preferences'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
