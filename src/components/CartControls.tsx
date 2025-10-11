import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/cartCore';
import { useNotifications } from '../contexts/notificationsCore';

interface CartControlsProps {
  id: string;
  name?: string;
}

export const CartControls: React.FC<CartControlsProps> = ({ id, name }) => {
  const { cart, add, remove } = useCart();
  const { notify } = useNotifications();

  const qty = cart[id] || 0;

  const onAdd = () => {
    add(id);
    notify({ message: `${name || 'Item'} added to cart`, type: 'info' });
  };
  const onRemove = () => {
    remove(id);
    notify({ message: `${name || 'Item'} removed from cart`, type: 'warning' });
  };

  if (qty === 0) {
    return (
      <button
        onClick={onAdd}
        className="flex items-center gap-3 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] text-white font-semibold py-2 px-4 rounded-md hover:shadow-lg transition-all"
        aria-label={`Add ${name || 'item'} to cart`}
        title={`Add ${name || 'item'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span className="text-sm">Add</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={onRemove} className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">−</button>
      <motion.div key={String(qty)} initial={{ scale: 0.9, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.18 }} className="px-2 text-white font-semibold">
        {qty}
      </motion.div>
      <button onClick={onAdd} className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">+</button>
    </div>
  );
};

export default CartControls;
