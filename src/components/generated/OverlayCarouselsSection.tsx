import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
const sportsOverlays = [{
  id: 'sport-1',
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "738a77d2-310e-4b8f-bd3d-4f900adbf8da"
}, {
  id: 'sport-2',
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "5802252b-7e39-4070-bce6-25690d19367e"
}, {
  id: 'sport-3',
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "b7f62764-cd8d-4dd0-ba62-ca9eca9b9d82"
}, {
  id: 'sport-4',
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "4a026a6e-30e8-4a02-be00-b1f34d0ffcba"
}, {
  id: 'sport-5',
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "9e1ced77-239f-4bd4-8bfd-fde0e59e77de"
}, {
  id: 'sport-6',
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "4f62cf1e-da30-42d1-8afd-cd127a9c0309"
}] as any[];
const gamingOverlays = [{
  id: 'game-1',
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "4bfeb5d1-4805-4973-b749-bcf876449a2d"
}, {
  id: 'game-2',
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "65959a46-ab0f-4083-8a1b-11403ddb0149"
}, {
  id: 'game-3',
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "0248ebb5-100b-40dd-8063-450a69432406"
}, {
  id: 'game-4',
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "34ce2941-a733-4a49-9fbe-81310e675ff9"
}, {
  id: 'game-5',
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "8e47eeaf-7e39-41d5-85c3-c3978aadb5fe"
}, {
  id: 'game-6',
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "90e3acc2-3749-4022-8089-7399b7f107b7"
}] as any[];
const podcastOverlays = [{
  id: 'podcast-1',
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "8ca0b4ff-389e-490f-9303-b3f07564706a"
}, {
  id: 'podcast-2',
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "c3303394-b320-4eb1-bc60-87f7377df53f"
}, {
  id: 'podcast-3',
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7dbfe407-dfbf-414c-a5fa-0aaa40029d18"
}, {
  id: 'podcast-4',
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "195a9961-e72a-4f4a-9971-7e0119e692ef"
}, {
  id: 'podcast-5',
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "124f5ee6-b6fa-48c0-a133-38cba37f0bcc"
}, {
  id: 'podcast-6',
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "3fb1f918-9e44-4c0d-afa1-b799ec7115bb"
}] as any[];
const carouselSections = [{
  title: 'Sports',
  overlays: sportsOverlays,
  mpid: "f552f01a-4b92-41f3-b1f4-a5733e13cf9c"
}, {
  title: 'Gaming',
  overlays: gamingOverlays,
  mpid: "75fc8437-6622-4d7a-a7f4-bdedbf7bd925"
}, {
  title: 'Podcasts',
  overlays: podcastOverlays,
  mpid: "bef0c4e1-9357-4f6a-9214-f2da8014882a"
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
  return <SortableContainer dndKitId="f0178b60-d4c8-4107-b3a4-40f32bd7f8fd" containerType="collection" prevTag="div" className="space-y-16" data-magicpath-id="0" data-magicpath-path="OverlayCarouselsSection.tsx">
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