import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="9562d27c-a40f-4817-bc52-dc9cf45d55bf" containerType="regular" prevTag="header" className="flex items-center justify-between px-6 py-4 border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="43a663ce-38a2-4835-be7b-c1e5179b2543" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="0ae93c61-6857-4474-88d6-0af7409849d6" containerType="regular" prevTag="div" className="text-2xl font-bold text-orange-400" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="3" data-magicpath-path="Header.tsx">overlays.</span>
          <span className="text-white" data-magicpath-id="4" data-magicpath-path="Header.tsx">uno</span>
        </SortableContainer>
        <SortableContainer dndKitId="6d2672ab-11d1-4597-9cca-a56a4df0ebcd" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-6" data-magicpath-id="5" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
      </SortableContainer>
      <SortableContainer dndKitId="3a830a25-b46b-49c5-9ce8-18dd608c0ec4" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="8" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="83ce0dab-4e8f-4cd3-9813-601c858cc153" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="9" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="10" data-magicpath-path="Header.tsx">Sign up</span>
        </SortableContainer>
        <SortableContainer dndKitId="10b27e24-f1c2-41cb-a45b-fb424cfb30bb" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="12" data-magicpath-path="Header.tsx">Login</span>
        </SortableContainer>
        <SortableContainer dndKitId="533c7e84-49cb-40de-9dfd-d0a0c0d68080" containerType="regular" prevTag="button" className="p-2 text-gray-300 hover:text-white transition-colors duration-200" data-magicpath-id="13" data-magicpath-path="Header.tsx">
          <Users className="w-5 h-5" data-magicpath-id="14" data-magicpath-path="Header.tsx" />
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};