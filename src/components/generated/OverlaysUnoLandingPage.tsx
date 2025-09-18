import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "bf0aae6c-6194-45e6-8031-b21ee829fcf5"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "c04b8879-43c6-4f01-ae94-913ad258595c"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "0987c8df-a1c5-4c85-8f21-674c9db28087"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "c3488358-2b10-428d-87ca-d9f06317fad8"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "68b6c838-ed57-4365-aa0d-98192eae731c"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "db3dad73-4973-401b-942d-05cc0f86bfc3"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "1fd94f89-da6a-41d2-b878-bbb1cf57b1f0"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "c00a65fa-95e5-4fd1-9e39-eaa58c3e2161"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "119a3169-ab1e-4489-8cb9-fa42b34434ab"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "82defc49-b3bf-426c-86b3-d38b03ce2b54"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "e72c8237-d31c-4bc1-836c-b1f816f2c198"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "633d83b9-b277-47fd-9b0b-9c6c82440bdc"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "7d51a55f-e750-4b4f-af3b-c5024ebf08bd"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "4b215f9e-1aea-44fc-a48f-3d18a314b66b"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "35ff898b-30e9-4057-bb43-e0a687e2b410"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "edc82bc4-f95b-4026-a1af-cf7891c50555"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "d8cc3798-5268-4923-92ae-62114df7c0f9"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "7a252ec4-9ee3-4746-acc3-a102c4dda704"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "4599b748-1911-47c8-a130-fd7faee1a3bd"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "49787745-fe82-407c-9838-9d4ee67534ab"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "e3ffeb7f-d8d1-4aad-8530-9e19fdd0df88"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "514cd4a6-42b7-45e5-94a1-68013ac72fe4"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "951919ec-528a-41f2-b265-8145b65ffaa3"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "8852f399-52c8-4302-a001-953239bb2b2a"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "ee2d40dc-a17e-480e-a106-97e9fff400c8"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "45176e47-0399-4ad5-b75e-2c1ba25552c1"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "274c40cb-70d8-4299-b557-fbe52bc0f3ca"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "2c274f4c-7318-4b0a-bf10-6318a43df598"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "054f1ca5-9cfb-4676-9986-860f09c8fedc"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "e1db75a9-8e8f-4da3-962d-5f64aa95b66c"
}, {
  label: 'Tools',
  mpid: "3c382352-d737-4503-8a5f-cde3561e18db"
}, {
  label: 'How It Works',
  mpid: "5025e693-f484-4fae-a09f-f9337f13ce52"
}, {
  label: 'Demo',
  mpid: "d6b75d4a-2286-4a05-8d6b-107ad6071386"
}, {
  label: 'Live Breaks',
  mpid: "6c40a8eb-cd8c-4e97-89b0-580e32fa7f7e"
}, {
  label: 'Shop',
  mpid: "6ef1a930-e09f-4db2-9f7b-9b30e1efb291"
}, {
  label: 'About',
  mpid: "bc01c1e9-e431-4bc6-85c2-2352803d0d3a"
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
    mpid: "b46ccbfb-f847-4f21-9b24-a7da70ad1df6"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "153389cd-b90b-4027-8e16-cc601a10670b"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "de6853d6-f2aa-4ef0-9049-f47f0f2b22f2"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // @return
  return <SortableContainer dndKitId="7ff0c266-75d5-4889-8537-eb65189f4097" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="20a8f3f7-b4dc-4003-b007-9a63eaf8058f" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ac5de04d-796d-4b94-aaf6-5459a3e58612" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="572115b6-05c1-442c-aa82-33e1364d66e6" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="860e4e81-a50d-42c7-bbbc-c59e760d0ff6" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="cd2177ac-046d-4f2d-858a-327ac1a6ce93" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="d67c5b8b-643d-46e4-82fb-fa3ad4407a4a" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="cc9262d6-bae5-403c-a134-437a2d3e99b2" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="d67b2595-c0e7-491f-92fb-6c77e7ba2311" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="8e2e95b8-5cd5-418c-a123-cd5b2eebdb86" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border border-[#FFC543] rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] flex items-center space-x-2" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="2426ea44-90c5-467a-be0f-bf5d00f40217" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="c6f52aa2-2c2a-4294-8e06-6cfdbe190999" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="067e4ca9-b7ee-4137-acee-ac67ce7b9f24" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b8888392-ea6c-4dd5-87f9-b42021498bc4" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">{dotContent[activeDot].title.split(' ').slice(0, 1).join(' ')}</span>
                <span className="block" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">{dotContent[activeDot].title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={dotContent[activeDot].id} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">{dotContent[activeDot].hook}</span>
              </p>
              <SortableContainer dndKitId="1425e8e9-416e-4e7a-84a1-55b94bb05a28" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse Overlays</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="2ac3e3c9-cf79-4b46-b5c1-620465ed30e9" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c62915f0-d72e-4480-af95-8e3df7eb4565" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="294699d1-d6f9-45af-8331-054503ed96e9" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-opacity duration-500" key={`preview-${dotContent[activeDot].id}`} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="a633751c-4149-4894-ba0e-98e9ff857ea9" containerType="regular" prevTag="div" className="text-center space-y-4" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="68029790-0883-41bc-8f7b-ff83bdd01fdd" containerType="regular" prevTag="div" className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <Play className="w-10 h-10 text-orange-400" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    </SortableContainer>
                    <p className="text-gray-300 font-medium" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">{dotContent[activeDot].preview.label}</span>
                    </p>
                  </SortableContainer>
                </SortableContainer>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="9b17b095-9231-48ea-88a5-aabe80c3946f" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d84e5b29-ae73-4b76-8d58-47df0ff77230" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot;
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="dc0e5d65-1eb7-4c97-b8e8-48f67b57d148" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="c0e67051-63db-442b-bcfb-584cd6fdf909" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="57d7f11b-3559-43c0-953c-0c91d887133b" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="a2d4e98b-c97e-4ae5-9576-b7213f89b41c" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8edcbf52-22e7-454b-9cad-77bbeba4bc34" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2fd339d8-3b86-41f9-801d-8d6bb10e0a5e" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="aa1776af-0f9d-4bf7-acad-0130b7456326" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c1fe4fd6-6c88-4b2f-95ef-e6afe32fda2f" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="d1e546a0-c066-4e03-bfef-b901345515c6" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="f6f074a7-bdf0-4505-a9c4-a0471ea45ce7" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="d402606d-4a0f-4573-88bd-d1fe9ad24565" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="abd40d23-7a72-424d-905d-258c31dea4b7" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="4e7219f1-ca7e-43db-bb0f-a6b2077e65ce" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b4c8ed65-48e7-4a53-bf59-6de3f24f95d3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6aaa45b0-eb8b-4828-a02e-1b18d6ae797a" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="4360eb08-9d93-4d34-9bcf-002853dce8c1" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="52966310-1688-46eb-99d0-464216d9a9be" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="3b39e920-0fd5-4529-9fcd-31d8ec92b743" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="dffe72ef-0046-4872-9067-08eabca05196" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="f96a8494-b9f0-44c7-8011-f936ecc5d930" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="0bf5711b-9d06-45d3-b658-6968d6f944df" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="c3574ded-587a-48f0-996b-69b8be72e40a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d5d1130c-cc3e-4649-a745-900a11edbeb2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="87714e2a-7af9-4a2c-94f8-b52c6b493c5e" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="b2518a6f-b4bb-41dc-a5b3-523f4204219b" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="06488167-2f53-41ef-9252-320c7308e445" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="40d2d9f9-ce68-4627-8005-f8f0d013aee1" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c4908b36-e243-43e6-9730-08e942505506" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="cec35931-e6a0-47ff-b012-5e5546ececdd" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="a7d9b5b9-db76-4cf1-bcf2-128178db59a9" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="3dc3f9df-ec7e-4dc6-9fc7-95a6f2558b00" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="725f1bb8-27a0-4fd7-b46a-cb7de959a8ce" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="be2bcfbb-64c7-438a-a2d8-2899ef2e5836" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="5071ec9f-d1dc-41e2-a3e9-554c8734bacf" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="dc020bae-1308-4fe9-8aa0-c58b5fad79b0" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="4b23a4d1-35f4-41fe-8c61-ab4da4cf1535" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="67c3119b-54ad-4565-8aa9-fea3044e578e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="48a94926-a0e7-4195-ba24-863d38a7485f" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="adba3c9a-9f2a-4c97-a282-5c2961baed62" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Inventory Mgmt Tracker' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Calculator' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Count Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="d9917a9f-961b-4054-8e36-7a757ea3a209" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="39d38786-36fb-4ed0-9b60-98a7f07236d7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="881158c3-2159-4147-a9bd-f5e52ca96e8a" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="26287f3f-5f2a-498f-8928-50ecd65919a9" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="b7faf58b-3a0e-42ee-86a2-4c1d09fc579c" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="64bd0f27-d65a-4e1f-a5bb-7e4df5618582" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d7ea3c0d-2e39-4344-8a7e-9de7a90f3cb7" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="763bdc3d-3706-4f2a-a4ae-2b3ddfa33b52" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="8bee9347-68ed-47ee-b310-66892b8e0295" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5387ec6b-7501-47bd-9d02-6783847d8d04" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="c44eeb08-4514-4d6c-a541-25014495b850" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center border border-orange-500/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="e890d348-555f-4d7a-aad2-7b6352b8b871" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="be1a2b94-c223-4de9-a5ba-5b25fa80c3eb" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="74f6f0bd-b368-4545-9c3e-d946163192af" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="af2f78de-1acb-4fa5-b655-166c8019dabb" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="fd7dd2fd-df70-4159-a867-b89778873dd5" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="748c9793-2855-4ced-b7d7-fb0fad0f628d" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="ed52b74b-a1d6-4537-8a23-2e466d3b3a2e" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="b37fb69f-69f3-4501-b625-519be356a15c" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="788fb2b8-0562-45ad-9102-f589477d7140" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="1b89c3fe-abab-4657-ac5d-82e66d9f1a1c" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="5fbe2024-6d96-46b6-9d29-ebe02744e99b" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="1b95e280-800f-46fc-b27a-13b63a57ec10" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="7812f23b-954c-4b16-b091-f6b02a953f1a" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="8dc140b6-078b-4970-9605-773d7d8f8870" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="233c6afc-d9a1-418e-ba5a-45a724545bb9" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="c9e87429-9922-4c41-bba8-c4a9616da1d6" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="b0633aa4-48da-4305-8eee-f5e3140b490d" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="032b60dc-38f5-4a7b-a846-a5e0baf635a1" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8499c3ad-1d5e-4358-ba4b-0c888c5d12c6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="fc3f9cbc-eb7c-4d53-bbc8-8770b2f4c25c" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="8a4d5c34-c766-4ef5-b570-f65b621960aa" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2738151f-6c08-4748-b34b-ec223a5d0f0a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="5a1c8cc6-8fae-4459-a3a7-787a7ed39a13" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="c87c0444-d661-4d43-be8f-dcd0f6f971c1" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9685024c-0611-4f45-961d-11826912f228" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="396a88d1-c7f4-467a-b1a1-bb7c9ee0710d" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="999165af-a1fe-42f5-a518-33d0f097e8a6" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="d8e9f12a-bfff-4211-b665-8fb99c248173" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};