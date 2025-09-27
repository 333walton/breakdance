import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Settings, X } from 'lucide-react';
import FluidAnimationWrapper from '../FluidAnimation/FluidAnimationWrapper';

// @component: HeroSection
export const HeroSection = () => {
  // Control panel state
  const [showControls, setShowControls] = useState(false);
  const [fluidConfig, setFluidConfig] = useState({
    textureDownsample: 1,
    densityDissipation: 0.98,
    velocityDissipation: 0.99,
    pressureDissipation: 0.8,
    pressureIterations: 25,
    curl: 30,
    splatRadius: 0.005,
  });

  const handleConfigChange = (key: string, value: number) => {
    setFluidConfig(prev => ({ ...prev, [key]: value }));
  };

  // @return
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Test Container for Fluid Animation */}
        <div className="mb-12 p-4 bg-gray-900 rounded-lg relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg">Test Container - Fluid Animation</h3>
            <button
              onClick={() => setShowControls(!showControls)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Toggle controls"
            >
              {showControls ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Settings className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-white/20">
            <FluidAnimationWrapper className="absolute inset-0" config={fluidConfig} />

            {/* Control Panel Overlay */}
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/20 max-w-sm"
                style={{ zIndex: 10 }}
              >
                <h4 className="text-white text-sm font-semibold mb-3">Fluid Animation Controls</h4>
                <div className="space-y-3 max-h-[240px] overflow-y-auto">
                  {/* Density Dissipation */}
                  <div>
                    <label className="text-white/70 text-xs flex justify-between mb-1">
                      <span>Density Dissipation</span>
                      <span className="text-white/90">
                        {fluidConfig.densityDissipation.toFixed(2)}
                      </span>
                    </label>
                    <input
                      type="range"
                      min="0.9"
                      max="1"
                      step="0.01"
                      value={fluidConfig.densityDissipation}
                      onChange={e =>
                        handleConfigChange('densityDissipation', parseFloat(e.target.value))
                      }
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.densityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.densityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                      }}
                    />
                  </div>

                  {/* Velocity Dissipation */}
                  <div>
                    <label className="text-white/70 text-xs flex justify-between mb-1">
                      <span>Velocity Dissipation</span>
                      <span className="text-white/90">
                        {fluidConfig.velocityDissipation.toFixed(2)}
                      </span>
                    </label>
                    <input
                      type="range"
                      min="0.9"
                      max="1"
                      step="0.01"
                      value={fluidConfig.velocityDissipation}
                      onChange={e =>
                        handleConfigChange('velocityDissipation', parseFloat(e.target.value))
                      }
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.velocityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.velocityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                      }}
                    />
                  </div>

                  {/* Pressure Dissipation */}
                  <div>
                    <label className="text-white/70 text-xs flex justify-between mb-1">
                      <span>Pressure Dissipation</span>
                      <span className="text-white/90">
                        {fluidConfig.pressureDissipation.toFixed(2)}
                      </span>
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="1"
                      step="0.01"
                      value={fluidConfig.pressureDissipation}
                      onChange={e =>
                        handleConfigChange('pressureDissipation', parseFloat(e.target.value))
                      }
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.pressureDissipation - 0.5) / 0.5) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.pressureDissipation - 0.5) / 0.5) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                      }}
                    />
                  </div>

                  {/* Curl */}
                  <div>
                    <label className="text-white/70 text-xs flex justify-between mb-1">
                      <span>Curl (Vorticity)</span>
                      <span className="text-white/90">{fluidConfig.curl}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={fluidConfig.curl}
                      onChange={e => handleConfigChange('curl', parseInt(e.target.value))}
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${fluidConfig.curl}%, rgba(255, 255, 255, 0.2) ${fluidConfig.curl}%, rgba(255, 255, 255, 0.2) 100%)`,
                      }}
                    />
                  </div>

                  {/* Splat Radius */}
                  <div>
                    <label className="text-white/70 text-xs flex justify-between mb-1">
                      <span>Splat Radius</span>
                      <span className="text-white/90">{fluidConfig.splatRadius.toFixed(3)}</span>
                    </label>
                    <input
                      type="range"
                      min="0.001"
                      max="0.02"
                      step="0.001"
                      value={fluidConfig.splatRadius}
                      onChange={e => handleConfigChange('splatRadius', parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.splatRadius - 0.001) / 0.019) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.splatRadius - 0.001) / 0.019) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                      }}
                    />
                  </div>

                  {/* Pressure Iterations */}
                  <div>
                    <label className="text-white/70 text-xs flex justify-between mb-1">
                      <span>Pressure Iterations</span>
                      <span className="text-white/90">{fluidConfig.pressureIterations}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      step="5"
                      value={fluidConfig.pressureIterations}
                      onChange={e =>
                        handleConfigChange('pressureIterations', parseInt(e.target.value))
                      }
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.pressureIterations - 10) / 40) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.pressureIterations - 10) / 40) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <style jsx>{`
            input[type='range']::-webkit-slider-thumb {
              appearance: none;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: #ffc542;
              cursor: pointer;
            }
            input[type='range']::-moz-range-thumb {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: #ffc542;
              cursor: pointer;
              border: none;
            }
          `}</style>
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
            <div className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[520px] rounded-3xl border border-white/10 p-6 sm:p-8 transition-colors duration-500 ease-in-out bg-gradient-to-b from-[#1c172b]/80 to-[#231b34]/70 overflow-hidden">
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
                  splatRadius: 0.0028, //from 0.005
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
