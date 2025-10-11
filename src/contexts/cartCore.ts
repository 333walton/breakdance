import { createContext, useContext } from 'react';

export type CartMap = Record<string, number>;

export type CartContextType = {
  cart: CartMap;
  add: (id: string) => void;
  remove: (id: string) => void;
  getTotal: () => number;
  clear: () => void;
  // UI controls for the global cart dropdown
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
