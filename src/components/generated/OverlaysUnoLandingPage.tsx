import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "f38dd5ac-c283-4431-a3dc-b08ec09f3f13"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "46eb1ac6-453c-4d97-8c17-50de5cc41946"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "3d9c1073-466c-44dd-9cae-25c22e7e8ba7"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "ab0f568f-a8ba-4342-811f-540794624f83"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "627189d3-d5b6-4e3a-b678-0886b0e2a042"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "e51a9d73-6626-4af1-a3d9-c7fcfc9c0a28"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "c46bd9f5-c9db-4908-a58e-368f75710d78"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "24b8843c-d2bb-4105-9c3f-961e679fa0a8"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "41a30ca6-e9ab-4e90-b835-f81c2b758ff8"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "f8b0576a-2ef0-4e36-a131-defb87032bd8"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "3d78765d-9250-4caa-9924-4e188efb202d"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "4d503884-7236-4e32-a2bc-9a1821ce8b0c"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "830345f4-cdf7-47d6-abd2-787e6e0233fa"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "cb3ef2a2-a43c-4540-aa8a-a992648c78d5"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "6d585090-3264-4d31-978d-70c9ce7417f4"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "28adda64-f944-485c-bd3b-a5e681f477e3"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "b1b1c38a-b362-48e3-b41b-5e5c06f0cf8b"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "d7fbc7a9-e74d-4d63-af6a-00822cada29b"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "41e50435-ae01-49da-b8ce-ae5997b283e9"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "8075f5b9-ca37-44d5-991b-8e955b398d54"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Choose Your Style',
  description: 'Pick from your collection or browse our overlay library for a theme—vintage Topps to modern Panini to match your break’s vibe',
  mpid: "2502207b-2785-4a1f-b0f5-99293f76a374"
}, {
  icon: Palette,
  title: 'One-Click Integration',
  description: 'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  mpid: "ca5a6b99-d8af-465d-8a9d-d2d6db27de43"
}, {
  icon: Copy,
  title: 'Go live with control',
  description: 'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  mpid: "4ddd2959-41ca-45cc-bd2d-348d6407176b"
}] as any[];
const stats = [{
  number: '19.8%',
  label: 'Higher Viewer Engagement',
  sublabel: '',
  mpid: "e43dd8d8-72b1-4983-9ffb-7b4729b5f41f"
}, {
  number: '3.2x',
  label: 'Higher Conversion Rates',
  sublabel: '',
  mpid: "55343438-cdde-4ad6-bb13-6993fa215f04"
}, {
  number: '47%',
  label: 'Fewer Technical Issues',
  sublabel: '',
  mpid: "21b29cd4-fa97-44fc-a6c4-923fc0d6b9e7"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join our Newsletter',
  subtitle: 'Stay updated with hobby news and product drops',
  buttonText: 'Join Newsletter',
  color: 'bg-[oklch(78.4%_0.142_246.8)]',
  mpid: "e15512a3-1290-419f-91a5-9f2fa5895909"
}, {
  icon: Youtube,
  title: 'Follow us on Twitter',
  subtitle: 'Follow us for hobby news and product updates',
  buttonText: 'Follow',
  color: 'bg-[oklch(68%_0.16_240)]',
  mpid: "04b9be2f-7f3a-4430-9ad1-a25dc8fe9494"
}, {
  icon: Heart,
  title: 'Customize It',
  subtitle: 'Have something unique in mind? We can help',
  buttonText: 'Reach Out',
  color: 'bg-[oklch(0.510_0.262_276.9)]',
  mpid: "f20cc3be-997c-4e90-b4ce-01ecfe40c8be"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "92aa81e3-0e0f-4198-bcb4-bb83223ebb7e"
}, {
  label: 'Tools',
  mpid: "b96e705f-750f-44c6-a055-3aa61dde1d20"
}, {
  label: 'How It Works',
  mpid: "7e53c322-0d85-4c17-b7f0-4f688805c847"
}, {
  label: 'Demo',
  mpid: "5ee2feb4-7701-44e0-b961-e5a1472aeefa"
}, {
  label: 'Live Breaks',
  mpid: "60458be7-c7f2-4df3-b7cf-ae8c784ff832"
}, {
  label: 'Shop',
  mpid: "f10a3441-d77d-41d6-a913-b01fe7fa9b28"
}, {
  label: 'About',
  mpid: "3f844a48-d0d5-4fa7-9486-ddd8e353d7f3"
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
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
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

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
    mpid: "3171a0bd-b893-4249-b1a6-f856c1ccd4ce"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "8f2186ab-3cb4-49bf-bb9d-45959a0e1284"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "8b402440-9cf4-4e5d-b70a-caf17ff6ff10"
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
      mpid: "9f92c209-aae9-4c94-b805-1ae1676a60d5"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "404a333e-3c32-414d-8b28-236744e3c9ce"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "13429f5e-9244-4e84-95e1-5303f021360c"
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
    return <SortableContainer dndKitId="f789f064-e8ed-4982-a422-ba1744fab5f6" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="a3156570-e7d9-4d42-8843-b912f8972cd0" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => bringToFront('form')} className={`${baseStyles} form-window transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{
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
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="676b2bdc-b882-4ee8-94c6-9ca368608121" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="eb16d3c6-274f-46f6-913f-dc992054fe72" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
        <SortableContainer dndKitId="11d0cb47-8587-4c8f-be4d-4330a1c8f32e" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => bringToFront('nfl')} className={`${baseStyles} nfl-grid transition-[transform,opacity,left,top,width,height] duration-500 ease-in-out`} style={{
        zIndex: zFor('nfl-grid'),
        width: nflFocused ? '80%' : '92%',
        height: nflFocused ? '70%' : '58%',
        left: nflFocused ? '10%' : '17%',
        top: nflFocused ? '15%' : '20%',
        transform: nflFocused ? 'translate(0,0) scale(0.9)' : 'translate(4%, -2%) scale(0.7)',
        transformStyle: 'preserve-3d'
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
        <SortableContainer dndKitId="891e899d-21f7-41df-9136-de78909f07f6" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => bringToFront('phone')} className={`${baseStyles} phone-preview transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{
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
      }} data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="fea50ed3-463f-4b83-86c2-f241a683c7f4" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="1b46a587-d392-4379-a447-ed4da3f1189a" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-[#1F1A30] via-[#582864] to-[#9149c1] text-white font-sans" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="cfb0716a-56ed-42eb-b939-78618c19153a" containerType="regular" prevTag="header" className="bg-gradient-to-b from-[#26213a] to-[#302742] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0a28c0e5-4481-49f0-a508-71df5d7ef2c4" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="45162237-7a73-46c2-a55e-7da988f74137" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="a646c0ad-0370-441d-80f9-080c461f22ba" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="b1d4cdae-c694-4a6d-9cf3-1f4c5fa1374e" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-200 hover:text-white transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="d2be527b-ef7c-4163-a3c6-4b1f6e1677db" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bf0f03a5-604a-440e-9599-ef3301456f68" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="ebfe5250-ba8b-40b5-b914-df520dba825e" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="189886b4-d731-4ef0-9354-dba2c6bca6bc" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="bb1c2c15-4410-4740-a4ac-25e779c5b24f" containerType="regular" prevTag="section" className="relative px-6 py-14" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-700 to-orange-400" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <div className="absolute inset-0 bg-black/70" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <SortableContainer dndKitId="b17475b7-1773-4dfd-b744-7cbd10a1eb26" containerType="regular" prevTag="div" className="relative z-10 max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="7c096a0b-357d-42ad-a26b-b4cbe4e3ccea" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center min-h-[420px] md:min-h-[520px] lg:min-h-[560px]" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="9737dc14-10da-46cc-a1f2-c88372b8ee3a" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} className="space-y-8" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              {/* Dynamic description below the title based on selected hero button */}
              {selectedHero && <p className="text-xl text-gray-200 leading-relaxed max-w-lg transition-opacity duration-300" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">{selectedHero === 'form' ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : selectedHero === 'nfl' ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : 'Stream with BreakDance overlays and get instant promotion to collectors in our Live Breaks directory.'}</span>
                </p>}
              <SortableContainer dndKitId="0a2f5337-beda-41d1-8ce2-90079255f9e8" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="8d2714a4-f48a-4df8-b7be-d64c5ccd01b1" containerType="regular" prevTag="motion.div" className="relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="5b3526e0-5f01-493f-8222-e762388ab27f" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="e587608b-1fe4-41c2-87dd-96a0e67c2c5d" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="aed26134-a153-4557-9526-0b876b56a5c6" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <SortableContainer dndKitId="997a7a66-2c42-4df5-80e6-81096c538bc0" containerType="regular" prevTag="div" ref={heroStageRef} className="relative w-full h-full" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      {/* Back layer – Browser Button */}
                      <SortableContainer dndKitId="c8dae999-2877-4808-b026-641e009cbb75" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => {
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
                    }} className={`${baseStyles} form-window transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{
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
                        <SortableContainer dndKitId="3b231c09-5c46-4815-be07-4ac1cb3883cc" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <SortableContainer dndKitId="a7aba582-0528-4491-8231-695db8bc140d" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                      <SortableContainer dndKitId="fc64d930-666e-46a2-82e5-3f75093ab533" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => {
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
                    }} className={`${baseStyles} nfl-grid transition-[transform,opacity,left,top,width,height] duration-500 ease-in-out`} style={{
                      zIndex: zFor('nfl-grid'),
                      width: nflFocused ? '80%' : '92%',
                      height: nflFocused ? '70%' : '58%',
                      left: nflFocused ? '10%' : '17%',
                      top: nflFocused ? '15%' : '20%',
                      transform: nflFocused ? 'translate(0,0) scale(0.9)' : 'translate(4%, -2%) scale(0.7)',
                      transformStyle: 'preserve-3d'
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
                      <SortableContainer dndKitId="e7668345-d296-402d-8375-ae4d65e63a63" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => {
                      setNflFocused(false);
                      const clicked: 'phone' = 'phone';
                      const clickedId = 'phone-preview';
                      setSelectedHero(clicked);
                      setRecency(prev => {
                        const next = prev.filter(id => id !== clickedId);
                        next.unshift(clickedId);
                        return next;
                      });
                    }} className={`${baseStyles} phone-preview transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{
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
                        <SortableContainer dndKitId="65a791be-681d-4076-84b6-115764620dfc" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 border border-white/10" aria-hidden="true" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute left-0 top-[18%] -translate-x-1/2 h-10 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute right-0 top-[26%] translate-x-1/2 h-6 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute right-0 top-[36%] translate-x-1/2 h-14 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <div className="w-full h-full rounded-[22px] bg-black" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                        </SortableContainer>
                      </SortableContainer>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c05436fb-f5ff-413b-be22-edcad652dda2" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c1b39113-0697-4272-b67c-c66f1700b374" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="59f3db66-1e38-4a2f-84fe-8e099736daf4" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-gradient-to-b from-[#222032] to-[#2a2338]" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f463067b-5fa0-44fc-99bc-1f00fd79ad9b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="262930ba-76a1-4058-91ee-b03261d645dc" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.6
          }} variants={fadeRiseMobile} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="a2ca73fb-6d5d-4f51-a9e1-13e4e40c9bfb" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="75679470-eb78-4001-b733-807d74ec994f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="25de8ab7-91a7-40ad-8597-690af8529b0f" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="b2e28a20-b374-407c-a790-cd48cc9347a1" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="26fd46f1-2ffb-42be-bf55-7654e3544cce" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="947c75d9-5752-4e3c-a115-a59682781158" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="215b7d71-678c-413b-9630-8422222b4538" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="052f646f-299f-46cf-aa7c-9b767e2bfcf3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="b1bbad3d-ad13-4fa0-be6a-c483c7ef574f" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="e71d2285-ed4e-4430-bfef-67e7a7ee04e2" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="98178363-53db-465d-a2f7-188a0c9311ab" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="a69edf34-ddc5-4ae9-b493-3865973edf1e" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2a2338] to-[#2b253e] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f9dc4862-bb13-4003-8a12-7aafebe23c73" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8dd51ff1-6b9d-4c59-be3d-00e3febcd7a2" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="239f531c-356a-42d0-aa4a-dd81579aa9dd" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="84868056-f8a8-4f4f-92fe-d2c1f948a035" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ea3ebba9-d09a-4119-b834-c7c2b7f8d304" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="8fc48322-c72c-4fc7-a4b6-5766aca416e6" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="cdd726c4-a408-4ac6-8574-8b211035a19b" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="a8fa70d1-ef58-497d-a45d-2cd5e40e7f04" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="3cc4253a-c2ff-42bd-8b8d-fa8d0beb8c9a" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="aa5c4374-b606-421b-8a5c-855255dc7f00" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="627d5bfa-f3d7-41fe-b4e0-34d3828b2bb6" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2b253e] to-[#302742] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4e011bf1-d994-41d9-8302-9976e20ca171" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8356a112-e33e-401c-8f84-d03da7e190be" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="397b00b5-a6e5-4054-a01a-fc3f06b94aa7" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8e822e85-39ef-4692-b461-1699dd91f6d5" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="97efc7b9-e882-48fb-8d63-b75eb2b08ff4" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="12a546f3-9c8b-47fe-be5f-9a4a2482059b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="ffe4602c-3ebb-4ab8-8273-c60b67108759" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="737426ce-204b-47af-b7d9-df4f77c3180d" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="5f0645e8-425a-4eec-bbe5-a3fc9aa4cbd5" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="5b810325-5ae8-45ec-9134-3fb115804371" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="c37cb03f-92d5-4bb3-8c96-85f50d588b10" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4bbeba22-4cf7-4ff2-aa08-dec5b0c92303" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ddf1af80-f19f-4d52-8812-eb95f447e565" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="bbe08fcb-de43-4ff9-ba9d-67373f377d7a" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="13259eac-e658-4898-b691-987f418ab8f3" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="85a3e23e-2ea7-4222-af81-9c7921c35679" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="ab7df32a-ab26-4d92-9f66-7a633da7bd34" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="30c04433-f012-48db-88e0-a57b89467238" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="8c630f27-25d0-41ee-9cc3-aade099e2c1a" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f594714e-6a60-4622-9867-011713b4efc3" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="fa2c0254-da80-431f-8cd9-1ba0a7ee1241" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] via-[#38305a] to-[#43305b]" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1d7465e6-7c70-472e-ad9e-36101067b999" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d4e4504b-51a7-4cf3-af74-56e1deb82811" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d09485f8-8898-436c-ad31-8f968b688d4e" containerType="regular" prevTag="motion.div" className="space-y-8" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">Go live. Get featured. Stand out.</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">Every BreakDance overlay automatically features your stream in our Live Breaks directory, driving qualified traffic to your channel</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="4596ee33-16d7-4267-8410-6b99c01243bd" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="63013f55-daea-46e5-9940-1b450d5ab350" containerType="regular" prevTag="motion.div" className="bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 rounded-3xl p-12 flex items-center justify-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8e24f01c-6584-4bbd-bb86-810f3bc347cc" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="fe557b9b-d57f-41d9-a585-8f1fee152486" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="ad03d437-3888-4789-aba7-1558e3789075" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="494c0514-4ab6-4705-a60a-98e3978f5a8a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get streaming like a pro in under 5 minutes with our streamlined process - for breakers at every level</span>
          </p>
          
          <SortableContainer dndKitId="1c62d470-7995-4c9a-8eb5-2b8053495e69" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} transition={{
            delay: index * 0.12,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>

          {/* Instagram Subscribe Carousel Card moved to Follow Us section below */}

          <SortableContainer dndKitId="d24c1b67-e7ee-4fd0-b125-f0394cee52de" containerType="regular" prevTag="button" className="mt-16 mb-4 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-bold text-xl lg:text-2xl text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="c9cbb243-8803-4e45-9913-0662e7f77ee2" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="bda6aacb-af04-4933-a86a-8ee51394ae1f" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">Level Up Your Production</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.</span>
          </p>
          
          <SortableContainer dndKitId="bfb37174-dd15-4ac9-ba3b-c8a54f617425" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="caab35fc-71ec-440e-a735-1752dc84635f" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 relative inline-flex" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {/* Slider track */}
              <div className="absolute inset-2 rounded-xl bg-white/5" aria-hidden="true" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              {/* Sliding handle */}
              <span className={`absolute top-2 h-[calc(100%-1rem)] rounded-xl bg-orange-500 shadow-lg will-change-transform transition-transform duration-300 ease-out`} style={{
              width: 'calc(50% - 0.25rem)',
              transform: pricingToggle === 'monthly' ? 'translateX(0)' : 'translateX(100%)'
            }} aria-hidden="true" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <SortableContainer dndKitId="033e6214-70f7-4af0-ad74-92b42627e309" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${pricingToggle === 'monthly' ? 'text-white' : 'text-gray-300 hover:text-white'}`} aria-pressed={pricingToggle === 'monthly'} aria-label="Select monthly pricing" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="714642a7-1fcc-43f2-ad8b-8c442bee2770" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${pricingToggle === 'yearly' ? 'text-white' : 'text-gray-300 hover:text-white'}`} aria-pressed={pricingToggle === 'yearly'} aria-label="Select yearly pricing" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="0bad8c15-d7f4-4547-9d1e-95b660cf2d28" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="98fa5014-de9f-45c6-84c0-397c218a0e74" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-white/10 h-full" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a8ac8249-000a-4621-a1c4-976174bde4c2" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Starter</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get started and explore BreakDance with no cost or no commitment</span>
                </p>
                <SortableContainer dndKitId="c6424f8d-86e2-435c-a234-242103a921db" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
                </SortableContainer>
                <SortableContainer dndKitId="a8bf56a1-713f-43d6-86c5-45c570579cdc" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the overlay library</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the ‘break editor’ ui</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save unlimited overlays to your collection</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">Limited access to  break tools dashboard</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="6d248688-84d6-4cb7-8533-23bd981b3193" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="42b6684e-3012-4ee8-93b0-b128df376da8" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl font-semibold text-lg text-center hover:bg-slate-800 transition-colors duration-150" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">Start Free</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="10312d8b-5a46-46ed-a5cb-cdc54b2c377f" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="12a3cfe1-0fbd-467b-90ca-7a9da12a49e8" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {pricingToggle === 'yearly' && <SortableContainer dndKitId="4b6528bd-037f-48bd-9c20-b91170f2aa3e" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 21%</span>
                  </SortableContainer>}
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Pro</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Best for regular users who want to experience the full functionality of the platform</span>
                </p>
                <SortableContainer dndKitId="fd64860f-db88-4394-b37e-5f33b9dc6ce7" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8 h-12 leading-[48px]" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$3.99' : '$37.99'}</span>
                  <span className="text-lg text-gray-400 font-normal" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    /{pricingToggle === 'monthly' ? 'month' : 'year'}
                  </span>
                </SortableContainer>
                <SortableContainer dndKitId="5e24018c-bb4b-4561-9afb-79ce5a2b62cb" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to break tools dashboard</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get featured every time you go live</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get notified first for LE collection drops</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="0ee715fc-380b-40b5-9895-f1ff67cd927f" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="f064bf2d-29af-4fa8-947a-c9dd008540cd" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors text-center" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Pro</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="198352f1-5518-4475-9890-3b204728cb3b" containerType="regular" prevTag="section" className="px-6 pt-24 pb-0 bg-gradient-to-b from-[#2b253e] to-[#302742]" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="81257cd8-e324-428b-ba9e-db12ef976216" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">Why Production Quality Matters</span>
          </h2>
          {/* Create a self-contained stage with fixed min-height so hover growth doesn't nudge following sections */}
          <SortableContainer dndKitId="09aa723b-8f75-42dc-bfe4-38a5a6aa1ef1" containerType="regular" prevTag="div" className="relative" style={{
          minHeight: '25rem'
        }} data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="8b3ab05c-7e3c-4d55-a893-800c99d6d01d" containerType="collection" prevTag="div" className="grid gap-8 stats-grid md:grid-cols-3" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {stats.map(stat => <motion.div data-magicpath-motion-tag="motion.div" key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 overflow-visible stats-card" initial="hidden" whileInView="show" viewport={{
              once: true,
              amount: 0.4
            }} variants={fadeRise} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <StatNumber number={stat.number} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                   </div>
                   <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                   </div>
                   {/* Expansion appears visually below the base content but uses a transform so siblings and grid height feel stable */}
                   <div className="card-flyout" aria-hidden="true" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <p className="text-sm text-white/90 bg-white/10 rounded-xl px-4 py-3" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                       <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number === '19.8%' ? 'Streams with premium production quality generate 19.8% longer average watch times and more active chat participation' : stat.number === '3.2x' ? 'Professional production quality converts casual viewers to regular customers 3.2x more effectively than basic setups' : 'Streamlined overlay systems reduce technical interruptions by 47%, keeping your audience engaged throughout every break'}</span>
                     </p>
                   </div>
                   <style data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
           <style data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
       <SortableContainer dndKitId="2563fc30-878f-4649-9757-ee319ab74afb" containerType="regular" prevTag="section" className="px-6 pt-0 pb-24 bg-gradient-to-b from-[#302742] to-[#1F1A30]" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="0fcd9908-5387-4250-b157-ede1ca455307" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <span data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get in Touch</span>
           </h2>
           <SortableContainer dndKitId="3bc805fc-821b-4feb-8332-2481ab320b28" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             {communityCards.map(card => <motion.div data-magicpath-motion-tag="motion.div" key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 {/* Icon per card by title for precise replacements without altering other content */}
                 {card.title === 'Join our Newsletter' ? <svg role="img" aria-label="Newsletter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 4.5 6.75v.3l6.86 4.117a2 2 0 0 0 2.28 0L20 7.05v-.3A1.25 1.25 0 0 0 18.25 5.5H5.75A1.25 1.25 0 0 0 4.5 6.75Zm13.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : card.title === 'Follow us on Twitter' ? <svg role="img" aria-label="Twitter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M22 5.92c-.73.32-1.5.54-2.3.64a4.02 4.02 0 0 0 1.76-2.22 8.02 8.02 0 0 1-2.54.98 3.99 3.99 0 0 0-6.8 3.64 11.31 11.31 0 0 1-8.22-4.17 4 4 0 0 0 1.24 5.33c-.62-.08-.63.12-.97.12-.23 0-.47-.02-.69-.07a4 4 0 0 0 3.73 2.77A8.02 8.02 0 0 1 2 18.41 11.32 11.32 0 0 0 8.13 20c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.06 8.06 0 0 0 22 5.92z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : card.title === 'Customize It' ? <svg role="img" aria-label="Customize" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M3 17.25V21h3.75l11-11.02-3.75-3.75L3 17.25Zm17.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : null}
                 <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title === 'Join our Newsletter' ? 'Newsletter Updates' : card.title === 'Follow us on Twitter' ? "We're on Twitter" : card.title === 'Customize It' ? 'Custom Projects' : card.title}</span>
                 </h3>
                 <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                 </p>
                 <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                 </button>
               </motion.div>)}
           </SortableContainer>

           {/* Instagram Subscribe Carousel Card – bottom center within Follow Us. Height equals a card */}
           <SortableContainer dndKitId="9fa9ff91-fc4c-4c18-b411-6fb6b091166c" containerType="regular" prevTag="section" aria-labelledby="insta-subscribe-title" className="mt-12 md:mt-16 mx-auto w-full" data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <SortableContainer dndKitId="0fdd5350-f526-4c3e-be21-31a490ba6e04" containerType="regular" prevTag="div" className="bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-8 py-5 md:py-6" data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="e22749be-73b1-4126-83c9-a5fc598072f5" containerType="regular" prevTag="header" className="mb-4" data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <h3 id="insta-subscribe-title" className="text-2xl font-bold mb-4 text-center" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">Latest on Instagram</span>
                 </h3>
               </SortableContainer>
               <SortableContainer dndKitId="12b4389c-ca2e-4c3b-bf9b-23ba41ea96c6" containerType="regular" prevTag="div" className="relative" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <SortableContainer dndKitId="6e2cb0c3-a223-4d28-89cd-a523b99680af" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1" aria-label="Previous slide" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="32a818ac-d7f8-4ae8-8846-67cc83bf04f1" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Previous" onClick={e => {
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
                }} data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <ChevronLeft className="h-4 w-4" data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </SortableContainer>
                 </SortableContainer>
                 <SortableContainer dndKitId="9284db41-d3a3-4def-8334-c0a1434eb336" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1" aria-label="Next slide" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="c5730a95-ff7d-437e-bb0f-b9abcf25e0c3" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Next" onClick={e => {
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
                }} data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <ChevronRight className="h-4 w-4" data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </SortableContainer>
                 </SortableContainer>
                 <ul className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] md:auto-cols-[minmax(240px,1fr)] gap-4 overflow-hidden" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   {['one', 'two', 'three', 'four', 'five', 'six'].map((_k, idx) => {
                  const key = `insta-${idx + 1}`;
                  return <li key={key} className="min-w-0" data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                           <article className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-500 p-0.5" data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                             <SortableContainer dndKitId="d34979e6-7231-4969-8890-99585a866863" containerType="regular" prevTag="div" className="rounded-[14px] bg-gradient-to-b from-white/10 to-white/5 p-1.5" data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                               {/* Square tile: enforce 1:1 aspect and single row only */}
                               <SortableContainer dndKitId="63c90802-0fb0-42ae-baf7-6552a4f9c138" containerType="regular" prevTag="figure" className="w-full aspect-square overflow-hidden rounded-lg" data-magicpath-id="352" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                 <picture data-magicpath-id="353" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <img data-magicpath-id="354" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                                 </picture>
                                 <SortableContainer dndKitId="d45dc7a6-b153-44ec-8e90-d49d4a670704" containerType="regular" prevTag="figcaption" className="sr-only" data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <span data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">Instagram highlight tile</span>
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
       <SortableContainer dndKitId="8bc5d671-6682-4ed0-bfde-348e506bf47c" containerType="regular" prevTag="footer" className="px-6 py-16 bg-gradient-to-b from-[#1F1A30] to-[#582864] text-white font-normal" data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="20158d15-c930-46a0-809e-e05b031e7301" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <SortableContainer dndKitId="7aa837d0-7df0-4e93-9bbe-dd8c05a67586" containerType="regular" prevTag="div" className="flex flex-col items-center text-center" data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <a href="#" aria-label="overlays.uno home" className="mb-10 mt-4" data-magicpath-id="360" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <h2 className="text-[44px] leading-none font-bold tracking-tight" data-magicpath-id="361" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <span className="sr-only" data-magicpath-id="362" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance</span>
                 <span aria-hidden="true" className="align-middle" data-magicpath-id="363" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break</span>
                 <span aria-hidden="true" className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]" data-magicpath-id="364" data-magicpath-path="OverlaysUnoLandingPage.tsx">Dance</span>
               </h2>
             </a>

             <SortableContainer dndKitId="496c7dd9-1536-477c-abcf-1bf57b4dc055" containerType="regular" prevTag="nav" aria-label="Footer links" className="mb-4" data-magicpath-id="365" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="1ad47faa-e3b8-478c-9a36-a10bad676e1b" containerType="regular" prevTag="ul" className="flex items-center gap-6" data-magicpath-id="366" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <li data-magicpath-id="367" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="368" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-id="369" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
                   </a>
                 </li>
                 <li data-magicpath-id="370" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="371" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-id="372" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
                   </a>
                 </li>
               </SortableContainer>
             </SortableContainer>

             <p className="text-xs text-white/60" data-magicpath-id="373" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <span data-magicpath-id="374" data-magicpath-path="OverlaysUnoLandingPage.tsx">© 2025 All Rights Reserved</span>
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
  return <SortableContainer dndKitId="d48bc056-4d32-4afa-ade6-804c8c38a6f7" containerType="regular" prevTag="div" ref={ref} className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-id="375" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      <span data-magicpath-id="376" data-magicpath-path="OverlaysUnoLandingPage.tsx">{display}</span>
    </SortableContainer>;
}