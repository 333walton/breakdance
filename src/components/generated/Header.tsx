import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="bef71df0-d5c3-4df4-b6ab-81a047039c98" containerType="regular" prevTag="header" className="flex items-center justify-between px-6 py-4 border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="2e726922-691b-4237-bb71-d8597f34908c" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="4e30f282-01c1-4a7a-9d51-322e0f635849" containerType="regular" prevTag="div" className="text-2xl font-bold text-orange-400" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="3" data-magicpath-path="Header.tsx">overlays.</span>
          <span className="text-white" data-magicpath-id="4" data-magicpath-path="Header.tsx">uno</span>
        </SortableContainer>
        <SortableContainer dndKitId="b5135906-330d-448b-85cc-fd8c28302025" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-6" data-magicpath-id="5" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
      </SortableContainer>
      <SortableContainer dndKitId="386c930e-8c4c-4348-a276-4dff325c412f" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="8" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="5f40fa88-1c64-422d-b1ec-d45086186151" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="9" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="10" data-magicpath-path="Header.tsx">Sign up</span>
        </SortableContainer>
        <SortableContainer dndKitId="0c31d3bc-1aac-4699-98b6-49d86e3e27b1" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="12" data-magicpath-path="Header.tsx">Login</span>
        </SortableContainer>
        <SortableContainer dndKitId="64968a27-3144-43f8-aee7-27116267b034" containerType="regular" prevTag="button" className="p-2 text-gray-300 hover:text-white transition-colors duration-200" data-magicpath-id="13" data-magicpath-path="Header.tsx">
          <Users className="w-5 h-5" data-magicpath-id="14" data-magicpath-path="Header.tsx" />
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};