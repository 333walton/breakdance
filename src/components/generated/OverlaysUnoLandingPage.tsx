import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "72733776-05d9-4be5-91eb-a16d8cdc9e7b"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "d5a50b73-22fb-478b-85fa-bc632e286b10"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "81c83afa-4edd-4cea-ac47-d91a436bdeb5"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "c6f884a6-d7e0-4328-9d76-dd3452ffc8d3"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "ec8a9fb2-eafd-418f-afc8-ad769b3f632a"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "c06097b4-0af7-4518-b0c1-9072cc7ec765"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "9192cbd2-bf2a-4f91-b66f-4d2e128d0694"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "0040d375-d76e-4b03-bb22-ba5b5fa91bc5"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "232253a4-fa38-4bac-ad5a-ee570a465eb0"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "a4891022-6e39-4256-a0f2-fc1df8a552a3"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "268b390a-65d2-4de7-9d9c-360350a99997"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "6b1ab2e2-7e79-4b3f-a3a7-651195e3657f"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "8c8af7f6-648a-4240-8c2a-b09db16e78cb"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "d3df6edf-6abb-4dc3-a607-1db77ba575a1"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "88398a55-a92a-4529-93be-c7a158520dc5"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "fc856db1-0b72-4469-a1f9-29a44ce1e676"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "dd7fb64c-caeb-4183-bc68-5881ae5c12e9"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "72490f87-1984-4376-8a4b-fb482de3472e"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "1da04173-9ee2-40c5-9a87-4e0b48a7eab2"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "ef51f13b-7019-44b5-8bc3-0d80813d9062"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "706f1a7d-b193-4195-928e-719632d0156a"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "538e1aa3-568f-489e-826a-e0b9c3bd72fc"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "85acd99d-3497-4a6b-90a6-4710302650f8"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "6724c50c-5298-4ea2-8372-692b2ec7e51b"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "e42287cd-4437-452c-9234-459e259630e0"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "3871e2f6-5401-4498-b0d1-2e281b679d3f"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "76527611-28b9-478c-ac02-35b9e69d35c9"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "300a0c29-7a5e-42d9-9ed0-5746fc866a5b"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "ab97befa-8b01-4daf-83b4-b2e31fa714a2"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "a5ac7dee-e261-4ec1-88a2-c48c645f3a1a"
}, {
  label: 'Tools',
  mpid: "8430b0b1-45ca-4c61-a353-99d76d74c636"
}, {
  label: 'How It Works',
  mpid: "71ac106b-3ed7-4c4b-bde4-214229b0a996"
}, {
  label: 'Demo',
  mpid: "e2817c18-d4f2-4f62-9520-6757f68f8a92"
}, {
  label: 'Live Breaks',
  mpid: "7cf18d5b-1058-4e87-8405-01f17d1d8655"
}, {
  label: 'Shop',
  mpid: "394e51db-9de3-41a5-b230-f741eb1fe8d9"
}, {
  label: 'About',
  mpid: "51a242ae-3076-4d76-8189-4cd30942864a"
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
    mpid: "17c906cc-5aea-46b2-b69b-4d84914f80f2"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "1b7fed7d-f6c7-4d74-bede-68673fad7e68"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "6a80830c-6b13-49da-b434-f6c2ce08f007"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // @return
  return <SortableContainer dndKitId="17aee462-32d0-466c-ab21-498e04c44db4" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="d7d251d5-a54d-46c8-8f55-a3ff8755f0fa" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="079eba57-54e8-45f4-8e26-0ff252422434" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="357c8b95-1c9e-4ef2-9d23-f5710ca8cbeb" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="f28fc1d4-a96a-4b07-8d69-78af6572766e" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="a5b70dbb-f104-4790-9d85-433ff825c7de" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.75 0.14 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-10px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="1a0aca0a-0c68-4a42-bd61-ec6ae03a7052" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="df2af9b0-7080-41f1-b55b-a35bca86f181" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="1e5fa3c8-a5f1-404d-91c4-5963a02e6e5b" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="3374a165-e9a6-48fa-8e7d-93cccf49e0b5" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="fdbf29ab-d70a-43fe-ba7d-f479eb2481d4" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="762fe439-6054-43d7-ba30-81312fcbc58c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0b673874-c230-4f3f-9d9d-a91ab069719a" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="196d72ac-f747-4056-9052-af4d5bd6741b" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx" style={{
                fontSize: "70px"
              }}>Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx" style={{
                display: "none"
              }}>Made for Breaking</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? 'default' : dotContent[activeDot].id} data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 0 ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : activeDot === 1 ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : activeDot === 2 ? 'Stream with BreakDance overlays and get instant promotion in our Live Breaks directory' : ''}</span>
              </p>
              <SortableContainer dndKitId="554ca2fc-bfa4-4ab2-beaa-734ec69980d5" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="52525405-526f-4c87-bf57-357c965ff8a0" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="fd8a4da7-4dbc-43c6-984a-b7bb6165f4fc" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ab8988f4-82ca-4b73-a6b2-76fdf21f4651" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-opacity duration-500" key={`preview-${activeDot === -1 ? dotContent[0].id : dotContent[activeDot].id}`} data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="719129dd-16f9-4d3c-99de-d959910955fb" containerType="collection" prevTag="div" className="relative w-full h-full" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {dotContent.map((d, idx) => {
                    const isActive = idx === activeDot || activeDot === -1 && idx === 0;
                    const baseSize = 64; // px
                    const scale = isActive ? 1.15 : 1.0;
                    const z = isActive ? 30 : 20 - idx;
                    const positions = [{
                      top: '36%',
                      left: '28%',
                      rotate: '-8deg',
                      mpid: "bd5f7834-852e-4206-8164-27ebd7e26587"
                    }, {
                      top: '50%',
                      left: '50%',
                      rotate: '0deg',
                      mpid: "203653f3-3c90-4f3f-a7ec-d5d991d19d23"
                    }, {
                      top: '62%',
                      left: '72%',
                      rotate: '7deg',
                      mpid: "059f4147-be73-4b35-ad29-94c6d29ba0ac"
                    }] as any[];
                    const pos = positions[idx];
                    return <motion.button data-magicpath-motion-tag="motion.button" key={`floating-${d.id}`} aria-label={`Select ${d.title}`} onClick={() => setActiveDot(idx)} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md" style={{
                      top: pos.top,
                      left: pos.left,
                      rotate: pos.rotate as any,
                      zIndex: z
                    }} whileHover={{
                      scale: isActive ? 1.2 : 1.08
                    }} animate={{
                      scale,
                      filter: isActive ? 'saturate(1.2)' : 'saturate(0.95)'
                    }} transition={{
                      type: 'spring',
                      stiffness: 240,
                      damping: 18
                    }} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                          <div className="pointer-events-none p-4" data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                            <Play className={`text-orange-400`} style={{
                          width: baseSize,
                          height: baseSize
                        }} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                          </div>
                        </motion.button>;
                  })}
                  </SortableContainer>
                </SortableContainer>
                <SortableContainer dndKitId="9f48fcdc-c3ad-4333-8c32-2bf5fa3ac5f9" containerType="collection" prevTag="div" className="mt-8 grid grid-cols-3 gap-4" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  {dotContent.map((d, idx) => {
                  const isActive = idx === activeDot; // no default selection
                  return <button key={`icon-${d.id}`} onClick={() => setActiveDot(idx)} aria-label={`Select ${d.title}`} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors ${isActive ? 'border-[#FFC543] bg-white/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <span className={`inline-block h-2.5 w-2.5 rounded-full ${isActive ? 'bg-[#FFC543]' : 'bg-slate-500'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                        <span className="text-sm text-white/90 truncate" data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">{d.title}</span>
                      </button>;
                })}
                </SortableContainer>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="5a530c0f-d0fa-488c-b94f-4dec64999fa6" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f9e2b896-4ab6-4562-a9a5-973bd58eb1b4" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="c16ce3f9-c580-464a-a3a2-5cdfa27134fa" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d24c03a9-5953-42ed-afb9-82a17823b43f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="61944088-e0c4-4f70-927f-ace7f71181b0" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="67fff08d-6064-4e60-b8af-543dc7d2ab3d" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="07b9547b-05fa-47cd-88df-b302ee731818" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="39d37339-91d2-493d-b070-2bc87041c30a" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="df0ac5aa-9c96-41b1-ae84-2670cb3f4cba" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c1662115-87d9-4212-b7dc-38b5726dfe3d" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f4e1020e-a0e5-4248-9a96-a2e5e25e4a9c" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="4b430722-2380-4408-a14f-029b76587068" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="48242fae-8ac8-4439-98ad-e55ade5a33e1" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="0009425f-e95d-4e1e-a563-6bf1911f14cd" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="5367b504-0450-495f-8858-176b8c061dab" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="a329e9b8-d5af-4816-a5a5-e38f4fa9aac7" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="b3db3d1b-c1ca-4a25-a3c6-8754552246bf" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="901a1105-2ce7-4786-a0b8-28e930d3b1ca" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="84bd954b-f375-4d1e-bd09-11d265e36100" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="68ee80e7-ed9e-4b84-8adb-e718e1d411c1" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ddbc3763-b601-4b61-b11b-1d00b39d2161" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="da8d67f3-028e-4812-a616-8fbf2c04e0f3" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="ab38889e-6163-4b0d-a95c-c9e31dca757b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="92e6cfc2-0425-49f8-9bd7-e52de0789418" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="2f4e4218-a9dd-4b47-b22f-c8e296644de1" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="395b6f61-784c-49c5-9a39-06764619a932" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f6caac73-9e04-4b1c-b865-95aff2463b00" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="736fd531-fd70-4886-8698-0cb806d35ba7" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6cb57456-e516-4d04-a563-ef59da0327cd" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b9c061d3-d51d-4d16-9afa-50cf6c1c280e" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="8b5c125d-373c-4f84-91d7-2342a6221ede" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="41ba07f7-5505-47f3-a7c2-a088e9e33d44" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="1183393e-3f5b-4f74-b0c1-3421893e203f" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="7e6dc61f-92c9-4f18-a421-b5cada57fab5" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="6aad481e-c20e-436c-a55f-fadc6bd594ca" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8cd8b141-014a-4e55-b125-e1671acd6f8d" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="11da34c7-8aa0-4792-8f84-51a52681e6c5" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="10c2c795-c00d-4d02-9492-89d70af8302d" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="4f190973-1d8e-43d4-90c4-193785b1c7e9" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8aabc87b-24bf-402c-a945-1e13a7409897" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9c15038e-19e4-4429-b2fe-ceaed5e155f4" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="020932fb-6877-4663-be2f-aeb1dd891f37" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="96223806-1e2e-426c-b07d-20356e05ccf7" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="c1262f3c-280c-490c-bbd6-c9c47e6dd0fe" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="927b3545-4e75-471a-9a20-e31217df3110" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="0e03c0d6-3ff7-432c-bf06-5c7b73df683f" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="84d6196c-ece0-4383-b4fa-2f95801c449e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="dfa3066c-7ca6-4cb9-af24-42d5b52f1258" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="42dc9d29-9d07-46db-b511-a965b995fd24" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="96b55859-ca5e-475e-9411-c2c89627484d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5e759365-b026-458b-8789-a6534a7943bb" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="6d5fa83d-8362-49b1-b3fe-e3f0bd985155" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="e00570be-998b-4476-b3b2-7d2e09a29e75" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="e3656f9d-a3ee-4f0c-93d0-8e5c06d12167" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="890b0819-3f1d-467d-bc41-ad6392189a76" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9547bf17-b451-4aa2-84ce-ba10a71c8b79" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="5c6a15d2-ab43-4cbb-a1eb-6aa9418bfc07" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="12fe615e-26c6-4be5-9872-eec8ece6cf56" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="f75d52ca-b343-435d-b6c0-084c9eb5f80b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center border border-orange-500/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="9d05610b-276f-4b4f-aed4-d799ffb717c4" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="a6742a05-925c-4210-b3ee-bfe988b23c0a" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6446843d-de17-4f01-957b-4da060f3729f" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="556b1293-3bf8-40fb-994b-38f38c1372f3" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="65db8292-b12a-4515-903b-b69efddccfc6" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="75fb0883-8962-4fa2-a7eb-53c804676917" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="fb055395-cbac-4c20-9b5c-3d98e0af1f03" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8ccd5dac-da33-46b9-b3aa-b1e294d504e2" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="42de6fb3-e478-4c6f-8100-69b75f188c35" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="c187ce3d-07a5-4202-ab6f-1bae95de3db5" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="dec20966-b232-4f23-be99-4712966613d9" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="cab6dbba-ce5a-4fc9-935b-30d6d28a6f10" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="f0b1310a-5286-431f-8b91-a343d68e6e96" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="96f8ff3f-fdd8-4e4d-85a4-41d9e113cca6" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="a205d32c-a3d8-4108-8407-efc3751df5ce" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="8567f1c2-351a-473d-af80-a4e0a2eb9d7a" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="c8f95e4c-c5b4-46a4-a0c9-41c0796e3bb9" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="4db45da0-d0f9-4b3e-8a1a-0592c56905e1" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="937e8c4d-028e-4076-bc09-2123dbe36004" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="d6d2f514-e407-4b03-bb5a-a77a21ed48a8" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="ac3f175a-88f9-4963-9316-a19fa305be79" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b27a10d0-50c6-4400-87d4-27eab3e00bbc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="8020d5e0-f50e-4355-a2dd-3aea76902514" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="fabb9d3a-3b3f-4652-ab8c-64f3cd165e91" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="420b80b4-4ae7-4c5c-8664-9ad07194b499" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2211110f-2890-400c-95ec-436a5bae1523" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d83b15b4-bf93-4449-a19b-ed3fd38e8f5c" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="4152fe31-1663-4616-a68e-24aafc6d7243" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};