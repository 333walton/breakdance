import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "fd766f16-cd50-44b3-bc79-f79333124561"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "621f3771-389a-4dd1-a395-23b4f1eaba42"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "93742732-d3fb-4a29-944a-8efd8a9666cc"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "ef9e81be-4237-4fe6-af19-37e9c60c160b"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "f9632e26-d871-4c25-828c-b5d7fa6275f7"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "0ec63023-a904-4de8-a453-a683f69d90a6"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "87f89f66-8d2a-4fb1-b7ad-c3f720fe7543"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "53970ef3-d4d9-4e40-8aaa-06ea89a23490"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "f12ef7ad-ebb8-4806-ae78-16fde76b2fbe"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "1030bdf7-a705-42e2-aa53-1ee3c1af28fa"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "fef3880c-0e2f-4ef2-a111-76ebba671bd9"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "382c44ab-ea66-4164-8c44-736e20087350"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "ce5aab2c-63db-4e65-b4bc-9d07fd15e8e0"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "d44d546a-c10e-4f1c-a245-547613b9cd49"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "f1412780-9408-4933-bb2f-e090fcdec19a"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "50e9b3dd-c15a-492e-9d67-004f805ce926"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "17a34898-4471-4c2d-bd6d-dbbce9c6906c"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "ee07cdab-2e8f-420d-a931-61cd00240f36"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "4c3708f6-2ad5-4515-bb3c-62b08d9f2bfd"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "97dfaf22-bc2a-488e-a363-7e64b97fe773"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "20ef1a20-3749-4a5b-998a-d2167e41daa3"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "489efce2-895a-4ee7-855c-b03be2df3f32"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "572cbf4c-f5bc-450c-b398-88f9c889ce69"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "d80e8102-f051-4965-bcd0-34b56e4665d1"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "9638aba2-d974-4b7b-ab0d-e494b804eb07"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "4bb07ad3-e34c-49e5-b0ae-0c62841317cc"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "800e9b20-34b0-440d-874b-6a9b29e31d69"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "fc5458a2-7095-401e-ac15-896ab92ea04e"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "881a2359-3630-4593-a015-6a56d79f1c24"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "6c72a41d-a846-44c9-9ba4-5b156dc54cbe"
}, {
  label: 'Tools',
  mpid: "2a06c51b-4522-4aea-99ac-427a1b3f4514"
}, {
  label: 'How It Works',
  mpid: "b28e4657-f698-42b5-8193-ca779cb3c97f"
}, {
  label: 'Demo',
  mpid: "1e06c8a2-c273-4e82-9c8c-ca966b6a7520"
}, {
  label: 'Live Breaks',
  mpid: "0596dbca-de4b-4ddd-b14a-973842c2b915"
}, {
  label: 'Shop',
  mpid: "afcc05a0-2553-4f35-aa9b-d813c73f4eac"
}, {
  label: 'About',
  mpid: "ad3c9d61-1a7a-4105-b7ba-c1daf21c78fe"
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
    mpid: "7eeb84e3-d714-4e7e-96d0-92418bae94c6"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "3615e042-88ec-4d8d-a7bc-24255df52993"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "a9008762-c137-4771-8db9-39e4952bda29"
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
      mpid: "29ed9868-935d-4d36-b991-7dd822274d6d"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "41197698-d61f-4f52-a5e5-a6b1fe0f4727"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "9423e658-ecee-4323-9ea7-067de0b88966"
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
    return <SortableContainer dndKitId="326c2905-1e1e-4fbc-b223-8bb1237c5481" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="85eb1644-e147-4435-a66a-bf53dab959db" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '94%',
        height: '64%',
        left: '3%',
        top: '18%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8996290a-0c1d-410b-ad9c-f978fdfe2ad0" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="37c16b92-6753-4fc1-ba7c-3fd4b133b836" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="22cec592-2915-44e4-badc-e1200927be19" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="5851e746-8188-4d1a-9664-8faf6573f218" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="abc76144-5cec-4b45-bb3e-776117edc397" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                <SortableContainer dndKitId="9f63690e-89d6-4aca-96bd-431a145588a4" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

              <SortableContainer dndKitId="f4d5277e-ce9d-4020-ba2f-32622643b150" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h4 className="text-[11px] tracking-widest text-white/70 mb-3" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">PERFORMANCE</span>
                </h4>
                <SortableContainer dndKitId="44da3ef4-096f-4f1c-8615-7a84630b60ce" containerType="regular" prevTag="div" className="w-full h-24 rounded-md bg-gradient-to-r from-white/10 to-white/0 relative overflow-hidden" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-white/10" aria-hidden="true" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <div className="absolute bottom-0 left-0 h-full w-[65%] bg-[#FFC543]/20" aria-hidden="true" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <div className="absolute bottom-0 left-0 h-8 w-[65%] bg-[#FFC543]" aria-hidden="true" data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="86b35cee-97dc-44ec-ad02-d74f7349e6a4" containerType="regular" prevTag="div" className="mt-3 flex items-center justify-between text-[11px] text-white/70" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <p data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">Conversion</span>
                  </p>
                  <p className="text-white" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">3.9%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="7c2feed8-752a-4f80-87e5-6a45c02fb7aa" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="4611566f-52e1-4bad-9aaa-23d05090112b" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">AVG ORDER</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">$19.42</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="9edc4d90-4b75-49e7-be64-23aa55dbfa56" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">RETENTION</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">42%</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="feaa7979-2322-4d9d-872c-ca2fbaf092fc" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">REFUNDS</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">1.2%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="f2792d5d-b022-4b61-bfeb-16be13b940e4" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="1e888fde-4e13-4083-a2ea-d180fd0385d4" containerType="regular" prevTag="button" type="button" className="px-4 py-2 rounded-md bg-white/10 text-white/90 border border-white/20 hover:bg-white/15" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">Download CSV</span>
                </SortableContainer>
                <SortableContainer dndKitId="68e721ee-0885-4666-965b-428783b6fc0d" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">Export Report</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="7fcb6df6-c05e-42bb-bbdf-4cc943921219" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '78%',
        height: '42%',
        left: '16%',
        top: '8%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="632a7116-c01e-41b1-9377-ef782c5500d1" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="6ac5fff4-2c42-46af-a74e-46746b5df19b" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="536cdcb0-9205-4e3e-8c94-1f67ec74cb2a" containerType="regular" prevTag="div" className="h-[70%] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs text-white/70" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">team board ph</span>
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="82c8f1c7-d3e7-410f-87e7-ddf94773f445" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        width: '32%',
        height: '74%',
        left: '0%',
        top: '6%',
        transform: transformFor('phone-preview'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="918ac078-b54f-4af9-b2f1-4169f01a7bad" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-800 border border-white/10 p-3" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <div className="absolute inset-x-10 -top-1 h-4 rounded-b-xl bg-black/50" aria-hidden="true" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <SortableContainer dndKitId="a8de4a8c-3aa2-4187-91eb-d5150c07b5e2" containerType="regular" prevTag="div" className="w-full h-full rounded-[22px] overflow-hidden bg-black/60" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="03bd9f3f-0c85-469e-aca2-bd05c8a2240a" containerType="regular" prevTag="div" className="w-full h-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <p className="text-[11px] text-white/90" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">mobile prev ph</span>
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="92f0e6d6-1f05-49b2-9909-51c783701b1e" containerType="regular" prevTag="div" className="w-full h-1/2 p-3 bg-black/40 flex items-center justify-center" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
  return <SortableContainer dndKitId="a4a46e64-5a75-45ae-90da-2ac37cddb7f7" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="8dd89bc7-ccc1-42bd-837b-b4a94c6ee59e" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="fd6bd739-b3e3-4989-ba51-8c21b236bc4c" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a9336dba-2b16-42b6-980c-fd11189bb498" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="80e587e4-496b-4dbf-b818-33dba536d29c" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="0506d717-3f0c-4a2b-820a-08b920806ea5" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
            <SortableContainer dndKitId="84b9d08c-fe6e-45a6-bc9c-72ffcfa05f33" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="b2e8fcdb-e1eb-4d79-a6f8-76ca1602caa5" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="1e42c851-a86a-4473-9c04-6f59ec0d0d05" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="5d2abd76-5b4e-461f-a5c7-e2c1226f803c" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="ed30e757-25aa-4aac-8337-3a0cd7400996" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="61f39f8d-9b73-4d7b-8911-0aa8293314a7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="333ac161-063e-49ba-b4a9-918449067a4d" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c4e52261-0881-4117-a209-a1f5818411d3" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="8471ce71-dd0c-4313-9d93-3516ca407434" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="a1d5b065-4814-46bf-8752-a30a8eb0fc52" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="345f6e44-cd66-4ba1-8b56-27fb6d7fe779" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="27273004-1d29-4703-806c-470fabd45bba" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="ac96659e-c9e6-4601-b14e-d098178a62c7" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="ee0c297d-0d4a-429d-b6f8-d9ca1d35c315" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="147f0085-e569-4111-85b1-65a3e8c232e9" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
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
      <SortableContainer dndKitId="d6b9d18c-8bd6-4c59-8b84-692ad98943d3" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="eee4c4b8-d067-4e05-96eb-ad4db5ca0a6f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="c8a8b497-044b-4087-9bc7-908f59430a32" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="e7aab42b-8ab1-4de6-890a-7791f774375a" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="841e4357-f240-4224-b7ec-48fd593bb4e8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="469a107b-1030-440f-9bbd-aa68c81ca0c9" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="0099d0e6-47e6-4dfb-b79a-addfe5bc5175" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="8d474269-313c-4eec-a6e9-bc5373477f10" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="fc5a585d-ccc5-4d82-8600-13f7b7314f11" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="f1e9965f-7fbe-42c0-a70e-3ff48ff8a53d" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="17bf537d-0082-4585-8212-e27fcfa18730" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="cb2c42e1-537e-4f2a-95fc-41a67b0ac27e" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="843eb9f1-0c9f-4287-9bd3-df823d485c23" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="e32c8f49-1320-4872-a2e3-c9f60da51e6c" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="97736ffb-b671-4f64-8cbe-029b6680f6f5" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="9335beab-958d-42d1-b8ae-dcf43d50e98f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="687b4c12-e559-41e1-8d6a-45eda1a2a4ef" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="89ec57c2-5705-487f-b6c9-a7d793c445ca" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="9a7690f4-d46c-4d3d-9d83-a9efd3e3e697" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="439f93ed-bc4b-40c1-9fc5-c4e364113a09" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a3b69eb0-bd10-4f2e-822f-178c30ca1c79" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="e447ce7d-7484-46cc-9b40-84db46d47907" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="49a44cfa-fad9-4260-8e79-b7868954a4d6" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="570e5254-e39f-42b5-947b-4e6d3a86ad0d" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="460657d3-c3c6-46bb-8861-ec180528a5b7" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="ff290274-b62f-4372-bbd1-55afe9d548a0" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="e3328213-d5f8-46e8-83f9-e0e9c4cc1b43" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="5cd7cf75-93c4-4693-8e1b-786cbfe8fcd2" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="5f4fab7c-ec8a-403e-bc39-302a5546b645" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="084ae130-869b-44ff-9256-650c938d5746" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="52c36863-9fe7-4bc9-9fc1-8d8187964556" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="28009970-ff36-4cad-9f81-01d6e1277c38" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="7ebcd5fd-a582-43cd-ad57-767da73057b3" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="473b554b-bd19-4653-ae6b-5c0dd1eb21c6" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="12e1d3fe-2929-4e7d-bc57-227196334ecd" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="6157132a-1f31-4748-9e95-85e20b835cee" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="cccf0ad0-310b-4d85-8d74-9b806d8d7c56" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="7e9c4c1c-463d-4338-a8f5-cdeef698de58" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="681361ed-ccde-49e1-9c69-1179e9d30111" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="2de4a583-e0f4-4948-8355-e097bc795b7e" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="2021a6fd-b67b-4552-93f8-ffc2f525d5e3" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="66a5754d-82e6-4dc8-a6bc-b64239aea054" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="9b367b61-980a-41da-a327-f14bf0ab3c3a" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f4fc0d17-82f6-4ecc-9ffb-d3af0058e525" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="1da2d303-8773-4bbd-9542-51af1d1f39b1" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="761b5c08-f010-4058-b882-cf5c4f8773c1" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="7fc9988f-075d-4777-b034-191b1ba8c19d" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b81bc380-bc57-4ed6-b76f-6e87112425c7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6b135cf5-d598-42b0-a87e-dd5a0e4c3a8b" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="5e8c5984-2e36-4a69-8424-8233ced54d5a" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="304a2066-35c1-4d8f-b3b3-433bf54a8838" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="05cce808-c66a-42ee-9cb5-e6def6e90910" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="18a3f324-2570-4b68-9f1e-d845a079f2b1" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="a61e6859-23a6-4a67-a949-47d26101a775" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="daad4d20-a991-473d-a033-5dec0672bc1e" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f975c634-921d-438b-ac87-18c14661078d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="92b3f837-79dc-4ef0-9069-db18ea3139bd" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
          
          <SortableContainer dndKitId="f2e6035a-fa4a-442b-878e-fe1f6f6c28a9" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="96b03ba5-6779-4084-a628-204cad803f7f" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="100ccf2e-a613-4904-948f-f2d36805a469" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="1b10e3f7-fa3d-4371-a8fe-f5906cac2fe0" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="fd49dfd6-d66b-4420-a722-8e3a3d8e902d" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="b6bc96d7-300a-4300-b088-148e444a6829" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="0ee2c7ee-2777-4317-95f6-908b4e4f7255" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="0de81d01-6389-4055-bd3f-7134952dade5" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="3b97c8ed-5d46-4572-99a8-b43e852462bb" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="99c6950a-5dff-4f96-87a7-09bf9ecdc90a" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="9412f6e2-2c15-47fe-b234-c1e0612ce916" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="aa13bbe4-6478-48b2-a4e1-1f8b2830265f" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="09d2f0de-d936-4810-8add-a2bd2ad16562" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="77f5c418-443e-41f3-982f-a41c167c7890" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="23ec0cb6-1e6a-49eb-a154-272a82eb70f9" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="48f43d27-2a3b-4246-8239-b758bc36fb92" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
              <SortableContainer dndKitId="2225d89d-34aa-4697-8ccb-068a63e82b9e" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="6922c299-6237-401b-96ab-55e26bf629e0" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5b20c3aa-d2b5-4347-864d-bf68ed04d7bc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="9745bf03-de29-4f6d-844f-14b53e460af6" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="106ff478-b89e-48c7-bb29-f6af1571452a" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="0cae29f5-ccf6-4dc3-9215-02a30d7ec368" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="ef0f7661-d391-4ccd-8527-86f189686b0a" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
      <SortableContainer dndKitId="a59efbcd-ae6c-4074-a517-815198dcaf03" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="354" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="cd214a0d-b241-47a8-bf68-b911ce3fb761" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="b6a3fd29-7953-4875-9e7b-1ff807d8c7dc" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="cbde9f33-1d7c-437e-a0ce-ccb17487d604" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="776c2265-096d-43d9-8ff1-49fb96d09aa6" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="360" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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