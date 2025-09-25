import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "48cd7a67-91b4-4236-85a2-963ef7f45d61"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "1ea827f7-2289-4c92-a45c-7df859564cc3"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "348e876d-da35-4e3c-bcc4-ea12677460ba"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "7e63527e-f8a1-45b5-a2d0-6a7dd82f40d9"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "21091ce8-31ff-4aeb-b434-fcfd16a2c4d2"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "170926ac-1ac0-4e09-bda7-8c664c92a533"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "1a543c14-0a5d-46f0-b877-dc60fb5959e7"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "f6bbab69-1dad-442d-b98c-e4ae8429dc00"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "431929a0-22cf-480b-88bf-f2906657d63b"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "00d4be00-7c8f-4c28-8b86-2af69b887d83"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "89912121-82db-48a3-b5fe-0d57d873356e"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "dcf528a9-90ef-42c0-859c-4eaebc192a19"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "5c31103e-7a21-43f6-8dd7-3697dcc8a3ca"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "eeab7857-84f1-4dfb-8464-9a359a85387c"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "d53dfc3a-159c-4a8c-820e-7f9f22266acd"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "5311cf53-d181-4b38-9397-02934c985253"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "7b1ac357-1c31-40c1-89dc-74e2bb0f9b8e"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "2d9bf5e7-95c1-46b1-acb9-b8dea5eafab2"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "837cb8ea-5b24-4cc3-bc8e-cb2e179d9c38"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "528ec585-0453-4af5-805d-f6231947f3b2"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Choose Your Style',
  description: 'Pick from your collection or browse our overlay library for a theme—vintage Topps to modern Panini to match your break’s vibe',
  mpid: "57ab0378-a607-4c98-8182-f5eef66ab9b1"
}, {
  icon: Palette,
  title: 'One-Click Integration',
  description: 'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  mpid: "906aae2a-45ae-41da-8350-8b0bf0c4d27f"
}, {
  icon: Copy,
  title: 'Go live with control',
  description: 'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  mpid: "96ac8bd4-fec6-4ded-87a2-6a8a6f0dae81"
}] as any[];
const stats = [{
  number: '19.8%',
  label: 'Higher Viewer Engagement',
  sublabel: '',
  mpid: "76409c29-9252-45f2-9c70-f2256d5654dc"
}, {
  number: '3.2x',
  label: 'Higher Conversion Rates',
  sublabel: '',
  mpid: "cba7fd52-3f35-4a26-b5b6-084c05a5a2d9"
}, {
  number: '47%',
  label: 'Fewer Technical Issues',
  sublabel: '',
  mpid: "f916b261-9545-4e76-bf96-1a9f31ed1612"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join our Newsletter',
  subtitle: 'Stay updated with hobby news and product drops',
  buttonText: 'Join Newsletter',
  color: 'bg-[oklch(78.4%_0.142_246.8)]',
  mpid: "12bd782b-5676-4dda-b9a1-aec88c48b514"
}, {
  icon: Youtube,
  title: 'Follow us on Twitter',
  subtitle: 'Follow us for hobby news and product updates',
  buttonText: 'Follow',
  color: 'bg-[oklch(68%_0.16_240)]',
  mpid: "72563112-1cd0-4c32-915f-f50a719353ba"
}, {
  icon: Heart,
  title: 'Customize It',
  subtitle: 'Have something unique in mind? We can help',
  buttonText: 'Reach Out',
  color: 'bg-[oklch(0.510_0.262_276.9)]',
  mpid: "80770cd0-6a3b-4ed3-beb5-6b90dc5005f7"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "70c0b150-5b9b-4bbc-8c0a-c651891ac602"
}, {
  label: 'Tools',
  mpid: "bc572b20-8567-4e41-b667-8d8189aa5593"
}, {
  label: 'How It Works',
  mpid: "e5bbc0d0-928b-402b-a937-ccdad9ca606c"
}, {
  label: 'Demo',
  mpid: "85431341-6403-442b-8ee2-e44c160b54c2"
}, {
  label: 'Live Breaks',
  mpid: "b01c18de-8d8d-4cea-a782-06b916662249"
}, {
  label: 'Shop',
  mpid: "7f5c9a64-cdca-49d5-9ca9-3f8ded2533b5"
}, {
  label: 'About',
  mpid: "342523bb-105f-4541-9f04-9d43e7b563e9"
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
    mpid: "35b0bbef-45ae-4db9-a932-e2e154ebe2c1"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "e781d2d6-8df5-4393-a4b7-e71c7c5e1554"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "fa410e55-374b-428a-a31f-23cb27ad58e6"
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
      mpid: "4e60d06c-0082-4d01-af49-83cd52230ede"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "f3fe88c4-9b4c-429b-bd30-c1b370e12d44"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "98fc7b45-625b-47d5-ad4b-68699b1a9554"
    }] as any[];
    const [frontId, setFrontId] = React.useState<string>('phone-preview');
    const baseStyles = 'hero-button absolute will-change-transform rounded-2xl transition-[transform,filter,box-shadow] duration-[500ms] ease-in-out border border-white/10 bg-white/5 backdrop-blur-md';
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
    function zFor(id: string) {
      // Highest z for most recent click, lowest for least recent.
      const idx = recency.indexOf(id);
      // Clamp and map to distinct z-indices below the active pop value
      if (idx === -1) return 1;
      // 0 -> 999, 1 -> 3, 2 -> 2 to ensure a clear order and no ties
      return idx === 0 ? 999 : idx === 1 ? 3 : 2;
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
    return <SortableContainer dndKitId="3bae2402-7ba1-4677-bbd8-4c72a8e22934" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="0f753bc6-3ae8-48c7-8d75-5cbc26ae88a2" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => bringToFront('form')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '85%',
        height: '74%',
        left: '9%',
        top: '7%',
        transform: 'translate(0%, 6%) scale(0.98)',
        transformStyle: 'preserve-3d'
      }} onMouseEnter={e => {
        if (selectedHero !== 'form') {
          e.currentTarget.style.transform = 'translate(0%, 6%) scale(1.03)';
        }
      }} onMouseLeave={e => {
        e.currentTarget.style.transform = 'translate(0%, 6%) scale(0.98)';
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ece85ade-5b65-4463-96a3-580fb9eb279b" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d01e0a43-3404-4371-9503-c5e499b55d4f" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
        <SortableContainer dndKitId="f955c217-e3a5-48ea-8243-3c282c82855f" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => bringToFront('nfl')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '92%',
        height: '58%',
        left: '17%',
        top: '20%',
        transform: 'translate(4%, -2%) scale(0.7)',
        transformStyle: 'preserve-3d'
      }} onMouseEnter={e => {
        if (selectedHero !== 'nfl') {
          e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.75)';
        }
      }} onMouseLeave={e => {
        e.currentTarget.style.transform = 'translate(4%, -2%) scale(0.7)';
      }} data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <div className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_28px_rgba(0,0,0,0.45)]" aria-hidden="true" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="46c7e60e-0a4d-4b33-b87a-7c64af53da37" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => bringToFront('phone')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        left: '3%',
        top: '17%',
        transform: 'translate(-6%, -6%) scale(.7)',
        transformStyle: 'preserve-3d',
        width: '36%',
        height: '72%'
      }} onMouseEnter={e => {
        if (selectedHero !== 'phone') {
          e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.75)';
        }
      }} onMouseLeave={e => {
        e.currentTarget.style.transform = 'translate(-6%, -6%) scale(0.7)';
      }} data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="05a5c255-481a-4944-8e1a-156764f061e5" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="403c3e67-f1e4-4f8f-a57c-edabbf399345" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-[#1F1A30] via-[#582864] to-[#9149c1] text-white font-sans" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="682cc910-41a4-4229-b61f-168e4cc74d2a" containerType="regular" prevTag="header" className="bg-gradient-to-b from-[#26213a] to-[#302742] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="cea0f5aa-74da-4ea6-8033-f7d7bd49cd80" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="dd556429-bcaf-42a0-8c67-59269d53fa15" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="4ad9a75e-b400-40c7-9065-20c00a0b2050" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="33fb66ef-24de-4aae-9eb0-94f3e2f2bff6" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="36b40e16-1d7b-40d4-9fef-886a1b566ac5" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8871f1b9-4942-4d38-9108-d94135b78f36" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="6a377fc8-0912-4eaf-be28-e7c5ff01c46f" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="73420aa0-ac4c-486d-89d8-7011f9954ffa" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="887a92ae-2e69-4aab-8075-7929e11bc6d4" containerType="regular" prevTag="section" className="relative px-6 py-14" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-700 to-orange-400" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <div className="absolute inset-0 bg-black/70" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
        <SortableContainer dndKitId="35850d7e-86fa-4b6f-b764-567ee1c4c7b6" containerType="regular" prevTag="div" className="relative z-10 max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ce5969a3-09f8-4d5c-a3c5-2f3a617b1a18" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center min-h-[420px] md:min-h-[520px] lg:min-h-[560px]" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="728df453-e8b3-4506-9154-01540e2a0704" containerType="regular" prevTag="motion.div" initial="hidden" whileInView="show" viewport={{
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
              <SortableContainer dndKitId="e6f08581-3ed9-4a8a-b254-66862c30c737" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="f8ccd970-80c7-452a-b81c-9e96c0cf3b63" containerType="regular" prevTag="motion.div" className="relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="729511de-f930-4c1b-9eaf-9d3d370ae9f7" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9489dde7-57e0-43ed-bf7b-9267d28f1e7b" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="600f2113-831d-4658-85fa-a3553aa94754" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="2ff09f79-20b5-4ff2-a2d5-1664dbbfd880" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="9e201b83-f967-4a07-98ff-4f1ede708321" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="6deb6409-851b-4a04-b36f-bb56a514a887" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-gradient-to-b from-[#222032] to-[#2a2338]" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="89000c18-a6f6-4519-8c6c-6bc0b54b5277" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8ea6a914-dfb7-4b3a-9615-b67bb492a0af" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.6
          }} variants={fadeRiseMobile} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="4b864958-8042-4d3d-9c23-20261c33515d" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="455e224a-2640-4e70-ba97-2155bef8d0ca" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="367e3266-be52-43de-90f6-4d26e964e84b" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="d10745c0-a18a-476f-82dc-b23d06f065b1" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="fc48915c-d0eb-4ede-990a-037fe67b2dd0" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="2942ae71-42eb-43a9-8473-7febc2e1d0ce" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="d19e161b-7737-46ed-81ad-efb1f841ca8d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="0dd0d79f-86ad-46c5-9955-299a12e2722c" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="b98d99a0-9f0d-4562-9bdd-112660c55f51" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="79e2b070-7a63-4774-9c23-4c1777b64083" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="c279cbb6-730f-482f-ab6f-bfa82158cdd6" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="129e51a6-3eb9-4fff-a90c-a85f967af9f9" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2a2338] to-[#2b253e] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="371a34bb-1dc1-4c6c-8d3d-6c6c49032569" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6627b7fd-1e2f-4244-8157-cf181fba61bd" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="a9c25b7e-0c96-408c-988c-79356a864c23" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="6a74d1ea-8529-42fc-be98-0d4dc571971c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="6c680217-83c2-4731-80f6-723dbbe9dc13" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="0517664a-3c86-4177-a725-146e5fe30558" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="81ff6e9f-e28e-44a8-83e8-f5df4ea1618c" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="908a34bc-796b-4bf1-be81-a8fdbc4535b9" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="7497e0fa-5fb7-4b18-a847-3b8c1e605d09" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="1746261b-455b-467d-bbfa-b3484f3dfe01" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="91a15628-0359-4768-bf18-3d8e46d35ee5" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#2b253e] to-[#302742] ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9c4af0df-1f01-4a1c-9a87-a1f31af8419e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8ac844cc-d358-4c35-b3e0-b5c7720828da" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="fa093777-b0b0-43e9-95b9-45e0e70b5c32" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="fb5fa37e-971f-43ab-b861-7e62d346d3b9" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="af102859-53e5-4f19-920e-850dc1ebac00" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="d12fd98c-8c2c-4cde-b23f-462f639457c9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="484ca6c1-78dc-4c4a-83b0-01d6782f7fb3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="dccc5bbd-e252-4291-a278-6b15c1129a25" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b74cb895-6d37-4b94-b572-f730bad3370c" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="e3456a68-6350-4bfd-ac4d-a8f59d0ab85c" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="bfdb5750-bcc0-4229-9ded-b6d164b5b1aa" containerType="regular" prevTag="section" className={`px-6 py-5 bg-gradient-to-b from-[#222032] to-[#2a2338] ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="aa47ed15-caae-420f-b6fd-0ded2c4147b5" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="78ea44d7-57d1-4e76-b118-4d515e3c86b6" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="78341246-e357-4cdb-be90-b99af2334292" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="24d0fa93-6b49-48af-91ef-fe78fe6cfee8" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="b8794e72-4aac-4d81-b522-9e0e3e878e99" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="e7b01c57-3b66-4162-8e2c-7f002ed27952" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="802a88ba-92ce-4505-a6f0-536539fbeb3e" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="96c95e63-04bc-447a-95d1-381bc6e9098c" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="cd7b6baf-469a-43c4-9f78-5728f82c4223" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="cc61fa42-c715-47ab-ac0f-7436e793a406" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] via-[#38305a] to-[#43305b]" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3bf6bc8b-95c3-43db-8c6e-a71036a3b736" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="757cb685-89ef-4d46-bb90-c5814b9143bc" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="aedf080a-791c-45e0-ab06-2a75e45a9cda" containerType="regular" prevTag="motion.div" className="space-y-8" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">Go live. Get featured. Stand out.</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">Every BreakDance overlay automatically features your stream in our Live Breaks directory, driving qualified traffic to your channel</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="bf315889-8241-411c-8dc9-b5de920fd602" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="c204b2f0-2b03-489e-8d4b-4379037391a4" containerType="regular" prevTag="motion.div" className="bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 rounded-3xl p-12 flex items-center justify-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a248b822-fd54-41fe-aaaf-24729757f0fc" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="5acac0d4-fe1b-4c6e-ae17-f41eb189884f" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="dbe9dec9-8a7b-4a0f-91bc-334ae0cffdc1" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#2b253e] to-[#302742]" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="37b9c7d7-3975-4e51-9ecc-f06db3debbd1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get streaming like a pro in under 5 minutes with our streamlined process - for breakers at every level</span>
          </p>
          
          <SortableContainer dndKitId="3b4542ca-bf91-4c27-aec1-306eb1f4df32" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeRise} transition={{
            delay: index * 0.12,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>

          {/* Instagram Subscribe Carousel Card moved to Follow Us section below */}

          <SortableContainer dndKitId="3cf703de-9e27-4275-bdc1-cc9d9eb5a265" containerType="regular" prevTag="button" className="mt-16 mb-4 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-8 py-4 rounded-xl font-bold text-xl lg:text-2xl text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="71d36206-d2fc-4eec-b3ed-ec098ad42dc9" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3179d865-5301-4767-a86e-12ce46fb7a43" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">Level Up Your Production</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.</span>
          </p>
          
          <SortableContainer dndKitId="22234db0-3506-4154-a15c-79ecaeaea5ce" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="33aa47f3-3374-4f3a-b760-60e92d7934d3" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a1de0415-6286-48d9-bacd-522e62c40f40" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="3ab33337-3692-46cd-979f-33de9cd44304" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="f4e869c5-d332-40c1-8c8e-a57b559c4d5b" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="e54a3753-9f47-44bb-8960-8f92dbc3492a" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-white/10 h-full" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="32181967-8b4f-4b81-84be-b4d992a8a591" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Starter</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get started and explore BreakDance with no cost or no commitment</span>
                </p>
                <SortableContainer dndKitId="b7b0094f-b36c-4dfc-9e83-240b37d240e1" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
                </SortableContainer>
                <SortableContainer dndKitId="326dc1af-0116-456a-a1bc-24e7a7149207" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the overlay library</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the ‘break editor’ ui</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save unlimited overlays to your collection</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">Limited access to  break tools dashboard</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="1f6724da-9eb8-442b-9932-0d3f6161c31c" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="660d4372-9859-4bf6-9d15-da9b799a421d" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl font-semibold text-lg text-center hover:bg-slate-800 transition-colors duration-150" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">Start Free</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="2782d659-574f-4012-abf3-b52ad51ec653" containerType="regular" prevTag="motion.div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="90e6764b-46c7-4945-92ea-54860ce83ad4" containerType="regular" prevTag="div" className="flex h-full flex-col" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {pricingToggle === 'yearly' && <SortableContainer dndKitId="96a4a1f3-262e-4f6d-9916-c69ae698664d" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 21%</span>
                  </SortableContainer>}
                <h3 className="text-3xl font-bold mb-2" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Pro</span>
                </h3>
                <p className="text-gray-300 mb-6 text-base" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">Best for regular users who want to experience the full functionality of the platform</span>
                </p>
                <SortableContainer dndKitId="9787d7d1-04cc-4af8-a3a9-d1819fe801b7" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8 h-12 leading-[48px]" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$3.99' : '$37.99'}</span>
                  <span className="text-lg text-gray-400 font-normal" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    /{pricingToggle === 'monthly' ? 'month' : 'year'}
                  </span>
                </SortableContainer>
                <SortableContainer dndKitId="3ce9df41-7847-4bc2-b9c0-a76a4f6d296f" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <li className="flex items-center" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to break tools dashboard</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get featured every time you go live</span>
                  </li>
                  <li className="flex items-center" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="text-lg" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get notified first for LE collection drops</span>
                  </li>
                </SortableContainer>
                <SortableContainer dndKitId="671d29d6-d9e7-417e-8ae8-5ba9a10a98e1" containerType="regular" prevTag="div" className="mt-auto" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="5588826b-594e-486e-bb98-d689d61631ba" containerType="regular" prevTag="button" className="mx-auto w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors text-center" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Pro</span>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="8498fe90-024b-418c-a167-d472c482ebb9" containerType="regular" prevTag="section" className="px-6 pt-24 pb-0 bg-gradient-to-b from-[#2b253e] to-[#302742]" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b2ef906e-4534-408b-bc39-7dc3d714e110" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">Why Production Quality Matters</span>
          </h2>
          {/* Create a self-contained stage with fixed min-height so hover growth doesn't nudge following sections */}
          <SortableContainer dndKitId="60dd492d-eee0-4007-b755-e02b11d23a53" containerType="regular" prevTag="div" className="relative" style={{
          minHeight: '25rem'
        }} data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="0cc95bf0-ee37-4399-a706-bb12a1c7f8ed" containerType="collection" prevTag="div" className="grid gap-8 stats-grid md:grid-cols-3" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {stats.map(stat => <motion.div data-magicpath-motion-tag="motion.div" key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 overflow-visible stats-card" initial="hidden" whileInView="show" viewport={{
              once: true,
              amount: 0.4
            }} variants={fadeRise} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <StatNumber number={stat.number} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                   </div>
                   <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                   </div>
                   {/* Expansion appears visually below the base content but uses a transform so siblings and grid height feel stable */}
                   <div className="card-flyout" aria-hidden="true" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <p className="text-sm text-white/90 bg-white/10 rounded-xl px-4 py-3" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                       <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number === '19.8%' ? 'Streams with premium production quality generate 19.8% longer average watch times and more active chat participation' : stat.number === '3.2x' ? 'Professional production quality converts casual viewers to regular customers 3.2x more effectively than basic setups' : 'Streamlined overlay systems reduce technical interruptions by 47%, keeping your audience engaged throughout every break'}</span>
                     </p>
                   </div>
                   <style data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
           <style data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
       <SortableContainer dndKitId="556f3c6e-c711-470f-955b-f73745775f65" containerType="regular" prevTag="section" className="px-6 pt-0 pb-24 bg-gradient-to-b from-[#302742] to-[#1F1A30]" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="798b5294-1a93-4a8a-9934-484bfda33229" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <span data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get in Touch</span>
           </h2>
           <SortableContainer dndKitId="4e41127f-1d95-4df7-8067-6f1c36b3ba7f" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             {communityCards.map(card => <motion.div data-magicpath-motion-tag="motion.div" key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.25
          }} variants={fadeRise} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 {/* Icon per card by title for precise replacements without altering other content */}
                 {card.title === 'Join our Newsletter' ? <svg role="img" aria-label="Newsletter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 4.5 6.75v.3l6.86 4.117a2 2 0 0 0 2.28 0L20 7.05v-.3A1.25 1.25 0 0 0 18.25 5.5H5.75A1.25 1.25 0 0 0 4.5 6.75Zm13.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : card.title === 'Follow us on Twitter' ? <svg role="img" aria-label="Twitter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M22 5.92c-.73.32-1.5.54-2.3.64a4.02 4.02 0 0 0 1.76-2.22 8.02 8.02 0 0 1-2.54.98 3.99 3.99 0 0 0-6.8 3.64 11.31 11.31 0 0 1-8.22-4.17 4 4 0 0 0 1.24 5.33c-.62-.08-.63.12-.97.12-.23 0-.47-.02-.69-.07a4 4 0 0 0 3.73 2.77A8.02 8.02 0 0 1 2 18.41 11.32 11.32 0 0 0 8.13 20c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.06 8.06 0 0 0 22 5.92z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : card.title === 'Customize It' ? <svg role="img" aria-label="Customize" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <path fill="currentColor" d="M3 17.25V21h3.75l11-11.02-3.75-3.75L3 17.25Zm17.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </svg> : null}
                 <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title === 'Join our Newsletter' ? 'Newsletter Updates' : card.title === 'Follow us on Twitter' ? "We're on Twitter" : card.title === 'Customize It' ? 'Custom Projects' : card.title}</span>
                 </h3>
                 <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                 </p>
                 <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                 </button>
               </motion.div>)}
           </SortableContainer>

           {/* Instagram Subscribe Carousel Card – bottom center within Follow Us. Height equals a card */}
           <SortableContainer dndKitId="53b83beb-e1ab-4c4a-a4d2-89bffbe0870b" containerType="regular" prevTag="section" aria-labelledby="insta-subscribe-title" className="mt-12 md:mt-16 mx-auto w-full" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <SortableContainer dndKitId="8cf77ebb-249e-4414-90eb-a8f8a9860d12" containerType="regular" prevTag="div" className="bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-8 py-5 md:py-6" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="070a7af8-9a40-48ba-86a9-1194ddf59a48" containerType="regular" prevTag="header" className="mb-4" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <h3 id="insta-subscribe-title" className="text-2xl font-bold mb-4 text-center" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <span data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">Latest on Instagram</span>
                 </h3>
               </SortableContainer>
               <SortableContainer dndKitId="300ca1cd-85b2-41de-97e3-1ac175e9d4d8" containerType="regular" prevTag="div" className="relative" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <SortableContainer dndKitId="8d6ef3c8-c33e-4f03-b4d4-be90ff86018c" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1" aria-label="Previous slide" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="d859244f-338f-448a-9770-fe25b5f56525" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Previous" onClick={e => {
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
                }} data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <ChevronLeft className="h-4 w-4" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </SortableContainer>
                 </SortableContainer>
                 <SortableContainer dndKitId="53746bff-42a7-41d5-8304-c7adc9f0841d" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1" aria-label="Next slide" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <SortableContainer dndKitId="bd7ca00c-a342-4b7e-a7b9-e74c3c764551" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Next" onClick={e => {
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
                }} data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <ChevronRight className="h-4 w-4" data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                   </SortableContainer>
                 </SortableContainer>
                 <ul className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] md:auto-cols-[minmax(240px,1fr)] gap-4 overflow-hidden" data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   {['one', 'two', 'three', 'four', 'five', 'six'].map((_k, idx) => {
                  const key = `insta-${idx + 1}`;
                  return <li key={key} className="min-w-0" data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                           <article className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-500 p-0.5" data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                             <SortableContainer dndKitId="14f1cbf4-b529-47e3-bb3d-275a225bd6d3" containerType="regular" prevTag="div" className="rounded-[14px] bg-gradient-to-b from-white/10 to-white/5 p-1.5" data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                               {/* Square tile: enforce 1:1 aspect and single row only */}
                               <SortableContainer dndKitId="c6d092c4-7a32-4d67-a74f-7461e1279821" containerType="regular" prevTag="figure" className="w-full aspect-square overflow-hidden rounded-lg" data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                 <picture data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <img data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                                 </picture>
                                 <SortableContainer dndKitId="28260aac-2884-4e82-b731-be3587721997" containerType="regular" prevTag="figcaption" className="sr-only" data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                   <span data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">Instagram highlight tile</span>
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
       <SortableContainer dndKitId="580cbc6e-47ec-4fa2-a217-3ae0f41c4f94" containerType="regular" prevTag="footer" className="px-6 py-16 bg-gradient-to-b from-[#1F1A30] to-[#582864] text-white font-normal" data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">
         <SortableContainer dndKitId="11763793-4947-4506-b85b-2cecc14b7154" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">
           <SortableContainer dndKitId="23c99419-951c-48f9-bb1f-e5a949340eb3" containerType="regular" prevTag="div" className="flex flex-col items-center text-center" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">
             <a href="#" aria-label="overlays.uno home" className="mb-10 mt-4" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <h2 className="text-[44px] leading-none font-bold tracking-tight" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <span className="sr-only" data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance</span>
                 <span aria-hidden="true" className="align-middle" data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break</span>
                 <span aria-hidden="true" className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">Dance</span>
               </h2>
             </a>

             <SortableContainer dndKitId="040d7854-5393-488e-a151-89563781af3b" containerType="regular" prevTag="nav" aria-label="Footer links" className="mb-4" data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <SortableContainer dndKitId="a8494b76-a83c-4d62-9f95-d9a348c4e360" containerType="regular" prevTag="ul" className="flex items-center gap-6" data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                 <li data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
                   </a>
                 </li>
                 <li data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="352" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                     <span data-magicpath-id="353" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
                   </a>
                 </li>
               </SortableContainer>
             </SortableContainer>

             <p className="text-xs text-white/60" data-magicpath-id="354" data-magicpath-path="OverlaysUnoLandingPage.tsx">
               <span data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">© 2025 All Rights Reserved</span>
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
  return <SortableContainer dndKitId="bf0e0a98-283a-4b83-85ae-afe2bf0a9b81" containerType="regular" prevTag="div" ref={ref} className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      <span data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">{display}</span>
    </SortableContainer>;
}