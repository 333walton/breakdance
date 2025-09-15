import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse overlays',
  active: true,
  mpid: "919762a5-52ca-4d30-a96e-385262562238"
}, {
  name: 'Art & Design',
  active: false,
  mpid: "e7833a04-4620-462e-8b2a-6e725f0a14ab"
}, {
  name: 'Business & Finance',
  active: false,
  mpid: "bd61229e-cbed-471a-b5dc-169f0930cf4a"
}, {
  name: 'Education',
  active: false,
  mpid: "fc232dfe-dc7a-4158-aa57-561276511b39"
}, {
  name: 'Game',
  active: false,
  mpid: "9b6985ad-1c37-4ed2-b08f-e76d74f9b372"
}, {
  name: 'Holiday',
  active: false,
  mpid: "b68c5200-9941-410d-8956-fdd2d4625443"
}] as any[];
const sportsOverlays = [{
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7a6491b7-eb15-4227-a091-f63e289169fe"
}, {
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "839775cb-e246-4ffc-b83b-cc8660b1269f"
}, {
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "b07a811a-e495-4ced-80b6-3c195dce7110"
}, {
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "f67a87d3-9071-411f-9da7-dd8ebabeea22"
}, {
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "e733f104-6c5e-4246-bee6-776fd9d2b027"
}, {
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "ce54c98a-10e3-43da-9890-4b3b0f1fffa4"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "b1276a9c-dda5-4114-b595-f8f861ded4b1"
}, {
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "60117c6a-47ee-4c00-9fa4-436cb85429c1"
}, {
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "ac66cecf-6670-448e-8595-b2e8ad276046"
}, {
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "fc569cf4-30be-4a00-84ee-5dd06edaec40"
}, {
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "e1906171-7d0d-4e96-8c2b-11484deb32b4"
}, {
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "9a1649b3-947c-4a57-a32e-2dbf096a8ff3"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "479c4bc7-adcd-4ede-b5b0-319c6bf5e0ff"
}, {
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7f13d73d-835a-4001-b000-fba0ca474859"
}, {
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "1db1f895-bec3-4e6d-ba73-37c8fc386a78"
}, {
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "e2190e62-b6ad-462d-a7f3-06713d120997"
}, {
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "bd30d8af-6c6b-47d7-9114-e6fb7a771e29"
}, {
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "8ba8d3b5-be82-4492-97f7-f4d9144de188"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our overlay library',
  mpid: "94741bfe-30e2-41f6-b4c4-f5d55dc909b8"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more',
  mpid: "935bf034-a2a5-4ec1-92ee-8f35af910bf6"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy and paste the output link',
  mpid: "e6cc22d4-1401-4aa6-980f-1eadc0013908"
}] as any[];
const stats = [{
  number: '9.5 Million',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "0921da7e-5182-4d51-ade6-ad82b7aac19a"
}, {
  number: '332k',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "27e8bf73-1c2d-4577-904c-2388755047a5"
}, {
  number: '265k',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "75ec449a-8a01-41ff-ad2a-b4766a5523cf"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community',
  buttonText: 'Join',
  color: 'bg-indigo-600',
  mpid: "be3d8252-3012-46b0-a376-e14829b21427"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials',
  buttonText: 'Subscribe',
  color: 'bg-red-600',
  mpid: "3d173153-b463-4e39-b950-7adb9a4c6d5a"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development',
  buttonText: 'Donate',
  color: 'bg-pink-600',
  mpid: "aea2c44d-dbcf-4d15-8b75-bbabe370c0c4"
}] as any[];

