import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Sparkles, CheckCircle2, UserCheck, Video } from 'lucide-react';
import { BOUTIQUES } from '../../data/timepieces';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTimepieceName?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTimepieceName
}) => {
  const [sessionType, setSessionType] = useState<'in-person' | 'virtual'>('in-person');
  const [boutique, setBoutique] = useState('Genève (Rue du Rhône)');
  const [specialist, setSpecialist] = useState('Elena Rostova — Senior Horologist');
  const [selectedDate, setSelectedDate] = useState('2024-11-04');
  const [selectedTime, setSelectedTime] = useState('14:30');
  const [clientName, setClientName] = useState('Alexander Voss');
  const [clientPhone, setClientPhone] = useState('+41 79 123 45 67');
  const [interestModel, setInterestModel] = useState(
    typeof initialTimepieceName === 'string' && initialTimepieceName ? initialTimepieceName : 'Éclat 38 Ultra-Plat'
  );
  const [specialRequests, setSpecialRequests] = useState('Custom platinum pin buckle engraving & private salon viewing.');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof initialTimepieceName === 'string' && initialTimepieceName.trim()) {
      setInterestModel(initialTimepieceName.trim());
    } else {
      setInterestModel('Éclat 38 Ultra-Plat');
    }
  }, [initialTimepieceName, isOpen]);

  if (!isOpen) return null;

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
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" onClick={handleClose} />

      {/* Modal Card */}
      <div className="relative bg-[#0f1117] border border-[#c5a880]/30 rounded-xl max-w-xl w-full text-white shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top gold bar */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#14161f]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#1c1f2a] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-base font-medium text-white tracking-wide">
                Private Horological Consultation
              </h3>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest">
                Geneva Manufacture Concierge Service
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/5 transition-colors"
          >
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
              <h4 className="text-lg font-serif-luxury text-white">Consultation Confirmed</h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                Dear <span className="text-[#c5a880] font-semibold">{clientName}</span>, your private appointment with{' '}
                <span className="text-white font-medium">{specialist}</span> has been locked into our salon ledger.
              </p>
              <div className="p-4 bg-[#141620] border border-white/10 rounded-lg text-left text-xs space-y-2 text-gray-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Format / Venue:</span>
                  <span className="text-white font-medium">
                    {sessionType === 'in-person' ? `In-Person (${boutique})` : 'Private Virtual Suite'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Date & Time:</span>
                  <span className="text-[#c5a880] font-mono font-medium">
                    {selectedDate} at {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Timepiece of Interest:</span>
                  <span className="text-white font-medium">{interestModel}</span>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-full py-3 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-widest rounded-md hover:bg-[#d8bd97]"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Switcher */}
              <div className="grid grid-cols-2 gap-3 p-1 bg-[#151720] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setSessionType('in-person')}
                  className={`py-2 text-xs rounded-md font-medium flex items-center justify-center space-x-2 transition-all ${
                    sessionType === 'in-person'
                      ? 'bg-[#c5a880] text-[#0c0d10] font-semibold shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Private Salon Fitting</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType('virtual')}
                  className={`py-2 text-xs rounded-md font-medium flex items-center justify-center space-x-2 transition-all ${
                    sessionType === 'virtual'
                      ? 'bg-[#c5a880] text-[#0c0d10] font-semibold shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Virtual Video Suite</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sessionType === 'in-person' ? (
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                      Maison Boutique
                    </label>
                    <select
                      value={boutique}
                      onChange={(e) => setBoutique(e.target.value)}
                      className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                    >
                      <option value="Genève (Rue du Rhône)">Genève — 42 Rue du Rhône</option>
                      <option value="London (Mayfair)">London — 14 New Bond Street</option>
                      <option value="New York (Madison Ave)">New York — 740 Madison Ave</option>
                      <option value="Tokyo (Ginza)">Tokyo — 6-10-1 Ginza</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                      Private Virtual Suite
                    </label>
                    <div className="bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-[#c5a880] flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Encrypted 4K Macro Stream</span>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Specialist / Curator
                  </label>
                  <select
                    value={specialist}
                    onChange={(e) => setSpecialist(e.target.value)}
                    className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Elena Rostova — Senior Horologist">Elena Rostova (Senior Horologist)</option>
                    <option value="Marc-Aurèle Vauthey — Master Watchmaker">Marc-Aurèle Vauthey (Master Watchmaker)</option>
                    <option value="Lord Alistair Sterling — London Curator">Lord Alistair Sterling (London Curator)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="10:30">10:30 CET</option>
                    <option value="12:00">12:00 CET</option>
                    <option value="14:30">14:30 CET</option>
                    <option value="16:00">16:00 CET</option>
                    <option value="18:00">18:00 CET</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                    Direct Telephone
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                    className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Timepiece of Specific Interest
                </label>
                <input
                  type="text"
                  value={interestModel}
                  onChange={(e) => setInterestModel(e.target.value)}
                  className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Specific Horological Inquiries or Bespoke Notes
                </label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={2}
                  className="w-full bg-[#151720] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[#d8bd97] transition-all flex items-center justify-center space-x-2"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Confirm Consultation Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
