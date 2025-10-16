import React, { useState, useRef, MouseEvent } from 'react';
import { Overlay } from '../../lib/overlays';

interface ProductCard3DProps {
  overlay: Overlay;
  onPreview?: () => void;
}

export const ProductCard3D: React.FC<ProductCard3DProps> = ({ overlay, onPreview }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [shineProgress, setShineProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    if (isDragging) {
      // Drag mode: calculate rotation based on drag distance from start
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      const rotateY = deltaX / 10;
      const rotateX = -deltaY / 10;

      setRotation({ x: rotateX, y: rotateY });
    } else {
      // Hover mode: calculate rotation based on mouse position relative to center (less sensitive)
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      // Direct calculation: divide by larger constant for less sensitive tilt
      const rotateY = offsetX / 50;
      const rotateX = -offsetY / 50;

      setRotation({ x: rotateX, y: rotateY });
    }

    // Calculate shine progress based on mouse position (0% to 100%)
    // Use diagonal from top-left to bottom-right for dramatic effect
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    // Calculate progress along diagonal (0 at top-left, 1 at bottom-right)
    const diagonalProgress = (relativeX / rect.width + relativeY / rect.height) / 2;
    setShineProgress(diagonalProgress * 100);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
    setShineProgress(0);
    setIsDragging(false);
  };

  return (
    <div
      ref={cardRef}
      className="relative cursor-grab active:cursor-grabbing"
      style={{
        width: '450px',
        height: '320px',
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className="w-full h-full transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main Card with 3D Depth */}
        <div
          className="relative w-full h-full bg-gradient-to-br from-[#0a0612] to-[#150b1f] rounded-2xl border border-purple-900/20 overflow-hidden shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Card Thickness/Depth Layers - Increased depth */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0612]/90 to-[#150b1f]/70 rounded-2xl"
            style={{ transform: 'translateZ(-2px)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0612]/80 to-[#150b1f]/60 rounded-2xl"
            style={{ transform: 'translateZ(-4px)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0612]/70 to-[#150b1f]/50 rounded-2xl"
            style={{ transform: 'translateZ(-6px)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0612]/60 to-[#150b1f]/40 rounded-2xl"
            style={{ transform: 'translateZ(-8px)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0612]/50 to-[#150b1f]/30 rounded-2xl"
            style={{ transform: 'translateZ(-10px)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0612]/40 to-[#150b1f]/20 rounded-2xl"
            style={{ transform: 'translateZ(-12px)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0612]/30 to-[#150b1f]/15 rounded-2xl"
            style={{ transform: 'translateZ(-14px)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0612]/20 to-[#150b1f]/10 rounded-2xl"
            style={{ transform: 'translateZ(-16px)' }}
          />

          {/* Gradient Reflection Shine Effect (Reduced Intensity) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl overflow-hidden"
            style={{
              opacity: isHovering ? 0.6 : 0,
              background: `linear-gradient(135deg,
                transparent ${Math.max(0, shineProgress - 40)}%,
                rgba(255, 255, 255, 0.05) ${Math.max(0, shineProgress - 30)}%,
                rgba(255, 255, 255, 0.15) ${Math.max(0, shineProgress - 20)}%,
                rgba(255, 255, 255, 0.3) ${Math.max(0, shineProgress - 10)}%,
                rgba(255, 255, 255, 0.5) ${shineProgress}%,
                rgba(255, 255, 255, 0.3) ${Math.min(100, shineProgress + 10)}%,
                rgba(255, 255, 255, 0.15) ${Math.min(100, shineProgress + 20)}%,
                rgba(255, 255, 255, 0.05) ${Math.min(100, shineProgress + 30)}%,
                transparent ${Math.min(100, shineProgress + 40)}%)`,
              transform: 'translateZ(30px)',
              mixBlendMode: 'overlay',
            }}
          />
        </div>

        {/* Preview Button - Outside card but on same transformation plane */}
        <div
          className="absolute top-full right-0 mt-2 pointer-events-none"
          style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
        >
          <button
            onClick={onPreview}
            onMouseMove={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            className="relative px-4 py-1.5 bg-purple-700/30 hover:bg-purple-600/40 active:bg-purple-600/50 text-sm font-medium rounded-lg cursor-pointer border border-purple-600/20 shadow-[0_4px_8px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.1)_inset] active:shadow-[0_1px_4px_rgba(0,0,0,0.5)_inset] active:translate-y-0.5 transition-all duration-100 pointer-events-auto"
            style={{ color: '#ffffff' }}
          >
            {/* Button Thickness/Depth Layers - Increased depth */}
            <div
              className="absolute inset-0 bg-purple-800/50 rounded-lg pointer-events-none"
              style={{ transform: 'translateZ(-1px)' }}
            />
            <div
              className="absolute inset-0 bg-purple-800/45 rounded-lg pointer-events-none"
              style={{ transform: 'translateZ(-2px)' }}
            />
            <div
              className="absolute inset-0 bg-purple-800/40 rounded-lg pointer-events-none"
              style={{ transform: 'translateZ(-3px)' }}
            />
            <div
              className="absolute inset-0 bg-purple-800/35 rounded-lg pointer-events-none"
              style={{ transform: 'translateZ(-4px)' }}
            />
            <div
              className="absolute inset-0 bg-purple-800/30 rounded-lg pointer-events-none"
              style={{ transform: 'translateZ(-5px)' }}
            />
            <div
              className="absolute inset-0 bg-purple-800/25 rounded-lg pointer-events-none"
              style={{ transform: 'translateZ(-6px)' }}
            />
            <div
              className="absolute inset-0 bg-purple-800/20 rounded-lg pointer-events-none"
              style={{ transform: 'translateZ(-7px)' }}
            />
            <div
              className="absolute inset-0 bg-purple-800/15 rounded-lg pointer-events-none"
              style={{ transform: 'translateZ(-8px)' }}
            />
            <span className="relative z-10" style={{ color: '#ffffff' }}>Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
};
