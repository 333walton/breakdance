import React from 'react';
import { X, Bookmark } from 'lucide-react';
type LeaderboardInfoModalProps = {
  onClose?: () => void;
};
export const LeaderboardInfoModal = (props: LeaderboardInfoModalProps) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [frameOrientation, setFrameOrientation] = React.useState<
    'vertical' | 'horizontal' | 'rectangle'
  >('vertical');
  return (
    <div
      className="w-full max-w-5xl bg-gradient-to-b from-[#1a1428] via-[#221832] to-[#2a1e3a] rounded-3xl shadow-2xl relative overflow-hidden border border-white/10"
      style={{
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingTop: '48px',
        paddingBottom: '48px',
        background:
          'linear-gradient(90deg, rgb(26, 20, 40) 0%, rgb(34, 24, 50) 50%, rgb(42, 30, 58) 100%)',
      }}
    >
      <button
        onClick={props.onClose}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer z-10"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

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

          <div
            className="mb-3"
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
                Team Board
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
              Fullscreen
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              Leaderboard
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              Sport
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              Bold
            </span>
            <span className="bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-white/15 transition-colors border border-white/10">
              Manual
            </span>
          </div>
        </div>

        <div className="lg:w-[380px] flex flex-col">
          <div className="flex items-start gap-3 mb-6">
            <h1 className="text-3xl font-bold text-white leading-tight">Leaderboard - Bold</h1>
          </div>

          <div className="mb-auto">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Product Description
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Bold themed Leaderboard overlay with optional flags/images. Up to 20 lines
              auto-sorting by points or record with high-low or low-high sort option. One and two
              column options. Control with ease using your Elgato Stream Deck or doc the uno app
              directly into OBS.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium">Price</span>
              <span className="text-3xl font-bold text-white">$7.99</span>
            </div>
            <button className="w-full bg-gradient-to-r from-[#FF5C25] to-[#FFC542] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
              Add to Cart
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="w-full border-2 border-white/20 text-gray-300 font-medium py-4 px-6 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Bookmark
                className={`w-5 h-5 transition-all ${isBookmarked ? 'fill-orange-400 text-orange-400' : ''}`}
              />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
