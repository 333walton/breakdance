import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "c8c6c6ad-f3a2-405c-9112-4b88acf3bfb3"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "6394dc27-f247-4ae9-b2a9-c1ce541633a3"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "fe3de5e6-96a4-4e30-91b6-34690560d435"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "0ac0cb7c-8d46-4cf5-992c-e00e8bdd9c2d"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "35f91f6d-a5c3-4400-82eb-5fc48a33f6d7"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "e7476249-8bba-457e-aef7-a95e3331f612"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "e7e019f2-7676-4199-981c-dce9a848372d"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "8de258d1-e22c-4244-b484-5161995a8105"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "bca3ca55-4b54-4043-b879-4c48430a5e66"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "25e1d149-c77b-4af8-99ad-188784cb5a44"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "36184eb0-f734-4580-9f84-1cc73faf90e5"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "dbd1e862-5c40-4d06-b799-2d219c834cce"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "e5ce4cca-2823-4004-9335-75c3049b8301"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "6ffeab88-0bcd-45fc-a31c-2a02c2b1d627"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "500cb7c1-21e9-474b-9d8c-d2f87ae84408"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "ab0c69ec-eb37-4283-bfa3-3f8c84996f28"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "0ac6d93c-953b-4472-812e-d634a4455c7d"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "97de27e3-afb3-42e3-be75-8255d26f82fd"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "cc6d4d3e-1244-45d8-b92a-08e563c82bab"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "fc236212-ddeb-4aac-90ee-73ec98dacca3"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Choose Your Style',
  description: 'Pick from your collection or browse our overlay library for a theme—vintage Topps to modern Panini to match your break’s vibe',
  mpid: "75057b2c-2a40-456b-8456-430a55888d3b"
}, {
  icon: Palette,
  title: 'One-Click Integration',
  description: 'Copy your unique overlay URL and paste it as a browser source into any streaming software for instant integration',
  mpid: "57fbc123-4a6c-4b9f-98cd-99fe62bb8e9b"
}, {
  icon: Copy,
  title: 'Go live with control',
  description: 'Just enter a buyer’s name into the break editor—your spot counter and team list update instantly and automatically',
  mpid: "7fdde766-44d0-427e-bd14-23df0d00168b"
}] as any[];
const stats = [{
  number: '19.8%',
  label: 'Higher Viewer Engagement',
  sublabel: '',
  mpid: "0226f6ea-8ed8-4b5a-902f-e88979fb6fa5"
}, {
  number: '3.2x',
  label: 'Higher Conversion Rates',
  sublabel: '',
  mpid: "b53abaef-edac-4efa-a559-b49f33bbb811"
}, {
  number: '47%',
  label: 'Fewer Technical Issues',
  sublabel: '',
  mpid: "0e531b9b-65a6-418a-8c82-332c5b3de1c4"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join our Newsletter',
  subtitle: 'Stay updated with hobby news and product drops',
  buttonText: 'Join Newsletter',
  color: 'bg-[oklch(78.4%_0.142_246.8)]',
  mpid: "7c58f8fe-88c4-40cd-b4df-02ec62f8ba8f"
}, {
  icon: Youtube,
  title: 'Follow us on Twitter',
  subtitle: 'Follow us for hobby news and product updates',
  buttonText: 'Follow',
  color: 'bg-[oklch(68%_0.16_240)]',
  mpid: "117f7758-d836-4c70-86c3-3417f9014f62"
}, {
  icon: Heart,
  title: 'Customize It',
  subtitle: 'Have something unique in mind? We can help',
  buttonText: 'Reach Out',
  color: 'bg-[oklch(0.510_0.262_276.9)]',
  mpid: "8b3d80a3-61e0-4ace-a373-d0e4df47546d"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "583cdc7d-1f63-49f4-b788-b91e615696d5"
}, {
  label: 'Tools',
  mpid: "5d87d4b5-a2e8-426d-898b-d968e7900f5b"
}, {
  label: 'How It Works',
  mpid: "8c296450-1146-42fe-a3a6-7108df953e04"
}, {
  label: 'Demo',
  mpid: "15a08a34-f4e8-4e86-a3e9-4f369a0ff4b0"
}, {
  label: 'Live Breaks',
  mpid: "110647e9-0c6d-491a-9ff7-736f4307ee09"
}, {
  label: 'Shop',
  mpid: "11fbce6e-1b51-4abc-abd7-b4ab8bd2952d"
}, {
  label: 'About',
  mpid: "57bcb457-14b1-4f25-a2c7-1a3ccfdf3fe5"
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
    mpid: "72afb053-fb3b-4c05-810a-4fdd157cb557"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "c2dab8d0-1842-47ee-93cc-e1fcdb1cdaf7"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "e811295a-372b-465c-9b6f-c3c66a28fc13"
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
      mpid: "c9599a79-8a12-4ba3-9886-49ec767d6461"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "bc3217d2-c7b7-45df-8b79-90e2c88880c5"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "450d5acd-09fe-4325-96c4-35922d772780"
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
    return <SortableContainer dndKitId="f60698b0-fb56-4f8f-8afc-48819a3fbdb7" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="6b0f1dc6-bf21-4d8a-8117-ee8523e56dc2" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => bringToFront('form')} className={`${baseStyles} form-window`} style={{
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
          <SortableContainer dndKitId="49ac600a-bde1-4a36-83d1-43198b1e55d1" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="bfedc843-42a0-45b0-a370-a7dd8d1005de" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
        <SortableContainer dndKitId="881c57b2-a2d4-4a78-85c5-945c5875eaac" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => bringToFront('nfl')} className={`${baseStyles} nfl-grid`} style={{
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
          <div className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)]" aria-hidden="true" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="b67f0af4-16fb-45db-88fa-6b7bf4c6f70a" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => bringToFront('phone')} className={`${baseStyles} phone-preview`} style={{
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
          <SortableContainer dndKitId="eb3677d4-db92-464f-bc21-14dd306e2413" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="4c006ef8-6240-4d6a-a111-172e6e44ba67" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-b from-[#1F1A30] via-[#582864] to-[#9149c1] text-white font-sans" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="b72e275d-fb10-446b-a9aa-ca797768f728" containerType="regular" prevTag="header" className="bg-gradient-to-b from-[#26213a] to-[#302742] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="79e42c7b-70d2-436c-9f4f-13b32203a5bb" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="375711c5-de80-42f5-b32e-57e61343f68d" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="2665a74c-e7fa-49b3-873b-d06ee6b63e7d" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="2a8262cd-596a-4855-b2fd-b988a6056e86" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="7efa53b2-877c-4745-893f-e4f263e18e7e" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="4ea0630a-6822-4c0c-93eb-acd940e739c1" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="e3862a9f-a1e6-4e96-a983-16ddd8f18f29" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="aa6f44ac-f618-462a-b8a1-9259385eb7d5" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="8035dc3a-00ad-4ae5-aa0c-ebb0e12c944f" containerType="regular" prevTag="section" className="px-6 py-14 bg-gradient-to-b from-[#302742] via-[#38305a] to-[#43305b]" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0921916f-cba8-461f-938f-00b20eda5c4f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="595767ed-79b3-4bc4-8442-d574c2664a36" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="21048031-b241-44cf-9587-18f7d224551e" containerType="regular" prevTag="motion.div" initial={{
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
              {selectedHero && <p className="text-xl text-gray-200 leading-relaxed max-w-lg transition-opacity duration-300" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">{selectedHero === 'form' ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : selectedHero === 'nfl' ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : 'Stream with BreakDance overlays and get instant promotion to collectors in our Live Breaks directory.'}</span>
                </p>}
              <SortableContainer dndKitId="246c97b1-7173-4b4c-bf5d-21898c658923" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="f34ed078-91dd-42e3-9829-e2df00f1c888" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="063061c1-6d99-44cd-8988-cb3affa6369b" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ac5a910e-8067-4e39-a1bb-d9fafed2f4b4" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="ecb16bce-04b1-40dd-aeed-a494c27322f8" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="ef25d7f6-8e45-40fa-8a6e-0b22fef9f51e" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ac5136ec-f333-4c14-94e7-6b04067d8448" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
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
      <SortableContainer dndKitId="dd15aaf9-e7ab-4ae6-b8ad-d08f45aba099" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-transparent" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="78e4fa16-476e-4c55-8c34-d261f1cb952d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0c99aed4-b876-4dac-ba87-09d9f005ccd3" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
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
      <SortableContainer dndKitId="3c8af205-f0a0-4ceb-847b-515b75e4dde1" containerType="regular" prevTag="section" className={`px-6 py-5 bg-transparent ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="734c239b-d2c6-4393-8163-8e2520be9653" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="39841508-32de-4152-8e9e-840283ef3abb" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="0e0702a8-ccc6-40bc-af9f-0eecf550fae1" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="4b08bcd5-b149-40ab-98f8-c5afab094ab6" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f99fe5d6-fdc8-43ab-bf80-d1fbec906688" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="47e81293-8edc-40e8-b047-e51531193ce7" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="c26cbd37-ce00-472d-98c6-7f3f7237d520" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="80c1db38-f70d-4493-81d7-71c5dfd185ad" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="eb01a4a6-f8ff-49e0-b5ed-3c3fe27ef4e0" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="0e5b5eb4-ac30-432b-adb2-692e7fd8adea" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 to-[#9149c1]/10 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium FlyIn' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
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
      <SortableContainer dndKitId="1bce18fd-c739-4315-9334-f80c28c40a41" containerType="regular" prevTag="section" className={`px-6 py-5 bg-transparent ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b13ac87c-e487-4737-b9ef-0b60483b381d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="becdcc99-92c9-42c4-9b79-183d59a5b926" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="77b2fd30-1e55-4a76-bc1d-b7d444511a45" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="6a91810e-800e-4bf9-aa26-a09be6349eb0" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ac802d76-e718-40f9-a3f4-17485967b15e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="ef138373-6d61-4161-bf9c-cd140387cf2c" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="db91df86-22f6-4db3-98cf-d609dbbd4424" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="d521c0a3-9f87-4101-a273-3b6a87636d2d" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="418fca86-9601-4a2d-9d1e-755f3b3e36ad" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="de1c6a5a-ac7d-41c7-a605-19a21a0a6743" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="4aaa6bae-6ab8-43d1-9ccf-5580e8827574" containerType="regular" prevTag="section" className={`px-6 py-5 bg-transparent ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="61ee8d94-aea3-4c2e-b8e8-0f006850e750" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="df206608-583a-4663-9737-8322311198df" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="96c86522-32ac-4764-8300-92774ad3177c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d70d1165-e3ae-4c10-94a4-480cdbad9fd8" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="c716676d-97eb-433c-a588-f7ce9ebdabea" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="8770ee5f-5207-4785-820c-d1985a8fb715" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="f1426a08-6528-409b-a52a-35736352f583" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="4be1ef46-8c68-4ec3-92bd-27d6bfcc0113" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="02b779a2-6fcc-4b76-afe5-f3fead2a7144" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f39b6c39-ec1b-469e-a143-f0d9e4b7e84f" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="96bb757b-6e01-4a8c-9486-000e9168fef0" containerType="regular" prevTag="section" className={`px-6 py-5 bg-transparent ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="469b45da-84f2-4522-a41a-92821231bf2c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6f1ee514-5d31-4597-aae4-714bd350ba7e" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="279216e8-0568-477f-8704-982c71348806" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="1c4432d2-c324-4cc7-bc6e-6e6229ec3701" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="594b0c96-5da3-4e55-820a-9ed55fec5cf1" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="8a0e7831-d766-4080-b81a-58918835b74b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="d311f2e7-c67d-4536-8428-73454e3b26be" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="e68bb4ab-13a2-4eba-ae7c-c1e3049d737e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="d135e6d4-e232-4064-822e-a812a33bebe9" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-b from-[#582864]/20 via-[#9149c1]/10 to-[#c6a1eb]/5 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium FlyIn' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
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
      <SortableContainer dndKitId="93a3e62d-ce23-46dc-bed3-19443944581a" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] via-[#38305a] to-[#43305b]" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="c5e44365-e046-4541-ba15-23296e987790" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="28420715-f94c-439d-8872-ee4832fc2ed1" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ceec1b1c-49d3-4f97-9f75-ffebee55bc3c" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">Go live. Get featured. Stand out.</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">Every BreakDance overlay automatically features your stream in our Live Breaks directory, driving qualified traffic to your channel</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="7942d53d-7fb9-4039-af29-2c2e7752bbbe" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="44d5b7a6-077a-411a-a80c-58a7dac5142c" containerType="regular" prevTag="div" className="bg-gradient-to-b from-[#26213a]/60 to-[#302742]/40 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ef2e09e0-4859-4757-929a-5cad349e7a83" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="4bc1f8d6-12a8-4e3f-8789-d667d6263e4b" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="3c1bade4-b6f3-4140-a21c-6b8fa744e128" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#2b253e] to-[#302742]" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="e44a4d79-087e-44e7-8284-88a3c57cdd10" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">From Purchase to Live in Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get streaming like a pro in under 5 minutes with our streamlined process - for breakers at every level</span>
          </p>
          
          <SortableContainer dndKitId="6154b022-77f2-41ae-b643-508ee3eb2518" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

          <SortableContainer dndKitId="742c18dc-220e-4c13-81bd-7d5c6c9067ad" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="1abfafd0-da25-41d5-9e6a-069368fe66b2" containerType="regular" prevTag="section" className="px-6 py-24 bg-gradient-to-b from-[#302742] to-[#43305b]" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fb8e3f84-15bf-4a3f-98cf-143a60daf0b0" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">Unlock Your Potential</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.</span>
          </p>
          
          <SortableContainer dndKitId="45f374df-58f9-4601-9d4f-b5b832e9fd90" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="0b2629e0-0080-43a5-84f2-119b444f664c" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="647d9e55-cff7-40bf-afb6-3c672c1e2ae7" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="c72ac6b1-f140-4a85-b5d0-d1fafb2243d2" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c4992eb9-b9f7-43fe-a1f5-12981026a2a9" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="67a06d13-48b4-4461-b8f8-a657f80bf093" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-2" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Starter</span>
              </h3>
              <p className="text-gray-300 mb-6 text-base" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get started and explore BreakDance with no cost or no commitment</span>
              </p>
              <SortableContainer dndKitId="641c08a4-827b-4fb6-9019-e59a85ced78e" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="733e45fb-8453-4254-b8af-2ca0f4799123" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="bfa41328-db46-4fa3-969e-3c1b8fb3ef74" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="914993bb-9c25-47bc-a714-0c2ebf82a3a2" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="fa28e152-5895-42a5-b0ff-eae05132175b" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-2" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance Pro</span>
              </h3>
              <p className="text-gray-300 mb-6 text-base" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">Best for regular users who want to experience the full functionality of the platform</span>
              </p>
              <SortableContainer dndKitId="5eb881f2-4959-4a11-a288-5a4844fd6db1" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="f5f63247-2afe-4a13-9b73-2708941d4192" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="5409d9d6-8dcf-4b06-8c9f-3cb83cb0cefe" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Pro</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="423ddce0-0712-4716-b799-ed8c80711067" containerType="regular" prevTag="section" className="px-6 pt-24 pb-0 bg-gradient-to-b from-[#2b253e] to-[#302742]" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="42e94813-885b-4efd-b0ed-1816d6ba8721" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">Why Production Quality Matters</span>
          </h2>
          {/* Create a self-contained stage with fixed min-height so hover growth doesn't nudge following sections */}
          <SortableContainer dndKitId="fdb4a94c-2444-46ab-9107-968dd5e9961f" containerType="regular" prevTag="div" className="relative" style={{
          minHeight: '25rem'
        }} data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="4170d6af-6bcd-465e-9386-a37780c7d4e1" containerType="collection" prevTag="div" className="grid gap-8 stats-grid md:grid-cols-3" data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 overflow-visible stats-card" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                  </div>
                  <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                  </div>
                  <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx"></span>
                  </div>
                  {/* Expansion appears visually below base content but uses a transform so siblings and grid height feel stable */}
                  <div className="card-flyout" aria-hidden="true" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <p className="text-sm text-white/90 bg-white/10 rounded-xl px-4 py-3" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number === '19.8%' ? 'Streams with premium production quality generate 19.8% longer average watch times and more active chat participation' : stat.number === '3.2x' ? 'Professional production quality converts casual viewers to regular customers 3.2x more effectively than basic setups' : 'Streamlined overlay systems reduce technical interruptions by 47%, keeping your audience engaged throughout every break'}</span>
                    </p>
                  </div>
                  <style data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
                </div>)}
            </SortableContainer>
          </SortableContainer>
          <style data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
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
      <SortableContainer dndKitId="f5400d0d-a44a-42bf-a955-b07ae17037b6" containerType="regular" prevTag="section" className="px-6 pt-0 pb-24 bg-gradient-to-b from-[#302742] to-[#1F1A30]" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b08e4a34-f952-4de0-a043-acf58a99e5a4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get in Touch</span>
          </h2>
          <SortableContainer dndKitId="bb9b91b7-7626-4aff-bbea-15ef485fedab" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {/* Icon per card by title for precise replacements without altering other content */}
                {card.title === 'Join our Newsletter' ? <svg role="img" aria-label="Newsletter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 4.5 6.75v.3l6.86 4.117a2 2 0 0 0 2.28 0L20 7.05v-.3A1.25 1.25 0 0 0 18.25 5.5H5.75A1.25 1.25 0 0 0 4.5 6.75Zm13.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </svg> : card.title === 'Follow us on Twitter' ? <svg role="img" aria-label="Twitter" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <path fill="currentColor" d="M22 5.92c-.73.32-1.5.54-2.3.64a4.02 4.02 0 0 0 1.76-2.22 8.02 8.02 0 0 1-2.54.98 3.99 3.99 0 0 0-6.8 3.64 11.31 11.31 0 0 1-8.22-4.17 4 4 0 0 0 1.24 5.33c-.62-.08-.63.12-.97.12-.23 0-.47-.02-.69-.07a4 4 0 0 0 3.73 2.77A8.02 8.02 0 0 1 2 18.41 11.32 11.32 0 0 0 8.13 20c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.06 8.06 0 0 0 22 5.92z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </svg> : card.title === 'Customize It' ? <svg role="img" aria-label="Customize" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <path fill="currentColor" d="M3 17.25V21h3.75l11-11.02-3.75-3.75L3 17.25Zm17.71-10.2a1 1 0 0 0 0-1.41l-2.6-2.6a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 2.09-1.57Z" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </svg> : null}
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title === 'Join our Newsletter' ? 'Newsletter Updates' : card.title === 'Follow us on Twitter' ? "We're on Twitter" : card.title === 'Customize It' ? 'Custom Projects' : card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>

          {/* Instagram Subscribe Carousel Card – bottom center within Follow Us. Height equals a card */}
          <SortableContainer dndKitId="9bb2bc56-e0e0-4bc2-b87d-1d19b7ec63cb" containerType="regular" prevTag="section" aria-labelledby="insta-subscribe-title" className="mt-12 md:mt-16 mx-auto w-full" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c8c719e0-bbea-4294-9d59-e428f5115a42" containerType="regular" prevTag="div" className="bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-8 py-5 md:py-6" data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="2cfc5417-de64-4a6f-b727-de2c799ea9e6" containerType="regular" prevTag="header" className="mb-4" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h3 id="insta-subscribe-title" className="text-2xl font-bold mb-4 text-center" data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">Latest on Instagram</span>
                </h3>
              </SortableContainer>
              <SortableContainer dndKitId="65a5eb15-0086-43a5-9e99-670609919fe1" containerType="regular" prevTag="div" className="relative" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="4d7374e6-1169-41cb-85be-2303aa843a77" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1" aria-label="Previous slide" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="aa585ff9-0977-47f4-abc6-15062fd4553b" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Previous" onClick={e => {
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
                }} data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <ChevronLeft className="h-4 w-4" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <SortableContainer dndKitId="4c679bd1-d2cf-4299-a50d-065603ba5a34" containerType="regular" prevTag="nav" className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1" aria-label="Next slide" data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="f579b1fc-a02a-4e7a-a055-3b43f32c8b97" containerType="regular" prevTag="button" type="button" className="pointer-events-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800/80 text-white/80 ring-1 ring-white/10 transition-colors hover:text-white" aria-label="Next" onClick={e => {
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
                }} data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <ChevronRight className="h-4 w-4" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
                <ul className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] md:auto-cols-[minmax(240px,1fr)] gap-4 overflow-hidden" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                   {['one', 'two', 'three', 'four', 'five', 'six'].map((_k, idx) => {
                  const key = `insta-${idx + 1}`;
                  return <li key={key} className="min-w-0" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                         <article className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-500 p-0.5" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                           <SortableContainer dndKitId="c6c9ede9-27a5-4391-a54d-91919e01b50d" containerType="regular" prevTag="div" className="rounded-[14px] bg-gradient-to-b from-white/10 to-white/5 p-1.5" data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                             {/* Square tile: enforce 1:1 aspect and single row only */}
                             <SortableContainer dndKitId="9deb47f0-9e49-4045-882c-2e767ad69676" containerType="regular" prevTag="figure" className="w-full aspect-square overflow-hidden rounded-lg" data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                               <picture data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                
                               <img data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                               </picture>
                               <SortableContainer dndKitId="9425c241-71fa-4383-a1c8-69cb16c03555" containerType="regular" prevTag="figcaption" className="sr-only" data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                                 <span data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">Instagram highlight tile</span>
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="d69ccfac-185d-4461-978a-e2725b49c386" containerType="regular" prevTag="footer" className="px-6 py-16 bg-gradient-to-b from-[#1F1A30] to-[#582864] text-white font-normal" data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="29a7267b-2444-4fc3-bc3c-bbf40a692666" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="942e1446-786a-4d62-b9cd-b5aa4bd7b235" containerType="regular" prevTag="div" className="flex flex-col items-center text-center" data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <a href="#" aria-label="overlays.uno home" className="mb-10 mt-4" data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-[44px] leading-none font-bold tracking-tight" data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="sr-only" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">BreakDance</span>
                <span aria-hidden="true" className="align-middle" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break</span>
                <span aria-hidden="true" className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx"> Dance</span>
              </h2>
            </a>

            <SortableContainer dndKitId="65f3ad0f-b3ad-4ab8-bf47-57b41db9f3a3" containerType="regular" prevTag="nav" aria-label="Footer links" className="mb-4" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="aad877bb-7b14-41af-8fde-144849a6fd63" containerType="regular" prevTag="ul" className="flex items-center gap-6" data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
                  </a>
                </li>
                <li data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
                  </a>
                </li>
              </SortableContainer>
            </SortableContainer>

            <p className="text-xs text-white/60" data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx">© 2025 All Rights Reserved</span>
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};