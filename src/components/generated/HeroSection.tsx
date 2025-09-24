import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// @component: HeroSection
export const HeroSection = () => {
  // @return
  return <SortableContainer dndKitId="3399620b-1bbb-40c5-ba29-69ca3e0183db" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      <SortableContainer dndKitId="4ded37b2-297f-47e1-8b64-d0529a7de895" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        <SortableContainer dndKitId="1e2053a8-6849-420f-a8e0-9c1f0a7bc73e" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
          <SortableContainer dndKitId="c79acbeb-ac4e-43fa-aa47-e29494380d02" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="313e712b-f75d-4ddc-883d-042a0aab42aa" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
              <span data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">Browse overlays</span>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="2a982244-1364-4b8f-9ab8-71e2e2ab9520" containerType="regular" prevTag="motion.div" className="relative" initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
            <SortableContainer dndKitId="407832f5-7f5d-4b0d-9255-972ab277707e" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-sm" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
              <SortableContainer dndKitId="06928d6a-dd29-496b-88c8-771b17f57a5c" containerType="regular" prevTag="div" className="w-full h-80 bg-gray-800/50 rounded-lg flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
                <SortableContainer dndKitId="57578efb-f0bb-468e-b602-e144305f79a6" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
                  <SortableContainer dndKitId="332f6415-cb75-4959-a8ab-111579cc1b67" containerType="regular" prevTag="div" className="w-16 h-16 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">
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