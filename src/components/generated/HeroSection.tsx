import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import FluidAnimationWrapper from '../FluidAnimation/FluidAnimationWrapper';

// @component: HeroSection
export const HeroSection = () => {
  // @return
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Test Container for Fluid Animation */}
        <div className="mb-12 p-4 bg-gray-900 rounded-lg">
          <h3 className="text-white text-lg mb-4">Test Container - Fluid Animation</h3>
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-white/20">
            <FluidAnimationWrapper
              className="absolute inset-0"
              config={{
                textureDownsample: 1,
                densityDissipation: 0.98,
                velocityDissipation: 0.99,
                pressureDissipation: 0.8,
                pressureIterations: 25,
                curl: 30,
                splatRadius: 0.005,
              }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Overlays</span>
              <span className="block">built for pros</span>
            </h1>
            <motion.button
              className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <span>Browse overlays</span>
            </motion.button>
          </motion.div>
          <motion.div
            className="relative"
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            {/* Final Container with Fluid Animation using specified Tailwind classes */}
            <div className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl border border-white/10 p-6 sm:p-8 transition-colors duration-500 ease-in-out bg-gradient-to-b from-[#1c172b]/80 to-[#231b34]/70 overflow-hidden">
              {/* Fluid Animation Background */}
              <FluidAnimationWrapper
                className="absolute inset-0"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                }}
                config={{
                  textureDownsample: 1,
                  densityDissipation: 0.96, //from 0.98
                  velocityDissipation: 0.99,
                  pressureDissipation: 0.77, //from 0.8
                  pressureIterations: 28, //from 25
                  curl: 40, //from 30
                  splatRadius: 0.004, //from 0.005
                  colorsPool: [
                    '#FF5C25', // Orange
                    '#FFC542', // Yellow
                    '#c10e69', // Vibrant pink / magenta
                    '#cc6c99', // Bright pink
                    '#58aa0a', // Neon green
                    '#71da0d', // Lime/neon green
                    '#64b1aa', // Turquoise blue
                    '#aec76d', // Yellow-green
                    '#9149c1', // Purple
                    '#582864', // Deep purple
                    '#1c172b', // Dark blue
                    '#231b34', // Dark purple
                    '#f3f5f3', // White/neutral base
                    '#c8d7cc', // Soft muted background
                  ],
                }}
              />

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/20">
                    <Play className="w-10 h-10 text-white/80" />
                  </div>
                  <p className="text-white/90 text-lg font-medium">
                    <span>Interactive Fluid Animation</span>
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    <span>Move your mouse over the animation</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
