import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "840b6389-9015-4f34-94a1-c5cc39e4daac"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "c43c7fb8-10b7-4b92-b9d3-9e56d2e08b1e"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "4cc51c70-ec05-4b36-a894-ab3098573143"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "105d0bda-25e8-4edb-81f1-8f895f29f722"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "95bee5aa-e2d1-4b32-8c70-9bc1d0442b6d"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "2a73ba35-fb61-4fe2-ab97-88e781db8afa"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "d918d5b7-69df-45ee-9d13-756a1a5d6686"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "498f4661-a3f6-41c9-b91f-a5dc7ac6d208"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "674e5270-66c1-4d42-ac52-249cbd8d9a10"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "50a37bc4-0547-4d95-8567-8b6a06989530"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "c7449287-a806-431b-944c-82cc6ddcee52"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "78e2e3a8-03a9-4bbb-bb69-9fc1d6e9e548"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "599688f3-8527-4064-be5d-e6945356eb9a"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "db923abf-db0b-4503-97d2-53b548a3ef0f"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "68fdd35b-7ce0-4564-984e-a60c5377b204"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "e29f1651-14db-4437-8ff9-645fc16b39c2"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "4c851a5d-5696-4357-8229-497e944c516f"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "7ab43243-5b7e-43c6-b204-3c69101c501d"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "97d747a6-ded7-4652-9320-faef8b54cfdb"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "0c32209b-f6f3-4103-9bb0-dad94d164ee8"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "b5b10403-fa20-473e-a210-f1c5c7b1ebfe"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "3db37ae9-fa38-4dfd-be46-f387ba3b6d85"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "77938be1-1ed5-42bd-be25-6fd1d13e35ae"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "54c9d40a-78df-4f4d-9ea5-dd2354bb9c1f"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "da6bcfcb-f51f-4944-8046-7c7503550c9b"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "b7f82565-95c4-47df-8635-4e37d0b86330"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "b3aef1ca-5ad5-486e-90ec-420659999d7b"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "beb883e3-c297-4710-80cd-1e974a99eea1"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "9f97d931-c97f-478a-8017-0e1d402b4075"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "d0aed778-d18f-414e-8e16-f1ebac17eaad"
}, {
  label: 'Tools',
  mpid: "9ed241b2-e2d3-4ff3-b0b6-9f2e250c88fe"
}, {
  label: 'How It Works',
  mpid: "a3cca774-d743-45c8-b7e4-1e068d50dc1a"
}, {
  label: 'Demo',
  mpid: "c6fd77cb-dffe-4913-a5ef-894f2113ed53"
}, {
  label: 'Live Breaks',
  mpid: "e4e2449b-d49f-4e86-b8ac-8a9584892748"
}, {
  label: 'Shop',
  mpid: "21ab77a6-9767-43e7-b223-69aa91a17296"
}, {
  label: 'About',
  mpid: "f3179dda-61eb-406f-81d1-29a270bb39b9"
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
    mpid: "832a2440-5063-462c-93e9-03e5edfdb7d3"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "01b963d8-8523-4e64-a204-5d6453e7908d"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "aa9abe62-eb49-4749-9042-25f1a5ba6c3f"
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
      mpid: "fdff8c2f-b3ae-4e6c-add3-5474a760f82d"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "e344c3db-c677-4249-b03d-5b3bee97b06b"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "6b874fa0-ae30-4009-9fd1-224966ab843a"
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
    return <SortableContainer dndKitId="40cdff20-2cbe-409a-9919-4f5c8095b583" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="7943441a-5702-4eb2-aca0-6c3feef81bfd" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '94%',
        height: '64%',
        left: '3%',
        top: '18%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d7b55862-b0df-4777-a6ff-25fc5c1adcbb" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="539e7f49-57c5-417f-8783-91f93604ea36" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="b69dfda2-e7be-4bd6-a577-8d900ba47e84" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-h-full overflow-hidden" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="f25cc43d-4e8e-4ad9-ab34-71beb71a5220" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="d0f4ee85-7105-4f9f-a5a4-2dda01f2499a" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                <SortableContainer dndKitId="9c6e9308-18ee-4f4f-8f32-10451e0754ec" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

              <SortableContainer dndKitId="6cf6b935-236d-473d-a59b-0e95eb733e67" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h4 className="text-[11px] tracking-widest text-white/70 mb-3" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">PERFORMANCE</span>
                </h4>
                <SortableContainer dndKitId="06e83160-4468-4b82-a060-aa23079437cc" containerType="regular" prevTag="div" className="w-full h-24 rounded-md bg-gradient-to-r from-white/10 to-white/0 relative overflow-hidden" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-white/10" aria-hidden="true" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="677c78ac-db02-41db-a3ee-55d02127740a" containerType="regular" prevTag="div" className="mt-3 flex items-center justify-between text-[11px] text-white/70" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <p data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Conversion</span>
                  </p>
                  <p className="text-white" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">3.9%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="f8d0c237-180f-4985-badf-5bf9e4ca4860" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="93d9cf17-86b6-4791-81cd-4374e5ac2ecc" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">AVG ORDER</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">$19.42</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="d088a63b-a712-4308-9cae-ca590a11fc37" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">RETENTION</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">42%</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="ae79113e-7797-4815-a680-ecef516a1eba" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">REFUNDS</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">1.2%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="44166799-0bec-4dd7-8b8a-fa3bbdab6f87" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="578f7b5c-e43f-468b-b87c-edcf5e10c9b5" containerType="regular" prevTag="button" type="button" className="px-4 py-2 rounded-md bg-white/10 text-white/90 border border-white/20 hover:bg-white/15" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">Download CSV</span>
                </SortableContainer>
                <SortableContainer dndKitId="336e8bba-1666-4643-879c-4b9d902c832a" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">Export Report</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="a531e537-5eb1-4678-99e0-d053ccb5e6c0" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '72%',
        height: '58%',
        left: '26%',
        top: '16%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e46084e0-8c5f-4eac-8942-e7e8c0a7ee21" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)]" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="41076e65-2ec1-4f26-aa1a-b16af4a22ee6" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="4f7e7aff-86ec-4fc9-835e-067025abc9c5" containerType="regular" prevTag="div" className="h-[70%] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs text-white/70" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">team board ph</span>
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="4a14f654-e830-4b08-9dbe-d4164a1d840c" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        left: '3%',
        top: '17%',
        transform: 'translate(-6%, -6%) scale(.8)',
        transformStyle: 'preserve-3d',
        height: 'auto',
        minHeight: 'min-content',
        width: 'auto',
        maxWidth: '100%'
      }} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5d50bdb2-db46-42d4-b6f1-95f8d6d86d5a" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" style={{
          width: "auto",
          maxWidth: "100%",
          height: "auto",
          minHeight: "min-content"
        }} data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* iPhone top dynamic island / notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 border border-white/10" aria-hidden="true" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            {/* side buttons (decorative) */}
            <span className="absolute left-0 top-[18%] -translate-x-1/2 h-10 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <span className="absolute right-0 top-[26%] translate-x-1/2 h-6 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <span className="absolute right-0 top-[36%] translate-x-1/2 h-14 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            {/* screen */}
            <SortableContainer dndKitId="4635b098-407e-41b5-bee9-6277461782f1" containerType="regular" prevTag="div" className="w-full h-full rounded-[24px] overflow-hidden bg-neutral-900" style={{
            width: "auto",
            maxWidth: "100%",
            height: "auto",
            minHeight: "min-content"
          }} data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {/* status bar */}
              <SortableContainer dndKitId="6a1db5e1-fa79-4bc7-9ef6-0690fa0669d7" containerType="regular" prevTag="div" className="flex items-center justify-between px-4 pt-4 pb-2 text-[10px] text-white/80" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <p className="tracking-widest" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">9:41</span>
                </p>
                <SortableContainer dndKitId="935f0d81-c717-4db9-b346-ea83ff57cf90" containerType="regular" prevTag="div" className="flex items-center gap-2" aria-hidden="true" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span className="inline-block h-2 w-3 rounded-sm bg-white/60" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="inline-block h-2 w-2 rounded-sm bg-white/60" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="inline-block h-2 w-4 rounded-sm bg-white" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              {/* blank content frame */}
              <SortableContainer dndKitId="5b3e74ef-4a7a-4087-b3fb-d911d98c887f" containerType="regular" prevTag="div" className="mx-3 mb-3 h-[82%] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" aria-label="Blank iPhone frame" style={{
              background: "linear-gradient(90deg, oklab(0.999994 0.0000455678 0.0000200868 / 0.05) 0%, rgba(0, 0, 0, 0) 100%)",
              width: "auto",
              maxWidth: "100%",
              height: "auto",
              minHeight: "min-content"
            }} data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="79be8e3d-2080-42ed-83b2-0d7ec9891484" containerType="regular" prevTag="div" className="h-full w-full grid grid-rows-[auto,1fr,auto]" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="5c5f487d-54f3-4245-89b4-9e1954f76b6a" containerType="regular" prevTag="div" className="px-4 py-3 border-b border-white/10" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <h4 className="text-xs font-medium text-white/80 tracking-wide" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">Title</span>
                    </h4>
                  </SortableContainer>
                  <SortableContainer dndKitId="272a34af-30fc-4deb-9b36-f65ad0a48468" containerType="regular" prevTag="div" className="p-4" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="h-24 rounded-xl bg-white/5 border border-white/10" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <div className="mt-4 h-10 rounded-lg bg-white/5 border border-white/10" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                    <div className="mt-3 h-10 rounded-lg bg-white/5 border border-white/10" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="c3c794ee-c33b-4ba1-bb35-fc83eef07992" containerType="regular" prevTag="div" className="px-4 py-3 border-t border-white/10 flex items-center justify-between" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="a62ee6fd-f35b-459f-84c6-f6de7a74cd08" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="dcfd9314-aa3c-4b92-89d3-517b72e3d12c" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="da73435f-8b5e-41bf-9eac-0d8f915815ee" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6e96aab0-cbf3-40c4-a3e9-69cc54726913" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="aa60ecdc-c40b-44c0-97e3-46d1d1816694" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="3e2d7515-9ac4-4a39-8370-f6bee82f53d8" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="71343751-cccd-4f87-91b7-ecc9f7d97837" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="7147d84f-fb8e-4076-b5ad-0886e29b89ee" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="687e84ae-4f5f-4d07-be0d-02c7ae3b1676" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="06a5df13-7f6e-49de-8bbb-d29772eab126" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="d5d03f07-2d48-4590-99cc-cfcc2a6228d8" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="155d8705-2d03-4a8b-abcb-a531b6fd15d1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="1d58c301-5885-464d-9be0-67b7df7ec3ba" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="daeb97a3-c661-474d-b71f-db74e033ef9f" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="7d91f109-4ca3-4abc-91a9-7368bfa8a663" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="58cc7a6f-2c78-4d15-87e4-85560ab5761e" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ba7beef6-ddc1-43dd-9bb5-8d60ab5c35cb" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="2a55f389-d4ed-48a7-beec-6e805ae7d79f" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="98228315-cdc8-4fc8-b688-ecde7c6e708d" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="7fe0567c-9f45-4b6f-add1-0950eaa61363" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="1af92999-5015-41ea-851b-7b3d67e88ec0" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
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
      <SortableContainer dndKitId="78bef011-34ad-45a0-a4bf-fbf9dbb7719d" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="bcea236b-33c4-4e10-ae4d-e62db23f6717" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="f886e6ea-2390-4d84-b17f-afd8f9faa79c" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="11fb0f3c-b44d-46d3-a64f-dae078d89a92" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="c368bccf-408a-4191-aa5e-ebe3a9691aff" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8a9fb2aa-f85e-4692-985e-21edd06d7af0" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="8629635d-65c5-44fb-a5b5-dcada0e34bd2" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="d60bef25-a0e3-49d5-a3bb-8098f23c8366" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0eec8eee-8117-4e06-b494-c7812453eb37" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="010f2d0e-453e-442d-8a01-e12d41465bc5" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="196ccf33-6904-4a5f-931e-5fb0db4629cc" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="e7b2667d-60fe-464a-b4a4-3046b05e80a3" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="9c4c033a-6d3a-4912-8eba-0c61c76e8018" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="9e89dc61-94d2-48d1-97f7-abc93a42319e" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium FlyIn' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
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
      <SortableContainer dndKitId="bacd30ea-34f3-4428-ac2b-dc79d5173990" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0530733d-4f9f-4cd5-bab9-cb8212650c61" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5ae9f03f-4f44-4269-9ddb-14fb7d7a6a40" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="55c4e7b8-bccd-44a7-9f9f-aabb2ca4dbf3" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bb7d48ef-edd4-4066-8d47-ec74f0c8266a" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="f2677bb0-f66b-4cec-95f1-c576c9e76d56" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="980cc8e9-2d73-4883-a565-decf2f6ec1c5" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="c15a1b92-78f2-49d2-a654-7fb8c568007e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="f10beb7b-35da-4062-81aa-b62c2eca83ae" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="8cdc2c3c-10ec-4cb4-9fcb-fbc7f9b11af3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="b51d36cb-fc88-4bde-8473-b774d8bb8b16" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="d377e333-9114-4289-bd3d-36d7b699926b" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8f833eb7-65ba-40ef-9b2f-7260d72a5db1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e20301b9-6799-47b7-8342-a400745010fc" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="3cff78c1-2bdb-4400-86b1-1989763f06ea" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="62699244-4c07-4e04-8a44-9c6775a29614" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="68c333f4-c992-4feb-a62a-b0fe182c5209" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="eafe9c91-8b02-427f-8451-c6f397161698" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="50820a37-3a2e-427f-80fb-6fc203bcd4ff" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="d5932de5-0dfa-49e6-b676-61b81c5a8ccb" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="13b5a234-9620-4e11-ae81-2bb573eeaeb8" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="17ce0628-c98d-4f6e-b8b8-1846a45cfc1e" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="f51d83b3-10c7-43ae-bdaa-4ed8ab20b754" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="202a2c19-7d2b-4176-9503-50921edf41c7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="663a8d34-a770-4266-ac45-aa17d24ea1ec" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="1387f2e5-87cc-464b-8cc2-70d0871eae3c" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="280c3e56-09c4-4123-890f-e9b527feebad" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="8591d4e5-a8aa-42f6-8a88-62f353a9c39b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="cf764740-b4d2-4c95-b1c6-bef0150ba290" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="deb2d27c-710c-43e6-8263-dfc3b7b636bf" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="1632655e-5382-4d10-9003-186625fee6db" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="9e4357eb-603e-40fe-9d9c-55df7fe86e40" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="eff1706b-ca2c-445d-92c7-aaebed072aff" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="00dd3172-0832-44eb-b3a1-f26e23b48ddd" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="19a4fa17-3965-458c-b6e1-bf8ebac911a5" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="04ded31b-14a2-4a70-b40a-b615b18fe34c" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="e5fe4928-13de-4834-95ca-073102aab43e" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="06d09026-1a22-4409-a746-591b7968964b" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="1652c4ff-d204-4ed7-a899-44f7db51163b" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="840a0c72-4b24-4edc-a350-4c5e7b236c71" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="81412ed5-94f3-463e-97ec-6da135f43713" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a92cb426-87cf-4c32-9740-f98de6670be3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="c93926e9-f962-4c9f-9505-b4205ca2725f" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="e0a20704-d196-40f8-87f3-d20dea6ace80" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="49005e27-0ffa-4587-9c2e-f9c4afecb183" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f71318f4-ad72-4358-92e2-bc672623429e" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="7e8a4f2e-7011-4dde-a1c6-4a4338101587" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f4478e09-e3d1-4876-80ac-f213d29953f5" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="0b365a91-30fe-4a84-af72-4bc95ce317aa" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="952b7495-e655-4624-8df5-7a4afad768ba" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="da620180-52b5-4dcd-befe-fae0f6388e99" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="28d4ff54-56fd-4d22-b326-7c0b04409edd" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="518d292f-20b8-4f32-aa76-aa1848f922f6" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="c9bec29a-6cb5-4d88-b884-bfdb78471e0b" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="6014d6cc-4cf9-4483-b8f9-417e86528304" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="151a6100-1d7b-43a7-a4cf-605b83992042" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="f73cdf0c-24cc-4e0b-a59b-04bb7e1d28a7" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="eef47fd1-e257-4250-9122-ba7d064e0257" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="630c1c54-579b-4fdd-a76f-b9d232d900d8" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="c810b2ff-d1f8-4d15-b45c-ecc54b1b3b26" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="2da9289b-3fc1-4774-abb4-b82cc6a5a124" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8d472463-371b-401d-bae8-541d629ca9fa" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="95987575-edd7-47b6-b3cd-8d47c90711e0" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="deb5b9f3-ffee-4678-9f18-eb86da713d67" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3647b0c2-149d-4354-a4fd-0a46681032e7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="0fdc07ab-ec99-4364-9b7f-9dd6afbda85c" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="360" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="d871239a-f92a-4b0a-b76d-e0c23a2e7807" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="370" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d1545c88-bb3b-46e3-978c-4ce1ebd53a51" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="371" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="7fcfe1fc-8498-4b74-afb2-011469306add" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="372" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="acf43ccb-f89e-4fbe-9a45-ab9e6ca68052" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="373" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="374" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="375" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="e002d2a4-5674-458e-82ca-25643cdf4f08" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="376" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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