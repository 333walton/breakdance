import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "f26bf7b2-6d59-4201-8a10-d31d7c97f4f4"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "bfb77ca9-c22a-449b-9e64-0a4a74e33ce7"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "25472ef0-949a-4c8c-a357-2cd2a06f4d75"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "a320dd26-1b76-4720-b13e-92e005e83510"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "4c74cec8-95fd-4449-a768-b8a6d9c82208"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "3a4606e7-b512-4658-8390-a491a2366fa9"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "aaad0488-433f-4a68-b566-c40ddad20a1a"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "0d263f00-0d95-42e7-bc70-f7d6cd02ff11"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "3eb2cd0d-f920-49e6-8e8f-b5e54a2f5c65"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "309c6d70-80ce-45f6-a50d-32517f4a10fd"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "6bc9747b-3d5f-4e30-acaf-83f85a7c605d"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "a4a5edc4-0482-488b-86ab-85a1ecc8c192"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "ff9a8195-5b87-4504-9258-f50862de8906"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "95513ad3-5df0-43d0-b1d6-c3e6b0eac49d"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "c4aa0f7b-3cad-4bb0-80cb-97a9f05c9ed7"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "9bbbb67e-ce38-47e8-80dc-3aa29ebcbb55"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "8331b57b-5f60-46ad-be52-45dceb4d5ae0"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "046a9ec1-aa0d-498d-b6dc-8f82ea201981"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "0cdd470e-2535-48c6-af14-a4b94c5e2862"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "34f7dac9-a7ec-418a-94fc-2d90caa38336"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Choose Your Style',
  description: 'Pick from your collection or browse our overlay library for a theme—vintage Topps to modern Panini to match your break’s vibe',
  mpid: "78e9c484-4f29-45fa-84a5-5e3ec3835d63"
}, {
  icon: Palette,
  title: 'One-Click Integration',
  description: 'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  mpid: "bf586576-f567-41fc-9159-1975249b3de8"
}, {
  icon: Copy,
  title: 'Go live with control',
  description: 'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  mpid: "44cfcec1-41dc-4c4f-90cf-f72ffc44a092"
}] as any[];
const stats = [{
  number: '19.8%',
  label: 'Higher Viewer Engagement',
  sublabel: '',
  mpid: "3327fbc0-b319-4ead-b157-259ba5e71af1"
}, {
  number: '3.2x',
  label: 'Higher Conversion Rates',
  sublabel: '',
  mpid: "0e7349d4-920f-4d2d-bddf-92432414ede3"
}, {
  number: '47%',
  label: 'Fewer Technical Issues',
  sublabel: '',
  mpid: "595c45d8-8895-4b29-a5d1-25a7fcb0c911"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join our Newsletter',
  subtitle: 'Stay updated with hobby news and product drops',
  buttonText: 'Join Newsletter',
  color: 'bg-[oklch(78.4%_0.142_246.8)]',
  mpid: "0ac6ac68-7243-4abb-99fb-c49a328ee4eb"
}, {
  icon: Youtube,
  title: 'Follow us on Twitter',
  subtitle: 'Follow us for hobby news and product updates',
  buttonText: 'Follow',
  color: 'bg-[oklch(68%_0.16_240)]',
  mpid: "87adeb93-6f50-4115-b183-2958de613ac9"
}, {
  icon: Heart,
  title: 'Customize It',
  subtitle: 'Have something unique in mind? We can help',
  buttonText: 'Reach Out',
  color: 'bg-[oklch(0.510_0.262_276.9)]',
  mpid: "f3421a83-bd0b-464c-bba5-b7bb26c923a7"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "9d8f9979-fa8c-4f7a-947b-5138aff2a834"
}, {
  label: 'Tools',
  mpid: "3094babe-3188-4db2-826a-ef565e719e2c"
}, {
  label: 'How It Works',
  mpid: "5194f02c-ac8b-4771-bc19-dfadd47a9643"
}, {
  label: 'Demo',
  mpid: "3fdc8b05-f8f1-49f3-a2a4-c1d301a61191"
}, {
  label: 'Live Breaks',
  mpid: "1bf6a1a3-55e8-4b33-a25d-b35d1e0b4685"
}, {
  label: 'Shop',
  mpid: "2686d77e-b00e-49f0-9e0b-d6f2b5884c07"
}, {
  label: 'About',
  mpid: "655b5239-7b56-448c-b6ca-cd98cef642f4"
}] as any[];

// Reusable variants
const fadeRise = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0.75, 0.3, 1]
    }
  }
};
const fadeRiseMobile = {
  hidden: {
    opacity: 0,
    y: 12
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0.75, 0.3, 1]
    }
  }
};
// New: subtle alternative entrance variants for variety
const fadeSlideRight = {
  hidden: {
    opacity: 0,
    x: -20
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.4, 0.75, 0.3, 1]
    }
  }
};
const fadeSlideLeft = {
  hidden: {
    opacity: 0,
    x: 20
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.4, 0.75, 0.3, 1]
    }
  }
};
const fadeRiseSoft = {
  hidden: {
    opacity: 0,
    y: 16
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.4, 0.75, 0.3, 1]
    }
  }
};
const fadeZoom = {
  hidden: {
    opacity: 0,
    scale: 0.96
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0.75, 0.3, 1]
    }
  }
};
// Stagger helpers
const makeStagger = (delay = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.05
    }
  }
});