// @component: OverlaysUnoLandingPage
export const OverlaysUnoLandingPage = () => {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');

  // @return
  return <SortableContainer dndKitId="fd9e6ce6-72cc-4f72-9683-95e6485cd052" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="f0d7ff2d-212e-49c7-9ee0-9c971bc2117c" containerType="regular" prevTag="header" className="bg-slate-900 border-b border-slate-700/50 px-6 py-3" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="47ba7fb4-cda7-40cc-b0a5-f8a1092e3a65" containerType="regular" prevTag="div" className="flex items-center justify-between max-w-7xl mx-auto" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9d928667-4c7b-4994-9fd6-8fd9a5a47fad" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span className="text-orange-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
          </SortableContainer>
          
          <nav className="hidden md:flex items-center space-x-8" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'].map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">{item}</span>
              </a>)}
          </nav>

          <SortableContainer dndKitId="23403070-c912-4848-8fa9-3de1a4324578" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="e39867c1-ef4f-43d4-b4f2-8b757f59f9b8" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium border border-gray-600 rounded-lg hover:border-gray-500" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
            </SortableContainer>
            <SortableContainer dndKitId="9e37ca13-72df-43c6-b642-71b828733b12" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium border border-gray-600 rounded-lg hover:border-gray-500" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
            </SortableContainer>
            <SortableContainer dndKitId="fe35c426-b908-45cb-bd1e-315b03408608" containerType="regular" prevTag="button" className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-sm font-medium rounded-lg flex items-center space-x-2" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <Users className="w-4 h-4" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">Discord</span>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="30a39d08-e573-4828-94ea-8f136f06794e" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="cb86c0d1-5368-4e43-9098-8ac9f2021247" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="020b5442-62c6-4460-8da4-c9a472de07a5" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="9d95ba63-487e-4755-a785-d589f7c1c7ad" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
                <span className="block" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">built for pros</span>
              </h1>
              <SortableContainer dndKitId="111f275a-7f76-4888-ab2e-65e9a0683f99" containerType="regular" prevTag="motion.button" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse overlays</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="0025d7d3-4250-469a-acd5-2f552c0fc0b5" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c5b8e1a7-ca16-4f54-ab09-309ec5adae84" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-sm" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="36c187b0-788b-4d45-bc42-1326e6a09b75" containerType="regular" prevTag="div" className="w-full h-80 bg-gray-800/50 rounded-lg flex items-center justify-center" data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="3a0f09a9-ba91-482e-9284-0946ca310d91" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="5c88f392-545b-4bd0-9971-02c945dd6c07" containerType="regular" prevTag="div" className="w-16 h-16 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <Play className="w-8 h-8 text-orange-400" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    </SortableContainer>
                    <p className="text-gray-300 text-sm" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Stream Deck Interface Preview</span>
                    </p>
                  </SortableContainer>
                </SortableContainer>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="71a92396-cf60-4211-9ace-2cff1f729d05" containerType="regular" prevTag="section" className="px-6 py-8 border-y border-white/10 bg-black/20" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fdb18bd7-84e7-4a41-83e6-c1ddda23da59" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="080ad80c-ce6c-4a8c-b18e-c70b942522bc" containerType="collection" prevTag="div" className="flex space-x-2 overflow-x-auto scrollbar-hide" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} className={`relative whitespace-nowrap px-6 py-3 rounded-lg font-medium transition-all duration-200 ${category.active ? 'bg-white/20 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {category.active && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="5bb24478-3745-4d3c-8047-ae5afd35b4a7" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8db576b4-d419-492e-9368-bdff248aa57f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0b4e0ea4-b02c-4247-ab9a-23c8d9ebec91" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-3xl font-bold" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sports</span>
            </h2>
            <SortableContainer dndKitId="e078e2e7-e072-4e1b-afcc-236f0d0583bd" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="6e8ef8e7-8198-4700-9a22-30646b3eaed9" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="b6abad8a-fc21-4495-be66-b24963cc9cfb" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="b13e492f-9106-4491-9053-b632a5e007e8" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="cb08a0d2-2853-40ba-a777-d0814ec34b71" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="13cb86fe-2a2f-4c32-8ccb-6e25e67f4ec6" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-200 cursor-pointer group" whileHover={{
            scale: 1.02,
            y: -4
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full h-32 bg-gray-700/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span className="text-gray-400 text-xs" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">Image Placeholder</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-200 text-sm" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700/80 px-3 py-1 rounded-full" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="14de7613-d1eb-44bb-a8b9-874e5e554ff0" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="550aa78d-49bd-43f4-bcdb-dbaa9a1aa61f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="1e8ee8cb-37d3-4295-a5fe-a59981a5dd8e" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-3xl font-bold" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">Gaming</span>
            </h2>
            <SortableContainer dndKitId="7e5ac45f-5df1-4926-94c4-27d8792f6554" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="efefe850-cf23-4970-9f5d-bc3913e07cf9" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9e8f9234-3e56-40c2-8a8b-f51277622e47" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="42bfa554-1c8e-4150-9b24-06471a8c1662" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="8e013c19-284d-497d-b363-7725ff25beba" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="28cce10f-3a87-4c76-8c53-d32fe764b041" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-200 cursor-pointer group" whileHover={{
            scale: 1.02,
            y: -4
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full h-32 bg-gray-700/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span className="text-gray-400 text-xs" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">Image Placeholder</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-200 text-sm" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700/80 px-3 py-1 rounded-full" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="5e740bad-d02b-4769-9adb-ed51aa40098c" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="577b0704-ec3b-4133-aab5-08cbc2195d41" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="09b57754-97b6-423d-8bb8-076096fd2fb5" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-3xl font-bold" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">Podcasts</span>
            </h2>
            <SortableContainer dndKitId="2645f37c-3680-4c36-9bd5-1e20342b325d" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="7022ed34-8bc7-462d-b2dd-3f4986d326e6" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9bf25747-ae51-489d-ad59-12f613686f39" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="482de7ce-1427-4ee2-af77-e57f8b717303" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="74fe6c57-18cf-44f0-bc81-88807a5eb3fb" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="f2952ee2-2725-4285-be64-6714caca1e52" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-200 cursor-pointer group" whileHover={{
            scale: 1.02,
            y: -4
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full h-32 bg-gray-700/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span className="text-gray-400 text-xs" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">Image Placeholder</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-200 text-sm" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700/80 px-3 py-1 rounded-full" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Feature Panels */}
      <SortableContainer dndKitId="9f8e5743-70dd-4e04-9679-faf91892ec84" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="68c5ed67-e43e-4b30-be73-f74daaab9d60" containerType="regular" prevTag="div" className="max-w-7xl mx-auto space-y-20" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ad3ae87c-28c7-4f82-bbc2-dcd42b13da8b" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="11397be8-f77a-421e-b952-289b7b65e654" containerType="regular" prevTag="div" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-4xl font-bold mb-4" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing Overlays</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence.</span>
              </p>
              <div className="w-12 h-1 bg-orange-500 mb-6" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="30223920-6d44-4f22-ac1f-2ab3bb9b351b" containerType="regular" prevTag="button" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="063b3019-13aa-40a6-b12e-c2903a7a7f7b" containerType="regular" prevTag="div" className="bg-black/30 rounded-lg p-8 flex items-center justify-center h-80" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="07ee895f-4e1b-404e-8e29-ae467d88cf77" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Play className="w-16 h-16 text-orange-400 mx-auto mb-4" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <p className="text-gray-300" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="172c242b-24c0-49e1-86f7-a223277bf2bc" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="22f60ede-8668-4bb9-8a50-8cd67fa80a4b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-4xl font-bold mb-16" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <SortableContainer dndKitId="0aef911f-35cf-4ef9-bc45-51249b8b85c1" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-8 h-8 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          <SortableContainer dndKitId="5715ef90-6393-40ab-b42f-8b18ae0cdbcf" containerType="regular" prevTag="button" className="mt-12 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="f9ca7d59-a37a-4995-9c88-eee8756a03e1" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a9110c7a-0239-44ef-868c-11ca92add7fa" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-4xl font-bold mb-8" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features</span>
          </p>
          
          <SortableContainer dndKitId="4dcde1ac-8b61-4b81-b3c1-f6518f1b8378" containerType="regular" prevTag="div" className="flex items-center justify-center mb-12" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="31086604-39bc-46f9-a3bc-7b040fcd48f7" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-6 py-2 rounded-l-lg transition-colors font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`} data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
            </SortableContainer>
            <SortableContainer dndKitId="8f34dbe7-74fc-438c-9655-ecf65e03ff7e" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-6 py-2 rounded-r-lg transition-colors font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c9c7d0e8-3d4f-4ee5-b632-48ee70f31325" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="a09b2ff2-2674-43dc-8206-307791df6d80" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-8" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-2xl font-bold mb-4" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="2b9e6e23-d577-421c-82b0-839a3a2d5195" containerType="regular" prevTag="div" className="text-4xl font-bold mb-6" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="8365d0a9-2526-499c-ba7e-9d3ab0b18669" containerType="regular" prevTag="ul" className="space-y-3 mb-8 text-left" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="b434d0ef-50f9-4078-a272-65157247cfd6" containerType="regular" prevTag="button" className="w-full py-3 bg-gray-600 text-gray-300 rounded-lg font-medium" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current plan</span>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="476ee6ff-d966-4971-96db-9c7f0382e0df" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-8 relative" data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="174d0f84-c573-4808-9fa7-ca6998602c19" containerType="regular" prevTag="div" className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-2xl font-bold mb-4" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="ad0ce526-d312-4b1d-ae27-6ac773d945ce" containerType="regular" prevTag="div" className="text-4xl font-bold mb-6" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
              </SortableContainer>
              <SortableContainer dndKitId="aadabeb8-90aa-43c9-8646-6e739657a760" containerType="regular" prevTag="ul" className="space-y-3 mb-8 text-left" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="254b1571-5bf6-44de-bbdd-8456b3df9c6b" containerType="regular" prevTag="button" className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="20a3a6b7-9000-4059-89df-a2ba55084d61" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="07306250-94ba-42c1-804a-e1632f675b75" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-3xl font-bold mb-16" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="0e790b94-9640-488a-a698-26a912ed357e" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-lg p-8" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-4xl font-bold text-orange-400 mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-xl font-semibold mb-1" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="0c5461c1-df22-4d46-98b7-6c748ae37c22" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="67790ece-9229-48ce-a200-9f365a30d860" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-3xl font-bold mb-16" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="5558e154-11de-4438-a4d4-f75b45c215a2" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-lg p-8 text-center" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-12 h-12 mx-auto mb-4 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-xl font-bold mb-2" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-6" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-3 ${card.color} hover:opacity-90 text-white rounded-lg transition-opacity font-medium`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="b170d8c9-236f-4eb5-bf68-bcf4eac4afda" containerType="regular" prevTag="footer" className="px-6 py-12 border-t border-white/10" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="960d81e4-6d88-459b-8d77-1706a023fa4d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto flex items-center justify-between" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5195931b-7681-4d31-96f8-790fc60f511c" containerType="regular" prevTag="div" className="text-xl font-bold" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
            <span className="text-white" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
          </SortableContainer>
          <SortableContainer dndKitId="782ffa6d-6135-4598-bc99-4d0b9d0e233d" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy policy</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};