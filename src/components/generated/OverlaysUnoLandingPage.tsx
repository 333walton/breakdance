import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "d49b8911-e757-484b-a124-8ea27a653b0d"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "11616096-daa9-422e-b87b-142e75b7c1bb"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "7913f5a5-e687-466b-b6d3-5d234d4734d2"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "7aea41cf-3ee7-4ba1-a578-3ae21c975aac"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "0a1d17e6-872a-44cb-94d0-9e948df7ac3a"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "bb5adad3-31c8-40e2-8140-805e856e444a"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "5d0e773f-ed7a-45d6-8a4c-194736e767c4"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "94159b03-3b9c-4b10-9922-b1258d7bc86b"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "04809512-784d-4920-9d80-60f0f18152cc"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "219734dc-97d9-4f17-81e4-a8d628d9e598"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "ef23990a-76b7-48b0-8796-a7a757d248b2"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "a8d1cca6-9858-4d85-beea-152f695cf997"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "c07e8ab6-ea97-43a3-ad07-add6992ab582"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "a75feae6-3743-4204-83cf-638086f16d3c"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "c1bfaa52-bc9a-4917-871a-5d3df233634a"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "50da479b-5475-4f9a-be7d-4338ef1efa04"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "dbb1dfa0-3668-4778-a193-c4e8f9d5167f"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "0a4530d1-9e5e-4908-a57d-fef34684f220"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "8c8e9038-6a47-418f-87e9-45b9e5459136"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "9441a9b5-76ff-49ec-be24-68356f16a994"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "d5fb0bb3-2dd8-4e1c-8b35-e8804fefb0ea"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "240b2fab-3c2d-44bd-94cb-d71553aa9d8c"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "b4f49d60-1ce1-4512-bf2d-9166522a01b8"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "4c19e6c6-202a-4ca5-812e-1245d331f412"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "9ec5140f-1194-4b9f-b2a2-80ec4238cdd4"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "4f90e4b5-03df-472c-82dc-03b7800634d3"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "51d7f7cc-8e21-4794-8eae-ad879de5b608"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "fa67f959-3ef5-4748-ad45-70a842b2ddd9"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "768ac447-8017-49b0-a4a4-385780e5d4ab"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "f4a100fe-65b8-40db-a7d9-0bbfdb72f7af"
}, {
  label: 'Tools',
  mpid: "874db421-ad4d-4597-bd50-de844d68d708"
}, {
  label: 'How It Works',
  mpid: "0a9fb6fc-4f21-46a7-9b18-5df198d9f11d"
}, {
  label: 'Demo',
  mpid: "612aa69d-f9cf-401c-a1eb-d134dfdede27"
}, {
  label: 'Live Breaks',
  mpid: "e9dbc760-10fd-45d4-af02-6e26d35306e9"
}, {
  label: 'Shop',
  mpid: "3a8ac705-e552-4daf-b87a-78a23d059e87"
}, {
  label: 'About',
  mpid: "bc72cbe2-4aee-411d-ac52-e5ceaf1c05f2"
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
    mpid: "8cd7c854-4e57-4999-a77d-347866a7a792"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "0764998c-54e0-4659-95cc-6e5975288087"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "a0007d34-9729-407b-882c-d3a609c1baeb"
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
      mpid: "e4d25575-0873-4173-adc8-2cf15275f511"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "c5338eee-b000-4181-bcde-6a5a99988595"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "40a97e35-3d8c-4696-a13b-d0c15bec50e2"
    }] as any[];
    const [frontId, setFrontId] = React.useState<string>('phone-preview');
    const baseStyles = 'hero-button absolute will-change-transform rounded-2xl transition-[transform,filter,box-shadow] duration-[500ms] ease-in-out border border-white/10 bg-white/5 backdrop-blur-md';
    function zFor(id: string) {
      return id === frontId ? 30 : id === 'nfl-grid' && frontId !== 'nfl-grid' ? 20 : 10;
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
    return <SortableContainer dndKitId="cb5c2a3d-84c7-4c6f-a15d-bbb2caec7628" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="88a0ad71-ec8d-4392-bdf4-9f10a4295afe" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '94%',
        height: '64%',
        left: '3%',
        top: '18%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="af54c687-9686-48e9-b899-3e727d21e8d5" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="48f772d3-675d-4b59-a470-573ec47539b2" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="26720317-ba78-43c0-b573-ed9d016ab64c" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <label className="col-span-1 sm:col-span-2 flex flex-col gap-2" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-[10px] tracking-wider text-white/60" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">SUBSCRIBE</span>
                <input aria-label="Subscribe email" placeholder="your@email.com" className="bg-white/5 text-white placeholder-white/40 rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFC543]/50 border border-white/10" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </label>
              <label className="col-span-1 sm:col-span-2 flex flex-col gap-2" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-[10px] tracking-wider text-white/60" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">OVERLAYS LINK</span>
                <input aria-label="Overlays link" placeholder="https://uno.live/your-overlay" className="bg-white/5 text-white placeholder-white/40 rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFC543]/50 border border-white/10" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </label>
              <SortableContainer dndKitId="9f6242c1-bb64-43c5-aa31-314e18fad2af" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ca1a0652-137e-4735-9ec9-0ebc6ff56fe6" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105 transition-transform duration-500 ease-in-out will-change-transform" style={{
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

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="e5f66522-e596-4a10-9ba3-663f2c198681" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '78%',
        height: '42%',
        left: '16%',
        top: '8%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b10fbb2c-0c1d-4a29-8c92-1c398efb079a" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c9255e87-a700-49ed-83c8-e5239c947761" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <div className="grid grid-cols-4 gap-2" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {[...Array(16)].map((_, i) => <SortableContainer dndKitId="a4e31a06-4624-4593-908e-b095bd6d1f38" containerType="regular" prevTag="div" key={`team-${i + 1}`} className="aspect-square rounded-md bg-white/5 border border-white/10 flex items-center justify-center" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span className="text-[10px] text-white/70" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">Logo</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="ac8903d4-e678-48bd-8d83-1b4da706eb9f" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        width: '32%',
        height: '74%',
        left: '0%',
        top: '6%',
        transform: transformFor('phone-preview'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8b341418-fa1b-45d1-aedd-7e9496f53e4e" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-800 border border-white/10 p-3" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <div className="absolute inset-x-10 -top-1 h-4 rounded-b-xl bg-black/50" aria-hidden="true" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <SortableContainer dndKitId="05d580ed-94eb-4be2-8ed3-ea2d83cfca30" containerType="regular" prevTag="div" className="w-full h-full rounded-[22px] overflow-hidden bg-black/60" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="f59e6a5e-d000-4322-948a-5034dc93e3b9" containerType="regular" prevTag="div" className="w-full h-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

        <style data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
          }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="08268a71-255c-436b-b79a-cd2025a8d99b" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="0f998e27-831a-4941-813f-de071efcd3bc" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8781cf4f-1009-472b-b58e-edc48f98b294" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="475d85cb-d0ca-44e9-8e2c-0ba580e7c165" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="1ab19d06-98d8-4522-9726-7f6d421e11ef" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="07e8f6ff-facd-46a8-b0d2-8ea5641ba416" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="28804144-ed30-48bc-8dff-05a3d10cd055" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="302cfe2e-7610-41e0-b0b5-1d48cecdbc92" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="d5f8a78d-db0d-4b49-8697-05defe883758" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="694d7f59-c97b-46b8-9888-25f7cf199e79" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="aaf0aeb3-da7d-48e9-9f8c-7c07104269c4" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="41e709a1-1e2b-4a9e-b2dc-30e7a3d74fbc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ad9c2db3-b3bc-425c-a8cb-67d7a881b4db" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="425479e5-a42a-454b-bcb0-c8f18ac2b4c1" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="94f2ff79-1293-4a73-8af4-4f9ee157097f" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="8765b97f-0be5-4246-9385-326389888882" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="55976fdf-fff3-48af-a8d1-08805b776051" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="5d7f0aa7-b37e-492a-8a27-aca2b6f4ae4e" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="276f401f-1896-4db4-84b9-2410f09762d3" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="dd381fbe-8698-40b7-afda-27aa3dd0eb93" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="41e6aa5a-6fc8-47f1-baf2-87461088d94b" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
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
      <SortableContainer dndKitId="b4cf1d5e-3134-41ba-9730-3f4a5d6211cc" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3bf7dbcb-c0c3-4d73-8427-5ba66dad023c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="19be2707-ad63-4048-a90c-e0933ad6411b" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="22799c62-b51e-47c8-b734-aa1582d4a7c2" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="96b88f2d-beca-48c3-8fc3-cb0d01092ee7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0a1274b1-c1aa-4adc-aefd-276c97359367" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="0effd04f-86a9-41b1-8b6e-a143524f788e" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="be8196dc-79c5-492c-863b-d6fc66231e07" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="4c821596-79c8-4f1a-8f81-13f96bd61ab0" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a49e052a-5f51-4020-9680-8d97346c5818" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="df55e4bd-431f-40bd-912a-cb2dfdc1807d" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="330b1658-5274-49e6-afb5-7f4439c5a9c0" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="88c3a8e3-398d-44b2-91e8-dde05205ce71" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="4a665e40-c7db-4499-9b2d-d1d4b5613188" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="36cf942a-a1e7-45dc-afb0-5c69808457b1" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2a9e2ab0-a457-49d1-9a2e-7d379c1a22a9" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="88c24f2d-e6f2-437f-a931-c6c5712b5b23" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="faf4d993-eed6-405f-8be7-c0ade8f83273" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="da61d52c-15ad-4a67-93df-1d849d5ae70a" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="e782e5fe-3d85-42bd-b1b7-c1f9aaec5cff" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c002d0b7-d56f-4d8e-a26f-0ea4c2a18023" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="1b46bf2b-e9bd-44ca-b1f4-5371e80f1405" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="d8488683-9a6a-46b6-98b3-199e8a155878" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f9c338b3-0ac4-463b-b3a8-c4af97084f8d" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="3af5f456-59ca-49cb-a6b7-4284378dafc1" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="c46a3c1f-5541-44b0-aa8c-abeece460c12" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a6c31ab1-a3bb-433b-8db0-e9a552f2ba25" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d29bd62e-996d-4c13-9180-25617ff7d878" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="240945dc-3ce1-4ae9-b745-77e0603d794a" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="19eafd10-37f6-4e18-a0f5-e3a2b748d711" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="202d79bc-e50e-4808-b6ad-74f38439dfd5" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="1d2d0582-d987-44fe-9259-ba889e417e07" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="162e3101-392d-4934-bad3-ee99c3162679" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8d5dbbbb-64f9-4f46-984a-5ff1ffd48a5c" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d8210ceb-57ea-4b26-9ad2-2705e50087b5" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="40495573-db29-46dd-b96d-3a0269cb3706" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="60d33cef-34bd-4e44-beae-b61db0bbbad7" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="915afd1d-1b8f-46e3-87fe-6694ab403583" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f81b46ed-0c2f-4e54-be06-dc2299906707" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="bfddbf39-4fab-4789-8e90-545eabf135ae" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="4c18eada-0eef-4be1-ba5d-9f48cfd9b77b" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="05476e4f-2ea2-49a7-842b-ae7025ddb431" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c1629803-f219-4032-99d9-220b29b7c188" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="8be8f031-ad96-435b-a24f-255e53f81bbf" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ccab8b80-472d-4e2b-b888-88126e2752d3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="593440cd-493a-40ea-93db-85de9dde387e" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="7bda9eac-43da-4153-a196-a20793ce9d3d" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="70e190ab-4f62-4544-bdde-5683b4fe00d0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a48c7e60-acd2-443f-ad55-b9ec5d75bf19" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="974afb29-e4f5-47e8-b714-28df32d1a60b" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="7d83d953-9fba-46f6-a582-30d562c15f70" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="e9014e29-122f-4614-92fd-fa6c5ebde93a" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="4024b35a-44fa-4cc9-b3f9-11034b664c35" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="e0e4e74c-fffa-41f2-b1db-327c80be6890" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="8b7874fb-209c-4b36-9c5e-5988098ac3b1" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9715b33c-9c4a-4fc7-a572-a8c2e6b844bd" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="0221dd6e-ec5a-4dd9-96c1-9eaf72686352" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="a7116c03-1203-4bbb-a1c9-002152fc0031" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="582a697c-dfc2-48d7-a7e6-f54440697304" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="072442b6-1520-4767-86ee-3c407652b761" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="7803fb64-ca67-4757-b428-cb7792aa8f49" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="97b3f901-5d8b-4cb9-bace-f896addb122a" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="e8242ff0-2f48-4d88-b6e7-73f39d7a3892" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="2290edfe-2a38-4ba9-8819-1e0a121d91bc" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="719bf5e6-cc16-43d1-bb45-dd71e4ebdee6" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="892e1d02-7387-473c-a45c-51307fa4c326" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="5677ea61-31e2-4488-bd84-9e16d5a4e78e" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="999c8eff-564e-4eda-af3f-8f19651160c1" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="c5d8c02e-f1b4-4fa3-8c64-839014eae2ad" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="588b6f66-7220-4d6d-9213-e8b3424609d1" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="8d2c0bdf-86ce-4754-b18b-0a9cbf36cfe6" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="c4a69988-6339-437e-84da-1b4d405508ab" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="ddd64fa9-7310-4622-a5ca-ddddf8912767" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="01435c94-3968-4ac6-b913-fb9b52b7d0d9" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="05587caa-e38a-4bd2-af46-7f0fdfb45bab" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="96586d40-6325-4f21-91aa-292a46e75409" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="7e353fca-ebdb-4bcc-8e16-a6403f8cac2f" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="d80a73ae-9121-4b9e-8de6-8f18d4f6f0dd" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ca68d807-a52b-4313-a13e-09df17a32fc2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="94da57d7-f095-4f15-bc60-9958014c7a33" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="e63d8045-5873-4be9-b3f3-0c7159a74b02" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="15ec653f-9d71-44e1-a5b4-4df65da08d90" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2bd73b76-b370-460f-aecf-2df3cfe8ecd7" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ad1e4675-d45f-4763-b447-bea9c66a9f0f" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="bfcc10af-415c-499d-968a-8b20d4d65c56" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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