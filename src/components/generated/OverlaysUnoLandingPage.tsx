import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Check, ArrowRight, Users, Youtube, Heart } from 'lucide-react';
const overlayCategories = [{
  name: 'Browse overlays',
  active: true,
  mpid: "17bae4f4-c417-47ca-b122-6db382130306"
}, {
  name: 'Art & Design',
  active: false,
  mpid: "16e7effe-c2e4-4dcc-b9b9-c57e9bfb50c8"
}, {
  name: 'Business & Finance',
  active: false,
  mpid: "bed28bd1-4529-4873-ae44-b141c566b1b7"
}, {
  name: 'Education',
  active: false,
  mpid: "03cf231f-5c9e-40f2-9d7e-e1d56978513b"
}, {
  name: 'Game',
  active: false,
  mpid: "fdb56dce-0daf-4212-8b25-813c0991c01c"
}, {
  name: 'Holiday',
  active: false,
  mpid: "30fa86fe-3fa7-400f-99ad-d8d37dea1b65"
}] as any[];
const sportsOverlays = [{
  name: 'Soccer Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "c9f634a4-27d4-4ef8-91df-58d05da5235f"
}, {
  name: 'Basketball Stats',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "786f73ee-3823-4192-b63c-d7228a387e11"
}, {
  name: 'Football Scoreboard',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "033c2691-7692-4bb2-98dd-9678c0729823"
}, {
  name: 'Tennis Match',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "bf81dc4e-2a38-405c-89e3-6947f866b7ea"
}, {
  name: 'Baseball Diamond',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "59abaef5-bfc4-4efb-ac64-43b1fac34ffa"
}, {
  name: 'Hockey Rink',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "f21527b1-cffc-4874-9bee-2dca504faf2b"
}] as any[];
const gamingOverlays = [{
  name: 'FPS Overlay',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "5115a2ed-256d-438f-ac44-1b09923ffaf5"
}, {
  name: 'RPG Interface',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "c0cf413e-77eb-430e-aff2-17db4c759e80"
}, {
  name: 'Racing HUD',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "a8db10fd-4b1d-44b8-a945-0bf004c55968"
}, {
  name: 'Strategy Map',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "6698d280-d8dc-4d56-a693-32a1484e18de"
}, {
  name: 'Battle Royale',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "4766e6f4-c422-4780-bf7a-a5ac4f9b525b"
}, {
  name: 'Retro Arcade',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "b46a45ed-db17-446c-acde-b83c0912f458"
}] as any[];
const podcastOverlays = [{
  name: 'Talk Show Layout',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "fe4d8563-cb68-4e85-b93a-1285254bbc94"
}, {
  name: 'Interview Setup',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "ec7ed542-fbf8-454f-9a38-d725cf526ee3"
}, {
  name: 'News Broadcast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "2c9d0751-17b7-48fc-8004-9fcba26492b8"
}, {
  name: 'Panel Discussion',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "51f90a44-dfdb-41a4-8c61-a0d1ccac0d0e"
}, {
  name: 'Solo Cast',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "43974343-d4e6-43aa-80c6-25f5481b3ed6"
}, {
  name: 'Live Q&A',
  aspect: '16:9',
  image: '/api/placeholder/300/200',
  mpid: "a857bfc2-bd98-4996-b8b0-513a3a281b19"
}] as any[];
const howItWorksSteps = [{
  icon: '🎯',
  title: 'Pick one you like',
  description: 'Browse and select from our overlay library',
  mpid: "7b96ded6-741a-441e-a70e-dc5585c4d5b9"
}, {
  icon: '🎨',
  title: 'Customize to fit your needs',
  description: 'Modify colors, text, sizing, content and more',
  mpid: "c18fdcb8-0225-4e9b-bbbe-3cacefcf95f1"
}, {
  icon: '📋',
  title: 'Copy and paste link',
  description: 'Simply copy and paste the output link',
  mpid: "014c209e-8d85-4a0d-bd6a-e4438e42e151"
}] as any[];
const stats = [{
  number: '9.5 Million',
  label: 'Overlay Outputs',
  sublabel: 'YTD',
  mpid: "1930750e-4a6a-46a3-bd82-702e7fcebb16"
}, {
  number: '332k',
  label: 'Overlay Downloads',
  sublabel: 'YTD',
  mpid: "dea4a2c7-17d4-4687-847c-900811f55219"
}, {
  number: '265k',
  label: 'Stream Deck Plugin Downloads',
  sublabel: 'YTD',
  mpid: "9e4d0b8f-72d7-4088-a081-eca6009fabad"
}] as any[];
const communityCards = [{
  icon: Users,
  title: 'Join Discord',
  subtitle: 'Connect with our community',
  buttonText: 'Join',
  color: 'bg-indigo-600',
  mpid: "0c3c368c-3469-4f16-af9f-15f645fc6bbb"
}, {
  icon: Youtube,
  title: 'Subscribe to our YT',
  subtitle: 'Stay updated with tutorials',
  buttonText: 'Subscribe',
  color: 'bg-red-600',
  mpid: "9f1df349-fa1f-453b-9a92-c5189bdba826"
}, {
  icon: Heart,
  title: 'Donate to uno',
  subtitle: 'Support our development',
  buttonText: 'Donate',
  color: 'bg-pink-600',
  mpid: "78cbc620-cabb-4744-b5ae-91808cfd903d"
}] as any[];

