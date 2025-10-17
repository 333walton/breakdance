import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, ShoppingCart, Trash2, X } from 'lucide-react';
import { useCart } from '../contexts/cartCore';
import { useAuth } from '../contexts/AuthContext';
import GlobalCartDropdown from '../components/GlobalCartDropdown';
import CartControls from '../components/CartControls';
import overlaysDataRaw from '../lib/overlays';
import { LeaderboardInfoModal } from '../components/generated/LeaderboardModal';
import { AnimatePresence } from 'framer-motion';

type Overlay = {
  id: string;
  name: string;
  category: string;
  type: string;
  function: string;
  theme: string;
  isNew?: boolean;
  price: number;
};

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, clear, getTotal, toggleCart, remove } = useCart();
  const { isAuthenticated } = useAuth();
  const [showSignUpOverlay, setShowSignUpOverlay] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
  const [selectedOverlay, setSelectedOverlay] = useState<Overlay | null>(null);
  const [showModal, setShowModal] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const items = Object.entries(cart);
  const overlaysData = overlaysDataRaw;

  // Disable scrolling when modal is open
  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const navigationItems = [
    { label: 'Overlays' },
    { label: 'Tools' },
    { label: 'Pricing' },
    { label: 'How It Works' },
    { label: 'Live Breaks' },
    { label: 'Supplies' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1428] text-white flex flex-col">
      {/* Header */}
      <header
        ref={headerRef}
        className="bg-gradient-to-b from-[#1f1a30] to-[#261f35] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-[200]"
      >
        <div
          className="w-full px-6 flex items-center justify-between"
          style={{ paddingTop: '4px', paddingBottom: '4px' }}
        >
          <div className="flex items-center">
            {/* Logo */}
            <div
              className="text-2xl font-bold flex items-center flex-shrink-0"
              style={{ marginLeft: '4px' }}
            >
              <img
                src="/static/logo_rough2.png"
                alt="Logo"
                onClick={() => navigate('/')}
                className="h-16 w-auto object-contain cursor-pointer"
              />
              <span className="text-orange-500" style={{ display: 'none' }}>
                overlays.
              </span>
              <span className="text-white" style={{ display: 'none' }}>
                BreakDance
              </span>
            </div>

            {/* Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8 ml-12"
              style={{ marginLeft: 'calc(var(--spacing) * 21)' }}
            >
              {navigationItems.map(nav => {
                const isActive =
                  (nav.label === 'Overlays' && (location.pathname === '/library' || location.pathname.startsWith('/myoverlays'))) ||
                  (nav.label === 'Tools' && (location.pathname === '/tools' || location.pathname.startsWith('/mytools'))) ||
                  (nav.label === 'Pricing' && location.pathname === '/pricing');

                return (
                  <a
                    key={nav.label}
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      if (nav.label === 'Overlays') {
                        navigate('/library');
                      } else if (nav.label === 'Tools') {
                        navigate('/tools');
                      } else if (nav.label === 'Pricing') {
                        navigate('/pricing');
                      }
                    }}
                    className={`${
                      isActive
                        ? 'text-orange-300'
                        : 'text-gray-200 hover:text-orange-300'
                    } transition-colors text-sm font-bold tracking-wide relative cursor-pointer`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    <span style={{ fontSize: '16px' }}>
                      {nav.label === 'Pricing' && isAuthenticated ? 'Subscription' : nav.label}
                    </span>
                    {nav.label === 'Live Breaks' ? (
                      <span
                        aria-hidden="true"
                        className="absolute block"
                        style={{
                          width: '8px',
                          height: '8px',
                          background: 'oklch(0.75 0.14 151.711)',
                          borderRadius: '9999px',
                          top: '-4px',
                          right: '-10px',
                        }}
                      />
                    ) : null}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Auth & Cart */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {!isAuthenticated && (
              <button
                onClick={() => setShowSignUpOverlay(true)}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
              >
                Sign up
              </button>
            )}
            {!isAuthenticated ? (
              <button
                onClick={() => setShowLoginOverlay(true)}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => navigate('/account')}
                className="p-2 text-white border border-white/20 rounded-full transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
                aria-label="Go to account page"
              >
                <User className="w-6 h-6" />
              </button>
            )}
            <div className="relative">
              <button
                data-cart-anchor="true"
                onClick={() => toggleCart()}
                className="relative px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2 cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5" style={{ color: 'rgb(0 0 0)' }} />
              </button>
              {getTotal() > 0 && (
                <span
                  className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  style={{ fontSize: '10px' }}
                >
                  {getTotal()}
                </span>
              )}
            </div>
            <GlobalCartDropdown />
          </div>
        </div>
      </header>

      <div className="p-8 flex-1">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="bg-white/5 rounded-2xl p-12 text-center">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-xl text-gray-400 mb-6">Your cart is empty</p>
              <button
                onClick={() => navigate('/library')}
                className="px-6 py-3 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] text-white font-semibold rounded-xl hover:shadow-lg transition-all cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map(([id, qty]) => {
                  const overlay = overlaysData.find(o => o.id === id);
                  if (!overlay) return null;

                  return (
                    <div
                      key={id}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <div className="flex gap-6">
                        {/* Product Image Placeholder */}
                        <div className="w-32 h-32 bg-gradient-to-br from-[#0a070f] to-[#0d0a12] border border-white/10 rounded-xl flex-shrink-0" />

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-1">
                                {overlay.name}
                              </h3>
                              <p className="text-sm text-gray-400">
                                {overlay.category} • {overlay.type}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                // Remove all quantities of this item
                                for (let i = 0; i < qty; i++) {
                                  remove(id);
                                }
                              }}
                              className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-400" />
                            </button>
                          </div>

                          <div className="mt-auto flex items-center justify-between">
                            <div className="text-xl font-bold text-white">
                              ${overlay.price.toFixed(2)}
                            </div>
                            <div className="flex items-center gap-4">
                              <CartControls id={id} variant="dropdown" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 sticky">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal ({getTotal()} items)</span>
                      <span>
                        $
                        {items
                          .reduce((total, [id, qty]) => {
                            const overlay = overlaysData.find(o => o.id === id);
                            return total + (overlay ? overlay.price * qty : 0);
                          }, 0)
                          .toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between text-xl font-bold mb-2">
                        <span>Estimated total</span>
                        <span>
                          $
                          {items
                            .reduce((total, [id, qty]) => {
                              const overlay = overlaysData.find(o => o.id === id);
                              return total + (overlay ? overlay.price * qty : 0);
                            }, 0)
                            .toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Taxes, discounts and shipping calculated at checkout.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full py-4 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] text-white font-semibold rounded-xl hover:shadow-lg transition-all cursor-pointer"
                  >
                    Proceed to Checkout
                  </button>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => navigate('/library')}
                    className="py-2 px-4 border-2 border-white/20 text-gray-300 font-medium text-sm rounded-xl hover:bg-white/5 hover:border-white/30 transition-all cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="px-8 py-16 bg-[#1a1428]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overlaysData.slice(0, 4).map((overlay) => (
              <div
                key={overlay.id}
                className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Product Image Placeholder */}
                <div
                  className="w-full aspect-square bg-gradient-to-br from-[#0a070f] to-[#0d0a12] border border-white/10 rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setSelectedOverlay(overlay);
                    setShowModal(true);
                  }}
                />

                <h3 className="text-lg font-semibold text-white group-hover:text-[oklch(.837_.128_66.29)] mb-2 line-clamp-2 transition-colors duration-300">
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedOverlay(overlay);
                      setShowModal(true);
                    }}
                  >
                    {overlay.name}
                  </span>
                </h3>

                <p className="text-sm text-gray-400 mb-3">
                  {overlay.category} • {overlay.type}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">
                    ${overlay.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedOverlay(overlay);
                      setShowModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="px-6 py-16 bg-gradient-to-b from-[#1a1428] via-[#1F1A30] to-[#582864] text-white font-normal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#" aria-label="BreakDance home" className="mb-10 mt-4">
              <h2 className="text-[44px] leading-none font-bold tracking-tight">
                <span className="sr-only">BreakDance</span>
                <span aria-hidden="true" className="align-middle">
                  Break
                </span>
                <span
                  aria-hidden="true"
                  className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]"
                >
                  Dance
                </span>
              </h2>
            </a>

            <nav aria-label="Footer links" className="mb-4">
              <ul className="flex items-center gap-6">
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    <span>Terms</span>
                  </a>
                </li>
              </ul>
            </nav>

            <p className="text-xs text-white/60">
              <span>© 2025 All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <AnimatePresence>
        {showModal && selectedOverlay && (
          <div
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => {
              setShowModal(false);
              setSelectedOverlay(null);
            }}
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedOverlay(null);
                }}
                className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              <LeaderboardInfoModal
                overlay={selectedOverlay}
                onClose={() => {
                  setShowModal(false);
                  setSelectedOverlay(null);
                }}
                hideCartButtons={true}
                hideBookmarkButton={true}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartPage;
