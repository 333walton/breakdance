import React, { useState } from 'react';
import { motion } from 'framer-motion';
const categories = [{
  name: 'Browse overlays',
  id: 'browse',
  active: true
}, {
  name: 'Art & Design',
  id: 'art',
  active: false
}, {
  name: 'Business & Finance',
  id: 'business',
  active: false
}, {
  name: 'Education',
  id: 'education',
  active: false
}, {
  name: 'Game',
  id: 'game',
  active: false
}, {
  name: 'Holiday',
  id: 'holiday',
  active: false
}] as any[];

// @component: OverlayCategoriesNav
export const OverlayCategoriesNav = () => {
  const [activeCategory, setActiveCategory] = useState('browse');

  // @return
  return <section className="px-6 py-8 border-y border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {categories.map(category => <motion.button key={category.id} onClick={() => setActiveCategory(category.id)} className={`relative whitespace-nowrap px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeCategory === category.id ? 'bg-white/20 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
              <span>{category.name}</span>
              {activeCategory === category.id && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6
          }} />}
            </motion.button>)}
        </div>
      </div>
    </section>;
};