// Helper hook to animate once on scroll
function useRevealOnce<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -10% 0px'
  });
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);
  return {
    ref,
    controls
  } as const;
}

// Count-up utility using requestAnimationFrame
function useCountUp(target: number, inView: boolean, duration = 1200) {
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
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState('BROWSE OVERLAYS');
  // Ensure the "Browse Overlays" tab is selected by default regardless of casing
  React.useEffect(() => {
    setActiveCategory('Browse Overlays');
  }, []);
  const [activeDot, setActiveDot] = useState<number>(-1);
  // Track which hero button is selected; none by default
  const [selectedHero, setSelectedHero] = useState<'form' | 'nfl' | 'phone' | null>(null);
  // Maintain recency order: most-recent first, least-recent last
  const [recency, setRecency] = useState<string[]>(['phone-preview', 'nfl-grid', 'form-window']);
  // New: focus mode for NFL centering
  const [nflFocused, setNflFocused] = useState<boolean>(false);
  const heroStageRef = React.useRef<HTMLDivElement | null>(null);

  // Add missing variables
  const baseStyles = "absolute cursor-pointer border border-white/10 rounded-2xl bg-white/5";
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
  const dotContent = [{
    id: 'dot-1',
    title: 'Premium Overlays & Tools — Made for Breaking',
    hook: 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.',
    preview: {
      label: 'Stream Deck Interface Preview'
    },
    mpid: "d9f0e2fd-bbb2-4994-af71-f2d4dddc4381"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "fa468403-0437-47c0-81f8-ccda5beb4bb2"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "d52ea891-537f-4540-bda9-9fe9b3fc4583"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // Local component: LayeredHeroButtons (kept inside the file per single-top-level rule)
  const LayeredHeroButtons = () => {
    const cards = [{
      id: 'form-window',
      label: 'Form Window',
      z: 1,
      mpid: "3d2ef986-ba03-48e9-b7c0-c47862dd3d5b"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "2910adfa-3bb1-4985-ae2c-ffc56f7d062d"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "9c614862-de97-40ff-a6cf-91c68a7f3de3"
    }] as any[];
    const [frontId, setFrontId] = React.useState<string>('phone-preview');
    function bringToFront(clicked: 'form' | 'nfl' | 'phone') {
      const clickedId = clicked === 'form' ? 'form-window' : clicked === 'nfl' ? 'nfl-grid' : 'phone-preview';
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
      const translate = id === 'phone-preview' ? 'translate(-6%, -6%)' // front-left
      : id === 'nfl-grid' ? 'translate(4%, -2%)' // center slight up
      : 'translate(0%, 6%)'; // back/base slight down
      return `${translate} scale(${scale})`;
    }
    function hoverStyles(isFront: boolean) {
      return {
        boxShadow: isFront ? '0 20px 60px rgba(255, 197, 67, 0.25)' : '0 14px 40px rgba(0,0,0,0.35)'
      } as React.CSSProperties;
    }
    return <SortableContainer dndKitId="6130af2f-fb01-4fbb-9a92-eabaf4d6f06d" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="419f289f-ba5d-4e75-a768-d4f030c0f6d8" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => bringToFront('form')} className={`${baseStyles} form-window transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-[transform,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
        zIndex: zFor('form-window'),
        width: '85%',
        height: '74%',
        left: '9%',
        top: '7%',
        transform: 'translate(0%, 6%) scale(0.98)',
        transformStyle: 'preserve-3d'
      }} onMouseEnter={e => {
        if (selectedHero !== 'form' && !nflFocused) {
          // Let CSS handle the interpolation; only set the end-state
          e.currentTarget.style.transform = 'translate(0%, 6%) scale(1.03)';
        }
      }} onMouseLeave={e => {
        if (!nflFocused) {
          e.currentTarget.style.transform = 'translate(0%, 6%) scale(0.98)';
        }
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ba94bf05-4e97-4e0f-8142-c03b87e91ea0" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="4eeb3d88-5d37-4538-aad5-41ea33f58361" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
              </p>
            </SortableContainer>
            {/* content intentionally cleared to preserve size */}
          </SortableContainer>
        </SortableContainer>

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="47fd3e9e-8539-4ba8-9dad-e9f0936d0ec7" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => bringToFront('nfl')} className={`${baseStyles} nfl-grid transition-[transform,opacity,left,top,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
        zIndex: zFor('nfl-grid'),
        // Lock footprint to keep size consistent when active/focused
        width: '92%',
        height: '58%',
        left: nflFocused ? '10%' : '17%',
        top: nflFocused ? '15%' : '20%',
        transform: nflFocused ? 'translate(0,0) scale(0.9)' : 'translate(4%, -2%) scale(0.7)',
        transformStyle: 'preserve-3d',
        padding: 0
      }} onMouseEnter={e => {
        if (selectedHero !== 'nfl' && !nflFocused) {
          e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.75)';
        }
      }} onMouseLeave={e => {
        if (!nflFocused) {
          e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.7)';
        }
      }} data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <div className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_28px_rgba(0,0,0,0.45)]" aria-hidden="true" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="641ad128-f9cb-4647-9215-418754006407" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => bringToFront('phone')} className={`${baseStyles} phone-preview transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-[transform,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
        zIndex: zFor('phone-preview'),
        left: '3%',
        top: '17%',
        transform: 'translate(-6%, -6%) scale(.7)',
        transformStyle: 'preserve-3d',
        width: '36%',
        height: '72%'
      }} onMouseEnter={e => {
        if (selectedHero !== 'phone' && !nflFocused) {
          // Let CSS handle the interpolation; only set the end-state
          e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.75)';
        }
      }} onMouseLeave={e => {
        if (!nflFocused) {
          e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.7)';
        }
      }} data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="13cc9982-3d0d-4ed5-b9fd-4abfa4ac238c" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* iPhone top dynamic island / notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 border border-white/10" aria-hidden="true" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            {/* side buttons (decorative) */}
            <span className="absolute left-0 top-[18%] -translate-x-1/2 h-10 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <span className="absolute right-0 top-[26%] translate-x-1/2 h-6 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <span className="absolute right-0 top-[36%] translate-x-1/2 h-14 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            {/* screen */}
            <div className="w-full h-full rounded-[22px] bg-black" data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>

        <style data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="20d34b4a-d8b6-4cf2-8362-269b1f890871" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-[#1F1A30] via-[#582864] to-[#9149c1] text-white font-sans" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="9bb8ef71-3130-44e8-bfab-f46f662da110" containerType="regular" prevTag="header" className="bg-gradient-to-b from-[#26213a] to-[#302742] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="06142d3b-c16b-4b7a-8157-c9ef988b1061" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2f21a6bf-7c8a-4964-9758-2209afd66b7c" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="d598e24c-0e5b-4d21-8552-617083b1e687" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="7f2e6979-8317-4b3d-956c-97f56eca4349" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-200 hover:text-orange-300 transition-colors text-sm font-medium tracking-wide relative" style={{
              fontFamily: 'Nunito, sans-serif'
            }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.75 0.14 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-10px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="b4f53347-286c-430d-943f-83d6c8078dce" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="639dae8d-f0be-46d3-bfeb-a451bd0359f5" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="36b098e2-a07e-40da-bc62-d3bfe3c142d9" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="0e10d95d-cfbe-4925-a622-0377d3c93101" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="ff2ec4ed-d9df-48d5-8d63-7d59c05a4920" containerType="regular" prevTag="section" className="relative px-6 py-14" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-700 to-orange-400" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <div className="absolute inset-0 bg-black/70" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <SortableContainer dndKitId="2bef30c1-f738-4b78-88a3-14ecec4025b3" containerType="regular" prevTag="div" className="relative z-10 max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="7f91ad04-3c5b-4659-a6b5-0b9ae872281b" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center min-h-[420px] md:min-h-[520px] lg:min-h-[560px]" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="8c929ba0-44e1-43c0-b1dd-08ba4a361ed9" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} ref={heroCopyRef as any} className={`space-y-8 overflow-hidden transition-[margin,transform,opacity,padding] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedHero ? '-translate-y-2' : 'translate-y-0'}`} style={{
            paddingBottom: selectedHero ? 12 : 0
          }} data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className={`text-6xl lg:text-7xl font-bold leading-tight transition-[margin,opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedHero ? 'mt-0' : 'mt-2'}`} data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              {/* Dynamic description below the title based on selected hero button */}
              <SortableContainer dndKitId="f184bd2b-caf3-4abd-b596-4479a7f2545c" containerType="regular" prevTag="div" aria-live="polite" aria-atomic="true" className="relative" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {/* Mount placeholder to keep flow stable and enable height tweening */}
                <SortableContainer dndKitId="b93eaa7a-5f15-4c5b-949a-330fc3b2b57c" containerType="regular" prevTag="div" className={`transition-[max-height,opacity,transform,margin] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedHero ? 'max-h-[200px] opacity-100 translate-y-0 mt-3' : 'max-h-0 opacity-0 -translate-y-1 mt-0'} overflow-hidden`} data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  {selectedHero ? <p className="text-xl text-gray-200 leading-relaxed max-w-lg transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 opacity-100 translate-y-0 will-change-[opacity,transform]" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">{selectedHero === 'form' ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : selectedHero === 'nfl' ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : 'Stream with BreakDance overlays and get instant promotion to collectors in our Live Breaks directory.'}</span>
                    </p> : null}
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="4a311356-0c27-4070-a447-59fcb8a15b7e" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-[padding,background-position,color,box-shadow] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} style={{
              fontFamily: 'Nunito, sans-serif'
            }} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="d15442d6-f25c-40c6-a566-2de3e37f5f61" containerType="regular" prevTag="motion.div" className="relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeZoom} data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="113d621b-1e44-4ac9-aa73-a8f0b967352e" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="e17f39c3-fc1b-43d7-b94a-9c9990962915" containerType="regular" prevTag="div" className={`relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl border border-white/10 p-6 sm:p-8 transition-colors duration-500 ease-in-out ${selectedHero === 'nfl' ? 'bg-gradient-to-b from-[#1c172b]/80 to-[#231b34]/70' : 'bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40'}`} style={{
                perspective: 1200
              }} data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="ff370831-c2cb-4461-a48e-5d78d316a05c" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <SortableContainer dndKitId="72e5945f-a990-40c2-8392-540096e21cc9" containerType="regular" prevTag="div" ref={heroStageRef} className="relative w-full h-full" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      {/* Back layer – Browser Button */}
                      <SortableContainer dndKitId="09207a53-7d76-4b95-8362-62d56cea9af7" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => {
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
                    }} className={`${baseStyles} form-window transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-transform duration-500 ease-in-out`} style={{
                      zIndex: zFor('form-window'),
                      width: '85%',
                      height: '74%',
                      left: '9%',
                      top: '7%',
                      transform: 'translate(0%, 6%) scale(0.98)',
                      transformStyle: 'preserve-3d'
                    }} onMouseEnter={e => {
                      if (selectedHero !== 'form' && !nflFocused) {
                        e.currentTarget.style.transform = 'translate(0%, 6%) scale(1.03)';
                      }
                    }} onMouseLeave={e => {
                      if (!nflFocused) {
                        e.currentTarget.style.transform = 'translate(0%, 6%) scale(0.98)';
                      }
                    }} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <SortableContainer dndKitId="94144071-06bd-4ba6-ad41-fc9a3be5f7a1" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <SortableContainer dndKitId="44c4c22f-f5a0-4e11-b70b-9ddf9ed26bbb" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                            <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                              <span data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                            </p>
                          </SortableContainer>
                        </SortableContainer>
                      </SortableContainer>

                      {/* Middle layer – Grid Button */}
                      <SortableContainer dndKitId="3ff0bb9e-557c-45fe-b660-10740c3bd117" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => {
                      // Activate focus mode and center NFL
                      setNflFocused(true);
                      const clicked: 'nfl' = 'nfl';
                      const clickedId = 'nfl-grid';
                      setSelectedHero(clicked);
                      setRecency(prev => {
                        const next = prev.filter(id => id !== clickedId);
                        next.unshift(clickedId);
                        return next;
                      });
                    }} className={`${baseStyles} nfl-grid transition-[transform,opacity,left,top] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
                      zIndex: zFor('nfl-grid'),
                      // Lock footprint to keep size consistent when active/focused
                      width: '92%',
                      height: '58%',
                      // Center within the relative container when focused
                      left: nflFocused ? '50%' : '17%',
                      top: nflFocused ? '50%' : '20%',
                      transform: nflFocused ? 'translate(-50%, -50%) scale(0.9)' : 'translate(4%, -2%) scale(0.7)',
                      transformStyle: 'preserve-3d',
                      padding: 0
                    }} onMouseEnter={e => {
                      if (selectedHero !== 'nfl' && !nflFocused) {
                        e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.75)';
                      }
                    }} onMouseLeave={e => {
                      if (!nflFocused) {
                        e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.7)';
                      }
                    }} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <div className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_28px_rgba(0,0,0,0.45)]" aria-hidden="true" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </SortableContainer>

                      {/* Front layer – Phone Button */}
                      <SortableContainer dndKitId="573dba61-a58e-491f-b72e-99cf1af3be0c" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => {
                      setNflFocused(false);
                      const clicked: 'phone' = 'phone';
                      const clickedId = 'phone-preview';
                      setSelectedHero(clicked);
                      setRecency(prev => {
                        const next = prev.filter(id => id !== clickedId);
                        next.unshift(clickedId);
                        return next;
                      });
                    }} className={`${baseStyles} phone-preview transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-transform duration-500 ease-in-out`} style={{
                      zIndex: zFor('phone-preview'),
                      left: '3%',
                      top: '17%',
                      transform: 'translate(-6%, -6%) scale(.7)',
                      transformStyle: 'preserve-3d',
                      width: '36%',
                      height: '72%'
                    }} onMouseEnter={e => {
                      if (selectedHero !== 'phone' && !nflFocused) {
                        e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.75)';
                      }
                    }} onMouseLeave={e => {
                      if (!nflFocused) {
                        e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.7)';
                      }
                    }} data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <SortableContainer dndKitId="ee23996d-c17d-4f6e-beae-ab5c6cd7c48a" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 border border-white/10" aria-hidden="true" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute left-0 top-[18%] -translate-x-1/2 h-10 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute right-0 top-[26%] translate-x-1/2 h-6 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute right-0 top-[36%] translate-x-1/2 h-14 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <div className="w-full h-full rounded-[22px] bg-black" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                        </SortableContainer>
                      </SortableContainer>

                      {/* Bottom-center dots indicator for NFL selected */}
                      {selectedHero === 'nfl' ? <SortableContainer dndKitId="91cac885-59bf-4b99-93ac-e5cfff260913" containerType="regular" prevTag="div" className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/10" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/10" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/10" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                        </SortableContainer> : null}
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="bd34c234-c146-4d7c-8af0-bcc69001e66a" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="fae7e98d-f0a2-4560-b5df-a8e6cc1946a6" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="e157370a-5b2d-4c4f-9598-d57e87cc9142" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-gradient-to-b from-[#222032] to-[#2a2338]" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="20514fb4-c580-40bb-8835-ecdf1990ad94" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e167bc49-b2b7-43ca-82ac-835d55d67d03" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={{
            ...(category.name === 'Browse Tools' ? {
              width: '206.594px'
            } : {}),
            fontFamily: 'Nunito, sans-serif'
          }} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.6
          }} variants={fadeSlideRight} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="4995793c-199f-4cdb-955d-842f093623ed" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b28b8f9c-fc0e-48f0-8896-f5c65007195f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e84fbd60-320a-4243-bb3f-631a1d9eb961" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="233bdcd0-1bac-4443-938a-4af949e2e38e" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="85cd9a7c-5bdf-4d38-b212-7913055d2069" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="c2eb2449-e94b-4d30-aafe-c51fd0a3f55f" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="e7bfdcb4-55f4-4ed7-9b4a-3e3173ec4cb2" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="1f69ccb4-eead-4888-858f-79b1dbe1da58" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c7cec8ea-4088-437b-8c8f-f7cbb4db6eec" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="7b87f31c-3cff-4b30-aac0-5b29c0ed9070" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="780eff06-a604-498a-b6b5-fac0144aaca3" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRiseSoft} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="f2bfe965-18a3-4b80-8bfa-b830523416c5" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2a2338] to-[#2b253e] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="49ecf020-7d87-4c46-ac8f-1a9fa2e19ea3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="656c9110-4f37-43b9-a644-1e2c117b3c51" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="f1a52ae9-58c8-440b-a1ad-9432314529dd" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="f73e38b0-f0f7-4435-8475-29cc71bf368d" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="73cca65a-3666-44f7-9b19-dbf140de78f9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="82f8b293-4124-4694-8930-bc37602e4d1d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="583fa007-8879-45cb-8f2b-fbf5023827b6" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="79fc1651-fb6e-47b4-bb74-be921f33b802" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="8abc9285-48b8-4361-b148-bf62b262f01f" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="19d8dac7-5380-4b77-9f98-41ebe654b302" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeSlideLeft} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="474d81cc-6658-41f0-a1de-f2de5e5c82d2" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2b233e] to-[#302742] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="59817311-b74a-439d-a26a-0b9c577fd93e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5694d068-af0e-4d2c-8ce8-dfc2dbd31ce1" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="fa023b62-f221-4be8-abef-332c7d2aec21" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="88e91e39-3b25-430c-baa9-2b00fa7c3589" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="19219c16-0d22-4eb6-8a54-c2005b2422ff" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="d15741e9-facb-421f-8f4d-07a1346ed2d1" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="2118b7ee-3a5f-42a6-b0c6-aa8efd6be3cf" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="aaa8ec2c-ec7b-4251-bfe8-f7127128cbbf" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="09ff75f8-e158-4966-a118-0ff8704acad3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="428c40aa-b7f0-4b84-af1d-087f8057919b" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeZoom} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="1ad6c66b-85fd-4394-b76c-d988560ad720" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="e32ce2ef-78d1-44ae-a7db-37ea8da948d5" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="fec89fc9-5618-4a8e-a24b-fe43b12545b6" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="47baf980-9e1c-4826-8bce-412ada03a1ea" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="73af580f-de3c-43c0-bf18-8fcbe3f7b148" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f0cbfba2-dad1-4a34-bd65-8423cae8431d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c9d16e3d-89c8-4188-8efc-59979ba55554" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="3bf37d39-dbbd-458b-a311-81a7cc856758" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="766da9c0-d8f9-4944-a9ca-9fcd3f3e9785" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="0db8acc9-c8b4-4210-9759-5f52601d4565" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeSlideRight} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="ead8025b-fd0b-40ac-84bf-ca00baba1cac" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] via-[#38305a] to-[#43305b]" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="772158c2-9239-48f4-a52f-b8d2cdd6e91d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e1063c1e-70cc-40bb-9e05-1713fdb3ae1c" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="3257ebe9-4f11-45f5-83bc-756cf510b9c3" containerType="regular" prevTag="motion.div" className="space-y-8" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">Go live. Get featured. Stand out.</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">Every BreakDance overlay automatically features your stream in our Live Breaks directory, driving qualified traffic to your channel</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="f8081bee-5fb5-458e-97dc-b06ecdea8503" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} style={{
              fontFamily: 'Nunito, sans-serif'
            }} data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="a44c2ffa-ace5-40cc-bc04-5c72e7dacd2f" containerType="regular" prevTag="motion.div" className="bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 rounded-3xl p-12 flex items-center justify-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8ad1e307-0f11-4671-a5fe-0f22705757f2" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="e895fb6d-cfe4-44e9-ad8e-739ac1b9d860" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="fd4c8b85-c49b-49d3-aa1d-35e0fd6658e5" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="610b570a-2493-4cb6-b945-0ef2fc52dcbf" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get streaming like a pro in under 5 minutes with our streamlined process - for breakers at every level</span>
          </p>
          
          <SortableContainer dndKitId="f2319ffd-f808-4db7-8a02-91ca37957b03" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} transition={{
            delay: index * 0.12,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>

          {/* Instagram Subscribe Carousel Card moved to Follow Us section below */}

          <SortableContainer dndKitId="af2ac7e6-4958-404a-9694-fa805062ba93" containerType="regular" prevTag="button" className="mt-16 mb-4 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-bold text-xl lg:text-2xl text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" style={{
          fontFamily: 'Nunito, sans-serif'
        }} data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="3d919946-431d-41b5-924d-0b9d039f020f" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="86d94ef8-0b25-41e2-a67f-182adff1af71" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">Level Up Your Production</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.</span>
          </p>
          
          <SortableContainer dndKitId="f182f8cc-ddc8-4c94-9d26-05e9803abdea" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="baa9077b-9255-45b5-ad40-c65b2d2e39fd" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 relative inline-flex" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {/* Slider track */}
              <div className="absolute inset-2 rounded-xl bg-white/5" aria-hidden="true" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              {/* Sliding handle */}
              <span className={`absolute top-2 h-[calc(100%-1rem)] rounded-xl bg-orange-500 shadow-lg will-change-transform transition-transform duration-300 ease-out`} style={{
              width: 'calc(50% - 0.25rem)',
              transform: pricingToggle === 'monthly' ? 'translateX(0)' : 'translateX(100%)'
            }} aria-hidden="true" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <SortableContainer dndKitId="c0a59e93-e616-4a88-8c25-839a93a239ad" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${pricingToggle === 'monthly' ? 'text-white' : 'text-gray-300 hover:text-white'}`} aria-pressed={pricingToggle === 'monthly'} aria-label="Select monthly pricing" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="f92098f6-7633-4637-a11f-555741b3884c" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${pricingToggle === 'yearly' ? 'text-white' : 'text-gray-300 hover:text-white'}`} aria-pressed={pricingToggle === 'yearly'} aria-label="Select yearly pricing" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c6fa3791-a4e7-4152-ab35-f620b4557cc6" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="9b38f128-6f61-4ab4-960f-6cd2d516de1e" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-white/10 h-full" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeSlideRight} data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8e3a4b5d-7f00-4aca-b661-645daed5d11f" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Starter</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get started and explore BreakDance with no cost or no commitment</span>
                </p>
                <SortableContainer dndKitId="8cfa323f-5d5f-4920-8069-8c92221f4c5b" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
                </SortableContainer>
                <SortableContainer dndKitId="b4b4280b-ef77-4dfa-be91-03fd3b86d279" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the overlay library</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the ‘break editor’ ui</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save unlimited overlays to your collection</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">Limited access to  break tools dashboard</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="6fb76f89-0dd2-41ce-90d3-27c8c2338209" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="ed706735-e7d7-4975-a315-9e07779ab0cc" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl font-semibold text-lg text-center hover:bg-slate-800 transition-colors duration-150" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">Start Free</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="4eee37e6-1e7f-4c74-b1c5-476b8b2318d3" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeSlideLeft} data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="67b0c0ae-a334-4a03-8c54-9dbf5e56add9" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {pricingToggle === 'yearly' && <SortableContainer dndKitId="2142d98d-0d68-40a6-8eda-acb42e9dfe46" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 21%</span>
                  </SortableContainer>}
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Pro</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">Best for regular users who want to experience the full functionality of the platform</span>
                </p>
                <SortableContainer dndKitId="58ca4250-b061-4742-b547-9cf8023f9e4e" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8 h-12 leading-[48px]" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$3.99' : '$37.99'}</span>
                  <span className="text-lg text-gray-400 font-normal" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    /{pricingToggle === 'monthly' ? 'month' : 'year'}
                  </span>
                </SortableContainer>
                <SortableContainer dndKitId="b3197bfa-1533-48fa-8607-dfc287f66a1a" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to break tools dashboard</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get featured every time you go live</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get notified first for LE collection drops</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="3adb6f17-2c42-4ae3-97b7-9c66a4cf6834" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="867117ee-3c05-4ca9-b9db-c6b878197d50" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors text-center" data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Pro</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="10f62b86-56c5-47ce-ac7d-fe69a46055ea" containerType="regular" prevTag="section" className="px-6 pt-24 pb-0 bg-gradient-to-b from-[#2b253e] to-[#302742]" data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="acca2c42-9c75-4cc5-9571-08a4759e10df" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">Why Production Quality Matters</span>
          </h2>
          {/* Create a self-contained stage with fixed min-height so hover growth doesn't nudge following sections */}
          <SortableContainer dndKitId="ed447853-0db4-459a-8328-9ce6276ef04a" containerType="regular" prevTag="div" className="relative" style={{
          minHeight: '25rem'
        }} data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="52547723-3a64-454d-852e-fb64c0ad9f12" containerType="collection" prevTag="div" className="grid gap-8 stats-grid md:grid-cols-3" style={{
            fontFamily: 'Nunito, sans-serif'
          }} data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {stats.map(stat => <motion.div data-magicpath-motion-tag="motion.div" key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 overflow-visible stats-card" initial="hidden" whileInView="show" viewport={{
              once: true,
              amount: 0.4
            }} variants={makeStagger(0.1)} whileHover={{
              scale: 1.02,
              y: -8
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <StatNumber number={stat.number} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                   </div>
                   <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                   </div>
                   {/* Expansion appears visually below the base content but uses a transform so siblings and grid height feel stable */}
                   <div className="card-flyout" aria-hidden="true" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <p className="text-sm text-white/90 bg-white/10 rounded-xl px-4 py-3" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                       <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number === '19.8%' ? 'Streams with premium production quality generate 19.8% longer average watch times and more active chat participation' : stat.number === '3.2x' ? 'Professional production quality converts casual viewers to regular customers 3.2x more effectively than basic setups' : 'Streamlined overlay systems reduce technical interruptions by 47%, keeping your audience engaged throughout every break'}</span>
                     </p>
                   </div>
                   <style data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
                 </motion.div>)}
             </SortableContainer>
           </SortableContainer>
           <style data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
         </SortableContainer>
       </SortableContainer>

       {/* Community CTAs */}
       <SortableContainer dndKitId="49fe3dd2-5d12-497e-bac8-03faef96c20d" containerType="regular" prevTag="section" className="px-6 pt-0 pb-24 bg-gradient-to-b from-[#302742] to-[#1F1A30]" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="eff4c069-595b-4050-a4e3-90c635ab2263" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <span data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get in Touch</span>
           </h2>
           <SortableContainer dndKitId="6b1ace35-df2d-4a22-9f3b-e4600bae9a3b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             {communityCards.map(card => <motion.div data-magicpath-motion-tag="motion.div" key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRiseSoft} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 {/* Icon per card by title for precise replacements without altering other content */}
                 {card.title === 'Join our Newsletter' ? <svg role="img" aria-label="Newsletter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 4.5 6.75v.3l6.86 4.117a2 2 0 0 0 2.28 0L20 7.05v-.3A1.25 1.25 0 0 0 18.25 5.5H5.75A1.25 1.25 0 0 0 4.5 6.75Zm13.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : card.title === 'Follow us on Twitter' ? <svg role="img" aria-label="Twitter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M22 5.92c-.73.32-1.5.54-2.3.64a4.02 4.02 0 0 0 1.76-2.22 8.02 8.02 0 0 1-2.54.98 3.99 3.99 0 0 0-6.8 3.64 11.31 11.31 0 0 1-8.22-4.17 4 4 0 0 0 1.24 5.33c-.62-.08-.63.12-.97.12-.23 0-.47-.02-.69-.07a4 4 0 0 0 3.73 2.77A8.02 8.02 0 0 1 2 18.41 11.32 11.32 0 0 0 8.13 20c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.06 8.06 0 0 0 22 5.92z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : card.title === 'Customize It' ? <svg role="img" aria-label="Customize" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M3 17.25V21h3.75l11-11.02-3.75-3.75L3 17.25Zm17.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : null}
                 <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title === 'Join our Newsletter' ? 'Newsletter Updates' : card.title === 'Follow us on Twitter' ? "We're on Twitter" : card.title === 'Customize It' ? 'Custom Projects' : card.title}</span>
                 </h3>
                 <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                 </p>
                 <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                 </button>
               </motion.div>)}
           </SortableContainer>

           {/* Instagram Subscribe Carousel Card – bottom center within Follow Us. Height equals a card */}
           <SortableContainer dndKitId="06a3520b-03d8-4763-afb5-d958edf10a6b" containerType="regular" prevTag="section" aria-labelledby="insta-subscribe-title" className="mt-12 md:mt-16 mx-auto w-full" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <SortableContainer dndKitId="52ee6194-a672-4f91-ae0d-ab637a4da4d4" containerType="regular" prevTag="div" className="bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-8 py-5 md:py-6" data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="a78310a1-1498-4aa5-aa33-15cfa7126988" containerType="regular" prevTag="header" className="mb-4" data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <h3 id="insta-subscribe-title" className="text-2xl font-bold mb-4 text-center" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">Latest on Instagram</span>
                 </h3>
               </SortableContainer>
               <SortableContainer dndKitId="d2e410a7-feac-4f37-a3f3-346068fe1456" containerType="regular" prevTag="div" className="relative" data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <SortableContainer dndKitId="c7ff967d-1cef-4432-acfe-501457342ee4" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1" aria-label="Previous slide" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="b79a8260-1c57-4e0d-bebc-53336e1e7b84" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Previous" onClick={e => {
                  const root = e.currentTarget.closest('section') as HTMLElement | null;
                  const list = root ? root.querySelector('ul') as HTMLUListElement | null : null;
                  if (list) {
                    const tile = list.querySelector('li');
                    const tileWidth = tile ? (tile as HTMLElement).offsetWidth + 16 : 280; // include gap
                    list.scrollBy({
                      left: -tileWidth * 1.5,
                      behavior: 'smooth'
                    });
                  }
                }} data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <ChevronLeft className="h-4 w-4" data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </SortableContainer>
                 </SortableContainer>
                 <SortableContainer dndKitId="57171858-115b-40ec-8dea-653331ed4545" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1" aria-label="Next slide" data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="0a6bafb7-120d-4883-8cba-5313225a8342" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Next" onClick={e => {
                  const root = e.currentTarget.closest('section') as HTMLElement | null;
                  const list = root ? root.querySelector('ul') as HTMLUListElement | null : null;
                  if (list) {
                    const tile = list.querySelector('li');
                    const tileWidth = tile ? (tile as HTMLElement).offsetWidth + 16 : 280; // include gap
                    list.scrollBy({
                      left: tileWidth * 1.5,
                      behavior: 'smooth'
                    });
                  }
                }} data-magicpath-id="352" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <ChevronRight className="h-4 w-4" data-magicpath-id="353" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </SortableContainer>
                 </SortableContainer>
                 <ul className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] md:auto-cols-[minmax(240px,1fr)] gap-4 overflow-hidden" data-magicpath-id="354" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   {['one', 'two', 'three', 'four', 'five', 'six'].map((_k, idx) => {
                  const key = `insta-${idx + 1}`;
                  return <li key={key} className="min-w-0" data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                           <article className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-500 p-0.5" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                             <SortableContainer dndKitId="acb11a8f-9c01-410f-b9db-d20d464ef75e" containerType="regular" prevTag="div" className="rounded-[14px] bg-gradient-to-b from-white/10 to-white/5 p-1.5" data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                               {/* Square tile: enforce 1:1 aspect and single row only */}
                               <SortableContainer dndKitId="950ea7ba-fe69-45ca-ba8e-792dfb97d3aa" containerType="regular" prevTag="figure" className="w-full aspect-square overflow-hidden rounded-lg" data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                 <picture data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <img data-magicpath-id="360" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                                 </picture>
                                 <SortableContainer dndKitId="6cced5e9-271f-4230-a7ff-73c9a9f3e894" containerType="regular" prevTag="figcaption" className="sr-only" data-magicpath-id="361" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <span data-magicpath-id="362" data-magicpath-path="OverlaysUnoLandingPage.tsx">Instagram highlight tile</span>
                                 </SortableContainer>
                               </SortableContainer>
                             </SortableContainer>
                           </article>
                         </li>;
                })}
                 </ul>
               </SortableContainer>
             </SortableContainer>
           </SortableContainer>
         </SortableContainer>
       </SortableContainer>

       {/* Section Divider */}
       {/* Removed per request: divider above footer */}
       {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div> */}

       {/* Footer */}
       <SortableContainer dndKitId="ccf8a46f-2050-485f-827a-62b63da8579f" containerType="regular" prevTag="footer" className="px-6 py-16 bg-gradient-to-b from-[#1F1A30] to-[#582864] text-white font-normal" data-magicpath-id="363" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="0a6b9ca8-947f-433a-9f07-5059dc92889e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="364" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <SortableContainer dndKitId="87b8ab6d-1912-4006-aeb1-b60bdf73e7f6" containerType="regular" prevTag="div" className="flex flex-col items-center text-center" data-magicpath-id="365" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <a href="#" aria-label="overlays.uno home" className="mb-10 mt-4" data-magicpath-id="366" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <h2 className="text-[44px] leading-none font-bold tracking-tight" data-magicpath-id="367" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <span className="sr-only" data-magicpath-id="368" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance</span>
                 <span aria-hidden="true" className="align-middle" data-magicpath-id="369" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break</span>
                 <span aria-hidden="true" className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]" data-magicpath-id="370" data-magicpath-path="OverlaysUnoLandingPage.tsx">Dance</span>
               </h2>
             </a>

             <SortableContainer dndKitId="700cd08c-33d2-42f8-8f60-c566acee8ae2" containerType="regular" prevTag="nav" aria-label="Footer links" className="mb-4" data-magicpath-id="371" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="37f5ed7f-d974-4ef0-a10f-690f85eb6ed7" containerType="regular" prevTag="ul" className="flex items-center gap-6" data-magicpath-id="372" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <li data-magicpath-id="373" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="374" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-id="375" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
                   </a>
                 </li>
                 <li data-magicpath-id="376" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="377" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-id="378" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
                   </a>
                 </li>
               </SortableContainer>
             </SortableContainer>

             <p className="text-xs text-white/60" data-magicpath-id="379" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <span data-magicpath-id="380" data-magicpath-path="OverlaysUnoLandingPage.tsx">© 2025 All Rights Reserved</span>
             </p>
           </SortableContainer>
         </SortableContainer>
       </SortableContainer>
     </SortableContainer>;
};

// Animated stat number sub-component (file-local)
function StatNumber({
  number
}: {
  number: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  // Use IntersectionObserver to know when the number enters view
  const inView = useInView(ref, {
    once: true,
    amount: 0.6
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
        listeners: new Map<number, () => void>()
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
  return <SortableContainer dndKitId="f91692cb-75c8-4d01-a4bc-04e9934634e1" containerType="regular" prevTag="div" ref={ref} className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-id="381" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      <span data-magicpath-id="382" data-magicpath-path="OverlaysUnoLandingPage.tsx">{display}</span>
    </SortableContainer>;
}