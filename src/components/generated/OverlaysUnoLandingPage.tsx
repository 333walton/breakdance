import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "5edb70d1-7459-45d9-9951-7a52b2da86d9"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "af115c0b-2c55-4f02-8f12-cc22386b0752"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "2ba0e5df-fc79-447a-9c25-5e8712969c56"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "a9766e87-b2bc-4212-8e85-bbb066ff1afb"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "25aac257-e1e7-4298-a9a3-b7348d84ffd7"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "424cd8de-c635-453a-9c67-4f171eca90bb"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "089a572a-28f8-4727-9236-0b13ee8e4ac9"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "3ecff074-5e30-4b34-bdd2-62e74b5e4c90"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "f760b26a-70b5-41d3-8142-75575accd4b9"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "4271304f-d539-4874-afd6-ca74c609e0d1"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "bafa2be1-2f4a-4bf8-a839-481f23e7e560"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "43296bd4-147b-4f49-b371-ac618cd1e1a7"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "c840bd9a-b21e-476c-964f-1c5e7454b36e"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "6c48db12-0e3b-44d1-8646-5f9fb2db4c29"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "f911e9ee-ff25-436a-92ba-f34ed528d2f8"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "c9560909-b0b2-4e6b-9381-7bf174957a74"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "72ea9d23-dc53-4f54-b805-5df160c45905"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "23c8862b-b8fd-454d-9a5b-6b6e876e7cd6"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "a399bed4-efae-4936-8416-933f57cd860a"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "ddb9bf8a-906b-4df3-8aae-a6b653f67212"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "55c69f1d-8127-4365-a55f-890f6b2814d3"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "719c3b68-edf6-406b-b15e-e23494002909"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "77eafd31-abc4-4f8a-bb53-45b585e0cc58"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "c0045af1-50c7-4a8b-9cfa-698a0ffcb920"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "5b9401ba-8287-480a-9deb-64a7bf0585ab"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "a37020f2-33da-419c-b703-6a54b878df6a"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "87c8c747-c934-41ac-90a6-391de86884ea"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "663c3dc6-bd9d-4b09-928a-880926d5bb50"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "4367bd55-a614-4fe9-85ea-77b7ada1af51"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "0665c8c5-7010-46b0-995a-82dfb9580cfa"
}, {
  label: 'Tools',
  mpid: "3f31d2d4-a600-40e1-b4fc-f66dcf3b239e"
}, {
  label: 'How It Works',
  mpid: "557b7c03-b711-4faa-a267-82e7a658cf46"
}, {
  label: 'Demo',
  mpid: "5d09f045-f123-4963-965f-65906c51a421"
}, {
  label: 'Live Breaks',
  mpid: "06c74490-50b3-432c-b937-6cd8d4c607d7"
}, {
  label: 'Shop',
  mpid: "86cd35c4-bb2c-4e46-8459-f75b391cce83"
}, {
  label: 'About',
  mpid: "ad45fa45-90cb-4e0d-a52e-f39c9c79532f"
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
    mpid: "6092ce77-097a-400c-a46a-e3b5c77d1b1f"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "6078eebf-ed5f-4c0b-99ad-2b4fc4d2c0b5"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "309bb5aa-f4e2-4876-a95a-7c1190ed9b9c"
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
      mpid: "634cf930-7208-4b23-a601-df1ca3782abf"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "6953bc00-5e47-4836-99cf-2dc8fb776cb7"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "9fcfef11-2b9a-483d-bac2-aa011ab47a23"
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
      // Updated layout: diagonal left-to-right stack: phone (left, front) -> grid (center, middle) -> browser (full-width back)
      const translate = id === 'phone-preview' ? 'translate(-10%, -6%)' // left side, slightly up
      : id === 'nfl-grid' ? 'translate(0%, 4%)' // centered
      : 'translate(0%, 10%)'; // browser base
      return `${translate} rotateY(${rotateY}) scale(${scale})`;
    }
    function hoverStyles(isFront: boolean) {
      return {
        boxShadow: isFront ? '0 20px 60px rgba(255, 197, 67, 0.25)' : '0 14px 40px rgba(0,0,0,0.35)'
      } as React.CSSProperties;
    }
    return <SortableContainer dndKitId="ff78f809-a433-4cef-a5a7-301c343463ec" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* bottom layer: form window */}
        <SortableContainer dndKitId="4118f393-4221-4dd0-963b-061e07cf84bf" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '96%',
        height: '62%',
        left: '2%',
        bottom: '4%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="3f907ccf-ce23-4589-ae0d-bfc1733b7a6d" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="74f22572-a7c5-4aa8-9302-a30442b1044e" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="8022068d-42c7-4865-9c25-b00ffa6b410f" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <label className="col-span-1 sm:col-span-2 flex flex-col gap-2" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-[10px] tracking-wider text-white/60" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">SUBSCRIBE</span>
                <input aria-label="Subscribe email" placeholder="your@email.com" className="bg-white/5 text-white placeholder-white/40 rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFC543]/50 border border-white/10" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </label>
              <label className="col-span-1 sm:col-span-2 flex flex-col gap-2" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-[10px] tracking-wider text-white/60" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">OVERLAYS LINK</span>
                <input aria-label="Overlays link" placeholder="https://uno.live/your-overlay" className="bg-white/5 text-white placeholder-white/40 rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFC543]/50 border border-white/10" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </label>
              <SortableContainer dndKitId="be1d1eca-acdb-4ecb-8c81-dd5cad3ad3fd" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="3b703a53-88af-483e-a0d5-65209a9ceec7" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105 transition-transform duration-500 ease-in-out will-change-transform" style={{
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
        <SortableContainer dndKitId="83ef69f6-34f0-4b1b-a7bc-51cae201cde8" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '82%',
        height: '48%',
        left: '9%',
        top: '18%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="53375f8e-5159-4385-8474-e4a57b3410f5" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b3fc5204-6e53-43de-a401-f8d9e75fe78f" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <div className="grid grid-cols-4 gap-2" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {[...Array(16)].map((_, i) => <SortableContainer dndKitId="0f47d79a-3d32-4b7a-967c-9c6656ce9f6f" containerType="regular" prevTag="div" key={`team-${i + 1}`} className="aspect-square rounded-md bg-white/5 border border-white/10 flex items-center justify-center" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span className="text-[10px] text-white/70" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">Logo</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>
        </SortableContainer>

        {/* top layer: phone preview */}
        <SortableContainer dndKitId="f13a4800-62ad-4d8c-aff8-11da17e630b4" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        width: '34%',
        height: '78%',
        left: '0%',
        top: '4%',
        transform: transformFor('phone-preview'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f39066f0-e7d5-42f3-aba9-d8077ceba492" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-800 border border-white/10 p-3" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <div className="absolute inset-x-10 -top-1 h-4 rounded-b-xl bg-black/50" aria-hidden="true" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <SortableContainer dndKitId="9e7bac5c-bc41-4abd-ab65-94f3de68d05d" containerType="regular" prevTag="div" className="w-full h-full rounded-[22px] overflow-hidden bg-black/60" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="0793bb30-0524-4407-b02a-a98256818c83" containerType="regular" prevTag="div" className="w-full h-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="e7afe63b-b074-41ac-9996-92e712d30b9f" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="9755bb41-fb8b-4a4c-9fbe-6bcdb387275f" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4308c1ba-ae22-4bc7-a4dd-06adbaee7ecc" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9c428ddb-f9cc-4173-b2ba-26f9c89b1644" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="e9a22d97-b209-4b90-8dbc-f8cf42b63c8f" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="5ec97b73-3298-41cc-891a-f083edad693e" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="3743dcf6-fab4-4a35-9bf0-b6f857c0efc8" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="5b70e45d-8bf4-480c-9c03-1b2cbca4b7d6" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="11f7cbcd-d775-4515-8cc8-e4847ff7d0c4" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="68c7a83c-3b9d-4cfa-8be9-374c1040faab" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="6d153df2-0f27-4b54-a3d8-a6952fdf1345" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6b3545bc-c01d-468a-83fc-9191e0704876" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0e6ee488-14a5-4b23-87ad-17863a398857" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="4d4d82ed-ceec-4c18-acbd-d60a792c1175" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="87e9c35c-c17e-45c4-aa68-3da32abafde3" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="d4a1739f-bcc3-4073-95f9-0a2baaa0fc61" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="47623d7a-3130-40b4-aa87-912a88f9e9e3" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="09f9ee31-1e40-47a3-aa6e-5188d2fc476a" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="3baa1e8f-4f1a-4a74-ad6e-8843eda6ab4f" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="02c57ec0-bec2-4348-8428-c96aa02e8061" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="37e63177-3fe9-452c-8222-c4885d5d1c44" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
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
      <SortableContainer dndKitId="644eae8f-825f-4d97-8ed9-4398f2616269" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fd37940d-3f01-47ed-9efd-30de1364887c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="7ec76b37-d0d5-4fd6-b4fb-ac5fda15795d" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="16712b4c-fccd-49f2-9873-7c17cc5a316e" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="be1ec085-1a02-4aac-886c-0619c24d616a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="caede29a-a9db-439f-a604-8ad46ab1b1ec" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="95f478c2-0816-4491-a1c1-253cefd8ce0c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="259ef04e-fe7c-4d04-84e0-2566419e010e" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="32b44f41-9b67-42f7-aec4-86696da99496" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="7bfd761a-3a7d-413c-a298-b4e34e650aa1" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="3cdd4651-9a96-4e54-8886-c48bfe31d808" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="818b7b0b-7c00-4fbe-ae61-d309e502c3e0" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="98f15b7e-9219-494d-a725-153d2e760e7c" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="da774e37-8433-4f35-bcaa-2fd63f5bbd17" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="6aeed716-64f4-40a3-9436-f0441de017d0" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5b7f11b0-82fd-4cbe-9c82-518039a74cbc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="486a660d-ade6-4ae1-b225-40cf9dc21273" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="ce8ca25c-faf1-4862-8e54-e1042c3ef60b" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="49b16478-cb61-4090-ae9a-61ffb2e8b8ff" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f0e0c561-1b09-416a-8c2f-b333794741a6" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="25bb6f27-c16b-4129-a221-387c2af0dd39" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="009bd427-6006-4f6c-b998-7e944e07c3a2" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="164a84b6-c8a9-4c9e-b3d5-9a1dba642aa1" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="cbe3545d-54de-49b3-86ac-814edaf1f5f1" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="d9014d69-35cc-41df-beaa-0d64aa89506f" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="04528103-aa61-44f9-9e3e-4a979b59436c" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="7ce708f1-8f22-4f9a-9465-f20ac889f08c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="dcd2a895-8012-4a8f-a41e-eb99a7af6aee" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="71c650af-731c-407d-a2fd-783d89bc6505" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="593f099e-6183-4096-acc9-84f58bf6e0df" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="11108974-8502-4d12-ab39-7326d12f89ca" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="20efb154-1405-4e97-ba18-31498bd6b374" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="9154f735-dfb4-4cbd-aa9f-81a3813d6a87" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="7a617f09-e04e-480d-be99-3de3c065382d" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d7a88b18-b789-4419-861c-c2da1911c23b" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="01e6313e-9a44-4efe-9254-2bc92331cb1d" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="a4132a66-4a2a-4695-84eb-bfe9ed65fb41" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9e5192d3-6c6a-4a7a-9a96-bfb242346d98" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="1441c3ae-e380-4c07-9d65-f28c110fd31c" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="4e4a47ff-24c5-4c90-923b-95701a6739fe" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="7a2c06d2-4868-4bc1-8a45-055a90c97e0c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="29f9a6fa-21d0-4a11-9526-a066299d6296" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c2cf2473-b6a4-4d8b-ac8d-3dded52c44f7" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f9178bc8-0738-4b28-a6f1-b762c364a183" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="7822cc8f-1a27-41a6-88d2-2ca062d608ba" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="e775688f-fcf7-4e7e-9edc-d53983980c80" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="4dea067d-daeb-4471-a3cd-09c11505675b" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9cc6287e-a751-40bf-87ac-debfca02e9d6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="02e11e06-939d-413d-8010-743d11ab3556" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="7308ebde-fe4f-4a08-aa7a-3c2747f5ab12" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="06797bf5-ad3c-4186-9469-d8ff2eb64866" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="41e6da89-6fdb-4c09-8467-67ca18c5fbd3" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="0550d7b6-37b4-4c1c-952a-766ca3cec7a4" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="329c3c62-c007-43f2-896e-5f50fb307157" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="93e79af0-2d9c-443f-9f7a-41f0e8174cdd" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="128f02fe-8b4d-49f8-9060-50ca92839ee9" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="b217873f-5cc5-4772-9d10-1ab7611a85a3" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="43352c73-e848-47ca-8423-093a73eb7fb0" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="740686dc-aebc-41a3-939e-6f11ec383b3c" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b87d4965-e755-4e49-9573-e69eefeea225" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="f428f341-7346-4d89-81aa-d9e5e98a2d85" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="76991295-ff5a-41bf-9ea5-b4a56a2321fd" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="9289bef3-24c6-4336-8a2c-43ce0c4f8704" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="b21a3701-91ee-405f-b493-ca4e24b5c444" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c0846cf0-db68-4b42-a713-04bf5c7a9d93" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="e43956b1-3ce2-4316-b4ba-dfe233e8754c" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="45906599-dac9-4423-812c-2276aa8be0ef" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="87754aa4-629d-46e5-877a-dff4e7ed7144" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="91d3f3e2-0b20-4f3a-9bef-bfc581eeedbb" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="a1d92f66-4a55-41b2-adcf-a7b7f886a8e5" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="e870fede-4b0f-4355-8486-aba8d791cf62" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="53247102-d043-4938-918e-1752958ad371" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="9b8329c7-bda1-43a1-a905-abf3339bdb4e" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="65ed6fcd-65af-4f5e-a808-51ea7ae7c044" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="fe6c08c7-0a6e-49d0-88dd-3351075a32e3" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="bd381506-ee6b-4f5d-94f2-c4d886bc4c1d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="2fac8566-b2d3-4ef9-b326-cd6b7499f56d" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="023874b1-966f-4683-a0c9-48a52320bbc0" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5ed0ae3e-8ccd-4ee6-867c-f24858948fbc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="2a5f4f75-3766-49c7-9c43-cec0991169f1" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="02a9b896-b58f-40b1-af4b-81efbcf10d1b" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f0547a49-de2e-45bb-b84d-819709362f12" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9c3f6648-af38-4465-99df-6cc2465e07e8" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="4111e548-3a10-46a5-a8c5-d88c5e78f48b" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="e703f7ac-73e4-4684-b411-2b49b966dd22" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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