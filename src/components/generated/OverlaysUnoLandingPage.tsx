import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'BROWSE OVERLAYS',
  active: true,
  mpid: "16f254b9-386d-479f-ab41-d538fb9dd44b"
}, {
  name: 'ART & DESIGN',
  active: false,
  mpid: "6f04e39b-0b51-4c53-9e29-11d7d3002d65"
}, {
  name: 'BUSINESS & FINANCE',
  active: false,
  mpid: "d5b9cfe2-fde9-4864-b58a-d9db7fc60cf4"
}, {
  name: 'EDUCATION',
  active: false,
  mpid: "9b9522f0-5728-453c-8023-6bd30bcb2665"
}, {
  name: 'GAME',
  active: false,
  mpid: "127bca88-5583-43f0-9e84-9e9ed6af960c"
}, {
  name: 'HOLIDAY',
  active: false,
  mpid: "f25ecf21-4e94-4aef-aaaf-384e21312047"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "30a64130-3311-46e2-a636-70c19f0948e7"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "7b31e6d5-ec70-4860-ba93-76b383324720"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "42e46372-2714-4f13-ad58-d450086a4138"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "d2c82999-e86c-4ea3-9adb-e527bfb28836"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "ec389f7b-209b-4ad9-a614-9fee68b07488"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "c02f8540-c66f-46ba-8409-846cd95b83db"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "c2d1859f-fa70-4687-914e-feefb5c11155"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "37ebf13a-4e6c-4fd5-a615-fd53d62622a8"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "21f2a982-ac4d-46c8-9874-a599c7b4d63b"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "2cdcdd46-2be8-4011-8eac-d941fe951fb5"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "0a3202d4-4a75-42ff-9b15-74ba9a9076d2"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "b4788491-c8c8-4f89-b7ac-2d613c97ba6a"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "ac107942-e725-4350-94d8-e1aedb4412ec"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "335da2c5-e290-4831-a4d4-736c0138ac62"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "85b8c39e-1b72-4f6b-bd06-1ff6745cf9f9"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "2aca4761-1706-41c9-875f-3d7b70592a1e"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "60424e06-4834-4891-b160-fa461e0d1f0a"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "c800650d-3371-4c60-a45b-a4086bbcc939"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "9cd9e8b4-8499-45a4-9962-0459c8acee7f"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "62fcd005-7e60-4f48-a4c7-13cbba317a23"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "d5e64163-10f5-40fa-99a2-1a0bb1d03cee"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "b13f89cd-27c0-4036-aaf7-dca643be5156"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "cb011be4-58d7-4900-9b21-f25fb59916bd"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "230dff1a-0fa2-489c-900c-79bb1cce6709"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "13908e35-9e0d-4fcb-b437-1acaceb3efc8"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "abbd9e4a-e70d-4165-8fdf-d5654bea9830"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "e9479a6e-338e-4456-abe8-bf8ac17496a1"
}] as any[];

