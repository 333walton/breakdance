import React, { useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Check,
  ArrowRight,
  Users,
  Youtube,
  Heart,
  Target,
  Palette,
  Copy,
  ExternalLink,
  X,
} from 'lucide-react';
import FluidAnimationWrapper from '../FluidAnimation/FluidAnimationWrapper';
import GlassmorphicButton from '../GlassmorphicButton';
import { SignInCard as SignUpCard } from './SignUpCard';
import { SignInCard } from './SignInCard';
const overlayCategories = [
  {
    name: 'Browse Overlays',
    active: true,
  },
  {
    name: 'Browse Tools',
    active: false,
  },
] as any[];
const sportsOverlays = [
  {
    name: 'LPF Argentina Stadium Fly In',
    aspect: '16:9',
  },
  {
    name: 'Basketball Stats Overlay',
    aspect: '16:9',
  },
  {
    name: 'Football Scoreboard Pro',
    aspect: '16:9',
  },
  {
    name: 'Tennis Match Display',
    aspect: '16:9',
  },
  {
    name: 'Baseball Diamond View',
    aspect: '16:9',
  },
  {
    name: 'Hockey Rink Layout',
    aspect: '16:9',
  },
] as any[];
const gamingOverlays = [
  {
    name: 'FPS Combat HUD',
    aspect: '16:9',
  },
  {
    name: 'RPG Interface Pro',
    aspect: '16:9',
  },
  {
    name: 'Racing Dashboard',
    aspect: '16:9',
  },
  {
    name: 'Strategy Command',
    aspect: '16:9',
  },
  {
    name: 'Battle Royale UI',
    aspect: '16:9',
  },
  {
    name: 'Retro Arcade Style',
    aspect: '16:9',
  },
] as any[];
const podcastOverlays = [
  {
    name: 'Talk Show Professional',
    aspect: '16:9',
  },
  {
    name: 'Interview Setup Clean',
    aspect: '16:9',
  },
  {
    name: 'News Broadcast Modern',
    aspect: '16:9',
  },
  {
    name: 'Panel Discussion Layout',
    aspect: '16:9',
  },
  {
    name: 'Solo Cast Minimal',
    aspect: '16:9',
  },
  {
    name: 'Live Q&A Interactive',
    aspect: '16:9',
  },
] as any[];
const howItWorksSteps = [
  {
    icon: Target,
    title: 'Choose Your Style',
    description:
      'Pick from your collection or browse our overlay library for a theme—vintage Topps to modern Panini to match your break’s vibe',
  },
  {
    icon: Palette,
    title: 'One-Click Integration',
    description:
      'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  },
  {
    icon: Copy,
    title: 'Go live with control',
    description:
      'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  },
] as any[];
const stats = [
  {
    number: '19.8%',
    label: 'Higher Viewer Engagement',
    sublabel: '',
  },
  {
    number: '3.2x',
    label: 'Higher Conversion Rates',
    sublabel: '',
  },
  {
    number: '30%',
    label: 'Higher Viewer Retention',
    sublabel: '',
  },
] as any[];
const communityCards = [
  {
    icon: Users,
    title: 'Join our Newsletter',
    subtitle: 'Stay updated with hobby news and product drops',
    buttonText: 'Join Newsletter',
    color: 'bg-[oklch(78.4%_0.142_246.8)]',
  },
  {
    icon: Youtube,
    title: 'Follow us on Twitter',
    subtitle: 'Follow us for hobby news and product updates',
    buttonText: 'Follow',
    color: 'bg-[oklch(68%_0.16_240)]',
  },
  {
    icon: Heart,
    title: 'Customize It',
    subtitle: 'Something specific? Themes, logos, animations & more...',
    buttonText: 'Reach Out',
    color: 'bg-[oklch(0.510_0.262_276.9)]',
  },
] as any[];
const navigationItems = [
  {
    label: 'Library',
  },
  {
    label: 'Tools',
  },
  {
    label: 'How It Works',
  },
  {
    label: 'Live Breaks',
  },
  {
    label: 'Shop',
  },
  {
    label: 'About',
  },
] as any[];

// Reusable variants
const fadeRise = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0.75, 0.3, 1],
    },
  },
};
const fadeRiseMobile = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0.75, 0.3, 1],
    },
  },
};
// New: subtle alternative entrance variants for variety
const fadeSlideRight = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.4, 0.75, 0.3, 1],
    },
  },
};
const fadeSlideLeft = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.4, 0.75, 0.3, 1],
    },
  },
};
const fadeRiseSoft = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.4, 0.75, 0.3, 1],
    },
  },
};
const fadeZoom = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0.75, 0.3, 1],
    },
  },
};
// Stagger helpers
const makeStagger = (delay = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.05,
    },
  },
});

// Helper hook to animate once on scroll
function useRevealOnce<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -10% 0px',
  });
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);
  return {
    ref,
    controls,
  } as const;
}

// Count-up utility using requestAnimationFrame
function useCountUp(target: number, inView: boolean, duration = 300) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, duration]);
  return value;
}

