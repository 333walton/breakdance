import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "b94dca9a-f9cf-4bfe-8039-5cf6d1a1885d"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "654c8948-7346-43c9-aec5-b6eaf61d5465"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "53eb4fde-ab3e-47c9-b103-f31acc00a3b3"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "8e7c1c57-51d6-4a4e-8a4d-d6885aeb2562"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "653a1de8-e675-4013-a176-43e47c7f614c"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "f4dade9d-e562-4225-ae68-6905358c23e6"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "d980040b-5230-48be-91be-af0ccb0d9dce"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "0f7ee5c3-bc91-4128-837e-d743edad9e3e"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "c9c744b3-b4b7-46c4-ac24-c99ad2e03fc3"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "de2deaef-1752-4846-8ae6-955064d6e196"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "e874893f-3123-4f93-8c6d-b457c6b6a563"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "d2a0c153-4575-4a1c-ab88-f46c14c9ffb9"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "25b60dbc-b944-45e1-841c-92a1da2a1df4"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "5eee2f27-7ae0-4cbd-bc1a-b563bae39fcb"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "c2aabcec-c6d0-4004-bbf9-3ce84ff913db"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "5a9761a5-5331-433b-8b53-8b787fef480d"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "57a99a64-a550-49f1-a24a-034c79131112"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "34851c9a-285a-492f-b145-a13a81406bab"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "566c2357-48e4-47dc-80d9-c4600028784a"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "8684b9cf-85ed-4374-96b1-042b07070b8b"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "9e59bc5d-1170-49db-ab3f-35d40508bcdf"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "f563d789-f74f-4a45-96d1-c40a36da1e0f"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "04da90d5-f7ae-4c53-88f5-d7b2cfe4b0ee"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "dc30fa66-0e56-4090-b186-4548e67a33ad"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "aff4c89a-ae19-460e-9534-47fc68add7cc"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "de3532fb-a4b7-44cd-9ec7-23d9a4935c18"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "46ebe9da-eb69-4cc7-ad53-9b4be4b88360"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "da85876e-7408-41ef-b4cc-cb652216cb1c"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "2383ceb6-5f04-46d8-86e4-1fa6f2f31aec"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "f360572d-739c-4bd1-8719-dc6c5c8668b6"
}, {
  label: 'Tools',
  mpid: "e13dd8df-a797-4eec-99e1-c427c5df1bb9"
}, {
  label: 'How It Works',
  mpid: "63bc154f-ebbe-443b-b400-2b172c1cba69"
}, {
  label: 'Demo',
  mpid: "e6c92d0b-96df-4bac-b871-b4733bb773cb"
}, {
  label: 'Live Breaks',
  mpid: "8ed702e7-d9c1-42fc-8994-e570b0915412"
}, {
  label: 'Shop',
  mpid: "4861afc9-3c8b-4f2e-abec-0e5dfbda75b5"
}, {
  label: 'About',
  mpid: "b6c05e97-f90f-4989-a53f-009595b66e11"
}] as any[];

