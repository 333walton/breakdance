import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "8a4a1099-7ea9-4139-a65d-2c5991d21e49"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "5b0259be-f5d9-48ed-b884-6d7871539ab5"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "810bca30-869a-4057-96f7-fcb5614f62cb"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "ea5dc8d8-339e-4738-a66b-689d4ed03e97"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "7ff9f6d3-db62-4818-8b0a-021e90de4c2b"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "459a59a8-2a1d-4ebf-b27e-d94bbbae9021"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "4c0c558e-4f5f-4ce3-8958-9168cd09e879"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "be4593ae-a16c-407e-8c02-ce93d498c3d9"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "afc570d7-7aa4-4e8a-8d85-ff9b077e1d6a"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "b8072886-17f0-426d-b001-e62ab9341a58"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "809cf41b-002a-4881-ac86-29e63425c266"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "94a35d13-9ae4-4265-a843-490d9a52c6bf"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "128b3e7c-1b02-44e7-ab9b-863da25393e8"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "e3298a8c-ae45-4367-bab6-a85bfd6c0279"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "15a3f717-d0f3-4807-8280-4d139e1e93b8"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "cf68b3b1-3918-448f-bdfa-2fe64a65cfb5"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "29fe338b-752b-4cae-9d55-a11121f8d0b7"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "9a53d071-17a0-401d-8a27-ce0a31e6c9b6"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "8187385a-5893-45ba-9603-4f3ac92f44eb"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "5343f96a-0f14-40f2-b7f1-3b8aa2e79b55"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Choose Your Style',
  description: 'Pick from your collection or browse our overlay library for a theme—vintage Topps to modern Panini to match your break’s vibe',
  mpid: "f45cf6ad-2d68-4a3f-bdc1-6235c59af4c7"
}, {
  icon: Palette,
  title: 'One-Click Integration',
  description: 'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  mpid: "ec15f8ed-63fc-4883-a674-91567065db22"
}, {
  icon: Copy,
  title: 'Go live with control',
  description: 'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  mpid: "5a5d8ee6-2e2e-43f1-a55b-32043646723b"
}] as any[];
const stats = [{
  number: '19.8%',
  label: 'Higher Viewer Engagement',
  sublabel: '',
  mpid: "09cf7293-7241-4e4d-9cf9-93bd5531ddc3"
}, {
  number: '3.2x',
  label: 'Higher Conversion Rates',
  sublabel: '',
  mpid: "9d4cf545-b7e7-4997-9f04-a1526413a161"
}, {
  number: '47%',
  label: 'Fewer Technical Issues',
  sublabel: '',
  mpid: "26641170-5f67-4a4b-a527-c88d24667cad"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join our Newsletter',
  subtitle: 'Stay updated with hobby news and product drops',
  buttonText: 'Join Newsletter',
  color: 'bg-[oklch(78.4%_0.142_246.8)]',
  mpid: "7eb92fe5-50f8-4b3f-af5e-3aad66ae5b3d"
}, {
  icon: Youtube,
  title: 'Follow us on Twitter',
  subtitle: 'Follow us for hobby news and product updates',
  buttonText: 'Follow',
  color: 'bg-[oklch(68%_0.16_240)]',
  mpid: "6675b557-d4f2-46e2-9c32-1f7b44521b57"
}, {
  icon: Heart,
  title: 'Customize It',
  subtitle: 'Have something unique in mind? We can help',
  buttonText: 'Reach Out',
  color: 'bg-[oklch(0.510_0.262_276.9)]',
  mpid: "d6925d4b-9757-4403-9990-e684ef1835f5"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "9d60ad2f-9bba-40f9-8be7-ec76bd0c5029"
}, {
  label: 'Tools',
  mpid: "d92bd862-6aab-4cf6-a3d9-5d8583ef9c85"
}, {
  label: 'How It Works',
  mpid: "74da990e-a23f-4b28-a95a-d8094daeffbb"
}, {
  label: 'Demo',
  mpid: "438affc7-8ed6-4090-bf3d-521c5222e5f7"
}, {
  label: 'Live Breaks',
  mpid: "c0e9ca89-15a3-44eb-a22a-8636a90cedee"
}, {
  label: 'Shop',
  mpid: "8067141c-1985-4a9b-9566-2f667e5dfb6e"
}, {
  label: 'About',
  mpid: "f890ac01-7973-4781-b2bd-685e204a1404"
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

  // Define baseStyles and zFor function at component level so they can be used by inline hero buttons
  const baseStyles = 'hero-button absolute will-change-transform rounded-2xl transition-[transform,filter,box-shadow] duration-[500ms] ease-in-out border border-white/10 bg-white/5 backdrop-blur-md';
  function zFor(id: string) {
    // Highest z for most recent click, lowest for least recent.
    const idx = recency.indexOf(id);
    // Clamp and map to distinct z-indices below the active pop value
    if (idx === -1) return 1;
    // 0 -> 999, 1 -> 3, 2 -> 2 to ensure a clear order and no ties
    return idx === 0 ? 999 : idx === 1 ? 3 : 2;
  }
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
    mpid: "64790d94-b602-4edb-a4a9-c7e156d1f0c6"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "03e61d6c-1bbb-498f-b61a-1b90e94e6037"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "9a85453f-efa9-4a33-818e-3a09d363d728"
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
      mpid: "3a143a2f-0365-443e-ac06-d5bde3e496c6"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "84116f34-e121-4cbc-b657-d62723091d44"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "62f72b82-d744-462b-aec3-4350293f31f2"
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
    return <SortableContainer dndKitId="da89c9e6-fe78-4300-ad7e-1a75bd2a9d7b" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="89f4ffc4-5783-4e88-a8fe-38e0fa128b15" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => bringToFront('form')} className={`${baseStyles} form-window transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-[transform,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
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
          <SortableContainer dndKitId="b04070c7-c755-47d1-a892-0117772b71aa" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="32e9004b-ee86-40a8-b2cc-5e9d762fc15e" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
        <SortableContainer dndKitId="b9038a41-2271-419f-b872-c5a41321b012" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => bringToFront('nfl')} className={`${baseStyles} nfl-grid transition-[transform,opacity,left,top,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
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
        <SortableContainer dndKitId="993c4c73-22a8-45aa-8df1-1489f1f6f1b2" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => bringToFront('phone')} className={`${baseStyles} phone-preview transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-[transform,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
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
          <SortableContainer dndKitId="5412ed08-fdf8-44c1-ace4-ce623e1e6fd3" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="6d349b40-7ca8-4ec0-8c5d-0f9443864ef5" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-[#1F1A30] via-[#582864] to-[#9149c1] text-white font-sans" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="8584be52-a498-49a1-a575-67b1adac83d5" containerType="regular" prevTag="header" className="bg-gradient-to-b from-[#26213a] to-[#302742] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="398f6e7c-45b9-4e1d-9bd2-b01bae850cba" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="563aaf04-53aa-4af0-9fb5-9196736f3490" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="31b16fa0-5e23-431a-9a80-a4489bc0cb9f" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="9239e8fb-a8b6-43e9-87c0-080c55ea2bb8" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="e5fa5d0d-1c1d-48cc-a5ed-4ee896969b17" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d0c3066a-6ae8-4281-84ae-4d8328a272ee" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="51942711-fe1e-4c15-8b55-1067076f5f58" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="53a9c33d-6906-46ae-8127-c2a9b4b72773" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="6adea533-e46e-4738-9087-676f90b89f27" containerType="regular" prevTag="section" className="relative px-6 py-14" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-700 to-orange-400" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <div className="absolute inset-0 bg-black/70" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <SortableContainer dndKitId="493460f3-cf50-4b72-8b69-780828ee730e" containerType="regular" prevTag="div" className="relative z-10 max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="68874d18-6a0e-4397-b968-41feca721e82" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center min-h-[420px] md:min-h-[520px] lg:min-h-[560px]" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="e18f8120-5e62-4295-b0dc-b7757f9b3dd0" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} className={`space-y-8 overflow-hidden transition-[margin,transform,opacity,max-height,padding] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedHero ? '-translate-y-2' : 'translate-y-0'} ${selectedHero ? 'max-h-[900px] pb-3' : 'max-h-[560px] pb-0'}`} data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className={`text-6xl lg:text-7xl font-bold leading-tight transition-[margin,opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedHero ? 'mt-0' : 'mt-2'}`} data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              {/* Dynamic description below the title based on selected hero button */}
              {selectedHero && <p className={`text-xl text-gray-200 leading-relaxed max-w-lg transition-[opacity,transform,max-height,margin] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${selectedHero ? 'opacity-100 translate-y-0 max-h-[480px] mt-3' : 'opacity-0 translate-y-2 max-h-0 mt-0'} overflow-hidden`} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">{selectedHero === 'form' ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : selectedHero === 'nfl' ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : 'Stream with BreakDance overlays and get instant promotion to collectors in our Live Breaks directory.'}</span>
                </p>}
              <SortableContainer dndKitId="4fadf965-e153-4a0a-8a7c-c421e9a7ee87" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-[padding,background-position,color,box-shadow] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} style={{
              fontFamily: 'Nunito, sans-serif'
            }} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="8ea5f75c-f1f7-4018-aee5-d83c1b127682" containerType="regular" prevTag="motion.div" className="relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeZoom} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="95c3f9ec-e989-4047-95e9-4d994be03d13" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="7957625a-3b37-42ee-ab4d-b3ff2bd74fa0" containerType="regular" prevTag="div" className={`relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl border border-white/10 p-6 sm:p-8 transition-colors duration-500 ease-in-out ${selectedHero === 'nfl' ? 'bg-gradient-to-b from-[#1c172b]/80 to-[#231b34]/70' : 'bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40'}`} style={{
                perspective: 1200
              }} data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="08cc1780-886f-4f88-be37-ae9c899b40b2" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <SortableContainer dndKitId="a9b8b07e-88b2-4b62-962a-2b7797445b16" containerType="regular" prevTag="div" ref={heroStageRef} className="relative w-full h-full" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      {/* Back layer – Browser Button */}
                      <SortableContainer dndKitId="f6c2748a-f477-4287-900e-91cea29bca91" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => {
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
                    }} data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <SortableContainer dndKitId="22507489-fe4d-48b7-bd05-d73b68ce79ff" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <SortableContainer dndKitId="51ca0ed4-851f-4021-80e2-4e8e53c231a2" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                            <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                              <span data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                            </p>
                          </SortableContainer>
                        </SortableContainer>
                      </SortableContainer>

                      {/* Middle layer – Grid Button */}
                      <SortableContainer dndKitId="df03d644-adf0-4f59-be88-a253b2d8c631" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => {
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
                    }} data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <div className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_28px_rgba(0,0,0,0.45)]" aria-hidden="true" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </SortableContainer>

                      {/* Front layer – Phone Button */}
                      <SortableContainer dndKitId="b6adc632-519b-4031-81a3-1459d0a932e1" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => {
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
                    }} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <SortableContainer dndKitId="f5103f3d-4cc9-417e-9910-815056a13c1b" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 border border-white/10" aria-hidden="true" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute left-0 top-[18%] -translate-x-1/2 h-10 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute right-0 top-[26%] translate-x-1/2 h-6 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute right-0 top-[36%] translate-x-1/2 h-14 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <div className="w-full h-full rounded-[22px] bg-black" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                        </SortableContainer>
                      </SortableContainer>

                      {/* Bottom-center dots indicator for NFL selected */}
                      {selectedHero === 'nfl' ? <SortableContainer dndKitId="526bdea9-1f25-4381-8ad1-87c59f66a131" containerType="regular" prevTag="div" className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/10" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/10" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/10" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                        </SortableContainer> : null}
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="40ecffcf-9063-4b0e-8668-219afec81e69" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="03b80e66-f8c6-48bf-a981-48bced4a3be1" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="79818ea2-5e21-4a66-9b09-32b5fd432cdf" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-gradient-to-b from-[#222032] to-[#2a2338]" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="392ccffe-0a15-4f06-9d38-df4998515e1d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="52abe2d5-f1a7-482a-8b18-7221ff0c5735" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          }} variants={fadeSlideRight} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="ded1acf0-ae05-4eeb-9328-1a1f7744e9fc" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fdf7aa45-469f-4af0-a154-bda6f4ad435a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="7c1bf850-e091-42da-92d7-66695a44c162" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="7bc20f71-d73f-42cd-ad52-49d4d9cee8fb" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="873f922f-4a8b-477e-8b6e-2151bf0cdf3b" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="240b5317-7536-43e7-b0fe-b326cfac5c0f" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a625a2cb-d18f-4c7d-99b6-44e1fec30332" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="874dfebc-e6c9-4981-a56f-fed6f5cc7293" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="d78d7b18-ad71-476a-9f75-b2df267d913f" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="5a026cae-0c37-4995-9436-f64876fb15a8" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="78f4562e-254c-4d9c-ba39-d7ee3db05f3f" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRiseSoft} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="7756a1f8-26f9-4447-a985-b3ee2a877004" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2a2338] to-[#2b253e] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="30620632-f1fa-40ed-ab4a-f55e610b934a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="1a88b11d-c7c3-4b69-9314-49f58a57cdf0" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="e4788fd2-f3d1-4123-844a-c5f60a48d94b" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8a898422-ad81-4188-833e-2bff6ef3c58c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="817ff1d3-1e7b-4097-9eb4-89596f0e250b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="8ec16d36-9a64-405a-ade1-b8ed0744ee85" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="07970518-391c-43b4-8e80-40cd8774e144" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="2a031d15-25d2-41c0-9182-7d4665d52f75" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="83ac4828-497d-46e9-8db2-2762fba512ad" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="4ac20f44-da8d-4642-824b-46dc29a1bea7" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeSlideLeft} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="e664e9cf-893e-46a5-b66c-e24442a2c6e3" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2b233e] to-[#302742] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a2714308-dc7e-4375-92dc-b861a0d213b1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="543d9d3c-087b-4c32-9918-9aa3a97d01a0" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="9e84e868-0b51-4d5e-9f7b-38d5eff71874" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="3c82bcb3-43c1-4b86-895a-2c7eb031ee21" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="d28b2ea1-e0df-4f4c-8db4-a79b2186dc3b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="68e5805c-f775-477b-b208-4ad93682fe40" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="2743a68a-f453-4734-86ed-87bffc35afbb" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="fff9a243-8dc0-49d8-bb9d-a168b5126196" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ab029a32-5a43-4919-8f63-cdd0f6839f45" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="c3ef8170-22f4-41a9-95e2-e2a77200bbb2" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeZoom} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="08e1f0ad-7765-4b01-a63a-52c3b340458d" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="40bb058e-561a-4599-8338-b62c1a402f6a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="dc994e7b-0b46-454c-b6fb-8e916956dd37" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="24940ddd-9f22-4480-8050-16c31e58f658" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="40e5679f-d6cb-4226-a4d1-f54000f31e91" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="b01465a2-bdcc-40b6-ba96-0099450dcdce" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="4649624d-f60f-4ae1-8146-51a738013c0b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f028627e-715f-483c-8534-fc3df1d4051f" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="e4c9780a-d774-4d07-a9f3-36b5092f3af9" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="4c389a95-f589-4c75-8c7c-c0f5236fe145" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeSlideRight} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="b122e844-cf2e-4ced-9839-7b4a74b9bdd4" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] via-[#38305a] to-[#43305b]" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4d91a6b3-8721-47cf-8bef-bf5b9ad95610" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d0a2ba50-28d2-47f6-852a-69af7e1f5a6d" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="11e47874-4319-4ce6-af8c-5a4bd4402bca" containerType="regular" prevTag="motion.div" className="space-y-8" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">Go live. Get featured. Stand out.</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">Every BreakDance overlay automatically features your stream in our Live Breaks directory, driving qualified traffic to your channel</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="7546d7d7-2b2f-413e-8d1a-ef082448efd6" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} style={{
              fontFamily: 'Nunito, sans-serif'
            }} data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="84c319dc-2a4a-4aea-8673-d02ea289a9af" containerType="regular" prevTag="motion.div" className="bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 rounded-3xl p-12 flex items-center justify-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="37a1eae9-e4cf-4fdc-b21f-620cecd11cf5" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0b6bab15-593c-4bd1-9ac1-c8cb117662b5" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="6b0cec41-39c9-40a5-87fd-b07849a5e565" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fc2ce0a5-87a2-4cff-9cce-7c590c382294" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get streaming like a pro in under 5 minutes with our streamlined process - for breakers at every level</span>
          </p>
          
          <SortableContainer dndKitId="51f462e1-cedb-47a5-8b8c-25eab7d11acd" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} transition={{
            delay: index * 0.12,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>

          {/* Instagram Subscribe Carousel Card moved to Follow Us section below */}

          <SortableContainer dndKitId="0d385c2a-7e37-43fd-b3f1-a883dc78fc71" containerType="regular" prevTag="button" className="mt-16 mb-4 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-bold text-xl lg:text-2xl text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" style={{
          fontFamily: 'Nunito, sans-serif'
        }} data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="d1772ea3-cf5b-4726-9069-a6d520b4ee83" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5e9aa7c4-c3d8-489b-a7f7-f3b318905b66" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">Level Up Your Production</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.</span>
          </p>
          
          <SortableContainer dndKitId="d37ff915-9cee-4d09-8177-0f09f66e53d8" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="660c59f8-6147-4063-a0a2-c1e6aaf4d782" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 relative inline-flex" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {/* Slider track */}
              <div className="absolute inset-2 rounded-xl bg-white/5" aria-hidden="true" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              {/* Sliding handle */}
              <span className={`absolute top-2 h-[calc(100%-1rem)] rounded-xl bg-orange-500 shadow-lg will-change-transform transition-transform duration-300 ease-out`} style={{
              width: 'calc(50% - 0.25rem)',
              transform: pricingToggle === 'monthly' ? 'translateX(0)' : 'translateX(100%)'
            }} aria-hidden="true" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <SortableContainer dndKitId="125c827b-ba98-4dc7-9ae2-6c67537927c2" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${pricingToggle === 'monthly' ? 'text-white' : 'text-gray-300 hover:text-white'}`} aria-pressed={pricingToggle === 'monthly'} aria-label="Select monthly pricing" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="86c0302f-b438-419f-9992-b7b85ff55032" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${pricingToggle === 'yearly' ? 'text-white' : 'text-gray-300 hover:text-white'}`} aria-pressed={pricingToggle === 'yearly'} aria-label="Select yearly pricing" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="37d61659-d020-4877-9801-6e85f0bfe30a" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="20e42d56-3178-4056-bfc7-2b558c382eda" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-white/10 h-full" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeSlideRight} data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="814d510b-8949-4c2c-83ef-dcc3d65ba078" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Starter</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get started and explore BreakDance with no cost or no commitment</span>
                </p>
                <SortableContainer dndKitId="716c18a9-9d71-4601-8b88-76003eec62b5" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
                </SortableContainer>
                <SortableContainer dndKitId="2ed82dc4-075a-430e-96c8-baa91cf7e571" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the overlay library</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the ‘break editor’ ui</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save unlimited overlays to your collection</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">Limited access to  break tools dashboard</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="3f1ec711-39af-4f93-b323-0a6b2f705d81" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="27e073b0-07ec-41f0-8ae0-43cc6eae7144" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl font-semibold text-lg text-center hover:bg-slate-800 transition-colors duration-150" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">Start Free</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="c6302c5e-8106-4f8e-a0cb-2e53bd199dbe" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeSlideLeft} data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="b7cd331d-832e-4fdd-bcc7-eba70e81911b" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {pricingToggle === 'yearly' && <SortableContainer dndKitId="97c66bd2-6134-4004-adb8-eb5e7da16c82" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 21%</span>
                  </SortableContainer>}
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Pro</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">Best for regular users who want to experience the full functionality of the platform</span>
                </p>
                <SortableContainer dndKitId="1866957c-6231-4b50-bdb0-3e9608c3b2c0" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8 h-12 leading-[48px]" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$3.99' : '$37.99'}</span>
                  <span className="text-lg text-gray-400 font-normal" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    /{pricingToggle === 'monthly' ? 'month' : 'year'}
                  </span>
                </SortableContainer>
                <SortableContainer dndKitId="0c884c8d-b475-4a3e-a2bd-9f0c0f2f6500" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to break tools dashboard</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get featured every time you go live</span>
                  </li>
                  <li className="flex items-center" style={{
                  fontFamily: 'Nunito, sans-serif'
                }} data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get notified first for LE collection drops</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="8f3fc16f-2cab-44fc-97c4-6f700d82b5a2" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="26eeeefd-dae1-4fa0-9fa3-d7bdb64d71a6" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors text-center" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Pro</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="69624a31-4f62-4756-924e-400d176ba688" containerType="regular" prevTag="section" className="px-6 pt-24 pb-0 bg-gradient-to-b from-[#2b253e] to-[#302742]" data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6f9804c7-f3c9-4bea-afd2-6b43dfb76ef2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">Why Production Quality Matters</span>
          </h2>
          {/* Create a self-contained stage with fixed min-height so hover growth doesn't nudge following sections */}
          <SortableContainer dndKitId="6887c0ec-3da1-4697-9fc3-92a51be89dd4" containerType="regular" prevTag="div" className="relative" style={{
          minHeight: '25rem'
        }} data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="0fc623d4-30d7-4a38-8508-e550934a0d1f" containerType="collection" prevTag="div" className="grid gap-8 stats-grid md:grid-cols-3" style={{
            fontFamily: 'Nunito, sans-serif'
          }} data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {stats.map(stat => <motion.div data-magicpath-motion-tag="motion.div" key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 overflow-visible stats-card" initial="hidden" whileInView="show" viewport={{
              once: true,
              amount: 0.4
            }} variants={makeStagger(0.1)} whileHover={{
              scale: 1.02,
              y: -8
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <StatNumber number={stat.number} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                   </div>
                   <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                   </div>
                   {/* Expansion appears visually below the base content but uses a transform so siblings and grid height feel stable */}
                   <div className="card-flyout" aria-hidden="true" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <p className="text-sm text-white/90 bg-white/10 rounded-xl px-4 py-3" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                       <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number === '19.8%' ? 'Streams with premium production quality generate 19.8% longer average watch times and more active chat participation' : stat.number === '3.2x' ? 'Professional production quality converts casual viewers to regular customers 3.2x more effectively than basic setups' : 'Streamlined overlay systems reduce technical interruptions by 47%, keeping your audience engaged throughout every break'}</span>
                     </p>
                   </div>
                   <style data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
           <style data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
       <SortableContainer dndKitId="80606824-986a-40e3-b11d-2265431ae54b" containerType="regular" prevTag="section" className="px-6 pt-0 pb-24 bg-gradient-to-b from-[#302742] to-[#1F1A30]" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="118c9f4b-4a95-4433-9a87-0efb2a756c55" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <span data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get in Touch</span>
           </h2>
           <SortableContainer dndKitId="f4901152-6343-44db-86f2-abe000fb8278" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             {communityCards.map(card => <motion.div data-magicpath-motion-tag="motion.div" key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRiseSoft} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 {/* Icon per card by title for precise replacements without altering other content */}
                 {card.title === 'Join our Newsletter' ? <svg role="img" aria-label="Newsletter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 4.5 6.75v.3l6.86 4.117a2 2 0 0 0 2.28 0L20 7.05v-.3A1.25 1.25 0 0 0 18.25 5.5H5.75A1.25 1.25 0 0 0 4.5 6.75Zm13.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : card.title === 'Follow us on Twitter' ? <svg role="img" aria-label="Twitter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M22 5.92c-.73.32-1.5.54-2.3.64a4.02 4.02 0 0 0 1.76-2.22 8.02 8.02 0 0 1-2.54.98 3.99 3.99 0 0 0-6.8 3.64 11.31 11.31 0 0 1-8.22-4.17 4 4 0 0 0 1.24 5.33c-.62-.08-.63.12-.97.12-.23 0-.47-.02-.69-.07a4 4 0 0 0 3.73 2.77A8.02 8.02 0 0 1 2 18.41 11.32 11.32 0 0 0 8.13 20c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.06 8.06 0 0 0 22 5.92z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : card.title === 'Customize It' ? <svg role="img" aria-label="Customize" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M3 17.25V21h3.75l11-11.02-3.75-3.75L3 17.25Zm17.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : null}
                 <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title === 'Join our Newsletter' ? 'Newsletter Updates' : card.title === 'Follow us on Twitter' ? "We're on Twitter" : card.title === 'Customize It' ? 'Custom Projects' : card.title}</span>
                 </h3>
                 <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                 </p>
                 <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                 </button>
               </motion.div>)}
           </SortableContainer>

           {/* Instagram Subscribe Carousel Card – bottom center within Follow Us. Height equals a card */}
           <SortableContainer dndKitId="b6e9e2aa-ea87-4ceb-95a5-4f42f5a206c2" containerType="regular" prevTag="section" aria-labelledby="insta-subscribe-title" className="mt-12 md:mt-16 mx-auto w-full" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <SortableContainer dndKitId="068764a6-c381-4fe2-8b8f-4496a2a685e5" containerType="regular" prevTag="div" className="bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-8 py-5 md:py-6" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="b6a35dd8-af1a-4320-9561-a1b0ffa7c34b" containerType="regular" prevTag="header" className="mb-4" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <h3 id="insta-subscribe-title" className="text-2xl font-bold mb-4 text-center" data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">Latest on Instagram</span>
                 </h3>
               </SortableContainer>
               <SortableContainer dndKitId="0aa2d1ab-0ddf-48d3-964d-bf39726646de" containerType="regular" prevTag="div" className="relative" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <SortableContainer dndKitId="7952ba01-a52e-4e6a-9744-170d2e744a3e" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1" aria-label="Previous slide" data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="3b952880-4bbd-473f-90ae-e77ac1621cf2" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Previous" onClick={e => {
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
                }} data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <ChevronLeft className="h-4 w-4" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </SortableContainer>
                 </SortableContainer>
                 <SortableContainer dndKitId="1eb734a1-4a83-4161-b595-2dd93a494a26" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1" aria-label="Next slide" data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="6cd04652-f674-4eef-825f-745c92856c46" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Next" onClick={e => {
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
                }} data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <ChevronRight className="h-4 w-4" data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </SortableContainer>
                 </SortableContainer>
                 <ul className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] md:auto-cols-[minmax(240px,1fr)] gap-4 overflow-hidden" data-magicpath-id="352" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   {['one', 'two', 'three', 'four', 'five', 'six'].map((_k, idx) => {
                  const key = `insta-${idx + 1}`;
                  return <li key={key} className="min-w-0" data-magicpath-id="353" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                           <article className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-500 p-0.5" data-magicpath-id="354" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                             <SortableContainer dndKitId="cfa8596c-95df-4f89-8ba1-f34169190049" containerType="regular" prevTag="div" className="rounded-[14px] bg-gradient-to-b from-white/10 to-white/5 p-1.5" data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                               {/* Square tile: enforce 1:1 aspect and single row only */}
                               <SortableContainer dndKitId="8e15ea2b-9c74-4045-8dc0-91b636d58877" containerType="regular" prevTag="figure" className="w-full aspect-square overflow-hidden rounded-lg" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                 <picture data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <img data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                                 </picture>
                                 <SortableContainer dndKitId="dbc1f6e1-8ecb-48a3-ac8c-fd561d48b244" containerType="regular" prevTag="figcaption" className="sr-only" data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <span data-magicpath-id="360" data-magicpath-path="OverlaysUnoLandingPage.tsx">Instagram highlight tile</span>
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
       <SortableContainer dndKitId="1f8befbf-4a18-4176-9475-77dcb008be82" containerType="regular" prevTag="footer" className="px-6 py-16 bg-gradient-to-b from-[#1F1A30] to-[#582864] text-white font-normal" data-magicpath-id="361" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="caafa1d8-7a85-4889-b0bb-5d0587f323b2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="362" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <SortableContainer dndKitId="25f71eed-3ec0-432b-b3b8-9aba1bba0a6e" containerType="regular" prevTag="div" className="flex flex-col items-center text-center" data-magicpath-id="363" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <a href="#" aria-label="overlays.uno home" className="mb-10 mt-4" data-magicpath-id="364" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <h2 className="text-[44px] leading-none font-bold tracking-tight" data-magicpath-id="365" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <span className="sr-only" data-magicpath-id="366" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance</span>
                 <span aria-hidden="true" className="align-middle" data-magicpath-id="367" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break</span>
                 <span aria-hidden="true" className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]" data-magicpath-id="368" data-magicpath-path="OverlaysUnoLandingPage.tsx">Dance</span>
               </h2>
             </a>

             <SortableContainer dndKitId="b65a0e00-051b-4415-99bb-5ed78f29f7ec" containerType="regular" prevTag="nav" aria-label="Footer links" className="mb-4" data-magicpath-id="369" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="c6ee0c6b-0b51-4c33-9e0e-9323a36a7194" containerType="regular" prevTag="ul" className="flex items-center gap-6" data-magicpath-id="370" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <li data-magicpath-id="371" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="372" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-id="373" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
                   </a>
                 </li>
                 <li data-magicpath-id="374" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="375" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-id="376" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
                   </a>
                 </li>
               </SortableContainer>
             </SortableContainer>

             <p className="text-xs text-white/60" data-magicpath-id="377" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <span data-magicpath-id="378" data-magicpath-path="OverlaysUnoLandingPage.tsx">© 2025 All Rights Reserved</span>
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
  return <SortableContainer dndKitId="1ce982f9-aa66-426e-8e44-f518c3abbb6a" containerType="regular" prevTag="div" ref={ref} className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-id="379" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      <span data-magicpath-id="380" data-magicpath-path="OverlaysUnoLandingPage.tsx">{display}</span>
    </SortableContainer>;
}