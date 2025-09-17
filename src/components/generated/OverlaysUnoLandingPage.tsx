import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'BROWSE OVERLAYS',
  active: true,
  mpid: "7c10e093-c70e-4ba2-add0-aa2e986e0577"
}, {
  name: 'ART & DESIGN',
  active: false,
  mpid: "558c6da5-7de6-454e-9e3e-ee0dcd5153a3"
}, {
  name: 'BUSINESS & FINANCE',
  active: false,
  mpid: "81879274-dd0e-41fa-9972-11f3faacc576"
}, {
  name: 'EDUCATION',
  active: false,
  mpid: "cab7fb5a-2657-472b-b249-d3bd26c83b04"
}, {
  name: 'GAME',
  active: false,
  mpid: "d42e0c97-6c9b-41b2-b2a8-88072d84d507"
}, {
  name: 'HOLIDAY',
  active: false,
  mpid: "b8ee09df-0091-4e91-9783-f423c1e30f10"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "083c3d3a-2d75-49ca-a76c-9eb9c3510100"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "6e16e0eb-90db-46d2-a79f-e03caa42b0e4"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "d79c6bac-e1d0-412b-bcb8-82d3853a4aca"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "152d4894-32b4-4a76-b90e-d3906e7fab9b"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "d5237d75-9002-4dfb-a113-2e8944d3be93"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "08a62cf0-0c88-45f2-9df0-91a7e679f439"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "11db169b-023d-4fb1-b887-9fbcfc38eb32"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "b468eaa4-164b-46f1-9847-5def223593e1"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "8c11e16d-9235-49d4-9314-e9aa739ddd12"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "0879d174-5596-4b69-943a-2273eeb5b1d7"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "a9de7c50-2d78-45c8-b8b7-2d27dbd8baae"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "93abaa44-0262-4a86-9744-04715716c7be"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "632f046f-ce31-43a1-bd96-641579874673"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "abc433be-cb93-43be-b288-3dcf27a3d7f6"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "86720d25-f8c8-4383-a59f-62863128e3d2"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "808b748c-bcd2-4162-aaf6-a88ac5c6e5a1"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "174c2361-0c71-4181-9d9f-5f5cc33ada7e"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "4793f859-f728-476d-9fa2-c432f4cca401"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "12a77bf4-8562-4eed-85a4-35337976e0d1"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "d406af0d-52ed-4b3c-b81c-4c5eaf591785"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "3f731cba-4462-48b0-b718-5a1f8e4927b0"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "ccd194e9-f3d6-4c00-b96a-e08e2bbf4236"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "51e05b7f-f47e-4a69-b02f-c3a25b0e77c7"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "8b8f95fb-9815-4785-a0e9-af8d73f3b192"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "849c3191-4a7a-4447-a60e-6b4dc50e00f6"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "4c5b5c68-5956-4a35-82e7-458723537674"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "f51beefa-5618-4600-8451-c6bd703cd824"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "a270adb1-6507-4ded-b980-a3f002f9a29f"
}, {
  label: 'Tools',
  mpid: "ca7f66e4-082d-458b-9c86-f5c755be2f07"
}, {
  label: 'How It Works',
  mpid: "a7de49b6-306d-4f3e-b108-cdc86f75aa08"
}, {
  label: 'Demo',
  mpid: "cdfc43b8-5dff-4a74-9249-0b5db25ba432"
}, {
  label: 'Live Breaks',
  mpid: "1cb81c57-f45d-42ae-9a3f-ffe3f5080ced"
}, {
  label: 'Shop',
  mpid: "071a4b63-05ff-4623-a9e6-027c633cc5cd"
}, {
  label: 'About',
  mpid: "d17b5d3a-0b67-4366-9530-c3fa87d12c35"
}] as any[];

