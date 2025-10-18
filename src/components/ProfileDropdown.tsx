import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  DollarSign,
  LogOut,
  Moon,
  Sun,
  FileText,
  ShoppingBag,
  User
} from 'lucide-react';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  userEmail?: string;
  userName?: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  isOpen,
  onClose,
  onLogout,
  userEmail = 'user@example.com',
  userName = 'User Name'
}) => {
  const [pos, setPos] = useState<{ left: number; top: number; right: number } | null>(null);
  const [origin, setOrigin] = useState<string | undefined>(undefined);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const elRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Add scrollbar styles
  React.useEffect(() => {
    const styleId = 'profile-dropdown-scrollbar-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .profile-dropdown-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .profile-dropdown-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .profile-dropdown-scrollbar::-webkit-scrollbar-thumb {
          background: #3a3a3a;
          border-radius: 3px;
        }
        .profile-dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4a4a4a;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const anchor = document.querySelector('[data-profile-anchor="true"]') as HTMLElement | null;
    if (!anchor) return setPos(null);
    const rect = anchor.getBoundingClientRect();
    // position the dropdown below the anchor, right-aligned
    setPos({ left: rect.left, top: rect.bottom + 8, right: window.innerWidth - rect.right });
    // compute transform-origin in px so scale animates from the profile icon visually
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    setOrigin(`${originX}px ${originY}px`);

    const handleResize = () => {
      const r = anchor.getBoundingClientRect();
      setPos({ left: r.left, top: r.bottom + 8, right: window.innerWidth - r.right });
    };

    const onDocClick = (e: MouseEvent) => {
      if (!elRef.current) return;
      if (elRef.current.contains(e.target as Node)) return;
      if (anchor.contains(e.target as Node)) return;
      onClose();
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', onDocClick);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const handleNavigation = (path: string) => {
    onClose();
    navigate(path);
  };

  const handleLogout = () => {
    onClose();
    onLogout();
  };

  const menuItems = [
    { icon: Settings, label: 'Settings', action: () => handleNavigation('/account') },
    { icon: DollarSign, label: 'Pricing', action: () => handleNavigation('/pricing') },
    { icon: FileText, label: 'Blog', action: () => handleNavigation('/blog') },
    {
      icon: ShoppingBag,
      label: 'Supplies',
      badge: 'New',
      action: () => handleNavigation('/supplies')
    },
  ];

  const content = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="profile-dropdown"
          ref={elRef}
          initial={{ y: -8, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -8, opacity: 0, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 500, damping: 32, mass: 0.6 }}
          layout
          style={{
            position: 'fixed',
            top: pos ? pos.top : 80,
            right: pos ? pos.right : 24,
            left: undefined,
            zIndex: 99999,
            transform: 'translateZ(0)',
            transformOrigin: origin,
          }}
          className="w-72 bg-[#1a1428]/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden profile-dropdown-scrollbar"
        >
          {/* User Info Section */}
          <div className="p-4 border-b border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-yellow-400 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white truncate">{userName}</div>
                <div className="text-xs text-gray-400 truncate">{userEmail}</div>
              </div>
            </div>
            <button
              onClick={() => {
                if (
                  ['/account', '/pricing', '/'].includes(location.pathname) ||
                  location.pathname.startsWith('/tools') ||
                  location.pathname.startsWith('/mytools')
                ) {
                  handleNavigation('/mytools');
                } else if (location.pathname === '/library' || location.pathname.startsWith('/myoverlays')) {
                  handleNavigation('/myoverlays');
                } else {
                  handleNavigation('/account');
                }
              }}
              className="w-full px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-white transition-colors cursor-pointer"
            >
              {['/account', '/pricing', '/'].includes(location.pathname) ||
              location.pathname.startsWith('/tools') ||
              location.pathname.startsWith('/mytools')
                ? 'View My Tools'
                : location.pathname === '/library' || location.pathname.startsWith('/myoverlays')
                ? 'View My Overlays'
                : 'Set up profile'}
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white transition-colors cursor-pointer group"
              >
                <item.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-left">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-gray-700/50 text-gray-300 rounded-full ml-2">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            {/* Theme Toggle */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group">
              <Moon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-sm flex-1 text-white">Theme</span>
              <button
                onClick={() => setIsDarkTheme(!isDarkTheme)}
                className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
                  isDarkTheme ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform flex items-center justify-center ${
                    isDarkTheme ? 'translate-x-5' : 'translate-x-0'
                  }`}
                >
                  {isDarkTheme ? (
                    <Moon className="w-3 h-3 text-purple-600" />
                  ) : (
                    <Sun className="w-3 h-3 text-yellow-500" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="p-2 border-t border-white/5">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-colors cursor-pointer group"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sign out</span>
            </button>
          </div>

          {/* Footer Links */}
          <div className="p-4 border-t border-white/5 bg-[#0f0a1a]/50">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <button
                onClick={() => handleNavigation('/privacy')}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Privacy
              </button>
              <span className="text-gray-700">•</span>
              <button
                onClick={() => handleNavigation('/terms')}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Terms
              </button>
              <span className="text-gray-700">•</span>
              <span className="text-gray-600">© 2025</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(content, document.body);
};

export default ProfileDropdown;
