import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "bf978598-8d93-4b53-b614-a20954f59262"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "221fbb42-bd93-45f1-a134-a304a0421d5a"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "67906a9e-2374-4136-bc5b-ecfe04e97c6e"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "d71ee04a-3947-4bd3-adbf-08c5e18ae9c0"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "ec1aff62-f4a5-4894-8e4f-eedb1feeda80"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "a29c469f-eb71-4c28-b485-83f70903bb5d"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "5bdf424b-4439-4573-8034-a41f0007b740"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "6c3a4052-c1a0-4d2b-a40a-287fe5a6cfa2"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "9aaf6fd4-bd16-4c2d-9258-e1e50b0342fd"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "0a3e519e-4f99-4f28-965b-5c0631a80d0b"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "7ad015f7-ef70-4ad5-8a08-d43ae9f71051"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "88c9a5ec-150d-4d24-9eb8-0a15150381d6"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "067cb7aa-2489-4c1e-8d89-0c316614e027"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "740627f3-380d-4e06-82eb-69a83d69d589"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "bca15c5c-05f4-4aaf-8a42-d2d10ab8fa45"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "ddbe89cc-15d4-4536-93b8-dd1af2a48302"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "d3cc16b4-9739-447a-b88f-3bb6f63435ae"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "fb1b7b75-f999-4aae-b04c-09fc61dcc1cc"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "edf68793-acdd-4a0b-a539-c3383965f4df"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "38cd6444-8a99-493c-a672-984785799f5a"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "b83fc2dd-73a4-43ff-8598-59d47583a2c1"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "3e6b4f16-5a7a-418b-a592-29c2474c6e67"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "423349b6-2073-4cf9-9a7d-3cbfa32cd7eb"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "81dbdfa2-4178-4dfe-9132-68265560095f"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "b3323a7b-d84b-4d65-8e3f-64ce714e2218"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "8e2e80cd-884b-42de-822f-1ba62ccc28a2"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "000901f1-2c09-4b05-8d37-49b0ffa1129b"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "7b2c9b1e-30e5-4325-a2ee-ad09e8e040c0"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "31f55c27-9d89-40f6-b80b-aa3572607c01"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "5c3356e1-84d2-4a11-8e6c-e3c8d849104a"
}, {
  label: 'Tools',
  mpid: "119c1914-1a4f-42bc-bdf3-ff72024e7b1d"
}, {
  label: 'How It Works',
  mpid: "c14f046e-4829-4c9d-8690-b7a7ee76c867"
}, {
  label: 'Demo',
  mpid: "b9d04f7a-d499-4580-b196-c832b7aec428"
}, {
  label: 'Live Breaks',
  mpid: "de428950-d84b-4d37-a9fe-9a004d9352c9"
}, {
  label: 'Shop',
  mpid: "be825064-0c99-446a-a163-5ba73a8857ff"
}, {
  label: 'About',
  mpid: "26bafb65-ac3f-4bcc-858f-e054a89dc884"
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
    mpid: "f03db395-6fa0-42c6-8815-c5dd32f7700a"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "263a6507-adf8-4d73-b716-7399de9f177c"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "edc6c0e6-c9c0-4788-b4a1-277bdb4e069d"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // @return
  return <SortableContainer dndKitId="c08888bb-fbae-49c2-8bf3-2e31ebf297ac" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="14554856-7299-4ba8-8ae3-6b52cf985f8c" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="e42a2373-65ae-417a-b1db-a8b05745afde" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="232fa377-4a2d-4296-bd66-2ae4c5487048" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="d3943daf-798f-4262-8c58-105c5d6e46b4" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="21ccd5e9-e5ed-4680-bcfa-abb91817146c" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="411bdee4-c01a-4de8-9b90-d5abf459f633" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="34478d1e-d8a8-4bc5-a246-f0d950146186" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="5a353356-42e6-4a0c-b289-d04e82a69918" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="ec5b78d7-7158-4c08-be87-fbbff8c56ad6" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="94e2bf36-59d7-4095-ae47-14be11b404ab" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="44f9313f-823e-41f9-b4b0-6db41cc4498c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8895aac2-08b2-45d1-a90e-0cde4c12957f" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f653269f-485e-4e41-9eda-85d238dffcbc" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">{(activeDot === -1 ? dotContent[0].title : dotContent[activeDot].title).split(' ').slice(0, 3).join(' ')}</span>
                <span className="block" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">{(activeDot === -1 ? dotContent[0].title : dotContent[activeDot].title).split(' ').slice(3).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? dotContent[0].id : dotContent[activeDot].id} data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === -1 ? dotContent[0].hook : dotContent[activeDot].hook}</span>
              </p>
              <SortableContainer dndKitId="35041d8c-b90d-46ec-a61c-6247d635f37e" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="f96ec6b3-f968-463c-9819-371298aa8a17" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="0ae1853f-c0d9-4735-bdb8-5a22333da388" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="23a840ce-11b6-4282-8c0a-1075c2a6e5f5" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-opacity duration-500" key={`preview-${activeDot === -1 ? dotContent[0].id : dotContent[activeDot].id}`} data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="f79b615e-8c44-4809-b13b-e1c1c290dbeb" containerType="regular" prevTag="div" className="text-center space-y-4" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="ed849311-5ac2-428d-87ce-382f33c82be1" containerType="regular" prevTag="div" className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <Play className="w-10 h-10 text-orange-400" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    </SortableContainer>
                    <p className="text-gray-300 font-medium" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === -1 ? dotContent[0].preview.label : dotContent[activeDot].preview.label}</span>
                    </p>
                  </SortableContainer>
                </SortableContainer>
                <SortableContainer dndKitId="8c44cd35-bd37-4839-ac56-c961ccb3f390" containerType="collection" prevTag="div" className="mt-8 grid grid-cols-3 gap-4" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  {dotContent.map((d, idx) => {
                  const isActive = idx === activeDot || activeDot === -1 && idx === 0;
                  return <button key={`icon-${d.id}`} onClick={() => setActiveDot(idx)} aria-label={`Select ${d.title}`} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors ${isActive ? 'border-[#FFC543] bg-white/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <span className={`inline-block h-2.5 w-2.5 rounded-full ${isActive ? 'bg-[#FFC543]' : 'bg-slate-500'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                        <span className="text-sm text-white/90 truncate" data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">{d.title}</span>
                      </button>;
                })}
                </SortableContainer>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="d76bfe54-b9c9-494f-be74-1b73b64d44f0" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="7e65852f-978f-4f63-a383-5d382659362a" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot || activeDot === -1 && idx === 0;
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="e4f6455e-b8d4-4d46-9bbe-045eff03a37b" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2644e509-58c4-4566-bf0c-161c15b8e926" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2a48ad7a-dc9f-48a8-b245-0ef66d0ba1c3" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="6060c0d7-c5b8-4682-9613-3b9cb1ada92f" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8f61666d-16f3-4b39-8ebc-8b85de831f11" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="66d45b2c-d30f-401a-b95b-a82c1f5849bd" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="e9020056-83ee-4c04-884d-9c663378b053" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bcf6b316-d7d6-438b-abc5-d2226211a7a2" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="6771f730-ff5e-450b-9b1a-e40d53148293" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="d4952baa-1c77-4683-83ed-cf7a94b938e8" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="1bb1b978-435f-4a74-abe0-7bf7671c32db" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="eae26fc6-ad8d-42bd-a1dd-8493205a42a1" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="1b26f3f3-7c8d-4f83-aacd-dc7782084365" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="91b4eb4d-c671-4aa8-a603-37e94eb8f185" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="c86b839a-f409-4da8-bab8-d1a57192ce8e" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b47e0b05-c56a-490c-862b-acc561199334" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="4c55be7e-ac23-4e49-bb0a-a2c4d8f7f959" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="cc648bba-155b-45d6-92c2-7d402b6388d8" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d530cfde-cbc5-49af-9330-10e7726857c5" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="90416806-bea4-4e34-a886-f082805c8201" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="380a6580-3683-49f2-a9dd-a46a426ace14" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="7078163d-b572-4a87-b94b-85f1372ad616" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="a5694b8a-4f68-42db-9549-d4b8cf9243ca" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="e9c51c40-12a6-4bc0-90b0-93947cde1cd9" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="a60520d7-cd93-4e2d-8fdc-5ed1261b96fd" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="7cd4d95b-17ae-42e9-98b6-5d21edb05fe0" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b72380b9-b90c-4b8b-b06a-09e4ae502dc3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ebdee4a7-e610-473b-aa45-73c82f664fba" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="4854c1f2-0638-4e97-9498-0d37b990d206" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ed684472-ff58-49ae-a18a-c230ec1d9615" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0e5e98e5-6dc4-4356-9248-30558f1c8d69" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="5fd88640-c635-4d16-8e03-b98ee884da8a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="ecf03134-b27a-4b10-9d5b-9097462e063b" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="4782b62a-b1b5-4c0a-98e6-a91b75973065" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="deb2ae7c-1c81-46b8-8daa-01087ad809b8" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="1b315a7f-580c-4583-a087-475a3a55d9fe" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="ea0172a0-60e4-44c7-9e93-39e37986e88a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="06db89db-3b4a-4579-bc23-d609bc99800a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="3d99c963-c2b0-4ef1-861e-aab2db407d86" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="95226d72-afca-4600-b15c-68648645e24a" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="9cd63a25-5313-49ce-aa31-9397d53c3df8" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="b94ccc26-b113-4d1a-b771-1d933773859b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="2d2c9371-7ff5-4181-b783-a40f4e01f6f4" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="70fe18b8-9b09-4a17-953e-114d1995ce24" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b991081c-fd90-47c3-84e7-0565635fe821" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="84c99008-525a-4988-9269-a630ea2429a4" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="7c209cee-4cd8-45d1-9cb4-d211ece3c65e" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="16ee7bb7-7768-4766-a727-f2e8edde073d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a66ed5e2-3810-483f-8441-95caefd068ca" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c647d89e-c6ad-411f-9877-871638749d08" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="c0ba4b57-8a5e-449e-936a-d726752dc616" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="be1736d9-c2b4-4c6d-bcde-fa8b4f5cab56" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d8d90c7c-8a1f-49a6-aa39-4a1a7f63ce35" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="079ae6af-f5fb-4935-b2a4-9b6aac45d4e9" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="cd8128b8-1329-41e0-9fe8-04b056c190bc" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8dae7fd0-1c18-4cf5-9f55-90d4a2f2b0d5" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="b3aad4cb-8ce8-4a3a-ad0e-e9328dbf6542" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center border border-orange-500/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="02029cb0-6a71-4d77-8e2c-2f7fb70d51c8" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="2be7ac3b-3c26-4ea4-9983-d7740e8e515f" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="db251560-6b45-4774-a6bb-d572da251691" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="c36cf619-b27d-4459-bcf5-4eba9083bcd4" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="22a558fd-704e-44a4-b864-60d05ec1e3a1" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="7cc3970d-7cae-4ccb-aafd-0d185f65c380" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="3ffcff14-ea6c-4244-b755-62342da77ffc" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="ee5145fc-3cee-461b-aa3b-a02277a862c3" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="1bcebe5c-ae4f-4618-a080-5bc5dce0f420" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="7c6e0f11-782b-433e-9196-b1fa420d1075" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="0bc06379-7e5d-4cb5-b1c6-090255cb773e" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="ac3e41c4-6959-4892-9c3b-abb9fa327397" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="dc84256e-ddcc-410d-ad97-3b81a5aa4f34" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="613a5a70-4c8a-4c12-b7de-5536c9d79e8c" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="cb039d65-12ac-4c70-9453-eb697bb78b3e" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="8c61c161-0b28-4f1e-bcda-4b9eecbe502b" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="9cff398f-f4c3-4173-9b1a-83bf288a24ad" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="6cbd0c01-7316-43d6-b49d-3a3bc76f2c83" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d8bea9b3-84ef-448a-9961-46b376fc80b5" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="2cb47bcb-db64-47b7-b932-7ea82ce8da05" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="ce3fb0e8-f3bb-463d-9b58-37dfd9c1e840" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a1025b3f-1c90-42f0-ba1c-c020d1de39c0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="d1b96304-6183-4b01-9a2a-460d78accaef" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="1af6b212-7242-4679-bc43-de8b06c486a0" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="7fa66aa6-4e92-4006-8e4c-84c36ffe6701" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="cd938921-e31d-4a3d-8095-c3bb686c5cf9" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="24f46397-16df-4cd7-b2fb-f44eb0d4aede" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="c40a79f3-746e-428a-8791-994bc7a66661" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};