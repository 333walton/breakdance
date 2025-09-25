import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
const sportsOverlays = [{
  id: 'sport-1',
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'sport-2',
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'sport-3',
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'sport-4',
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'sport-5',
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'sport-6',
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}] as any[];
const gamingOverlays = [{
  id: 'game-1',
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'game-2',
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'game-3',
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'game-4',
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'game-5',
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'game-6',
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}] as any[];
const podcastOverlays = [{
  id: 'podcast-1',
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'podcast-2',
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'podcast-3',
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'podcast-4',
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'podcast-5',
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}, {
  id: 'podcast-6',
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200'
}] as any[];
const carouselSections = [{
  title: 'Sports',
  overlays: sportsOverlays
}, {
  title: 'Gaming',
  overlays: gamingOverlays
}, {
  title: 'Podcasts',
  overlays: podcastOverlays
}] as any[];

// @component: OverlayCarouselsSection
export const OverlayCarouselsSection = () => {
  const scrollLeft = (containerRef: React.RefObject<HTMLDivElement | null>) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  const scrollRight = (containerRef: React.RefObject<HTMLDivElement | null>) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // @return
  return <div className="space-y-16">
      {carouselSections.map(section => {
      const containerRef = useRef<HTMLDivElement>(null);
      return <section key={section.title} className="px-6 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">
                  <span>{section.title}</span>
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button onClick={() => scrollLeft(containerRef)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={() => scrollRight(containerRef)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200">
                    <span>See More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div ref={containerRef} className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
                {section.overlays.map(overlay => <motion.div key={overlay.id} className="flex-shrink-0 w-72 bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-200 cursor-pointer group" whileHover={{
              scale: 1.02,
              y: -4
            }} whileTap={{
              scale: 0.98
            }}>
                    <div className="relative overflow-hidden">
                      <div className="w-full h-40 bg-gray-700/50 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">Image Placeholder</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-200">
                        <span>{overlay.name}</span>
                      </h3>
                      <span className="text-xs text-gray-400 bg-gray-700/80 px-3 py-1 rounded-full">
                        <span>{overlay.aspect}</span>
                      </span>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </section>;
    })}
    </div>;
};