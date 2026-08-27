import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { CollectionsView } from './components/views/CollectionsView';
import { ProductDetailView } from './components/views/ProductDetailView';
import { DashboardView } from './components/views/DashboardView';
import { ManufactureView } from './components/views/ManufactureView';
import { BoutiquesView } from './components/views/BoutiquesView';
import { CartDrawer } from './components/modals/CartDrawer';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { ServiceRequestModal } from './components/modals/ServiceRequestModal';
import { CertificateModal } from './components/modals/CertificateModal';
import { CartItem, Timepiece, MemberWatch } from './types';
import { TIMEPIECES } from './data/timepieces';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedTimepieceId, setSelectedTimepieceId] = useState<string>('eclat-38');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      timepiece: TIMEPIECES[0], // Éclat 38 by default in bag for initial demonstration
      quantity: 1,
      selectedStrapSize: 'Standard'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationWatchName, setConsultationWatchName] = useState<string | undefined>(undefined);
  
  // Modals for Member Vault
  const [activeServiceWatch, setActiveServiceWatch] = useState<MemberWatch | null>(null);
  const [activeCertWatch, setActiveCertWatch] = useState<MemberWatch | null>(null);

  const handleNavigate = (view: string, itemId?: string) => {
    setCurrentView(view);
    if (itemId) {
      setSelectedTimepieceId(itemId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTimepiece = (id: string) => {
    setSelectedTimepieceId(id);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (watch: Timepiece) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.timepiece.id === watch.id);
      if (existing) {
        return prev.map((item) =>
          item.timepiece.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { timepiece: watch, quantity: 1, selectedStrapSize: 'Standard' }];
    });
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.timepiece.id !== id));
  };

  const handleUpdateCartQuantity = (id: string, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.timepiece.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenConsultation = (watchName?: unknown) => {
    if (typeof watchName === 'string' && watchName.trim()) {
      setConsultationWatchName(watchName.trim());
    } else {
      setConsultationWatchName(undefined);
    }
    setIsConsultationOpen(true);
  };

  const handleRequestService = (watch: MemberWatch) => {
    setActiveServiceWatch(watch);
  };

  const handleViewCertificate = (watch: MemberWatch) => {
    setActiveCertWatch(watch);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0d10] text-[#e8eaed] selection:bg-[#c5a880] selection:text-[#0c0d10] font-sans antialiased">
      {/* Fixed Luxury Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Dynamic View Outlet */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectTimepiece={handleSelectTimepiece}
          />
        )}

        {currentView === 'collections' && (
          <CollectionsView
            onSelectTimepiece={handleSelectTimepiece}
            onAddToCart={handleAddToCart}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentView === 'product-detail' && (
          <ProductDetailView
            timepieceId={selectedTimepieceId}
            onBack={() => handleNavigate('collections')}
            onAddToCart={handleAddToCart}
            onOpenConsultation={handleOpenConsultation}
            onSelectTimepiece={handleSelectTimepiece}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardView
            onOpenConsultation={handleOpenConsultation}
            onRequestService={handleRequestService}
            onViewCertificate={handleViewCertificate}
            onSelectTimepiece={handleSelectTimepiece}
          />
        )}

        {currentView === 'manufacture' && (
          <ManufactureView
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'boutiques' && (
          <BoutiquesView onOpenConsultation={handleOpenConsultation} />
        )}
      </main>

      {/* Luxury Editorial Footer */}
      <Footer onNavigate={handleNavigate} onOpenConsultation={handleOpenConsultation} />

      {/* Modals and Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={handleClearCart}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialTimepieceName={consultationWatchName}
      />

      <ServiceRequestModal
        isOpen={!!activeServiceWatch}
        onClose={() => setActiveServiceWatch(null)}
        watch={activeServiceWatch}
      />

      <CertificateModal
        isOpen={!!activeCertWatch}
        onClose={() => setActiveCertWatch(null)}
        watch={activeCertWatch}
      />
    </div>
  );
}
