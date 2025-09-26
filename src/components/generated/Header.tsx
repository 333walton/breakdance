import React from 'react';
import { Users } from 'lucide-react';


const navigationItems = ['Tools', 'How It Works', 'Demo', 'Live Breaks', 'Shop', 'About'];

// @component: Header
export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#26213a] to-[#302742] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          {/* Logo and Navigation Items Container */}
          <div className="flex items-center gap-6">
            {/* Logo - Removed constraining container */}
            <a href="#" className="flex items-center">
              <div className="bg-red-500 text-white px-2 py-1 text-xs">DEBUG</div>
              <img 
                src="/static/logo_rough.png" 
                alt="Logo" 
                className="h-8 w-auto object-contain border border-red-500"
                onLoad={() => console.log('Logo loaded successfully')}
                onError={(e) => console.error('Logo failed to load:', e)}
                style={{ width: 'auto', height: '32px', display: 'block' }}
              />
            </a>
            
            {/* Navigation Links */}
            <a href="#" className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white">
              Library
            </a>
            {navigationItems.map(item => (
              <a 
                key={item} 
                href="#" 
                className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
        
        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white transition-colors duration-200">
            Sign up
          </button>
          <button className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-gray-100 hover:border-white/40 hover:text-white transition-colors duration-200">
            Login
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-yellow-400 transition-colors duration-200">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;