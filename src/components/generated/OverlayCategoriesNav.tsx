import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const categories = [{
  name: 'Browse overlays',
  id: 'browse',
  active: true,
  mpid: "7475f72c-d6ac-49ac-bea8-c0dee25bb2fa"
}, {
  name: 'Art & Design',
  id: 'art',
  active: false,
  mpid: "346351eb-9cf8-44e8-bf7c-c5f15b21ca57"
}, {
  name: 'Business & Finance',
  id: 'business',
  active: false,
  mpid: "1475be11-50a8-4f77-94a2-d0788fc631d3"
}, {
  name: 'Education',
  id: 'education',
  active: false,
  mpid: "ff8a1537-ade7-432a-a441-66214941ffd0"
}, {
  name: 'Game',
  id: 'game',
  active: false,
  mpid: "9720ef4f-e122-4589-822d-463e45afb598"
}, {
  name: 'Holiday',
  id: 'holiday',
  active: false,
  mpid: "47055d49-7583-410b-8bb6-160deb849a53"
}] as any[];

// @component: OverlayCategoriesNav
export const OverlayCategoriesNav = () => {
  const [activeCategory, setActiveCategory] = useState('browse');

  // @return
  return <SortableContainer dndKitId="8caa82fb-10fd-4d12-8f3a-b27214a85fc2" containerType="regular" prevTag="section" className="px-6 py-8 border-y border-white/10 bg-black/20" data-magicpath-id="0" data-magicpath-path="OverlayCategoriesNav.tsx">
      <SortableContainer dndKitId="5b6e83b5-487a-4bb9-a971-9c97030f46e3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="OverlayCategoriesNav.tsx">
        <SortableContainer dndKitId="a2e67b9c-f40e-4a40-8572-4dca28f3fc36" containerType="collection" prevTag="div" className="flex space-x-2 overflow-x-auto scrollbar-hide" data-magicpath-id="2" data-magicpath-path="OverlayCategoriesNav.tsx">
          {categories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.id} onClick={() => setActiveCategory(category.id)} className={`relative whitespace-nowrap px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeCategory === category.id ? 'bg-white/20 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="3" data-magicpath-path="OverlayCategoriesNav.tsx">
              <span data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="4" data-magicpath-path="OverlayCategoriesNav.tsx">{category.name}</span>
              {activeCategory === category.id && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6
          }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="OverlayCategoriesNav.tsx" />}
            </motion.button>)}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};