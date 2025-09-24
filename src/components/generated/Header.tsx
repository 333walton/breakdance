import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="2ffc53f4-3d00-4627-9706-5dc18c6d6176" containerType="regular" prevTag="header" className="w-full border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="b11ab949-6d39-4e7a-b045-b3e242a03cef" containerType="regular" prevTag="div" className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="c23a6b52-6d02-4489-acad-bb738ed1e88e" containerType="regular" prevTag="div" className="flex min-w-[92px] items-center justify-start" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <a href="#" className="inline-flex items-center leading-none" data-magicpath-id="3" data-magicpath-path="Header.tsx">
            <span className="text-2xl font-bold text-orange-400" data-magicpath-id="4" data-magicpath-path="Header.tsx"><span data-magicpath-id="5" data-magicpath-path="Header.tsx">overlays.</span></span>
            <span className="text-2xl font-bold text-white" data-magicpath-id="6" data-magicpath-path="Header.tsx"><span data-magicpath-id="7" data-magicpath-path="Header.tsx">uno</span></span>
          </a>
        </SortableContainer>
        <SortableContainer dndKitId="bffcda60-1be7-4d54-a237-5608a07e502d" containerType="collection" prevTag="nav" className="ml-6 hidden gap-6 whitespace-nowrap md:flex" data-magicpath-id="8" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
        <SortableContainer dndKitId="97c56569-7760-4339-8e97-29c63ff1f83f" containerType="regular" prevTag="div" className="ml-auto flex items-center gap-3" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <SortableContainer dndKitId="5d583761-0b99-49fa-9d7e-6c0a52b21ef9" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="12" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="13" data-magicpath-path="Header.tsx">Sign up</span>
          </SortableContainer>
          <SortableContainer dndKitId="7a50ef21-8d18-43af-8b10-af3e4234553e" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="14" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="15" data-magicpath-path="Header.tsx">Login</span>
          </SortableContainer>
          <SortableContainer dndKitId="646f0658-2f39-42fe-aae8-35822323ac60" containerType="regular" prevTag="button" className="inline-flex items-center gap-2 rounded-full bg-indigo-600/30 px-4 py-1.5 text-sm font-semibold text-indigo-200 hover:bg-indigo-600/40" data-magicpath-id="16" data-magicpath-path="Header.tsx">
            <span aria-hidden="true" className="sr-only" data-magicpath-id="17" data-magicpath-path="Header.tsx">Discord</span>
            <Users className="h-4 w-4" data-magicpath-id="18" data-magicpath-path="Header.tsx" />
            <span data-magicpath-id="19" data-magicpath-path="Header.tsx">Discord</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};