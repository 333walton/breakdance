import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "4b87daee-29ea-480d-891d-22fdff6165cf"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "03437c1b-1e30-49f4-97da-d2004df8ff44"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "9d1e62fe-0aee-4c90-bf9e-db8166106ddb"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "0e665675-f453-4f92-9edf-68673e0174ed"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "d75617c4-d514-4b8e-b2da-52d7ec56525d"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "6ed61ebd-3e6e-47cd-a479-ed1d426aa223"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "e98fbdc8-2eee-4bf5-814b-2bdd140b3b22"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "1825e77a-0ca2-4387-8d32-c4f34fd1f119"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "f2b8a574-d3ba-48a1-8b3f-e9f289912311"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "48af227c-2bf5-40b5-9696-0f682500d75d"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "76cab06e-c5cb-4bda-b54b-0d847aeb6223"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "694a2ead-4be8-4532-a2be-e3f93dad6a7e"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "aea47031-141b-46ac-913a-9676e1dd83bb"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "e25058a3-51df-40a2-bad2-c701db756423"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "4cd2a2ee-5ac8-4018-9b3a-49b976ab8c74"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "a901214b-59b7-42cd-aead-be1fa1a7b7df"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "32af9ccb-1891-4a53-9c51-2e544b139be6"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "ed0f63d5-fac3-4ae8-b413-e0e7fd052ec4"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "5b29bb9a-f177-49bd-b7ac-699175d726f1"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "fded6027-6bd8-4d35-91a9-cff3d8d2f5fc"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Choose Your Style',
  description: 'Pick from your collection or browse our overlay library for a theme—vintage Topps to modern Panini to match your break’s vibe',
  mpid: "32b99211-3153-41b6-a76b-f1d406ff0950"
}, {
  icon: Palette,
  title: 'One-Click Integration',
  description: 'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  mpid: "5105ceeb-ee16-4e05-a4a5-ec6b7f47b146"
}, {
  icon: Copy,
  title: 'Go live with control',
  description: 'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  mpid: "50e130c6-ef42-4b07-8b5c-7a751c59bb12"
}] as any[];
const stats = [{
  number: '19.8%',
  label: 'Higher Viewer Engagement',
  sublabel: '',
  mpid: "0defb785-7a17-4a80-8aed-56e7c61c4901"
}, {
  number: '3.2x',
  label: 'Higher Conversion Rates',
  sublabel: '',
  mpid: "7884eb4d-082d-4e79-9717-589bdcd742a6"
}, {
  number: '47%',
  label: 'Fewer Technical Issues',
  sublabel: '',
  mpid: "0561c919-2a39-42f0-aea1-ee707d49fa7c"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join our Newsletter',
  subtitle: 'Stay updated with hobby news and product drops',
  buttonText: 'Join Newsletter',
  color: 'bg-[oklch(78.4%_0.142_246.8)]',
  mpid: "e7bd6947-e195-4500-a63a-ba45f7bc73ad"
}, {
  icon: Youtube,
  title: 'Follow us on Twitter',
  subtitle: 'Follow us for hobby news and product updates',
  buttonText: 'Follow',
  color: 'bg-[oklch(68%_0.16_240)]',
  mpid: "7eb13d91-398b-4acb-94ff-cfe2d6062460"
}, {
  icon: Heart,
  title: 'Customize It',
  subtitle: 'Have something unique in mind? We can help',
  buttonText: 'Reach Out',
  color: 'bg-[oklch(0.510_0.262_276.9)]',
  mpid: "bf543998-bf51-464a-93a9-0733eaa248be"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "cf2b85ed-b904-44c8-b59f-a0181543d752"
}, {
  label: 'Tools',
  mpid: "177f0c58-be2f-4e9a-98fe-234749e387a8"
}, {
  label: 'How It Works',
  mpid: "2483ac8f-72d2-45b0-bf6e-79fde122b9c2"
}, {
  label: 'Demo',
  mpid: "417ed22e-ba2d-4154-a6e5-c079edb10546"
}, {
  label: 'Live Breaks',
  mpid: "a9a41c43-1c44-4513-91d6-29dba3db500e"
}, {
  label: 'Shop',
  mpid: "8647d8c5-060a-4054-9c80-eda538024569"
}, {
  label: 'About',
  mpid: "b0e2a3eb-0f49-4ed7-a255-2c0c55261518"
}] as any[];

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
    mpid: "b13d1f09-5efb-4ab6-8635-3c9fab538c02"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "b8565909-68ec-4d7e-8c88-964909fd83a7"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "85309ea3-e7f2-47e9-b45d-b3ac3ac3f329"
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
      mpid: "0ca02e58-f297-47cb-8d75-ad71245dc4c4"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "7c229cdc-411e-467d-ab47-e50ddda90325"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "de1a3a13-af60-4cdc-b847-4f22960a8e02"
    }] as any[];
    const [frontId, setFrontId] = React.useState<string>('phone-preview');
    const baseStyles = 'hero-button absolute will-change-transform rounded-2xl transition-[transform,filter,box-shadow] duration-[500ms] ease-in-out border border-white/10 bg-white/5 backdrop-blur-md';
    function zFor(id: string) {
      // Determine clicked mapping from top-level selectedHero
      const selectedId = selectedHero === 'form' ? 'form-window' : selectedHero === 'nfl' ? 'nfl-grid' : selectedHero === 'phone' ? 'phone-preview' : null;
      // Only bring the clicked one to the highest z-index. Others retain their base order.
      if (selectedId) {
        if (id === selectedId) return 1000; // top-most for the specifically selected
        // Maintain a stable order for the two non-selected
        // Base order: form-window < nfl-grid < phone-preview
        if (id === 'phone-preview') return 3;
        if (id === 'nfl-grid') return 2;
        return 1; // form-window
      }
      // When nothing has been explicitly selected yet, keep initial stack with phone on top
      if (id === 'phone-preview') return 3;
      if (id === 'nfl-grid') return 2;
      return 1;
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
    return <SortableContainer dndKitId="c3fdffc2-8cac-4733-99e8-eccb564c8cae" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="f89160d6-83f0-425d-b9e0-9011bb2c6477" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setSelectedHero('form')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '85%',
        height: '74%',
        left: '9%',
        top: '7%',
        transform: 'translate(0%, 6%) scale(0.98)',
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5bb72140-78f9-417e-80d2-665bf4a7d86f" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="2277feb5-e0b5-49e7-8ddf-2bf58a9e013f" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
        <SortableContainer dndKitId="04bb0d8c-1985-437a-9f3c-339dea66a07f" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setSelectedHero('nfl')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '92%',
        height: '58%',
        left: '16%',
        top: '20%',
        transform: 'translate(4%, -2%) scale(0.7)',
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <div className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)]" aria-hidden="true" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="771b9ab1-ae92-4ea1-90af-8bdfa2bbd8a4" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setSelectedHero('phone')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        left: '3%',
        top: '17%',
        transform: 'translate(-6%, -6%) scale(.7)',
        transformStyle: 'preserve-3d',
        width: '36%',
        height: '72%'
      }} data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a61762b7-56db-4e17-a4c2-c33c7e756ce0" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="85e11b53-f6ae-40ed-8c1e-98c7c639ef56" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="2dc816f8-eee9-477b-8d35-bdd674daff87" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b1c1fe4f-e673-4996-ac23-092ce45bdc9a" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5796aff6-b165-4c99-89e9-78bfa2524d1d" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="e0a7e208-24aa-4ff4-8f71-cb2bd980e4f2" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="ee41716a-a890-4870-ae50-19f9c25b0521" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="3a421212-fab7-4736-a4e2-2dbf7407bc1e" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="0580c33e-7374-4149-9758-a4b0cb609d42" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="225aea80-6daf-4142-a32f-1ec943def829" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="4390d302-8ac9-4bb9-a435-91d55a4e9013" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="276d5b4b-e531-404c-b96f-39aafbb1a24c" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1976ac4f-a883-4fdd-8e67-05fa8caf225f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ed1edebf-b6a1-4a88-954e-cfa859a824ea" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d6bbf49d-0fea-485c-8dc3-6b6001fb575b" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              {/* Dynamic description below the title based on selected hero button */}
              {selectedHero && <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-300" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">{selectedHero === 'form' ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : selectedHero === 'nfl' ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : 'Stream with BreakDance overlays and get instant promotion to collectors in our Live Breaks directory.'}</span>
                </p>}
              <SortableContainer dndKitId="952c818e-9900-424a-a23b-f7d8ca05780d" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="76a1b737-6187-4d3b-a28a-275e0ea72458" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="235d817f-3df4-4b21-a67c-74372f1bbd55" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="6a688f3c-926a-4949-b5a2-d5c7aa6c0e39" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="73f115b1-4dfa-4bb9-ab71-63455634e2c3" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="b8d386e5-8a3a-4fc2-99e9-fe1c1e764851" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="12d8949b-a04c-474f-8379-f5a8542cc84c" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="55df17f3-891f-4db6-8e05-154f5f10c2ef" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1b4d5f90-edba-4fc5-9f36-637ba7c156fa" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a401e0f6-a328-4917-a74a-f63a7db22406" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="212b39eb-9464-4888-bab3-646c32793664" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3e3fff18-e16a-4627-ad11-30242fb599eb" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="eb8ab87a-182a-4842-9389-f462b2f56ff1" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="0cf31e28-cc9d-493f-8fe8-b5dda9c23913" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a2c01503-4d5d-4ff1-9076-3f904568c60a" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="74bf4098-a1b8-4c90-92ed-312b64431141" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="44e935e7-ff57-46c0-8571-77fb68d9f54d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="51b27740-1a07-41cc-a63f-7afd49af8bdd" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="83b4ad7e-6ff0-416d-8c4a-bcc776a97baa" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="eb69d8fd-b375-417d-bba4-3c4e19cb9f68" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f8b460cc-1c69-4728-8793-82d3a674a9db" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="0805aa3f-2ba2-4b26-af4f-b066bd1a1fe0" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="49fc454c-4c3f-44c6-9470-c8e759925cc9" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2423bf42-2aeb-49c3-b385-cbfea55983b0" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="1a304220-6ae6-4977-ab94-2f1d67f9eb7c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a11b79c9-e5eb-460c-849e-139f9c736940" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="bc12ab4b-8599-4aa6-9b20-e9ad94705888" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="2e2fd06b-0464-4492-94bc-729f6bca2673" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="5a10f53b-c357-4479-8dce-edc8154e53cc" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8e4a0be6-b783-4ed7-a9e6-2d4d5f573894" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="7bca7410-84cd-4fca-9747-baecf6282f9b" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="fb7bbc97-138c-4fab-9aca-d0a8dda8cf5e" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="bb393788-d573-4629-9af9-7c9b14f75a0a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="18aa9d1d-aafa-479d-af08-1f7adcb58120" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="24d8dd15-87db-47fa-899a-55053aa133ff" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="a0f43559-161b-4db6-9869-b280f1e1b9cf" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="19932e1e-6eb8-46bb-9ee7-116b1cdbcbf8" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0cb9ed33-1b25-432a-ac2c-2b928e4a5cb8" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="999aec5d-a666-416e-a868-6e50b70923b3" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="3cc2da32-b6f2-487f-a4ae-38f23d8da2d4" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="49bb7348-41e1-48b6-9aad-ea90568c3379" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="5815db1d-5fdb-4b8a-8132-aea78adc5b4e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="14f323be-18e3-4079-a2c9-9cf90e1d8990" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="d91e3c4b-a9b4-40bf-b28e-367bceb20bd0" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f2b9a253-0bfd-4e15-b0f8-9d0ef8f99e1b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="df87d33f-73e5-4688-93e5-85bc2e20ff3d" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="b87c9916-1671-4732-928c-99839157ed42" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="7d6496f6-8a8f-41e2-8522-0fe182491a88" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="6e959f3f-9a9e-4c42-ac9f-cbafb3e09450" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="d3f709e0-a8f6-4e1b-98ba-3e508b62ec9f" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="37106f83-a76b-41bb-b452-02a8debcfc5d" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="a506c6d2-2335-4a28-8b58-ae4b6b4c9e7a" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="e16b290b-2c82-4b5e-8270-284f2f57e88d" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="e90ed84f-9e80-4d6c-afe6-71cdd330f31f" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8c541184-e3d8-4c31-be5c-5bc4cf8cc491" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="add436db-69ea-425d-ad04-163c4c3c4885" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ec07ccd2-5605-4b42-9d98-d3a3655ec7ce" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">Go live. Get featured. Stand out.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">Every BreakDance overlay automatically features your stream in our Live Breaks directory, driving qualified traffic to your channel</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="522459cb-4287-4d0a-b67e-76a40d9d8cfa" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="cbc6c889-b1d8-4637-a91a-8a97404eadc4" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="5a78e1cb-62d5-4f6a-bc70-4163ecf8dff0" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="09f775a0-ac18-4cc0-bc8d-8cf3bf8c9cb6" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="1fb91503-6f76-4ee0-b177-6bb60c14ce8b" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="066a5f7e-a238-4bfb-bf5c-bbb2a0118060" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get streaming like a pro in under 5 minutes with our streamlined process - for breakers at every level</span>
          </p>
          
          <SortableContainer dndKitId="8eac31f4-a6d6-4b02-be78-6fdf40766845" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>

          {/* Instagram Subscribe Carousel Card moved to Follow Us section below */}

          <SortableContainer dndKitId="4c019cd9-62eb-4919-8b44-9f4442be2639" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="97f19ff5-d4e3-443f-948c-f58ce15333fd" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6a550394-118f-424e-a354-bca4f3cc85db" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">Unlock Your Potential</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.</span>
          </p>
          
          <SortableContainer dndKitId="0666f4c6-a765-48c2-8dac-776cde95fd7a" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f56e26ef-95ad-4a6e-9239-1ce4c3c65eab" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="894914e6-04ed-4596-8f24-20ca61f0fd4a" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="b973889e-dde3-4aa4-aff9-b0c5c1bd5b09" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="25840e07-1c96-4c5b-995f-073c363d2ffe" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="7f2cf287-9b65-4c3b-b1e3-09f428d84a08" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-2" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Starter</span>
              </h3>
              <p className="text-gray-300 mb-6 text-base" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get started and explore BreakDance with no cost or no commitment</span>
              </p>
              <SortableContainer dndKitId="ffe3b2c2-6ac6-4faa-9e48-1f56596075c1" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="69aa71d8-de96-4d12-a649-c57356768265" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the overlay library</span>
                </li>
                <li className="flex items-center" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to the ‘break editor’ ui</span>
                </li>
                <li className="flex items-center" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save unlimited overlays to your collection</span>
                </li>
                <li className="flex items-center" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">Limited access to  break tools dashboard</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="43c4260d-ed63-4ca7-800c-f1e83307cfe3" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="a40d05e2-e782-42e6-af96-fb29daa3e970" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="39148794-a24d-4d8d-b127-0fbb182a1648" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-2" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Pro</span>
              </h3>
              <p className="text-gray-300 mb-6 text-base" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">Best for regular users who want to experience the full functionality of the platform</span>
              </p>
              <SortableContainer dndKitId="1bfba928-8fb4-4ddc-9202-a8e2d2e1c7e9" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="69af8800-27f4-4134-a5c5-0faf109cc0b3" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to break tools dashboard</span>
                </li>
                <li className="flex items-center" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get featured every time you go live</span>
                </li>
                <li className="flex items-center" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get notified first for LE collection drops</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="c520a546-949e-4733-9363-55bb17182c8a" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Pro</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="99ed3958-15b3-4616-9f21-49e753d28abf" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9f3bafa0-fd3d-4d3c-867c-89fe0f13be47" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">Why Production Quality Matters</span>
          </h2>
          <SortableContainer dndKitId="17bb6b16-df74-4293-8260-accebfbe2eec" containerType="collection" prevTag="div" className="grid gap-8 stats-grid md:grid-cols-3" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 overflow-hidden stats-card" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                </div>
                <div className="mt-4 text-left card-content" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <p className="text-sm text-white/90 bg-white/10 rounded-xl px-4 py-3" style={{
                textAlign: 'center'
              }} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number === '19.8%' ? 'Streams with premium production quality generate 19.8% longer average watch times and more active chat participation' : stat.number === '3.2x' ? 'Professional production quality converts casual viewers to regular customers 3.2x more effectively than basic setups' : 'Streamlined overlay systems reduce technical interruptions by 47%, keeping your audience engaged throughout every break'}</span>
                  </p>
                </div>
                <style data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
                  @media (hover:hover) {
                    .stats-card:hover {
                      transform: translateZ(0) scale(1.02);
                      transition: transform 280ms ease, box-shadow 280ms ease;
                      will-change: transform;
                      box-shadow: 0 16px 44px rgba(0,0,0,0.35);
                    }
                  }
                  /* Use an internal wrapper to expand height without affecting grid track sizing */
                  .stats-card { position: relative; isolation: isolate; }
                  .stats-card .card-content { max-height: 0; transition: max-height 380ms cubic-bezier(0.25, 0.46, 0.45, 0.94); overflow: hidden; }
                  .stats-card:hover .card-content { max-height: 9rem; }
                `}</style>
              </div>)}
          </SortableContainer>
          <style data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
            /* Ensure columns are flexible and independent; use fr units */
            .stats-grid {
              display: grid;
              grid-template-columns: repeat(1, minmax(0, 1fr));
              align-items: start; /* prevent row-height coupling */
              grid-auto-rows: 1fr; /* base equal height without forcing siblings to grow */
              gap: 2rem;
            }
            @media (min-width: 768px) {
              .stats-grid { grid-template-columns: repeat(3, 1fr); }
            }
            /* Critical: allow each card to overflow its own stacking context without pushing neighbors */
            .stats-card {
              width: 100%;
              /* height: 100%; removed to prevent forced stretching */
              transform-origin: center center;
              will-change: transform;
              contain: paint; /* avoid layout reflow on neighbors */
            }
            /* Prevent translate/scale from affecting grid layout */
            .stats-card { backface-visibility: hidden; }
          `}</style>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="d9bd9b67-0c12-48a9-9d1e-ca6f467da548" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9125d4d4-1f01-4ef5-bc2c-f5f4225818ca" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get in Touch</span>
          </h2>
          <SortableContainer dndKitId="ecaf7371-8202-49d8-8398-47f5ccdd7c7b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {/* Icon per card by title for precise replacements without altering other content */}
                {card.title === 'Join our Newsletter' ? <svg role="img" aria-label="Newsletter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 4.5 6.75v.3l6.86 4.117a2 2 0 0 0 2.28 0L20 7.05v-.3A1.25 1.25 0 0 0 18.25 5.5H5.75A1.25 1.25 0 0 0 4.5 6.75Zm13.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </svg> : card.title === 'Follow us on Twitter' ? <svg role="img" aria-label="Twitter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <path fill="currentColor" d="M22 5.92c-.73.32-1.5.54-2.3.64a4.02 4.02 0 0 0 1.76-2.22 8.02 8.02 0 0 1-2.54.98 3.99 3.99 0 0 0-6.8 3.64 11.31 11.31 0 0 1-8.22-4.17 4 4 0 0 0 1.24 5.33c-.62-.08-.63.12-.97.12-.23 0-.47-.02-.69-.07a4 4 0 0 0 3.73 2.77A8.02 8.02 0 0 1 2 18.41 11.32 11.32 0 0 0 8.13 20c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.06 8.06 0 0 0 22 5.92z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </svg> : card.title === 'Customize It' ? <svg role="img" aria-label="Customize" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <path fill="currentColor" d="M3 17.25V21h3.75l11-11.02-3.75-3.75L3 17.25Zm17.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </svg> : null}
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title === 'Join our Newsletter' ? 'Newsletter Updates' : card.title === 'Follow us on Twitter' ? "We're on Twitter" : card.title === 'Customize It' ? 'Custom Projects' : card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>

          {/* Instagram Subscribe Carousel Card – bottom center within Follow Us. Height equals a card */}
          <SortableContainer dndKitId="52283191-dcb1-4c9b-9165-21704064a6a0" containerType="regular" prevTag="section" aria-labelledby="insta-subscribe-title" className="mt-12 md:mt-16 mx-auto w-full" data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b092c9df-1ae4-4d15-8c6e-03349881302e" containerType="regular" prevTag="div" className="bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-8 py-5 md:py-6" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="877eb24e-4933-4348-b61a-8d70e83bc17b" containerType="regular" prevTag="header" className="mb-4" data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h3 id="insta-subscribe-title" className="text-center text-xl md:text-2xl font-semibold tracking-tight" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">Latest on Instagram</span>
                </h3>
              </SortableContainer>
              <SortableContainer dndKitId="8e04307c-8eb1-428c-9d8b-ba5cba3319ba" containerType="regular" prevTag="div" className="relative" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="bc266a9f-6299-44a3-a801-459232eda588" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1" aria-label="Previous slide" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="1cdcbb84-3c06-40c5-8d83-0d95b07b8c26" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Previous" onClick={e => {
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
                }} data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <ChevronLeft className="h-4 w-4" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <SortableContainer dndKitId="f6a9ea11-cb8c-4a7c-a35e-c26abcb76f14" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1" aria-label="Next slide" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="a76101fe-0c0f-4458-816a-875a0f5f0cf8" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Next" onClick={e => {
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
                }} data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <ChevronRight className="h-4 w-4" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <ul className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] md:auto-cols-[minmax(240px,1fr)] gap-4 overflow-hidden" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   {['one', 'two', 'three', 'four', 'five', 'six'].map((_k, idx) => {
                  const key = `insta-${idx + 1}`;
                  return <li key={key} className="min-w-0" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                         <article className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-500 p-0.5" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                           <SortableContainer dndKitId="ba410183-2f44-42a4-ab0e-46d4cba80c11" containerType="regular" prevTag="div" className="rounded-[14px] bg-gradient-to-b from-white/10 to-white/5 p-1.5" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                             {/* Square tile: enforce 1:1 aspect and single row only */}
                             <SortableContainer dndKitId="3963b991-7c5c-4046-a86c-732f8cf56f8b" containerType="regular" prevTag="figure" className="w-full aspect-square overflow-hidden rounded-lg" data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                               <picture data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                
                               <img data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                               </picture>
                               <SortableContainer dndKitId="ba9bedf5-c579-47b2-97d0-4f3472abafa2" containerType="regular" prevTag="figcaption" className="sr-only" data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                 <span data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">Instagram highlight tile</span>
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="a4b9eb1f-7500-4126-ad41-8a4601beefdc" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="bb24233b-329c-43b4-bf67-9f8d2867720f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="23ef3ea1-912c-4f72-82bf-966ab71da8c4" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b5488130-4dfb-4e9a-b18e-1509eaa90115" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="c8366622-42f3-4813-96a9-f09e3c859ec8" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};