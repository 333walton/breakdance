import React from 'react';
import { X, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../../contexts/cartCore';
import CartControls from '../CartControls';

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

type LeaderboardInfoModalProps = {
  onClose?: () => void;
  overlay?: Overlay | null;
};

export const LeaderboardInfoModal = (props: LeaderboardInfoModalProps) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [frameOrientation, setFrameOrientation] = React.useState<
    'vertical' | 'horizontal' | 'rectangle'
  >('vertical');
  const overlay = props.overlay;
  const { cart, add, remove, openCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-5xl"
    >
      <div
        className="bg-gradient-to-b from-[#1a1428] via-[#221832] to-[#2a1e3a] rounded-3xl shadow-2xl relative overflow-hidden border border-white/10"
        style={{
          paddingLeft: '50px',
          paddingRight: '50px',
          paddingTop: '48px',
          paddingBottom: '48px',
          background:
            'linear-gradient(90deg, rgb(26, 20, 40) 0%, rgb(34, 24, 50) 50%, rgb(42, 30, 58) 100%)',
          maxWidth: '1100px',
        }}
      >

          <div className="flex flex-col lg:flex-row gap-12">
        <div
          className="flex-1"
          style={{
            height: '537px',
          }}
        >
          <div
            className="w-full bg-gradient-to-br from-[#2a1e3a]/60 to-[#1a1428]/40 border border-white/10 rounded-2xl mb-6 mx-auto transition-all duration-700 ease-in-out shadow-sm"
            style={{
              height:
                frameOrientation === 'vertical'
                  ? '450px'
                  : frameOrientation === 'horizontal'
                    ? '450px'
                    : '280px',
              maxWidth: frameOrientation === 'vertical' ? '320px' : '450px',
            }}
          />

          <div className="flex gap-3 justify-center mb-8">
            <button
              onClick={() => setFrameOrientation('vertical')}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all hover:scale-125 ${frameOrientation === 'vertical' ? 'bg-orange-400 scale-110' : 'bg-gray-500'}`}
              aria-label="Vertical orientation"
            />
            <button
              onClick={() => setFrameOrientation('horizontal')}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all hover:scale-125 ${frameOrientation === 'horizontal' ? 'bg-orange-400 scale-110' : 'bg-gray-500'}`}
              aria-label="Horizontal orientation"
            />
          </div>
          <div className="mb-3"
            style={{
              paddingLeft: '40px',
              marginBottom: '7px',
            }}
          >
              <div className="inline-flex items-center gap-2.5">
                <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Function
                </span>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:shadow-md transition-shadow">
                  {overlay ? overlay.function : 'Team Board'}
                </span>
              </div>
            </div>

          <div
            className="flex flex-wrap gap-2 mt-1"
            style={{
              paddingLeft: '40px',
              marginBottom: '',
              paddingBottom: '',
            }}
          >
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wide mr-1">
              Tags
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              {overlay ? overlay.theme : 'Fullscreen'}
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              {overlay ? overlay.type : 'Leaderboard'}
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              {overlay ? overlay.category.toUpperCase() : 'Sport'}
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              {overlay ? (overlay.isNew ? 'New' : 'Standard') : 'Bold'}
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              {overlay ? overlay.function : 'Manual'}
            </span>
          </div>
        </div>

        <div className="lg:w-[380px] flex flex-col relative">
          {/* small bookmark icon in top-right of modal */}
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            aria-label="Toggle bookmark"
            className="absolute -top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10"
            style={{ zIndex: 40 }}
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-orange-400' : 'text-white'}`} />
          </button>
          <div className="flex items-start gap-3 mb-6">
            <h1 className="text-3xl font-bold text-white leading-tight">
              {overlay ? `${overlay.name}` : 'Leaderboard - Bold'}
            </h1>
          </div>

          <div className="mb-auto">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Product Description
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              {overlay ? (
                <>
                  A {overlay.theme} themed {overlay.type} designed for {overlay.category.toUpperCase()} broadcasts. Supports up to 20 entries with auto-sorting by points or custom fields, configurable high-to-low or low-to-high sorting, and optional flag/image columns. Integrates with stream controllers and can be controlled via the BreakDance app or Stream Deck for seamless live updates.
                </>
              ) : (
                'Bold themed Leaderboard overlay with optional flags/images. Up to 20 lines auto-sorting by points or record with high-low or low-high sort option. One and two column options. Control with ease using your Elgato Stream Deck or use the BreakDance app directly with OBS.'
              )}
            </p>
          </div>

            <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium">Price</span>
              <span className="text-3xl font-bold text-white">{overlay ? `$${overlay.price.toFixed(2)}` : '$7.99'}</span>
            </div>
            {overlay && <CartControls id={overlay.id} name={overlay.name} />}
            <button
              onClick={() => openCart()}
              className="w-full border-2 border-white/20 text-gray-300 font-medium py-4 px-6 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4"></path>
                <circle cx="10" cy="20" r="1"></circle>
                <circle cx="19" cy="20" r="1"></circle>
              </svg>
              <span>View Cart</span>
            </button>
          </div>
        </div>
      </div>
      </div>
  </motion.div>
  );
};
