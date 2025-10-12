import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NotificationsContext } from './notificationsCore';
import type { Notification } from './notificationsCore';
import { Check, Info, AlertTriangle } from 'lucide-react';

export const NotificationsProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [list, setList] = useState<Notification[]>([]);

  const notify = useCallback((n: { message: string; type?: Notification['type'] }) => {
    const id = String(Date.now()) + Math.random().toString(36).slice(2, 8);
    setList(prev => {
      const newList = [...prev, { id, message: n.message, type: n.type }];
      // Keep only the last 3 notifications
      return newList.slice(-3);
    });
    setTimeout(() => {
      setList(prev => prev.filter(x => x.id !== id));
    }, 3500);
  }, []);

  return (
    <NotificationsContext.Provider value={{ notify }}>
      {/* aria-live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" />
      {children}
      {/* animated toast container */}
      <div className="fixed right-4 bottom-4 z-[9999] flex flex-col gap-2">
        <AnimatePresence>
          {list.map(n => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className={`px-4 py-2 rounded-md text-sm text-white flex items-center gap-3 shadow-lg ${n.type === 'warning' ? 'bg-orange-500' : n.type === 'success' ? 'bg-green-500' : 'bg-slate-800'}`}
            >
              <span className="flex-shrink-0">
                {n.type === 'success' ? <Check className="w-4 h-4" /> : n.type === 'warning' ? <AlertTriangle className="w-4 h-4" /> : <Info className="w-4 h-4" />}
              </span>
              <span className="flex-1">{n.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
