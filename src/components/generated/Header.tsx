import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="1766d0a6-f5aa-4be4-96c5-c3db8b237447" containerType="regular" prevTag="header" className="flex items-center justify-between px-6 py-4 border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="6ff5fcfd-f144-4082-bc25-320a15b3d924" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="18597f2f-783a-4461-9901-2659d8321826" containerType="regular" prevTag="div" className="text-2xl font-bold text-orange-400" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="3" data-magicpath-path="Header.tsx">overlays.</span>
          <span className="text-white" data-magicpath-id="4" data-magicpath-path="Header.tsx">uno</span>
        </SortableContainer>
        <SortableContainer dndKitId="918be1f6-e712-4e28-9f34-04ed5c4f7f79" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-6" data-magicpath-id="5" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
      </SortableContainer>
      <SortableContainer dndKitId="de4a2157-1d0d-4269-a667-8e895c12565e" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="8" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="2dfe27dd-65ab-4ac7-b65c-8e92d8f04cf2" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="9" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="10" data-magicpath-path="Header.tsx">Sign up</span>
        </SortableContainer>
        <SortableContainer dndKitId="5e112cad-772b-40b7-8b49-2dbfffb317a8" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="12" data-magicpath-path="Header.tsx">Login</span>
        </SortableContainer>
        <SortableContainer dndKitId="06a3f380-1a8e-4d05-8c0a-f93a340c3be6" containerType="regular" prevTag="button" className="p-2 text-gray-300 hover:text-white transition-colors duration-200" data-magicpath-id="13" data-magicpath-path="Header.tsx">
          <Users className="w-5 h-5" data-magicpath-id="14" data-magicpath-path="Header.tsx" />
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};