import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// @component: HeroSection
export const HeroSection = () => {
  // @return
  return <SortableContainer dndKitId="5653c743-1990-47a8-86b7-2def3d5098e7" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      <SortableContainer dndKitId="e6ff4c45-4fc6-44be-8b8c-f57b92565d86" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        <SortableContainer dndKitId="072ce150-5c85-46a8-a06c-a18e21b0491a" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
          <SortableContainer dndKitId="19267447-07fd-4ee7-a309-18d8ecec44b4" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="3" data-magicpath-path="HeroSection.tsx">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">
              <span className="block" data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">Overlays</span>
              <span className="block" data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">built for pros</span>
            </h1>
            <SortableContainer dndKitId="f7e4fb29-bbba-4641-8cec-255d132efffe" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
              <span data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">Browse overlays</span>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="83073e53-53ee-41b2-81d5-7acdc20c1ab6" containerType="regular" prevTag="motion.div" className="relative" initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
            <SortableContainer dndKitId="0fa7ed88-0505-423b-b56a-a334983a389f" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-sm" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
              <SortableContainer dndKitId="1cc2dffc-d985-4904-ad27-9a1aba97edd1" containerType="regular" prevTag="div" className="w-full h-80 bg-gray-800/50 rounded-lg flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
                <SortableContainer dndKitId="d413d26d-5a65-4795-bf34-e8fc303a4c1a" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
                  <SortableContainer dndKitId="236266ca-8f59-4812-80ac-2063aca67387" containerType="regular" prevTag="div" className="w-16 h-16 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">
                    <Play className="w-8 h-8 text-orange-400" data-magicpath-id="14" data-magicpath-path="HeroSection.tsx" />
                  </SortableContainer>
                  <p className="text-gray-300 text-sm" data-magicpath-id="15" data-magicpath-path="HeroSection.tsx">
                    <span data-magicpath-id="16" data-magicpath-path="HeroSection.tsx">Stream Deck Interface Preview</span>
                  </p>
                </SortableContainer>
              </SortableContainer>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" data-magicpath-id="17" data-magicpath-path="HeroSection.tsx"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" data-magicpath-id="18" data-magicpath-path="HeroSection.tsx"></div>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};