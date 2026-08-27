import React, { useState } from 'react';
import { X, Wrench, ShieldCheck, CheckCircle2, Clock, Truck, FileText } from 'lucide-react';
import { MemberWatch } from '../../types';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  watch: MemberWatch | null;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  watch
}) => {
  const [serviceType, setServiceType] = useState('Full Manufacture Overhaul & Regulation');
  const [pickupMethod, setPickupMethod] = useState('Armored Swiss Courier');
  const [conciergeNotes, setConciergeNotes] = useState('Maintain unpolished bevel edges and test 72h amplitude.');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !watch) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" onClick={handleClose} />

      <div className="relative bg-[#0f1117] border border-[#c5a880]/30 rounded-xl max-w-lg w-full text-white shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#14161f]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#1c1f2a] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-base font-medium text-white tracking-wide">
                Manufacture Service Request
              </h3>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest">
                Geneva Master Horology Atelier
              </p>
            </div>
          </div>
          <button onClick={handleClose} className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/5">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#c5a880]/15 border border-[#c5a880] flex items-center justify-center mx-auto text-[#c5a880]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-serif-luxury text-white">Service Case Initialized</h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                Your service case for <span className="text-[#c5a880] font-semibold">{watch.name}</span> (
                {watch.serialNumber}) has been created with case ID{' '}
                <span className="font-mono text-white">SVC-GEN-{(Math.random() * 8000 + 1000).toFixed(0)}</span>.
              </p>
              <div className="p-4 bg-[#141620] border border-white/10 rounded-lg text-left text-xs space-y-2 text-gray-300">
                <p className="text-gray-400">Next Steps:</p>
                <p className="text-[11px] text-gray-300">
                  • An armored tamper-proof shipping case is being dispatched to your Geneva residence.
                </p>
                <p className="text-[11px] text-gray-300">
                  • Upon arrival at the Geneva Atelier, Master Horologist Henri Lecomte will perform diagnostic testing.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="w-full py-3 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-widest rounded-md hover:bg-[#d8bd97]"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Watch Details Card */}
              <div className="p-3 bg-[#151720] border border-white/10 rounded-lg flex items-center space-x-3.5">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-14 h-14 object-cover rounded bg-[#0b0c10] border border-white/10 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-[#c5a880] uppercase tracking-wider font-mono">
                    {watch.reference}
                  </span>
                  <h4 className="text-sm font-semibold text-white truncate font-serif-luxury">{watch.name}</h4>
                  <div className="flex items-center space-x-2 text-[11px] text-gray-400 mt-0.5">
                    <span>Serial: {watch.serialNumber}</span>
                    <span>•</span>
                    <span className="text-emerald-400 flex items-center">
                      <ShieldCheck className="w-3 h-3 mr-0.5 inline" /> Warranty Active
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Horological Service Tier
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="Full Manufacture Overhaul & Regulation">
                    Full Manufacture Overhaul & Regulation (Disassembly, Ultrasonic Clean, Escapement Oil)
                  </option>
                  <option value="Chronometer COSC Recalibration & Timing Test">
                    Chronometer COSC Recalibration & Timing Test
                  </option>
                  <option value="Alligator Leather Strap Replacement & Custom Sizing">
                    Alligator Leather Strap Replacement & Custom Sizing
                  </option>
                  <option value="Case Refinishing (Opt-In Satin Polish)">
                    Case Refinishing (Opt-In Satin Polish)
                  </option>
                  <option value="Insurance Valuation & Archival Certificate Renewal">
                    Insurance Valuation & Archival Certificate Renewal
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Logistics & Collection Mode
                </label>
                <select
                  value={pickupMethod}
                  onChange={(e) => setPickupMethod(e.target.value)}
                  className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="Armored Swiss Courier">Armored Swiss Courier (Geneva Residence Pickup)</option>
                  <option value="Drop-off at Geneva Boutique (42 Rue du Rhône)">
                    Drop-off at Geneva Salon (42 Rue du Rhône)
                  </option>
                  <option value="Drop-off at London Mayfair Salon">Drop-off at London Mayfair Salon</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Specific Preservation Directives
                </label>
                <textarea
                  value={conciergeNotes}
                  onChange={(e) => setConciergeNotes(e.target.value)}
                  rows={2}
                  className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[#d8bd97] transition-all flex items-center justify-center space-x-2"
                >
                  <Truck className="w-4 h-4" />
                  <span>Submit Service Dispatch</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
