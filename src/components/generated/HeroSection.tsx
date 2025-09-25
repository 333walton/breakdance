import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// @component: HeroSection
export const HeroSection = () => {
  // @return
  return <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Overlays</span>
              <span className="block">built for pros</span>
            </h1>
            <motion.button className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <span>Browse overlays</span>
            </motion.button>
          </motion.div>
          <motion.div className="relative" initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-full h-80 bg-gray-800/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Play className="w-8 h-8 text-orange-400" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    <span>Stream Deck Interface Preview</span>
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};