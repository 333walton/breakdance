import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "c6e62486-000b-4f43-9406-c2293604425f"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "26965570-13e1-4f61-bc1a-f59fbc8ab7b0"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "a73456c5-d675-4f30-b803-24f69e70659c"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "6b4e3789-d98b-4d28-b39e-b47f4589983c"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "76c2ece0-24e9-41e6-9ade-775960859fa9"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "836b3192-35cf-416b-a142-0fadf68bda29"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "b7492113-e773-4890-a6a3-bd2cd99bfc75"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "f346c742-af4d-4444-bd27-35432e9cae18"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "efe1727c-662d-49f9-ab70-83f5e9cf48ee"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "bb66d829-902c-48ab-ab0d-aee8b2330c6c"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "f883d2c2-1c23-43b5-8fbc-abdf6cf2c450"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "26256b87-e7c2-41c5-9f43-5acc06cce084"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "f23e1340-49cd-48e2-83f3-95e835bb7ec0"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "181d7fb5-7443-4564-a9cf-ea256427181c"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "2e727b27-23a7-4a97-a81c-d7e935cbfcfd"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "45f4ff75-6722-40ad-a09a-ff85891241b9"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "398b76f1-79d0-474f-9532-7586e82cabc8"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "a9e9a373-f9ad-4de5-a868-57480e1bf269"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "4cb97363-8908-4ef7-93c3-111000bad46e"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "30fcb93b-e62c-4069-bba4-c8297dcd822f"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "e9f4fe68-3f26-44c9-b67a-3b0c0f6695b7"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "526540a7-8e04-4686-9c61-d401cefd2ab4"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "2a71a871-3bd3-40bd-b603-36e6e40c0054"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "f98d4075-ffe9-40ad-9d0a-fbf723f2e653"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "1002cdf8-c004-4c04-8041-1c4d04df4cb6"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "2e1408ed-649d-4ed2-b23c-cbbd5cd514ba"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "ac4e8d99-8865-49f2-a995-2a48f0eb4f45"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "c5baaaa1-5313-45a9-a718-ce307f0d1389"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "36f69ea0-d6b7-4b86-9288-e3f8336fcc21"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "e33c0944-9405-4ea8-a139-ddf80f4e6ad0"
}, {
  label: 'Tools',
  mpid: "df18ce9e-d51e-430c-b20e-c5739eb171cf"
}, {
  label: 'How It Works',
  mpid: "0bbafec2-1c79-4247-8ba1-32f56e80ea02"
}, {
  label: 'Demo',
  mpid: "e7b391c4-369f-4377-99a7-ba03903f089b"
}, {
  label: 'Live Breaks',
  mpid: "3652ff6e-d115-4c91-aa5e-75c7f00b9c1e"
}, {
  label: 'Shop',
  mpid: "20576b50-66c2-4294-b69c-b6aca0a6a296"
}, {
  label: 'About',
  mpid: "8f41e8ca-d27c-4036-b96f-966a34175666"
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
    mpid: "65d7a9bb-159b-4a35-b5ac-12db04ef761b"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "2769de4d-4a47-47e8-bc31-b92e9ae62373"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "339b737e-fa45-4d64-8df7-c6d5d8317e87"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // @return
  return <SortableContainer dndKitId="b2bc5ed9-2388-4372-8c1e-b76e90c5a91b" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="0ffa0ccf-bfa8-495b-bdae-7e39c9d92862" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="af10a9af-f927-4b49-9be6-b41f6f2f1740" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6fd5f724-fdcf-4ba6-a1e6-a7b466a6bdd0" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="ce3873be-d94c-453e-b467-c06c5bedb01d" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="83a4a910-dca4-404d-a408-9d24f529139f" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="16d7769b-3b31-43fb-9a70-7764a7af350b" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ead7156b-e0fa-46e9-ad2f-8fceef9cd231" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="46a8b375-db1e-4005-b170-c68b731fb60d" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="8e1ddc76-b5ee-43be-9325-02e55d92b22a" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="2808512f-d5aa-40eb-bec4-10d039f229b2" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="af2ba2a1-cab1-4342-a282-c9347808c484" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="934e1d9c-8911-4b6e-adf2-8ea0aa14c640" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="25addfd5-86bf-4c11-b478-355b6c23cf55" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools —</span>
                <span className="block" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? 'default' : dotContent[activeDot].id} data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 0 ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : activeDot === 1 ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : activeDot === 2 ? 'Stream with BreakDance overlays and get instant promotion in our Live Breaks directory to collectors actively seeking live breaks' : ''}</span>
              </p>
              <SortableContainer dndKitId="87b537d0-1bb3-47a2-9a43-50eeb5970233" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="4e7347ce-25f0-4de2-82bd-9f5e5812e837" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="7b85b056-e98e-43aa-9ce6-fd1ca2b84909" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0c3b547a-e2df-4e1e-a0df-2e1a4331f00e" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-opacity duration-500" key={`preview-${activeDot === -1 ? dotContent[0].id : dotContent[activeDot].id}`} data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="3b9fd735-d202-43a8-8887-83de4222478d" containerType="collection" prevTag="div" className="relative w-full h-full" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {dotContent.map((d, idx) => {
                    const isActive = idx === activeDot || activeDot === -1 && idx === 0;
                    const baseSize = 64; // px
                    const scale = isActive ? 1.15 : 1.0;
                    const z = isActive ? 30 : 20 - idx;
                    const positions = [{
                      top: '36%',
                      left: '28%',
                      rotate: '-8deg',
                      mpid: "53dcaeb3-0e47-4512-984a-370be310bd02"
                    }, {
                      top: '50%',
                      left: '50%',
                      rotate: '0deg',
                      mpid: "32f77ca4-f596-40b6-aca8-c4852d6a74d8"
                    }, {
                      top: '62%',
                      left: '72%',
                      rotate: '7deg',
                      mpid: "b3989bb6-8010-4107-8e51-3fc1d01657ea"
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
                <SortableContainer dndKitId="37463522-c2aa-4db0-b851-192a10b279d5" containerType="collection" prevTag="div" className="mt-8 grid grid-cols-3 gap-4" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

          <SortableContainer dndKitId="f7b5f8a2-816a-4397-9f86-054e2164ef10" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="3de71498-2a5f-45b9-ad95-0b52418b6992" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="691b4cbd-a525-4b7d-b809-c1e0ad58f019" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3ba344dd-de9c-44a5-a455-debdca3ee4db" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0f63e6d7-ff6e-44cb-9281-bc8da808e685" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="19630d2d-9e07-49f3-a3f9-761b7dc1194a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fbf6f679-63c2-4b70-bb18-624b5f02293d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ef796ff2-1bd9-40f0-addc-c2b2b470c4d4" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="fd86f7e3-59bb-4597-932e-f83c7d92dad8" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="446141bb-bcaf-4e69-ab45-c6349c5859cf" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="2db56c86-47f6-499f-811c-96f16b54c3d9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="11097d75-26b3-43fc-94a4-17df8e17d996" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="36a742a9-a6d9-44cf-9106-a83e4a99e7b2" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="2aef8ed2-b5f3-45a6-8816-a34e5277817b" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="5f27226b-bb03-467a-a67f-58e03567adf2" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="5698906e-5e70-4852-89e8-b45cbd8f5e6f" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="c5e3e37c-b461-4f31-a046-b694ef54c905" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="995fd480-bc7a-4258-b8fa-8cc15d90f346" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="835c026e-0458-4c55-acfd-714eda84a729" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="1fb4b798-8e65-46b8-be2a-ae81b69f2ca2" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="f009f67f-073e-4e14-9212-6db30beca8b9" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="75971bbc-bc25-413f-9884-4cb3db35c162" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="e697cddc-cd4a-458a-af60-70ceabd2020f" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="c9164be7-b328-44f6-a059-28a50481d317" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="bc3848ee-35aa-4ef0-9e3c-212c7390059f" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="82623cd7-2ee6-4969-8f35-72ff27325dc5" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="7996c3aa-3b4d-4606-a9b8-a5c6b497376a" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="023bbb7c-379d-403a-b07e-18335e2f2d11" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="51811184-d861-44ed-8324-3a5faeac558b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="c7173b39-23ea-4946-a596-33651192e8bf" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="3898048c-ac35-46b8-b851-0c654e55fade" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="54c5a2a9-d4d5-4057-858d-6ba9a71c7781" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0d8c31c9-61dd-4030-a228-0a0223be9efd" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c140b3bf-469f-4fe2-b83e-733f883072f6" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="cdb1ba35-0912-47a1-b5f3-785f7a64dd20" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="eef760d8-1148-447f-9b92-748f611a703c" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="206e985e-756e-4a31-a735-d92f889ab4e7" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="1de97fd2-953b-47d0-8f68-37d325f4bc9a" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="da01cce6-bc8a-48b6-b4ce-48a1188da534" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a8e4a3b8-2ca6-44e4-aa26-a29e2f5f6baa" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a4d09807-b351-4f7b-b735-99b63299f432" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="22b18d46-7249-41a0-9434-3f561f1b55e9" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bd0c7bee-d6c1-4996-869c-b2ad2d5b80e0" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="49aa6a5a-7335-458a-9878-ae4f3b5b98fb" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a2e54a28-c126-4a59-938f-2cb0c154207e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="6886b17b-86b6-483c-b7d6-f328286ba027" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="480f51ad-1716-4b8d-be2f-32c17243a615" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="80ede507-5ede-4511-b735-c7f5aa9a3738" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="9d304413-6359-4139-b821-eb1cf7b4eac7" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="87459e61-13f8-4cf7-abfb-0c88ce49755a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="da05d23b-7ca0-4816-b987-30ad101f1257" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="903a59b3-6adb-40da-972a-e62f12b4caa9" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="0d48b6bd-2dbb-4233-ac2c-cfa12acfff8d" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="d9fbf20b-9210-4de3-bbc2-6e74ffa60166" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="e86c06da-fd81-49dd-bcd8-d6743d86cbee" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="aed05cee-2167-406f-9ace-25161b1e388a" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="3bc244a8-2ad8-49b7-afa7-d4959a2e26b9" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="660b4680-fb8e-486d-9610-ba1a3c785113" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="2fe40a11-0e65-4758-bb29-59e78013438c" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="ef4a6212-ae1c-449f-afbb-0f96a2461559" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="73180326-3b01-495e-94be-648b09e04265" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b9b4b31d-c2a7-4dec-be73-520e37c70532" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="c166bcd1-42bc-4ceb-8b87-c14b483188b4" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="130c560c-f36d-431f-a25b-49f4c3e58794" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="98d6bf27-0ad8-4725-a264-aee819c45e51" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="d8ac1d18-f58d-4a1f-b3ae-032119030c40" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8a657b0a-03bf-461e-b638-4f8bf267c80c" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="f5255282-8a36-406d-a9b4-ad2d79d37926" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="d1a0d3c0-3496-46c8-b02b-fc1813883410" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="5f62ab8e-dbd2-45b8-adbf-d30d6f0648c2" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="d1e28fe5-df73-47ed-a508-473733c4546e" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="e2f2354d-3142-4ba6-a928-a87f6e9a7ef5" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="2599c381-1223-4b12-9fd6-feb2423af79e" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="115bf078-5a9d-46d7-94b5-5ee80aabc0e5" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="ef0f22a4-1890-45e3-ba54-06a85c280b6e" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="c4a00e9b-4f4d-4972-8392-52a2dc77f3e2" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="59edd413-7f4a-4e71-9b9f-e4aa11682fe9" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="27bcac5d-5335-46cf-b99a-d81326b700e2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="3bdf9df2-a539-4689-808b-3842115de731" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="5deb132f-61d0-4292-87a1-78fa8b0e5955" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2fab3fb7-f4e9-48ca-bbd3-61c9ef1590cd" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="6ff3e380-4b8c-4c4b-a06f-753ef8a93089" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="e22cd04e-8889-4c47-8c4e-3fc784599d57" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="062c5417-e01e-4915-a42d-28ac7e2c163c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2b11d671-31a1-4789-99ca-fbf01aa40eb4" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="79edadd8-50cf-4b2c-a5f6-f9e52a070b6c" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="cf3d29aa-9e39-4471-928d-41a1e1c40727" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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