// @component: OverlaysUnoLandingPage
export const OverlaysUnoLandingPage = () => {
  const navigate = useNavigate();
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState('BROWSE OVERLAYS');
  // Ensure the "Browse Overlays" tab is selected by default regardless of casing
  React.useEffect(() => {
    setActiveCategory('Browse Overlays');
  }, []);
  const [activeDot, setActiveDot] = useState<number>(0);
  // Track which hero button is selected; none by default
  const [selectedHero, setSelectedHero] = useState<'form' | 'nfl' | 'phone' | null>(null);
  // Maintain recency order: most-recent first, least-recent last
  const [recency, setRecency] = useState<string[]>(['phone-preview', 'nfl-grid', 'form-window']);
  // New: focus mode for NFL centering
  const [nflFocused, setNflFocused] = useState<boolean>(false);
  const heroStageRef = React.useRef<HTMLDivElement | null>(null);

  // Control panel state for fluid animation
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
  const [showSignUpOverlay, setShowSignUpOverlay] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);

  // Ref to access the fluid animation instance
  const fluidAnimationRef = React.useRef<any>(null);

  const handleConfigChange = (key: string, value: number) => {
    console.log('🎛️ Config changed:', key, '=', value);
    const newConfig = { ...fluidConfig, [key]: value };
    console.log('🎛️ New fluid config:', newConfig);
    setFluidConfig(prev => ({ ...prev, [key]: value }));
  };

  const triggerRandomSplats = () => {
    console.log('🎨 Triggering random splats');

    // First, try to find the canvas element
    const canvasElement = document.querySelector('canvas');
    if (!canvasElement) {
      console.log('🎨 No canvas element found');
      return;
    }

    console.log('🎨 Found canvas element, triggering splats via simulated events');

    // Trigger multiple random splats at different positions
    const numSplats = 3 + Math.floor(Math.random() * 5); // 3-7 splats

    for (let i = 0; i < numSplats; i++) {
      setTimeout(() => {
        const rect = canvasElement.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        console.log('🎨 Creating splat at canvas position:', x, y);

        // Create and dispatch mouse events to simulate user interaction
        const mouseDownEvent = new MouseEvent('mousedown', {
          clientX: rect.left + x,
          clientY: rect.top + y,
          bubbles: true,
          cancelable: true,
          view: window,
        });

        const mouseMoveEvent = new MouseEvent('mousemove', {
          clientX: rect.left + x + (Math.random() - 0.5) * 50,
          clientY: rect.top + y + (Math.random() - 0.5) * 50,
          bubbles: true,
          cancelable: true,
          view: window,
        });

        const mouseUpEvent = new MouseEvent('mouseup', {
          clientX: rect.left + x + (Math.random() - 0.5) * 50,
          clientY: rect.top + y + (Math.random() - 0.5) * 50,
          bubbles: true,
          cancelable: true,
          view: window,
        });

        // Dispatch the events
        canvasElement.dispatchEvent(mouseDownEvent);

        setTimeout(() => {
          canvasElement.dispatchEvent(mouseMoveEvent);

          setTimeout(() => {
            canvasElement.dispatchEvent(mouseUpEvent);
          }, 50);
        }, 10);

        // Also try pointer events for better compatibility
        const pointerDownEvent = new PointerEvent('pointerdown', {
          clientX: rect.left + x,
          clientY: rect.top + y,
          bubbles: true,
          cancelable: true,
          view: window,
          pointerId: 1,
          pointerType: 'mouse',
        });

        const pointerMoveEvent = new PointerEvent('pointermove', {
          clientX: rect.left + x + (Math.random() - 0.5) * 50,
          clientY: rect.top + y + (Math.random() - 0.5) * 50,
          bubbles: true,
          cancelable: true,
          view: window,
          pointerId: 1,
          pointerType: 'mouse',
        });

        const pointerUpEvent = new PointerEvent('pointerup', {
          clientX: rect.left + x + (Math.random() - 0.5) * 50,
          clientY: rect.top + y + (Math.random() - 0.5) * 50,
          bubbles: true,
          cancelable: true,
          view: window,
          pointerId: 1,
          pointerType: 'mouse',
        });

        // Try pointer events too
        setTimeout(() => {
          canvasElement.dispatchEvent(pointerDownEvent);
          setTimeout(() => {
            canvasElement.dispatchEvent(pointerMoveEvent);
            setTimeout(() => {
              canvasElement.dispatchEvent(pointerUpEvent);
            }, 50);
          }, 10);
        }, 100);
      }, i * 150); // Stagger splats by 150ms
    }

    // Also try accessing the animation instance for direct API calls
    if (fluidAnimationRef.current) {
      console.log(
        '🎨 Available methods on fluid animation:',
        Object.getOwnPropertyNames(fluidAnimationRef.current)
      );
      console.log('🎨 Fluid animation current value:', fluidAnimationRef.current);
    }
  };

  // Auto-generate splats periodically to ensure animation is active
  React.useEffect(() => {
    if (!nflFocused) return;

    console.log('🎨 Setting up auto-splat generation for fluid animation');

    const autoSplatInterval = setInterval(() => {
      const canvasElement = document.querySelector('canvas');
      if (canvasElement) {
        const rect = canvasElement.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        // Create a gentle automatic splat
        const mouseMoveEvent = new MouseEvent('mousemove', {
          clientX: rect.left + x,
          clientY: rect.top + y,
          bubbles: true,
          cancelable: true,
          view: window,
        });

        canvasElement.dispatchEvent(mouseMoveEvent);
        console.log('🎨 Auto-generated splat at:', x, y);
      }
    }, 3000); // Auto-splat every 3 seconds

    return () => {
      console.log('🎨 Cleaning up auto-splat generation');
      clearInterval(autoSplatInterval);
    };
  }, [nflFocused]);

  // Debug logging
  console.log('🎛️ OverlaysUnoLandingPage rendering - showControls:', showControls);

  // Add missing variables
  const baseStyles = 'absolute cursor-pointer border border-white/10 rounded-2xl bg-white/5';
  const zFor = (id: string): number => {
    const index = recency.indexOf(id);
    return index >= 0 ? recency.length - index : 1;
  };

  // Smooth max-height coordination: measure content height and animate inline style to avoid snap on dynamic changes
  const heroCopyRef = React.useRef<HTMLDivElement | null>(null);
  const [heroCopyMaxHeight, setHeroCopyMaxHeight] = React.useState<number>(560);
  React.useLayoutEffect(() => {
    const el = heroCopyRef.current;
    if (!el) return;
    // Temporarily set to auto to read natural height
    const prev = el.style.maxHeight;
    el.style.maxHeight = 'none';
    const nextHeight = el.scrollHeight;
    // Restore previous and schedule transition in next frame for smoothness
    el.style.maxHeight = prev;
    requestAnimationFrame(() => {
      setHeroCopyMaxHeight(selectedHero ? Math.min(900, nextHeight) : 560);
    });
  }, [selectedHero]);
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const stage = heroStageRef.current;
      if (!stage) return;
      const target = e.target as Node | null;
      if (target && !stage.contains(target)) {
        // Restore defaults when clicking outside the hero frame
        setNflFocused(false);
        setSelectedHero(null);
        setRecency(['phone-preview', 'nfl-grid', 'form-window']);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  React.useEffect(() => {
    const id = setInterval(() => {
      setActiveDot(prev => prev); // disable auto-advance by keeping state
    }, 10000);
    return () => clearInterval(id);
  }, []);
  const dotContent = [
    {
      id: 'dot-1',
      title: 'Premium Overlays & Tools — Made for Breaking',
      hook: 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.',
      preview: {
        label: 'Stream Deck Interface Preview',
      },
    },
    {
      id: 'dot-2',
      title: 'Tools built for success',
      hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
      preview: {
        label: 'tools preview',
      },
    },
    {
      id: 'dot-3',
      title: 'Boost your views',
      hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
      preview: {
        label: 'boost views preview',
      },
    },
  ] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // Local component: LayeredHeroButtons (kept inside the file per single-top-level rule)
  const LayeredHeroButtons = () => {
    const cards = [
      {
        id: 'form-window',
        label: 'Form Window',
        z: 1,
      },
      {
        id: 'nfl-grid',
        label: 'NFL Grid',
        z: 2,
      },
      {
        id: 'phone-preview',
        label: 'Phone Preview',
        z: 3,
      },
    ] as any[];
    const [frontId, setFrontId] = React.useState<string>('phone-preview');
    function bringToFront(clicked: 'form' | 'nfl' | 'phone') {
      const clickedId =
        clicked === 'form' ? 'form-window' : clicked === 'nfl' ? 'nfl-grid' : 'phone-preview';
      // Update selected state
      setSelectedHero(clicked);
      // Reorder recency so clicked goes to front, preserving order of others
      setRecency(prev => {
        const next = prev.filter(id => id !== clickedId);
        next.unshift(clickedId);
        return next;
      });
    }
    function transformFor(id: string) {
      const isFront = id === frontId;
      const scale = isFront ? 1.08 : 0.98;
      // Create a subtle diagonal stack without heavy 3D skew for clarity
      const translate =
        id === 'phone-preview'
          ? 'translate(-6%, -6%)' // front-left
          : id === 'nfl-grid'
            ? 'translate(4%, -2%)' // center slight up
            : 'translate(0%, 6%)'; // back/base slight down
      return `${translate} scale(${scale})`;
    }
    function hoverStyles(isFront: boolean) {
      return {
        boxShadow: isFront
          ? '0 20px 60px rgba(255, 197, 67, 0.25)'
          : '0 14px 40px rgba(0,0,0,0.35)',
      } as React.CSSProperties;
    }
    return (
      <div className="relative w-full h-full">
        {/* Back layer – Browser Button */}
        <button
          type="button"
          aria-label="Open form window"
          onClick={() => bringToFront('form')}
          className={`${baseStyles} form-window transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-[transform,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`}
          style={{
            zIndex: zFor('form-window'),
            width: '85%',
            height: '74%',
            left: '9%',
            top: '7%',
            transform: 'translate(0%, 6%) scale(0.98)',
            transformStyle: 'preserve-3d',
          }}
          onMouseEnter={e => {
            if (selectedHero !== 'form' && !nflFocused) {
              // Let CSS handle the interpolation; only set the end-state
              e.currentTarget.style.transform = 'translate(0%, 6%) scale(1.03)';
            }
          }}
          onMouseLeave={e => {
            if (!nflFocused) {
              e.currentTarget.style.transform = 'translate(0%, 6%) scale(0.98)';
            }
          }}
        >
          <div className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full bg-red-500"
              />
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400"
              />
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full bg-green-500"
              />
              <p className="ml-3 text-xs text-white/70 tracking-wide">
                <span></span>
              </p>
            </div>
            {/* content intentionally cleared to preserve size */}
          </div>
        </button>

        {/* Middle layer – Grid Button */}
        <button
          type="button"
          aria-label="Open NFL grid"
          onClick={() => bringToFront('nfl')}
          className={`${baseStyles} nfl-grid aspect-video transition-[transform,opacity,left,top,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`}
          style={{
            zIndex: zFor('nfl-grid'),
            // Lock footprint to keep size consistent when active/focused
            width: '92%',
            left: nflFocused ? '10%' : '15%',
            top: nflFocused ? '15%' : '21%',
            transform: nflFocused ? 'translate(0,0) scale(0.9)' : 'translate(4%, -2%) scale(0.73)',
            transformStyle: 'preserve-3d',
            padding: 0,
          }}
          onMouseEnter={e => {
            if (selectedHero !== 'nfl' && !nflFocused) {
              e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.78)';
            }
          }}
          onMouseLeave={e => {
            if (!nflFocused) {
              e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.73)';
            }
          }}
        >
          <div
            className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_28px_rgba(0,0,0,0.45)]"
            aria-hidden="true"
          />
        </button>

        {/* Phone preview wrapper for synchronized scaling */}
        <div
          className="phone-preview-wrapper absolute"
          style={{
            left: '2%',
            top: '20%',
            width: 'calc(11.25rem * 0.99)',
            aspectRatio: '390/844',
            zIndex: zFor('phone-preview'),
            transform: 'translate(-6%, -6%) scale(.7)',
            transformStyle: 'preserve-3d',
            transition: 'transform 500ms ease-in-out',
          }}
          onMouseEnter={e => {
            if (selectedHero !== 'phone' && !nflFocused) {
              e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.75)';
            }
          }}
          onMouseLeave={e => {
            if (!nflFocused) {
              e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.7)';
            }
          }}
        >
          {/* Back layer – Phone Background */}
          <div
            className={`absolute transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-80'} !rounded-[28px] bg-gray-800 border border-white/5 brightness-[0.7]`}
            style={{
              position: 'absolute',
              width: 'calc(100% - 10px)',
              height: 'calc(100% - 10px)',
              top: '5px',
              left: '5px',
              pointerEvents: 'none',
            }}
          />

          {/* Front layer – Phone Button */}
          <img
            src="/static/iphone_frame.png"
            alt="Open phone preview"
            onClick={() => bringToFront('phone')}
            className={`transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} hover:brightness-[0.35] cursor-pointer brightness-[0.35]`}
            style={{
              position: 'absolute',
              width: '101%',
              height: '101%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>

        <style>{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
        `}</style>
      </div>
    );
  };

  // @return
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1F1A30] via-[#582864] to-[#9149c1] text-white font-sans">
      {/* Floating Control Panel */}
      {showControls && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 50 }}
          className="fixed right-6 bg-black/90 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl p-2 max-w-sm z-50"
          style={{
            top: '100px',
            width: '160px',
            maxHeight: '40vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(12px)',
          }}
          onClick={e => e.stopPropagation()}
          onMouseDown={e => e.stopPropagation()}
          onMouseUp={e => e.stopPropagation()}
          onPointerDown={e => e.stopPropagation()}
          onPointerUp={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/20">
            <h4 className="text-white text-xs font-semibold">🎛️ Controls</h4>
            <button
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                console.log('🎛️ Control panel close button clicked');
                setShowControls(false);
              }}
              onMouseDown={e => e.stopPropagation()}
              onPointerDown={e => e.stopPropagation()}
              className="w-5 h-5 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
              aria-label="Hide controls"
            >
              ×
            </button>
          </div>

          {/* Controls */}
          <div className="space-y-2 max-h-[30vh] overflow-y-auto">
            {/* Density Dissipation */}
            <div>
              <label className="text-white/70 text-xs flex justify-between mb-1">
                <span>Density</span>
                <span className="text-white/90 font-mono text-xs">
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
                  e.stopPropagation();
                  e.preventDefault();
                  console.log('🎛️ Density changed to:', e.target.value);
                  handleConfigChange('densityDissipation', parseFloat(e.target.value));
                }}
                onMouseDown={e => e.stopPropagation()}
                onMouseUp={e => e.stopPropagation()}
                onPointerDown={e => e.stopPropagation()}
                onPointerUp={e => e.stopPropagation()}
                className="w-full h-1 bg-white/20 rounded appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.densityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.densityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                }}
              />
            </div>

            {/* Velocity Dissipation */}
            <div>
              <label className="text-white/70 text-xs flex justify-between mb-1">
                <span>Velocity</span>
                <span className="text-white/90 font-mono text-xs">
                  {fluidConfig.velocityDissipation.toFixed(2)}
                </span>
              </label>
              <input
                type="range"
                min="0.9"
                max="1"
                step="0.01"
                value={fluidConfig.velocityDissipation}
                onChange={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleConfigChange('velocityDissipation', parseFloat(e.target.value));
                }}
                onMouseDown={e => e.stopPropagation()}
                onMouseUp={e => e.stopPropagation()}
                onPointerDown={e => e.stopPropagation()}
                onPointerUp={e => e.stopPropagation()}
                className="w-full h-1 bg-white/20 rounded appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.velocityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.velocityDissipation - 0.9) / 0.1) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                }}
              />
            </div>

            {/* Pressure Dissipation */}
            <div>
              <label className="text-white/70 text-xs flex justify-between mb-1">
                <span>Pressure</span>
                <span className="text-white/90 font-mono text-xs">
                  {fluidConfig.pressureDissipation.toFixed(2)}
                </span>
              </label>
              <input
                type="range"
                min="0.5"
                max="1"
                step="0.01"
                value={fluidConfig.pressureDissipation}
                onChange={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleConfigChange('pressureDissipation', parseFloat(e.target.value));
                }}
                onMouseDown={e => e.stopPropagation()}
                onMouseUp={e => e.stopPropagation()}
                onPointerDown={e => e.stopPropagation()}
                onPointerUp={e => e.stopPropagation()}
                className="w-full h-1 bg-white/20 rounded appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.pressureDissipation - 0.5) / 0.5) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.pressureDissipation - 0.5) / 0.5) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                }}
              />
            </div>

            {/* Curl */}
            <div>
              <label className="text-white/70 text-xs flex justify-between mb-1">
                <span>Curl</span>
                <span className="text-white/90 font-mono text-xs">{fluidConfig.curl}</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={fluidConfig.curl}
                onChange={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleConfigChange('curl', parseInt(e.target.value));
                }}
                onMouseDown={e => e.stopPropagation()}
                onMouseUp={e => e.stopPropagation()}
                onPointerDown={e => e.stopPropagation()}
                onPointerUp={e => e.stopPropagation()}
                className="w-full h-1 bg-white/20 rounded appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${fluidConfig.curl}%, rgba(255, 255, 255, 0.2) ${fluidConfig.curl}%, rgba(255, 255, 255, 0.2) 100%)`,
                }}
              />
            </div>

            {/* Splat Radius */}
            <div>
              <label className="text-white/70 text-xs flex justify-between mb-1">
                <span>Splat</span>
                <span className="text-white/90 font-mono text-xs">
                  {fluidConfig.splatRadius.toFixed(3)}
                </span>
              </label>
              <input
                type="range"
                min="0.001"
                max="0.02"
                step="0.001"
                value={fluidConfig.splatRadius}
                onChange={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleConfigChange('splatRadius', parseFloat(e.target.value));
                }}
                onMouseDown={e => e.stopPropagation()}
                onMouseUp={e => e.stopPropagation()}
                onPointerDown={e => e.stopPropagation()}
                onPointerUp={e => e.stopPropagation()}
                className="w-full h-1 bg-white/20 rounded appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.splatRadius - 0.001) / 0.019) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.splatRadius - 0.001) / 0.019) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                }}
              />
            </div>

            {/* Pressure Iterations */}
            <div>
              <label className="text-white/70 text-xs flex justify-between mb-1">
                <span>Iterations</span>
                <span className="text-white/90 font-mono text-xs">
                  {fluidConfig.pressureIterations}
                </span>
              </label>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={fluidConfig.pressureIterations}
                onChange={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleConfigChange('pressureIterations', parseInt(e.target.value));
                }}
                onMouseDown={e => e.stopPropagation()}
                onMouseUp={e => e.stopPropagation()}
                onPointerDown={e => e.stopPropagation()}
                onPointerUp={e => e.stopPropagation()}
                className="w-full h-1 bg-white/20 rounded appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FFC542 0%, #FFC542 ${((fluidConfig.pressureIterations - 10) / 40) * 100}%, rgba(255, 255, 255, 0.2) ${((fluidConfig.pressureIterations - 10) / 40) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                }}
              />
            </div>

            {/* Random Splats Button */}
            <div
              className="pt-2 border-t border-white/10"
              onClick={e => e.stopPropagation()}
              onMouseDown={e => e.stopPropagation()}
              onMouseUp={e => e.stopPropagation()}
              onPointerDown={e => e.stopPropagation()}
              onPointerUp={e => e.stopPropagation()}
            >
              <button
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  e.nativeEvent.stopImmediatePropagation();
                  triggerRandomSplats();
                }}
                onMouseDown={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  e.nativeEvent.stopImmediatePropagation();
                }}
                onMouseUp={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  e.nativeEvent.stopImmediatePropagation();
                }}
                onPointerDown={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  e.nativeEvent.stopImmediatePropagation();
                }}
                onPointerUp={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  e.nativeEvent.stopImmediatePropagation();
                }}
                onTouchStart={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  e.nativeEvent.stopImmediatePropagation();
                }}
                onTouchEnd={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  e.nativeEvent.stopImmediatePropagation();
                }}
                className="w-full py-2 px-3 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] hover:from-[#FF5C25]/80 hover:to-[#FFC542]/80 rounded text-white text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Trigger random splats"
                style={{ userSelect: 'none', pointerEvents: 'auto' }}
              >
                🎨 Random Splats
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <header className="bg-gradient-to-b from-[#1f1a30] to-[#261f35] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between">
        <div
          className="w-full max-w-screen-xl mx-auto px-4"
          style={{ paddingTop: '5px', paddingBottom: '0px' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Logo */}
            <div className="text-2xl font-bold flex items-center -ml-4">
              <img
                src="/static/logo_rough2.png"
                alt="Logo"
                onClick={() => navigate('/')}
                className="h-20 w-auto object-contain mr-3 cursor-pointer"
                style={{ marginLeft: '-20px' }}
              />
              <span
                className="text-orange-500"
                style={{
                  display: 'none',
                }}
              >
                overlays.
              </span>
              <span
                className="text-white"
                style={{
                  display: 'none',
                }}
              >
                uno
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64">
              {navigationItems.map(nav => (
                <a
                  key={nav.label}
                  href="#"
                  className="text-gray-200 hover:text-orange-300 transition-colors text-sm font-medium tracking-wide relative"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  <span
                    style={{
                      fontSize: '16px',
                    }}
                  >
                    {nav.label}
                  </span>
                  {nav.label === 'Live Breaks' ? (
                    <span
                      aria-hidden="true"
                      className="absolute block"
                      style={{
                        width: '8px',
                        height: '8px',
                        background: 'oklch(0.75 0.14 151.711)',
                        borderRadius: '9999px',
                        top: '-4px',
                        right: '-10px',
                      }}
                    />
                  ) : null}
                </a>
              ))}
            </nav>

            {/* Auth & Discord */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowSignUpOverlay(true)}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
              >
                <span>Sign up</span>
              </button>
              <button
                onClick={() => setShowLoginOverlay(true)}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
              >
                <span>Login</span>
              </button>
              <button className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2 cursor-pointer">
                <span
                  style={{
                    color: 'rgb(0 0 0)',
                  }}
                >
                  Launch App
                </span>
                <ExternalLink
                  className="w-4 h-4"
                  style={{
                    color: 'rgb(0 0 0)',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-14">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-700 to-orange-400"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[420px] md:min-h-[520px] lg:min-h-[560px]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeRise}
              ref={heroCopyRef as any}
              className={`space-y-8 overflow-visible transition-[margin,transform,opacity,padding] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedHero ? '-translate-y-2' : '-translate-y-2'} min-w-0`}
              style={{
                paddingBottom: selectedHero ? 12 : 0,
                marginLeft: '-5%',
              }}
            >
              <h1
                className={`text-6xl lg:text-7xl font-bold leading-tight transition-[margin,opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedHero ? 'mt-0' : 'mt-2'}`}
              >
                {/* Mobile layout (3 lines) - shown below 768px */}
                <span
                  className="block md:hidden"
                  style={{
                    fontSize: '57.75px',
                    marginLeft: '-5%',
                  }}
                >
                  <span className="block">Premium Overlays</span>
                  <span className="block">& Tools</span>
                  <span className="block bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-clip-text text-transparent">Built For Breaking</span>
                </span>

                {/* Desktop layout (2 lines) - shown at 768px and above */}
                <span
                  className="hidden md:block"
                  style={{
                    fontSize: '57.75px',
                    marginLeft: '-5%',
                  }}
                >
                  <span className="block whitespace-nowrap">Premium Overlays & Tools</span>
                  <span className="block whitespace-nowrap bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-clip-text text-transparent">Built For Breaking</span>
                </span>
              </h1>
              {/* Dynamic description below the title based on selected hero button */}
              <div aria-live="polite" aria-atomic="true" className="relative" style={{ marginLeft: '-5%' }}>
                {/* Mount placeholder to keep flow stable and enable height tweening */}
                <div
                  className={`transition-[max-height,opacity,transform,margin] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedHero ? 'max-h-[200px] opacity-100 translate-y-0 mt-3' : 'max-h-0 opacity-0 -translate-y-1 mt-0'} overflow-hidden`}
                >
                  {selectedHero ? (
                    <p className="text-xl text-gray-200 leading-relaxed max-w-lg transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 opacity-100 translate-y-0 will-change-[opacity,transform]">
                      <span>
                        {selectedHero === 'form'
                          ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.'
                          : selectedHero === 'nfl'
                            ? 'Inspired by the hobby\'s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.'
                            : 'Stream with BreakDance overlays and get instant promotion to collectors in our Live Breaks directory.'}
                      </span>
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="w-fit" style={{ marginLeft: '-5%' }}>
                <GlassmorphicButton
                  className="px-5 py-2 text-sm"
                  onClick={e => {
                    e.stopPropagation();
                    console.log('🎛️ Hero button clicked - toggling control panel');
                    setShowControls(!showControls);
                  }}
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    transform: 'none',
                    width: '214.8px',
                    height: '64.8px',
                    fontSize: '18px',
                  }}
                >
                  {selectedHero === 'form'
                    ? 'Browse Tools'
                    : selectedHero === 'phone'
                      ? 'Learn More'
                      : 'Browse Overlays'}
                </GlassmorphicButton>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeZoom}
            >
              <div className="relative w-full h-full">
                <div
                  className={`relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[520px] rounded-3xl border border-white/10 p-6 sm:p-8 transition-all duration-500 ease-in-out overflow-hidden ${
                    nflFocused ? 'bg-black' : 'bg-gradient-to-b from-[#1c172b]/80 to-[#231b34]/70'
                  }`}
                  style={{
                    perspective: 1200,
                  }}
                  onMouseMove={e => {
                    // Only trigger hover effect if NFL is focused and not hovering the button
                    if (nflFocused) {
                      const target = e.target as HTMLElement;
                      const button = e.currentTarget.querySelector('.nfl-grid');
                      if (button && !button.contains(target)) {
                        // Container hover effect active (fluid animation will respond)
                      }
                    }
                  }}
                >
                  {/* Fluid Animation Background - Only show when NFL is focused */}
                  {nflFocused && (
                    <FluidAnimationWrapper
                      className="absolute inset-0"
                      style={{
                        pointerEvents: 'auto',
                        zIndex: 1,
                      }}
                      config={{
                        ...fluidConfig,
                        colorsPool: ['#FF5C25', '#FFC542', '#9149c1', '#582864', '#ffffff'],
                      }}
                      animationRef={fluidAnimationRef}
                    />
                  )}

                  <div className="relative w-full h-full">
                    {/* Layered feature buttons container */}
                    <div ref={heroStageRef} className="relative w-full h-full">
                      {/* Back layer – Browser Button */}
                      <button
                        type="button"
                        aria-label="Open form window"
                        onClick={() => {
                          setNflFocused(false);
                          // keep original bringToFront for form
                          const clicked: 'form' = 'form';
                          const clickedId = 'form-window';
                          setSelectedHero(clicked);
                          setRecency(prev => {
                            const next = prev.filter(id => id !== clickedId);
                            next.unshift(clickedId);
                            return next;
                          });
                        }}
                        className={`${baseStyles} form-window transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-transform duration-500 ease-in-out`}
                        style={{
                          zIndex: zFor('form-window'),
                          width: '85%',
                          height: '74%',
                          left: '9%',
                          top: '7%',
                          transform: 'translate(0%, 6%) scale(0.98)',
                          transformStyle: 'preserve-3d',
                        }}
                        onMouseEnter={e => {
                          if (selectedHero !== 'form' && !nflFocused) {
                            e.currentTarget.style.transform = 'translate(0%, 6%) scale(1.03)';
                          }
                        }}
                        onMouseLeave={e => {
                          if (!nflFocused) {
                            e.currentTarget.style.transform = 'translate(0%, 6%) scale(0.98)';
                          }
                        }}
                      >
                        <div className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden">
                          <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
                            <span
                              aria-hidden="true"
                              className="inline-block h-2.5 w-2.5 rounded-full bg-red-500"
                            />
                            <span
                              aria-hidden="true"
                              className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400"
                            />
                            <span
                              aria-hidden="true"
                              className="inline-block h-2.5 w-2.5 rounded-full bg-green-500"
                            />
                            <p className="ml-3 text-xs text-white/70 tracking-wide">
                              <span></span>
                            </p>
                          </div>
                        </div>
                      </button>

                      {/* Middle layer – Grid Button */}
                      <button
                        type="button"
                        aria-label="Open NFL grid"
                        onClick={() => {
                          // Toggle focus mode for NFL
                          const newFocusState = !nflFocused;
                          setNflFocused(newFocusState);

                          if (newFocusState) {
                            const clicked: 'nfl' = 'nfl';
                            const clickedId = 'nfl-grid';
                            setSelectedHero(clicked);
                            setRecency(prev => {
                              const next = prev.filter(id => id !== clickedId);
                              next.unshift(clickedId);
                              return next;
                            });
                          } else {
                            setSelectedHero(null);
                          }
                        }}
                        className={`${baseStyles} nfl-grid aspect-video transition-[transform,opacity,left,top] duration-500 ease-in-out ${
                          nflFocused
                            ? 'hover:bg-white/5'
                            : 'hover:bg-white/10 hover:shadow-lg hover:border-white/20'
                        }`}
                        style={{
                          zIndex: nflFocused ? 100 : zFor('nfl-grid'),
                          pointerEvents: 'auto',
                          // Lock footprint to keep size consistent when active/focused
                          width: '92%',
                          // Center within the relative container when focused
                          left: nflFocused ? '50%' : '15%',
                          top: nflFocused ? '50%' : '21%',
                          transform: nflFocused
                            ? 'translate(-50%, -50%) scale(0.9)'
                            : 'translate(4%, -2%) scale(0.73)',
                          transformStyle: 'preserve-3d',
                          padding: 0,
                        }}
                        onMouseEnter={e => {
                          if (selectedHero !== 'nfl' && !nflFocused) {
                            e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.78)';
                          }
                          // Stop propagation to prevent container hover effect
                          e.stopPropagation();
                        }}
                        onMouseLeave={e => {
                          if (!nflFocused) {
                            e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.73)';
                          }
                          e.stopPropagation();
                        }}
                      >
                        <div
                          className={`w-full h-full rounded-2xl border p-4 shadow-[0_18px_28px_rgba(0,0,0,0.45)] ${
                            nflFocused
                              ? 'bg-slate-900/90 border-white/30'
                              : 'bg-slate-800/80 border-white/10'
                          }`}
                          aria-hidden="true"
                        >
                          {nflFocused && (
                            <div className="w-full h-full flex items-center justify-center">
                              <p className="text-white/60 text-sm"> </p>
                            </div>
                          )}
                        </div>
                      </button>

                      {/* Phone preview wrapper for synchronized scaling */}
                      <div
                        className="phone-preview-wrapper absolute"
                        style={{
                          left: '2%',
                          top: '20%',
                          width: 'calc(11.25rem * 0.99)',
                          height: '79%',
                          zIndex: zFor('phone-preview'),
                          transform: 'translate(-6%, -6%) scale(.7)',
                          transformStyle: 'preserve-3d',
                          transition: 'transform 500ms ease-in-out',
                        }}
                        onMouseEnter={e => {
                          if (selectedHero !== 'phone' && !nflFocused) {
                            e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.75)';
                          }
                        }}
                        onMouseLeave={e => {
                          if (!nflFocused) {
                            e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.7)';
                          }
                        }}
                      >
                        {/* Back layer – Phone Background */}
                        <div
                          className={`absolute transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-80'} !rounded-[28px] bg-gray-800 border border-white/5 brightness-[0.7]`}
                          style={{
                            position: 'absolute',
                            width: 'calc(100% - 10px)',
                            height: 'calc(100% - 10px)',
                            top: '5px',
                            left: '5px',
                            pointerEvents: 'none',
                          }}
                        />

                        {/* Front layer – Phone Button */}
                        <img
                          src="/static/iphone_frame.png"
                          alt="Open phone preview"
                          onClick={() => {
                            setNflFocused(false);
                            const clicked: 'phone' = 'phone';
                            const clickedId = 'phone-preview';
                            setSelectedHero(clicked);
                            setRecency(prev => {
                              const next = prev.filter(id => id !== clickedId);
                              next.unshift(clickedId);
                              return next;
                            });
                          }}
                          className={`transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} hover:brightness-[0.35] cursor-pointer brightness-[0.35]`}
                          style={{
                            position: 'absolute',
                            width: '101%',
                            height: '101%',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      </div>

                      {/* Bottom-center dots indicator for NFL selected */}
                      {selectedHero === 'nfl' ? (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50 pointer-events-auto">
                          <button
                            className={`inline-block h-2.5 w-2.5 rounded-full cursor-pointer transition-colors duration-200 ${activeDot === 0 ? 'bg-gray-400' : 'bg-white/10 hover:bg-white/20'}`}
                            onClick={e => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDot(0);
                            }}
                            aria-label="Select page 1"
                          />
                          <button
                            className={`inline-block h-2.5 w-2.5 rounded-full cursor-pointer transition-colors duration-200 ${activeDot === 1 ? 'bg-gray-400' : 'bg-white/10 hover:bg-white/20'}`}
                            onClick={e => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDot(1);
                            }}
                            aria-label="Select page 2"
                          />
                          <button
                            className={`inline-block h-2.5 w-2.5 rounded-full cursor-pointer transition-colors duration-200 ${activeDot === 2 ? 'bg-gray-400' : 'bg-white/10 hover:bg-white/20'}`}
                            onClick={e => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDot(2);
                            }}
                            aria-label="Select page 3"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <nav
            aria-label="Hero pagination"
            className="mt-14 translate-y-5 flex items-center justify-center"
          >
            <ul
              className="flex items-center gap-x-4"
              style={{
                display: 'none',
              }}
            >
              {dotContent.map((d, idx) => {
                const isActive = idx === activeDot; // no default selection
                return (
                  <li key={d.id}>
                    <button
                      aria-label={`Activate slide ${idx + 1}`}
                      onClick={() => handleDotClick(idx)}
                      className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Overlay Categories Navigation */}
      <section className="px-6 pt-12 pb-0 bg-gradient-to-b from-[#222032] to-[#2a2338]">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory">
            {overlayCategories.map(category => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`}
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                style={{
                  ...(category.name === 'Browse Tools'
                    ? {
                        width: '206.594px',
                      }
                    : {}),
                  fontFamily: 'Nunito, sans-serif',
                }}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.6,
                }}
                variants={fadeSlideRight}
              >
                <span
                  className="text-sm tracking-wide"
                  style={{
                    fontSize: 'var(--text-lg)',
                  }}
                >
                  {category.name}
                </span>
                {activeCategory === category.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full"
                    layoutId="activeTab"
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Overlays Carousel */}
      <section
        className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`}
        style={{ paddingTop: 'calc(var(--spacing)*5)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-0">
            <h2 className="text-4xl font-bold" style={{ marginBottom: '-14px' }}>
              <span>Team Boards</span>
            </h2>
            <div className="hidden">
              <div className="hidden">
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5">
                <span>See More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2 cursor-pointer">
              <span>See More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" style={{ paddingBottom: 'calc(var(--spacing) * 0)', height: '220px' }}>
            {sportsOverlays.slice(0, 5).map((overlay, index) => (
              <motion.div
                key={overlay.name}
                className="bg-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-default group border border-white/10"
                style={{ borderRadius: '12px' }}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={fadeRiseSoft}
              >
                {/* Effect 3: Codrops Caption Hover - Applied to all five cards */}
                <div className="relative" style={{ height: '220px' }}>
                  {/* Full card with gradient background - stays fixed */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 group-hover:from-[#4A2156]/18 group-hover:to-[#7D3DA8]/8 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center space-y-2 -translate-y-[45px] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]">
                      <span className="text-gray-400 text-xs font-medium">Preview</span>
                    </div>
                  </div>
                  {/* Caption card - starts lower, slides up on hover to reveal additional content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/60 pt-3 px-4 pb-4 space-y-3 transition-transform duration-[400ms] ease-in-out translate-y-[calc(40%+7px)] group-hover:translate-y-[calc(40%*0.2+7px)]">
                    <h3 className="font-semibold text-white group-hover:text-[oklch(.837_.128_66.29)] text-[15px] leading-tight transition-colors duration-300">
                      <span className="hover:cursor-pointer">
                        {overlay.name === 'LPF Argentina Stadium Fly In'
                          ? 'NFL'
                          : overlay.name === 'Basketball Stats Overlay'
                            ? 'MLB'
                            : overlay.name === 'Football Scoreboard Pro'
                              ? 'NBA'
                              : overlay.name === 'Tennis Match Display'
                                ? 'NHL'
                                : index === 4
                                  ? 'MLS'
                                  : overlay.name}
                      </span>
                    </h3>
                    {/* Additional info that gets revealed on hover */}
                    <div className="flex items-center justify-between -translate-y-[5px]">
                      <span className="inline-block text-[9px] text-gray-400 bg-slate-700/80 px-2 py-0.5 rounded-full font-medium">
                        <span>{overlay.aspect}</span>
                      </span>
                      {/* Button appears only on hover */}
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-[400ms] px-4 py-1.5 shadow-lg hover:shadow-xl brightness-[0.85] cursor-pointer flex items-center justify-center" style={{ borderRadius: '12px', backgroundColor: 'oklch(0.66 0.14 55.934)', fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: 0, textShadow: '0 6.6px 13.8px rgba(255, 255, 255, 0.13)', color: '#FFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.58 0.14 55.934)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.66 0.14 55.934)'}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming Overlays Carousel */}
      <section
        className={`px-6 py-5 bg-gradient-to-b from-[#2a2338] to-[#2b253e] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`}
        style={{
          paddingTop: 'calc(var(--spacing)*0)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-0">
            <h2 className="text-4xl font-bold" style={{ marginBottom: '-14px' }}>
              <span>Themes</span>
            </h2>
            <div className="hidden">
              <div className="hidden">
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5">
                <span>See More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2 cursor-pointer">
              <span>See More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" style={{ paddingBottom: 'calc(var(--spacing) * 0)', height: '220px' }}>
            {gamingOverlays.slice(0, 5).map((overlay, index) => (
              <motion.div
                key={overlay.name}
                className="bg-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-default group border border-white/10"
                style={{ borderRadius: '12px' }}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={fadeSlideLeft}
              >
                {/* Effect 3: Codrops Caption Hover - Applied to all five cards */}
                <div className="relative" style={{ height: '220px' }}>
                  {/* Full card with gradient background - stays fixed */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 group-hover:from-[#4A2156]/18 group-hover:to-[#7D3DA8]/8 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center space-y-2 -translate-y-[45px] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]">
                      <span className="text-gray-400 text-xs font-medium">Preview</span>
                    </div>
                  </div>
                  {/* Caption card - starts lower, slides up on hover to reveal additional content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/60 pt-3 px-4 pb-4 space-y-3 transition-transform duration-[400ms] ease-in-out translate-y-[calc(40%+7px)] group-hover:translate-y-[calc(40%*0.2+7px)]">
                    <h3 className="font-semibold text-white group-hover:text-[oklch(.837_.128_66.29)] text-[15px] leading-tight transition-colors duration-300">
                      <span className="hover:cursor-pointer">
                        {overlay.name === 'FPS Combat HUD'
                          ? 'Color Blast'
                          : overlay.name === 'RPG Interface Pro'
                            ? 'Downtown'
                            : overlay.name === 'Racing Dashboard'
                              ? 'Kaboom'
                              : overlay.name === 'Strategy Command'
                                ? 'Stained Glass'
                                : index === 4
                                  ? 'Base'
                                  : overlay.name}
                      </span>
                    </h3>
                    {/* Additional info that gets revealed on hover */}
                    <div className="flex items-center justify-between -translate-y-[5px]">
                      <span className="inline-block text-[9px] text-gray-400 bg-slate-700/80 px-2 py-0.5 rounded-full font-medium">
                        <span>{overlay.aspect}</span>
                      </span>
                      {/* Button appears only on hover */}
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-[400ms] px-4 py-1.5 shadow-lg hover:shadow-xl brightness-[0.85] cursor-pointer flex items-center justify-center" style={{ borderRadius: '12px', backgroundColor: 'oklch(0.66 0.14 55.934)', fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: 0, textShadow: '0 6.6px 13.8px rgba(255, 255, 255, 0.13)', color: '#FFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.58 0.14 55.934)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.66 0.14 55.934)'}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Overlays Carousel */}
      <section
        className={`px-6 py-5 bg-gradient-to-b from-[#2b233e] to-[#302742] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`}
        style={{
          paddingBottom: 'calc(var(--spacing)*14)',
          paddingTop: 'calc(var(--spacing)*0)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-0">
            <h2 className="text-4xl font-bold" style={{ marginBottom: '-14px' }}>
              <span>Extras</span>
            </h2>
            <div className="hidden">
              <div className="hidden">
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5">
                <span>See More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2 cursor-pointer">
              <span>See More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" style={{ paddingBottom: 'calc(var(--spacing) * 0)', height: '220px' }}>
            {podcastOverlays.slice(0, 5).map((overlay, index) => (
              <motion.div
                key={overlay.name}
                className="bg-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-default group border border-white/10"
                style={{ borderRadius: '12px' }}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={fadeZoom}
              >
                {/* Effect 3: Codrops Caption Hover - Applied to all five cards */}
                <div className="relative" style={{ height: '220px' }}>
                  {/* Full card with gradient background - stays fixed */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 group-hover:from-[#4A2156]/18 group-hover:to-[#7D3DA8]/8 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center space-y-2 -translate-y-[45px] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]">
                      <span className="text-gray-400 text-xs font-medium">Preview</span>
                    </div>
                  </div>
                  {/* Caption card - starts lower, slides up on hover to reveal additional content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/60 pt-3 px-4 pb-4 space-y-3 transition-transform duration-[400ms] ease-in-out translate-y-[calc(40%+7px)] group-hover:translate-y-[calc(40%*0.2+7px)]">
                    <h3 className="font-semibold text-white group-hover:text-[oklch(.837_.128_66.29)] text-[15px] leading-tight transition-colors duration-300">
                      <span className="hover:cursor-pointer">
                        {overlay.name === 'Talk Show Professional'
                          ? 'Music Visualizer'
                          : overlay.name === 'Interview Setup Clean'
                            ? 'Counter'
                            : overlay.name === 'News Broadcast Modern'
                              ? 'Text Scroller'
                              : overlay.name === 'Panel Discussion Layout'
                                ? 'Image Frame'
                                : index === 4
                                  ? 'Timer'
                                  : overlay.name}
                      </span>
                    </h3>
                    {/* Additional info that gets revealed on hover */}
                    <div className="flex items-center justify-between -translate-y-[5px]">
                      <span className="inline-block text-[9px] text-gray-400 bg-slate-700/80 px-2 py-0.5 rounded-full font-medium">
                        <span>{overlay.aspect}</span>
                      </span>
                      {/* Button appears only on hover */}
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-[400ms] px-4 py-1.5 shadow-lg hover:shadow-xl brightness-[0.85] cursor-pointer flex items-center justify-center" style={{ borderRadius: '12px', backgroundColor: 'oklch(0.66 0.14 55.934)', fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: 0, textShadow: '0 6.6px 13.8px rgba(255, 255, 255, 0.13)', color: '#FFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.58 0.14 55.934)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.66 0.14 55.934)'}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <section
        className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`}
        style={{
          paddingBottom: 'calc(var(--spacing)*14)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-0">
            <h2 className="text-4xl font-bold" style={{ marginBottom: '-14px' }}>
              <span>Tools</span>
            </h2>
            <div className="flex items-center">
              <div className="hidden">
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2 cursor-pointer">
              <span>See More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" style={{ paddingBottom: 'calc(var(--spacing) * 0)', height: '220px' }}>
            {sportsOverlays.slice(0, 5).map((overlay, index) => (
              <motion.div
                key={`tools-${overlay.name}`}
                className="bg-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-default group border border-white/10"
                style={{ borderRadius: '12px' }}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={fadeSlideRight}
              >
                {/* Effect 3: Codrops Caption Hover - Applied to all five cards */}
                <div className="relative" style={{ height: '220px' }}>
                  {/* Full card with gradient background - stays fixed */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 group-hover:from-[#4A2156]/18 group-hover:to-[#7D3DA8]/8 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center space-y-2 -translate-y-[45px] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]">
                      <span className="text-gray-400 text-xs font-medium">Preview</span>
                    </div>
                  </div>
                  {/* Caption card - starts lower, slides up on hover to reveal additional content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/60 pt-3 px-4 pb-4 space-y-3 transition-transform duration-[400ms] ease-in-out translate-y-[calc(40%+7px)] group-hover:translate-y-[calc(40%*0.2+7px)]">
                    <h3 className="font-semibold text-white group-hover:text-[oklch(.837_.128_66.29)] text-[15px] leading-tight transition-colors duration-300">
                      <span className="hover:cursor-pointer">
                        {overlay.name === 'LPF Argentina Stadium Fly In'
                          ? 'Inventory Manager'
                          : overlay.name === 'Basketball Stats Overlay'
                            ? 'Comps Finder'
                            : overlay.name === 'Football Scoreboard Pro'
                              ? 'Pop Lookup'
                              : overlay.name === 'Tennis Match Display'
                                ? 'ROI Tracker'
                                : index === 4
                                  ? 'Price Guide'
                                  : overlay.name}
                      </span>
                    </h3>
                    {/* Additional info that gets revealed on hover */}
                    <div className="flex items-center justify-between -translate-y-[5px]">
                      <span className="inline-block text-[9px] text-gray-400 bg-slate-700/80 px-2 py-0.5 rounded-full font-medium">
                        <span>{overlay.aspect}</span>
                      </span>
                      {/* Button appears only on hover */}
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-[400ms] px-4 py-1.5 shadow-lg hover:shadow-xl brightness-[0.85] cursor-pointer flex items-center justify-center" style={{ borderRadius: '12px', backgroundColor: 'oklch(0.66 0.14 55.934)', fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: 0, textShadow: '0 6.6px 13.8px rgba(255, 255, 255, 0.13)', color: '#FFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.58 0.14 55.934)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.66 0.14 55.934)'}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Feature Panel */}
      <section
        className="px-6 py-24 bg-gradient-to-b from-[#302742] via-[#38305a] to-[#43305b]"
        style={{
          paddingBlock: 'calc(var(--spacing)*14)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeRise}
            >
              <h2 className="text-5xl font-bold leading-tight">
                <span>Go live. Get featured. </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]">
                  Stand out.
                </span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                <span>
                  Every BreakDance overlay automatically features your stream in our Live Breaks
                  directory, driving qualified traffic to your channel
                </span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              <motion.button
                className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none cursor-pointer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                style={{
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                <span>Learn More</span>
              </motion.button>
            </motion.div>
            <motion.div
              className="bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 rounded-3xl p-12 flex items-center justify-center border border-white/10"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeRise}
            >
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center">
                  <Play className="w-12 h-12 text-orange-400" />
                </div>
                <p className="text-gray-300 text-lg font-medium">
                  <span>Feature Video Preview</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span>From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto">
            <span>
              Get streaming like a pro in under 5 minutes with our streamlined process - for
              breakers at every level
            </span>
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center space-y-6"
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                variants={fadeRise}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-2xl font-semibold">
                  <span>{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto">
                  <span>{step.description}</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Instagram Subscribe Carousel Card moved to Follow Us section below */}

          <button
            className="mt-16 mb-4 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-bold text-xl lg:text-2xl text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg cursor-pointer"
            style={{
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            <span>Get Started</span>
          </button>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span>Level Up Your Production</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16">
            <span>
              Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.
            </span>
          </p>

          <div className="flex items-center justify-center mb-16">
            <div className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 relative inline-flex">
              {/* Slider track */}
              <div className="absolute inset-2 rounded-xl bg-white/5" aria-hidden="true" />
              {/* Sliding handle */}
              <span
                className={`absolute top-2 h-[calc(100%-1rem)] rounded-xl bg-orange-500 shadow-lg will-change-transform transition-transform duration-300 ease-out`}
                style={{
                  width: 'calc(50% - 0.25rem)',
                  transform: pricingToggle === 'monthly' ? 'translateX(0)' : 'translateX(100%)',
                }}
                aria-hidden="true"
              />
              <button
                onClick={() => setPricingToggle('monthly')}
                className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer ${pricingToggle === 'monthly' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                aria-pressed={pricingToggle === 'monthly'}
                aria-label="Select monthly pricing"
              >
                <span>Monthly</span>
              </button>
              <button
                onClick={() => setPricingToggle('yearly')}
                className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer ${pricingToggle === 'yearly' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                aria-pressed={pricingToggle === 'yearly'}
                aria-label="Select yearly pricing"
              >
                <span>Yearly</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <motion.div
              className="bg-white/10 rounded-3xl p-10 border border-white/10 h-full"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={fadeSlideRight}
            >
              <div className="flex h-full flex-col">
                <h3 className="text-3xl font-bold mb-2">
                  <span>BreakDance Starter</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base">
                  <span>Get started and explore BreakDance with no cost or no commitment</span>
                </p>
                <div className="text-5xl font-bold mb-8">
                  <span>$0.00</span>
                </div>
                <ul className="space-y-4 mb-10 text-left">
                  <li
                    className="flex items-center"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">Full access to the overlay library</span>
                  </li>
                  <li
                    className="flex items-center"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">Full access to the ‘break editor’ ui</span>
                  </li>
                  <li
                    className="flex items-center"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">Save unlimited overlays to your collection</span>
                  </li>
                  <li
                    className="flex items-center"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">Limited access to break tools dashboard</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button
                    onClick={() => setShowSignUpOverlay(true)}
                    className="mx-auto w-full py-4 px-6 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl font-semibold text-lg text-center hover:bg-slate-800 transition-colors duration-150 cursor-pointer">
                    <span>Start Free</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Plus Plan */}
            <motion.div
              className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={fadeSlideLeft}
            >
              <div className="flex h-full flex-col">
                {pricingToggle === 'yearly' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    <span>Save 21%</span>
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-2">
                  <span>BreakDance Pro</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base">
                  <span>
                    Best for regular users who want to experience the full functionality of the
                    platform
                  </span>
                </p>
                <div className="text-5xl font-bold mb-8 h-12 leading-[48px]">
                  <span>{pricingToggle === 'monthly' ? '$3.99' : '$37.99'}</span>
                  <span className="text-lg text-gray-400 font-normal">
                    /{pricingToggle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <ul className="space-y-4 mb-10 text-left">
                  <li
                    className="flex items-center"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">Everything in Free</span>
                  </li>
                  <li
                    className="flex items-center"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">Full access to break tools dashboard</span>
                  </li>
                  <li
                    className="flex items-center"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">Get featured every time you go live</span>
                  </li>
                  <li
                    className="flex items-center"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">Get notified first for LE collection drops</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <button
                    onClick={() => setShowSignUpOverlay(true)}
                    className="mx-auto w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors text-center cursor-pointer">
                    <span>Get Pro</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pt-24 pb-0 bg-gradient-to-b from-[#2b253e] to-[#302742]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold mb-[calc(var(--spacing)*9)]">
            <span>Why Production Quality Matters</span>
          </h2>
          {/* Create a self-contained stage with fixed min-height so hover growth doesn't nudge following sections */}
          <div
            className="relative"
            style={{
              minHeight: '25rem',
            }}
          >
            <div
              className="grid gap-8 stats-grid md:grid-cols-3"
              style={{
                fontFamily: 'Nunito, sans-serif',
              }}
            >
              {stats.map(stat => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white/5 rounded-3xl p-8 border border-white/10 overflow-visible stats-card"
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  variants={makeStagger(0.1)}
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <StatNumber number={stat.number} />
                  <div className="text-2xl font-semibold mb-2">
                    <span>{stat.label}</span>
                  </div>
                  <div className="text-gray-400 text-lg">
                    <span></span>
                  </div>
                  {/* Expansion appears visually below the base content but uses a transform so siblings and grid height feel stable */}
                  <div className="card-flyout" aria-hidden="true">
                    <p className="text-md text-white/90 bg-white/10 rounded-xl px-4 py-3">
                      <span>
                        {stat.number === '19.8%'
                          ? 'Increase engagement. Premium production quality delivers 19.8% longer watch times and higher chat activity than basic streams'
                          : stat.number === '3.2x'
                            ? 'Turn viewers into fans. Quality production converts casual viewers into loyal fans 3.2x more effectively than basic setups'
                            : 'Boost retention. Cutting technical issues lowers stream drop-off rates by up to 30%, helping your audience stay longer'}
                      </span>
                    </p>
                  </div>
                  <style>{`
                     @media (hover:hover) {
                       .stats-card:hover {
                         transform: translateZ(0);
                         transition: transform 280ms ease, box-shadow 280ms ease;
                         will-change: transform;
                         box-shadow: 0 16px 44px rgba(0,0,0,0.35);
                       }
                     }
                     .stats-card { position: relative; isolation: isolate; }
                     /* Flyout expands using transform so neighboring content doesn't visibly slide */
                     .stats-card .card-flyout {
                       display: block;
                       overflow: hidden;
                       margin-top: 0.5rem;
                       max-height: 0;
                       transform-origin: top;
                       transform: translateY(0);
                       transition: max-height 320ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 240ms ease, margin-top 320ms ease, transform 320ms ease;
                       opacity: 0;
                     }
                     .stats-card:hover .card-flyout {
                       max-height: 10rem;
                       margin-top: 0.75rem;
                       transform: translateY(0);
                       opacity: 1;
                     }
                   `}</style>
                </motion.div>
              ))}
            </div>
          </div>
          <style>{`
             /* Ensure columns are flexible and independent; use fr units */
             .stats-grid {
               display: grid;
               grid-template-columns: repeat(1, minmax(0, 1fr));
               align-items: start;
               grid-auto-rows: 1fr;
               gap: 2rem;
             }
             @media (min-width: 768px) {
               .stats-grid { grid-template-columns: repeat(3, 1fr); }
             }
             .stats-card { backface-visibility: hidden; }
           `}</style>
        </div>
      </section>

      {/* Community CTAs */}
      <section className="px-6 pt-0 pb-24 bg-gradient-to-b from-[#302742] to-[#1F1A30]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold mb-[calc(var(--spacing)*9)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]">
              Get in Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {communityCards.map(card => (
              <motion.div
                key={card.title}
                className="bg-white/10 rounded-3xl p-10 text-center border border-white/10"
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={fadeRiseSoft}
              >
                {/* Icon per card by title for precise replacements without altering other content */}
                {card.title === 'Join our Newsletter' ? (
                  <svg
                    role="img"
                    aria-label="Newsletter"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 mx-auto mb-6 text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 4.5 6.75v.3l6.86 4.117a2 2 0 0 0 2.28 0L20 7.05v-.3A1.25 1.25 0 0 0 18.25 5.5H5.75A1.25 1.25 0 0 0 4.5 6.75Zm13.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z"
                    />
                  </svg>
                ) : card.title === 'Follow us on Twitter' ? (
                  <svg
                    role="img"
                    aria-label="Twitter"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 mx-auto mb-6 text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M22 5.92c-.73.32-1.5.54-2.3.64a4.02 4.02 0 0 0 1.76-2.22 8.02 8.02 0 0 1-2.54.98 3.99 3.99 0 0 0-6.8 3.64 11.31 11.31 0 0 1-8.22-4.17 4 4 0 0 0 1.24 5.33c-.62-.08-.63.12-.97.12-.23 0-.47-.02-.69-.07a4 4 0 0 0 3.73 2.77A8.02 8.02 0 0 1 2 18.41 11.32 11.32 0 0 0 8.13 20c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.06 8.06 0 0 0 22 5.92z"
                    />
                  </svg>
                ) : card.title === 'Customize It' ? (
                  <svg
                    role="img"
                    aria-label="Customize"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 mx-auto mb-6 text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M3 17.25V21h3.75l11-11.02-3.75-3.75L3 17.25Zm17.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z"
                    />
                  </svg>
                ) : null}
                <h3 className="text-2xl font-bold mb-4">
                  <span>
                    {card.title === 'Join our Newsletter'
                      ? 'Newsletter Updates'
                      : card.title === 'Follow us on Twitter'
                        ? "We're on Twitter"
                        : card.title === 'Customize It'
                          ? 'Custom Projects'
                          : card.title}
                  </span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  <span>{card.subtitle}</span>
                </p>
                <button
                  onClick={() => {
                    if (card.buttonText === 'Reach Out') {
                      navigate('/contact');
                    }
                  }}
                  className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg cursor-pointer`}
                >
                  <span>{card.buttonText}</span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Instagram Subscribe Carousel Card – bottom center within Follow Us. Height equals a card */}
          <section
            aria-labelledby="insta-subscribe-title"
            className="mt-12 md:mt-16 mx-auto w-full"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-8 py-5 md:py-6">
              <header className="mb-4">
                <h3 id="insta-subscribe-title" className="text-2xl font-bold mb-4 text-center">
                  <span>Latest on Instagram</span>
                </h3>
              </header>
              <div className="relative">
                <nav
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1"
                  aria-label="Previous slide"
                >
                  <button
                    type="button"
                    className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white"
                    aria-label="Previous"
                    onClick={e => {
                      const root = e.currentTarget.closest('section') as HTMLElement | null;
                      const list = root
                        ? (root.querySelector('ul') as HTMLUListElement | null)
                        : null;
                      if (list) {
                        const tile = list.querySelector('li');
                        const tileWidth = tile ? (tile as HTMLElement).offsetWidth + 16 : 280; // include gap
                        list.scrollBy({
                          left: -tileWidth * 1.5,
                          behavior: 'smooth',
                        });
                      }
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </nav>
                <nav
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1"
                  aria-label="Next slide"
                >
                  <button
                    type="button"
                    className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white"
                    aria-label="Next"
                    onClick={e => {
                      const root = e.currentTarget.closest('section') as HTMLElement | null;
                      const list = root
                        ? (root.querySelector('ul') as HTMLUListElement | null)
                        : null;
                      if (list) {
                        const tile = list.querySelector('li');
                        const tileWidth = tile ? (tile as HTMLElement).offsetWidth + 16 : 280; // include gap
                        list.scrollBy({
                          left: tileWidth * 1.5,
                          behavior: 'smooth',
                        });
                      }
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </nav>
                <ul className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] md:auto-cols-[minmax(240px,1fr)] gap-4 overflow-hidden">
                  {['one', 'two', 'three', 'four', 'five', 'six'].map((_k, idx) => {
                    const key = `insta-${idx + 1}`;
                    return (
                      <li key={key} className="min-w-0">
                        <article className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-500 p-0.5">
                          <div className="rounded-[14px] bg-gradient-to-b from-white/10 to-white/5 p-1.5">
                            {/* Square tile: enforce 1:1 aspect and single row only */}
                            <figure className="w-full aspect-square overflow-hidden rounded-lg">
                              <picture>
                                <img />
                              </picture>
                              <figcaption className="sr-only">
                                <span>Instagram highlight tile</span>
                              </figcaption>
                            </figure>
                          </div>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Section Divider */}
      {/* Removed per request: divider above footer */}
      {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div> */}

      {/* Footer */}
      <footer className="px-6 py-16 bg-gradient-to-b from-[#1F1A30] to-[#582864] text-white font-normal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#" aria-label="overlays.uno home" className="mb-10 mt-4">
              <h2 className="text-[44px] leading-none font-bold tracking-tight">
                <span className="sr-only">BreakDance</span>
                <span aria-hidden="true" className="align-middle">
                  Break
                </span>
                <span
                  aria-hidden="true"
                  className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]"
                >
                  Dance
                </span>
              </h2>
            </a>

            <nav aria-label="Footer links" className="mb-4">
              <ul className="flex items-center gap-6">
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    <span>Terms</span>
                  </a>
                </li>
              </ul>
            </nav>

            <p className="text-xs text-white/60">
              <span>© 2025 All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Sign Up Overlay */}
      {showSignUpOverlay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowSignUpOverlay(false)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSignUpOverlay(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <SignUpCard onSwitchToSignIn={() => {
              setShowSignUpOverlay(false);
              setShowLoginOverlay(true);
            }} />
          </div>
        </div>
      )}

      {/* Login Overlay */}
      {showLoginOverlay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowLoginOverlay(false)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLoginOverlay(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <SignInCard onSwitchToSignUp={() => {
              setShowLoginOverlay(false);
              setShowSignUpOverlay(true);
            }} />
          </div>
        </div>
      )}
    </div>
  );
};

// Animated stat number sub-component (file-local)
function StatNumber({ number }: { number: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  // Use IntersectionObserver to know when the number enters view
  const inView = useInView(ref, {
    once: true,
    amount: 0.6,
  });
  // Global sequential trigger: when the first stat starts, trigger others in order
  // We coordinate via window object to avoid prop drilling inside single-file component.
  const [canStart, setCanStart] = React.useState(false);
  const [index, setIndex] = React.useState<number>(-1);
  // Determine my position by reading the DOM order in the stats grid once mounted
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const card = el.closest('.stats-card');
    if (!card) return;
    const grid = card.parentElement; // the grid cell parent
    if (!grid) return;
    const cards = Array.from(grid.children);
    const idx = cards.indexOf(card);
    setIndex(idx);
  }, []);
  React.useEffect(() => {
    if (!inView || index < 0) return;
    const key = '__stats_seq__';
    const win = window as unknown as {
      [k: string]: any;
    };
    if (!win[key]) {
      // Initialize controller when first stat comes into view
      win[key] = {
        current: 0,
        listeners: new Map<number, () => void>(),
      };
      // Microtask to notify index 0 immediately
      queueMicrotask(() => {
        const l = win[key].listeners.get(0);
        l && l();
      });
    }
    const controller = win[key];
    const notify = () => setCanStart(true);
    controller.listeners.set(index, notify);
    return () => {
      controller.listeners.delete(index);
    };
  }, [inView, index]);
  // Parse number like '19.8%' or '3.2x' or '47%'
  const match = number.match(/([0-9]+(?:\.[0-9]+)?)(.*)/);
  const numeric = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const intTarget = Math.round(numeric * (suffix === 'x' ? 100 : 1));
  const value = useCountUp(intTarget, inView && canStart, 1000);
  // When this count finishes, notify the next card
  const hasFinished = inView && canStart && value >= intTarget;
  React.useEffect(() => {
    if (!hasFinished || index < 0) return;
    const key = '__stats_seq__';
    const win = window as unknown as {
      [k: string]: any;
    };
    const controller = win[key];
    if (!controller) return;
    const next = index + 1;
    const listener = controller.listeners.get(next);
    if (listener) listener();
  }, [hasFinished, index, intTarget]);
  const display = suffix === 'x' ? (value / 100).toFixed(1) + 'x' : `${value}${suffix}`;
  return (
    <div ref={ref} className="text-6xl font-bold text-orange-400 mb-4">
      <span>{display}</span>
    </div>
  );
}