// @component: OverlaysUnoLandingPage
export const OverlaysUnoLandingPage = () => {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState('BROWSE OVERLAYS');

  // @return
  return <SortableContainer dndKitId="742ab227-ee86-4ea6-971f-dc3387b9de33" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="4fee1ed1-dbcf-405d-8684-e9b21e9fb609" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ee1ea740-414f-4adb-b750-252e10fe3b47" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a6bd90e2-104e-45d9-905c-9440921d60f8" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="f1a1680e-21b0-4077-8340-446991eb37fe" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="8b2ea652-e9c5-40a5-967a-f9fdd2551c79" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-4 lg:-ml-6" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="b3c3d0a5-7edf-461c-a195-d6777a3e4263" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="203d2e02-6fcc-4803-90c9-0a8867a3d94a" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="8bd51267-1cf8-4202-8654-55a08388c5db" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="fc14b938-7ec1-43b1-a760-9287f8cfca36" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border border-[#FFC543] rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] flex items-center space-x-2" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="ac3607bb-72b6-4642-97df-70eb44e01856" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="316052a4-ae28-45c8-bf6d-62154ee6d92f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0394562f-bf01-4578-85f2-66936d76e093" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="8a3d4180-43fd-48df-956d-9b0b0046c3ab" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
                <span className="block" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">built for pros</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence.</span>
              </p>
              <SortableContainer dndKitId="1efc9270-4cff-4abc-b691-0b493d75a441" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse Overlays</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="ce648de6-d8d3-43d0-8c2e-7290a1def0a5" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c2d63f84-500e-41c8-870f-1858b43589dc" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="157951d7-5a27-4246-85d2-c094c6e95d00" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="2b15b85f-1ad0-42f8-9da6-b53477fb0a04" containerType="regular" prevTag="div" className="text-center space-y-4" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="ca0bd461-e126-4aaa-8757-5b8dccd5594a" containerType="regular" prevTag="div" className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <Play className="w-10 h-10 text-orange-400" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    </SortableContainer>
                    <p className="text-gray-300 font-medium" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">Stream Deck Interface Preview</span>
                    </p>
                  </SortableContainer>
                </SortableContainer>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="d68f3c80-9a3d-4658-9d29-b3d3ecf24839" containerType="regular" prevTag="section" className="px-6 py-12 bg-black/20" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="545f7c01-f43a-4a8d-a63a-782a136f5239" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="362fcbe9-bd5f-4097-9670-6aeb72025800" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 ${activeCategory === category.name ? 'bg-white/20 text-white shadow-lg border border-white/20' : 'text-gray-400 hover:text-white hover:bg-white/10'}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="e56dcc79-6707-4f36-a5fd-31cc56bd5985" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ed98b31b-8468-43e3-8b03-d7dfe96f782d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="599a7c0f-7a88-4373-a68f-71bb0013d4f1" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sports</span>
            </h2>
            <SortableContainer dndKitId="3cb0dafe-e9a5-4cab-ab42-0f2cb99f0486" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bcdee199-3388-4561-8e38-4221b18cb06c" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="811dd4ba-336d-4e7c-b949-5653d5eb7b2a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="527863cc-4644-4288-b4a9-b71b62aaa50a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="76beb44c-e0d0-4776-91e1-6edd93f0cb5c" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="4e1d1136-ca44-4f4a-aadf-bcf05bfb6cd7" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-4 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-sm leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="663f0ea8-3d72-4134-a2cd-385f5483fb4a" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="139936d4-830a-4524-ab0e-afe783e31cca" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a2aa1c31-00a1-4322-b349-86ffa45111fd" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">Gaming</span>
            </h2>
            <SortableContainer dndKitId="955241a5-5d06-44e6-aee9-0bc770f389be" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="742752e9-71a2-4674-becf-a2fe566b9921" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f0781dc1-fb18-489d-af04-33923eaf2a95" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="1d7fdc4d-aa54-483f-b7b4-c9a663765058" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="9a7435fb-b3e7-4128-8943-a463f6a84c77" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="92f810ab-fd53-48a7-89c6-8ae749bc094a" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-4 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-sm leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="b55f0c4e-6e31-4aaf-b8f1-9c8704baf2a7" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b67ec1d0-6f44-4fc7-9e8e-74eef0a790d0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8942a7d1-4d6e-4ed9-adba-ce1401ecd9d0" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">Podcasts</span>
            </h2>
            <SortableContainer dndKitId="b6f2695e-e0d4-4801-9b55-a798581d0980" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="724826e5-d424-4929-a9de-bcc8ac81e9b4" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="97ae71b8-0b90-4dfb-b43d-aae9c13e645b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="7f63ea5e-811d-401c-ab83-5009bff0f497" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="4e3c2882-c4c0-4713-9557-1f5ffe2d15e5" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="28dcd9d1-2ad8-4f20-9421-4042df2b2676" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-4 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-sm leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="bda9ad28-f0b5-489e-8a92-d5450457927a" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="961e8bd1-57d3-4b0c-8c66-a66e0885d33b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="737198c2-c0e7-4f78-98e9-c4b85c99d738" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="6e7b6ea6-84ba-425a-aa72-49c810e23b6b" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="dde851ac-85bb-404c-817b-c82c05974113" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="7c6022b7-3bea-42d5-8c91-85f5d388ab34" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="edb1910d-b5cb-4da7-a0a6-326aa8bd0861" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="b3f418ab-0693-448e-b471-0675b0d163b3" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="c8db8418-106f-4ebe-b277-6da34f695c74" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="912651b0-a406-470e-a2d5-08679a36a0a8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="f740a3d7-c4f0-4848-93be-34ba2db6bbf9" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center border border-orange-500/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="0b96f0e4-4da1-4a0b-8763-dbd5bc53ff85" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="9c759662-48f2-4b8c-a0b1-9594e97411ab" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="134283e5-0e73-497e-97ba-ce8e559e6ff6" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="d0619f82-eb12-482e-9915-c69394e7a227" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="3e3ceca6-c524-4cf7-8dd4-0985e19c637d" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="748e5d0e-12c0-40f9-bcec-a483eaf9daa7" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="c841c94a-688d-49a7-8bfa-c06dadff59ff" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="48921bd6-210f-465c-bb4c-1111b1df7379" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="47710d58-d74c-4bf1-b22a-eade310369e6" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="7f3480d2-7508-472c-9d22-4a7a182e1f60" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="9cd3b8ec-e517-41c6-b3af-075065e0bc1f" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="f973bce7-7f8a-4ad5-a81d-cf3dea22cec3" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="c04381d9-f57c-4f7b-892c-2707bc5fde2e" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="b6167686-0b2a-4bba-a597-ec5373de7540" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="97ce88cb-3759-4c74-a9c4-4c87bc8438e3" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="e5a2abc0-c613-4495-a852-fd43caefed3a" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="226626da-aa54-4059-bdb1-e413d41c1542" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="36a4530d-48a8-46bd-9aec-31a87efd4be9" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3c4604dc-3d6b-4c65-9328-da795c0cdfb2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="6c19d760-3a39-4c5e-b268-00d3112fbb74" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="29e2dd70-56a5-4051-8ebe-24c739580206" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="29d316fc-77d0-4dd3-8f62-e489f0d8b34f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="b8092f41-6e07-4f81-9ddc-54748e1471e3" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="757dcfcc-8b75-4608-9c29-3ef69263aebb" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a5cd9d01-36af-4e4d-9ce0-7cc4f417861d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f68fafd8-c6de-494a-92ef-7ea1bb434ed5" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="64c31b2e-bf54-4762-a336-9008fc0923d7" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="0c66281b-9956-4699-b9c1-d5c5b54c110f" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};