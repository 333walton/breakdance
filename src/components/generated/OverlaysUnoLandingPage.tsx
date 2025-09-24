import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart, Target, Palette, Copy } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse Overlays',
  active: true,
  mpid: "7b6762a4-27b9-4814-adb1-7898eb8b797c"
}, {
  name: 'Browse Tools',
  active: false,
  mpid: "fe99ae25-057a-4853-a997-102934c8d7b8"
}] as any[];
const sportsOverlays = [{
  name: 'LPF Argentina Stadium Fly In',
  aspect: '16:9',
  mpid: "83b75105-f8ed-4a22-b643-6507a3292cec"
}, {
  name: 'Basketball Stats Overlay',
  aspect: '16:9',
  mpid: "6248346b-3003-4a06-a728-45d89e8deb52"
}, {
  name: 'Football Scoreboard Pro',
  aspect: '16:9',
  mpid: "830baa6d-64fa-414e-89b4-5719dd02ba20"
}, {
  name: 'Tennis Match Display',
  aspect: '16:9',
  mpid: "0747ab59-d443-4faf-a749-8bdf47852b02"
}, {
  name: 'Baseball Diamond View',
  aspect: '16:9',
  mpid: "8d050005-0d97-48ea-9a27-c4ee395fc1b6"
}, {
  name: 'Hockey Rink Layout',
  aspect: '16:9',
  mpid: "f5839bd1-50c1-4705-98cc-e8bc44b40ddc"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Combat HUD',
  aspect: '16:9',
  mpid: "156dee82-ab59-4019-98f4-5f0df6a84628"
}, {
  name: 'RPG Interface Pro',
  aspect: '16:9',
  mpid: "4c007372-3795-47d0-be61-fb922a8983c1"
}, {
  name: 'Racing Dashboard',
  aspect: '16:9',
  mpid: "1f3d8611-facb-4508-a19b-7ea9ab3ebd55"
}, {
  name: 'Strategy Command',
  aspect: '16:9',
  mpid: "df7c6273-1d3c-4b50-b420-f5b52e8e1411"
}, {
  name: 'Battle Royale UI',
  aspect: '16:9',
  mpid: "3d630b49-e444-465f-8c84-e3a5e818642a"
}, {
  name: 'Retro Arcade Style',
  aspect: '16:9',
  mpid: "72c95b1b-2e6c-4e09-a03d-415a6f1251ba"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Professional',
  aspect: '16:9',
  mpid: "5ecfdf6e-09c1-4f61-b2d1-d0cc94c46227"
}, {
  name: 'Interview Setup Clean',
  aspect: '16:9',
  mpid: "6f0d3f8e-b33f-4f6d-b4e9-e2c0047ad76b"
}, {
  name: 'News Broadcast Modern',
  aspect: '16:9',
  mpid: "677f8ea6-bb79-4367-a870-7330da0a657c"
}, {
  name: 'Panel Discussion Layout',
  aspect: '16:9',
  mpid: "1ae805d8-0ce8-49a6-b663-177f4e0e69af"
}, {
  name: 'Solo Cast Minimal',
  aspect: '16:9',
  mpid: "a3ef5be7-770e-41e2-9ca1-f8a28c86343d"
}, {
  name: 'Live Q&A Interactive',
  aspect: '16:9',
  mpid: "0d859cf9-e4e4-46bb-80fd-0c7c5fc8d9fe"
}] as any[];
const howItWorksSteps = [{
  icon: Target,
  title: 'Pick one you like',
  description: 'Browse and select from our professional overlay library with hundreds of options',
  mpid: "775c5031-7e5c-49b5-a4a5-f7d822afa4a1"
}, {
  icon: Palette,
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more with our intuitive editor',
  mpid: "d79bca61-d656-4367-82b9-d1ebbc3f3520"
}, {
  icon: Copy,
  title: 'Copy and paste link',
  description: 'Simply copy the generated link and paste it into your streaming software',
  mpid: "31af6ec3-be75-4743-98b7-44aac6114774"
}] as any[];
const stats = [{
  number: '9.5M',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "35225559-dc3f-411a-9bd8-2a1f080ca340"
}, {
  number: '332K',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "c6a61699-ce3e-4fee-ba5f-49be455d8a94"
}, {
  number: '265K',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "92139dd8-6d20-4554-a7ab-825f101f4a58"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community of creators',
  buttonText: 'Join Community',
  color: 'bg-indigo-600',
  mpid: "69b60992-c763-4ca9-9118-3c4c4c76ba4e"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials and tips',
  buttonText: 'Subscribe Now',
  color: 'bg-red-600',
  mpid: "62a22cd8-db76-47eb-934a-0cdc0d2297a6"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development and growth',
  buttonText: 'Support Us',
  color: 'bg-pink-600',
  mpid: "e96f0825-5473-40f4-abd5-88f0eca1bcfc"
}] as any[];
const navigationItems = [{
  label: 'Library',
  mpid: "5106bbe3-0a92-4a2f-8390-177ff141c5db"
}, {
  label: 'Tools',
  mpid: "6190d221-77ae-4084-ab7b-b0920c3a517b"
}, {
  label: 'How It Works',
  mpid: "0b5b4123-c4b2-4065-8e68-b2eb852b3a7b"
}, {
  label: 'Demo',
  mpid: "fc397348-2cec-4a11-8e53-cc862ef850c0"
}, {
  label: 'Live Breaks',
  mpid: "7200a5f2-ca41-412b-949a-55cd127c99af"
}, {
  label: 'Shop',
  mpid: "a689e0a2-357d-44d4-857a-0efd874b9441"
}, {
  label: 'About',
  mpid: "76bde2d6-1e09-4b8f-bab5-01896c1fe773"
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
    mpid: "dadf98df-f543-49ef-869d-a996a009c3a5"
  }, {
    id: 'dot-2',
    title: 'Tools built for success',
    hook: 'Craft faster, launch smarter—every tool tuned for creators to win.',
    preview: {
      label: 'tools preview'
    },
    mpid: "13b9732f-4376-4d6c-802f-f0b62a837e78"
  }, {
    id: 'dot-3',
    title: 'Boost your views',
    hook: 'Stand out with overlays that hook audiences and keep them watching longer.',
    preview: {
      label: 'boost views preview'
    },
    mpid: "bc92af49-aba7-4b2f-97f0-e1524d847008"
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
      mpid: "f6890ce7-9a5a-481f-809c-8e388f42b285"
    }, {
      id: 'nfl-grid',
      label: 'NFL Grid',
      z: 2,
      mpid: "2b23226a-36ac-4bf7-8148-104655fc896b"
    }, {
      id: 'phone-preview',
      label: 'Phone Preview',
      z: 3,
      mpid: "ccf89877-2867-4c0f-a08b-573d46acb351"
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
    return <SortableContainer dndKitId="a1604f9c-2c1d-4a98-b6b4-3296499ea323" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        {/* Back layer – Browser Button */}
        <SortableContainer dndKitId="aa98e977-92ac-401f-b3a5-82e526a7e797" containerType="regular" prevTag="button" type="button" aria-label="Open form window" onClick={() => setFrontId('form-window')} className={`${baseStyles} form-window`} style={{
        zIndex: zFor('form-window'),
        width: '94%',
        height: '64%',
        left: '3%',
        top: '18%',
        transform: transformFor('form-window'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="73f3fc7b-db18-4e24-9848-6e838bac4458" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="e7de8e01-af43-454e-873a-166c2a419880" containerType="regular" prevTag="div" className="flex items-center gap-2 px-4 py-2 border-b border-white/10" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              <p className="ml-3 text-xs text-white/70 tracking-wide" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno overlay window</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="04c417d5-8830-4e18-ae82-a815231a2d18" containerType="regular" prevTag="form" className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-h-full overflow-hidden" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="bced50d7-8ab5-4c03-be4c-654a1bb37c89" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="99d3346a-699b-4f9b-8b64-5071fb14c1f9" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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
                <SortableContainer dndKitId="795f7cf7-ee91-4cf5-a669-309ab1833676" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
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

              <SortableContainer dndKitId="9d7d44f9-b542-44a1-90fe-5a6f21f6b16a" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <h4 className="text-[11px] tracking-widest text-white/70 mb-3" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx">PERFORMANCE</span>
                </h4>
                <SortableContainer dndKitId="a8425770-145d-4a6b-b90d-2784ce3a687d" containerType="regular" prevTag="div" className="w-full h-24 rounded-md bg-gradient-to-r from-white/10 to-white/0 relative overflow-hidden" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-white/10" aria-hidden="true" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="5b8ac4eb-125a-44c1-91fe-109cf2a391ea" containerType="regular" prevTag="div" className="mt-3 flex items-center justify-between text-[11px] text-white/70" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <p data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">Conversion</span>
                  </p>
                  <p className="text-white" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">3.9%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="366fa134-5e7c-488e-92e3-dbbc33b22308" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="31cfe730-43f8-4208-b042-5f9a0ca579a8" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">AVG ORDER</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx">$19.42</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="c494d624-b4c5-4009-bf0f-877ebfd960fd" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx">RETENTION</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">42%</span>
                  </p>
                </SortableContainer>
                <SortableContainer dndKitId="fa85f360-1d15-404b-9196-879dded198b4" containerType="regular" prevTag="div" className="rounded-xl border border-white/10 bg-white/5 p-4" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h4 className="text-[11px] tracking-widest text-white/70 mb-2" data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">REFUNDS</span>
                  </h4>
                  <p className="text-xl font-semibold text-white" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">1.2%</span>
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="a6e68907-2e17-41a9-aa47-59ee5e3ada58" containerType="regular" prevTag="div" className="col-span-1 sm:col-span-2 flex items-center gap-3" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="9ae9297f-2338-42e2-b3df-bba053675587" containerType="regular" prevTag="button" type="button" className="px-4 py-2 rounded-md bg-white/10 text-white/90 border border-white/20 hover:bg-white/15" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">Download CSV</span>
                </SortableContainer>
                <SortableContainer dndKitId="29ad352a-02ff-4ed1-8e74-0a21b0b5d6dc" containerType="regular" prevTag="button" type="submit" className="px-4 py-2 rounded-md bg-[#FFC543] text-slate-900 font-semibold hover:brightness-105" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">Export Report</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Middle layer – Grid Button */}
        <SortableContainer dndKitId="61355f46-7026-4520-b96e-484b3060c361" containerType="regular" prevTag="button" type="button" aria-label="Open NFL grid" onClick={() => setFrontId('nfl-grid')} className={`${baseStyles} nfl-grid`} style={{
        zIndex: zFor('nfl-grid'),
        width: '72%',
        height: '58%',
        left: '26%',
        top: '16%',
        transform: transformFor('nfl-grid'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="72827f5f-af3c-41ab-906d-7e4e3971ed06" containerType="regular" prevTag="div" className="w-full h-full rounded-2xl bg-slate-800/80 border border-white/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)]" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="529fd0e8-46c4-4616-a51a-808f1e9b5996" containerType="regular" prevTag="div" className="flex items-center justify-between mb-3" data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs font-semibold tracking-widest text-white" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">BREAK #190</span>
              </p>
              <p className="text-[11px] text-white/80" data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">TEAMS LEFT: 32</span>
              </p>
            </SortableContainer>
            <SortableContainer dndKitId="e5b988e0-8f0e-42f3-9968-1f4c358590d3" containerType="regular" prevTag="div" className="h-[70%] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center" data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <p className="text-xs text-white/70" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">team board ph</span>
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Front layer – Phone Button */}
        <SortableContainer dndKitId="1d60d804-560f-4b5a-978c-951244a7f120" containerType="regular" prevTag="button" type="button" aria-label="Open phone preview" onClick={() => setFrontId('phone-preview')} className={`${baseStyles} phone-preview`} style={{
        zIndex: zFor('phone-preview'),
        width: '22%',
        height: '62%',
        left: '2%',
        top: '18%',
        transform: transformFor('phone-preview'),
        transformStyle: 'preserve-3d'
      }} data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="184fa883-3331-4114-872a-bd04334299cd" containerType="regular" prevTag="div" className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-800 border border-white/20 p-3 shadow-[0_22px_60px_rgba(0,0,0,0.55)]" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <div className="absolute inset-x-10 -top-1 h-4 rounded-b-xl bg-black/50" aria-hidden="true" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            <SortableContainer dndKitId="e2005fb6-201b-444e-b5b8-297404e65654" containerType="regular" prevTag="div" className="w-full h-full rounded-[22px] overflow-hidden bg-black/60" data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="1c723920-25e5-434d-9670-1651a9ee13e0" containerType="regular" prevTag="div" className="w-full h-1/2 bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <p className="text-[11px] text-white/90" data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx">mobile prev ph</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        <style data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">{`
          @media (hover:hover) {
            .hero-button:hover { transform: scale(1.05) translateZ(0); filter: drop-shadow(0 12px 28px rgba(255,197,67,0.25)); }
          }
        `}</style>
      </SortableContainer>;
  };

  // @return
  return <SortableContainer dndKitId="da156c39-0fbe-44dd-8d4a-5bfb35d541c3" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white font-sans" data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="f759036a-5059-469d-8cca-3e19f13b62e1" containerType="regular" prevTag="header" className="bg-slate-900/80 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="3fd3f7e3-fa6a-4f67-a99c-0b897a5a4e9f" containerType="regular" prevTag="div" className="w-full max-w-screen-xl mx-auto px-4 py-4" data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a07a23a2-f385-4a80-9e52-577f55693bf1" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between w-full" data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="9df6a7a4-e027-4e61-a3b6-e254f1097d1e" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" style={{
              display: "none"
            }} data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" style={{
              display: "none"
            }} data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            
            {/* Navigation */}
            <SortableContainer dndKitId="73aea2bb-4302-4aeb-a282-7708854569a8" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-8 -ml-8 lg:-ml-64" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {navigationItems.map(nav => <a key={nav.label} href="#" className="text-gray-300 hover:text-[#FFC543] transition-colors text-sm font-medium tracking-wide relative" data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span style={{
                fontSize: "16px"
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">{nav.label}</span>
                  {nav.label === 'Live Breaks' ? <span aria-hidden="true" className="absolute block" style={{
                width: '8px',
                height: '8px',
                background: 'oklch(0.75 0.14 151.711)',
                borderRadius: '9999px',
                top: '-4px',
                right: '-10px'
              }} data-magicpath-uuid={(nav as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx" /> : null}
                </a>)}
            </SortableContainer>

            {/* Auth & Discord */}
            <SortableContainer dndKitId="0aaacf60-8987-4f80-aebc-7d2c9c6ec915" containerType="regular" prevTag="div" className="flex items-center space-x-3" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a77c971d-5fa4-41e8-870f-5fb3474f5e7c" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
              </SortableContainer>
              <SortableContainer dndKitId="b6afc309-0f3f-41fe-a2cf-ccaa6799666a" containerType="regular" prevTag="button" className="px-4 py-2 text-white border border-white rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900" data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
              </SortableContainer>
              <SortableContainer dndKitId="3646065f-a3a4-4799-8def-df2177bbe2c3" containerType="regular" prevTag="button" className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <Users className="w-4 h-4" style={{
                display: "none"
              }} data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span style={{
                color: "rgb(0 0 0)"
              }} data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">Launch App</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="89b72ae7-63cf-4309-b84c-ddc91977a6fd" containerType="regular" prevTag="section" className="px-6 py-14" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="860e2b9c-e24e-4695-b0c9-9cca33335f41" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="74271dec-4c96-4167-a0b2-418c8d8174bd" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="6f6489de-cea7-4c4f-af47-bc07cbb348e6" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight" data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="block" style={{
                fontSize: "70px"
              }} data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">Premium Overlays & Tools - Built For Breaking</span>
                <span className="block" style={{
                display: "none"
              }} data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">Made for Breaking</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg transition-opacity duration-500" key={activeDot === -1 ? 'default' : dotContent[activeDot].id} data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 0 ? 'Inspired by the hobby’s most iconic card designs — from Panini, Topps, and more — reimagined for streaming.' : activeDot === 1 ? 'Break smarter with integrated tools—every feature tuned for creators to streamline and succeed.' : activeDot === 2 ? 'Stream with BreakDance overlays and get instant promotion in our Live Breaks directory' : ''}</span>
              </p>
              <SortableContainer dndKitId="38f4e266-a8dd-463a-8126-4fd1a3eaaa14" containerType="regular" prevTag="motion.button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-10 py-4 rounded-full font-bold text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none shadow-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">{activeDot === 1 ? 'Browse Tools' : activeDot === 2 ? 'Learn More' : 'Browse Overlays'}</span>
              </SortableContainer>
            </SortableContainer>
            
            <SortableContainer dndKitId="5a502b42-1794-4233-90fe-a612961b56d0" containerType="regular" prevTag="motion.div" className="relative" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="45fec392-ac87-481a-9e1c-3e0d25d91c92" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="a6d630e8-b8d6-4784-a046-c1c0c191fd98" containerType="regular" prevTag="div" className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8" style={{
                perspective: 1200
              }} data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <SortableContainer dndKitId="06108396-56f7-4aa5-9a05-9ff2170079a9" containerType="regular" prevTag="div" className="relative w-full h-full" data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    {/* Layered feature buttons container */}
                    <LayeredHeroButtons data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="be2c58e9-a318-4aa0-9f57-5da6cea436d4" containerType="regular" prevTag="nav" aria-label="Hero pagination" className="mt-14 translate-y-5 flex items-center justify-center" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="75479064-0cc6-47ac-931f-c3f68c00bf93" containerType="collection" prevTag="ul" className="flex items-center gap-x-4" style={{
            display: "none"
          }} data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {dotContent.map((d, idx) => {
              const isActive = idx === activeDot; // no default selection
              return <li key={d.id} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <button aria-label={`Activate slide ${idx + 1}`} onClick={() => handleDotClick(idx)} className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFC543] border-[#FFC543] opacity-100 scale-110' : 'bg-slate-600 border-slate-500 opacity-60 hover:bg-slate-400 hover:scale-105'}`} data-magicpath-uuid={(d as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  </li>;
            })}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="768eda38-1fcb-4c81-8caa-fbb729f60f41" containerType="regular" prevTag="section" className="px-6 pt-12 pb-0 bg-black/20" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5b642a2e-036f-4020-84dd-29addaec6eef" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a260884a-fd32-482d-932b-d0c6276f1176" containerType="collection" prevTag="div" className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center no-scrollbar snap-x snap-mandatory" data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <motion.button data-magicpath-motion-tag="motion.button" key={category.name} onClick={() => setActiveCategory(category.name)} className={`relative whitespace-nowrap px-8 py-4 rounded-xl font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === category.name ? '!bg-white/20 !text-white shadow-lg border border-white/20' : ''}`} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={category.name === 'Browse Tools' ? {
            width: '206.594px'
          } : undefined} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span className="text-sm tracking-wide" style={{
              fontSize: 'var(--text-lg)'
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
                {activeCategory === category.name && <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" layoutId="activeTab" transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx" />}
              </motion.button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="c55cd7af-6326-4b32-a6d3-ef84149293d4" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="f2207e2f-9065-4e87-b7a8-ed74abd9651a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a64c8e4a-9a33-4746-b083-df64ac51c94b" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">Team Boards</span>
            </h2>
            <SortableContainer dndKitId="1f48b0de-db13-4887-8e84-8bd41ba9bd35" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="c4e116fd-ffa2-4e7c-8b31-9d07e3f4b1cb" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="5504c9db-a65e-4d32-b872-1ce65a2622ad" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="2b6be543-c04f-40d1-a8db-827be80da6f4" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="41be6520-2851-4548-804f-aee09f4d5814" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="e7b98cd0-4b30-44cb-869a-8039c0dfb5cc" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ca69be18-a0d8-47c3-b34a-d7377e969d2e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="c0c734b2-86a8-4ca8-9cb4-7691a92dae7f" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'NFL' : overlay.name === 'Basketball Stats Overlay' ? 'MLB' : overlay.name === 'Football Scoreboard Pro' ? 'NBA' : overlay.name === 'Tennis Match Display' ? 'NHL' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="3286e588-d196-4c3a-81d9-a33b47ca01db" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="40bac6ba-1341-43bf-bf08-fcd2de948016" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="77e2b98b-e8e3-4fd6-ade8-d12fbea7934c" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">Themes</span>
            </h2>
            <SortableContainer dndKitId="51a922c8-5d59-4ec6-87ac-4365e85dd1b1" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="b1d5763a-f779-4a8b-b581-d15117b0b368" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="b4bc7d7a-45db-4689-9c63-d8b2b5434359" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="e680f2a9-c218-42ef-851c-f10041966efa" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="ef143f4a-b09a-4f94-9295-cd100fa3bd6d" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="4eb96d92-604e-4011-9b23-1a04fc6f6cfc" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="24d1a24d-9f57-432c-9552-2da3c7c20314" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="c24d570b-ac59-4078-997a-a79f67478081" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'FPS Combat HUD' ? 'Color Blast' : overlay.name === 'RPG Interface Pro' ? 'Downtown' : overlay.name === 'Racing Dashboard' ? 'Kaboom' : overlay.name === 'Strategy Command' ? 'Stained Glass' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="8ecf27d6-0caa-4502-9154-7a83f90e17fc" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? 'hidden' : ''}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)',
      paddingTop: 'calc(var(--spacing)*0)'
    }} data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="bc250164-f1be-431d-a966-b20f095b1ea2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="a0afa70c-2cc2-416a-b201-b1a21d88a191" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">Extras</span>
            </h2>
            <SortableContainer dndKitId="79c9388a-0f66-44a5-89e1-4a51a86fe96a" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="58dbcb15-ec48-4ab9-bea8-fbc97534db44" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="e73c51fb-2bc8-457b-b059-5c226e0ce80c" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="e9b936ab-a6be-4a30-bce5-91a7d2852896" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="e9291462-9600-4d0c-a420-6fb40ce5261e" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-5" data-magicpath-id="191" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="192" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
                <ArrowRight className="w-4 h-4" data-magicpath-id="193" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="0927f0f6-6cdc-4373-9235-87e922b49a83" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="194" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="04b588bc-90e7-48c4-8713-894ecc1e18eb" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="195" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="196" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="197" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="e13ed564-e69a-4423-90d0-03b4e9a4584b" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="198" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={overlay.name} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="203" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="204" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="205" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="206" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="207" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'Talk Show Professional' ? 'Music Visualizer' : overlay.name === 'Interview Setup Clean' ? 'Counter' : overlay.name === 'News Broadcast Modern' ? 'Message Scroller' : overlay.name === 'Panel Discussion Layout' ? 'Image Frame' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="208" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="209" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Tools (Duplicate of Sports) displayed when Browse Tools is active */}
      <SortableContainer dndKitId="58851277-2bc5-4204-98ec-72f554f8807c" containerType="regular" prevTag="section" className={`px-6 py-5 bg-black/20 ${activeCategory === 'Browse Tools' ? '' : 'hidden'}`} style={{
      paddingBottom: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="210" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="dc5e52b6-50b9-4a36-a8d0-8012d823b7e7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="211" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="8c6717f9-0ed3-447b-9b5c-cc64b80b9262" containerType="regular" prevTag="div" className="flex items-center justify-between mb-0" data-magicpath-id="212" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="213" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="214" data-magicpath-path="OverlaysUnoLandingPage.tsx">Tools</span>
            </h2>
            <SortableContainer dndKitId="201d2eb6-e0f7-47b5-aaf8-d92fdf1adb5d" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="215" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="15cf4ff8-bcbb-471f-b10e-79a3582f0231" containerType="regular" prevTag="div" className="hidden" data-magicpath-id="216" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="492b92cd-bad7-4f16-826f-a16d0271756e" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10" data-magicpath-id="217" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronLeft className="w-5 h-5" data-magicpath-id="218" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="5bed234e-9efe-4d67-a5f0-cb449832e5e4" containerType="regular" prevTag="button" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 ml-3" data-magicpath-id="219" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <ChevronRight className="w-5 h-5" data-magicpath-id="220" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="f9669e1d-4b58-4ae2-b355-9d0bc0cea207" containerType="regular" prevTag="div" className="flex justify-end" data-magicpath-id="221" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="b6f59d61-851f-4c84-abbf-11f15838e388" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2 transition-colors duration-200 font-medium mb-2" data-magicpath-id="222" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="223" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="224" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          
          <SortableContainer dndKitId="d92d34f7-29ae-4c36-8664-baaf2de92149" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="225" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.slice(0, 4).map(overlay => <motion.div data-magicpath-motion-tag="motion.div" key={`tools-${overlay.name}`} className="bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group border border-white/10" whileHover={{
            scale: 1.02,
            y: -8
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="relative overflow-hidden" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="227" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <div className="w-full aspect-[5/3] bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="228" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <div className="text-center space-y-2" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="229" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                      <span className="text-gray-400 text-xs font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="230" data-magicpath-path="OverlaysUnoLandingPage.tsx">Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="231" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
                </div>
                <div className="p-5 space-y-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="232" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-200 text-base leading-tight" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="234" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name === 'LPF Argentina Stadium Fly In' ? 'Breaker Inventory Manager' : overlay.name === 'Basketball Stats Overlay' ? 'Comps Finder' : overlay.name === 'Football Scoreboard Pro' ? 'Pop Report Lookup' : overlay.name === 'Tennis Match Display' ? 'ROI Tracker' : overlay.name}</span>
                  </h3>
                  <span className="inline-block text-xs text-gray-400 bg-slate-700/80 px-3 py-1 rounded-full font-medium" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="235" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:unknown" data-magicpath-id="236" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="237" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Feature Panel */}
      <SortableContainer dndKitId="1959d2d2-d87d-4813-8433-1ea228a17354" containerType="regular" prevTag="section" className="px-6 py-24" style={{
      paddingBlock: 'calc(var(--spacing)*14)'
    }} data-magicpath-id="238" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="dcc515d7-912b-42b7-9a83-034425d02944" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="239" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0168d2d7-5bf7-4464-af53-e73270f00d35" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="240" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="ff90619a-3022-4c5f-a485-03d072ee2653" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="241" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-5xl font-bold leading-tight" data-magicpath-id="242" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="243" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing</span>
                <br data-magicpath-id="244" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="245" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-magicpath-id="246" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="247" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence and want to stand out from the crowd.</span>
              </p>
              <div className="w-16 h-1 bg-orange-500 rounded-full" data-magicpath-id="248" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="8e86291b-b8ee-41d5-9567-5ccec6f2b097" containerType="regular" prevTag="button" className="bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="249" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="250" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="99c3539a-1e39-4ca9-b56e-099b3b18086b" containerType="regular" prevTag="div" className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-3xl p-12 flex items-center justify-center border border-white/10" data-magicpath-id="251" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="5a0b3295-9f1b-4fd6-ad48-1d55a0b25249" containerType="regular" prevTag="div" className="text-center space-y-6" data-magicpath-id="252" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <SortableContainer dndKitId="2b5eecb4-8fc9-44bd-ac8e-63190e2aa9b6" containerType="regular" prevTag="div" className="w-24 h-24 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-id="253" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Play className="w-12 h-12 text-orange-400" data-magicpath-id="254" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </SortableContainer>
                <p className="text-gray-300 text-lg font-medium" data-magicpath-id="255" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="256" data-magicpath-path="OverlaysUnoLandingPage.tsx">Feature Video Preview</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="03b878f3-dbb6-4ee0-b90c-995f22c67124" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="257" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4d15d629-7790-4f30-8eaf-30f768615a23" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="258" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="259" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="260" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto" data-magicpath-id="261" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="262" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get professional results in minutes with our streamlined process designed for creators of all skill levels.</span>
          </p>
          
          <SortableContainer dndKitId="bd8f820a-6f5c-4da2-bfb8-c0c475deb77b" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="263" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={step.title} className="text-center space-y-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="264" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl mx-auto flex items-center justify-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="265" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <step.icon className="w-10 h-10 text-orange-400" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="266" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                </div>
                <h3 className="text-2xl font-semibold" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="267" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="268" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg max-w-sm mx-auto" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="269" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="270" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </motion.div>)}
          </SortableContainer>
          
          <SortableContainer dndKitId="4e2a45f7-1b16-402c-b940-ad82b3763c74" containerType="regular" prevTag="button" className="mt-16 bg-gradient-to-r from-[#FF5C25] to-[#FFC542] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-bold text-base lg:text-lg text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none" data-magicpath-id="271" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="272" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="d6a8ed39-111c-4317-b936-8054f609ef43" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="273" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8c06f6aa-dcf2-4d64-b0bf-affad4589304" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="274" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-5xl font-bold mb-6" data-magicpath-id="275" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="276" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16" data-magicpath-id="277" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="278" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features that will take your content to the next level.</span>
          </p>
          
          <SortableContainer dndKitId="a82527ff-395e-4290-9d6a-d2c430919b20" containerType="regular" prevTag="div" className="flex items-center justify-center mb-16" data-magicpath-id="279" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="1ea068d9-2fea-4bf8-ad08-cea72f29a09e" containerType="regular" prevTag="div" className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50" data-magicpath-id="280" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <SortableContainer dndKitId="a64e43c7-e0f0-49fb-962f-426f6e141971" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="281" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="282" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
              </SortableContainer>
              <SortableContainer dndKitId="b20a0c3e-784a-4169-baaa-ac4938edd307" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-8 py-3 rounded-lg transition-all font-medium ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`} data-magicpath-id="283" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="284" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="194f3778-d752-4cb7-bc3a-2e06d7c422ee" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="285" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {/* Free Plan */}
            <SortableContainer dndKitId="82c5752b-03f4-4d40-99a7-44150f425e5a" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-white/10" data-magicpath-id="286" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="287" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="288" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="d89f3518-8d92-4a2d-af5d-ca3930c4453e" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="289" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="290" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="bd9caacd-85a2-4f21-9f07-a98d5fdaced0" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="291" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="292" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="293" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="294" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="295" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="296" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="297" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="298" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="299" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="300" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="519edeb0-14d6-4c8d-80a0-99dcb42ff3ae" containerType="regular" prevTag="button" className="w-full py-4 bg-slate-600 text-gray-300 rounded-xl font-semibold text-lg" data-magicpath-id="301" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="302" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current Plan</span>
              </SortableContainer>
            </SortableContainer>

            {/* Plus Plan */}
            <SortableContainer dndKitId="8504b35a-50af-4e9d-b467-8f0ca9f9685b" containerType="regular" prevTag="div" className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative" data-magicpath-id="303" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="809efeea-15e0-4796-a24e-f06959215161" containerType="regular" prevTag="div" className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold" data-magicpath-id="304" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="305" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-3xl font-bold mb-6" data-magicpath-id="306" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="307" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="135d1002-1713-4809-b0eb-1833d4b7a116" containerType="regular" prevTag="div" className="text-5xl font-bold mb-8" data-magicpath-id="308" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="309" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
                <span className="text-lg text-gray-400 font-normal" data-magicpath-id="310" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  /{pricingToggle === 'monthly' ? 'month' : 'year'}
                </span>
              </SortableContainer>
              <SortableContainer dndKitId="b570553d-163d-498a-bd38-ffd1690472c1" containerType="regular" prevTag="ul" className="space-y-4 mb-10 text-left" data-magicpath-id="311" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="312" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="313" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="314" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="315" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="316" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="317" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="318" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" data-magicpath-id="319" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span className="text-lg" data-magicpath-id="320" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="14e29f7a-c21b-48fe-ad9f-ed296c862507" containerType="regular" prevTag="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors" data-magicpath-id="321" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="322" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Plus</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="d9e2ad3a-2862-48cd-83ee-d351fbb0c958" containerType="regular" prevTag="section" className="px-6 py-24 bg-black/20" data-magicpath-id="323" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="8964863e-229d-4eb2-a42f-66b137a6352a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="324" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="325" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="326" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="fa0389ea-b926-42b5-80e5-335a2736f290" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="327" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-3xl p-12 border border-white/10" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="328" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl font-bold text-orange-400 mb-4" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="329" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:unknown" data-magicpath-id="330" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-2xl font-semibold mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="331" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="332" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400 text-lg" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="333" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:unknown" data-magicpath-id="334" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="52265996-8662-4bc9-8ed1-28769f2b795f" containerType="regular" prevTag="section" className="px-6 py-24" data-magicpath-id="335" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="890c7c6a-7e17-476d-ad04-0c53f49a80a2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="336" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-4xl font-bold mb-20" data-magicpath-id="337" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="338" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="aab02511-7b1d-4211-9484-d93d528f3782" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="339" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-3xl p-10 text-center border border-white/10" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="340" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-16 h-16 mx-auto mb-6 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="341" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-2xl font-bold mb-4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="342" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="343" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="344" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:unknown" data-magicpath-id="345" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-4 ${card.color} hover:opacity-90 text-white rounded-xl transition-opacity duration-200 font-semibold text-lg`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="346" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:unknown" data-magicpath-id="347" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="348" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>

      {/* Footer */}
      <SortableContainer dndKitId="f17425ad-3507-4402-a062-4e1414883954" containerType="regular" prevTag="footer" className="px-6 py-16" data-magicpath-id="349" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="d0b5d7ee-1195-4010-8db2-7deb15e1d671" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="350" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="2f7dad8b-957e-4ae6-9f1d-55176d81437d" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="351" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="878bd2b6-3ef6-444b-a1d8-352983c7a80e" containerType="regular" prevTag="div" className="text-2xl font-bold" data-magicpath-id="352" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span className="text-orange-500" data-magicpath-id="353" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
              <span className="text-white" data-magicpath-id="354" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
            </SortableContainer>
            <SortableContainer dndKitId="0ba38723-fba2-49f8-98a8-e7bdbf067e7f" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="355" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="356" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="357" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium" data-magicpath-id="358" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="359" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};