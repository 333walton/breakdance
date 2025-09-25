import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const categories = [{
  name: 'Browse overlays',
  id: 'browse',
  active: true,
  mpid: "115be471-495c-4a2d-ac3d-96f83c558497"
}, {
  name: 'Art & Design',
  id: 'art',
  active: false,
  mpid: "4fd9d851-ff78-44b3-bd80-146b8c4d81e4"
}, {
  name: 'Business & Finance',
  id: 'business',
  active: false,
  mpid: "8654a057-253e-4326-8c1f-4951df90f4d4"
}, {
  name: 'Education',
  id: 'education',
  active: false,
  mpid: "c1213b46-c2d6-435b-a36b-16c2481e16f7"
}, {
  name: 'Game',
  id: 'game',
  active: false,
  mpid: "26cd029a-4504-4208-ae30-49835e9067fb"
}, {
  name: 'Holiday',
  id: 'holiday',
  active: false,
  mpid: "78e840bb-b927-4e97-afb4-cc4967c84790"
}] as any[];

// @component: OverlayCategoriesNav
export const OverlayCategoriesNav = () => {
  const [activeCategory, setActiveCategory] = useState('browse');

  // @return
  return <SortableContainer dndKitId="0e566fe7-ce78-431b-894c-b72f084a5aa8" containerType="regular" prevTag="section" className="px-6 py-8 border-y border-white/10 bg-black/20" data-magicpath-id="0" data-magicpath-path="OverlayCategoriesNav.tsx">
      <SortableContainer dndKitId="d2b6837c-ca3c-477a-b78a-50b6be7c191a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="OverlayCategoriesNav.tsx">
        <SortableContainer dndKitId="5b6a437f-7044-4a98-9cd1-3a659cfd5043" containerType="collection" prevTag="div" className="flex space-x-2 overflow-x-auto scrollbar-hide" data-magicpath-id="2" data-magicpath-path="OverlayCategoriesNav.tsx">
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