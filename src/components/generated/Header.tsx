import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="284e8d2b-fe98-4261-935a-a0f9340136c7" containerType="regular" prevTag="header" className="flex items-center justify-between px-6 py-4 border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="650bd860-acd9-48b7-a028-be3f9ad9d2ed" containerType="regular" prevTag="div" className="flex items-center space-x-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="a74f707f-011f-4de7-81ea-dcd3dab647d7" containerType="regular" prevTag="div" className="text-2xl font-bold text-orange-400" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="3" data-magicpath-path="Header.tsx">overlays.</span>
          <span className="text-white" data-magicpath-id="4" data-magicpath-path="Header.tsx">uno</span>
        </SortableContainer>
        <SortableContainer dndKitId="9aaae90b-7244-4d9b-86b0-7bb1c8b7114e" containerType="collection" prevTag="nav" className="hidden md:flex items-center space-x-6" data-magicpath-id="5" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
      </SortableContainer>
      <SortableContainer dndKitId="73442467-eac5-440d-9ccb-d948d851affe" containerType="regular" prevTag="div" className="flex items-center space-x-4" data-magicpath-id="8" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="7de33b5b-a84e-4525-803c-5048128d5924" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="9" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="10" data-magicpath-path="Header.tsx">Sign up</span>
        </SortableContainer>
        <SortableContainer dndKitId="0f932a95-0f73-48b9-8bd4-274efbfed148" containerType="regular" prevTag="button" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <span data-magicpath-id="12" data-magicpath-path="Header.tsx">Login</span>
        </SortableContainer>
        <SortableContainer dndKitId="c4acfa73-9b35-4a4f-a5cc-babd812ec125" containerType="regular" prevTag="button" className="p-2 text-gray-300 hover:text-white transition-colors duration-200" data-magicpath-id="13" data-magicpath-path="Header.tsx">
          <Users className="w-5 h-5" data-magicpath-id="14" data-magicpath-path="Header.tsx" />
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};