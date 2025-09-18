import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "37c832e2-43f4-47fb-9cb7-c8d08fac49fe"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "2e6aee22-a718-4288-8e85-c643614b66b6"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "64172176-77bb-4cb6-b753-d6de49db1773"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "4e14d4a2-ec75-4ce4-8154-48b1cf637857"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "c1617d84-1dc8-4408-ad2c-ab1785627494"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "1e12218d-d0cd-4b8e-a9ad-25448769748d"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "95493633-af0c-4061-9429-16d8115aad9d"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "eb2f10ef-612c-4dba-a60f-5e4f3915cc26"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "7f82eda4-9cc7-4fc4-bcdb-f2cdb9077b6c"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "6398d1a9-64b5-42c6-852e-0ed7e5ea2ce9"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "f77a9270-2d49-43e3-a7b6-729c43ce696c"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "fbd2728b-9a4a-45e3-bdd9-4adb7404e88a"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "39a5d045-b078-4f38-841b-a4b7918dcc49"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "3656ce1d-7416-44e8-bb87-eefafde8e1ce"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "f3911f1d-93a8-4ecb-b1d6-110fc757e64e"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "ab58dbd3-5a37-4fc8-b8fc-15870ccbe43a"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "2d4901ca-ef06-47dd-9e13-3988e44f1b8a"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "ee91876d-a4c1-433e-b338-d8ec8d3335d4"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "07ad4832-1978-419f-b791-a899cd4626e5"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "80d3abf5-72b5-4963-af85-e09cb1560aad"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "6e4b59d0-6562-4c83-96a6-a11450792fe3"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "3692c5ac-178c-4cd7-a69b-cb263e055732"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "a9e14dae-ba12-4e83-89df-35945dc329fc"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "79ce8d3a-1384-45b9-8f0b-d05c49576dcc"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "d356af22-ddc4-4a8f-b40b-a32ff1f2777e"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "f0806333-7c1b-471a-a67f-a6877dbc5d7d"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "02e8f2dd-e73e-4716-bf17-b8958f2c134d"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "413d7ba2-efb9-4d48-9f2e-7be0bff20e8a"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "899ac028-f5f3-4fe0-93dc-f60101fa5d94"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "5ff3f213-8b9e-4c89-9945-6a1c7bae117f"
}, {
  label: 'Tools',
  mpid: "27d774e2-46d2-449e-b92a-6bed780e1d85"
}, {
  label: 'How It Works',
  mpid: "86fdeb29-96e4-43cd-a39e-d735e42aa11a"
}, {
  label: 'Demo',
  mpid: "a07d7472-4371-4706-b861-5ad7858cecd2"
}, {
  label: 'Live Breaks',
  mpid: "30fce7c5-0d6b-4570-a2dd-e152fbd26c7e"
}, {
  label: 'Shop',
  mpid: "21817bbf-5d89-4da7-8e78-5d87d3f4f324"
}, {
  label: 'About',
  mpid: "cf687a80-d33f-46e8-a3db-a797387be227"
}] as any[];

