import React, { useEffect, useRef, useState } from 'react';

// Define the config type based on the library's expected configuration
interface FluidAnimationConfig {
  textureDownsample?: number;
  densityDissipation?: number;
  velocityDissipation?: number;
  pressureDissipation?: number;
  pressureIterations?: number;
  curl?: number;
  splatRadius?: number;
  colorsPool?: string[];
}

interface FluidAnimationWrapperProps {
  className?: string;
  config?: FluidAnimationConfig;
  style?: React.CSSProperties;
  animationRef?: React.MutableRefObject<any>;
}

const defaultConfig: FluidAnimationConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
  colorsPool: [
    '#FF5C25', // Orange from your brand
    '#FFC542', // Yellow from your brand
    '#9149c1', // Purple from your gradient
    '#582864', // Deep purple
    '#1c172b', // Dark blue
    '#231b34', // Dark purple
  ],
};

const FluidAnimationWrapper: React.FC<FluidAnimationWrapperProps> = ({
  className = '',
  config = {},
  style = {},
  animationRef,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [FluidAnimation, setFluidAnimation] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const localAnimationRef = useRef<any>(null);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Dynamically import the fluid animation component
  useEffect(() => {
    if (!isClient) return;

    const loadFluidAnimation = async () => {
      try {
        // Import the ES module from the built library
        const module = await import('./index.es.js');

        // The library exports a default React component
        if (module.default) {
          setFluidAnimation(() => module.default);
        } else {
          console.error('Could not find default export in fluid animation module');
        }
      } catch (error) {
        console.error('Error loading FluidAnimation:', error);
      }
    };

    loadFluidAnimation();
  }, [isClient]);

  // Merge default config with user config
  const mergedConfig = { ...defaultConfig, ...config };

  // Set animation ref if provided
  useEffect(() => {
    if (animationRef && localAnimationRef.current) {
      animationRef.current = localAnimationRef.current;
    }
  }, [animationRef, localAnimationRef.current]);

  // Don't render anything on server side
  if (!isClient) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: 'linear-gradient(135deg, #1c172b 0%, #231b34 100%)',
        }}
      />
    );
  }

  // Show loading state while component loads
  if (!FluidAnimation) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{
          ...style,
          background: 'linear-gradient(135deg, #1c172b 0%, #231b34 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="text-white/50 text-sm">Loading animation...</div>
      </div>
    );
  }

  // Render the fluid animation component
  return (
    <FluidAnimation
      ref={localAnimationRef}
      className={className}
      style={style}
      config={mergedConfig}
    />
  );
};

export default FluidAnimationWrapper;
