import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'BROWSE OVERLAYS',
  active: true,
  mpid: "c0afc68e-7bdb-41cb-a4c3-45fd5f6c2663"
}, {
  name: 'ART & DESIGN',
  active: false,
  mpid: "78295f57-6d71-430c-869b-8ab89db29838"
}, {
  name: 'BUSINESS & FINANCE',
  active: false,
  mpid: "7c9c0e5a-91fe-4da1-b55a-931e15e8eeaf"
}, {
  name: 'EDUCATION',
  active: false,
  mpid: "217d970d-c555-4a77-8ecd-bbe3ea5565d6"
}, {
  name: 'GAME',
  active: false,
  mpid: "305e5020-6b7c-4f50-93db-c6ce90e05504"
}, {
  name: 'HOLIDAY',
  active: false,
  mpid: "464eea8e-bb46-4d46-b2d9-6779862bcf70"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "8ff5ce79-6910-434c-8547-83231cba0874"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "5b7e55b4-39bd-4494-9521-5f0c827ccfb4"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "c995e6be-57a1-49a5-bb78-992fec40b3fb"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "ea0a3a7f-e358-4055-8095-6229f4769399"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "4233683e-0265-4441-b80e-5e8de0b25771"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "7162763b-0bdd-40dc-a62d-a6bfb9cb2a2a"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "ab68dbe1-4c65-4872-94cb-dd934ddb2df3"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "e7756772-bbc1-4710-8420-143c11eec7a3"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "df0dce6d-6934-4f8e-a2c3-af4e1a64a2e4"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "1e3e71e2-8197-4343-ab6b-41c7582e4199"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "a1732ffb-85d4-4f90-8958-f2cff4fc513e"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "d901672a-8ad5-4f85-94b1-ff5dd4a0745c"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "f341fadf-7f9c-4782-9442-921a7cc55def"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "1de51b8e-5994-422b-b743-6e0beda8b7d7"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "0dfc507f-cccc-4252-8a61-7d2fa728bde1"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "ec9588c2-bc66-49b4-a70c-29bec317157f"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "c05ec5d8-e90c-4d54-899d-597acff9879b"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "c07281a3-0124-4167-9b58-acc074a51a04"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "f7223cfc-cab4-4484-a488-b7f3f8184e7a"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "012ea9f1-620d-4568-b5d0-3cb69bdc98ac"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "8decd177-c18a-4068-8cca-1019172fcb2c"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "98caae83-85bc-48aa-ab68-6b962c8e93ea"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "a1f6fbfa-1394-4dfd-9918-e10684ff1127"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "d3cd2a6b-3ac3-48cd-b85e-726893fd3fef"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "2b0482be-ae67-482c-8c1f-3b94c18a2b6c"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "5b4c4420-0e78-418b-be25-495bf3077bce"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "53a80a16-f998-40f1-9035-cc3f2d8cefa7"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "97d62ff0-42ea-4899-a45d-ae48b86843a7"
}, {
  label: 'Tools',
  mpid: "74fb1099-5ca0-4c15-855a-7208c889796c"
}, {
  label: 'How It Works',
  mpid: "5ab6472f-7032-46a5-8fb4-c84715475dd2"
}, {
  label: 'Demo',
  mpid: "ef6d0d3d-2575-4426-a86e-5f5eb8a0d492"
}, {
  label: 'Live Breaks',
  mpid: "cd1bca59-7465-4e58-a64a-f3c83f5d3f4d"
}, {
  label: 'Shop',
  mpid: "66ddd762-51b2-4148-b9b1-1041181192a3"
}, {
  label: 'About',
  mpid: "c6063df6-cce5-4aa3-9c42-4d707fb6774c"
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
    mpid: "b77f5c65-b94b-4728-a041-dcd5eff55c9e"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "f11458e0-8cb1-49d5-b99e-b42d4959c099"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "6cda34fd-e0ed-4c8d-b37e-5224e4b8d91a"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // @return
  return <SortableContainer dndKitId="35511cf0-0444-4390-b9d2-61088293fe5d" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="973b3319-207a-48d4-999e-313674400050" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4974b22d-ab1d-4baa-9702-701e9381eb10" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="791401a8-f2f8-4723-b64a-a6e5f1a24411" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="c4f290d2-4ff1-40f9-a24d-4d84669e731a" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="c04cff4f-1421-4375-b575-6bb89c5c554c" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="e3458798-6615-4be4-b2ca-fa1c2cd33c39" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c8916927-ced2-40b3-a8f7-d027afdfe23b" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="4dca6c62-f9e0-4868-8e9c-679de7236d3f" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="d00618a1-1fe4-426f-b76b-1a47df0d63a1" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border border-[#FFC543] rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] flex items-center space-x-2" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="a9ccd475-6f17-40a0-971d-710fae5ea182" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="50860ce5-851b-46a7-9747-564afc94cebd" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d2535e5b-da23-477d-983c-9768be4d8c44" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="973bbc45-1d6c-4297-9d8e-c99ce8852f1a" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="6349d2a7-83a6-4b44-8cba-b2f9da9c0c4d" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse Overlays</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="ca2300c9-cf29-4eb3-8bd9-da6cc50a786b" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="68f58783-f762-4692-97ac-f9e84af26d29" containerType="regular" prevTag="div" className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="6fb5a954-3602-41ec-9265-21272815eef9" containerType="regular" prevTag="div" className="w-full h-80 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 transition-opacity duration-500" key={`preview-${dotContent[activeDot].id}`} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="1b266f06-4ff6-4ce4-932b-238cb52a29dc" containerType="regular" prevTag="div" className="text-center space-y-4" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <SortableContainer dndKitId="949723d5-2fa6-43d2-85f7-d2b91fda1f93" containerType="regular" prevTag="div" className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

          <SortableContainer dndKitId="96b63c0b-d266-4fb7-a531-76b1f250c4af" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 flex items-center justify-center" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="daf3930b-3100-4765-b05b-9e0d65f2eccb" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="4eb32528-146f-4f4c-8395-c40e8fa23ade" containerType="regular" prevTag="section" className="px-6 py-12 bg-black/20" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="00f6eba3-3a35-4707-9b00-a22ab57a5284" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8827b314-a726-4537-ae00-005f9224f69d" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 ${activeCategory === category.name ? 'bg-white/20 text-white shadow-lg border border-white/20' : 'text-gray-400 hover:text-white hover:bg-white/10'}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="a955f4de-87e6-4d5a-9895-c2be39d587a1" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6f9bd683-99be-40e3-afb7-f09847957dca" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="039295c1-eae5-4c4c-8c07-61dd617f6dd0" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sports</span>
            </h2>
            <SortableContainer dndKitId="cde0b84b-7eb7-475b-98c9-dd1a82913263" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="29b958d4-7a92-485c-a934-6f50d9298201" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="2327999d-fa8e-4ff6-9ab6-d0f6d4a8a864" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="2bbb6891-60a1-40b3-b6ec-de49e2198593" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="487b4398-b5b6-46c2-aa51-78dc2edb3df5" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="2e1bb3ed-2e79-4030-9e19-d198b4fa9fda" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-4 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-sm leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="2286bdcc-6389-46e9-8565-568c105d8430" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0ea21d93-67ba-47f2-b76b-52c67a041cdc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9af96e17-bc43-495f-acab-9e4a58d47ced" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">Gaming</span>
            </h2>
            <SortableContainer dndKitId="bf609c33-6097-4286-aa8c-593e01eb6084" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a6db99c6-0c8c-4ed8-b03a-64425102726b" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9268a362-6a29-4b24-9f4d-1a94c3f7598a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="4a2f9342-4071-472a-abab-f1da7bc297a9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="9f4c539a-6686-4354-b276-009344a07f1a" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f822172e-68de-44bf-84a2-c832dba31eeb" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-4 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-sm leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="a12d39c0-03ca-47c7-b179-f045771c23c7" containerType="regular" prevTag="section" className="px-6 py-16" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="121068d5-5a22-422f-8a74-06dce1ad63d7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="23c04377-0f37-410b-b3b5-bb567c5d8f8e" containerType="regular" prevTag="div" className="flex items-center justify-between mb-12" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">Podcasts</span>
            </h2>
            <SortableContainer dndKitId="6509f313-0b19-4ce9-b7fd-6b304803de73" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="823ca43b-7b93-4a54-a51d-f09dab791496" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="c63188bd-7a31-46ec-a883-0588b8759327" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="8656881c-8745-4d7e-93b5-fd99518ec7b8" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="3b9d1467-f01d-4eff-96eb-d1835e87e64d" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="cff03d4d-487e-4fb2-bf3b-aa3e35ad7f6c" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg mx-auto flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                        <Play className="w-4 h-4 text-orange-400" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                      </div>
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-4 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-sm leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="2765cd57-4aaf-4b03-8218-9ee2db2de7e6" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="463cca56-1b8b-4af5-bb23-28655663b74c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="05f0feb1-a09d-48fb-9420-b7e96a29b580" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="af6e1692-d8d8-4e6d-87f2-c695c74f333e" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="54b86a26-b5ee-410a-b5e7-72a7abfb3e88" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="565efa7b-a696-414b-b2d3-9c6a3986555e" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="1a588cca-8aca-4465-8df4-e16b1362719a" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="10fb9188-592f-4883-b5fd-1082bf306930" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="4da0b828-ed89-46e3-8be5-18c9289db881" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8edb0b80-9076-4d5e-8522-7727ec5e729a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="0d667701-359d-46fa-adfc-112289e242d6" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center border border-orange-500/30" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="9feab398-9e24-4d6d-8f55-ac8c256fdaf4" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="0961df1b-cdc4-4e95-9ca8-effd0f187c78" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="790fd81d-30f0-4544-9315-abc32b816dc7" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="1875f8d8-1305-4c0f-a5d1-bd7fa69c349f" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="e74216fe-3e45-4aba-a32a-3623c1d5fa65" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d3319a8b-e7bf-4d2d-b385-024ef462b5df" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="d7c13c98-e664-41f1-af92-6adef7f85f50" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="276bb8b7-d9fb-48d0-b29f-a56d6e539370" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="fd83ec8e-807c-41c8-be17-40f2f166de60" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="11344d79-baa6-4bba-9f4d-b2bcd105f193" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="dcc6e7c9-c8a5-4261-8501-3736659cdf1a" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="da4344d7-2696-4d71-98fb-439ac7b6c7ed" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="9466048d-e56d-4ebe-bad4-c3fc0a97a0bc" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="18c07cf7-f59a-4717-9588-e4754d056516" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="2d9aff4d-f6d6-40c9-ad0a-d3dbde541cfc" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="8a801eb0-bac5-453d-a81d-4f75240456d4" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="7e5dbffb-67d6-4b61-bc8a-272946c7df24" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="cddf2441-d707-4afe-b469-0e1195eb7155" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8f28f347-178f-4a01-8a6a-c4d3b34d3ba2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="fa1f52c8-c18a-4f5a-a0c8-55cf3341b8f4" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="64fbfcd2-78cc-4827-ad5d-b6927f1efeca" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9ad848aa-ec16-44c0-8b44-f7a992cf1ce6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="5964f46e-18cb-4d6b-a418-f6f39476c85b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="c586863b-092d-444b-afb2-f575153cd03f" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0af2cae2-8f80-40c2-8920-2937b1790540" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e5f86879-7c4a-4b78-ab6e-9bd365b0f3cc" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="97efef1b-0d54-4451-b027-b0ee35174f16" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="ede55dfe-c327-44f6-a57e-caabe6d6dd74" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};