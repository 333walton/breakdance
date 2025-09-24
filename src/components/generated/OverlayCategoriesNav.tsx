import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const categories = [{
  name: 'Browse overlays',
  id: 'browse',
  active: true,
  mpid: "cd5aebf1-ad39-45c4-9100-00d30cfa8b42"
}, {
  name: 'Art & Design',
  id: 'art',
  active: false,
  mpid: "19ed8963-8365-4562-96e8-a62955bd9827"
}, {
  name: 'Business & Finance',
  id: 'business',
  active: false,
  mpid: "7a51d591-afb5-4b4f-9249-ab0dec9ed7b8"
}, {
  name: 'Education',
  id: 'education',
  active: false,
  mpid: "fdf0e779-c380-4942-bcab-1f8b31cd3bf0"
}, {
  name: 'Game',
  id: 'game',
  active: false,
  mpid: "f6b8879c-3307-43ce-98f9-3287c4b320ce"
}, {
  name: 'Holiday',
  id: 'holiday',
  active: false,
  mpid: "e5814324-c11f-470d-8110-5103b5df7ead"
}] as any[];

// @component: OverlayCategoriesNav
export const OverlayCategoriesNav = () => {
  const [activeCategory, setActiveCategory] = useState('browse');

  // @return
  return <SortableContainer dndKitId="58b73b6a-0319-46f1-bd4e-0f1035b8f407" containerType="regular" prevTag="section" className="px-6 py-8 border-y border-white/10 bg-black/20" data-magicpath-id="0" data-magicpath-path="OverlayCategoriesNav.tsx">
      <SortableContainer dndKitId="78af29bf-70b9-49bb-aaf0-1855afd9f96e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="OverlayCategoriesNav.tsx">
        <SortableContainer dndKitId="d86a9717-dc48-4ab7-8095-853d1f942ba1" containerType="collection" prevTag="div" className="flex space-x-2 overflow-x-auto scrollbar-hide" data-magicpath-id="2" data-magicpath-path="OverlayCategoriesNav.tsx">
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