// @component: OverlaysUnoLandingPage
export const OverlaysUnoLandingPage = () => {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState('BROWSE OVERLAYS');

  // @return
  return <SortableContainer dndKitId="c29eca73-13a6-4a84-acac-f0960d0513e7" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="9563f1cd-c1bd-4149-92aa-7776f9ac7c3f" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="c3bf427e-a81a-47d6-a42e-2d12a7d45812" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 py-4" style={{
        marginRight: "10px",
        width: "1425px",
        maxWidth: "1425px",
        marginLeft: "10px"
      }} data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="1c5daed1-5f9f-4347-903c-3e87831da153" containerType="regular" prevTag="div" className="flex items-center justify-between" style={{
          paddingRight: "",
          width: "1500px",
          maxWidth: "1500px",
          marginLeft: "90px",
          marginRight: "90px"
        }} data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="2a9d745c-83fd-42d8-b01d-79a14163e078" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8" style={{
            marginRight: "320px"
          }} data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {['LIBRARY', 'HOW IT WORKS', 'PRICING', 'BLOG', 'STREAM DECK PLUGIN', 'SHOP', 'DONATE'].map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide" data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">{item}</span>
                </a>)}
            </nav>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="c56c5f50-c3a3-4bfd-9e95-1ef66b24d5f9" containerType="regular" prevTag="div" className="flex items-center space-x-3" style={{
            marginLeft: "",
            paddingLeft: "",
            marginRight: "190px",
            flexWrap: "nowrap",
            justifyContent: "flex-end"
          }} data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ea4a136d-fc4e-470f-ae50-2501badcd838" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium border border-gray-600 rounded-lg hover:border-gray-500" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="8d10cb5e-9701-48d0-85be-7deef3a300c4" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium border border-gray-600 rounded-lg hover:border-gray-500" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="02eddb48-94da-46b1-a287-ebce5b5d2968" containerType="regular" prevTag="button" className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-sm font-medium rounded-lg flex items-center space-x-2" style={{
              background: "oklch(0.647 0.217 36.8)"
            }} data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="8032d4bd-8278-4ef0-b5b6-cb63194522ab" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ce9a68a6-f95b-4428-89a8-51aeeea8ce20" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="200a4f34-ea68-4434-b0c7-2b5afbfde78e" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="2dd4d52d-5359-45f2-ad88-351650b2bc58" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="0770742d-ce01-4650-9a86-58775dcc86d2" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse Overlays</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="0da94055-9048-4f7a-bac9-2c26652c9a87" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="82b28edb-4cfd-46e5-844e-4fa2beb8583e" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="fb211068-7ef8-49ae-8bc9-f80a857ebd88" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="bad0cb6a-2697-48ba-9d31-b7c8b9c7be0c" containerType="regular" prevTag="div" className="text-center space-y-4" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="9d5ccd60-35f0-4e7d-bd76-0096b0c258d1" containerType="regular" prevTag="div" className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="645382dd-a725-4b44-8be1-eb45cbcd2448" containerType="regular" prevTag="section" className="px-6 py-12 bg-black/20" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9a423fd3-b69d-417e-9d0c-e25a163ea854" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="c66177f9-92f1-46f6-bd5a-81e71fb24154" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="e50e2644-b825-4301-86eb-9a74298c498a" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b3ec1d87-97fa-4277-be80-99efbe57f1c3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="856f642b-f470-434e-ae1d-5faabc662a1a" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sports</span>
            </h2>
            <SortableContainer dndKitId="22abe4ce-5e87-496f-9d07-d9e45a930fbf" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c591ffa8-ea6c-45b2-92a4-2c081fdaa8a9" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0b66045b-7b83-4342-82b9-5b3bca09ad89" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="6fecb556-8e39-4d02-ba24-a7124aecf1b2" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="5c49f647-4e36-49b1-b58f-8d3b527fef65" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="0292d606-58c7-4fb5-a381-cce131a04f69" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="3afaaa57-d5e1-418a-871f-ea69881831d1" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2cb9a424-e797-401d-8bdb-17cba08d75e9" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ac99b1e1-46db-466c-9499-303f123b364b" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">Gaming</span>
            </h2>
            <SortableContainer dndKitId="511d3ed0-e468-42e4-85fd-f4f822fd84a8" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="696c6f90-6ec6-4703-a2d2-fbefb0bd00e4" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="d0e6a585-2424-4ab2-94b5-41d17d88d137" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="4262d9a5-873f-49f5-8ff1-1cb2aecfd3cf" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="b1df178a-9c59-4d2e-9715-03ae53e15d40" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="3b934a14-e937-4976-b88e-e3100330f205" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="299cd9e5-7356-43a2-bf3e-7cba16fdb69f" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1c9606cc-0bb7-4778-bc7d-ceca5fd636d7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="be2265e3-e43e-41e7-862e-a9cd3742f547" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">Podcasts</span>
            </h2>
            <SortableContainer dndKitId="37577e46-c73d-4ab3-b6f4-fde0b79a2f44" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="e6313ce9-f410-4226-9602-e2580c2166f5" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="72ec0f27-c97e-4ef2-898b-c85c177944ee" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="6c3ca000-7624-4fc0-8af5-7c04f5f605d3" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="787a1db0-f5a8-478d-a9db-3e258e59d8ac" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="a336f08d-ef78-4c93-9cd9-99558dc6e78a" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="1267c30a-74fc-4266-90bb-895099d2f003" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0f128771-8d2d-41ac-8336-7b2c2a85e69c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f3a58275-231e-4b21-a2fd-97dbbe90f065" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="a436946c-1ab0-4d38-a12f-4ecce04f073e" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="72e4b933-9e6d-415b-945a-649cfc46827b" containerType="regular" prevTag="button" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="7111d77e-94dd-4abf-a5d1-b76719645ce5" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="1e26b707-4001-4cba-bd1d-e3867650f3fb" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f60ce567-7a2a-41cf-8447-ac638e35e2cc" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="b466c0e0-cfeb-4f3f-9745-a1b9aad7eb31" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9002f2ad-d1d9-40d6-bf52-a85202d8506e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="902b5205-8639-4f20-937d-93c8b23182cd" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="30c6d58d-31ac-48a1-afe2-9a4d500dd5c0" containerType="regular" prevTag="button" className="mt-16 bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="e1e8e084-ba08-4a91-ae62-5e6a000e60ea" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="325730ff-e560-486b-b246-151305ced1bc" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="34fa30cb-600d-4cb9-b676-18361f2a8cc7" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="9921687e-0267-48c1-bd17-fe08172011f1" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="edd94d4e-ed44-4042-9b0c-36a2d05e1a69" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="7fd08b10-6b4a-47e2-a333-919f5c2a3161" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="5bde6485-20ca-4fd8-a9e9-66fb73fbc083" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="95d898c5-1cb5-431f-ac70-658083f42f78" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="bd8a7c50-f013-466d-b976-3bf94f6078ab" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="881122a7-7c8e-4ae6-b08f-63746725b7e9" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="27fedef5-d3c4-4249-bb58-1d4cdb683926" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="47d7f762-b533-4426-a7f4-833984c4b169" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="2bd30929-dc60-4d3e-82c3-36859c844d67" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="4deec9ee-74a2-436b-9d48-6adad0dad6b7" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="3d6b72ef-5fff-4628-8ac0-04dde77f70c3" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="af65f902-c26a-4b05-975e-47c5e192fac6" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="6eb57e25-1a75-4ca9-b38a-d828b88f0013" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="13361d01-e953-4727-b019-4b6c73e79304" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="ffc54545-9329-4784-bc73-575ea4762b56" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="7f8f08ac-8b4a-4830-9dc9-6932dd4f37b8" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="05d0d0ac-b289-43ad-9bdf-d1d196d7aa7c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="acb5dd4d-c58f-4bc5-bbb5-2a91dea5627b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="ac275120-233b-4ea0-a2cd-6c4ad38f94ef" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3816ab67-b893-4b8e-a9f5-708258980c54" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9179bfb9-bc99-4af0-a440-0146bbf3fb2f" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="1338fe82-c87e-4a0e-8644-bc19f8187eb9" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="9ffe6c17-0629-4550-9968-d9dd7d287e3d" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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