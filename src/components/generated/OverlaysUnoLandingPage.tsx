import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "c76b1be0-5221-4e2b-8fab-da7c9cb76964"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "3dd87d4a-453f-4478-8bf7-f2962006e582"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "2f232da6-5ac4-4719-8421-8771330206ab"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "685cce7d-f008-4058-8e79-8ff8c6061b93"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "72527c6f-5da1-4913-8412-16c7e04dab13"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "f46bfecf-ba6a-4df9-9988-ac49e8fb7797"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "617f009a-7c3d-49f4-8e08-b439710c2966"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "689f90ae-7b63-47a5-9790-09d8fe6ee625"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "8b712743-0bd7-4e83-b0a1-4700b0d2e0b0"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "c9444a84-75a8-4fb7-9cb2-3d72d3f515b1"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "a6fbc775-5aff-4ee3-8d47-d00a18db9ffd"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "2932fb2b-15a0-4e29-b61b-88f7d1b35a62"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "5ab91f21-1619-4aa0-b28d-cdb3e480b14f"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "23c0082f-d254-43e3-ad60-23118d685d78"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "89b4183b-63ef-47eb-8e34-389eeeeb35f9"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "9c40a00b-ce31-4e02-9771-1613cc6d1f1b"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "4184e064-1e72-4048-9514-e87d4b52f2ba"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "038f973c-2c23-47f4-bb7a-f377be8c1c94"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "018b4194-f6e1-4c06-a556-d86bb8f78cb3"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "175050e1-64ff-4b12-a546-45a9bd80e1f7"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "7393412b-69c0-4d31-8131-351f36c5d028"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "7ef5b331-e6e5-49e6-acdb-9f5f99ec935d"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "37fe13ab-eb79-4624-a93d-fd4cc341b780"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "12e15c2a-c192-4ae8-8801-d2ae7dc30a88"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "36bb2653-7a17-4452-b920-ee9e07e87f77"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "bbcd39ca-d191-4ecb-89d8-4bf2aca0126d"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "f8ece87e-f7c3-4320-94ce-fdfa46b68886"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "3287da54-b49d-4356-bd87-5be5be73b1e8"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "c193bda4-fb02-4889-80d1-4a397aaffeef"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "a9a1756f-021b-4635-94ce-20bbb57420fd"
}, {
  label: 'Tools',
  mpid: "f87193f5-b77a-47c5-822c-3da4a6dae36f"
}, {
  label: 'How It Works',
  mpid: "e2513f4f-3788-4584-859c-2bb67d944621"
}, {
  label: 'Demo',
  mpid: "e7d7997a-6590-4152-96c9-32f688a7eb50"
}, {
  label: 'Live Breaks',
  mpid: "dff3c70f-6203-433c-98c3-c9b61425c947"
}, {
  label: 'Shop',
  mpid: "0cc9295f-759d-4bd1-904b-71f2822524ae"
}, {
  label: 'About',
  mpid: "cd9b7deb-5201-4369-8524-0e92fc91209a"
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
    mpid: "1e0381d5-007e-4b32-9074-72f04315b550"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "6a137940-6894-43f3-9e26-e20b63594fc8"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "e23ce036-c52c-4a3e-827d-4a5a8dfacb07"
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
      mpid: "82e25244-1b7a-4afb-8624-f8ea4b55bf6e"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "351bc5c7-ffa9-42da-af58-5d369bdab148"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "2b497533-5dd8-499b-ae73-26b0122cdcaf"
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
    return <SortableContainer dndKitId="270baacb-1397-4ed7-a4ea-b428a90eb98f" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="c7d54459-cb58-4502-88ea-7d3fca7f937d" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '94%',
        height: '64%',
        left: '3%',
        top: '18%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="c31a6a03-aef3-495b-a0d1-b9f7995b29ad" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d8a95f52-c532-45c3-977c-a34555728033" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="6d459d7b-50b2-455c-b799-02cc0896a5da" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-h-full overflow-hidden" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="2b8c0482-9de9-4cb1-b22f-010addb1f36e" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="907c0c31-d120-493f-b877-f3df970da3e4" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                <SortableContainer dndKitId="cd31a32f-a2f8-4b00-a6a1-ba9427c72e38" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

              <SortableContainer dndKitId="1eee6e1c-0824-46f1-8bc7-258091fd9bfa" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h4 className="text-[11px] tracking-widest text-white/70 mb-3" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">PERFORMANCE</span>
                </h4>
                <SortableContainer dndKitId="2affea40-f9f4-4e32-907e-6b641f863d19" containerType="regular" prevTag="div" className="w-full h-24 rounded-md bg-gradient-to-r from-white/10 to-white/0 relative overflow-hidden" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-white/10" aria-hidden="true" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <div className="absolute bottom-0 left-0 h-full w-[65%] bg-[#FFC543]/20" aria-hidden="true" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <div className="absolute bottom-0 left-0 h-8 w-[65%] bg-[#FFC543]" aria-hidden="true" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="35b0d33d-a5c4-4a7d-97c8-1fe191340780" containerType="regular" prevTag="div" className="mt-3 flex items-center justify-between text-[11px] text-white/70" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <p data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Conversion</span>
                  </p>
                  <p className="text-white" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">3.9%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="8cc9128c-8b26-49be-8dc5-e96de29fc66a" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="8e51cd69-4303-42b7-894d-001a6b9d7dcd" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">AVG ORDER</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">$19.42</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="a3e13705-6d78-43e4-8cb0-9aa59f8c427e" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">RETENTION</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">42%</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="a2e6cdc1-9e3e-4c77-a94e-76c15ed24758" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">REFUNDS</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">1.2%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="7aa861dc-a74b-4fd6-b27c-fb118100bfc4" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9b5b5e29-7cee-4de1-bd59-91398c584f43" containerType="regular" prevTag="button" type="button" className="px-4 py-2 rounded-md bg-white/10 text-white/90 border border-white/20 hover:bg-white/15" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">Download CSV</span>
                </SortableContainer>
                <SortableContainer dndKitId="a1dc2e7a-0a99-4546-a114-417a5e4f6c3a" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">Export Report</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="a95c2303-49ab-43e4-abef-a1f7e8c19641" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '78%',
        height: '42%',
        left: '16%',
        top: '8%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d50c77ec-93ab-4c24-9e01-03985f11536c" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="d6076d64-276e-4c54-b3cc-1c0c38cc26c2" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="c56279c6-fc7d-4cd0-bb69-3e3fc4a6baaf" containerType="regular" prevTag="div" className="h-[70%] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs text-white/70" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">team board ph</span>
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="048c06e0-b8a5-4485-8c57-28549f245e9f" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        width: '32%',
        height: '74%',
        left: '0%',
        top: '6%',
        transform: transformFor('phone-preview'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6c64d723-cfdc-4912-996c-46eaceb52674" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-800 border border-white/10 p-3" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <div className="absolute inset-x-10 -top-1 h-4 rounded-b-xl bg-black/50" aria-hidden="true" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <SortableContainer dndKitId="b2773b9a-5186-4ce1-9ae5-cd91eb0e411d" containerType="regular" prevTag="div" className="w-full h-full rounded-[22px] overflow-hidden bg-black/60" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="5a2bb474-8d32-4f82-8430-792346ec28a8" containerType="regular" prevTag="div" className="w-full h-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <p className="text-[11px] text-white/90" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">mobile prev ph</span>
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="b1fb3ac3-5b40-4157-b4a9-5b3ce739d844" containerType="regular" prevTag="div" className="w-full h-1/2 p-3 bg-black/40 flex items-center justify-center" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <p className="text-[10px] text-white/60" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">content removed</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        <style data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
          }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="f193c6ab-a1c3-4e08-a1bb-32321cc88aae" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="6490440d-4422-473d-96b9-091949b124b3" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="6fdde220-ff43-4f52-9e9d-0c614b695a7a" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="45343a1a-4c7a-4954-bbd7-057c22478117" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="6f525b20-e628-4f60-9b67-669e7f1fd0d6" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="237487c3-f50b-4fac-9079-c75e1116e276" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.75 0.14 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-10px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="990bb169-9f50-46ee-b7e4-fe7028a224eb" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="53b6b420-8b12-451c-abeb-aa01fc9dca8c" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="c77ee87d-4b7a-4051-9218-1c920ab426bd" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="4e8a447b-5cd4-4c91-b785-e7af635b6ba1" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="f01be4e7-73d0-4f50-98b2-f2b093122c66" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="43999f29-9bba-4753-9d77-99832a246bab" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="34c577a4-a332-45f0-8a57-55f6551e08cb" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ead23edb-615f-4d01-bf92-c2a7f900b15d" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? 'default' : dotContent[activeDot].id} data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 0 ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : activeDot === 1 ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : activeDot === 2 ? 'Stream with BreakDance overlays and get instant promotion in our Live Breaks directory' : ''}</span>
              </p>
              <SortableContainer dndKitId="9f3d8e6b-b9cd-44fb-935a-fcb7d6bc341e" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="57fc22a4-5866-43ae-9349-3fda1b515743" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="2281ca20-bf70-4c0c-9644-7652edff17ca" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="56c2c1f8-e324-4cd5-b6a5-ac1cd4b0485b" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="e70589bc-a2b2-437a-b0b9-b8bb3c8cc776" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="885e1c27-38de-41b9-b610-d914ac03ea69" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="29a280c3-95a0-4e71-afc7-6e2eede0d4d7" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="505aa2f2-b968-4d38-808e-4968c5b3240e" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0e69c3c2-2536-4f61-97e3-d8d9dc2d557e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e2b260fa-4069-4624-b79f-f2de13953683" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="d30bcef2-65de-40ae-b96f-9f8e93525385" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="54f8c0d5-1b13-4516-8a39-78b77f1c034d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5c38dbef-2b52-4ae5-a661-2506325c0f64" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="6730d247-84ab-4cfa-89fe-04ed4b455fc5" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="756f4e38-bbf7-44f4-9d42-dca36128f31b" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="4d23d0fc-a2aa-440d-91ec-9c44579e2a3b" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="b77a078c-6ebc-42aa-a11d-10011e47455c" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="04a821cd-0519-4428-bee3-ff7fc0a36d17" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="2b62e518-7d70-4c7b-93ed-203aea783ca2" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="5abf7b17-fde5-4028-a82f-87ad569c524b" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="7f3bb451-c75f-4226-a267-2d6ea6b4f679" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="af058f0d-7028-43df-974c-bcd6d00ad26a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5e7f3c12-a344-4254-b44f-c5b2a5565197" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="69c4d7cd-bfcd-4a98-8b45-af51023fa670" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="3ba7266b-7196-46f7-a13e-11e6509536bf" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="4d4243e0-9324-4179-8be1-f42ef92349e4" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="0846361a-0a28-42f8-9667-e6e9fe0a85d8" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="e6cf8fe5-88e2-4b57-8604-9b46926baf2d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="ff06362d-fc1b-4554-af3c-fbd29de23bf8" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="5bee4212-b9f5-4db1-b53d-1a7f48c771c1" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b360259c-1ef1-4256-b59c-da08b4e8ec0e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="7a00d07e-7e8e-49c5-8d2e-cf32a280fd12" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="a6e357c9-bc4a-4a9b-823e-ebdad6757633" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3fa403fd-521b-411e-bcd0-b4a579cf3a35" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="ef1b1dcd-01c4-4493-b60a-8d213e268421" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="016f70b9-1ba5-4caa-a9e4-114abdcb0d10" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="35f88c0e-22d3-4c53-823f-50c2d17047a5" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="da958da9-39b5-45d5-b604-46beb1eb78f9" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a65c08bc-7993-4706-ba31-69f09d2ffb9f" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="b57c3b3b-a290-4a72-9b21-fb9913ee86f4" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="fdd40ed4-f73c-40b6-8bb4-25337ea43e84" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="84a1366e-c73e-498e-ba2e-c334a60aafa4" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="92dd4e15-9a9c-436b-bf11-affd498de9e4" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="e73a3253-504b-4d70-b313-cdfead3da2d8" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a22186f2-0a71-45c2-8632-f0d39d9cf046" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="051ba439-ec25-4660-a048-76bdbe3c16c7" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="6573187d-3444-4f8f-b80f-159323f55e35" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="856fef19-e6d0-4397-8fb0-810c912f2d73" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="925feffa-bfed-4168-a53c-68d58bc8d476" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a4c460dc-ff32-4f59-b8d1-527967515546" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="97d458ef-2acd-46b8-a4e4-b7420a09c9ca" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="53b2338d-5cbf-4e9c-91ff-15e94be8a3e8" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="aa19bdc0-dbf4-497f-972e-d22bd56e0144" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="ed15a227-af32-4b1d-8445-edd609342551" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d733fba6-0112-4b78-a222-d600844dc1dc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="dc512e8f-91dc-4cdb-8e57-c2474aa47d8b" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="64798276-a11b-4d70-a03c-5b47dbcbaa87" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="2d4ea3d6-2173-452a-8271-016d6caad055" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="ee800d55-9483-4e0c-8ce9-b228844ebd26" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="7c5ff3e7-8cde-4e37-9782-2fc23b58ab6e" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="69c75110-c6cf-4da4-bbe9-195003aa6b63" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="87195096-9dab-4f7d-ba4d-27b4e95fb17f" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="15ac326b-28aa-41c8-bd03-0e85d43723cc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="be3c41af-8717-4897-b0c5-d490c32b98da" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="47c01f74-b472-4cca-91e6-ea24a5014616" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="a10fbfe8-c5f7-49b5-915d-567aa372b891" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5c0d76c4-b3d8-4fe5-a0b1-0d318150c5e4" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="4069f240-f92f-49bd-bf16-3f10decce236" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="239fa583-9492-425e-838e-57365e92e28a" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="6e0d0690-c1fa-4b17-b4de-a07d60c69af6" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="6f774e04-e6d0-42f1-a70d-d513dbe3dc74" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="ef514ed1-584d-435a-9940-9b0a0dc4d2df" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="67bb1bc2-423b-430b-a10d-8286794c6bab" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="a2d8af09-3c90-4f6a-9264-c26e5032f7d9" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="04cf0e34-da60-4a42-b40d-2de5e9fffb07" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="c8fb8f5e-c9bd-4c16-b206-df9f8a70a241" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="e2d8460d-0e17-4764-b76a-486a29acc716" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="db7e78ba-6a58-46ef-a001-17a7ebfc81a3" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="810cbc90-93bb-4266-8919-f2fd399abcc2" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="4fe09210-0202-4747-bae2-1bb3a0c54a58" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="44cd4764-fd1c-4a87-bf6d-33c78951cc6f" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="83b4a46c-8a2a-4da7-a650-41262e037e05" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="c0a95aa9-f0b9-4d99-918a-dfadc0a83a56" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="40a2c59d-e6a2-4e9c-a938-a6e06649c294" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="21934ec3-cdd1-4ebe-bbfa-591c6c5fd2bd" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="24cd99d2-82ca-4fcd-b3f7-a1113e0ce319" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="d9fba9ad-76b7-42f6-909d-18be44ff8881" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="352" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="353" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="efe41560-1e8e-4e16-91c5-7a77f01744f8" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="354" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ad9a7013-e871-41a6-9f4f-c02c5d86e73a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="dd3b841d-6b9c-4bfe-b9f7-cd64eb01295a" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c4c647c3-9675-4abc-acf8-ccd04c5e87f1" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="2ed36939-9e48-44e0-8aaf-aba114379acc" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="360" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="361" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="362" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="363" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="364" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};