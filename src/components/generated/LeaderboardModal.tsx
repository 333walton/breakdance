import React from 'react';
import { X, Bookmark, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';
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
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
};

export const LeaderboardInfoModal = (props: LeaderboardInfoModalProps) => {
  const [frameOrientation, setFrameOrientation] = React.useState<
    'vertical' | 'horizontal' | 'rectangle'
  >('vertical');
  const [isRotated, setIsRotated] = React.useState(false);
  const overlay = props.overlay;
  const isBookmarked = props.isBookmarked ?? false;
  const handleToggleBookmark = props.onToggleBookmark ?? (() => {});
  const { cart, add, remove, openCart } = useCart();

  const handleNext = () => {
    if (frameOrientation === 'vertical') {
      setFrameOrientation('horizontal');
      setIsRotated(false);
    }
  };

  const handlePrev = () => {
    if (frameOrientation === 'horizontal') {
      setFrameOrientation('vertical');
    }
  };

  const capitalizeWords = (str: string) => {
    // Handle special cases
    const specialCases: { [key: string]: string } = {
      nfl: 'NFL',
      mlb: 'MLB',
      nba: 'NBA',
      nhl: 'NHL',
      mls: 'MLS',
      pokemon: 'Pokémon',
    };

    const lowerStr = str.toLowerCase();
    if (specialCases[lowerStr]) {
      return specialCases[lowerStr];
    }

    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

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
            {/* Fixed height container to prevent shifting */}
            <div
              className="mb-6 relative"
              style={{
                height: '450px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Rotate button in top-right corner - only for vertical orientation */}
              {frameOrientation === 'vertical' && (
                <button
                  onClick={() => setIsRotated(!isRotated)}
                  className={`absolute top-0 right-0 p-1.5 rounded-lg cursor-pointer transition-all hover:bg-white/10 z-10 ${isRotated ? 'bg-orange-400/20 text-orange-400' : 'bg-white/5 text-gray-400'}`}
                  aria-label="Rotate frame"
                  title="Rotate frame"
                  style={{ transform: 'translateX(8px)' }}
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              )}

              <div
                className="bg-gradient-to-br from-[#0a070f] to-[#0d0a12] border border-white/10 rounded-2xl transition-all duration-700 ease-in-out shadow-sm"
                style={{
                  width: frameOrientation === 'vertical' ? '320px' : '450px',
                  height: frameOrientation === 'vertical' ? '450px' : '450px',
                  transform:
                    isRotated && frameOrientation === 'vertical' ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              />
            </div>

            <div className="flex gap-3 justify-center mb-8 items-center">
              <button
                onClick={handlePrev}
                disabled={frameOrientation === 'vertical'}
                className={`p-1 rounded-md transition-all ${frameOrientation === 'vertical' ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer'}`}
                aria-label="Previous orientation"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setFrameOrientation('vertical')}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all hover:scale-125 ${frameOrientation === 'vertical' ? 'bg-orange-400 scale-110' : 'bg-gray-500'}`}
                aria-label="Vertical orientation"
              />
              <button
                onClick={() => {
                  setFrameOrientation('horizontal');
                  setIsRotated(false);
                }}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all hover:scale-125 ${frameOrientation === 'horizontal' ? 'bg-orange-400 scale-110' : 'bg-gray-500'}`}
                aria-label="Horizontal orientation"
              />
              <button
                onClick={handleNext}
                disabled={frameOrientation === 'horizontal'}
                className={`p-1 rounded-md transition-all ${frameOrientation === 'horizontal' ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer'}`}
                aria-label="Next orientation"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div
              className="flex gap-2 mt-1 overflow-hidden"
              style={{
                paddingLeft: '40px',
                marginBottom: '',
                paddingBottom: '',
              }}
            >
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wide mr-1 whitespace-nowrap">
                Tags
              </span>
              <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10 whitespace-nowrap">
                {overlay ? capitalizeWords(overlay.theme) : 'Fullscreen'}
              </span>
              <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10 whitespace-nowrap">
                {overlay ? capitalizeWords(overlay.type) : 'Leaderboard'}
              </span>
              <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10 whitespace-nowrap">
                {overlay ? capitalizeWords(overlay.category) : 'Sport'}
              </span>
              <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10 whitespace-nowrap">
                {overlay ? (overlay.isNew ? 'New' : 'Standard') : 'Bold'}
              </span>
            </div>
          </div>

          <div className="lg:w-[380px] flex flex-col relative">
            {/* small bookmark icon in top-right of modal */}
            <button
              onClick={handleToggleBookmark}
              aria-label="Toggle bookmark"
              className="absolute -top-4 right-4 p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors"
              style={{ zIndex: 40 }}
            >
              <Bookmark
                className={`w-5 h-5 transition-colors ${isBookmarked ? 'text-orange-400 fill-current' : 'text-white'}`}
              />
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
                    A {overlay.theme} themed {overlay.type} designed for{' '}
                    {overlay.category.toUpperCase()} broadcasts. Supports up to 20 entries with
                    auto-sorting by points or custom fields, configurable high-to-low or low-to-high
                    sorting, and optional flag/image columns. Integrates with stream controllers and
                    can be controlled via the BreakDance app or Stream Deck for seamless live
                    updates.
                  </>
                ) : (
                  'Bold themed Leaderboard overlay with optional flags/images. Up to 20 lines auto-sorting by points or record with high-low or low-high sort option. One and two column options. Control with ease using your Elgato Stream Deck or use the BreakDance app directly with OBS.'
                )}
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 mt-8" style={{ marginBottom: '10px' }}>
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                Function
              </span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:shadow-md transition-shadow">
                {overlay ? capitalizeWords(overlay.function) : 'Team Board'}
              </span>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <div className="flex items-end justify-between mb-2">
                <span className="text-gray-400 text-sm font-medium">Price</span>
                <span className="text-3xl font-bold text-white">
                  {overlay ? `$${overlay.price.toFixed(2)}` : '$7.99'}
                </span>
              </div>
              {overlay && <CartControls id={overlay.id} name={overlay.name} />}
              <button
                onClick={() => openCart()}
                className="w-full border-2 border-white/20 text-gray-300 font-medium py-4 px-6 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
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
