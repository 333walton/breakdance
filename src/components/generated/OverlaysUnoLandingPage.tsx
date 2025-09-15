import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse overlays',
  active: true,
  mpid: "bb5617d4-7f41-43b1-b008-123e431008a3"
}, {
  name: 'Art & Design',
  active: false,
  mpid: "1fd2da28-0b38-4332-b2ef-c2b2d37b2e5a"
}, {
  name: 'Business & Finance',
  active: false,
  mpid: "61787762-be7f-4732-adbc-dc37a679493c"
}, {
  name: 'Education',
  active: false,
  mpid: "9fc2f64a-8fd6-49ea-a7f5-70307e3839bc"
}, {
  name: 'Game',
  active: false,
  mpid: "b0e0294c-f64d-4814-b18e-6356c3ae6b06"
}, {
  name: 'Holiday',
  active: false,
  mpid: "0d48e232-300e-4f22-8584-bb63c441946a"
}] as any[];
const sportsOverlays = [{
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "49c66b2b-36a3-4373-9fdc-56cbcf097765"
}, {
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "32abb9b0-3ad5-45b4-9f92-1e1d426a4c15"
}, {
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "a89c065b-ddc2-4bb5-bfb1-8ffbbc1e54b5"
}, {
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "1ed2bd75-b86a-436d-b008-c8c23150760f"
}, {
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "8575e30d-fcf9-43c2-886b-764097a2c97c"
}, {
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "e62684ed-6fd7-4de8-bafb-556192d76a5f"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7a5e719c-3900-44a9-a820-82ca4b6c0611"
}, {
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "181ee7f8-8fbf-472e-9edd-a5369379e110"
}, {
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "134abd14-8dcf-48db-9dd0-7b1c2b9d49eb"
}, {
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "7ff0cf39-496e-4ea7-85e0-e7f51021f051"
}, {
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "72eb55e0-8a5e-435e-acaa-409819118244"
}, {
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "08d9f0a6-ca14-447d-836d-2496d5c581bd"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "ace5cffd-6e88-492d-bb05-a19b5e9db195"
}, {
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "746e3f45-7e2b-46e2-8278-772e47caf074"
}, {
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "24cc7316-a2de-49f6-8b58-eaf1216f4b2a"
}, {
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "d9dae10f-425b-4090-910d-78524b9d9784"
}, {
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "56b26932-c593-4dbd-bc3f-5b885a833ad5"
}, {
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "a74f098f-eba9-473d-a560-61b28884b5bf"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our overlay library',
  mpid: "d03f6953-fe5e-4c8e-9056-d1d31bad4b1a"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more',
  mpid: "f9deae65-258b-4dc2-8a7b-2f7112447df5"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy and paste the output link',
  mpid: "2e616c4a-9658-4dab-91c2-73b10a0d956c"
}] as any[];
const stats = [{
  number: '9.5 Million',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "47f55c52-4d9f-46c6-945e-dbd28e9931bf"
}, {
  number: '332k',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "47f0afc8-bb41-4c3b-9b34-de2cdf8b9f65"
}, {
  number: '265k',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "7d481662-92da-472d-8464-2376df4aa6dd"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community',
  buttonText: 'Join',
  color: 'bg-indigo-600',
  mpid: "eeb04fd1-37e4-4fba-bda0-0fec5eddc715"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials',
  buttonText: 'Subscribe',
  color: 'bg-red-600',
  mpid: "b5669c1a-2306-42eb-89d2-f8dbd932ab4c"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development',
  buttonText: 'Donate',
  color: 'bg-pink-600',
  mpid: "92900a77-4485-4e70-9c21-5d5283f65b91"
}] as any[];

