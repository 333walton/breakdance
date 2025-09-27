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

  // Debug logging
  console.log('🎛️ HeroSection rendering - showControls:', showControls);
  console.log('🎛️ Control panel should be visible below Browse overlays button');

  // @return
  return (
    <section className="relative px-6 py-20">
      {/* Floating Control Panel */}
      {showControls && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 50 }}
          className="fixed top-20 right-6 bg-black/90 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl p-4 max-w-sm z-50"
          style={{
            width: '320px',
            maxHeight: '80vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
            <h4 className="text-white text-lg font-semibold">🎛️ Animation Controls</h4>
            <button
              onClick={() => {
                console.log('🎛️ Control panel close button clicked');
                setShowControls(false);
              }}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Hide controls"
            >
              <X className="w-5 h-5 text-white/60" />
            </button>
          </div>

          {/* Controls */}
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {/* Density Dissipation */}
            <div>
              <label className="text-white/70 text-sm flex justify-between mb-2">
                <span>Density Dissipation</span>
                <span className="text-white/90 font-mono">
                  {fluidConfig.densityDissipation.toFixed(2)}
                </span>
              </label>
              <input
                type="range"
                min="0.9"
                max="1"
                step="0.01"
                value={fluidConfig.densityDissipation}
                onChange={e => {
                  console.log('🎛️ Density changed to:', e.target.value);
                  handleConfigChange('densityDissipation', parseFloat(e.target.value));
                }}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Velocity Dissipation */}
            <div>
              <label className="text-white/70 text-sm flex justify-between mb-2">
                <span>Velocity Dissipation</span>
                <span className="text-white/90 font-mono">
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
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Pressure Dissipation */}
            <div>
              <label className="text-white/70 text-sm flex justify-between mb-2">
                <span>Pressure Dissipation</span>
                <span className="text-white/90 font-mono">
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
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Curl */}
            <div>
              <label className="text-white/70 text-sm flex justify-between mb-2">
                <span>Curl (Vorticity)</span>
                <span className="text-white/90 font-mono">{fluidConfig.curl}</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={fluidConfig.curl}
                onChange={e => handleConfigChange('curl', parseInt(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Splat Radius */}
            <div>
              <label className="text-white/70 text-sm flex justify-between mb-2">
                <span>Splat Radius</span>
                <span className="text-white/90 font-mono">{fluidConfig.splatRadius.toFixed(3)}</span>
              </label>
              <input
                type="range"
                min="0.001"
                max="0.02"
                step="0.001"
                value={fluidConfig.splatRadius}
                onChange={e => handleConfigChange('splatRadius', parseFloat(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Pressure Iterations */}
            <div>
              <label className="text-white/70 text-sm flex justify-between mb-2">
                <span>Pressure Iterations</span>
                <span className="text-white/90 font-mono">{fluidConfig.pressureIterations}</span>
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
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Test Container for Fluid Animation */}
        <div className="mb-12 p-4 bg-gray-900 rounded-lg relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg">Test Container - Fluid Animation</h3>
          </div>

          <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-white/20">
            <FluidAnimationWrapper className="absolute inset-0" config={fluidConfig} />

            {/* Compact Control Panel Toggle - Bottom Right */}
            <div className="absolute bottom-3 right-3 z-20">
              {!showControls ? (
                <motion.button
                  onClick={() => setShowControls(true)}
                  className="w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-200 hover:scale-105"
                  aria-label="Show controls"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Settings className="w-4 h-4 text-white/80" />
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  className="bg-black/85 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl"
                  style={{ width: '280px', maxHeight: '340px' }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-3 border-b border-white/10">
                    <h4 className="text-white text-xs font-semibold">Animation Controls</h4>
                    <button
                      onClick={() => setShowControls(false)}
                      className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors"
                      aria-label="Hide controls"
                    >
                      <X className="w-3 h-3 text-white/60" />
                    </button>
                  </div>

                  {/* Controls */}
                  <div className="p-3 space-y-2.5 max-h-[280px] overflow-y-auto">
                    {/* Density Dissipation */}
                    <div>
                      <label className="text-white/70 text-xs flex justify-between mb-1">
                        <span>Density</span>
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
                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.densityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.densityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                        }}
                      />
                    </div>

                    {/* Velocity Dissipation */}
                    <div>
                      <label className="text-white/70 text-xs flex justify-between mb-1">
                        <span>Velocity</span>
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
                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.velocityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.velocityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                        }}
                      />
                    </div>

                    {/* Pressure Dissipation */}
                    <div>
                      <label className="text-white/70 text-xs flex justify-between mb-1">
                        <span>Pressure</span>
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
                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.pressureDissipation - 0.5) / 0.5) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.pressureDissipation - 0.5) / 0.5) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                        }}
                      />
                    </div>

                    {/* Curl */}
                    <div>
                      <label className="text-white/70 text-xs flex justify-between mb-1">
                        <span>Curl</span>
                        <span className="text-white/90">{fluidConfig.curl}</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={fluidConfig.curl}
                        onChange={e => handleConfigChange('curl', parseInt(e.target.value))}
                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
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
                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.splatRadius - 0.001) / 0.019) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.splatRadius - 0.001) / 0.019) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                        }}
                      />
                    </div>

                    {/* Pressure Iterations */}
                    <div>
                      <label className="text-white/70 text-xs flex justify-between mb-1">
                        <span>Iterations</span>
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
                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.pressureIterations - 10) / 40) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.pressureIterations - 10) / 40) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
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
              onClick={() => {
                console.log('🎛️ Browse overlays button clicked - opening control panel');
                setShowControls(!showControls);
              }}
              className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <span>{showControls ? 'Hide Controls' : 'Animation Controls'}</span>
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
                config={fluidConfig}
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

              {/* Compact Control Panel Toggle - Bottom Right */}
              <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
                {!showControls ? (
                  <motion.button
                    onClick={() => setShowControls(true)}
                    className="w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-200 hover:scale-105 shadow-lg"
                    aria-label="Show animation controls"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Settings className="w-5 h-5 text-white/70" />
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="bg-black/90 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl"
                    style={{ width: '300px', maxHeight: '360px' }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                      <h4 className="text-white text-sm font-semibold">Animation Controls</h4>
                      <button
                        onClick={() => setShowControls(false)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="Hide controls"
                      >
                        <X className="w-4 h-4 text-white/60" />
                      </button>
                    </div>

                    {/* Controls */}
                    <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
                      {/* Density Dissipation */}
                      <div>
                        <label className="text-white/70 text-xs flex justify-between mb-1.5">
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
                        <label className="text-white/70 text-xs flex justify-between mb-1.5">
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
                        <label className="text-white/70 text-xs flex justify-between mb-1.5">
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
                        <label className="text-white/70 text-xs flex justify-between mb-1.5">
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
                        <label className="text-white/70 text-xs flex justify-between mb-1.5">
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
                        <label className="text-white/70 text-xs flex justify-between mb-1.5">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
