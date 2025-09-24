import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
const sportsOverlays = [{
  id: 'sport-1',
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "52f4029c-1910-4062-a3ee-ea36f7e0fe25"
}, {
  id: 'sport-2',
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "559be4b2-16fe-4db8-878d-d1dabd0436b1"
}, {
  id: 'sport-3',
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "d7624f62-ce7e-4ff0-9d26-41c473d86390"
}, {
  id: 'sport-4',
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "9ff5f670-e10d-4c95-83ee-5391a795de8a"
}, {
  id: 'sport-5',
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "a0cf0b6e-d8cc-470f-8896-5957375769e7"
}, {
  id: 'sport-6',
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "458f7a58-73f6-4004-bcc1-f4d21a02bc1d"
}] as any[];
const gamingOverlays = [{
  id: 'game-1',
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "2708c612-7ec5-4460-a4cd-80ff0c313fb7"
}, {
  id: 'game-2',
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "2cc7520f-82ca-4866-b120-3e518b88e4bc"
}, {
  id: 'game-3',
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "27cfb68a-77b8-45a0-a10e-a35843c6f017"
}, {
  id: 'game-4',
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "4d9b0416-1992-49d9-83ba-4ca1c8a45073"
}, {
  id: 'game-5',
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "68088eb3-c187-4b73-be33-c75681a60bd5"
}, {
  id: 'game-6',
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7f2a9603-16d3-44ba-862a-7af308eb8d8a"
}] as any[];
const podcastOverlays = [{
  id: 'podcast-1',
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "24dba84c-1670-49df-93c6-a7f5a2b2347c"
}, {
  id: 'podcast-2',
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "43abf841-e584-45d8-a7ac-01c2c7779471"
}, {
  id: 'podcast-3',
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "e611cce7-73b1-4cb4-bdfc-56789c1f8d76"
}, {
  id: 'podcast-4',
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "e7b445d7-a34b-4840-b46b-2d428000ef20"
}, {
  id: 'podcast-5',
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "88e8c280-4a31-46f1-9866-fbd629438df9"
}, {
  id: 'podcast-6',
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "169dcf3c-4293-4bc5-812a-1ab85033b4ae"
}] as any[];
const carouselSections = [{
  title: 'Sports',
  overlays: sportsOverlays,
  mpid: "79b7d31d-64ae-4db1-b05c-293180746ae8"
}, {
  title: 'Gaming',
  overlays: gamingOverlays,
  mpid: "d1fab1f0-0d29-4cfe-9791-5210994be20e"
}, {
  title: 'Podcasts',
  overlays: podcastOverlays,
  mpid: "1097ce72-2bf5-4ead-bfbd-7eadc6fe0bb7"
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
  return <SortableContainer dndKitId="4c598d5e-49a1-4f6c-a039-b64e63c7dd48" containerType="collection" prevTag="div" className="space-y-16" data-magicpath-id="0" data-magicpath-path="OverlayCarouselsSection.tsx">
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