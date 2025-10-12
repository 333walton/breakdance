import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCart } from '../contexts/cartCore';
import CartControls from './CartControls';
import overlaysDataRaw from '../lib/overlays';

const GlobalCartDropdown: React.FC = () => {
  const { cart, getTotal, isCartOpen, closeCart } = useCart();
  const [pos, setPos] = useState<{ left: number; top: number; right: number } | null>(null);
  const [origin, setOrigin] = useState<string | undefined>(undefined);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isCartOpen) return;
    const anchor = document.querySelector('[data-cart-anchor="true"]') as HTMLElement | null;
    if (!anchor) return setPos(null);
    const rect = anchor.getBoundingClientRect();
    // position the dropdown below the anchor, right-aligned
    setPos({ left: rect.left, top: rect.bottom + 8, right: window.innerWidth - rect.right });
    // compute transform-origin in px so scale animates from the cart icon visually
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    setOrigin(`${originX}px ${originY}px`);

    const handleResize = () => {
      const r = anchor.getBoundingClientRect();
      setPos({ left: r.left, top: r.bottom + 8, right: window.innerWidth - r.right });
    };

    const onDocClick = (e: MouseEvent) => {
      if (!elRef.current) return;
      if (elRef.current.contains(e.target as Node)) return;
      if (anchor.contains(e.target as Node)) return;
      closeCart();
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', onDocClick);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isCartOpen, closeCart]);

  const overlaysData = overlaysDataRaw;
  const navigate = useNavigate();

  const content = (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          ref={elRef}
          initial={{ y: -8, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -8, opacity: 0, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 500, damping: 32, mass: 0.6 }}
          style={{
            position: 'fixed',
            top: pos ? pos.top : 80,
            right: pos ? pos.right : 24,
            left: undefined,
            zIndex: 99999,
            transform: 'translateZ(0)',
            transformOrigin: origin,
          }}
          className="w-80 bg-[#1a1428]/95 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-md overflow-auto max-h-64"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Cart</h3>
            <button onClick={() => closeCart()} className="p-1 rounded-md hover:bg-white/5">
              <X className="w-4 h-4 text-gray-300" />
            </button>
          </div>

          <div className="space-y-3">
            {Object.keys(cart).length === 0 ? (
              <div className="text-sm text-gray-400">Your cart is empty</div>
            ) : (
              Object.entries(cart).map(([id, qty]) => {
                const overlay = overlaysData.find(o => o.id === id);
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between bg-[#221832]/60 rounded-lg p-3"
                  >
                    <div>
                      <div className="text-sm font-medium">{overlay?.name || `Item ${id}`}</div>
                      <div className="text-xs text-gray-400">
                        ${overlay ? overlay.price.toFixed(2) : '--'}
                      </div>
                    </div>
                    <CartControls id={id} />
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-4 border-t border-white/5 pt-4">
            <div className="flex items-center justify-between text-sm mb-3">
              <span>Total</span>
              <span className="font-semibold">
                $
                {Object.entries(cart)
                  .reduce((s, [id, qty]) => {
                    const o = overlaysData.find(x => x.id === id);
                    return s + (o ? o.price * qty : 0);
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  closeCart();
                }}
                className="flex-1 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // navigate to checkout and close the cart
                  closeCart();
                  navigate('/checkout');
                }}
                disabled={Object.keys(cart).length === 0}
                className="flex-1 px-3 py-2 rounded-md bg-orange-500 text-black font-semibold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Checkout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(content, document.body);
};

export default GlobalCartDropdown;
