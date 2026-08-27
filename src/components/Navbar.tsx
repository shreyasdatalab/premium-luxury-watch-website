import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User, ShieldCheck, Compass, Sparkles, Clock } from 'lucide-react';
import { CURRENT_USER } from '../data/timepieces';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, itemId?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenConsultation
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Maison' },
    { id: 'collections', label: 'Collections' },
    { id: 'manufacture', label: 'Manufacture' },
    { id: 'boutiques', label: 'Boutiques' },
    { id: 'dashboard', label: 'Vanguard Vault', isMember: true }
  ];

  return (
    <header
      id="aurevant-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0c0d10]/90 backdrop-blur-md border-b border-[#252830]/80 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0c0d10]/80 via-[#0c0d10]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <div className="flex items-center space-x-3">
          <button
            id="nav-brand-logo-btn"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group flex items-center space-x-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-[#c5a880]/60 flex items-center justify-center bg-[#15171e] group-hover:border-[#c5a880] transition-colors">
              <span className="text-[#c5a880] text-xs font-serif font-bold tracking-tighter">A</span>
            </div>
            <div>
              <span className="font-display-luxury text-lg sm:text-xl font-medium tracking-[0.25em] text-white group-hover:text-[#c5a880] transition-colors">
                AUREVANT
              </span>
              <span className="block text-[9px] tracking-[0.35em] text-[#9ca3af] uppercase font-light -mt-0.5">
                HAUTE HORLOGERIE • GENÈVE
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative text-xs tracking-[0.2em] uppercase font-medium transition-all py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#c5a880]'
                    : 'text-[#d1d5db] hover:text-white'
                } ${item.isMember ? 'flex items-center space-x-1.5 text-[#c5a880]' : ''}`}
              >
                {item.isMember && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse inline-block" />
                )}
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a880] to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions & Vanguard Portal */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          <button
            id="nav-book-consultation-btn"
            onClick={() => onOpenConsultation()}
            className="hidden lg:inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-widest text-[#c5a880] border border-[#c5a880]/30 hover:border-[#c5a880] hover:bg-[#c5a880]/10 transition-all"
          >
            <Sparkles className="w-3 h-3" />
            <span>Consultation</span>
          </button>

          {/* Member shortcut badge */}
          <button
            id="nav-member-profile-btn"
            onClick={() => onNavigate('dashboard')}
            className={`hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-full text-xs border transition-all ${
              currentView === 'dashboard'
                ? 'bg-[#c5a880]/15 border-[#c5a880] text-[#c5a880]'
                : 'bg-[#15171e] border-white/10 hover:border-white/20 text-gray-300'
            }`}
            title="Alexander Voss — Vanguard Client Portal"
          >
            <img
              src={CURRENT_USER.avatar}
              alt={CURRENT_USER.name}
              className="w-5 h-5 rounded-full object-cover border border-[#c5a880]/50"
            />
            <span className="text-[11px] font-medium tracking-wider">A. Voss</span>
          </button>

          {/* Cart Bag */}
          <button
            id="nav-cart-btn"
            onClick={onOpenCart}
            className="relative p-2 text-gray-300 hover:text-white focus:outline-none transition-colors"
            aria-label="View Acquisitions Bag"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#c5a880] text-[#0c0d10] font-bold text-[10px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d10]/98 border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left py-2 text-sm tracking-[0.2em] uppercase font-medium flex items-center justify-between ${
                  currentView === item.id ? 'text-[#c5a880]' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {item.isMember && (
                  <span className="text-[10px] text-[#c5a880] border border-[#c5a880]/40 px-2 py-0.5 rounded-full">
                    MEMBER
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center text-xs tracking-widest uppercase bg-[#c5a880] text-[#0c0d10] font-semibold rounded-md hover:bg-[#d8bd97]"
            >
              Book Private Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