// @component: OverlaysUnoLandingPage
export const OverlaysUnoLandingPage = () => {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState('BROWSE OVERLAYS');
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
    mpid: "5440f15e-46ee-4e6e-bcc7-0161c30ae2e4"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "20302509-b783-4b2a-b0e4-3c8f31bd2b0d"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "8cbff3ec-369a-4a6b-a862-58ee66604522"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // @return
  return <SortableContainer dndKitId="282c48c6-eb82-4d52-9100-90adf6984d51" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="badf4896-0111-4323-a2f3-cf32de8d7a51" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b2f38753-4f14-425c-9b7d-44f95bd819a4" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="edc28124-1956-40ae-b7da-4b4d070ae85b" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="b461aeb1-0ea0-444b-9b29-cfc26031b769" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="b4455d6f-b728-40c0-b499-e808c4a133f8" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="5d418620-b7f8-4c1a-9928-f66de6717570" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="5cfddd6a-4188-4b0f-af6b-8e4071a4d8dd" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="c7dd5880-3b56-4d98-b2f6-e7956fabc71b" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="dabf9254-f322-4647-b2d7-600fc278b556" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border border-[#FFC543] rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] flex items-center space-x-2" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="bb984449-2ca5-4392-ae68-c727779630c0" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="81460f1b-dd0e-464d-a11c-d21359878cde" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="52d86999-63ab-4f9e-b68e-8f9d3568a951" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="396017f9-9ebf-4e58-8a64-7121122edfc7" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="90cb5c90-736a-43c8-99be-45bdf7c3644c" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse Overlays</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="2b01122e-7168-4886-a100-3de06f368a3a" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8e9fc975-4d1b-40db-896d-242c405f6fe6" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="588b6108-1b83-4f67-8063-9e37e7c6611f" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-opacity duration-500" key={`preview-${dotContent[activeDot].id}`} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="b1a5039c-96eb-463a-969f-c988f43ca623" containerType="regular" prevTag="div" className="text-center space-y-4" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="a608948c-99f5-4c0c-913f-aaba5b25d25e" containerType="regular" prevTag="div" className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

          <SortableContainer dndKitId="81c60045-1984-44b6-9543-a85bdd83eddb" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 flex items-center justify-center" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="6ed3c7a9-3a81-4267-89c2-b5c4071562d9" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="838290cc-56d6-45b9-93e0-5b9b4f51d5eb" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="45bbbcf0-639a-43d9-93ea-a20d2bc00958" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="85275ddf-53a7-48c7-82f1-64851fe0c957" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="a31f94cb-048e-4e57-aef8-310fca483a65" containerType="regular" prevTag="section" className={`px-6 py-12 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1302f22d-d61d-49f1-9785-cb93b75ef6d3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f15c3b29-13ba-42d0-885e-181e80edb3bd" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sports</span>
            </h2>
            <SortableContainer dndKitId="c0d521a1-d44f-4c67-a229-7b70896591c7" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="2802539a-0d58-4901-8903-f4bba59873e2" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="82798353-4a18-4619-950c-8ad926fd7b7e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="3126f019-2f03-4a09-a69f-43941ba6025d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="c36e3cd1-c3fe-4c57-b93d-63e4b15332c5" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="5da29f33-5231-4017-aef8-2655c664fcc3" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
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
      <SortableContainer dndKitId="3e11c2c2-f079-42cc-a7fa-f7ff02301808" containerType="regular" prevTag="section" className={`px-6 py-12 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="7d446f08-fa53-4840-9bd1-92b4e3809093" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="45ebca23-bb18-4f69-a096-cd8a28a69ee9" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">Gaming</span>
            </h2>
            <SortableContainer dndKitId="3fc9d36f-7147-45e7-8563-027a701ad7eb" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="17b22781-7e85-40ee-8ce5-8c634113f979" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="57cb51b7-7698-4bc3-beef-5d9d28df8925" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="1557736b-69ab-4a98-914f-068ce52df517" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="99a6de97-6d20-4d39-a642-d64598759b24" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f8e05abe-cd99-45c0-aa5e-52ebdadf4705" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
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
      <SortableContainer dndKitId="e1d42a80-b07b-4e36-bef3-9e6255e31791" containerType="regular" prevTag="section" className={`px-6 py-12 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="12b338e7-f39e-42fd-8eef-ef1963c0f350" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f11715f4-63de-4c97-a134-6f3c00607753" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">Podcasts</span>
            </h2>
            <SortableContainer dndKitId="e740e7fb-4324-460e-962a-5c05ee8bf4ae" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="2e9c7718-a850-4b21-be85-4e9b27a72370" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="8b6d8764-1297-476d-bf9c-642e54a689b9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c4fe5ca5-c381-4023-8479-60e15977cbbd" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="377e454a-5feb-468f-9679-93a5c022e10a" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="67ef3cc8-b1cc-4fdb-b955-16bd4990bf8d" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
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
      <SortableContainer dndKitId="a32f9fe9-f2e2-45be-b25f-14de757dce51" containerType="regular" prevTag="section" className={`px-6 py-12 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="21cb40f3-b0e6-4663-85ca-860857c48c76" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d88bd6a2-7f5e-4ba4-8b34-02490ad16928" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="8be44b61-6d75-4764-a66c-0381f7efd3ec" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="78dabfdb-1c31-4bd8-a8ff-ccaa994b3183" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9bfdccac-7d82-4aef-904c-1fe71928f7de" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="5c2f1169-f380-482d-aab7-ce5c05d61551" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="862ca717-d4c0-4d35-8d41-1f5225b66c2e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="d73490b2-de10-482a-a801-0344e9e8ac70" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
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
      <SortableContainer dndKitId="7515cc7c-6931-4145-bdd7-d838bc5a9c25" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2ebaa551-e049-4789-96e1-cede7d6c01db" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a41af59d-594d-4d3d-a9f1-b387d0c0ea7e" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="410bf524-4552-49c0-974f-2a065ee63b60" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="1f08d9e2-9bec-4e63-aed1-13a16e4bd7fa" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="a0e55b71-29d3-454a-af68-1bb59647e8cc" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="68699655-c739-40c9-bef8-a812d6d6b7d6" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0bcb0cf1-0ec7-42fc-9a24-f27ec9e58e15" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="238083e2-bf6f-4d69-86f9-50ecfe195b89" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="00e8ccf1-4d4d-4e5d-b239-f78bf051a868" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="c3abc546-c759-4595-99be-ed5098f9efbc" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="f114f0d1-6ccc-4623-9bee-0877a15c6179" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="bd13adb1-d380-4587-a5c6-f15b4d975417" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="e8e6fce8-68df-4450-8bfd-5e7daa475f38" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="17fc3a4e-4c88-491c-8904-2f1fc69e7870" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="566261d4-a250-40b9-972a-b4030ab87a33" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="e9d5b1a3-2609-40a9-ace5-26058a55921e" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="e0271451-f830-4027-99df-15aed7db9867" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8c607444-294f-424c-afaa-7b4bef41758c" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="5973bdc3-7b06-4102-9935-2e3c4181eed4" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="c61facfb-96d1-4cca-a846-10e547beaf00" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="97031732-2180-4596-9c6a-51aa763fc465" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="897d5ac4-811b-4748-be5e-05d0d3700360" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="3ff1aad2-2441-4e85-a4e5-554f90957954" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="3c498da0-fee3-446e-91ec-102b0b4d33e6" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="b6a8daa5-905b-49f2-89e9-1f3eb48f6863" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="2beb702d-ec28-4eb5-b93c-291d7686668a" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="0dc32d92-7d41-47e3-9f58-0d59c99ed51a" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="8a12fbed-b0a6-441d-ab59-a57015999076" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d35ff485-2be5-4a91-b99e-ab321f7daaa2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="32158077-f9f4-4c50-821c-cd98064aceac" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="7cb4da82-d90e-48e1-98b2-6c84cad0e14a" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="569b4df3-1b51-4c29-bf22-843199ebe43d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="2f4054a7-2a4a-4098-b6b1-62f0b828888a" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="5d3e7286-0cf3-4fb4-b261-5c69c87e00f7" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="940a1385-46a3-4e2c-9810-70741e1a0616" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="805cd608-c189-4620-9cd0-8f8a8ec5682b" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="8f2f3377-a9e7-40c5-923d-56ec2e749c5c" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="17b92871-11b7-455e-b953-741ccb8177ba" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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