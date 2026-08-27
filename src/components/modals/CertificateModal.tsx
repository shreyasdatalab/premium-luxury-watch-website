import React from 'react';
import { X, Award, ShieldCheck, Download, CheckCircle, QrCode } from 'lucide-react';
import { MemberWatch } from '../../types';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  watch: MemberWatch | null;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  watch
}) => {
  const [downloaded, setDownloaded] = React.useState(false);

  if (!isOpen || !watch) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative bg-[#0d0f14] border border-[#c5a880]/40 rounded-xl max-w-2xl w-full text-white shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Certificate Frame with decorative borders */}
        <div className="p-8 sm:p-10 border-8 border-[#161822] bg-gradient-to-b from-[#11131a] to-[#0a0b0e] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Header */}
          <div className="text-center space-y-2 border-b border-[#c5a880]/20 pb-6">
            <div className="w-12 h-12 rounded-full border border-[#c5a880] mx-auto flex items-center justify-center bg-[#181a24] text-[#c5a880]">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-display-luxury text-xl sm:text-2xl tracking-[0.25em] text-[#c5a880] uppercase">
              AUREVANT GENÈVE
            </h2>
            <p className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-light">
              CERTIFICAT D'ORIGINE & DE CHRONOMÉTRIE
            </p>
          </div>

          {/* Main Certificate Content */}
          <div className="py-6 space-y-6">
            <div className="text-center space-y-1">
              <p className="text-xs text-gray-400 font-light italic">
                This document certifies that the mechanical timepiece described below was conceived, manufactured,
                and hand-adjusted in our Geneva Haute Horlogerie ateliers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#14161f]/80 p-5 rounded-lg border border-white/5 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Timepiece Model</span>
                <span className="font-serif-luxury text-sm font-semibold text-white">{watch.name}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Reference Number</span>
                <span className="font-mono text-xs text-[#c5a880]">{watch.reference}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Individual Serial</span>
                <span className="font-mono text-xs text-white">{watch.serialNumber}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Owner of Record</span>
                <span className="text-white font-medium">Alexander Voss (Vanguard #AV-8842)</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Master Watchmaker</span>
                <span className="text-gray-200">{watch.provenance.masterWatchmaker}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Timing Accuracy Delta</span>
                <span className="text-emerald-400 font-mono">{watch.provenance.accuracyDelta}</span>
              </div>
            </div>

            {/* Seals & Signatures */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 items-center text-center">
              <div className="space-y-1">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#151720] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 block">Poinçon de Genève</span>
                <span className="text-[9px] text-emerald-400">Attested & Sealed</span>
              </div>

              <div className="space-y-1">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#151720] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                  <QrCode className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 block">COSC Vault ID</span>
                <span className="text-[9px] font-mono text-gray-400">CH-GEN-8842</span>
              </div>

              <div className="space-y-1">
                <div className="h-10 flex items-center justify-center border-b border-dashed border-gray-600">
                  <span className="font-serif italic text-sm text-[#c5a880]">H. Lecomte</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 block">Chief Horologist</span>
              </div>
            </div>
          </div>

          {downloaded && (
            <div className="mb-3 p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded flex items-center space-x-2 text-xs text-emerald-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Official Cryptographic Provenance PDF generated & verified.</span>
            </div>
          )}

          {/* Action Bar */}
          <div className="pt-4 border-t border-[#c5a880]/20 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 py-2.5 bg-[#c5a880] text-[#0c0d10] font-semibold text-xs uppercase tracking-widest rounded hover:bg-[#d8bd97] transition-all flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>{downloaded ? 'Certificate Downloaded' : 'Download High-Res PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs text-gray-300 border border-white/10 rounded hover:bg-white/5"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
