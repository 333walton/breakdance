import React, { createContext, useContext, useEffect, useState } from 'react';

type CartMap = Record<string, number>;

type CartContextType = {
  cart: CartMap;
  add: (id: string) => void;
  remove: (id: string) => void;
  getTotal: () => number;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartMap>({});

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

  return (
    <CartContext.Provider value={{ cart, add, remove, getTotal, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
