import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "fdff073d-0eba-4cb9-839b-3f712d27395c"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "1a0124cb-dc5c-479b-8825-7a127bfa1c2d"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "f714e415-d776-401a-af94-f71703053755"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "4589b196-c7dc-46e0-8d5f-ba890aeb472f"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "5d52920c-d504-46f2-9c88-8904fd5fa68b"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "e8da98a1-0f84-42a8-bb28-46517cbfc540"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "17fa791b-f6c8-4a98-a304-45bdf87fc9d1"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "2cf588eb-85fa-4cba-af03-22ab900a688f"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "ba6c4855-083f-4da5-b6f3-661bc43a1058"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "ac61a960-acf1-45ec-a562-af6a523b3aa2"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "58ec08ef-7902-401d-89da-9307f589397a"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "adfad7f4-cbc4-45fd-b177-f41b34061ba0"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "c7e70ca7-3d35-452a-9372-eb0ab6a2700c"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "7834a1d2-36b6-484a-bd4a-5e3538cbbddf"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "e3a03cf7-a492-4b99-8d73-f28e19d90570"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "0dd3e503-8694-47f5-9faf-912027746fc6"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "e625b789-a5d7-4939-947b-2d537822e4b9"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "c9b86de1-dd16-43d0-b1af-25bc0a567e44"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "53119870-1dce-4684-b3b8-c107267769fe"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "fd363b29-dc9b-46ce-86e6-224c2a2e6ec4"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "86dc2a0a-c5ea-4e9c-9968-d912f85d324f"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "49927db4-84e6-493e-b34e-47e1b79e4085"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "d9dd545b-2695-44a9-8b0f-94f137dc335d"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "35268201-5afe-4f21-92b9-322c94e7bd54"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "1b0f91bd-0651-482e-aac0-d4a2b16b25ed"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "fac363d6-4442-4813-8211-b650df2cda7e"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "12dcb9b3-4b38-4c5b-b151-8a34b7d350d9"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "813783b2-af3c-4c32-963a-2c3556b26140"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "a36b61eb-b25e-4708-8d81-6a2fe3d9d56e"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "89cb68b8-7ba7-4136-8743-4a3896699e8e"
}, {
  label: 'Tools',
  mpid: "29dc5783-b9e4-4fb9-b651-2b5b64f8050d"
}, {
  label: 'How It Works',
  mpid: "db890225-ed6d-4fc2-8bff-21df0c9cb89c"
}, {
  label: 'Demo',
  mpid: "ef517070-d88e-4281-9291-4aab4a92340a"
}, {
  label: 'Live Breaks',
  mpid: "c3e98b30-a23a-4b02-a261-65a5d607bb07"
}, {
  label: 'Shop',
  mpid: "25b96a76-669e-467c-ab44-3dfe9453fade"
}, {
  label: 'About',
  mpid: "9f403a0f-14d9-4a93-b32c-f3fc1c076fe1"
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
    mpid: "058ec49b-ead6-4278-bc87-fa91c1ee8aa8"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "90b6335c-b098-44b4-b603-34fd729ffa25"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "49999c7d-c083-456d-8cab-4efc904909fa"
  }] as const;
  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  // Local component: LayeredHeroButtons (kept inside the file per single-top-level rule)
  const LayeredHeroButtons = () => {
    const cards = [{
      id: 'form-window',
      label: 'Form Window',
      z: 1,
      mpid: "4a84c769-a92b-424d-9650-8d4632395a41"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "f1067b2b-8aa1-4a8c-b740-6c6f2b940969"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "6634bb99-a6b7-4279-87ea-6fc39687e55c"
    }] as any[];
    const [frontId, setFrontId] = React.useState<string>('phone-preview');
    const baseStyles = 'hero-button absolute will-change-transform rounded-2xl transition-[transform,filter,box-shadow] duration-[500ms] ease-in-out border border-white/10 bg-white/5 backdrop-blur-md';
    function zFor(id: string) {
      return id === frontId ? 30 : id === 'nfl-grid' && frontId !== 'nfl-grid' ? 20 : 10;
    }
    function transformFor(id: string) {
      const isFront = id === frontId;
      const scale = isFront ? 1.08 : 0.98;
      // Create a subtle diagonal stack without heavy 3D skew for clarity
      const translate = id === 'phone-preview' ? 'translate(-6%, -6%)' // front-left
      : id === 'nfl-grid' ? 'translate(4%, -2%)' // center slight up
      : 'translate(0%, 6%)'; // back/base slight down
      return `${translate} scale(${scale})`;
    }
    function hoverStyles(isFront: boolean) {
      return {
        boxShadow: isFront ? '0 20px 60px rgba(255, 197, 67, 0.25)' : '0 14px 40px rgba(0,0,0,0.35)'
      } as React.CSSProperties;
    }
    return <SortableContainer dndKitId="7d22826e-04ec-4ed3-af2f-021a95ac5304" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="6da4aafa-ed26-49e3-be6e-8665948c5881" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '94%',
        height: '64%',
        left: '3%',
        top: '18%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="71432516-423d-49f0-bf12-3dc2ba90edd0" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="04666c9d-a965-411b-8955-c42ee48e3251" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="9b37f808-8202-45a4-a63f-5dc5de28d08a" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <label className="col-span-1 sm:col-span-2 flex flex-col gap-2" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-[10px] tracking-wider text-white/60" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">SUBSCRIBE</span>
                <input aria-label="Subscribe email" placeholder="your@email.com" className="bg-white/5 text-white placeholder-white/40 rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFC543]/50 border border-white/10" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </label>
              <label className="col-span-1 sm:col-span-2 flex flex-col gap-2" data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-[10px] tracking-wider text-white/60" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">OVERLAYS LINK</span>
                <input aria-label="Overlays link" placeholder="https://uno.live/your-overlay" className="bg-white/5 text-white placeholder-white/40 rounded-md px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFC543]/50 border border-white/10" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </label>
              <SortableContainer dndKitId="95d74756-9d02-4727-8a1e-18bce55f1737" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="28a623f8-88f2-40c8-b192-8406d0967f20" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105 transition-transform duration-500 ease-in-out will-change-transform" style={{
                transform: 'translateZ(20px)'
              }} data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">Submit</span>
                </SortableContainer>
                <p className="text-xs text-white/60" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">No spam. Unsubscribe anytime.</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="6dcb37a5-37ee-47f1-82fb-d83f947f18e4" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '78%',
        height: '42%',
        left: '16%',
        top: '8%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d46eb93c-4d15-401e-a4ac-6176a17b261c" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4" data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c2c853f7-5f8f-435a-9951-0eb1d21bb2ca" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="3a2ada8e-e6e7-4e3a-9adc-4c41f9fdff28" containerType="regular" prevTag="div" className="h-[70%] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs text-white/70" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">Grid removed — placeholder area</span>
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="8d3f12f3-e0ee-40e8-afce-b86e225d5913" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        width: '32%',
        height: '74%',
        left: '0%',
        top: '6%',
        transform: transformFor('phone-preview'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b26795eb-9222-48a7-b275-db7f3dc89268" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-800 border border-white/10 p-3" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <div className="absolute inset-x-10 -top-1 h-4 rounded-b-xl bg-black/50" aria-hidden="true" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <SortableContainer dndKitId="97e6af05-990b-420d-b10e-810a0c97026d" containerType="regular" prevTag="div" className="w-full h-full rounded-[22px] overflow-hidden bg-black/60" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="fba306ac-e798-4786-8c71-e0616d7ccc82" containerType="regular" prevTag="div" className="w-full h-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <p className="text-[11px] text-white/90" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">Mobile Livestream Preview</span>
                </p>
              </SortableContainer>
              <div className="w-full h-1/2 p-3 grid grid-cols-3 gap-2 bg-black/40" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                {[1, 2, 3, 4, 5, 6].map(n => <div key={`thumb-${n}`} className="aspect-square rounded-md bg-white/5 border border-white/10" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx" />)}
              </div>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        <style data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
          }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="20935126-0b5f-45d5-bfa1-32d9697e0300" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="3dd2e3b6-ad15-4df4-91ff-88007279b05b" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="aea87670-7edf-42ee-8550-e4e884a1dc11" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b999074e-4b12-436d-8868-a21c2ee9c9e8" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="15da7cee-ea38-4c76-b2e1-a7629f86ff72" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="f7e3c3bc-2d35-4df7-a5e0-b5af6eaeff09" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.75 0.14 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-10px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="b2a9d66c-eaee-467d-a3fc-d8e6c434c8f1" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="65ae1a26-42b1-4051-8618-cb0f3b24c957" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="14092286-53ea-4368-9933-d29b889e8d38" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="a062c5e7-8a61-4b07-8dbd-a19a6d7e2353" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="e8db85e5-61c2-404c-a8f5-1549abfec1d2" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="500b4c5b-0115-4aae-bdd6-503e44065076" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="162c60f2-f4be-419e-abb5-43b4e9d11c72" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="42d134d3-48a3-4c79-b649-8239f922a2f2" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? 'default' : dotContent[activeDot].id} data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 0 ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : activeDot === 1 ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : activeDot === 2 ? 'Stream with BreakDance overlays and get instant promotion in our Live Breaks directory' : ''}</span>
              </p>
              <SortableContainer dndKitId="a4576366-9ef2-47dd-8d2e-f6bb02345caa" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="54cec456-b546-4181-8263-8d44ca571c8e" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="6e3f33b0-c983-402c-9e2b-9b46449cd1f3" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="fa3d0d34-1ce5-42ae-b76a-53194e4ba383" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="9b55e662-c6b8-4b27-8124-ea94ae5bf6db" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="fa29a73c-05ab-4c5a-8e1d-aeb3675b577d" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f5157033-da52-433c-bf05-8d58cdd27bf1" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="256013f9-900e-40a2-8c72-3153f1f35304" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b593db6a-3e64-4382-9225-8c228c3e8054" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="33f3dcfb-bc6c-4361-b99c-c992c3d4e05a" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="2784b632-f417-4638-b246-83e30ed997de" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="7d1627e6-a7d4-44a2-a5d0-ff9028518ed4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="93c3b79e-a688-4da9-a407-357c89079b6d" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="09221c9e-5386-4af4-a132-6d544ab66d9e" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="b0d2a91d-2afc-468e-8d39-bac1515be193" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="a3c11535-f6d9-45c4-a9ac-99773aa472c7" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="9a633bd9-99d7-480a-afec-5b3b5b0f2cff" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="d5a8adac-8660-44e8-98bb-df81aa63c205" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="e7205634-53c0-4628-a7cf-ff89d9121e9f" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="044a0385-0e16-4b38-b202-a62cb5e48d8e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="41a11c68-a544-4786-8aff-775fdb9a13ca" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="10bfb7ab-0736-4d1e-83d2-5b3b139a5f64" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="730717b2-1d67-4e1b-9ba2-e0ca48819adf" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e742a094-fed6-4cab-b609-71f8dcbd7072" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="2cd2f29c-2a24-4b18-a43a-d3f2d502d4d9" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="593efc74-9321-4b6e-a99a-6dd4b0c0f4cb" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="cc0bf11c-6db6-4e7f-858a-f52002ddfcfe" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="98c7d53b-e9bf-42eb-8b0f-9f8e2faae50b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="e5934b09-5e18-4808-804d-4a54389df15f" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="980fb27f-e222-4916-a342-a1f43efed6cd" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="92932a19-0d4f-47ed-ad3d-cd41b9854770" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="13639c6e-99ab-4f93-a5f0-b4c1fc971a1d" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="76702bf4-a536-4743-b234-6a70bf0ef54a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8b6bdde4-9bce-4927-bc2c-d12234cc3e7d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f5101868-a6e5-44a0-a74e-5c9a10f87f56" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="d9f77a9a-e388-40bc-97d6-0fe3962c1396" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="969f3360-17a2-4df8-81df-c7c2cb732b50" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="3da32899-25db-4d17-8043-adf6dcaa463c" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="0e56f857-b5fe-4926-b3e7-7168ff63912e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="af237a6c-23dc-462e-9670-6ef7128dc68a" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="8d235ccc-3448-4f57-8dfd-e667807ecd71" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="2e9a04c3-73fd-4c7e-a77f-51d3cfb8965f" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="37b6028c-c834-4f4a-8e8b-822decc5f931" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="65bc2a1d-c95a-4d36-aa83-9e05bd16dfdd" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fc16a3fb-09d8-420a-9e97-25b2e8a1197d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d105d3d9-e10f-43f2-af1e-b1d62fe608a5" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="78492fe4-c702-46fc-aea4-4690eb60d181" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a5b3b982-d41c-4dec-bd24-92457b25008c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="7ab63cf7-6dc2-4eba-b77f-56d2ac73022d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="bf405f6a-3dab-4f09-a837-b55cbdc7660d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="8b66b40d-da8d-4532-bd0f-dfd2d4fa9c1c" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="53f588a6-2976-4337-8371-9d0f26cf6bb2" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="5ac97109-30a1-4448-87f2-e5502c040726" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="4eceb022-7099-48aa-a06c-1459cb6e7091" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="494f8782-ee93-4470-a31a-7f7d4efb349e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b07d4427-7f2f-4aa6-9e7b-c717f690efc9" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="94256b15-7687-44a7-8da3-20bc3a419432" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="95485088-335c-42c7-ae6f-452aeeba2474" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="d03579e2-84a8-4aa9-92ea-04ccf94ed909" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="12d02ae4-ce43-44c3-a50b-93fbcf80ba0c" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="1f6fdb3b-c5da-4a65-ad72-ca62479ab391" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="58db20e2-75a9-40ef-9906-462d276eab06" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="c89e778d-ffe4-4457-b819-b23f8a00a56c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="9dc7ba42-0767-4820-9ee1-175bace1ad96" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="9b46a217-3dc8-4f78-a8b7-9ecec831f340" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="ae3cf5e4-412f-4ac0-ab75-3656d757eab1" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="245c1864-d608-4b36-8f97-8441a739f0f8" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="2f6d9c38-96f0-4bc2-a0f8-c54d1e8dad8f" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="26dd7a2e-d5fa-40fd-88f3-0bd8361ab81d" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d822c96a-d303-4833-8f56-4217f9953f29" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="a7678cdf-186e-4111-80ad-19cb73a8723d" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="4e693357-2b90-47a9-8a8c-a5d4d476c13e" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="57d3d0fa-5f05-47e7-9fcd-a0d88dfe426e" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="feefae40-e1a8-4f23-a352-15cb9104b67e" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="51425ba9-0f3d-4bc4-ac7f-f0ddce7aba67" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="cdadb917-ce62-428d-ab94-bf11a6f2e892" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="66266328-f170-4dcf-934f-2a70310e21f3" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="9e403761-26b3-41ad-913e-2bab77a506f8" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="b4d02afb-c024-4939-abb2-01c20aac45e9" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="c9dcebbc-cc9b-4484-a75a-44c349e679fb" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="5e9da791-b328-40a3-94ca-020dd99fd45e" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="035e991a-0a93-4d41-a477-976a6f18d4cc" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4f78ff46-138f-49b8-a5cf-07b8732243d6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="dfdf79e9-ce9d-4491-aa2d-bfeca7385c43" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="394e4d44-145e-4078-8d9a-35bfb6bf3460" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="68d91fe6-b49f-4e55-805f-ecfac293c7a8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="cdf39938-057c-4c3b-91ec-47a09983af73" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="41542cf8-7471-44df-a914-6f1d8b066e32" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="adf9d0af-ec0f-4d7c-8f69-ece5dd0d17bb" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="517000c2-9da2-40c5-85c1-491c3ed49294" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="5cd015ac-99c7-457a-b88a-2abebb60ef8d" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="a685eb8f-85ee-4945-9db3-a45019559993" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};