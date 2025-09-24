import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "8103706b-7d5a-418d-90bb-8305d6b650b6"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "1a189881-e081-495f-a561-054a50200390"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "8aaf8633-e0c5-4442-a064-c1a0eb30b3fc"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "ec01766b-6cc5-48cc-bc01-2f81746d393b"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "9c62e806-1b80-45bf-9fea-c68c659f5973"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "aa17cc1c-9963-4902-8eb2-076841dee7ce"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "43e6ac44-1ff6-475f-b304-2ce58bb28e55"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "27f9ad1e-5547-4a9b-9277-da0d643e5f50"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "cbfd66ae-75ae-46be-b61a-35f661fddd54"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "dd8731a3-3f07-4c49-aebb-625928cb2b94"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "ff430e6b-d383-4f48-80c3-78f29867f332"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "71128fd8-8a65-4231-a9d7-5e8ff27a7e55"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "c741d2be-e884-4bb2-87e8-8be252aa0d10"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "f22ae58b-7b1d-4010-9474-cab20255aa00"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "0aae1a25-2a42-4d53-82a9-1b49abd908dc"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "96094b67-5c89-4bf2-9679-a702161274d7"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "f2fe8fa4-766d-4ac8-8a10-143aaecf0770"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "b7aa4893-8eb6-4e68-9a46-13b3a99113b0"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "269f677d-dcd8-4bb0-a1ac-4ae9fd0c1ec5"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "f36ac90f-23ba-4356-bcbc-c8d6f2e98b43"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "16ede475-a4b7-428a-9a54-a677311655a6"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "02711f12-04c1-47fb-9fa4-2840d1ca05f8"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "6857e8a3-991d-4fef-8391-a6ddd6edb7b2"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "f4a7f555-9b4d-43e4-89be-7f9ebf830f95"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "88af0737-ddb4-4022-abd0-29bfdd732f79"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "b87735c9-5aec-4c38-8464-e81ea2ec4078"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "dfa675dd-a007-4688-95e7-f5ac1b9c7911"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "68107965-1a26-431e-ba45-da0111f17b3c"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "7777b3df-b89e-4ec0-b0f3-3a583e86de3c"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "1ab1dfee-9745-4e92-8591-c09767649435"
}, {
  label: 'Tools',
  mpid: "09de6f96-49f1-43bd-874c-d67bb568b28e"
}, {
  label: 'How It Works',
  mpid: "fe171de7-d59d-4d79-ad12-6c04d1ce8b92"
}, {
  label: 'Demo',
  mpid: "cc6ef6a4-89a1-45c9-834d-78631e04fc62"
}, {
  label: 'Live Breaks',
  mpid: "907bba18-825c-4ef1-86b2-4dde34c2a86e"
}, {
  label: 'Shop',
  mpid: "77b67c0f-9e5b-40c2-b2f8-59fa96cfe2ae"
}, {
  label: 'About',
  mpid: "e06f25f2-cbb2-40fc-b395-c6a859aa400d"
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
    mpid: "ba406a1a-da24-4b39-af7d-e1d943d2427b"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "ccbb4bb6-9636-4dfb-9d96-90d7bb836f8e"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "b82bfe71-bade-4178-b83a-084c914d0602"
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
      mpid: "dbcf6e3d-f3e5-4c0e-98f6-f7d3dda43b4b"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "f65507bf-7dcb-4638-82ce-75c7044d08b0"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "7ca13972-c713-4d47-844f-d4cb1eacb521"
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
    return <SortableContainer dndKitId="2dc45c27-c194-40c6-945e-d34b2af16609" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="e79ee1b4-c2ad-4a8c-adfb-aa93ec96ece2" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '94%',
        height: '64%',
        left: '3%',
        top: '18%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9bd69ade-d6c2-415e-82bb-32a140138785" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="52bea5a0-d1c4-4f79-ace4-580460f8d1ad" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="25d27839-5d09-4686-9f74-8ed6546ef0a3" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-h-full overflow-hidden" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="3eb5af2c-8b7c-419a-b1bf-a056787a9427" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="bcd1ef94-6924-482c-b11c-c8fef09d04a8" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">REVENUE</span>
                  </h4>
                  <p className="text-2xl font-semibold text-white" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx">$24,930</span>
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-1" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx">+12.4% WoW</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="359b8062-9656-452c-aa89-b780f7e9dad9" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">ORDERS</span>
                  </h4>
                  <p className="text-2xl font-semibold text-white" data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx">1,284</span>
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-1" data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">+4.2% WoW</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="8455421f-33e6-4d44-80bf-28db06983704" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h4 className="text-[11px] tracking-widest text-white/70 mb-3" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">PERFORMANCE</span>
                </h4>
                <SortableContainer dndKitId="d117246a-d4e2-462a-8f39-398fe77f68f7" containerType="regular" prevTag="div" className="w-full h-24 rounded-md bg-gradient-to-r from-white/10 to-white/0 relative overflow-hidden" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-white/10" aria-hidden="true" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="cc469f0b-cf0e-4361-8cca-de4092e7249e" containerType="regular" prevTag="div" className="mt-3 flex items-center justify-between text-[11px] text-white/70" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <p data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Conversion</span>
                  </p>
                  <p className="text-white" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">3.9%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="45b33991-2931-41a9-96fb-8942567c179c" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="01ee1523-66a7-4414-9c63-811c25f58d99" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">AVG ORDER</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">$19.42</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="480a9fcc-c3af-461b-b5c3-28e68c0ab910" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">RETENTION</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">42%</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="7723f023-b827-42b0-865a-4937f56bd9a4" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">REFUNDS</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">1.2%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="b34b7f20-e8cc-499d-b968-5e5ac3a3d09a" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="360333a2-d98a-4bc3-ad44-fd7b2c032158" containerType="regular" prevTag="button" type="button" className="px-4 py-2 rounded-md bg-white/10 text-white/90 border border-white/20 hover:bg-white/15" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">Download CSV</span>
                </SortableContainer>
                <SortableContainer dndKitId="8b93de4d-adf7-42d9-b92d-6479b593dec9" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">Export Report</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="0af26646-3f3c-4d53-a30e-8deb21134a1f" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '72%',
        height: '58%',
        left: '26%',
        top: '16%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="91202c70-e692-4b57-b780-d0db88681f86" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)]" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="486a9a8a-305f-40d3-b6df-296911a435e3" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="a96f49b1-8fd2-4bcf-8810-7fd59c51fbb1" containerType="regular" prevTag="div" className="h-[70%] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs text-white/70" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">team board ph</span>
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="717b7a0b-9b5c-4447-ac1e-82259af336bf" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        width: '22%',
        height: '62%',
        left: '2%',
        top: '18%',
        transform: transformFor('phone-preview'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e8352d3c-2468-44a7-87db-65ffe089d189" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* iPhone top dynamic island / notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 border border-white/10" aria-hidden="true" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            {/* side buttons (decorative) */}
            <span className="absolute left-0 top-[18%] -translate-x-1/2 h-10 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <span className="absolute right-0 top-[26%] translate-x-1/2 h-6 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <span className="absolute right-0 top-[36%] translate-x-1/2 h-14 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            {/* screen */}
            <SortableContainer dndKitId="5e156c90-9922-4201-ba7f-8d7e80408714" containerType="regular" prevTag="div" className="w-full h-full rounded-[24px] overflow-hidden bg-neutral-900" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {/* status bar */}
              <SortableContainer dndKitId="1039966f-0226-4c29-9a26-551c506484ba" containerType="regular" prevTag="div" className="flex items-center justify-between px-4 pt-4 pb-2 text-[10px] text-white/80" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <p className="tracking-widest" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">9:41</span>
                </p>
                <SortableContainer dndKitId="f9293381-6ba5-48a8-9a5a-06b2889b46c7" containerType="regular" prevTag="div" className="flex items-center gap-2" aria-hidden="true" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span className="inline-block h-2 w-3 rounded-sm bg-white/60" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="inline-block h-2 w-2 rounded-sm bg-white/60" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="inline-block h-2 w-4 rounded-sm bg-white" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              {/* blank content frame */}
              <SortableContainer dndKitId="d80a1995-f23f-4151-86b0-c3129c85d632" containerType="regular" prevTag="div" className="mx-3 mb-3 h-[82%] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" aria-label="Blank iPhone frame" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="76a31a6d-e46c-466f-9031-cc42cf9e6b60" containerType="regular" prevTag="div" className="h-full w-full grid grid-rows-[auto,1fr,auto]" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="09e98537-2b9c-4865-b7e0-8cdf456edc35" containerType="regular" prevTag="div" className="px-4 py-3 border-b border-white/10" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <h4 className="text-xs font-medium text-white/80 tracking-wide" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">Title</span>
                    </h4>
                  </SortableContainer>
                  <SortableContainer dndKitId="baf2ff43-f028-4507-9162-02033f9e4e07" containerType="regular" prevTag="div" className="p-4" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="h-24 rounded-xl bg-white/5 border border-white/10" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <div className="mt-4 h-10 rounded-lg bg-white/5 border border-white/10" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <div className="mt-3 h-10 rounded-lg bg-white/5 border border-white/10" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="09836553-f12b-4d62-8797-3b1a8eade482" containerType="regular" prevTag="div" className="px-4 py-3 border-t border-white/10 flex items-center justify-between" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span className="h-1.5 w-10 rounded-full bg-white/30" aria-hidden="true" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="h-1.5 w-10 rounded-full bg-white/30" aria-hidden="true" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <span className="h-1.5 w-10 rounded-full bg-white/30" aria-hidden="true" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              {/* home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-24 rounded-full bg-white/60" aria-hidden="true" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        <style data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
          }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="4852f15d-62b4-4003-a902-c452002c2ed9" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="276b057d-5070-48fb-ab80-09c089d78234" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="eeb52ece-cc5c-461a-b5aa-14a322bb4930" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9a85ae7d-41dd-46c7-8c77-bf147922ce76" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="9f0e141c-5944-4132-81c0-c13268ac76af" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="cca09b51-1176-4100-ad25-ebdcdb7197b5" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.75 0.14 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-10px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="1ae2b946-5319-4481-a200-3c725352c61d" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="850b38c5-cd0c-4b07-a6b8-90f2fec7d219" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="530ac257-ebeb-471a-964f-6e0ee89575f4" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="9f2c19f0-56ed-46f1-ba35-e26091cbf5b6" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="e81b50ea-0d4a-48bf-b53a-3ca8d8a948a6" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a5c4dc60-9091-49dc-9ca5-6ec9b0feaeb6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="33138dcc-204f-418e-afe2-5df5532d07ee" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="015125e0-8cb4-403a-838b-0be4f914e5f0" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? 'default' : dotContent[activeDot].id} data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 0 ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : activeDot === 1 ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : activeDot === 2 ? 'Stream with BreakDance overlays and get instant promotion in our Live Breaks directory' : ''}</span>
              </p>
              <SortableContainer dndKitId="76fdbb56-5691-491f-9778-7e0ea186c4e2" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="9844f579-b524-45f7-ba22-97edb95381bf" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="610284da-fa8d-432f-9ff4-513a43f07542" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="32462e35-44ca-4737-a835-e385f06705fe" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="6ecbaf36-d5ff-49fa-a6de-def9770913ea" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="a6d09f17-e1ee-42aa-9348-79476a728549" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="70593167-d461-4e23-a9d7-2f8a3304a3e4" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="af40bf72-0157-4d94-91c6-1e5e512eb2e9" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="dfec750c-3720-4475-93b0-d45edc226221" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="73163fd1-9b55-4a54-837e-1c42fbe675d3" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="2a10ac56-d2dd-4ad3-9c94-028fd47962a0" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="200b8947-ee8b-4222-89eb-54143d76e72e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f41b2cff-cd62-4b48-b868-9b4824147326" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="4d2bf4eb-f3d4-4ea9-83a8-d5959382e2c2" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="2ee1391a-d417-4539-bbc4-92925078b16c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ff035868-1d4a-44eb-ae03-083ebd598510" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="33ad08b6-06cf-4094-97d1-dfdeec7e01a8" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="eafe37f9-a81d-4a71-a9ab-5fa8bcb37380" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="65353a66-5506-4dda-98a9-954af5c2a46e" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="1fa8b596-37f3-4f4a-bd54-7a79297d6856" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="72129077-d996-46b4-9df2-41aa785b05ea" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="5a8de188-329f-45e9-81a9-f6c2da72bd0d" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="2c4fa17f-8034-4045-b3cb-7421679cfece" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="10bf45c2-a9c7-4e6c-a845-469030047ada" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="65114315-2e00-4bd8-a00e-3de9a47cb3ce" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bff37db9-4eda-438d-9593-e8ad892e9ac2" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="7ec9dd05-0a72-4c36-b6f0-f00542350d5e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a73138db-ae2b-41c0-9878-4a3a19be12ca" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="c5d88fca-8ea2-44c2-a0fe-190624b934f4" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="90951dd2-33b7-41ab-9692-355f13853d35" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c6846704-0237-4086-bb38-f4f2cb96a173" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="12c87553-b9ab-42e9-95d6-2593be12f6c8" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="a2bde588-b4a8-4669-89bc-62c288d443ab" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="37ff1b46-3924-48b7-a6f7-6f63e5fbafe6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8536b07a-1dde-4b9e-9cf2-729443b7db79" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="dac21deb-15fd-427e-bc1d-67abe317c0e2" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="fc39892a-9977-4b7a-8efe-56a955cf4e82" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ed4850e4-b13a-44d6-bd1f-fe6b5e5e838e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="ea0d5e48-8989-4baa-bad7-916f52b95531" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="e131ac3e-5a9e-4116-ba4a-85b6b011a298" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="98230860-5884-421b-baab-627385305468" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="6dd1dcf2-ecef-4258-bf2c-a94b52e6253f" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="1d041c15-25b0-4aee-826c-5437672c046f" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="e56611e7-9b12-49e8-aeec-79ad92888bd0" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="aa1a9d2e-930c-4804-a2a8-6e7c2c997cc6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0de4c5ba-8e99-4570-8591-9c6da33d47f5" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="cb0cc4f6-307e-471f-9f51-3c2a401ed0e7" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="1cd5fd37-0930-49fc-9ff0-018f69ba24ef" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="d644bf3b-49dc-44af-b74a-71854c0cf64b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="ace42d6d-604c-4d22-b634-102c137a843d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="53242abd-d3fa-4e49-ad3e-68ecf23da373" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="4c50c528-6034-4f52-abea-a48e58e2b655" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="d8c0d934-0555-487a-aa8c-6ff1c25291dd" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="0b70487c-8b3b-4074-8786-679a4be7516d" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="604f5580-1080-4cf2-bbe1-7057f0747730" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a6a028dd-6ade-43f0-bd4e-0cb7794f2615" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="3bfa2e81-126c-436c-98bd-30d871421b55" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="cfb08cb1-c40e-457b-a4bd-69e111120012" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="744ad8b9-71e4-46b4-a5f8-21a740e74e24" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d1facc39-3563-4ce6-b8b4-2538a1ea0c78" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ecd9772f-cfe2-43e8-a2ec-803891774ae8" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="52335131-fdfc-4718-9383-d7d6c70b27c1" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9b3f15e2-3003-4c22-89ec-3c1c9f7950eb" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="4a04f897-c87a-49c1-b637-05775b81cdf7" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="b8d4c4b6-1e8a-4966-8b25-379b066edaf1" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="fe1f0dd4-362e-4a0a-9eb0-0e25a76ca7bc" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4103e4b1-1ae5-4d0a-b5a9-c30634d58956" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="44912045-c482-451a-9da2-db991ea20f1a" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d78f0562-6d26-4a02-9ebd-149a33b1fe26" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="63014a37-d039-460e-a705-87ad031425c1" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="fb010866-c4bc-4c55-8aa2-391da77a8599" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="f2da6d3d-ec55-48a6-adf3-563c44ce8eaa" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="e74486a9-5ab3-4953-9ed5-fd8787354c32" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="722fbb9a-c862-42ef-9d1e-1083b8d9e454" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="02a705c2-b6ef-4354-8840-c808f765a51b" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="2b70f170-a40b-4892-9664-8479f196b0d7" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="28214757-e75d-409d-a27b-aebdd283438e" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="132cdb81-c2ad-489b-a2ed-592834ed14ae" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="af26d70c-40b6-40b4-beff-81b8f42bbad6" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="9852ca36-ebae-4962-b2d7-090edd4d2647" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="66358a1e-5c2c-475c-8a7d-e77895e42399" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="41129a9f-7831-4185-9c49-84ce73ccb54e" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="1abc959e-2487-4bf1-9413-11201b327af3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="d77b409d-2cda-4f1f-8358-9021979df405" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="352" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="353" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="354" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="339b9f6e-d238-4b8d-8acc-d88cdc12e8be" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="18bf7f48-2d1b-4d72-baf7-a63b298a0bd9" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="c7e5f3d3-6815-4789-838e-ea1ce51e71d9" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="360" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="361" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="362" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="363" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="364" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="365" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="366" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="367" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="368" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="369" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="b5dc9b81-a7ea-46f0-b5dd-da20379ef2b3" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="370" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9828916c-0c9a-4809-b75e-b07685e89665" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="371" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="bf72677e-563b-4e94-8d70-8238744dca05" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="372" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f52b7a47-9ae3-4dac-bc12-566a56ade692" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="373" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="374" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="375" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="cd3bb777-26d6-46fd-9762-0e11119bf834" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="376" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="377" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="378" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="379" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="380" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};