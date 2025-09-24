import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <SortableContainer dndKitId="601bb5f9-6dc6-4507-b699-ea920a486af3" containerType="regular" prevTag="header" className="w-full border-b border-white/10" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <SortableContainer dndKitId="2788ae58-5601-466e-9816-06f094b00fbf" containerType="regular" prevTag="div" className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <SortableContainer dndKitId="6d5c793d-22bd-40d1-8252-c245f6f5f6ba" containerType="regular" prevTag="div" className="flex min-w-[92px] items-center justify-start" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          <a href="#" className="inline-flex items-center leading-none" data-magicpath-id="3" data-magicpath-path="Header.tsx">
            <span className="text-2xl font-bold text-orange-400" data-magicpath-id="4" data-magicpath-path="Header.tsx"><span data-magicpath-id="5" data-magicpath-path="Header.tsx">overlays.</span></span>
            <span className="text-2xl font-bold text-white" data-magicpath-id="6" data-magicpath-path="Header.tsx"><span data-magicpath-id="7" data-magicpath-path="Header.tsx">uno</span></span>
          </a>
        </SortableContainer>
        <SortableContainer dndKitId="ecbb817f-ae2a-452c-b8e4-23dabe5c693e" containerType="collection" prevTag="nav" className="ml-6 hidden gap-6 whitespace-nowrap md:flex" data-magicpath-id="8" data-magicpath-path="Header.tsx">
          {navigationItems.map(item => <a key={item} href="#" className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Header.tsx">
              <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Header.tsx">{item}</span>
            </a>)}
        </SortableContainer>
        <SortableContainer dndKitId="e2b4d514-6580-42da-9145-4a1a7647b305" containerType="regular" prevTag="div" className="ml-auto flex items-center gap-3" data-magicpath-id="11" data-magicpath-path="Header.tsx">
          <SortableContainer dndKitId="528dc330-7abc-4bf1-84a3-aa0f64f93564" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="12" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="13" data-magicpath-path="Header.tsx">Sign up</span>
          </SortableContainer>
          <SortableContainer dndKitId="d446ffb1-d353-4b93-b97e-71f14f44fa9a" containerType="regular" prevTag="button" className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white" data-magicpath-id="14" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="15" data-magicpath-path="Header.tsx">Login</span>
          </SortableContainer>
          <SortableContainer dndKitId="bdf655d0-dc38-4428-812d-ce2f497faaa5" containerType="regular" prevTag="button" className="inline-flex items-center gap-2 rounded-full bg-indigo-600/30 px-4 py-1.5 text-sm font-semibold text-indigo-200 hover:bg-indigo-600/40" data-magicpath-id="16" data-magicpath-path="Header.tsx">
            <span aria-hidden="true" className="sr-only" data-magicpath-id="17" data-magicpath-path="Header.tsx">Discord</span>
            <Users className="h-4 w-4" data-magicpath-id="18" data-magicpath-path="Header.tsx" />
            <span data-magicpath-id="19" data-magicpath-path="Header.tsx">Discord</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};