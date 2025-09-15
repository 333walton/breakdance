import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';

// @component: HeroSection
export const HeroSection = () => {
  // @return
  return <SortableContainer dndKitId="9bfcb45f-dd60-43f7-855b-bf5ef6966ece" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      <SortableContainer dndKitId="90cf4749-96cd-418e-b397-ec917b2eaca1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        <SortableContainer dndKitId="9878f2f7-fb67-452a-99dc-5656bd110cd5" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
          <SortableContainer dndKitId="26396bf1-fb5a-47c4-8a90-4330b2a93a0e" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="6e76a683-b36a-4555-96f2-809553e41333" containerType="regular" prevTag="motion.button" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
              <span data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">Browse overlays</span>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="66befbcc-d063-4b2c-8371-2cb9783a7541" containerType="regular" prevTag="motion.div" className="relative" initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
            <SortableContainer dndKitId="5394a85b-4fcb-485e-867f-ac5d5adeb746" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-sm" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
              <img src="/api/placeholder/600/400" alt="Stream Deck and overlay interface showing professional streaming setup" className="w-full rounded-lg shadow-2xl" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx"></div>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};