import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
const sportsOverlays = [{
  id: 'sport-1',
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "ab329d00-b693-4cbd-be7d-f5e9e1b41db2"
}, {
  id: 'sport-2',
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "1ded81ea-0883-489e-8168-f707ab0cd2d0"
}, {
  id: 'sport-3',
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "6353f981-f023-4eb0-9107-c063e0f3003a"
}, {
  id: 'sport-4',
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "c9438dd4-ff74-4db7-8235-596af6c23f19"
}, {
  id: 'sport-5',
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "486e8ea4-3978-4f93-b245-c31aef05b64a"
}, {
  id: 'sport-6',
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "b4729bc4-8386-4dd0-9cf8-eefddc180bf3"
}] as any[];
const gamingOverlays = [{
  id: 'game-1',
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "a6a8aeb4-8947-467d-9cf0-cb9ba2ed88b3"
}, {
  id: 'game-2',
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "a01a869d-be0a-42f0-8eb9-7ed467d51770"
}, {
  id: 'game-3',
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "5623f873-ff0e-4da8-a47a-a53b64812510"
}, {
  id: 'game-4',
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "e05870e4-b59b-496f-9f8b-8d9e76bee623"
}, {
  id: 'game-5',
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "49d37cd3-6ddc-4e1e-bfc2-df945ae3da5a"
}, {
  id: 'game-6',
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "9ec42288-4aba-4e0f-b6ba-6102bb68ba2a"
}] as any[];
const podcastOverlays = [{
  id: 'podcast-1',
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "80ce9a37-3145-4ffe-a64a-a2011c095b46"
}, {
  id: 'podcast-2',
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "f2f39f34-fc41-4008-9784-ff73eec93e41"
}, {
  id: 'podcast-3',
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "d099113f-8dc7-4890-92c7-1810a82c57ea"
}, {
  id: 'podcast-4',
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "1f61a0da-afe3-4007-a1f7-bb6a9cff4bd5"
}, {
  id: 'podcast-5',
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "b09b9ede-bd4e-4d65-9aee-f373646eab26"
}, {
  id: 'podcast-6',
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "5ca28402-571a-41ce-8c76-94e5e7464f60"
}] as any[];
const carouselSections = [{
  title: 'Sports',
  overlays: sportsOverlays,
  mpid: "c8af9bbe-3dda-4bc7-b9bb-5a072d2facdb"
}, {
  title: 'Gaming',
  overlays: gamingOverlays,
  mpid: "a1254dd4-3520-4e3e-a76b-39ac80ddcfeb"
}, {
  title: 'Podcasts',
  overlays: podcastOverlays,
  mpid: "0e28af08-306f-4a4a-92cd-b59405b0edfe"
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
  return <SortableContainer dndKitId="b5a808cf-7417-4d30-989c-a9fbbd033632" containerType="collection" prevTag="div" className="space-y-16" data-magicpath-id="0" data-magicpath-path="OverlayCarouselsSection.tsx">
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