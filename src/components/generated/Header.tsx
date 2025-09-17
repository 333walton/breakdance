import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="3caf5f6a-9bbc-4523-8b4c-ed4d1bd98e77" containerType="regular" prevTag="header" className="flex items-center justify-between px-6 py-4 border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="723e9465-ba9c-43e2-9153-0011ad6ab4b5" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="ba0143a2-9744-46ce-b064-da62dd7d76cd" containerType="regular" prevTag="div" className="text-2xl font-bold text-orange-400" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="3" data-magicpath-path="Header.tsx">overlays.</span>
          <span className="text-white" data-magicpath-id="4" data-magicpath-path="Header.tsx">uno</span>
        </SortableContainer>
        <SortableContainer dndKitId="3f821180-51de-4c60-baa4-6eeb09e1004b" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-6" data-magicpath-id="5" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
      </SortableContainer>
      <SortableContainer dndKitId="6ea7ecbe-b088-4eb7-ac95-dbb208ab24e3" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="8" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="93bb9e43-8720-4e34-9f87-1a124f631e9d" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="9" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="10" data-magicpath-path="Header.tsx">Sign up</span>
        </SortableContainer>
        <SortableContainer dndKitId="3d1a6008-b53d-43fc-a890-adae199626fb" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="12" data-magicpath-path="Header.tsx">Login</span>
        </SortableContainer>
        <SortableContainer dndKitId="03e09117-74bd-4b64-8465-923e50988226" containerType="regular" prevTag="button" className="p-2 text-gray-300 hover:text-white transition-colors duration-200" data-magicpath-id="13" data-magicpath-path="Header.tsx">
          <Users className="w-5 h-5" data-magicpath-id="14" data-magicpath-path="Header.tsx" />
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};