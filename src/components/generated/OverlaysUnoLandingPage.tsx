import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "39a846a9-f7ef-4546-8aec-7a60d6c700f1"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "49965483-1921-40c0-be91-73f5bf1d8e45"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "8751761c-0935-4f24-8f87-32c537ebc418"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "22035f96-e64b-4d9d-b923-77e1b534ddf8"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "d08c171c-1727-474e-afc3-bc67e832a85d"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "2fa85264-c652-46cc-ab89-9a474acb57e8"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "38b0f07f-b5e0-4e51-8a50-5d6f2b437f1a"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "c5b03058-8b56-419e-ad05-be4243ac138a"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "2a9c972f-aea0-48ce-b332-8c23a9a84676"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "feb2ebf1-2f4a-443b-b041-504e8412f87a"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "b1f160d8-983d-4eb1-b45e-9d487f90e3a5"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "9b176ac4-c87b-4810-8fe7-b0a1e265283c"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "a9d3d576-eca1-4041-9c43-f2fe647ff524"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "95fa95ed-6761-4c52-984e-ac7350e4d262"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "52a0e8aa-d7e4-4787-a818-9728fc8470a7"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "b8345f34-c19d-46ae-bef9-f52eba30c2e4"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "5452e66d-a7ad-4bcc-83e0-7f06ac176306"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "3527178a-3975-4218-8bbd-2b7dc0a4a3da"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "f6e29f58-fd46-42ac-b9ad-48c919714165"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "05a4b9b2-9850-4542-9c43-e1e315bef77b"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "763bdcb1-0796-4275-b53e-5d5e9ef69571"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "21982b7c-9bd4-4d00-b05a-f079ebcc514c"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "6411c435-7f58-4493-9526-3f180a684267"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "4272d3a3-f95f-45df-b0bf-a07b54ba05b6"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "b4c6809a-5837-43c7-b1f6-042bedc84d87"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "0daf7360-8acd-4702-87e2-94607c9a26c5"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "513c731f-7393-419c-862d-1ea4f41c676c"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "f3555c6b-e460-4f46-805b-c7f793e7d9ca"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "9196c329-a335-4f9e-a0de-1bf8a01eb5f2"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "1409880f-f2cd-4274-b3a7-93f05a88e437"
}, {
  label: 'Tools',
  mpid: "90368088-8b11-493a-8a43-cef344c85eb7"
}, {
  label: 'How It Works',
  mpid: "5a58f2b4-f0fd-47fb-a58f-7fadb4198ee7"
}, {
  label: 'Demo',
  mpid: "4b946304-d1ee-48dd-a7e8-928524364cba"
}, {
  label: 'Live Breaks',
  mpid: "23df6783-c1e4-4710-a644-dbf4131acfc7"
}, {
  label: 'Shop',
  mpid: "b405f978-ae02-4c09-9f00-c5561ad5f2e2"
}, {
  label: 'About',
  mpid: "190467bc-2027-448b-83c0-73c0e1d1bab1"
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
    mpid: "d653c4fc-19a3-4e48-b5f5-e5c1816a8879"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "5ed131b6-6d49-47d8-8ff0-6c5fd9941298"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "42ca0df9-a0a2-4ef9-87a2-84a372e2bce4"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // @return
  return <SortableContainer dndKitId="07d76d7a-355d-4e48-9e76-f9e6aeb842d7" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="d977dba9-d264-4027-8ca6-729ac39e2091" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0b3df258-8ad0-4f1a-9408-3992baad9901" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f077bf37-6228-473c-a665-2b931a5868c7" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="b6ee87e3-410e-40ac-95c1-fbd22b46dc22" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="2efc5ff6-4cf8-43d1-ac1c-b0b01d6c7090" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="6c678c86-0543-4d0c-91dc-f8e547994f2c" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="27923299-34ee-4112-9db3-25e900482fcc" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="5e53bc22-0f29-4d18-b5be-606df846a230" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="7e30cd84-5685-45ad-8aa0-eda4b78e9279" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border border-[#FFC543] rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] flex items-center space-x-2" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="9c19588e-b234-40bc-ac37-31d9db15fac4" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9f7d4cb6-8e4a-4a17-b202-b82e5ef741bc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2c37d941-308d-46b9-9ebb-aba15f9ff11e" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="993686ae-869c-4598-a8da-c7e09177b27f" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="e5bf5ad0-db47-4540-b823-96d31ea0e632" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse Overlays</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="30590a10-6a78-4bbf-8608-26b35a329af1" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="84e02712-0e92-4177-8706-8d1b5dc632e2" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="69a2de6b-62fc-4f67-acc7-21731e311d77" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-opacity duration-500" key={`preview-${dotContent[activeDot].id}`} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="6246ce6b-36d0-4cc5-8a16-2865ef39eb6f" containerType="regular" prevTag="div" className="text-center space-y-4" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="ba220d9d-2675-43c3-a196-bea59d058905" containerType="regular" prevTag="div" className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

          <SortableContainer dndKitId="5e7a6b3e-4acc-4229-ac04-1ef5a8482b55" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="4b84ddbd-103a-4cf2-b615-af6058fe2592" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="20f58adb-298e-48bd-b035-bfb344cb25ff" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ae32a7df-32fb-497f-bd74-07cf9eb269e5" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6a65c578-34fe-4d07-a91d-f52bba6d1893" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="d72b42cc-e4a6-485b-a69e-850c888011c1" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="72fbc7ea-2ebd-4f7d-8205-db35ac48f7de" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e2e91450-5dce-46a9-afaf-0a47dcbc2d15" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="8865f3a1-e613-4b98-9a2a-9daeb0f6bd3c" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="937bd177-7dd9-4d40-aefb-59699c96dd6b" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="d8580c79-f3fc-4fc1-8e75-33558b067dd2" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a9e70373-e9ba-47c6-bfdb-897fb75e3814" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="a6e00c5b-1860-47cc-9435-9e05db8592ea" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="fb47db32-efe5-47aa-89bd-1d195bbc5131" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="6cdd9369-f675-44ac-8e4c-facf1f0ab0a8" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ad8bb2ec-fd2d-4ab4-a681-b91a5f5832a1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="159eb7db-7a66-4387-beff-f3b21d4dfe3f" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="8f681691-e1ea-486b-9918-f9192071ac96" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a5a7b576-4a47-471a-b6bd-9858eced8529" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="261310c1-764f-46cc-8cf1-82192e40f29e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="84bfe610-c07e-412f-af6e-c54b54a6d403" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="825ca5cb-25c5-4446-91b5-64ee3c93fea6" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="855b9f94-6fc7-4026-abaa-18969e08daac" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="7dc97d3d-4479-4af5-af30-30d582fb09fd" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0967f945-40eb-48ed-afba-510d91186bab" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="45f2ab72-ce2a-4d92-a36d-d419d2b14c35" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="39e2f260-794f-43c3-835d-d2b70abc12a0" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="1a2faeca-5f0b-48cc-9b83-a4a200644a47" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0ca19751-f8ce-4249-860c-b083a9ccfb02" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="2e0b30e1-d98d-453a-98d0-74978a98031a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="82d11e73-5c59-4d87-9494-f1130b2d0a36" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="c2444a6d-d313-4460-8646-3cfeab527c2b" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="adf98a0f-9a54-46b0-8f3d-eb4c7547b3ed" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="026924eb-bafc-4d9a-9956-cca8013b2eb4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="cc4ac109-dec0-471e-86f0-a10f6fb9f449" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="ddc427bb-3a84-4897-a7d3-b97dd826c9ef" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ec57b69d-3ec9-4481-b5ab-cd1d3b1d12d4" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="dd971917-16f6-4633-b137-af63f49f1678" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="157de625-8e17-4028-8e84-62bbc203ee4a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="3bba129a-17bd-4713-8a42-9964defe465e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
            <ArrowRight className="w-4 h-4" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
          </SortableContainer>
          
          <SortableContainer dndKitId="8e9f1d33-cbf6-43a0-91be-14b8759a4072" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
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
      <SortableContainer dndKitId="294222d9-51fe-4a06-a2ce-e757c7a5aec9" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="824b9a7f-8d14-4b19-9fd2-437909d15b75" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="64de99b5-b5e9-4b6b-8339-3388276e1b4d" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="939e02ab-78c9-4f1a-a888-7360f453776e" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="b07c0a46-2d33-4d5d-b3db-89a5261b422b" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="44c450c1-7545-4f07-b8b0-63e3a39fc91f" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="3500d45a-ff1a-49e6-ab11-1b38e203758c" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="16fe2983-2814-4254-9fc2-8c60b041cd37" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="ca5d902a-6efa-41df-beb5-7bbe6b866047" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="590ab909-8336-414e-b207-cb02fecc3a49" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="46e9e9a8-5d26-48d7-a54b-f76fd0140a8e" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="9e9fd573-c742-4fb4-972b-63ffe394f97f" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="5e267090-b795-4fe6-bd09-db4f10f814f8" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="23d97e3a-0582-4b61-a7d8-2af77ea46f7a" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="7c33afde-7ded-4e96-8de3-2b18fc43088a" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="a28e80b2-11a8-470f-8088-557e8a33284f" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a39bf646-df73-4eab-8887-d71c8ebaf0c2" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="acc372c2-25c1-4e99-8541-c71091c8e68b" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="5db97f2d-4f7e-45a2-a6f2-203cc796826b" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="26e78944-4a72-49e9-83a8-a4f29c22ab27" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="020bec35-ddaf-46d6-bf18-45e60d63f510" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="aa57c0e2-a51f-4453-92ce-e3d92f95371f" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="d3d2e6c8-0fb3-47d9-a022-628fa2a273a1" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="8e85b1fb-bd7c-4a00-a93b-492e0c1a88ad" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="5ed55957-211e-4ffe-93ec-51b169fbac20" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="b6e42733-043a-4067-a76d-a8b4381f7a03" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="d1405993-f7af-480a-997c-d1be426ec3fb" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="c9b33654-a238-423c-a5a0-4e7562c37b4a" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="8a7de8e5-bd77-4f5a-aabc-beb3ec1ec7b9" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="e74e640a-4dae-4854-8223-605d01f6e43f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="dfdbddc3-dc20-4c51-9fe2-bdf1fd42659d" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="e064ddfb-a897-4c79-9706-4eee19f692d5" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="eb0f6a13-55b6-47b8-ae94-ed8dadc5f86d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="51db9fd2-c2a2-4561-84b8-cc82702301d0" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="1eb0dff8-a60c-42db-88aa-59904f50230e" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="bece4b7f-f5c2-4b49-97c6-2e2a94260b08" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="91d0eb71-a4e1-4089-a54e-a99dc03a88eb" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="653249b8-e509-4266-a8eb-819fc1c8ceaf" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="797b3743-564a-4f24-9780-51e9aa950603" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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