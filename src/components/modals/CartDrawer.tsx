import React, { useState } from 'react';
import { X, Trash2, ShieldCheck, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { CartItem } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onClearCart: () => void;
  onOpenConsultation: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
  onOpenConsultation
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [isArmoredCourier, setIsArmoredCourier] = useState(true);
  const [bespokeEngraving, setBespokeEngraving] = useState('');
  const [clientName, setClientName] = useState('Alexander Voss');
  const [clientEmail, setClientEmail] = useState('alexander.voss@vanguard.ch');
  const [clientAddress, setClientAddress] = useState('Quai Gustave-Ador 18, 1207 Genève');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.timepiece.price * item.quantity, 0);
  const formattedSubtotal = '$' + subtotal.toLocaleString();
  const courierFee = isArmoredCourier ? 0 : 0; // Compliment of Maison

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const handleResetAndClose = () => {
    if (checkoutStep === 'success') {
      onClearCart();
      setCheckoutStep('cart');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e1015] border-l border-white/10 text-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#13161d]">
            <div className="flex items-center space-x-2.5">
              <span className="font-display-luxury text-sm tracking-[0.2em] text-[#c5a880] uppercase">
                Acquisitions Bag
              </span>
              <span className="text-xs bg-[#252830] text-gray-300 px-2 py-0.5 rounded-full font-mono">
                {items.length} {items.length === 1 ? 'Piece' : 'Pieces'}
              </span>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutStep === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#15171e] border border-white/10 flex items-center justify-center mx-auto text-gray-500">
                      <Lock className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <p className="text-sm font-serif-luxury text-gray-300">Your acquisition bag is currently empty.</p>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                      Explore our handcrafted Haute Horlogerie collections to reserve your timepiece.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.timepiece.id}
                        className="p-4 rounded-lg bg-[#14161e] border border-white/5 flex gap-4 hover:border-white/15 transition-all"
                      >
                        <img
                          src={item.timepiece.images.dial}
                          alt={item.timepiece.name}
                          className="w-20 h-20 object-cover rounded bg-[#090a0d] border border-white/10 shrink-0"
                        />
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between">
                              <span className="text-[10px] uppercase tracking-widest text-[#c5a880]">
                                {item.timepiece.reference}
                              </span>
                              <button
                                onClick={() => onRemoveItem(item.timepiece.id)}
                                className="text-gray-500 hover:text-red-400 p-0.5 transition-colors"
                                title="Remove piece"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <h4 className="text-sm font-semibold text-white truncate font-serif-luxury">
                              {item.timepiece.name}
                            </h4>
                            <p className="text-xs text-gray-400 mt-0.5">{item.timepiece.specs.caseMaterial}</p>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <span className="text-xs font-mono font-medium text-[#c5a880]">
                              {item.timepiece.priceFormatted}
                            </span>
                            <div className="flex items-center space-x-2 text-xs border border-white/10 rounded px-2 py-0.5 bg-[#0a0b0e]">
                              <button
                                onClick={() => onUpdateQuantity(item.timepiece.id, Math.max(1, item.quantity - 1))}
                                className="text-gray-400 hover:text-white px-1"
                              >
                                -
                              </button>
                              <span className="text-white font-mono">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.timepiece.id, item.quantity + 1)}
                                className="text-gray-400 hover:text-white px-1"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Armored Courier & Security */}
                    <div className="p-4 rounded-lg bg-[#141822] border border-[#c5a880]/20 space-y-2">
                      <div className="flex items-center space-x-2 text-xs text-[#c5a880] font-medium">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Maison White-Glove Armored Transit</span>
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Includes fully insured Swiss courier delivery, tamper-proof seal box, and personalized Geneva COSC Provenance Passport.
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'checkout' && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-widest text-[#c5a880]">Step 2 of 2</span>
                  <h3 className="text-base font-serif-luxury text-white">Acquisition & Delivery Verification</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Vanguard Client Name</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      className="w-full bg-[#14161e] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Confidential Email</label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      required
                      className="w-full bg-[#14161e] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Insured Delivery Address / Private Salon</label>
                    <textarea
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                      rows={2}
                      required
                      className="w-full bg-[#14161e] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">
                      Bespoke Caseback Engraving (Complimentary)
                    </label>
                    <input
                      type="text"
                      value={bespokeEngraving}
                      onChange={(e) => setBespokeEngraving(e.target.value)}
                      placeholder="e.g., A. VOSS — MCMXXIV"
                      className="w-full bg-[#14161e] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#111319] border border-white/5 rounded text-[11px] text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Subtotal ({items.length} pieces)</span>
                    <span className="text-white font-mono">{formattedSubtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Armored White-Glove Transit</span>
                    <span className="text-[#c5a880] font-mono">Complimentary</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-white/5 font-semibold text-white">
                    <span>Total Acquisition</span>
                    <span className="text-[#c5a880] font-mono">{formattedSubtotal}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-1/3 py-2.5 text-xs text-gray-300 border border-white/10 rounded hover:bg-white/5"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-2.5 text-xs font-semibold uppercase tracking-widest bg-[#c5a880] text-[#0c0d10] rounded hover:bg-[#d8bd97] transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Confirm Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c5a880]/15 border border-[#c5a880] flex items-center justify-center mx-auto text-[#c5a880]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-serif-luxury text-white">Acquisition Reserved</h3>
                <p className="text-xs text-gray-300 leading-relaxed max-w-xs mx-auto">
                  Thank you, <span className="text-[#c5a880] font-semibold">{clientName}</span>. Your horological order
                  has been transmitted to our Geneva Manufacture Master Ateliers.
                </p>
                <div className="p-3 bg-[#14161e] border border-white/10 rounded text-left text-xs space-y-1.5 text-gray-400">
                  <p className="text-[#c5a880] font-medium text-[11px] uppercase tracking-wider">Allocation Reference</p>
                  <p className="font-mono text-white">AUR-ACQ-2024-{(Math.random() * 9000 + 1000).toFixed(0)}</p>
                  <p className="text-[11px] text-gray-500">
                    Elena Rostova (Senior Horologist) will contact you within 2 hours to confirm your bespoke serial allocation and final fitting appointment.
                  </p>
                </div>
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 text-xs uppercase tracking-widest font-semibold bg-[#c5a880] text-[#0c0d10] rounded hover:bg-[#d8bd97]"
                >
                  Return to Maison
                </button>
              </div>
            )}
          </div>

          {/* Footer of Drawer */}
          {checkoutStep === 'cart' && items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#13161d] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Subtotal Estimated</span>
                <span className="font-mono text-lg font-semibold text-[#c5a880]">{formattedSubtotal}</span>
              </div>
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-3 text-xs uppercase tracking-[0.2em] font-semibold bg-[#c5a880] text-[#0c0d10] rounded hover:bg-[#d8bd97] transition-all flex items-center justify-center space-x-2"
              >
                <span>Proceed to Allocation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full text-center text-[11px] text-gray-400 hover:text-[#c5a880] transition-colors py-1 flex items-center justify-center space-x-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Prefer to consult with a Master Watchmaker first?</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