// @component: OverlaysUnoLandingPage
export const OverlaysUnoLandingPage = () => {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState('BROWSE OVERLAYS');
  // Ensure the "Browse Overlays" tab is selected by default regardless of casing
  React.useEffect(() => {
    setActiveCategory('Browse Overlays');
  }, []);
  const [activeDot, setActiveDot] = useState<number>(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setActiveDot(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  const dotContent = [{
    id: 'dot-1',
    title: 'Overlays built for pros',
    hook: 'Transform your streams with professional-grade overlays designed for content creators who demand excellence.',
    preview: {
      label: 'Stream Deck Interface Preview'
    },
    mpid: "64c49f5f-37de-48dd-b974-e9a757669f5b"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "fe63df18-e340-422c-bd8d-fbd8f9a3a165"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "078bf860-1bd7-4583-a80f-cdded321ef7a"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // @return
  return <SortableContainer dndKitId="1cd48780-7e7b-4cfe-a51a-e3f52c275c31" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="322f388b-f5ae-45e6-97e9-558225e16e41" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1835f8ee-dd0e-4d20-9bf1-4cd50861e5d6" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ffc664c8-8c44-4a07-b96d-b175264a9087" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="8e5728b6-3838-4fe5-9da1-6ecb5886a8e5" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="2f911216-d843-4097-bf52-5cafa00e54f6" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.792 0.209 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-4px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="59d89ebe-8ddf-42fb-9740-30f3042a4301" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="3e136bd4-652f-4fcb-b8c6-ad5b56c0602f" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="36c141b9-21d4-4f26-be80-636b8fada4c1" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="65dbfbe4-1f78-4a36-a3ce-891a8c6574af" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border border-[#FFC543] rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] flex items-center space-x-2" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="32294ee2-b883-4dbc-bf87-4832d4168e46" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="248e2dec-5abc-46d3-9ca1-b59872717df5" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ceb0ab7e-6360-4bea-9297-51a5e3cf8112" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="81e1dd69-7bb3-4e37-b7df-92b9e85b3e62" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">{dotContent[activeDot].title.split(' ').slice(0, 1).join(' ')}</span>
                <span className="block" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">{dotContent[activeDot].title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={dotContent[activeDot].id} data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">{dotContent[activeDot].hook}</span>
              </p>
              <SortableContainer dndKitId="9e686e18-f101-44cf-85d6-3b3b0a703291" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse Overlays</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="bdd16e91-c0cf-4fe4-a127-a860e15a6291" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="85feb57a-4dec-4cf7-a9b8-9eaa0500a0b6" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="3a33f5e9-407e-484e-b9fe-b6ba40697169" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-opacity duration-500" key={`preview-${dotContent[activeDot].id}`} data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="40430c52-db45-4431-894d-fafd5456e500" containerType="regular" prevTag="div" className="text-center space-y-4" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="769ebd40-a917-481d-970b-5fba995db674" containerType="regular" prevTag="div" className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <Play className="w-10 h-10 text-orange-400" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    </SortableContainer>
                    <p className="text-gray-300 font-medium" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">{dotContent[activeDot].preview.label}</span>
                    </p>
                  </SortableContainer>
                </SortableContainer>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="9a401930-484f-43c1-9982-04c8753116b5" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b45678e3-864d-4532-8b02-d8e151aaee1f" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot;
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="f43a14a8-be87-471e-a13e-e27df3fbb61b" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f20b2b38-e99d-451d-b41b-397063425120" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="c199f3c0-dc78-456e-9428-0677837f1cb1" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="dc270755-5c7b-4c1e-aa25-e6b9e76537cd" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f3d15909-d7ff-4558-9122-c42e6d60eaf4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b54b4e07-7488-4b27-9588-b1f26f1a4bf5" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="c1b9f7a1-a605-4b7b-9577-a943996a696d" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="3c05c31a-bd64-48df-b37e-69a5439bf550" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="24d8191c-5d61-439a-85c3-1f24cffb58da" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="099a7d10-691d-40a8-904c-94d5adc3a078" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="1f6a7f28-87ca-4f0d-a688-1c4d963d4b89" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="fd49ab0f-a64e-47ed-8e6c-2d25d9fea2b3" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="7a0fc1c0-dba3-4c27-98c2-8579a8d7c902" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="5bb53e28-c82e-447f-a180-50582b16c43f" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="08fa806e-9d67-49a5-b4d5-e364e36ab9e4" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="00676461-3057-40c4-a951-c8cab9783749" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="36492afb-72fd-40fb-9fed-33af9e4834cd" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="4b03f151-e49f-42eb-bcb9-e31534da234d" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="6be19eeb-4c16-48d9-8a7b-0a840284735a" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="4e4c1c18-4134-4e24-aa4d-825279b9b2e9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="f4960aa4-7ea9-4881-b106-2001e5cfd7b9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="d9f432b5-6ded-4447-accf-7ce12676e23d" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="98969357-219b-46c2-a9e7-fb825310ae75" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="28d77056-608a-4d02-b783-74a3a16cf51d" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="78538374-b97a-41b5-85b3-fc344d1c832e" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
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
      <SortableContainer dndKitId="148696a6-ef97-4b7c-bd15-6c5d3cb9d36e" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ae7beaa2-f812-43df-807f-31f333628d10" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="1a057fcb-eb8f-4cee-acb5-498b892578f2" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="460022a9-bfff-4ade-b293-364b0f06d879" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bdafdd8b-ce63-4778-9a96-de8c8ef570ff" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f1aeb43e-381d-4c44-83b3-0f2d38336d58" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="5960d8da-5ad4-482d-8f51-970ce6348550" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="2ae8cdfd-1dd2-45e7-a0e2-e4370872716e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="bdcbc204-a72e-42f6-a482-1bf659256c96" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="24fc297d-bf95-4d50-8f78-ad3d928304be" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="c4c64276-2216-42ff-aae7-4d8773cc25b1" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="f1d4e2a7-277d-4075-93c2-53e96c097f06" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8271498b-e5bb-41ba-8fbe-9db55beb5180" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="1658b475-5fc6-4b28-a880-032b3ace3041" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="a58725d3-0c2b-42be-becd-b93cbffdf680" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="96553324-635e-4379-a1c7-b337c21132f3" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="558868a3-0689-4015-a14f-e94dd4f29a9e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="ecde7351-0d37-4edb-8759-97cc98f8278e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="6269c367-b023-40cf-aa58-5a847425d65a" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c1306fcd-806c-4329-8ada-f132ef340ae9" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="65653795-0d66-40c1-98f2-219b917ace4b" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="416b0ddc-9034-401f-ba2d-2e0a6040e37a" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="74f9f870-648f-4dc9-9f90-00130e31eb68" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="740cf6ff-ae0c-49a9-b51c-b0246fc7ab19" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="a0482d4a-7f7a-49a3-b0db-6971b3be2762" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="1e95ab9b-fc17-4fd1-9bc0-2a2bbf285bc2" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="0a07070e-ab7b-4c0a-995d-0646eac4f11c" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d5d234e0-eb35-4c96-b8bf-52e53c2b3c06" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="e5ff6e37-86a8-4a5d-a096-f3f480cf80fe" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="4e3a2f6f-84c9-42bc-a058-6e8cfc26dd44" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="474b540e-1a47-4e8f-97d3-6a84a3b35b57" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="a3f515cb-cb74-4958-bd8c-ca2b517926a8" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center border border-orange-500/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="d223ad6c-d009-4510-b4df-ef6c39a1baa4" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="9a086eb8-7112-4623-8225-fb2261d88154" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2586646d-fc60-4f5f-b91c-7909b206165d" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="85aeae60-583e-4fcc-8da4-8e4cc172d1a6" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ba1880a6-bd43-46a8-867d-51dd0fbcf4e3" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="67c62cc2-ea17-41c1-a6ce-2ac5485b12ac" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="ffcf86f2-afd3-473d-9918-acbf88d02fb8" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="00bcd383-9b8f-4f40-a778-9e5424baa0d3" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="ad7e520d-e685-4c28-badc-c960006b7fd8" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="a6573a3e-9075-4524-96e0-78e64767d07c" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="7cdd832c-8e89-4024-b9d2-5194d3059266" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="d81c2cf8-37dd-4df3-9a92-4828d73681e2" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="b89e111e-decf-4d1e-b87a-66e272b2d97a" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="97f56406-a39d-4926-8706-a9a72229f2db" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="4ee306db-7858-4cd1-be08-9d89a32ce1d4" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="7b247dab-383a-441c-9187-36dd5fc942c6" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="a76f47fe-3e58-4b7d-a958-5c759b8fb0ab" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="43e1c5e1-cf4f-4e27-8476-3fa190351f06" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4c4f7b21-e5e6-4304-9684-1b75882e6fad" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="f7f7dc3c-fba9-4c36-ac8f-78352732dd54" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="228fbebd-10dc-4d36-b518-95ff610fa8f1" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="7e3ee394-b36f-4e81-b0f3-21a2a7143fb3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="aee5bbe0-401b-403d-a74c-1a31344cc9b7" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="87eefdbb-4268-45e7-9ab3-b358e8a130c5" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="de5616c4-9a85-433a-adc2-1a73fbecbde4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="3526304d-a85b-42d5-af78-1fc1d37828b6" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ae494d95-5971-43f6-9547-b234535120e5" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="f095306d-fd47-42f5-8c9d-6a77fc2d464e" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};