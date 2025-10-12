import React, { useEffect, useState } from 'react';
import { CartContext, CartMap } from './cartCore';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartMap>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('breakdance_cart');
      if (raw) setCart(JSON.parse(raw));
    } catch (err) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('breakdance_cart', JSON.stringify(cart));
    } catch (err) {
      // ignore
    }
  }, [cart]);

  const add = (id: string) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const remove = (id: string) =>
    setCart(prev => {
      const next = { ...prev } as CartMap;
      const current = next[id] || 0;
      if (current <= 1) delete next[id];
      else next[id] = current - 1;
      return next;
    });
  const getTotal = () => Object.values(cart).reduce((s, v) => s + v, 0);
  const clear = () => setCart({});

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(v => !v);

  return (
    <CartContext.Provider
      value={{ cart, add, remove, getTotal, clear, isCartOpen, openCart, closeCart, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
