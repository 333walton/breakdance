import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="90928d34-d061-4c28-b0a9-00e522ee8edf" containerType="regular" prevTag="header" className="w-full border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="611104c2-5c6a-492d-a9e2-42859b79306b" containerType="regular" prevTag="div" className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="bc6d3d5d-708e-4ae3-b8a3-b443b51f3bbc" containerType="regular" prevTag="div" className="flex min-w-[92px] items-center justify-start" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <a href="#" className="inline-flex items-center leading-none" data-magicpath-id="3" data-magicpath-path="Header.tsx">
            <span className="text-2xl font-bold text-orange-400" data-magicpath-id="4" data-magicpath-path="Header.tsx"><span data-magicpath-id="5" data-magicpath-path="Header.tsx">overlays.</span></span>
            <span className="text-2xl font-bold text-white" data-magicpath-id="6" data-magicpath-path="Header.tsx"><span data-magicpath-id="7" data-magicpath-path="Header.tsx">uno</span></span>
          </a>
        </SortableContainer>
        <SortableContainer dndKitId="c4037f00-093f-4d7d-bddb-7c091acee8ac" containerType="collection" prevTag="nav" className="ml-6 hidden gap-6 whitespace-nowrap md:flex" data-magicpath-id="8" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
        <SortableContainer dndKitId="a9a490c7-6bdc-4f49-b963-9f01890442a0" containerType="regular" prevTag="div" className="ml-auto flex items-center gap-3" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <SortableContainer dndKitId="7443d85a-c68a-465b-8228-63577b5907cc" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="12" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="13" data-magicpath-path="Header.tsx">Sign up</span>
          </SortableContainer>
          <SortableContainer dndKitId="a18b1f30-b331-4af6-8f05-57042e3c669b" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="14" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="15" data-magicpath-path="Header.tsx">Login</span>
          </SortableContainer>
          <SortableContainer dndKitId="e4d5e10f-b40a-4d0f-b4e4-aecc5d2e560a" containerType="regular" prevTag="button" className="inline-flex items-center gap-2 rounded-full bg-indigo-600/30 px-4 py-1.5 text-sm font-semibold text-indigo-200 hover:bg-indigo-600/40" data-magicpath-id="16" data-magicpath-path="Header.tsx">
            <span aria-hidden="true" className="sr-only" data-magicpath-id="17" data-magicpath-path="Header.tsx">Discord</span>
            <Users className="h-4 w-4" data-magicpath-id="18" data-magicpath-path="Header.tsx" />
            <span data-magicpath-id="19" data-magicpath-path="Header.tsx">Discord</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};