import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "3c046b8a-5916-44ca-ac46-777e7cbce6d0"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "79d9bed0-7ada-43b0-902b-a02ca7cbe164"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "7bc86493-ecf3-4f01-99bf-60b0fb42bff7"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "46e35616-9b93-4961-aed2-141776b90380"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "9dbc131d-18bf-40ab-9ab5-da23de1ccae3"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "e52a9cd0-9518-42bf-aca3-2ffaf62ac9cb"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "b6217a4a-a8ef-4d38-9336-81cd79158374"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "edf7a228-1ff6-480a-a6fe-cf92463934bd"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "d05db0be-7e19-4174-9dc4-89348d246abe"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "197199fa-f0a9-4881-88f3-2617762780a3"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "fe5a416e-88bf-4e0d-800f-fb9dbefe543c"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "5a2ff5ce-3977-4e92-9542-dee616c006df"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "70e7fb78-6f78-47cc-bc85-ddb0c08b1619"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "887f5a49-7c6b-4597-9a07-54f10b099ac8"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "d19ded87-f613-4d24-9172-a2ba3dea0c32"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "738e56ad-163d-42b0-84d3-33a901dc6074"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "309a797a-5427-44b9-8882-463bb6c92313"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "cdbfa45b-db47-4378-8a14-1bda0c2b9c4d"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "425c256e-9313-42b5-bcaf-029fd4f4281f"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "33b0521d-4d3d-47ad-a467-7a952489e618"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "8eaeea7c-2ca4-4104-89d7-b234633fbf02"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "111a9027-1ea9-432a-8723-f793af02b376"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "b492c26f-ee50-4eb5-b2dd-7f5f6e7e7ef8"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "ca6e402b-af4a-4175-a6bb-96222670c0c9"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "1e473ef6-ec06-41b2-9e93-b58dfd49d702"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "a32ac4d2-6b39-48d1-9862-42698433869c"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "a4681515-8baf-4497-810a-0e429837916c"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "34fb081c-b283-4feb-b9cc-4bc960cc266b"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "0066d1c6-76c9-414d-bdb8-2c35a151afd1"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "75445096-171e-4f06-8d7f-d80ce2729f10"
}, {
  label: 'Tools',
  mpid: "73858bf6-8b79-4753-95c9-236746c5f652"
}, {
  label: 'How It Works',
  mpid: "515c8c30-5c7d-483f-9f24-5ed7af0019d6"
}, {
  label: 'Demo',
  mpid: "7e2de3e0-bd5b-4091-a0d3-37e5cb7a0371"
}, {
  label: 'Live Breaks',
  mpid: "8af0d575-6772-4b2f-a1bb-6e572b9b48e9"
}, {
  label: 'Shop',
  mpid: "3232b02a-c998-40a0-9955-d87c123a0e12"
}, {
  label: 'About',
  mpid: "5d56e22c-0d7a-4343-8c7f-12561f60710b"
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
    mpid: "e285dd35-5bda-477d-8c93-ae88b1bb365a"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "eea71801-e097-4758-a567-a2141e5797c8"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "4f115325-9320-40ea-893a-2b74d373cdef"
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
      mpid: "a0aa8a9e-c543-4e31-999c-df44cfb861df"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "ca08dc76-f618-4938-aa7c-3989856ce279"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "a51cd313-cba1-4eef-805e-ae1e75dfd234"
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
    return <SortableContainer dndKitId="b1860908-b074-40fb-8cad-d97d0c98c1b7" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="d12cf22b-b13d-4297-9680-1d8579bdad5d" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: 10,
        width: '85%',
        height: '74%',
        left: '9%',
        top: '7%',
        transform: 'translate(0%, 6%) scale(0.98)',
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="edd08140-18c0-414e-ab09-40c37f38b383" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="9b6cc4ac-5164-47f4-b182-96cf77f70792" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="0c8a3522-a2e1-471c-8eba-db7a3732b4b2" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-h-full overflow-hidden" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="14d8a89f-b8e1-4bb6-9e7e-4566f3c943c0" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="a4b215a1-23f3-407c-a5cd-ece3d3957a7f" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                <SortableContainer dndKitId="6bb5f421-feba-4e78-98d9-a4938f23d055" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

              <SortableContainer dndKitId="5c5fb003-e2c4-49bc-a795-c61d54b09e6d" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h4 className="text-[11px] tracking-widest text-white/70 mb-3" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">PERFORMANCE</span>
                </h4>
                <SortableContainer dndKitId="ece56609-8b34-4e8e-89b1-6f8252b1db56" containerType="regular" prevTag="div" className="w-full h-24 rounded-md bg-gradient-to-r from-white/10 to-white/0 relative overflow-hidden" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-white/10" aria-hidden="true" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="656a8170-2585-42cc-8e95-a1d25af83820" containerType="regular" prevTag="div" className="mt-3 flex items-center justify-between text-[11px] text-white/70" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <p data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Conversion</span>
                  </p>
                  <p className="text-white" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">3.9%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="5ff31e5b-da8b-406b-850f-fdc9614805e6" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="8826f022-41ac-4ac6-a21d-010ced9b87a2" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">AVG ORDER</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">$19.42</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="9b0b2f5d-a348-419d-895c-485a3548441f" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">RETENTION</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">42%</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="112cbeeb-59e4-4823-979d-91ca9f209430" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">REFUNDS</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">1.2%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="366d1dd3-4aa6-4afd-a3f2-378fb309e1c4" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="e04f69f8-964e-4132-b0d6-9e1177f8cb34" containerType="regular" prevTag="button" type="button" className="px-4 py-2 rounded-md bg-white/10 text-white/90 border border-white/20 hover:bg-white/15" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">Download CSV</span>
                </SortableContainer>
                <SortableContainer dndKitId="0904f944-3559-49f3-80ef-bfb0733c01c2" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">Export Report</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="0d13cfe0-156b-40e7-8433-41d432c712c1" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: 20,
        width: '92%',
        height: '58%',
        left: '16%',
        top: '20%',
        transform: 'translate(4%, -2%) scale(0.7)',
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <div className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)]" aria-hidden="true" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="c77b6fc7-9b0e-4864-9857-c10c74c2a2e2" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: 30,
        left: '3%',
        top: '17%',
        transform: 'translate(-6%, -6%) scale(.7)',
        transformStyle: 'preserve-3d',
        width: '36%',
        height: '72%'
      }} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="9aba15cd-fe62-4ce2-aaa3-1c2c9543b5d3" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[14px] bg-black border border-white/20 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* iPhone top dynamic island / notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 border border-white/10" aria-hidden="true" data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            {/* side buttons (decorative) */}
            <span className="absolute left-0 top-[18%] -translate-x-1/2 h-10 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <span className="absolute right-0 top-[26%] translate-x-1/2 h-6 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <span className="absolute right-0 top-[36%] translate-x-1/2 h-14 w-0.5 rounded bg-white/20" aria-hidden="true" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            {/* screen */}
            <div className="w-full h-full rounded-[22px] bg-black" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>

        <style data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
          }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="75026cc2-2563-4277-97c6-c5062ca62b43" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="cffbb52d-3403-460a-ac68-39e1c2333848" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3a4d60dd-10eb-4673-b7b9-d4b9fcec1e1e" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a21e950a-34b1-4679-91d6-0d4a9c8de84c" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="c301d1fc-c902-4f16-876d-ab81386bded6" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="ccf4a75f-19f3-44b5-9c32-0880e6e1309b" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.75 0.14 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-10px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="d1ff471f-3c45-4fe4-9efb-04ee65bed9e5" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="ae529aeb-f227-4b3e-98da-af99cf2a5507" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="6a7c19a0-5f0f-4121-bf93-65f17ed029b5" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="838a1741-f8c7-4b46-b986-a69d594e0048" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="a84a02f7-ab48-43ef-a800-15ad8e726670" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="06961600-87a7-44af-95eb-c22b70fe8406" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="6b4c031a-c329-42b6-8af7-b4065d4a1dd8" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="9edba52c-b4d9-4b37-a828-9f73a518086b" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? 'default' : dotContent[activeDot].id} data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 0 ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : activeDot === 1 ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : activeDot === 2 ? 'Stream with BreakDance overlays and get instant promotion in our Live Breaks directory' : ''}</span>
              </p>
              <SortableContainer dndKitId="8638905a-4aef-42eb-8439-6a5d662d7e36" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="896a8253-a77d-457b-a755-c2496ad34b7d" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="cd0cb70d-68b5-477c-8bc7-7dea4c566427" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="1df69b65-b46c-43d4-a623-ce6314329f3f" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="991bb3e5-92c5-4232-9318-b9615dac8a81" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="1da5f217-0e3a-4c7d-8639-9cf03d391732" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b67c8d5e-58d7-4c9b-b257-5fc1414129ee" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="668b9bdc-9755-46cb-ba43-efe5ac6e15b7" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="51655489-31d6-4d4e-b9e0-37d6779f9256" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="dc5c883d-4dc2-4695-9ab2-6718a3e9c263" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="b938887b-4bf4-4ba1-9bc5-3cf182557c5b" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="eca942d8-c6c7-41ef-af0e-39225e53c74e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0c5b5b14-fff3-43f7-9555-31db13a55bcf" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="4709d58b-af79-489b-a3fc-bd251d262c16" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="6085e279-d9fa-4a10-8a86-6d88bb1fd63d" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="2e68f4a4-216d-43d3-84af-e52145463455" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="1be731e6-5a03-4046-b832-81ebca61f7b5" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="320f03df-d993-446d-bced-a9d1a55462f4" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c912637e-bd0e-4d18-a777-249cbb90bb38" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b3423918-f267-4cda-9034-bafdb006d8a2" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="c43bebe7-ebca-4dd3-8d26-260e0ebba132" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium FlyIn' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="928adaaf-dafc-4fbc-a88b-4763adbc7810" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d1e4a85b-4452-4887-9e95-63c253d3077c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="08568459-e9ea-4c6d-a139-ac1446562976" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="74550c2f-5f28-4a6c-896b-8a6546a5dab6" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="b095a4df-6841-422b-b4f3-5f89baca3e8a" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="2fa4c20c-cc78-484f-9a28-798303433f34" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="1c9c8c4c-1c43-4fcb-b4f9-c75d7eb60eee" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="54558185-c24f-498b-a137-a1a87b451856" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="9238c05f-6aec-48a4-a3fb-e305d07f8800" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="6d82617e-1172-42fd-9b69-6695aab82585" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="37cfae40-e9f3-4952-9cdf-d346a321dbad" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="2c94ef3e-0e28-4b62-95d2-ebae8b3d29bc" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="40a83cf4-3c59-4bd7-bc05-85348ef747b8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="167af46b-3cfc-42f3-b9c6-6bd43f78c94f" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="15597a38-9cc3-41c8-9505-40f56ec2546c" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="7e14b010-683a-4a70-b468-63801c51e30e" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="ece3b30e-149e-46d0-b908-7cf853901eb1" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="78cbdcb3-9c46-40af-a813-d1d1033caa58" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="22d8a7f1-10a6-459d-b3f8-1114dd57b7b0" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="c5d41668-7098-47cd-85aa-32edca06fdd4" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="eca45db6-df8d-407f-a12b-cbcf3d3faf43" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="8bf74c1f-47c1-43a1-a35c-e9d81f77d192" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="6d1309b6-1d43-4406-96fe-107b75eefd59" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="ce6f3a9e-fac4-41d5-a27d-bc5d01b56503" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="c3be388e-b8c2-4932-a454-24efe4757720" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="b8c43631-8a55-46ab-a9d8-f4015433971e" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="66a9b01a-ff5b-4666-b1f0-ba3d2625194b" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="4d63faf4-2da1-48dd-bf5a-525d50e8ca93" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="bced16a3-3d87-4a79-9637-d2f9bf3f3926" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="9fb0e856-f6be-453b-9174-7d31fd6c4f7b" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="07b1c398-b9b3-4c89-b1ab-06e4928dd843" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="c511055b-3cb8-44c2-af53-cb8caa6f5f72" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="593a9c5f-4494-49ab-8b48-511fb3425acf" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="90b5c093-7a60-4e25-95ac-d78bcc78f2cf" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8f5d424d-912b-4f16-82c1-57fa4e53b440" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b3c1a099-8836-4b99-9342-56a75b2d6021" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="88bc853c-3224-4213-a392-72f6214acf4e" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="68b26fc9-a3b5-4216-862b-e15be4c77a29" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="629d22cc-9e1a-4de2-a555-cd5a5be4ec44" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="5fb4c986-f172-4681-b17b-d70328328a18" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="94630070-a151-4046-855f-47db4a7f3bdb" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="556c92ee-fc35-42ac-b5eb-cf1d059a48bf" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="60d11be8-85b9-466b-ab1a-d0bf67d698d4" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="d3dc2bf5-bb90-4837-807a-ce0c9a2a9d09" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="6a7c89d2-5042-43c3-8297-f075b6ab2f9b" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="200627e2-8f86-4a38-b75d-15ecfc59885f" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="1a109763-6be5-4843-af2c-8925b9ce0013" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c23e94ac-a926-4204-a375-9a7ba354ddb6" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="6a9d4a57-71e9-4b7e-ba0d-5b4c58f16622" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="91646f8a-447d-40e3-b91a-9ac8ee8127b4" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="a502afdc-aeb5-4f5d-8f3e-17c7df4aadff" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="21c67944-315f-415b-9b68-0dfd0e0c4c2d" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="08498b92-ec4d-4280-8c71-d97336f531b1" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="a51075ec-22b0-4213-a5af-c9f1be150ffe" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="5da1a81f-6cde-4a8a-b87a-f684e4ef0e92" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="e7927c48-cccd-49e6-9a67-253403b079aa" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="5225cbbe-916e-4876-929e-2399de7d44c7" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="631cdbe5-717f-413a-8daa-7915c1f91268" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="f5ff0d55-bf2f-42d3-a6a9-305193f8d8a5" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="a693f00d-48ad-4a22-b905-b48ea5b468e1" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="52286dea-b2c7-473e-bf4b-44a8e38e4439" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5c6ab5f0-12f2-4ebd-9e6b-b6388b478429" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="40baba17-c358-4e4a-bae1-13bcd7449514" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="1e2cbe5d-b7cd-4f36-b09f-05ed4d9bbd32" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="11aac663-52fb-40f9-9005-db8cd7a0f1c4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="dfe23038-2787-42c1-b193-032e0852a9c4" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="e731cfc9-4d89-45d1-bfb6-b79903510854" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5501b709-8661-49d4-a79e-bf303eef8eaf" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="cc6dc643-0ae0-4f7a-a3b7-51d0f9ebd1a0" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c180c688-4e59-4b43-97c4-567e5a72e1e6" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="2805a142-8a68-40e4-b76e-8be3e3d80768" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};