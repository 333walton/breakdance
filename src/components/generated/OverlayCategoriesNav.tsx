import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const categories = [{
  name: 'Browse overlays',
  id: 'browse',
  active: true,
  mpid: "9c56b65a-19c3-4c23-9c2f-7769f6a6fd7e"
}, {
  name: 'Art & Design',
  id: 'art',
  active: false,
  mpid: "443bcc29-6dae-4dee-a6bd-7a041a5af24f"
}, {
  name: 'Business & Finance',
  id: 'business',
  active: false,
  mpid: "bab78b21-ee49-4a7c-9ee5-c78866e79ca4"
}, {
  name: 'Education',
  id: 'education',
  active: false,
  mpid: "8a1b1852-f57e-4a95-bd5d-3536fa8ea724"
}, {
  name: 'Game',
  id: 'game',
  active: false,
  mpid: "9c2cc72d-c3ea-4220-bcf0-d7ee0d1f0489"
}, {
  name: 'Holiday',
  id: 'holiday',
  active: false,
  mpid: "f00521f2-b1c7-4c93-a5b0-bb0386f51dfd"
}] as any[];

// @component: OverlayCategoriesNav
export const OverlayCategoriesNav = () => {
  const [activeCategory, setActiveCategory] = useState('browse');

  // @return
  return <SortableContainer dndKitId="0cb13028-a67b-4be7-8823-315d0f2222aa" containerType="regular" prevTag="section" className="px-6 py-8 border-y border-white/10 bg-black/20" data-magicpath-id="0" data-magicpath-path="OverlayCategoriesNav.tsx">
      <SortableContainer dndKitId="7c63d553-221f-4f1b-9938-a536bf0cfb3b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="OverlayCategoriesNav.tsx">
        <SortableContainer dndKitId="ca4761b2-970c-41e7-a032-e7d4acf3b74c" containerType="collection" prevTag="div" className="flex space-x-2 overflow-x-auto scrollbar-hide" data-magicpath-id="2" data-magicpath-path="OverlayCategoriesNav.tsx">
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