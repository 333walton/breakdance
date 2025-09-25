import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="053fbb6c-0589-4ae3-9d95-61762da14931" containerType="regular" prevTag="header" className="w-full border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="ff1799f3-b4ef-4a39-80e0-293f430d42af" containerType="regular" prevTag="div" className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="28bcc060-a1bc-4cec-b5a5-c3e1336c44da" containerType="regular" prevTag="div" className="flex min-w-[92px] items-center justify-start" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <a href="#" className="inline-flex items-center leading-none" data-magicpath-id="3" data-magicpath-path="Header.tsx">
            <span className="text-2xl font-bold text-orange-400" data-magicpath-id="4" data-magicpath-path="Header.tsx"><span data-magicpath-id="5" data-magicpath-path="Header.tsx">overlays.</span></span>
            <span className="text-2xl font-bold text-white" data-magicpath-id="6" data-magicpath-path="Header.tsx"><span data-magicpath-id="7" data-magicpath-path="Header.tsx">uno</span></span>
          </a>
        </SortableContainer>
        <SortableContainer dndKitId="755eba9c-703f-43ca-b872-963f83b6d188" containerType="collection" prevTag="nav" className="ml-6 hidden gap-6 whitespace-nowrap md:flex" data-magicpath-id="8" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
        <SortableContainer dndKitId="26d94fb8-c498-4064-82b4-9e1a6a8064a5" containerType="regular" prevTag="div" className="ml-auto flex items-center gap-3" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <SortableContainer dndKitId="1a2437e0-63df-4e5a-a63f-cb57e1e2033c" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="12" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="13" data-magicpath-path="Header.tsx">Sign up</span>
          </SortableContainer>
          <SortableContainer dndKitId="26bce3d9-57e2-4793-9c23-be661bd71308" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="14" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="15" data-magicpath-path="Header.tsx">Login</span>
          </SortableContainer>
          <SortableContainer dndKitId="3f9f9615-c554-4ca3-a247-e7f7a96eaf9a" containerType="regular" prevTag="button" className="inline-flex items-center gap-2 rounded-full bg-indigo-600/30 px-4 py-1.5 text-sm font-semibold text-indigo-200 hover:bg-indigo-600/40" data-magicpath-id="16" data-magicpath-path="Header.tsx">
            <span aria-hidden="true" className="sr-only" data-magicpath-id="17" data-magicpath-path="Header.tsx">Discord</span>
            <Users className="h-4 w-4" data-magicpath-id="18" data-magicpath-path="Header.tsx" />
            <span data-magicpath-id="19" data-magicpath-path="Header.tsx">Discord</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};