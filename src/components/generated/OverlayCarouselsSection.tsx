import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
const sportsOverlays = [{
  id: 'sport-1',
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "88886e35-1199-459a-b8c2-d012e4a79d37"
}, {
  id: 'sport-2',
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "65a3dad0-1a67-4269-a001-cd977741c2ea"
}, {
  id: 'sport-3',
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "993ce92c-4030-4d83-9954-c1bd2373f274"
}, {
  id: 'sport-4',
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "1cbd987e-d6f9-404f-91cb-37d5e8fae8a7"
}, {
  id: 'sport-5',
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "2fb6394c-113d-4ac7-b72c-36ffa7b82108"
}, {
  id: 'sport-6',
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "222c8ffe-accf-4c61-8bab-8c21ffc04161"
}] as any[];
const gamingOverlays = [{
  id: 'game-1',
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "195b7d97-f9bf-4f7b-8650-11f6c763d396"
}, {
  id: 'game-2',
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "6a1442a2-a8d5-4fcc-9cc1-f916b05f6c75"
}, {
  id: 'game-3',
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "9fa1f7f2-b69c-40bb-99a4-0d0bd737d6d0"
}, {
  id: 'game-4',
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7d2af4d2-8e5c-46a4-8de7-a646e196c178"
}, {
  id: 'game-5',
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7bbed811-efed-4351-8dc3-5c5fa5ec62e5"
}, {
  id: 'game-6',
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "aa506c2a-502e-408a-92e2-ecdc8fa3d062"
}] as any[];
const podcastOverlays = [{
  id: 'podcast-1',
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "152abb82-a74d-4fc9-862a-077022e41a6b"
}, {
  id: 'podcast-2',
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "933b0265-5eb8-44a7-8efa-b8d1d3469cf7"
}, {
  id: 'podcast-3',
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "d9c481df-d852-45c1-beba-955b7c15b8ca"
}, {
  id: 'podcast-4',
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "e55904ba-8b3d-41aa-8a76-600f7e534412"
}, {
  id: 'podcast-5',
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "be841188-76b0-4d60-b902-5ae6b4973207"
}, {
  id: 'podcast-6',
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "ef64229f-d1d6-48e9-ab0a-9a3d071db910"
}] as any[];
const carouselSections = [{
  title: 'Sports',
  overlays: sportsOverlays,
  mpid: "825cacb4-b744-4ba1-ab1f-de91530c46e0"
}, {
  title: 'Gaming',
  overlays: gamingOverlays,
  mpid: "0bdbaf94-977a-47e4-be71-569dfa99de1f"
}, {
  title: 'Podcasts',
  overlays: podcastOverlays,
  mpid: "d077f1a4-d1a0-4c47-9ba9-9abdf4fca284"
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
  return <SortableContainer dndKitId="adf73cd2-ee3e-4f2a-8df1-fc9cef6e9305" containerType="collection" prevTag="div" className="space-y-16" data-magicpath-id="0" data-magicpath-path="OverlayCarouselsSection.tsx">
      {carouselSections.map(section => {
      const containerRef = useRef<HTMLDivElement>(null);
      return <section key={section.title} className="px-6 py-8" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="1" data-magicpath-path="OverlayCarouselsSection.tsx">
            <div className="max-w-7xl mx-auto" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="2" data-magicpath-path="OverlayCarouselsSection.tsx">
              <div className="flex items-center justify-between mb-8" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="3" data-magicpath-path="OverlayCarouselsSection.tsx">
                <h2 className="text-3xl font-bold" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="4" data-magicpath-path="OverlayCarouselsSection.tsx">
                  <span data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="5" data-magicpath-path="OverlayCarouselsSection.tsx">{section.title}</span>
                </h2>
                <div className="flex items-center space-x-4" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="OverlayCarouselsSection.tsx">
                  <div className="flex items-center space-x-2" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="OverlayCarouselsSection.tsx">
                    <button onClick={() => scrollLeft(containerRef)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="OverlayCarouselsSection.tsx">
                      <ChevronLeft className="w-5 h-5" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="OverlayCarouselsSection.tsx" />
                    </button>
                    <button onClick={() => scrollRight(containerRef)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="OverlayCarouselsSection.tsx">
                      <ChevronRight className="w-5 h-5" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="OverlayCarouselsSection.tsx" />
                    </button>
                  </div>
                  <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="OverlayCarouselsSection.tsx">
                    <span data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="OverlayCarouselsSection.tsx">See More</span>
                    <ArrowRight className="w-4 h-4" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="OverlayCarouselsSection.tsx" />
                  </button>
                </div>
              </div>
              
              <div ref={containerRef} className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }} data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="OverlayCarouselsSection.tsx">
                {section.overlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.id} className="flex-shrink-0 w-72 bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-200 cursor-pointer group" whileHover={{
              scale: 1.02,
              y: -4
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="OverlayCarouselsSection.tsx">
                    <div className="relative overflow-hidden" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="OverlayCarouselsSection.tsx">
                      <div className="w-full h-40 bg-gray-700/50 flex items-center justify-center" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="OverlayCarouselsSection.tsx">
                        <span className="text-gray-400 text-xs" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="OverlayCarouselsSection.tsx">Image Placeholder</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="OverlayCarouselsSection.tsx"></div>
                    </div>
                    <div className="p-4" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="OverlayCarouselsSection.tsx">
                      <h3 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-200" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="OverlayCarouselsSection.tsx">
                        <span data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="OverlayCarouselsSection.tsx">{overlay.name}</span>
                      </h3>
                      <span className="text-xs text-gray-400 bg-gray-700/80 px-3 py-1 rounded-full" data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="OverlayCarouselsSection.tsx">
                        <span data-magicpath-uuid={(section as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="OverlayCarouselsSection.tsx">{overlay.aspect}</span>
                      </span>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </section>;
    })}
    </SortableContainer>;
};