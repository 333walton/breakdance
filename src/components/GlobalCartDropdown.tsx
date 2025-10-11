import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCart } from '../contexts/cartCore';
import CartControls from './CartControls';

const GlobalCartDropdown: React.FC = () => {
  const { cart, getTotal, isCartOpen, closeCart, openCart, toggleCart } = useCart();

  return (
    <div className="relative">
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
            className="absolute right-0 top-full mt-2 z-[999] w-80 bg-[#1a1428]/95 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-md overflow-auto max-h-64"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Cart</h3>
              <button onClick={() => closeCart()} className="p-1 rounded-md hover:bg-white/5"><X className="w-4 h-4 text-gray-300" /></button>
            </div>

            <div className="space-y-3">
              {Object.keys(cart).length === 0 ? (
                <div className="text-sm text-gray-400">Your cart is empty</div>
              ) : (
                Object.entries(cart).map(([id, qty]) => {
                  // overlay lookup is intentionally not coupled here; callers should provide names where needed
                  return (
                    <div key={id} className="flex items-center justify-between bg-[#221832]/60 rounded-lg p-3">
                      <div>
                        <div className="text-sm font-medium">Item {id}</div>
                        <div className="text-xs text-gray-400">${'--'}</div>
                      </div>
                      <CartControls id={id} />
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-4 border-t border-white/5 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span>Total</span>
                <span className="font-semibold">{getTotal()}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlobalCartDropdown;
