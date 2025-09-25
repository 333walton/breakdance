import React from 'react';
import { Users } from 'lucide-react';
const navigationItems = ['Library', 'How it works', 'Pricing', 'Blog', 'Stream Deck Plugin', 'Shop', 'Donate'];

// @component: Header
export const Header = () => {
  // @return
  return <header className="w-full border-b border-white/10">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-[92px] items-center justify-start">
          <a href="#" className="inline-flex items-center leading-none">
            <span className="text-2xl font-bold text-orange-400"><span>overlays.</span></span>
            <span className="text-2xl font-bold text-white"><span>uno</span></span>
          </a>
        </div>
        <nav className="ml-6 hidden gap-6 whitespace-nowrap md:flex">
          {navigationItems.map(item => <a key={item} href="#" className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white">
              <span>{item}</span>
            </a>)}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <button className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white">
            <span>Sign up</span>
          </button>
          <button className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white">
            <span>Login</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600/30 px-4 py-1.5 text-sm font-semibold text-indigo-200 hover:bg-indigo-600/40">
            <span aria-hidden="true" className="sr-only">Discord</span>
            <Users className="h-4 w-4" />
            <span>Discord</span>
          </button>
        </div>
      </div>
    </header>;
};