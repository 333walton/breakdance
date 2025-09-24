import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="fdf0caf3-a6e8-4b15-b985-7edfe673b341" containerType="regular" prevTag="header" className="w-full border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="6d07c445-2264-428f-8c82-cffbef4f9c2d" containerType="regular" prevTag="div" className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="99ab181b-5fd3-4374-b0e8-5257dedf653a" containerType="regular" prevTag="div" className="flex min-w-[92px] items-center justify-start" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <a href="#" className="inline-flex items-center leading-none" data-magicpath-id="3" data-magicpath-path="Header.tsx">
            <span className="text-2xl font-bold text-orange-400" data-magicpath-id="4" data-magicpath-path="Header.tsx"><span data-magicpath-id="5" data-magicpath-path="Header.tsx">overlays.</span></span>
            <span className="text-2xl font-bold text-white" data-magicpath-id="6" data-magicpath-path="Header.tsx"><span data-magicpath-id="7" data-magicpath-path="Header.tsx">uno</span></span>
          </a>
        </SortableContainer>
        <SortableContainer dndKitId="f656343d-a2ed-46be-bace-f8c45838614b" containerType="collection" prevTag="nav" className="ml-6 hidden gap-6 whitespace-nowrap md:flex" data-magicpath-id="8" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
        <SortableContainer dndKitId="51d45589-ef45-4a9f-b28f-ea73cf38863d" containerType="regular" prevTag="div" className="ml-auto flex items-center gap-3" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <SortableContainer dndKitId="b432c85a-6960-4db7-81d7-1e1c3f3b42de" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="12" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="13" data-magicpath-path="Header.tsx">Sign up</span>
          </SortableContainer>
          <SortableContainer dndKitId="277f311c-1257-45ca-b912-4a4f2342bfe5" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="14" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="15" data-magicpath-path="Header.tsx">Login</span>
          </SortableContainer>
          <SortableContainer dndKitId="537ec983-5706-47d1-8a8f-f6af17eeef76" containerType="regular" prevTag="button" className="inline-flex items-center gap-2 rounded-full bg-indigo-600/30 px-4 py-1.5 text-sm font-semibold text-indigo-200 hover:bg-indigo-600/40" data-magicpath-id="16" data-magicpath-path="Header.tsx">
            <span aria-hidden="true" className="sr-only" data-magicpath-id="17" data-magicpath-path="Header.tsx">Discord</span>
            <Users className="h-4 w-4" data-magicpath-id="18" data-magicpath-path="Header.tsx" />
            <span data-magicpath-id="19" data-magicpath-path="Header.tsx">Discord</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};