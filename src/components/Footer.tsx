import React, { useState } from 'react';
import { Shield, Clock, Compass, Award, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="aurevant-footer" className="bg-[#08090b] border-t border-white/10 text-gray-400 text-sm">
      {/* Top Banner / Maison Guarantee */}
      <div className="border-b border-white/5 py-8 bg-[#0c0d10]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#15171e] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">Poinçon de Genève</p>
              <p className="text-[11px] text-gray-500">Hallmark of highest Swiss chronometry</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#15171e] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">8-Year International Warranty</p>
              <p className="text-[11px] text-gray-500">Full Geneva atelier manufacture coverage</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#15171e] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">COSC Chronometer Tested</p>
              <p className="text-[11px] text-gray-500">Regulated to ±1.0 seconds daily precision</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#15171e] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">Armored Global Courier</p>
              <p className="text-[11px] text-gray-500">White-glove insured discreet transit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Brand & Manifesto */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-full border border-[#c5a880] flex items-center justify-center bg-[#15171e]">
              <span className="text-[#c5a880] text-xs font-serif font-bold">A</span>
            </div>
            <span className="font-display-luxury text-xl tracking-[0.25em] text-white">AUREVANT</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-400 max-w-sm">
            Rooted in the high Jura valleys and finished in our Geneva ateliers, Aurevant engineers mechanical
            timepieces that redefine classical elegance through modern horological purism.
          </p>
          <div className="pt-2">
            <p className="text-[11px] uppercase tracking-widest text-[#c5a880] font-medium">Geneva Manufacture</p>
            <p className="text-xs text-gray-500">42 Rue du Rhône, 1204 Genève, Switzerland</p>
          </div>
        </div>

        {/* Collections */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Collections</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('collections')} className="hover:text-[#c5a880] transition-colors">
                Éclat Masterworks
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('collections')} className="hover:text-[#c5a880] transition-colors">
                Noctis Monopoussoir
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('collections')} className="hover:text-[#c5a880] transition-colors">
                Meridian Dual-Time
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('collections')} className="hover:text-[#c5a880] transition-colors">
                Celestial Tourbillon
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('collections')} className="hover:text-[#c5a880] transition-colors">
                Bespoke Commissions
              </button>
            </li>
          </ul>
        </div>

        {/* Maison & Services */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">The Maison</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('manufacture')} className="hover:text-[#c5a880] transition-colors">
                Manufacture Heritage
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('boutiques')} className="hover:text-[#c5a880] transition-colors">
                Salons & Boutiques
              </button>
            </li>
            <li>
              <button onClick={() => onOpenConsultation()} className="hover:text-[#c5a880] transition-colors">
                Private Consultation
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('dashboard')} className="hover:text-[#c5a880] transition-colors text-[#c5a880]">
                Vanguard Client Vault
              </button>
            </li>
            <li>
              <span className="text-gray-500">Provenance Ledger (COSC)</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / The Journal */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">The Horological Journal</h4>
          <p className="text-xs text-gray-400">
            Receive private allocations, atelier dispatch notes, and invitations to Geneva private viewings.
          </p>
          {subscribed ? (
            <div className="p-3 bg-[#151a24] border border-[#c5a880]/30 rounded text-xs text-[#c5a880] flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>You are now subscribed to the Aurevant Journal.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  id="footer-newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-[#12141a] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a880]"
                  required
                />
                <button
                  type="submit"
                  id="footer-newsletter-submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#c5a880] text-[#0c0d10] rounded text-xs font-semibold hover:bg-[#d8bd97] transition-colors flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[10px] text-gray-600">Strictly confidential. No spam.</p>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} AUREVANT HAUTE HORLOGERIE GENÈVE S.A. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Horological Service</span>
            <span className="hover:text-gray-400 cursor-pointer">Geneva Seal Certification</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
