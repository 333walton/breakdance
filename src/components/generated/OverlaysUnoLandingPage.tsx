import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "f002b6b3-2e94-4780-b437-f3236e6f53ec"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "81823074-ec85-406f-bfcb-2aff670e18ea"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "4f8882b0-a61e-47ae-9fd3-1859592b46cf"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "265e1aa4-0723-4f56-8417-2522180cabff"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "94c0ba7d-93be-4451-a4a3-d4cd60b02ce7"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "2c2bd946-f946-4536-ba1d-ea8db215b9b3"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "1addf29a-1f09-455c-b202-115f9415be4c"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "50e55a61-3fd2-4c09-ba5f-84bc64b64c4c"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "fc5858b1-d24a-4527-8e8f-09619b0a9931"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "6e5afba5-2516-4fb2-8e98-c6ae463d6900"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "9776012b-4b90-46d8-98af-3c73819b7e05"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "1a77f651-67cf-437a-9c76-544a93173a59"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "3becf13f-3991-4de1-9cfd-314a48380752"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "9cce942f-f1c0-4f83-a567-8770449d1624"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "3bd9493b-d14f-4fd0-bdac-b907126129ba"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "8d2afa7c-d7f8-42a9-9c3c-485037e4c640"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "705253fa-a2d1-4cb9-9f1b-ba18f92dbeb1"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "a5fd1eee-5df4-4a91-8800-4f440cdf9a3e"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "8129778e-784c-49e0-93e5-9e704d94b509"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "e0e30d3b-f2e3-420a-935b-7091a5783430"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Choose Your Style',
  description: 'Pick from your collection or browse our overlay library for a new theme—themes range from vintage Topps to modern Panini to match your break’s vibe.',
  mpid: "cb09ff3b-61ac-4fb0-af2f-f8758b3ca55a"
}, {
  icon: Palette,
  title: 'One-Click Integration',
  description: 'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  mpid: "180a7489-c12e-445b-b9d9-ebbc92317e92"
}, {
  icon: Copy,
  title: 'Go live with control',
  description: 'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  mpid: "a79f9566-546b-4f15-82e1-c276d0dbde18"
}] as any[];
const stats = [{
  number: '19.8%',
  label: 'Higher Viewer Engagement',
  sublabel: '',
  mpid: "035a7d0d-f0aa-429e-a92d-4805166053d0"
}, {
  number: '3.2x',
  label: 'Higher Conversion Rates',
  sublabel: '',
  mpid: "a9af7cd6-c4b3-4404-9b26-35958c5f108c"
}, {
  number: '47%',
  label: 'Fewer Technical Issues',
  sublabel: '',
  mpid: "8c69dd85-293b-4596-8982-9ba79dac1d09"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "35be8f58-1a27-46fe-ad61-b5d409cbbff2"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "35e14f29-7bf0-4d10-a809-3a0b53b17a12"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "f654d184-278e-430c-a077-a842df39e99b"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "74cac007-42eb-46f1-8c68-6202d79db79d"
}, {
  label: 'Tools',
  mpid: "3c36a643-5ea7-4698-b901-b3097914eaca"
}, {
  label: 'How It Works',
  mpid: "4531b59e-1bac-44e1-ad14-46da51f0b8ed"
}, {
  label: 'Demo',
  mpid: "c1c98e4a-3b9f-419d-af71-23f6bfb32aae"
}, {
  label: 'Live Breaks',
  mpid: "79beef85-01d3-47f2-873e-48f28978af44"
}, {
  label: 'Shop',
  mpid: "ad334853-290e-4c03-a76b-3768f1c55267"
}, {
  label: 'About',
  mpid: "0ebc5b39-4ecf-468f-99e2-1e00ea92c8eb"
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
    mpid: "09a46655-54d1-48eb-a13a-d06dd37ae545"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "53ef520f-5f7f-44af-b84b-36e0c7e863b0"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "2509acdc-829d-4a26-bd6a-db3770dde789"
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
      mpid: "70abeb13-fcbc-4b9e-af03-8361d5b5fbdb"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "3ac7cb07-cfc0-4daa-8926-e1014de8335b"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "b5876321-6dba-4cf5-bfd3-abfbb087b22e"
    }] as any[];
    const [frontId, setFrontId] = React.useState<string>('phone-preview');
    const baseStyles = 'hero-button absolute will-change-transform rounded-2xl transition-[transform,filter,box-shadow] duration-[500ms] ease-in-out border border-white/10 bg-white/5 backdrop-blur-md';
    function zFor(id: string) {
      // If a hero is selected via top-level buttons, force that one to the top without changing existing layering rules otherwise
      const selectedId = selectedHero === 'form' ? 'form-window' : selectedHero === 'nfl' ? 'nfl-grid' : selectedHero === 'phone' ? 'phone-preview' : null;
      if (selectedId && id === selectedId) return 1000; // highest among the three when selected
      // preserve previous relative stacking
      return id === frontId ? 999 : id === 'nfl-grid' && frontId !== 'nfl-grid' ? 20 : 10;
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
    return <SortableContainer dndKitId="e66bcf5c-54b1-4d6c-9b29-c6d45b1a8332" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="ac4a78b9-dd34-44dd-afac-a28b17f90ae9" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setSelectedHero('form')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '85%',
        height: '74%',
        left: '9%',
        top: '7%',
        transform: 'translate(0%, 6%) scale(0.98)',
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a5efac9d-1bb9-461a-97de-6b0b6596aa81" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="044be37c-da3c-418d-86f8-f08f09a7bac2" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
        <SortableContainer dndKitId="da2fb526-5ced-41bb-ae40-daab262f4cc5" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setSelectedHero('nfl')} className={`${baseStyles} nfl-grid`} style={{
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
        <SortableContainer dndKitId="b0b2f9c6-a662-4042-8bde-24aa4da5ade4" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setSelectedHero('phone')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        left: '3%',
        top: '17%',
        transform: 'translate(-6%, -6%) scale(.7)',
        transformStyle: 'preserve-3d',
        width: '36%',
        height: '72%'
      }} data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="46db9457-6108-4cae-9dc3-531ad77c913a" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="a8471613-24aa-4402-a4e0-37fc54bf2074" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="edefc29e-7454-4eed-92f5-dcdc12af4ef0" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a1ded63c-0d57-42b3-ae0e-21c5719f9561" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d7e66244-a15c-43e8-be02-6ccbe06f7e15" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="3cbcebfd-32cd-4c07-9b3c-0a3f88635f96" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="e8a4df86-8c7e-43d6-9494-92c1dcbab498" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="eb189d13-4e3e-45f2-91ea-e86775adcbc8" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="71fdcd07-c8e2-437a-be86-4997590e05ed" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="6cfe7902-8c5a-4c37-b933-91b68355873b" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="318bf711-69fe-43ba-bde0-26fdf1b349ea" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="ed7d3360-ffff-4f31-8718-375d7411b1dd" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2cba8fc8-f714-47cc-ada0-40839c06f496" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f813f815-f851-43af-a049-3a54dcc76122" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="a17080f8-9d55-4956-adb1-5c58664dcead" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="743e8400-c060-46f5-b3cc-903efcf220a2" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="d6012843-8afc-4eb0-b5a2-87cc3debd479" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ccf08bde-4124-4d1f-bc2a-5ecaa94d9085" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0b962f4f-239d-4ea9-b54f-7ef615b50bbf" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="519fab3c-8903-401d-a29e-87121fa98902" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8a8afc4b-bea5-477f-94d6-730d78af3541" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="781e8f5e-f0fa-4c78-8ca5-5b439d7eafb0" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
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
      <SortableContainer dndKitId="27f66e5a-f396-425d-b4b9-42d5b4b59d1c" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="83f1f3fd-9f42-4601-a96f-b4e6fb033868" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="554d5956-5526-4040-9f0a-e20036af5593" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="d8582da4-41b6-4c5a-b1d2-f143c6e0d5bc" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fa1ffec3-6828-4c9d-95fe-3755b73745a3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b1a3ac47-213b-4136-8fb3-61a1cb2c5baa" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="3aed6f8c-216c-4651-880d-f9759dca720d" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="3f3fa85d-5fce-4a26-808c-2801ed61f6d6" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="dd75ade8-6282-44f2-bf6b-00c5fd849fb1" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="0c408544-33f9-4b45-8572-c84176717713" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="895317ab-310f-42ff-b6ff-5730cc43d9fb" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="adebf356-bff3-42b9-a974-29840b8becc0" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="2c32ed8a-5452-4e58-9699-d4f20c65a36b" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f39c37e9-c94b-40ff-9303-bdce25ecb7a2" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="1ddb486d-7177-4abe-b758-2da4e9febe54" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d1652bfa-d22d-4e09-a303-056828645668" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b210bb84-7526-4b5c-b9c5-8df6e85e07c2" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="743fdbfe-a3bd-4bc1-a4a7-6e72a599c716" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="e0c2d6de-6c67-4944-8d91-7943ada26818" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="53ef3a51-49c9-41d8-9287-9c30defcbe28" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="2fec3e89-47ee-4454-8803-a5b923eaa12c" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="b87118ef-3407-4ba8-bbc0-ba8060ed7354" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="f450ab8a-38f5-4f45-b43f-08cd2542587e" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="56c3ecef-392e-4ac1-8967-23b575be08eb" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="7ce8e74f-8398-42a5-abdb-a0fcdb7128ae" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="1f55217a-f6d8-4e30-938b-55bc316e2738" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0e8600c4-5846-4253-b017-cf9bf1badbba" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8a33f0b1-331e-4e2d-9ecb-21b9d4cecd86" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="c7140d89-9cb9-421d-8434-0126c9f7ecae" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="004cce1c-fcac-44b2-bf18-08142783d4b6" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="249c2a57-6bbc-4201-a856-9b64e366e1a1" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="5d0dc9aa-4144-490b-a113-92e1509c2f94" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="4fcc8058-ca34-4373-8271-2890d2a3c132" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="07db8bc7-7300-4ea6-aaed-0c3b3106b37f" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ae0cb9d7-2f9c-45d5-8f00-e3ceb17ad165" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="7752ba93-7b4f-43c2-a1ee-aa216c932f0e" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="46a67e63-ddd4-4006-b3c2-b1106e37287a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="e39ded43-d989-432b-8217-ab4a42af22ce" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2fb7ee4b-9c9b-4439-a83d-359a5f9232aa" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="20a08e66-9146-47ce-b3a4-335044c0a2dd" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="e5bd33e5-08c4-48c9-83f8-ea2f80289d83" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="7ce96d32-4b22-48f2-a740-7c7b925db995" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="9e9f82dd-f785-4c79-8d83-df7a5c2b36ac" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="a1f969bb-22f7-4f4e-a6a2-038757702848" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="3f688767-0ce7-4b14-883a-74f27a34ce0e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="216208df-e90f-4c8e-864b-81117c57ae80" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="f06e588a-f3a9-43b7-a798-ffa0d8d2d969" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9d0251f3-53b4-410b-9b7d-62b6db80339e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="fee18b6c-e589-48d5-8e49-6851e56f6e2c" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="22983d01-53e0-42f7-b4df-a426f52d091f" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">Go live. Get featured. Stand out.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">Every BreakDance overlay automatically features your stream in our Live Breaks directory, driving qualified traffic to your channel</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="166c5855-160c-4cbe-9138-7042e5bd9b12" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="07b6f3f1-2b2a-4cb9-bf64-5bd097e56114" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="de752376-6c4d-4755-bada-b77ea57707bb" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="93e36c60-3718-47b8-b0c0-40b475e5dd5d" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="d8e246d5-47d8-42dc-b1e8-851f2ac45eaf" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="433a3fb7-e498-4184-93f3-70c28a940bd6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get streaming like a pro in under 5 minutes with our streamlined process - for breakers at every level</span>
          </p>
          
          <SortableContainer dndKitId="33a809ed-a1e8-4d5c-a6c8-4cd4d6280fbb" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="009ebcc0-9b50-4fb1-b459-6419b9dfad2f" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="dad06e27-98b9-444e-91ef-64a9b8d7bc2c" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1d9d6fd3-0004-4bae-b558-08d320799cf5" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">Unlock Your Potential</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.</span>
          </p>
          
          <SortableContainer dndKitId="a2e1f85b-4d9a-4a24-a2a1-c8bf7dd33d45" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="997b4dac-bab7-41a6-b01c-991829c7d35a" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="da318077-58d5-400b-bc3c-05c6647b2e88" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="7b3d946b-793e-43da-a500-82f8edf16620" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="3ca5db05-d60d-43ed-b34b-605972a7cc5a" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="f37a3ecb-4d4b-44e9-af68-13626fb78078" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-2" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Starter</span>
              </h3>
              <p className="text-gray-300 mb-6 text-base" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get started and explore BreakDance with no cost or no commitment</span>
              </p>
              <SortableContainer dndKitId="ec12d5d7-8e8e-4500-be0a-a9b8bd2e204f" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="14969179-d1c6-40fc-a40a-324c81347693" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="56f39603-0eaa-42c7-8cdc-5dfffdbb70fe" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="6a156e08-0843-4de4-be2c-418ea95b1d5b" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="b9367a00-7c6d-459f-aaad-39c448269d8a" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-2" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Pro</span>
              </h3>
              <p className="text-gray-300 mb-6 text-base" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">Best for regular users who want to experience the full functionality of the platform</span>
              </p>
              <SortableContainer dndKitId="780040c4-3bbc-474b-af55-aec2fee953ea" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="55609fd1-6e70-492d-9f00-6e1206c21436" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="7664844e-84da-4db2-bad5-bc115a1c67bc" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Pro</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="a4fa3bbb-6cb1-444c-b965-567a3150fc08" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="87ea6ae4-f5d5-4319-8c02-c46d76761f86" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">Why Production Quality Matters</span>
          </h2>
          <SortableContainer dndKitId="1298882f-9cb5-4729-a48b-2af1579b57ac" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 overflow-hidden" onMouseEnter={e => {
            const p = e.currentTarget.querySelector('p[data-detail]') as HTMLParagraphElement | null;
            if (p) p.style.maxHeight = '10rem';
          }} onMouseLeave={e => {
            const p = e.currentTarget.querySelector('p[data-detail]') as HTMLParagraphElement | null;
            if (p) p.style.maxHeight = '0px';
          }} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                </div>
                <div className="mt-4 text-left" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <p data-detail className="text-sm text-white/90 bg-white/10 rounded-xl px-4 max-h-0 transition-[max-height] duration-500 ease-in-out overflow-hidden" style={{
                textAlign: 'center'
              }} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number === '19.8%' ? 'Streams with premium production quality generate 19.8% longer average watch times and more active chat participation' : stat.number === '3.2x' ? 'Professional production quality converts casual viewers to regular customers 3.2x more effectively than basic setups' : 'Streamlined overlay systems reduce technical interruptions by 47%, keeping your audience engaged throughout every break'}</span>
                  </p>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="dc36b181-da6e-403d-a81d-8517e08d7b47" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d60517f7-a4d3-49e1-85da-ca82002b2062" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">Follow us</span>
          </h2>
          <SortableContainer dndKitId="2ddb270c-f3c5-4f3e-866a-86af5fc3f47d" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="674385f2-1dc9-4cfa-b709-41aec5cfd8c0" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="32ede6b3-4de8-4384-bf80-899939567784" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="34e0aaea-cc95-443c-89e0-515221813654" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="59e0904f-64b8-4d32-a7c0-ce20850f4a15" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="5685d639-b3f0-4c2e-b4fe-883010e6a04e" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};