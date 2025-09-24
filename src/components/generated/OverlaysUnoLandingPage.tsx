import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "6b836df1-b1e7-4f8f-b65c-357aafe226e4"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "7f010c62-df23-4ef3-8f83-9525625fd41b"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "b83e1b3e-e416-45f1-81e7-91fd02c84d1b"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "8781ef3d-5b9d-4233-931b-f7f4feeb65c0"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "1427aafa-6a76-48a9-8f81-ea0496b23f14"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "021dd506-1a32-4fa3-a1ac-359711e34df8"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "777b13c5-b459-4488-b24a-77191cdc33eb"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "06e93995-0165-4713-9ff1-d5eecd80b0c4"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "5eb0f727-b69c-4514-a91a-d53a14a5a09b"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "b08dbb9a-4f61-4e3b-9770-20f016c7cb28"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "4f00e161-b731-45db-89be-36ff86480b72"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "61d96d29-d68b-4c1e-9d45-d3b36f09bbf1"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "e438b292-4001-42fb-9152-9a6a63601f21"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "66eaa04c-c2b6-4f22-861b-6e28b04ff362"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "83bec22f-7bc4-4e00-81b1-05ec63191b90"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "4d708655-32b8-40c8-9e4f-bf410f6c6257"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "400b5dc6-25e3-4938-99b0-07867265b626"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "5eaf0d7a-3e57-4d7a-8cdc-4dddcd032dc0"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "c440759b-4789-45f4-bfcf-fa5ca82060cd"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "87e59e0a-0daa-4e62-8c39-e1a7e9d5e904"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "3fc1db11-e12e-42b2-9bf4-d9115f75737b"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "1e522447-73f6-4cf6-af9d-0f088f928e13"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "28c68f3a-6290-4812-b233-d9691e81779f"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "b1631470-d163-48b9-976b-307d427dc095"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "034f8b19-a1e0-4b63-8ce7-4c486804da93"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "d7152834-3375-48aa-a65f-f0a6a5021851"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "f01adb9d-a9c5-49a5-ba8a-f87bed8ee6b9"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "bb452eeb-f46d-4408-9040-620ee80c33c0"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "3d108f88-5cba-4ae2-90cb-2c41417779d3"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "8c691791-836f-4c71-854d-03bfe98814d6"
}, {
  label: 'Tools',
  mpid: "feb3ef76-0c0f-4aae-9600-de912e7ea857"
}, {
  label: 'How It Works',
  mpid: "02d54ac2-48ce-4382-9e75-5b324fccd831"
}, {
  label: 'Demo',
  mpid: "a965b813-edac-4b8e-b4dc-526475c0a3d4"
}, {
  label: 'Live Breaks',
  mpid: "703613ef-b296-4483-9a75-e6426a565b19"
}, {
  label: 'Shop',
  mpid: "5b9b885a-b1f2-4dc3-a06f-e6d2ffda08be"
}, {
  label: 'About',
  mpid: "72970e17-9330-4b6e-bf2a-1fe530a6cc41"
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
    mpid: "04f9c931-e611-47b6-aacb-9be7b891432f"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "18ef1d32-c75c-4ec4-aaf0-5d5230d20a76"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "683abefc-dd40-42b8-9131-67f8dbe0fb6b"
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
      mpid: "05e0fe23-393b-4bfc-9fbc-9ed1b8820b56"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "1919987f-1931-4098-8d95-964ec53d6b1a"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "25c3a77f-8cf1-404d-9686-ae42bb9648d6"
    }] as any[];
    const [frontId, setFrontId] = React.useState<string>('phone-preview');
    const baseStyles = 'hero-button absolute will-change-transform rounded-2xl transition-[transform,filter,box-shadow] duration-[500ms] ease-in-out border border-white/10 bg-white/5 backdrop-blur-md';
    function zFor(id: string) {
      return id === frontId ? 30 : id === 'nfl-grid' && frontId !== 'nfl-grid' ? 20 : 10;
    }
    function transformFor(id: string) {
      const isFront = id === frontId;
      const scale = isFront ? 1.15 : 0.96;
      const rotateY = isFront ? '0deg' : '-18deg';
      const translate = id === 'phone-preview' ? 'translate(6%, -10%)' : id === 'nfl-grid' ? 'translate(-4%, 2%)' : 'translate(-10%, 12%)';
      return `${translate} rotateY(${rotateY}) scale(${scale})`;
    }
    function hoverStyles(isFront: boolean) {
      return {
        boxShadow: isFront ? '0 20px 60px rgba(255, 197, 67, 0.25)' : '0 14px 40px rgba(0,0,0,0.35)'
      } as React.CSSProperties;
    }
    return <SortableContainer dndKitId="b0f3459e-d35c-4d3e-ba17-0ba69be3550e" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* bottom layer: form window */}
        <SortableContainer dndKitId="e374d0b7-8135-4046-8264-7a4332badd9e" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '72%',
        height: '54%',
        left: '6%',
        bottom: '6%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="55a89f19-4633-440d-bfe0-d769fef881c5" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="4e43dd0c-6196-44c7-b8b5-4e25e599171d" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="f7649bc4-de7a-4a46-8153-280fae0150bf" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <label className="col-span-1 sm:col-span-2 flex flex-col gap-2" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-[10px] tracking-wider text-white/60" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">SUBSCRIBE</span>
                <input aria-label="Subscribe email" placeholder="your@email.com" className="bg-white/5 text-white placeholder-white/40 rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFC543]/50 border border-white/10" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </label>
              <label className="col-span-1 sm:col-span-2 flex flex-col gap-2" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-[10px] tracking-wider text-white/60" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">OVERLAYS LINK</span>
                <input aria-label="Overlays link" placeholder="https://uno.live/your-overlay" className="bg-white/5 text-white placeholder-white/40 rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFC543]/50 border border-white/10" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </label>
              <SortableContainer dndKitId="38e3661e-0fb6-4591-a956-30ac6da99490" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ae9fb5ca-01fa-4c4c-bebd-621f9f463129" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105 transition-transform duration-500 ease-in-out will-change-transform" style={{
                transform: 'translateZ(20px)'
              }} data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">Submit</span>
                </SortableContainer>
                <p className="text-xs text-white/60" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">No spam. Unsubscribe anytime.</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* middle layer: nfl grid */}
        <SortableContainer dndKitId="c8a06f2c-b7e0-4f73-ad7d-f20b7cfee0d8" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '68%',
        height: '58%',
        left: '18%',
        top: '14%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b1637d3e-bec3-4bb3-99b5-1ba72a5f742d" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ed4e8d7c-5304-4aad-9376-4219320e26d8" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <div className="grid grid-cols-4 gap-2" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {[...Array(16)].map((_, i) => <SortableContainer dndKitId="fc32cee6-a40c-41ef-8580-ac2e663236cc" containerType="regular" prevTag="div" key={`team-${i + 1}`} className="aspect-square rounded-md bg-white/5 border border-white/10 flex items-center justify-center" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span className="text-[10px] text-white/70" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">Logo</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>
        </SortableContainer>

        {/* top layer: phone preview */}
        <SortableContainer dndKitId="43a5636e-463a-4517-a39f-3d97f290a38a" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        width: '38%',
        height: '72%',
        right: '4%',
        top: '6%',
        transform: transformFor('phone-preview'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="bb05e765-3fd1-4c4c-8947-4b7f85f055bb" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-800 border border-white/10 p-3" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <div className="absolute inset-x-10 -top-1 h-4 rounded-b-xl bg-black/50" aria-hidden="true" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <SortableContainer dndKitId="50eb7575-c78e-4eff-b207-35534caa6f97" containerType="regular" prevTag="div" className="w-full h-full rounded-[22px] overflow-hidden bg-black/60" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="56985269-0b05-4073-b42b-10fbaacd9f1b" containerType="regular" prevTag="div" className="w-full h-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <p className="text-[11px] text-white/90" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">Mobile Livestream Preview</span>
                </p>
              </SortableContainer>
              <div className="w-full h-1/2 p-3 grid grid-cols-3 gap-2 bg-black/40" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {[1, 2, 3, 4, 5, 6].map(n => <div key={`thumb-${n}`} className="aspect-square rounded-md bg-white/5 border border-white/10" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx" />)}
              </div>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* hover glow via group: apply on desktop only */}
        <style data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
          }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="412bc43f-0bff-4631-b50b-2aa7fc1f9e87" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="6935aa6a-f07a-48d8-a5ba-913557a316f9" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="917df38b-9b8a-4711-a104-062b4bcde001" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="bb74d23d-d3db-4e8c-906c-d0acf788c673" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="a2cfe2c6-3d4b-4a05-9a95-93b91a1ea92b" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="a130168f-a7a9-4a7a-9b16-5e6e07cff440" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.75 0.14 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-10px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="56417501-7b4f-4ae9-8c8e-2f09a5cc4bdd" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="462a0936-8424-4fb1-a34c-cf44df99d0fe" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="ae3fdd90-7ed0-43aa-b414-935892cbe737" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="3bdd8ff2-02b3-4d85-b9e9-a791fd48ff95" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="ee0cb1d6-0441-48bd-8ae9-b662daf05e8d" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2094a638-0f98-4e6b-9b81-3f23813e5598" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e1367b3b-ac8e-45c9-968d-7f6a528cd29f" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c5f0a0af-4ba5-4ff0-a757-1d1789d0589f" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? 'default' : dotContent[activeDot].id} data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 0 ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : activeDot === 1 ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : activeDot === 2 ? 'Stream with BreakDance overlays and get instant promotion in our Live Breaks directory' : ''}</span>
              </p>
              <SortableContainer dndKitId="133a55b6-81e9-49b8-9038-4c1cf57289c3" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="8d760493-ce56-4887-94e9-00ca72c091c1" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="23180cb6-b626-41fe-8f0b-7b5c19ee8e32" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="027ace7d-c472-4b04-bea6-47de1aba9eae" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="e1bbddc9-1c04-44e1-8632-231f25062c4f" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="75dea6f0-3ca0-4c33-9a65-c660f63f40dc" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="344de800-b2de-4d01-bfb3-6bc87031ef08" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="bc4b5279-499c-4cd2-9cd3-82989b81aceb" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d43dc758-77ff-41f2-b2c7-44fbcfa38c5d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="752d2b58-38bc-4458-b381-e8bc06a4d968" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="0b1d1fb2-74bd-4268-8608-039613281f3a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="364c8015-ce10-496d-9861-6798c95131e7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="36d25240-f2b6-4ff0-bcf4-bd5c61bae293" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="93a1693e-9b06-4fd5-8a6f-269657a4b285" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="3aeeb2ae-c937-4282-b050-a0235dfe0660" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="1a338fe9-69dd-4ea0-b442-4b8943404367" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="d8fee6e7-6712-49db-82be-028166e4329b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="2c944527-2955-43a9-9897-6aed7851b0b3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="a987d12a-b000-458e-8eb6-b049b88663e3" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="a85e11e2-d656-4fa6-8f9f-dc10eab03cd9" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="d030d7da-7d5b-474a-b9ca-eb732d364993" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="301bda02-78da-4f4d-a713-61b48f15fe5e" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b3329003-551e-4f56-87a2-7f18fd0a9834" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="1b7dc815-8852-4456-a2d5-998d83e5963e" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="1ee0aed2-88e2-4944-87f8-4a4bf2302c77" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="789d42e9-9975-42dd-b70c-5821651140c3" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="b02cc890-41be-40d5-aa3e-1a9b2310ed5b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="bf7124e6-c236-4f01-bff7-07088f36115a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="f3bb6233-4673-428a-ba94-9690b684930a" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="e73b030d-d882-44a2-9690-6a0074b2033d" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="9c7f061d-d661-4108-a05b-6c698c656555" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="823ae8ed-4b90-4b31-ae87-89c15e7f38c7" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="6cd85337-5469-4999-b58d-3dd4c6c674e8" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f11dcc5f-5bda-4cb9-8550-6fb1b8d2fd14" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d095c94c-2b8e-4b37-91fe-16ddac7c2d01" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="c3ce8889-2e43-4b26-aae6-0a0f8a40058e" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c23ef548-fd6b-4b62-8267-3fcdd39397f9" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="cfa738a7-79cf-481d-9564-5e1972e97f4b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="d73e305e-5344-4196-8ace-45f88216e7b0" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="24e7e790-3634-4579-9648-92f28447cf8d" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c06fe803-aabb-4a60-a039-67194cfe56fc" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="82957f57-80cf-4adc-9272-bd60c5d8d7b3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="65aed51f-3cc0-4699-ac4d-ca6f2a463dc6" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="f0134603-a17c-4d5c-93cd-2264f04f4b57" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="7d070682-5810-4414-b3c8-cc5a546b721b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="4db84cf9-10d7-49bd-ad42-f993c6f8fe74" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="050df77b-2e5a-4916-a241-69d2d9e7319a" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bba256af-8efd-4e14-b08d-c31cc98f9200" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="11e04c17-8ffc-4b02-8ad2-6aa979b82b4a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="992faa04-71a3-4bfd-9067-37675be05fb2" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="74c60cfb-3d94-4ec8-a76f-f9f136e7ab76" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ed299c50-b774-425a-a316-9a182174a0ef" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="dcc4977e-4ebb-4922-b8a2-9af9b1087aba" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="d82fff0b-6fd8-4912-8c52-7630f4d20409" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d6ca9461-db43-4b5a-9874-ea31e98a4c64" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="7d844ba3-d04a-4b1e-a35e-c336c7ece5e5" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="145eb3ec-aadb-4873-ad4d-60c075b5b920" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="f7db71cf-1c1e-420a-9d1d-0a055eae7b98" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="49a9f0c1-ad32-4ad5-aad1-d9f472acb14c" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="511157c8-eed8-4a38-86ff-f21784857115" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="004dd7d8-1b1d-4da0-8ab0-00bf899b1322" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="a9248876-ccc2-478d-b47e-747002374aee" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6a5e42b2-731b-4efc-b016-fa5408e2dea3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="906e7662-ec7b-4875-a7ba-904ff7153ef6" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center border border-orange-500/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="e87c4310-0e95-4b99-9a5d-f79231447f8a" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="7bb119b3-7adb-4139-9470-f5fb864c46ac" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="40f64580-08f9-4e7a-b76e-bd7eeb6a68fd" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="fbcde6b9-c2b9-420e-9f70-82287d3b3b33" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="71bff9d4-d5bc-41ae-9af5-a60d497e0600" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bff64cc7-6a38-40cf-a20b-b1f3a8776844" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="9ca8b8e4-6780-4a60-ac73-012e1c12f15f" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="6c838ae3-ccf2-42eb-bf48-943ced5ea249" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="c6c88875-b332-4810-aede-71e6d0eed5c3" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="c6530357-bf49-4057-993b-8f83bdbef72f" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="2e2516c6-76d2-496e-a0c5-be52f98d53f1" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="15de1d9d-406f-4fe0-ae20-8baf9514e132" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="8fe217a3-8786-4d91-a6be-72bd67b24434" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="44b8bccc-57b5-4ec7-9b8b-9e6aa9960f17" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="e19eeb44-ed24-43da-b826-1013146ec47c" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="92a6edec-ea72-497c-a80b-0e6af16e47c4" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="718e9a90-a870-4bc6-b9de-04c4177fd168" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="e2201d6f-b9f2-4f26-a295-af95cd3713fb" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3c9cf3ef-2bb6-4622-9460-82ce690e85af" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="72688a67-642e-41e1-b37e-e18b966ade1c" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="82a82625-8791-4d54-aa59-ffc2ea6500c4" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5ebe4b76-ca16-4b80-aa4f-b79605135f06" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="ba043d6c-fa62-4c09-8525-eb854024f7d9" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="48670045-a0c6-4a7e-adf1-ca70da87a38e" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="e3069282-d66b-480e-a046-53d706c70efb" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="be654a15-ed07-4baf-b3c2-59dbf455aa49" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="117afcae-8b1b-4253-98b7-ebebd9626421" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="86e0c6ef-0270-4663-a8bd-9cf0c53046b2" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};