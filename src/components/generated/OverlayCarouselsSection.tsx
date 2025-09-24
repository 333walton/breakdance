import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
const sportsOverlays = [{
  id: 'sport-1',
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7d221aa4-06db-4ccf-9c74-d8ce85e47303"
}, {
  id: 'sport-2',
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "2e9e4023-fd04-4581-bb3c-f6e203c8ca01"
}, {
  id: 'sport-3',
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "f850bec4-5313-4286-a21d-e54fa180cc0b"
}, {
  id: 'sport-4',
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "af1c026b-67d3-4b97-924c-42c345682bb9"
}, {
  id: 'sport-5',
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "87bba59b-a8e4-42d6-a7c7-9d2740a5f2eb"
}, {
  id: 'sport-6',
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "25b278ae-4216-412e-8ae9-2e73340cd0cd"
}] as any[];
const gamingOverlays = [{
  id: 'game-1',
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "06e61f8e-cd8e-4a65-8f4c-3b0008c96e69"
}, {
  id: 'game-2',
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "3f8bab4d-34e8-450b-9a4d-169edc3f51e3"
}, {
  id: 'game-3',
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "6d01baf3-ff96-4dfc-8fe5-a90e07282629"
}, {
  id: 'game-4',
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "5a6eef8e-4a64-4d9c-afc5-c31c7ff96ba2"
}, {
  id: 'game-5',
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "48e9fd45-8367-4f29-b828-58fdc46420dc"
}, {
  id: 'game-6',
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "302d1b95-9f36-4b48-9c8e-decbae0a3d5d"
}] as any[];
const podcastOverlays = [{
  id: 'podcast-1',
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "2701faf9-a523-4d84-8e64-28c74b54c518"
}, {
  id: 'podcast-2',
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "9fd45225-12d4-4eb9-bdbd-e89b2df904e4"
}, {
  id: 'podcast-3',
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "ba232634-92b1-4c4b-93e4-6312f5ae93d0"
}, {
  id: 'podcast-4',
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "a0fb79b7-7cb2-4864-9ce8-a55acf23c726"
}, {
  id: 'podcast-5',
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "9976b4f0-ea88-4aff-97ab-ba259e96e6ea"
}, {
  id: 'podcast-6',
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "d3997b4b-0cef-49e6-8e87-79ef6a2a7222"
}] as any[];
const carouselSections = [{
  title: 'Sports',
  overlays: sportsOverlays,
  mpid: "3b1f9542-047f-4cf2-9d74-aece66396bdc"
}, {
  title: 'Gaming',
  overlays: gamingOverlays,
  mpid: "e04be03c-09a7-47a8-875d-4671f2f4ff4a"
}, {
  title: 'Podcasts',
  overlays: podcastOverlays,
  mpid: "cbc57788-5845-4a11-bf5d-650ea8828308"
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
  return <SortableContainer dndKitId="1703d079-91a4-4a65-be56-efff1a84e443" containerType="collection" prevTag="div" className="space-y-16" data-magicpath-id="0" data-magicpath-path="OverlayCarouselsSection.tsx">
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