// @component: OverlaysUnoLandingPage
export const OverlaysUnoLandingPage = () => {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');

  // @return
  return <SortableContainer dndKitId="7ff59c6f-1f28-4fa1-942a-25f750594872" containerType="regular" prevTag="div" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white" data-magicpath-id="0" data-magicpath-path="OverlaysUnoLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="6bc2cc2a-52b1-45e1-b3f6-f76623f74a39" containerType="regular" prevTag="header" className="flex items-center justify-between px-6 py-4 border-b border-white/10" data-magicpath-id="1" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="4861c809-2853-4b39-9fe7-f5d6ac25a466" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="2" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="cee61735-63b4-4f1b-bf61-d934fc96be58" containerType="regular" prevTag="div" className="text-2xl font-bold text-orange-400" data-magicpath-id="3" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="4" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
            <span className="text-white" data-magicpath-id="5" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
          </SortableContainer>
          <nav className="hidden md:flex items-center space-x-6" data-magicpath-id="6" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'].map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors" data-magicpath-id="7" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="8" data-magicpath-path="OverlaysUnoLandingPage.tsx">{item}</span>
              </a>)}
          </nav>
        </SortableContainer>
        <SortableContainer dndKitId="c5146a61-7839-4cae-aceb-75535731adf3" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="9" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="7c52452d-3421-4443-93ca-649ba394b890" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="10" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="11" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sign up</span>
          </SortableContainer>
          <SortableContainer dndKitId="8c59ebfa-c456-476c-baa1-f45d8cda162a" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="12" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="13" data-magicpath-path="OverlaysUnoLandingPage.tsx">Login</span>
          </SortableContainer>
          <SortableContainer dndKitId="23b248c7-6139-4e10-ac26-7c6983fc7092" containerType="regular" prevTag="button" className="p-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="14" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <Users className="w-5 h-5" data-magicpath-id="15" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Hero Section */}
      <SortableContainer dndKitId="ae953183-017b-4f47-a61a-f2859775b51f" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="16" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="24350353-c671-495e-8e34-081a07056100" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="17" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="0f85cc86-7a22-4cbe-8f6a-ca2155b331c0" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="18" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f6a041e8-0384-49c0-ae09-0934ccedbb2f" containerType="regular" prevTag="div" data-magicpath-id="19" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6" data-magicpath-id="20" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="21" data-magicpath-path="OverlaysUnoLandingPage.tsx">Overlays</span>
                <br data-magicpath-id="22" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <span data-magicpath-id="23" data-magicpath-path="OverlaysUnoLandingPage.tsx">built for pros</span>
              </h1>
              <SortableContainer dndKitId="29de0fad-bba6-4967-996d-03c4b85bdad5" containerType="regular" prevTag="button" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors" data-magicpath-id="24" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="25" data-magicpath-path="OverlaysUnoLandingPage.tsx">Browse overlays</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="05d570b9-2b68-4dd9-bcd2-ccce7b99445c" containerType="regular" prevTag="div" className="relative" data-magicpath-id="26" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <img src="/api/placeholder/600/400" alt="Stream Deck and overlay interface" className="w-full rounded-lg" data-magicpath-id="27" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Overlay Categories Navigation */}
      <SortableContainer dndKitId="c3a46a56-4665-4af5-8a64-763e69c59eb9" containerType="regular" prevTag="section" className="px-6 py-8 border-y border-white/10" data-magicpath-id="28" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="58fac3a6-c791-4972-8ae1-8136a4f78ac0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="29" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="89239658-e176-4361-bc59-7ab93412a355" containerType="collection" prevTag="div" className="flex space-x-8 overflow-x-auto" data-magicpath-id="30" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {overlayCategories.map(category => <button key={category.name} className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${category.active ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`} data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="32" data-magicpath-path="OverlaysUnoLandingPage.tsx">{category.name}</span>
              </button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sports Overlays Carousel */}
      <SortableContainer dndKitId="f9d91599-3a02-4185-8360-158173c3cbc9" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="33" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="96c3f6ee-1a91-43ac-b1d7-681e18eed62a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="34" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="e82a2aa6-7218-40ef-86bb-66d2d80dc809" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="35" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-2xl font-bold" data-magicpath-id="36" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="37" data-magicpath-path="OverlaysUnoLandingPage.tsx">Sports</span>
            </h2>
            <SortableContainer dndKitId="e77f45d5-006d-4019-8b99-44365fd68857" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2" data-magicpath-id="38" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="39" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="40" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="983bf31a-7581-4dda-80b0-1f31a7cb167c" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="41" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {sportsOverlays.map(overlay => <div key={overlay.name} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <img src={overlay.image} alt={overlay.name} className="w-full h-32 object-cover" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="43" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <div className="p-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-medium text-sm mb-1" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="46" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:string" data-magicpath-id="48" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Gaming Overlays Carousel */}
      <SortableContainer dndKitId="ce273e59-9e28-46af-96c4-b49fc6340883" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="49" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="66ea0cc9-448b-4eb8-9420-c3c675aa23b1" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="50" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="51e4bb62-adf4-48fa-ab96-de8138366b29" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="51" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-2xl font-bold" data-magicpath-id="52" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="53" data-magicpath-path="OverlaysUnoLandingPage.tsx">Gaming</span>
            </h2>
            <SortableContainer dndKitId="4aeff2c3-490f-4ef2-bc7e-70098eea5b08" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2" data-magicpath-id="54" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="55" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="56" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="789b6567-8189-470f-b443-2a500f7c856f" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="57" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {gamingOverlays.map(overlay => <div key={overlay.name} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <img src={overlay.image} alt={overlay.name} className="w-full h-32 object-cover" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="59" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <div className="p-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="60" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-medium text-sm mb-1" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="61" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="62" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:string" data-magicpath-id="64" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Podcasts Overlays Carousel */}
      <SortableContainer dndKitId="6489c0c4-d634-443f-ae8a-7f703265c650" containerType="regular" prevTag="section" className="px-6 py-12" data-magicpath-id="65" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="681726e6-8779-4945-8fab-687bc2a06cbe" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="66" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="090a94cd-57c0-437c-87e1-0284d8b07501" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="67" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <h2 className="text-2xl font-bold" data-magicpath-id="68" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="69" data-magicpath-path="OverlaysUnoLandingPage.tsx">Podcasts</span>
            </h2>
            <SortableContainer dndKitId="e53b4ca6-404b-4596-ad0d-441bdf2c6605" containerType="regular" prevTag="button" className="text-orange-400 hover:text-orange-300 flex items-center space-x-2" data-magicpath-id="70" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="71" data-magicpath-path="OverlaysUnoLandingPage.tsx">See More</span>
              <ArrowRight className="w-4 h-4" data-magicpath-id="72" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="4776e172-32fe-4c94-863d-0af1af9b9109" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-magicpath-id="73" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {podcastOverlays.map(overlay => <div key={overlay.name} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <img src={overlay.image} alt={overlay.name} className="w-full h-32 object-cover" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="75" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <div className="p-3" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <h3 className="font-medium text-sm mb-1" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="78" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.name}</span>
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded" data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-id="79" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                    <span data-magicpath-uuid={(overlay as any)["mpid"] ?? "unsafe"} data-magicpath-field="aspect:string" data-magicpath-id="80" data-magicpath-path="OverlaysUnoLandingPage.tsx">{overlay.aspect}</span>
                  </span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Feature Panels */}
      <SortableContainer dndKitId="6bdfbd29-0119-4458-b4f4-0915e6c94a83" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="81" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="45b93b23-157b-4612-bbca-72e43a198e79" containerType="regular" prevTag="div" className="max-w-7xl mx-auto space-y-20" data-magicpath-id="82" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="d5df5628-6666-444a-9ca8-bd13f5853bcf" containerType="regular" prevTag="div" className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="83" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="c6fd0a43-6cfb-47dd-9d0a-00017fd30f8d" containerType="regular" prevTag="div" data-magicpath-id="84" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h2 className="text-4xl font-bold mb-4" data-magicpath-id="85" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="86" data-magicpath-path="OverlaysUnoLandingPage.tsx">Game-Changing Overlays</span>
              </h2>
              <p className="text-gray-300 mb-6" data-magicpath-id="87" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="88" data-magicpath-path="OverlaysUnoLandingPage.tsx">Transform your streams with professional-grade overlays designed for content creators who demand excellence.</span>
              </p>
              <div className="w-12 h-1 bg-orange-500 mb-6" data-magicpath-id="89" data-magicpath-path="OverlaysUnoLandingPage.tsx"></div>
              <SortableContainer dndKitId="c17aa2f6-0479-4096-89b9-033e6f34fae8" containerType="regular" prevTag="button" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors" data-magicpath-id="90" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="91" data-magicpath-path="OverlaysUnoLandingPage.tsx">Learn More</span>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="0c628ca0-8a22-4434-9612-021ceec42419" containerType="regular" prevTag="div" className="bg-black/30 rounded-lg p-8 flex items-center justify-center" data-magicpath-id="92" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <Play className="w-16 h-16 text-orange-400" data-magicpath-id="93" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="ed128083-abbc-443a-943d-78efd008215f" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="94" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="afe5c69a-df19-44da-b701-65d2ff7b03ed" containerType="regular" prevTag="div" className="max-w-7xl mx-auto text-center" data-magicpath-id="95" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-4xl font-bold mb-16" data-magicpath-id="96" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="97" data-magicpath-path="OverlaysUnoLandingPage.tsx">Quality overlays made easy</span>
          </h2>
          <SortableContainer dndKitId="d52d8473-fa7a-463e-81db-e7dbeb4f77aa" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-12" data-magicpath-id="98" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {howItWorksSteps.map((step, index) => <div key={step.title} className="text-center" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-6xl mb-4" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:string" data-magicpath-id="101" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="103" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.title}</span>
                </h3>
                <p className="text-gray-300" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="105" data-magicpath-path="OverlaysUnoLandingPage.tsx">{step.description}</span>
                </p>
              </div>)}
          </SortableContainer>
          <SortableContainer dndKitId="7c4a0917-6d18-485b-a5e9-a07375beb430" containerType="regular" prevTag="button" className="mt-12 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors" data-magicpath-id="106" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="107" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get Started</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Pricing */}
      <SortableContainer dndKitId="671e6d26-b86f-45ba-ac18-db197d3f683a" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="108" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="65296e5a-375a-42e1-b989-0f29ab0e5666" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="109" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-4xl font-bold mb-8" data-magicpath-id="110" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="111" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get more with uno Plus</span>
          </h2>
          <p className="text-gray-300 mb-12" data-magicpath-id="112" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="113" data-magicpath-path="OverlaysUnoLandingPage.tsx">Break limits and get access to amazing features</span>
          </p>
          
          <SortableContainer dndKitId="0c269408-4685-47b5-9c63-f5c1881808fa" containerType="regular" prevTag="div" className="flex items-center justify-center mb-12" data-magicpath-id="114" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="f28e6f72-5c78-4249-bab4-892096c818a5" containerType="regular" prevTag="button" onClick={() => setPricingToggle('monthly')} className={`px-6 py-2 rounded-l-lg transition-colors ${pricingToggle === 'monthly' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`} data-magicpath-id="115" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="116" data-magicpath-path="OverlaysUnoLandingPage.tsx">Monthly</span>
            </SortableContainer>
            <SortableContainer dndKitId="c2b722ab-dc8b-4651-8124-0abe985bd49c" containerType="regular" prevTag="button" onClick={() => setPricingToggle('yearly')} className={`px-6 py-2 rounded-r-lg transition-colors ${pricingToggle === 'yearly' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`} data-magicpath-id="117" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="118" data-magicpath-path="OverlaysUnoLandingPage.tsx">Yearly</span>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="bacd7715-dd1e-4563-ae9c-d36313830632" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-8" data-magicpath-id="119" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <SortableContainer dndKitId="14362250-3cf2-43d5-9f49-72ecf696bacd" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-8" data-magicpath-id="120" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <h3 className="text-2xl font-bold mb-4" data-magicpath-id="121" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="122" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Free</span>
              </h3>
              <SortableContainer dndKitId="7e2b35f3-9d3f-426c-b807-16faef4b2489" containerType="regular" prevTag="div" className="text-4xl font-bold mb-6" data-magicpath-id="123" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="124" data-magicpath-path="OverlaysUnoLandingPage.tsx">$0.00</span>
              </SortableContainer>
              <SortableContainer dndKitId="71a45f59-648a-47a7-9d39-1c5caeaba826" containerType="regular" prevTag="ul" className="space-y-3 mb-8" data-magicpath-id="125" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="126" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3" data-magicpath-id="127" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="128" data-magicpath-path="OverlaysUnoLandingPage.tsx">Full access to overlay library and tools</span>
                </li>
                <li className="flex items-center" data-magicpath-id="129" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3" data-magicpath-id="130" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="131" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay outputs</span>
                </li>
                <li className="flex items-center" data-magicpath-id="132" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3" data-magicpath-id="133" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="134" data-magicpath-path="OverlaysUnoLandingPage.tsx">Free unlimited overlay downloads</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="0739cbe0-bbd6-4f5c-8ee4-6caf83d8fba0" containerType="regular" prevTag="button" className="w-full py-3 bg-gray-600 text-gray-300 rounded-lg" data-magicpath-id="135" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="136" data-magicpath-path="OverlaysUnoLandingPage.tsx">Current plan</span>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="fc071518-82bc-4a6a-aac9-4f0532b59993" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-8 relative" data-magicpath-id="137" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              {pricingToggle === 'yearly' && <SortableContainer dndKitId="f1d0d8b0-8966-4734-8864-b955b8dd79f6" containerType="regular" prevTag="div" className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm" data-magicpath-id="138" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-id="139" data-magicpath-path="OverlaysUnoLandingPage.tsx">Save 20%</span>
                </SortableContainer>}
              <h3 className="text-2xl font-bold mb-4" data-magicpath-id="140" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="141" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno Plus</span>
              </h3>
              <SortableContainer dndKitId="177bb580-9ade-4107-88c5-8a5dd70e4e1c" containerType="regular" prevTag="div" className="text-4xl font-bold mb-6" data-magicpath-id="142" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="143" data-magicpath-path="OverlaysUnoLandingPage.tsx">{pricingToggle === 'monthly' ? '$1.99' : '$19.99'}</span>
              </SortableContainer>
              <SortableContainer dndKitId="2da27bfa-3308-4c7e-9148-8e86765c381b" containerType="regular" prevTag="ul" className="space-y-3 mb-8" data-magicpath-id="144" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <li className="flex items-center" data-magicpath-id="145" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3" data-magicpath-id="146" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="147" data-magicpath-path="OverlaysUnoLandingPage.tsx">Everything in Free</span>
                </li>
                <li className="flex items-center" data-magicpath-id="148" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3" data-magicpath-id="149" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="150" data-magicpath-path="OverlaysUnoLandingPage.tsx">Remove uno branding</span>
                </li>
                <li className="flex items-center" data-magicpath-id="151" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <Check className="w-5 h-5 text-green-400 mr-3" data-magicpath-id="152" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                  <span data-magicpath-id="153" data-magicpath-path="OverlaysUnoLandingPage.tsx">Priority support</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="309eaa01-ac5a-435d-a1d4-8fd838d4f5a8" containerType="regular" prevTag="button" className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors" data-magicpath-id="154" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <span data-magicpath-id="155" data-magicpath-path="OverlaysUnoLandingPage.tsx">Get</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats */}
      <SortableContainer dndKitId="84e5001c-28e0-472f-9ef6-09177dbd8a3b" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="156" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="a33562ac-1ace-4664-b28e-5286962ac9a9" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="157" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-3xl font-bold mb-16" data-magicpath-id="158" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="159" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno in numbers</span>
          </h2>
          <SortableContainer dndKitId="b02d6398-95f7-4622-aaca-1a925215fc74" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="160" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {stats.map(stat => <div key={stat.label} className="text-center bg-white/5 rounded-lg p-8" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <div className="text-4xl font-bold text-orange-400 mb-2" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="162" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="number:string" data-magicpath-id="163" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.number}</span>
                </div>
                <div className="text-xl font-semibold mb-1" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="164" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="165" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.label}</span>
                </div>
                <div className="text-gray-400" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="166" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sublabel:string" data-magicpath-id="167" data-magicpath-path="OverlaysUnoLandingPage.tsx">{stat.sublabel}</span>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Community CTAs */}
      <SortableContainer dndKitId="f9f6bc2f-6189-4764-bf74-8ce0d31b19dd" containerType="regular" prevTag="section" className="px-6 py-20" data-magicpath-id="168" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="b74f21aa-c54c-4fff-95fb-325e8a867465" containerType="regular" prevTag="div" className="max-w-7xl mx-auto" data-magicpath-id="169" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <h2 className="text-center text-3xl font-bold mb-16" data-magicpath-id="170" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="171" data-magicpath-path="OverlaysUnoLandingPage.tsx">Never miss new, cool things</span>
          </h2>
          <SortableContainer dndKitId="e3ee7ab0-0c23-4349-8428-d25b324fab1f" containerType="collection" prevTag="div" className="grid md:grid-cols-3 gap-8" data-magicpath-id="172" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            {communityCards.map(card => <div key={card.title} className="bg-white/10 rounded-lg p-8 text-center" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="173" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                <card.icon className="w-12 h-12 mx-auto mb-4 text-white" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="174" data-magicpath-path="OverlaysUnoLandingPage.tsx" />
                <h3 className="text-xl font-bold mb-2" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="176" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.title}</span>
                </h3>
                <p className="text-gray-300 mb-6" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="subtitle:string" data-magicpath-id="178" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.subtitle}</span>
                </p>
                <button className={`w-full py-3 ${card.color} hover:opacity-90 text-white rounded-lg transition-opacity`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="179" data-magicpath-path="OverlaysUnoLandingPage.tsx">
                  <span data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-field="buttonText:string" data-magicpath-id="180" data-magicpath-path="OverlaysUnoLandingPage.tsx">{card.buttonText}</span>
                </button>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="e1054f31-355e-480d-85e8-fe5afc939efd" containerType="regular" prevTag="footer" className="px-6 py-12 border-t border-white/10" data-magicpath-id="181" data-magicpath-path="OverlaysUnoLandingPage.tsx">
        <SortableContainer dndKitId="5dd436eb-378c-4637-a31a-e4a13d3b274d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto flex items-center justify-between" data-magicpath-id="182" data-magicpath-path="OverlaysUnoLandingPage.tsx">
          <SortableContainer dndKitId="64f5cea9-4b79-4763-ae10-a4e76f2daa90" containerType="regular" prevTag="div" className="text-xl font-bold text-orange-400" data-magicpath-id="183" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <span data-magicpath-id="184" data-magicpath-path="OverlaysUnoLandingPage.tsx">overlays.</span>
            <span className="text-white" data-magicpath-id="185" data-magicpath-path="OverlaysUnoLandingPage.tsx">uno</span>
          </SortableContainer>
          <SortableContainer dndKitId="08d7f0e9-266d-411a-b1c9-546a37cde26e" containerType="regular" prevTag="div" className="flex items-center space-x-6" data-magicpath-id="186" data-magicpath-path="OverlaysUnoLandingPage.tsx">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-magicpath-id="187" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="188" data-magicpath-path="OverlaysUnoLandingPage.tsx">Privacy policy</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-magicpath-id="189" data-magicpath-path="OverlaysUnoLandingPage.tsx">
              <span data-magicpath-id="190" data-magicpath-path="OverlaysUnoLandingPage.tsx">Terms</span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};