// @component: OverlaysUnoLandingPage
export const OverlaysUnoLandingPage = () => {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');

  // @return
  return <SortableContainer dndKitId="e9c45950-3f8a-4bb4-abcf-f69720a2915f" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="f04a18d7-f0f6-40a1-a0ad-de970b7e505e" containerType="regular" prevTag="header" className="flex items-center justify-between px-6 py-4 border-b border-white/10" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ada69f05-7730-41ff-8a3b-84acf18ed849" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="aa7c63b1-1fe3-4e26-8d54-df9e6b01d303" containerType="regular" prevTag="div" className="text-2xl font-bold text-orange-400" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
            <span className="text-white" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
          </SortableContainer>
          <nav className="hidden md:flex items-center space-x-6" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'].map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors font-medium" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">{item}</span>
              </a>)}
          </nav>
        </SortableContainer>
        <SortableContainer dndKitId="0b95b010-c746-4a03-997b-e20941f69e8e" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ca5fe5e0-09e8-48d5-b208-6768fb2e8cee" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
          </SortableContainer>
          <SortableContainer dndKitId="178690fe-08bf-461e-8bde-aa8c71f5819c" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
          </SortableContainer>
          <SortableContainer dndKitId="e2a27d2d-869a-444d-ba75-381b22f446b6" containerType="regular" prevTag="button" className="p-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <Users className="w-5 h-5" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="1f2f48a0-8be1-4b53-b0ab-5f17f1b73594" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="bcdb3efa-f2dd-4f3f-a075-31cf54a70695" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8956d92b-92f5-43bd-877d-3be9733d054c" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f9aae3a2-8e55-4917-bac6-474139c8f49a" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="d149fdb3-67ad-4f93-af2b-39c0d99db031" containerType="regular" prevTag="motion.button" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse overlays</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="fcc06e90-c71e-4696-a499-46448370da7d" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ac48d881-2509-44d3-9781-f9d86287eec0" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-8 backdrop-blur-sm" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="005a6b5d-b777-4582-a186-9fd13eb5ebf1" containerType="regular" prevTag="div" className="w-full h-80 bg-gray-800/50 rounded-lg flex items-center justify-center" data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="4f102a1e-f521-4b08-99e8-d58fdd76b9c7" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="ceb2b672-257d-4744-b8b3-6b187c2699cc" containerType="regular" prevTag="div" className="w-16 h-16 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="dd6bfa29-1cdf-4ba5-9191-142ebfcc874a" containerType="regular" prevTag="section" className="px-6 py-8 border-y border-white/10 bg-black/20" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4138987c-d314-4719-a35b-ee8e2cd5d197" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ec0b4f82-2435-4bdb-b95e-962c8f8b6186" containerType="collection" prevTag="div" className="flex space-x-2 overflow-x-auto scrollbar-hide" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} className={`relative whitespace-nowrap px-6 py-3 rounded-lg font-medium transition-all duration-200 ${category.active ? 'bg-white/20 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
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
      <SortableContainer dndKitId="89a3662d-99d3-4f1b-8e87-95db66f9dccb" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f8904409-5f1f-4a21-b9b5-1c7d40a6e973" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="cf609308-76eb-4a5c-a61e-02c28cb75d46" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-3xl font-bold" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sports</span>
            </h2>
            <SortableContainer dndKitId="58da5491-338c-4f72-88ac-4623b56a5dbd" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="4424f28b-b9a5-42cb-bc14-fdef1cf66d37" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="23e4ce7f-5954-4acf-a260-049bd2c46905" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a5d3f7c4-db5c-4b8f-8be4-50cfaac414d3" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="060ebeb4-0596-41a2-b168-542b3cb569f3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="b06aa00f-c619-411d-ac34-6d024476188d" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700/80 px-3 py-1 rounded-full" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:string" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="5fa6ee84-18ac-4757-b787-d7bb131b37e6" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f2303903-9408-497f-9b1e-716e48b07130" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2aa2e9f4-e53c-49a4-b50d-1a26f0b14a6d" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-3xl font-bold" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">Gaming</span>
            </h2>
            <SortableContainer dndKitId="808c94ca-471c-401e-8f82-5f9df1e205e6" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ca358878-7a86-486b-9f12-975694a312ae" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="22443300-bef1-4bee-9bf5-e03d4fb373eb" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="8f6ffca4-054d-46fc-aaf4-fd11fcd5fd98" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="e16abe62-1808-4a32-9074-847d1782c350" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="b4cd2734-14ad-40bb-9008-69b08a8d5d38" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700/80 px-3 py-1 rounded-full" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:string" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="42ed7de0-8400-490d-8ddd-0f0ca57b6eaa" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="002897e4-7a94-4897-a559-36e766e7699b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8a6a98db-fb2f-4e74-a554-91bab2d785d3" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-3xl font-bold" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">Podcasts</span>
            </h2>
            <SortableContainer dndKitId="fc82382c-f135-46b3-84b4-0ea06202c0e3" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="b0cd2778-89b5-4fdd-9b0a-7901643ebddc" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9096b0a9-306d-4cbc-9a86-51bdc8e79e4d" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="6f7f774e-ae2e-4349-b944-df551a35d349" containerType="regular" prevTag="button" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="55c4ffd3-aee1-4d71-a0da-1b55a607fd91" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="f75dc612-735a-4975-9ea5-acde6f8b8121" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700/80 px-3 py-1 rounded-full" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:string" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Feature Panels */}
      <SortableContainer dndKitId="a2171633-ac8c-42f8-94ac-2b83c23994a8" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f1b2cf83-c59d-4f04-acf0-0ccd3ec17665" containerType="regular" prevTag="div" className="max-w-7xl mx-auto space-y-20" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8da5afd0-45e9-45ff-8c24-dcd6503a0690" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="bd5c1277-3659-441f-ba59-dcec327fe66e" containerType="regular" prevTag="div" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-4xl font-bold mb-4" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing Overlays</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence.</span>
              </p>
              <div className="w-12 h-1 bg-orange-500 mb-6" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="4d969e04-9527-4eed-9442-2ba86cc2e1ab" containerType="regular" prevTag="button" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="af9ee894-3ce1-4030-a034-23ac97903686" containerType="regular" prevTag="div" className="bg-black/30 rounded-lg p-8 flex items-center justify-center h-80" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="b3b414bb-e41e-45a0-95fd-240d81a2a5e0" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="241f88c0-723a-4d05-a6fe-c116d15b2c3f" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8b12dd1d-1916-43d6-994d-615d0bc52cc1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-4xl font-bold mb-16" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <SortableContainer dndKitId="53e3dd7c-ec0c-44dc-abc1-9c3ad707c822" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          <SortableContainer dndKitId="e7bf61eb-9c61-4a59-ba07-ebbb625d8fd1" containerType="regular" prevTag="button" className="mt-12 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="811d5f26-0bc4-463d-a6c0-864ee6dce802" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="de32e552-4430-475c-b355-eb3c9efc44ea" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-4xl font-bold mb-8" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features</span>
          </p>
          
          <SortableContainer dndKitId="e19f2559-12d4-409d-b0c5-d80156eaec0c" containerType="regular" prevTag="div" className="flex items-center justify-center mb-12" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="35e4249a-ba12-4f65-8f7c-71f0cb3ad169" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-6 py-2 rounded-l-lg transition-colors font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`} data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
            </SortableContainer>
            <SortableContainer dndKitId="11446a6a-20d6-44f3-a99f-28100d07cfd5" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-6 py-2 rounded-r-lg transition-colors font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="05aa3995-9847-4887-9fbd-98f7b8809ecd" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="48c8f99e-dc96-4236-bb2f-c2bf4e51a9d9" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-8" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-2xl font-bold mb-4" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="149bd65b-abcd-4394-bbcb-2a4c7ecfac80" containerType="regular" prevTag="div" className="text-4xl font-bold mb-6" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="5504d99c-4530-41ac-bb29-03fc36eeab67" containerType="regular" prevTag="ul" className="space-y-3 mb-8 text-left" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="eda35a15-e9f7-4d09-b197-1b375090c7f7" containerType="regular" prevTag="button" className="w-full py-3 bg-gray-600 text-gray-300 rounded-lg font-medium" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current plan</span>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="7da1fa2e-e37c-4ffe-8480-8e3a7669b72f" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-8 relative" data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="2986ad58-d5b5-4db1-b313-4660f413bd99" containerType="regular" prevTag="div" className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-2xl font-bold mb-4" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="3eb5565e-2b25-4370-977b-d11289a871b3" containerType="regular" prevTag="div" className="text-4xl font-bold mb-6" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
              </SortableContainer>
              <SortableContainer dndKitId="07e01e91-b9fb-4b45-9a9b-f82dd49023eb" containerType="regular" prevTag="ul" className="space-y-3 mb-8 text-left" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="8c087aa0-4971-4851-b81f-e49678d36c93" containerType="regular" prevTag="button" className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="7fe3a30c-d50b-416d-a068-bbd016f75316" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3a4e3d72-7e13-42dd-91d8-24787b756d4f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-3xl font-bold mb-16" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="135c979f-4893-4ddb-b623-ed32a928d46d" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-lg p-8" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-4xl font-bold text-orange-400 mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:string" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-xl font-semibold mb-1" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:string" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="f9b5ae4e-1fa0-4434-963e-db020a60a372" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a2124388-f376-4bcd-996f-87b817e81099" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-3xl font-bold mb-16" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="2e35231e-1b4c-4afe-b1f9-fd3cf590109b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-lg p-8 text-center" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-12 h-12 mx-auto mb-4 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-xl font-bold mb-2" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-6" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:string" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-3 ${card.color} hover:opacity-90 text-white rounded-lg transition-opacity font-medium`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:string" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="4e79c608-8db6-47a8-8f58-ce37f9a1c660" containerType="regular" prevTag="footer" className="px-6 py-12 border-t border-white/10" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="71e0c85a-7a81-4794-88ff-38bcdbee0def" containerType="regular" prevTag="div" className="max-w-7xl mx-auto flex items-center justify-between" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ce9652c8-b309-4f86-8ef3-ccec684bed3a" containerType="regular" prevTag="div" className="text-xl font-bold text-orange-400" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
            <span className="text-white" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
          </SortableContainer>
          <SortableContainer dndKitId="74c95916-7a1f-423f-8fc0-87f4435bf0c4" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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