import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const categories = [{
  name: 'Browse overlays',
  id: 'browse',
  active: true,
  mpid: "159e385c-635d-4af6-90d1-a91055d26dd9"
}, {
  name: 'Art & Design',
  id: 'art',
  active: false,
  mpid: "171bbc4d-eb08-45ee-b4ae-46348ab70ed4"
}, {
  name: 'Business & Finance',
  id: 'business',
  active: false,
  mpid: "5ee8fe73-9311-443f-97a1-f9ce444f07f8"
}, {
  name: 'Education',
  id: 'education',
  active: false,
  mpid: "0772ca97-ac85-4be3-9fdf-704ea7433600"
}, {
  name: 'Game',
  id: 'game',
  active: false,
  mpid: "69e1d7cd-10a5-4773-990a-0cc61db9b155"
}, {
  name: 'Holiday',
  id: 'holiday',
  active: false,
  mpid: "4bb6e39c-c922-4220-9a7f-326a92ea1301"
}] as any[];

// @component: OverlayCategoriesNav
export const OverlayCategoriesNav = () => {
  const [activeCategory, setActiveCategory] = useState('browse');

  // @return
  return <SortableContainer dndKitId="1d0ec8b9-b256-4987-a638-5f4576e148ab" containerType="regular" prevTag="section" className="px-6 py-8 border-y border-white/10 bg-black/20" data-magicpath-id="0" data-magicpath-path="OverlayCategoriesNav.tsx">
      <SortableContainer dndKitId="a5d9c53b-b89d-4b96-85c6-bc1fc94506a4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="OverlayCategoriesNav.tsx">
        <SortableContainer dndKitId="7b4a8433-943f-4d79-8a21-5cd9077c428a" containerType="collection" prevTag="div" className="flex space-x-2 overflow-x-auto scrollbar-hide" data-magicpath-id="2" data-magicpath-path="OverlayCategoriesNav.tsx">
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