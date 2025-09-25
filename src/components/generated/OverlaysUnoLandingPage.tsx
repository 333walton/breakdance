import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "79769cee-0d61-4069-9111-3443e9d1a9db"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "c86bd4e0-1a08-479b-9a8e-710962913e5b"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "8546efac-2577-40be-b237-e44edc40a4c3"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "5287d8dd-95a8-4fe8-9a30-39fe84a0efec"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "0e926773-e4bc-4b7d-a07d-62d7c7199915"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "18058eea-6f1c-414b-8612-a642db870cf1"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "d31e5da5-a5d7-46df-90e0-8b5ac50636a8"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "00891d72-1744-439c-9944-6ec3035a44dd"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "24cd58b4-c16b-405b-81c6-16920560d737"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "b9e88abc-96e2-44a7-84d9-f27a525197fa"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "cbed5b9f-c3da-4fa3-9ae1-6559ea807a06"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "3fe58c9f-b82f-46b4-88ff-a1bcd76b268a"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "a43d4a2d-e07b-4d59-8481-d288a2cc87f7"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "d85c6eaa-0ae0-4e24-8e73-aabf1dd42e86"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "99c9d926-2f23-40d9-aabd-1b223916336b"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "3a00e1c2-0c07-42d3-adce-d115eb96663c"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "1fb3193a-bbb5-43ae-9b22-6257bf311434"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "dc4239b1-e43b-46c2-98bb-5f93dc4a4bd7"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "8f3a6b4b-1a78-42ea-ba17-7b8e547a8fc9"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "f219051e-936f-4304-95d4-c7b29153159e"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Choose Your Style',
  description: 'Pick from your collection or browse our overlay library for a theme—vintage Topps to modern Panini to match your break’s vibe',
  mpid: "db35daf2-aafe-4ad3-b92b-97b40a2e7842"
}, {
  icon: Palette,
  title: 'One-Click Integration',
  description: 'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  mpid: "bcd1ad91-7ce0-4efd-8661-2bdbe84ada83"
}, {
  icon: Copy,
  title: 'Go live with control',
  description: 'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  mpid: "5152e6c9-452f-4fc5-8a0d-e978fa42e63f"
}] as any[];
const stats = [{
  number: '19.8%',
  label: 'Higher Viewer Engagement',
  sublabel: '',
  mpid: "02f16d39-1609-473d-aa14-9bfa8d773147"
}, {
  number: '3.2x',
  label: 'Higher Conversion Rates',
  sublabel: '',
  mpid: "b04cc806-d6c5-4737-8515-9a327b68bec6"
}, {
  number: '47%',
  label: 'Fewer Technical Issues',
  sublabel: '',
  mpid: "04709dc9-a469-4efe-8a4d-4d08d03418e4"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join our Newsletter',
  subtitle: 'Stay updated with hobby news and product drops',
  buttonText: 'Join Newsletter',
  color: 'bg-[oklch(78.4%_0.142_246.8)]',
  mpid: "5bc3b0af-bd21-4497-af79-db496c010364"
}, {
  icon: Youtube,
  title: 'Follow us on Twitter',
  subtitle: 'Follow us for hobby news and product updates',
  buttonText: 'Follow',
  color: 'bg-[oklch(68%_0.16_240)]',
  mpid: "809b4e49-c79f-4bda-9e94-c2a75581ee5f"
}, {
  icon: Heart,
  title: 'Customize It',
  subtitle: 'Have something unique in mind? We can help',
  buttonText: 'Reach Out',
  color: 'bg-[oklch(0.510_0.262_276.9)]',
  mpid: "b88245a5-c262-449a-b9df-2292230b2688"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "59974a28-c395-4f09-a106-14ebd44e7583"
}, {
  label: 'Tools',
  mpid: "372a75e0-51ca-4a66-a121-d39c48a62705"
}, {
  label: 'How It Works',
  mpid: "73c59937-e2ed-48cb-93a9-51dde36c3572"
}, {
  label: 'Demo',
  mpid: "0c34c349-0e19-4af9-a29c-2dce8130f9cf"
}, {
  label: 'Live Breaks',
  mpid: "e0913cbe-5f55-418e-bb4e-de66fd718f24"
}, {
  label: 'Shop',
  mpid: "a903ae11-5d0f-41bd-8b61-971a0b5c4d02"
}, {
  label: 'About',
  mpid: "6ce8146d-4c58-41de-bb8d-e902b195e78b"
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
    mpid: "f9ad65dc-c032-4ead-b3d1-d42d48597f05"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "746d519f-19ec-43b0-8512-de276245aa6f"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "397dd0d3-8621-4272-8b07-943bdd2dd88f"
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
      mpid: "54157967-0a0b-46ff-973a-475cfe2994c0"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "513073c6-0ca1-47c1-bbcc-9eeff23722df"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "1b20d88c-b9c1-41a2-b751-9c73b6dd5146"
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
    return <SortableContainer dndKitId="5dd2aaba-bb90-4b3a-b0c9-6036a6dad89a" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="6714f75b-c19f-4f07-af5d-8d92c50857ee" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => bringToFront('form')} className={`${baseStyles} form-window transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-[transform,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
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
          <SortableContainer dndKitId="d955dd66-209d-4e64-b944-1010c1e87b89" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="24558279-85b6-4acb-ae19-01a8681949ec" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
        <SortableContainer dndKitId="6d34bc14-769b-4896-8bad-a07213c1414b" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => bringToFront('nfl')} className={`${baseStyles} nfl-grid transition-[transform,opacity,left,top,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
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
        <SortableContainer dndKitId="4e414ce9-f01c-4e73-92bc-46d645788c9c" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => bringToFront('phone')} className={`${baseStyles} phone-preview transition-opacity duration-300 ${nflFocused ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-[transform,filter,box-shadow,background-color,border-color] duration-500 ease-in-out hover:bg-white/10 hover:shadow-lg hover:border-white/20`} style={{
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
          <SortableContainer dndKitId="6d01a90c-e17d-4313-beb4-d334ddb1732d" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="8b26050c-cba2-4d47-ae8b-08c1fb930afd" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-[#1F1A30] via-[#582864] to-[#9149c1] text-white font-sans" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="d79beaec-22d9-4755-9f16-5793f14b3a1f" containerType="regular" prevTag="header" className="bg-gradient-to-b from-[#26213a] to-[#302742] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="923d1509-0aff-4f49-aaba-c4ad5eaa3d1b" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d94fdf0d-8a69-46c3-955f-92c850e50223" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="6bfa426f-327a-4cd2-b219-c9fff2852d88" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="d1935d0a-00a9-4de1-a433-6b8c2f75b320" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-200 hover:text-orange-300 transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="dce9f0a4-15f2-4e98-82e6-ec0765941b8a" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="61d1a2fa-6639-49f4-9569-29453b01abcf" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="37c79621-7e6c-4cbb-96e1-9a1fca36d530" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="b4ae5de5-f537-49c2-8548-5173c2769c69" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="558476ec-61cf-44d5-aa57-8cff96825d9d" containerType="regular" prevTag="section" className="relative px-6 py-14" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-700 to-orange-400" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <div className="absolute inset-0 bg-black/70" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <SortableContainer dndKitId="78a7df7e-9c70-41f8-af5e-9f0121568804" containerType="regular" prevTag="div" className="relative z-10 max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a92d9022-334b-43ea-a2c8-460a2f81c81c" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center min-h-[420px] md:min-h-[520px] lg:min-h-[560px]" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="58d65ea9-961b-4a8b-93c6-c01d8e8e9185" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="show" viewport={{
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
              <SortableContainer dndKitId="23c26a5c-df81-441e-a911-6789f881fc8f" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="40f53d5c-c09f-4ec7-a6b9-3e47e149f876" containerType="regular" prevTag="motion.div" className="relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="832f51c3-3099-4c98-827b-45006b2f8ba5" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="5310928b-726e-49e3-8f63-569cee82aac5" containerType="regular" prevTag="div" className={`relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl border border-white/10 p-6 sm:p-8 transition-colors duration-500 ease-in-out ${selectedHero === 'nfl' ? 'bg-gradient-to-b from-[#1c172b]/80 to-[#231b34]/70' : 'bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40'}`} style={{
                perspective: 1200
              }} data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="3894f859-bf4e-4204-b421-1f89a68d14be" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <SortableContainer dndKitId="4956f190-1d5d-4b93-a759-8fee27632931" containerType="regular" prevTag="div" ref={heroStageRef} className="relative w-full h-full" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      {/* Back layer – Browser Button */}
                      <SortableContainer dndKitId="ab9f3139-b40e-4861-b7ff-23bd9ae63bd3" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => {
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
                        <SortableContainer dndKitId="a060e8dc-6168-4c01-8e01-079290d610f9" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <SortableContainer dndKitId="3c8fdeab-0d26-439d-ae68-2e41cb301418" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                      <SortableContainer dndKitId="324cb47f-fe7f-47a0-9651-236c5a137793" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => {
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
                      <SortableContainer dndKitId="85143629-bd64-4c76-b6fe-af545f272ec4" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => {
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
                        <SortableContainer dndKitId="3a626658-7ccd-41be-a681-4358e767737c" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 border border-white/10" aria-hidden="true" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute left-0 top-[18%] -translate-x-1/2 h-10 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute right-0 top-[26%] translate-x-1/2 h-6 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <span className="absolute right-0 top-[36%] translate-x-1/2 h-14 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          <div className="w-full h-full rounded-[22px] bg-black" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                        </SortableContainer>
                      </SortableContainer>

                      {/* Bottom-center dots indicator for NFL selected */}
                      {selectedHero === 'nfl' ? <SortableContainer dndKitId="473cb3ef-3b3c-4b57-a308-697e39f8a120" containerType="regular" prevTag="div" className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

          <SortableContainer dndKitId="2ea5ce80-f975-485c-b426-90e9d32bb05a" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="59b0dffb-0da1-4f41-a1fe-5f05be24ad79" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
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
      <SortableContainer dndKitId="e86c4134-a9b4-461d-b151-760973b70f98" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-gradient-to-b from-[#222032] to-[#2a2338]" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1b621b79-a833-4fe1-9141-88a1c7422aec" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="44c73e13-1826-4340-a678-f2b054ce0d9e" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.6
          }} variants={fadeRiseMobile} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="af2fd1e3-bd09-4b00-be04-e1bc6854bf6f" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6a25212b-a186-4bbe-9b5c-55cf8eab14f1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2f0457da-3bcb-455d-ae07-09c51fc8d8e3" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="6d2b6d64-924a-475f-92ec-a446cc936fc6" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8b0ab29f-8905-409f-8768-d28aabdbdee5" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="c97821e1-b890-421a-ae6c-81aaf9cbc0eb" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="f74dde87-147a-4569-9a5a-b7dd67cd40f8" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="7cc83322-ab92-4a0d-9383-70209d7bccd3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="3c1ab7d0-c66b-4422-bc94-788e604569b5" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="298fc7b9-d45b-40b4-8c3a-c5c27fc3f3a4" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="20b95b72-2955-405e-9876-3763c1d6d76b" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
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
      <SortableContainer dndKitId="9c75a05c-ca9f-4281-b1c8-9cbc7b6c9140" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2a2338] to-[#2b253e] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f7874e1c-cb00-409b-b060-f3bd3e49a6a6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="04319408-62e2-4b73-ab6c-3ef61c8abc06" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="d7f1ec45-c9f3-49eb-a416-caac3829f203" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bda2dfeb-a3a5-4692-b030-10e5f724e577" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="6946f15a-502a-4190-820b-f7438cc9d7a3" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="99d639b8-505d-4adb-b3bc-a6a8fcea5efa" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="a4e04915-9ea6-4f92-858c-4600af51d1c4" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="fd2e6db9-d6f9-4e17-8961-f6ce1b27ba55" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b33ea197-b7ca-42d6-ac4a-b35937796a39" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="b6459015-0f4f-4e7a-8e56-1a002cddbdb8" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
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
      <SortableContainer dndKitId="84ee07d7-310b-458a-8bea-0eb5038cb436" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2b233e] to-[#302742] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="47d0bb0a-7e44-4ea9-bfd5-194b7c4d3a0c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="24c6d5ba-e91d-43ab-b11f-fe18afbc1794" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="9b748f39-898d-4ceb-8217-3b5a5c4ce286" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="9497e1a9-fc4d-4c88-8aaa-d01dc2532d4f" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="2dbeb921-4a8c-4168-a14d-5b7c9d63eca9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="aacd7749-ca42-4db3-862e-b7c9652f90de" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="6e1521be-8e56-437d-a24f-cb6fa7bbf9f9" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="b1ed41ac-7b40-4a12-bb83-e796a478206f" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="623fdd1b-ea11-4983-a781-ccd0944c530c" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="0c172e2e-1996-44f8-93b3-90d52d1ee1a4" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
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
      <SortableContainer dndKitId="18ceb294-0e89-4543-a048-2856c3186a78" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="da3159e9-7dd6-40b4-b1f4-185edff0fb8c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0307fa96-e70e-468f-a2f1-c6e238bdcede" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="7d704867-51a9-46a4-8e2d-97f66c0dc233" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="2df8a372-e8a5-4e43-a370-e4331ac89d98" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f7b3da8c-611b-4621-8103-59f22aae0131" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="8d24a647-8e35-43d8-b76b-ef76b99334c1" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="2b7e3011-689d-4ec4-82f9-dc23da811e6c" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="55150aad-4304-45fe-941b-2a5ec395da3e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="9da4b71c-d614-467e-a265-0f8cdd6a5da0" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
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
      <SortableContainer dndKitId="5e4e9610-e9cd-43b5-86f5-f16c79252dcb" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] via-[#38305a] to-[#43305b]" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ca688341-b9e0-45bf-b52d-9e5e014e7071" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9887caf4-d91a-4620-8b71-64f1aef1ac6a" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="6404e593-0bda-4008-a26e-94ceeb82de8e" containerType="regular" prevTag="motion.div" className="space-y-8" initial="hidden" whileInView="show" viewport={{
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
              <SortableContainer dndKitId="2836f6d3-c96c-4cfc-be98-9b9f7aef1cfa" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="ba8081fe-4a5a-4c69-b152-0bb4e53d6021" containerType="regular" prevTag="motion.div" className="bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 rounded-3xl p-12 flex items-center justify-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="f420b1be-529b-48be-9957-a6dc1e0434df" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="839e2783-aa1d-432b-882a-2c5506d522ef" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="e5fa5b62-4c9a-45a0-9e5a-713d5405c5b8" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="cd2b8b4d-32b5-43ea-bf86-0c7bd4dbaf9d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get streaming like a pro in under 5 minutes with our streamlined process - for breakers at every level</span>
          </p>
          
          <SortableContainer dndKitId="3000c2db-c697-468d-bc22-e3ba5230b1c6" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

          <SortableContainer dndKitId="bbb33490-c6b9-4a55-b112-3be312b6cc56" containerType="regular" prevTag="button" className="mt-16 mb-4 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-bold text-xl lg:text-2xl text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="a52b8869-566a-4d86-92c9-08b741ed29d7" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4405cb26-ff9c-433a-9f19-be5aae360fb0" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">Level Up Your Production</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.</span>
          </p>
          
          <SortableContainer dndKitId="268fbb96-d665-493e-8271-7170a0c1c577" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="30ab26be-c383-431b-a894-73ee41470302" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 relative inline-flex" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {/* Slider track */}
              <div className="absolute inset-2 rounded-xl bg-white/5" aria-hidden="true" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              {/* Sliding handle */}
              <span className={`absolute top-2 h-[calc(100%-1rem)] rounded-xl bg-orange-500 shadow-lg will-change-transform transition-transform duration-300 ease-out`} style={{
              width: 'calc(50% - 0.25rem)',
              transform: pricingToggle === 'monthly' ? 'translateX(0)' : 'translateX(100%)'
            }} aria-hidden="true" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <SortableContainer dndKitId="52ad08f4-cc9e-4a15-94a8-ac89945e65f9" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${pricingToggle === 'monthly' ? 'text-white' : 'text-gray-300 hover:text-white'}`} aria-pressed={pricingToggle === 'monthly'} aria-label="Select monthly pricing" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="a0e32c0e-60e2-492f-873c-cecd90809003" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${pricingToggle === 'yearly' ? 'text-white' : 'text-gray-300 hover:text-white'}`} aria-pressed={pricingToggle === 'yearly'} aria-label="Select yearly pricing" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c773f73a-339d-463e-ba74-762f0e9cc828" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="2d743223-571c-410e-979b-87928e0371b0" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-white/10 h-full" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="3104d8f8-655b-44c9-a21f-490b8ca32339" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Starter</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get started and explore BreakDance with no cost or no commitment</span>
                </p>
                <SortableContainer dndKitId="0836e19f-8934-4968-a953-125447d332fd" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
                </SortableContainer>
                <SortableContainer dndKitId="2d94a9bf-858a-4b8f-83e0-5835669b6134" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the overlay library</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the ‘break editor’ ui</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save unlimited overlays to your collection</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">Limited access to  break tools dashboard</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="a70dc53d-502b-407b-aad1-258aa03a56db" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="8b4d43d6-b31a-4852-896e-b632b04af41c" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl font-semibold text-lg text-center hover:bg-slate-800 transition-colors duration-150" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">Start Free</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="53c99186-a185-45d3-99a4-eaf64fb108e0" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bf226817-5dd0-4688-a5ce-5f45ae56f070" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {pricingToggle === 'yearly' && <SortableContainer dndKitId="c41e5640-6af5-4523-a418-890bc74f86bd" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 21%</span>
                  </SortableContainer>}
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Pro</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">Best for regular users who want to experience the full functionality of the platform</span>
                </p>
                <SortableContainer dndKitId="2009102a-6a01-4c04-9ed9-6f4999df3413" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8 h-12 leading-[48px]" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$3.99' : '$37.99'}</span>
                  <span className="text-lg text-gray-400 font-normal" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    /{pricingToggle === 'monthly' ? 'month' : 'year'}
                  </span>
                </SortableContainer>
                <SortableContainer dndKitId="1f18e642-a85e-4a64-849f-cd5758de9a4b" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to break tools dashboard</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get featured every time you go live</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get notified first for LE collection drops</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="172e2458-9fb0-49a1-acf5-4679608057b1" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="f08a83c0-142b-4641-8611-a180f2a0e0ea" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors text-center" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Pro</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="fa066ee2-bd42-4c91-bf80-cc163a3fc976" containerType="regular" prevTag="section" className="px-6 pt-24 pb-0 bg-gradient-to-b from-[#2b253e] to-[#302742]" data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="cd27ab96-59bc-4c6b-971a-85536e476139" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">Why Production Quality Matters</span>
          </h2>
          {/* Create a self-contained stage with fixed min-height so hover growth doesn't nudge following sections */}
          <SortableContainer dndKitId="9f02d9bf-d392-4408-ae86-de8ee7412cbf" containerType="regular" prevTag="div" className="relative" style={{
          minHeight: '25rem'
        }} data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="cef31fcd-0997-4cc7-ac28-2e18c0ca794f" containerType="collection" prevTag="div" className="grid gap-8 stats-grid md:grid-cols-3" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {stats.map(stat => <motion.div data-magicpath-motion-tag="motion.div" key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 overflow-visible stats-card" initial="hidden" whileInView="show" viewport={{
              once: true,
              amount: 0.4
            }} variants={fadeRise} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
       <SortableContainer dndKitId="14af9b7f-c7b7-4e4b-83cf-26b6bb02d5b2" containerType="regular" prevTag="section" className="px-6 pt-0 pb-24 bg-gradient-to-b from-[#302742] to-[#1F1A30]" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="948eff77-f9ae-4e38-8e41-e7e0094503c3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <span data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get in Touch</span>
           </h2>
           <SortableContainer dndKitId="d200ecee-72f3-45db-8798-f2fbca52332e" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             {communityCards.map(card => <motion.div data-magicpath-motion-tag="motion.div" key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
           <SortableContainer dndKitId="0593770c-6ab2-4387-8867-b1efc7b41bc0" containerType="regular" prevTag="section" aria-labelledby="insta-subscribe-title" className="mt-12 md:mt-16 mx-auto w-full" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <SortableContainer dndKitId="279c7385-c0b3-40cf-8bea-96d403aa8770" containerType="regular" prevTag="div" className="bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-8 py-5 md:py-6" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="bfe02a8a-2516-40a4-9307-385cd2eb002b" containerType="regular" prevTag="header" className="mb-4" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <h3 id="insta-subscribe-title" className="text-2xl font-bold mb-4 text-center" data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">Latest on Instagram</span>
                 </h3>
               </SortableContainer>
               <SortableContainer dndKitId="b9b0dd8e-a8ae-4b22-9495-c7ff5f090e84" containerType="regular" prevTag="div" className="relative" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <SortableContainer dndKitId="279d6317-70bc-43c1-b8af-c59150e198f3" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1" aria-label="Previous slide" data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="d8fdda2e-acd2-4f0e-b4a5-48bbea4daac4" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Previous" onClick={e => {
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
                 <SortableContainer dndKitId="7abdf075-796f-4875-a1b0-3c0cdcc030e8" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1" aria-label="Next slide" data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="54b9e539-8ffa-4ab8-8cec-77ec22a80dc2" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Next" onClick={e => {
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
                             <SortableContainer dndKitId="b3181eed-c5de-4239-9607-62f828940b4d" containerType="regular" prevTag="div" className="rounded-[14px] bg-gradient-to-b from-white/10 to-white/5 p-1.5" data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                               {/* Square tile: enforce 1:1 aspect and single row only */}
                               <SortableContainer dndKitId="c402112d-ea48-4f83-b58a-5b2fd7d251e9" containerType="regular" prevTag="figure" className="w-full aspect-square overflow-hidden rounded-lg" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                 <picture data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <img data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                                 </picture>
                                 <SortableContainer dndKitId="19652b4a-3845-455b-ade2-8d054dd0f17a" containerType="regular" prevTag="figcaption" className="sr-only" data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
       <SortableContainer dndKitId="5e38c56f-cc66-4fea-a074-9643f4c7a69b" containerType="regular" prevTag="footer" className="px-6 py-16 bg-gradient-to-b from-[#1F1A30] to-[#582864] text-white font-normal" data-magicpath-id="361" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="c0131dc8-e53d-4930-8e1b-bb2fccad8669" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="362" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <SortableContainer dndKitId="3449c2e9-7ee8-45a7-b751-e88f7388507b" containerType="regular" prevTag="div" className="flex flex-col items-center text-center" data-magicpath-id="363" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <a href="#" aria-label="overlays.uno home" className="mb-10 mt-4" data-magicpath-id="364" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <h2 className="text-[44px] leading-none font-bold tracking-tight" data-magicpath-id="365" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <span className="sr-only" data-magicpath-id="366" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance</span>
                 <span aria-hidden="true" className="align-middle" data-magicpath-id="367" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break</span>
                 <span aria-hidden="true" className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]" data-magicpath-id="368" data-magicpath-path="OverlaysUnoLandingPage.tsx">Dance</span>
               </h2>
             </a>

             <SortableContainer dndKitId="3fd48ff3-8905-479c-a1bc-f93a1e7f2129" containerType="regular" prevTag="nav" aria-label="Footer links" className="mb-4" data-magicpath-id="369" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="ef319cb9-d961-4cda-a535-3d6e947c1af9" containerType="regular" prevTag="ul" className="flex items-center gap-6" data-magicpath-id="370" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="141956ce-eade-4942-9035-d21aacd26291" containerType="regular" prevTag="div" ref={ref} className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-id="379" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      <span data-magicpath-id="380" data-magicpath-path="OverlaysUnoLandingPage.tsx">{display}</span>
    </SortableContainer>;
}