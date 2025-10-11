import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronDown,
  ChevronRight,
  X,
  SlidersHorizontal,
  Wrench,
  Library,
  DollarSign,
  ChevronsLeft,
  ChevronsRight,
  Grid3x3,
  Layers,
  Sparkles,
  User,
  Image,
  LogOut,
  Folder,
  Star,
  Trash2,
  FolderPlus,
  ExternalLink,
  Play,
  ShoppingCart,
  Check,
} from 'lucide-react';
import { SignInCard as SignUpCard } from './SignUpCard';
import { SignInCard } from './SignInCard';
import { PasswordResetCard } from './PasswordResetCard';
import { useAuth } from '../../contexts/AuthContext';
type Overlay = {
  id: string;
  name: string;
  category: string;
  type: string;
  function: string;
  theme: string;
  isNew?: boolean;
  price: number;
};
const overlaysData: Overlay[] = [
  {
    id: '1',
    name: 'Bug - Future',
    category: 'nfl',
    type: 'bug',
    function: 'team board',
    theme: 'base',
    isNew: false,
    price: 8,
  },
  {
    id: '2',
    name: 'Lower Third - Future',
    category: 'mlb',
    type: 'lower third',
    function: 'team board',
    theme: 'downtown',
    isNew: false,
    price: 6,
  },
  {
    id: '3',
    name: 'Ticker - Zombie',
    category: 'nba',
    type: 'baseline',
    function: 'text scroller',
    theme: 'kaboom',
    isNew: true,
    price: 10,
  },
  {
    id: '4',
    name: 'Panel - Stadium',
    category: 'nhl',
    type: 'panel',
    function: 'counter',
    theme: 'color blast',
    isNew: false,
    price: 12,
  },
  {
    id: '5',
    name: 'Image Loop - Retro',
    category: 'mls',
    type: 'image loop',
    function: 'timer',
    theme: 'base',
    isNew: true,
    price: 5,
  },
  {
    id: '6',
    name: 'Scoreboard - Classic',
    category: 'nfl',
    type: 'panel',
    function: 'team board',
    theme: 'downtown',
    isNew: false,
    price: 9,
  },
  {
    id: '7',
    name: 'Counter - Modern',
    category: 'mlb',
    type: 'baseline',
    function: 'counter',
    theme: 'kaboom',
    isNew: false,
    price: 7,
  },
  {
    id: '8',
    name: 'Timer - Neon',
    category: 'nba',
    type: 'bug',
    function: 'timer',
    theme: 'color blast',
    isNew: true,
    price: 11,
  },
  {
    id: '9',
    name: 'Scroller - Wave',
    category: 'nhl',
    type: 'image loop',
    function: 'text scroller',
    theme: 'base',
    isNew: false,
    price: 4,
  },
];
type FilterState = {
  category: string[];
  type: string[];
  function: string[];
  theme: string[];
};
const filterOptions = {
  category: ['nfl', 'mlb', 'nba', 'nhl', 'mls'],
  type: ['panel', 'image loop', 'bug', 'baseline', 'vertical scroller', 'horizontal scroller'],
  function: ['team board', 'counter', 'text scroller', 'image frame', 'music visualizer'],
  theme: ['base', 'downtown', 'kaboom', 'stained glass', 'color blast'],
};
const filterIcons: Record<string, React.ElementType> = {
  category: Grid3x3,
  type: Layers,
  function: Sparkles,
  theme: SlidersHorizontal,
};

// Display labels for filter options
const filterLabels: Record<string, string> = {
  nfl: 'NFL',
  mlb: 'MLB',
  nba: 'NBA',
  nhl: 'NHL',
  mls: 'MLS',
};
type SortOption = 'popular' | 'trending' | 'a-to-z' | 'recent' | 'bookmarked';
const sortOptions: Array<{
  value: SortOption;
  label: string;
}> = [
  {
    value: 'popular',
    label: 'Popular',
  },
  {
    value: 'trending',
    label: 'Trending',
  },
  {
    value: 'a-to-z',
    label: 'A to Z',
  },
  {
    value: 'recent',
    label: 'Recent',
  },
  {
    value: 'bookmarked',
    label: 'Bookmarked',
  },
];
type NavItem = 'Tools' | 'Library' | 'Account' | 'Pricing' | 'Logout' | 'MyOverlays' | 'MyImages';

type TopNavItem = { label: string };
const navigationItems: TopNavItem[] = [
  { label: 'Library' },
  { label: 'Tools' },
  { label: 'How It Works' },
  { label: 'Live Breaks' },
  { label: 'Shop' },
  { label: 'About' },
];

// @component: OverlaysLibraryGridPage
interface OverlaysLibraryGridPageProps {
  initialView?: NavItem;
}

export const OverlaysLibraryGridPage = ({
  initialView = 'Library',
}: OverlaysLibraryGridPageProps = {}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, isGoLiveActive, setIsGoLiveActive } = useAuth();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [navMaxHeight, setNavMaxHeight] = useState<string>('calc(100vh - 64px)');
  const [showSignUpOverlay, setShowSignUpOverlay] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
  const [showPasswordResetOverlay, setShowPasswordResetOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize filters from location state if provided
  const [filters, setFilters] = useState<FilterState>(() => {
    const state = location.state as { filters?: FilterState } | null;
    return state?.filters || {
      category: [],
      type: [],
      function: [],
      theme: [],
    };
  });

  // Initialize expanded sections from location state if provided
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const state = location.state as { expandedSections?: string[] } | null;
    return state?.expandedSections
      ? new Set(state.expandedSections)
      : new Set(['type', 'function', 'category', 'theme']);
  });

  // Initialize show more sections from location state if provided
  const [showMoreSections, setShowMoreSections] = useState<Set<string>>(() => {
    const state = location.state as { showMoreSections?: string[] } | null;
    return state?.showMoreSections ? new Set(state.showMoreSections) : new Set();
  });
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [showNavText, setShowNavText] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState<NavItem>(initialView);
  const [sortBy, setSortBy] = useState<SortOption>('a-to-z');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [myOverlaysExpanded, setMyOverlaysExpanded] = useState(false);
  const [myImagesExpanded, setMyImagesExpanded] = useState(false);
  const [myToolsExpanded, setMyToolsExpanded] = useState(false);
  const [showAsideText, setShowAsideText] = useState(false);

  // Get highlighted tool from location state or manage with local state
  const initialHighlightedTool = (location.state as { highlightedTool?: string } | null)?.highlightedTool;
  const [selectedTool, setSelectedTool] = useState<string | undefined>(initialHighlightedTool);
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());
  const [bookmarkedOverlays, setBookmarkedOverlays] = useState<Set<string>>(new Set());
  const [cartItems, setCartItems] = useState<Set<string>>(new Set());
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const headerHeight = headerRef.current
    ? Math.ceil(headerRef.current.getBoundingClientRect().height)
    : 64;
  const navTop = navRef.current
    ? Math.ceil(navRef.current.getBoundingClientRect().top)
    : headerHeight;
  const filterAsideRef = useRef<HTMLElement | null>(null);
  const [asideRect, setAsideRect] = useState<{ top: number; height: number } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerRect, setContainerRect] = useState<{ top: number; height: number } | null>(null);

  // Update activeNavItem when initialView prop changes
  useEffect(() => {
    setActiveNavItem(initialView);
  }, [initialView]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortDropdownOpen(false);
      }
    };
    if (isSortDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSortDropdownOpen]);

  useEffect(() => {
    const updateNavHeight = () => {
      const headerHeight = headerRef.current
        ? headerRef.current.getBoundingClientRect().height
        : 64;
      setNavMaxHeight(`calc(100vh - ${Math.ceil(headerHeight)}px)`);
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  useEffect(() => {
    if (isNavExpanded) {
      // Delay showing text until panel expansion animation completes
      const timer = setTimeout(() => setShowNavText(true), 320);
      return () => clearTimeout(timer);
    } else {
      // Hide text immediately when collapsing
      setShowNavText(false);
    }
  }, [isNavExpanded]);

  useEffect(() => {
    if (isFilterOpen) {
      // Delay showing text until panel slide-in animation completes
      const timer = setTimeout(() => setShowAsideText(true), 320);
      return () => clearTimeout(timer);
    } else {
      // Hide text immediately when closing
      setShowAsideText(false);
    }
  }, [isFilterOpen]);
  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };
  const toggleShowMore = (section: string) => {
    setShowMoreSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };
  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => {
      const current = prev[category];
      const next = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
      return {
        ...prev,
        [category]: next,
      };
    });
  };
  const clearFilters = () => {
    setFilters({
      category: [],
      type: [],
      function: [],
      theme: [],
    });
  };

  const toggleBookmark = (overlayId: string) => {
    setBookmarkedOverlays(prev => {
      const next = new Set(prev);
      if (next.has(overlayId)) {
        next.delete(overlayId);
      } else {
        next.add(overlayId);
      }
      return next;
    });
  };

  const addToCart = (overlayId: string) => {
    setCartItems(prev => {
      const next = new Set(prev);
      next.add(overlayId);
      return next;
    });
  };

  const toggleToolSelection = (tool: string) => {
    setSelectedTools(prev => {
      const next = new Set(prev);
      if (next.has(tool)) {
        next.delete(tool);
      } else {
        next.add(tool);
      }
      return next;
    });
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);
  const filteredOverlays = useMemo(() => {
    let results = overlaysData.filter(overlay => {
      const matchesSearch =
        searchQuery === '' ||
        overlay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        overlay.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        overlay.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        filters.category.length === 0 || filters.category.includes(overlay.category);
      const matchesType = filters.type.length === 0 || filters.type.includes(overlay.type);
      const matchesFunction =
        filters.function.length === 0 || filters.function.includes(overlay.function);
      const matchesTheme = filters.theme.length === 0 || filters.theme.includes(overlay.theme);
      return matchesSearch && matchesCategory && matchesType && matchesFunction && matchesTheme;
    });

    // Apply sorting/filtering
    if (sortBy === 'bookmarked') {
      // Filter to show only bookmarked items
      results = results.filter(overlay => bookmarkedOverlays.has(overlay.id));
    } else if (sortBy === 'a-to-z') {
      results = [...results].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'recent') {
      results = [...results].sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
    }
    // Add other sort options as needed in the future

    return results;
  }, [searchQuery, filters, sortBy, bookmarkedOverlays]);

  useEffect(() => {
    const measureAside = () => {
      if (filterAsideRef.current) {
        const rect = filterAsideRef.current.getBoundingClientRect();
        setAsideRect({ top: Math.ceil(rect.top), height: Math.ceil(rect.height) });
      } else {
        setAsideRect(null);
      }
    };
    measureAside();
    window.addEventListener('resize', measureAside);
    return () => window.removeEventListener('resize', measureAside);
  }, [isFilterOpen]);

  useEffect(() => {
    const measureContainer = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerRect({ top: Math.ceil(rect.top), height: Math.ceil(rect.height) });
      } else {
        setContainerRect(null);
      }
    };
    measureContainer();
    window.addEventListener('resize', measureContainer);
    return () => window.removeEventListener('resize', measureContainer);
  }, []);

  // @return
  return (
    <div
      className="bg-gradient-to-b from-[#1a1428] via-[#221832] to-[#2a1e3a] text-white"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      <style>{`
        .filter-panel-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .filter-panel-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .filter-panel-scrollbar::-webkit-scrollbar-thumb {
          background: #3a3a3a;
          border-radius: 3px;
        }
        .filter-panel-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4a4a4a;
        }
        .filter-checkbox {
          appearance: none;
          width: 16px;
          height: 16px;
          border: 2px solid #6b7280;
          border-radius: 3px;
          background-color: transparent;
          cursor: pointer;
          position: relative;
        }
        .filter-checkbox:checked {
          background-color: white;
          border-color: #6b7280;
        }
        .filter-checkbox:checked::after {
          content: '';
          position: absolute;
          left: 4px;
          top: 1px;
          width: 4px;
          height: 8px;
          border: solid black;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        .filter-panel-text * {
          font-size: 96% !important;
        }
        .filter-panel-text h2 {
          font-size: 150% !important;
        }
        @keyframes go-live-pulse {
          0%, 100% {
            box-shadow: 0 0 0 2px rgba(255, 197, 66, 0.5);
          }
          50% {
            box-shadow: 0 0 0 3px rgba(255, 197, 66, 0.4);
          }
        }
        .go-live-active {
          animation: go-live-pulse 3s ease-in-out infinite;
        }
      `}</style>
      {/* Header */}
      <header
        ref={headerRef}
        className="bg-gradient-to-b from-[#1f1a30] to-[#261f35] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50"
      >
        <div
          className="w-full px-6 flex items-center justify-between"
          style={{ paddingTop: '4px', paddingBottom: '4px' }}
        >
          <div className="flex items-center">
            {/* Logo */}
            <div
              className="text-2xl font-bold flex items-center flex-shrink-0"
              style={{ marginLeft: '4px' }}
            >
              <img
                src="/static/logo_rough2.png"
                alt="Logo"
                onClick={() => navigate('/')}
                className="h-16 w-auto object-contain cursor-pointer"
              />
              <span
                className="text-orange-500"
                style={{
                  display: 'none',
                }}
              >
                overlays.
              </span>
              <span
                className="text-white"
                style={{
                  display: 'none',
                }}
              >
                uno
              </span>
            </div>

            {/* Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8 ml-12"
              style={{ marginLeft: 'calc(var(--spacing) * 21)' }}
            >
              {navigationItems.map(nav => (
                <a
                  key={nav.label}
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (nav.label === 'Library') {
                      navigate('/library');
                    } else if (nav.label === 'Tools') {
                      navigate('/tools');
                    }
                  }}
                  className={`transition-colors text-sm font-bold tracking-wide relative cursor-pointer ${(nav.label === 'Library' && location.pathname.startsWith('/library')) || (nav.label === 'Tools' && location.pathname.startsWith('/tools')) ? 'text-orange-300' : 'text-gray-200 hover:text-orange-300'}`}
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  <span
                    style={{
                      fontSize: '16px',
                    }}
                  >
                    {nav.label}
                  </span>
                  {nav.label === 'Live Breaks' ? (
                    <span
                      aria-hidden="true"
                      className="absolute block"
                      style={{
                        width: '8px',
                        height: '8px',
                        background: 'oklch(0.75 0.14 151.711)',
                        borderRadius: '9999px',
                        top: '-4px',
                        right: '-10px',
                      }}
                    />
                  ) : null}
                </a>
              ))}
            </nav>
          </div>

          {/* Auth & Discord */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {!isAuthenticated && (
              <button
                onClick={() => setShowSignUpOverlay(true)}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
              >
                <span>Sign up</span>
              </button>
            )}
            {!isAuthenticated ? (
              <button
                onClick={() => setShowLoginOverlay(true)}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
              >
                <span>Login</span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/account')}
                className="p-2 text-white border border-white/20 rounded-full transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
                aria-label="Go to account page"
              >
                <User className="w-6 h-6" />
              </button>
            )}
            <button className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center justify-center cursor-pointer relative">
              <ShoppingCart
                className="w-5 h-5"
                style={{
                  color: 'rgb(0 0 0)',
                }}
              />
              {cartItems.size > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  style={{
                    fontSize: '10px',
                  }}
                >
                  {cartItems.size}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className="flex h-screen overflow-hidden relative"
        ref={el => {
          containerRef.current = el as HTMLDivElement | null;
        }}
      >
        <motion.nav
          initial={false}
          animate={{
            width: isNavExpanded ? 210 : 80,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="border-r border-purple-500/30 bg-[#0f0a1a]/95 backdrop-blur-sm flex flex-col flex-shrink-0 relative z-30"
          ref={el => {
            navRef.current = el as HTMLDivElement | null;
          }}
          style={{ maxHeight: navMaxHeight }}
        >
          <div className="flex items-end pb-0 px-4" style={{ paddingTop: 'calc(var(--spacing) * 10)' }}>
            <button
              onClick={() => setIsGoLiveActive(!isGoLiveActive)}
              className={`bg-gradient-to-r from-[#FF5C25] to-[#FFC542] hover:from-[#FF4D1F] hover:to-[#FFB838] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out rounded-full font-bold text-black focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none cursor-pointer flex items-center justify-center h-12 overflow-hidden ${isGoLiveActive ? 'go-live-active' : ''}`}
              style={{
                fontFamily: 'Nunito, sans-serif',
                width: isNavExpanded ? '100%' : '48px',
              }}
              title={!isNavExpanded ? 'Go Live' : undefined}
            >
              <Play
                className="w-5 h-5 transition-opacity duration-200 absolute"
                style={{
                  opacity: !isNavExpanded ? 1 : 0,
                  pointerEvents: !isNavExpanded ? 'auto' : 'none',
                }}
              />
              <div
                className="flex items-center space-x-2 transition-opacity duration-200"
                style={{
                  opacity: showNavText ? 1 : 0,
                  pointerEvents: showNavText ? 'auto' : 'none',
                }}
              >
                <span>Go Live</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </button>
          </div>
          <div className="p-4 overflow-y-auto flex-1 pb-28 mt-[30px]">
            <div className="space-y-2">
              <button
                onClick={() => navigate('/tools')}
                className={`w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer border whitespace-nowrap overflow-hidden ${activeNavItem === 'Tools' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                style={{
                  height: '48px',
                }}
                title={!isNavExpanded ? 'Tools' : undefined}
              >
                <div className="flex items-center justify-center flex-shrink-0" style={{ width: '48px' }}>
                  <Wrench className="h-5 w-5" />
                </div>
                <span
                  className="text-sm font-medium transition-opacity duration-200"
                  style={{
                    paddingLeft: '12px',
                    opacity: showNavText ? 1 : 0,
                    pointerEvents: showNavText ? 'auto' : 'none',
                  }}
                >
                  Tools
                </span>
              </button>

              <button
                onClick={() => navigate('/library')}
                className={`w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer border whitespace-nowrap overflow-hidden ${activeNavItem === 'Library' ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/40' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                style={{
                  height: '48px',
                }}
                title={!isNavExpanded ? 'Library' : undefined}
              >
                <div className="flex items-center justify-center flex-shrink-0" style={{ width: '48px' }}>
                  <Library className="h-5 w-5" />
                </div>
                <span
                  className="text-sm font-medium transition-opacity duration-200"
                  style={{
                    paddingLeft: '12px',
                    opacity: showNavText ? 1 : 0,
                    pointerEvents: showNavText ? 'auto' : 'none',
                  }}
                >
                  Library
                </span>
              </button>

              {activeNavItem === 'Tools' && isNavExpanded && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto',
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="space-y-2"
                >
                  <div
                    className="border-t border-white/5 my-4"
                    style={{
                      borderTopWidth: '2px',
                    }}
                  />

                  <div>
                    <button
                      onClick={() => setMyToolsExpanded(!myToolsExpanded)}
                      className="w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white"
                      style={{
                        height: '48px',
                      }}
                    >
                      <div className="flex items-center justify-center flex-shrink-0" style={{ width: '48px' }}>
                        <Wrench className="h-5 w-5" />
                      </div>
                      <span
                        className="text-sm font-medium transition-opacity duration-200"
                        style={{
                          paddingLeft: '12px',
                          opacity: showNavText ? 1 : 0,
                          pointerEvents: showNavText ? 'auto' : 'none',
                        }}
                      >
                        My Tools
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 transition-all duration-200 ml-auto mr-4 ${myToolsExpanded ? 'rotate-180' : ''}`}
                        style={{
                          opacity: showNavText ? 1 : 0,
                          pointerEvents: showNavText ? 'auto' : 'none',
                        }}
                      />
                    </button>

                    <AnimatePresence>
                      {myToolsExpanded && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="overflow-hidden pl-4 space-y-1 mt-1"
                        >
                          {selectedTools.size === 0 ? (
                            <div className="px-4 py-2 text-sm text-gray-500">
                              <span>No tools selected</span>
                            </div>
                          ) : (
                            Array.from(selectedTools).map(tool => (
                              <button
                                key={tool}
                                onClick={() => {
                                  // Could navigate to specific tool or just highlight it
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-gray-400 hover:bg-white/5 hover:text-white text-sm"
                              >
                                <Wrench className="h-4 w-4 flex-shrink-0" />
                                <span>{tool}</span>
                              </button>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {activeNavItem === 'Library' && isNavExpanded && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto',
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="space-y-2"
                >
                  <div
                    className="border-t border-white/5 my-4"
                    style={{
                      borderTopWidth: '2px',
                    }}
                  />

                  <div>
                    <button
                      onClick={() => setMyOverlaysExpanded(!myOverlaysExpanded)}
                      className="w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white"
                      style={{
                        height: '48px',
                      }}
                    >
                      <div className="flex items-center justify-center flex-shrink-0" style={{ width: '48px' }}>
                        <Layers className="h-5 w-5" />
                      </div>
                      <span
                        className="text-sm font-medium transition-opacity duration-200"
                        style={{
                          paddingLeft: '12px',
                          opacity: showNavText ? 1 : 0,
                          pointerEvents: showNavText ? 'auto' : 'none',
                        }}
                      >
                        My Overlays
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 transition-all duration-200 ml-auto mr-4 ${myOverlaysExpanded ? 'rotate-180' : ''}`}
                        style={{
                          opacity: showNavText ? 1 : 0,
                          pointerEvents: showNavText ? 'auto' : 'none',
                        }}
                      />
                    </button>

                    <AnimatePresence>
                      {myOverlaysExpanded && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="overflow-hidden pl-4 space-y-1 mt-1"
                        >
                          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-gray-400 hover:bg-white/5 hover:text-white text-sm">
                            <Folder className="h-4 w-4 flex-shrink-0" />
                            <span>All</span>
                          </button>
                          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-gray-400 hover:bg-white/5 hover:text-white text-sm">
                            <Star className="h-4 w-4 flex-shrink-0" />
                            <span>Favorites</span>
                          </button>
                          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-gray-400 hover:bg-white/5 hover:text-white text-sm">
                            <Image className="h-4 w-4 flex-shrink-0" />
                            <span>My Images</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {activeNavItem === 'Library' && !isNavExpanded && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto',
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="space-y-2"
                >
                  <div
                    className="border-t border-white/5 my-4"
                    style={{
                      borderTopWidth: '2px',
                    }}
                  />

                  <button
                    onClick={() => setActiveNavItem('MyOverlays')}
                    className="w-full flex items-center justify-center px-0 py-3 rounded-lg transition-all duration-200 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white"
                    style={{
                      aspectRatio: '1/1',
                      width: '48px',
                      height: '48px',
                      padding: '0',
                    }}
                    title="My Overlays"
                  >
                    <Layers className="h-5 w-5 flex-shrink-0" />
                  </button>

                  <div
                    className="border-t border-white/5 my-4"
                    style={{
                      borderTopWidth: '2px',
                    }}
                  />

                  <button
                    onClick={() => setActiveNavItem('MyImages')}
                    className="w-full flex items-center justify-center px-0 py-3 rounded-lg transition-all duration-200 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white"
                    style={{
                      aspectRatio: '1/1',
                      width: '48px',
                      height: '48px',
                      padding: '0',
                    }}
                    title="My Images"
                  >
                    <Image className="h-5 w-5 flex-shrink-0" />
                  </button>
                </motion.div>
              )}

              {/* bottom controls moved below so they stay anchored to the bottom */}
            </div>
          </div>
          {/* bottom controls container: Pricing, Account, divider, Collapse */}
          <div className="p-4 absolute bottom-0 left-0 right-0 bg-[#0f0a1a]/95 z-10">
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/pricing')}
                  className={`w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer border whitespace-nowrap overflow-hidden ${activeNavItem === 'Pricing' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                  style={{
                    height: '48px',
                  }}
                  title={!isNavExpanded ? (isAuthenticated ? 'Subscription' : 'Pricing') : undefined}
                >
                  <div className="flex items-center justify-center flex-shrink-0" style={{ width: '48px' }}>
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <span
                    className="text-sm font-medium transition-opacity duration-200"
                    style={{
                      paddingLeft: '12px',
                      opacity: showNavText ? 1 : 0,
                      pointerEvents: showNavText ? 'auto' : 'none',
                    }}
                  >
                    {isAuthenticated ? 'Subscription' : 'Pricing'}
                  </span>
                </button>

                <button
                  onClick={() => navigate('/account')}
                  className={`w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer border whitespace-nowrap overflow-hidden ${activeNavItem === 'Account' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                  style={{
                    height: '48px',
                  }}
                  title={!isNavExpanded ? 'Account' : undefined}
                >
                  <div className="flex items-center justify-center flex-shrink-0" style={{ width: '48px' }}>
                    <User className="h-5 w-5" />
                  </div>
                  <span
                    className="text-sm font-medium transition-opacity duration-200"
                    style={{
                      paddingLeft: '12px',
                      opacity: showNavText ? 1 : 0,
                      pointerEvents: showNavText ? 'auto' : 'none',
                    }}
                  >
                    Account
                  </span>
                </button>

                <div className="border-t border-white/5 my-2" />

                <button
                  onClick={() => setIsNavExpanded(!isNavExpanded)}
                  className="w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white"
                  style={{
                    height: '48px',
                  }}
                  title={!isNavExpanded ? 'Expand' : 'Collapse'}
                >
                  <div className="flex items-center justify-center flex-shrink-0" style={{ width: '48px' }}>
                    {isNavExpanded ? <ChevronsLeft className="h-5 w-5" /> : <ChevronsRight className="h-5 w-5" />}
                  </div>
                  <span
                    className="text-sm font-medium transition-opacity duration-200"
                    style={{
                      paddingLeft: '12px',
                      opacity: showNavText ? 1 : 0,
                      pointerEvents: showNavText ? 'auto' : 'none',
                    }}
                  >
                    Collapse
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.nav>

        <AnimatePresence mode="wait">
          {isFilterOpen && activeNavItem === 'Library' && (
            <motion.aside
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 236,
                opacity: 1,
              }}
              exit={{
                width: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              className="border-r border-white/10 bg-[#1a1428]/80 backdrop-blur-sm overflow-y-auto filter-panel-scrollbar relative z-0 overflow-hidden"
              style={{ maxHeight: navMaxHeight }}
              ref={el => {
                filterAsideRef.current = el as HTMLElement | null;
              }}
            >
              <button
                onClick={() => setIsFilterOpen(false)}
                aria-label="Collapse filters"
                className="absolute top-3 right-3 p-2 rounded-md hover:bg-white/5 transition-colors z-50"
              >
                <ChevronsLeft className="h-4 w-4" />
              </button>
              <div className="p-11 filter-panel-text" style={{ minWidth: '236px', padding: 'calc(var(--spacing) * 8)' }}>
                <div className="mb-6 relative">
                  <h2 className="text-xl font-bold">
                    <span
                      className="transition-opacity duration-200"
                      style={{
                        opacity: showAsideText ? 1 : 0,
                      }}
                    >
                      Filters
                    </span>
                  </h2>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-purple-400 hover:text-purple-300 transition-all duration-200 absolute"
                      style={{
                        opacity: showAsideText ? 1 : 0,
                        pointerEvents: showAsideText ? 'auto' : 'none',
                        right: 0,
                        top: '100%',
                        marginTop: '8px',
                      }}
                    >
                      <span>Clear All</span>
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {(Object.keys(filterOptions) as Array<keyof typeof filterOptions>).map(
                    filterKey => {
                      const IconComponent = filterIcons[filterKey];
                      const options = filterOptions[filterKey];
                      const isShowingMore = showMoreSections.has(filterKey);
                      const displayedOptions = isShowingMore ? options : options.slice(0, 4);
                      const hasMore = options.length > 4;
                      return (
                        <div
                          key={filterKey}
                          className="border-b border-white/5 pb-4 transition-opacity duration-200"
                          style={{
                            borderBottomWidth: '3px',
                            opacity: showAsideText ? 1 : 0,
                          }}
                        >
                          <button
                            onClick={() => toggleSection(filterKey)}
                            className="w-full flex items-center justify-between py-2 hover:text-white/90 transition-colors"
                            style={{
                              pointerEvents: showAsideText ? 'auto' : 'none',
                            }}
                          >
                            <div className="flex items-center gap-2">
                              {IconComponent && <IconComponent className="h-4 w-4" />}
                              <span className="text-sm font-semibold uppercase tracking-wide">
                                {filterKey}
                              </span>
                            </div>
                            {expandedSections.has(filterKey) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </button>

                          <AnimatePresence>
                            {expandedSections.has(filterKey) && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: 'auto',
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-2 pt-2">
                                  {displayedOptions.map(option => {
                                    const displayLabel = filterLabels[option] || option;
                                    return (
                                      <label
                                        key={option}
                                        className="flex items-center gap-3 px-2 rounded hover:bg-white/5 cursor-pointer transition-colors group"
                                      >
                                        <input
                                          type="checkbox"
                                          checked={filters[filterKey].includes(option)}
                                          onChange={() => toggleFilter(filterKey, option)}
                                          className="filter-checkbox"
                                        />
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors capitalize">
                                          {displayLabel}
                                        </span>
                                      </label>
                                    );
                                  })}
                                  <button
                                    onClick={() => toggleShowMore(filterKey)}
                                    className="text-xs transition-colors py-1.5 px-2 cursor-pointer"
                                    style={{
                                      color: 'oklch(0.75 0.183 55.934)',
                                    }}
                                  >
                                    <span>{isShowingMore ? 'Show less -' : 'Show more +'}</span>
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Expand tab when filters are closed */}
        {!isFilterOpen && activeNavItem === 'Library' && (
          <div
            aria-hidden="false"
            className="absolute z-40 border-r border-purple-500/30 bg-[#0f0a1a]/95 backdrop-blur-sm flex flex-col flex-shrink-0 items-center"
            style={{
              left: `${isNavExpanded ? 210 : 80}px`,
              // Prefer computing header bottom relative to the container so the collapsed strip
              // sits flush under the header. Fall back to previous measurements if refs are
              // not available yet.
              top:
                headerRef.current && containerRef.current
                  ? `${Math.ceil(headerRef.current.getBoundingClientRect().bottom - containerRef.current.getBoundingClientRect().top)}px`
                  : headerRef.current
                    ? `${Math.ceil(headerRef.current.getBoundingClientRect().height)}px`
                    : containerRect
                      ? `${containerRect.top}px`
                      : asideRect
                        ? `${asideRect.top}px`
                        : `${navTop}px`,
              height: containerRect
                ? `${containerRect.height}px`
                : asideRect
                  ? `${asideRect.height}px`
                  : navMaxHeight,
              width: '80px',
            }}
          >
            <button
              onClick={() => setIsFilterOpen(true)}
              aria-label="Open filters"
              className={`w-full flex items-center justify-center px-0 py-3 rounded-lg transition-all duration-200 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white`}
              style={{
                aspectRatio: '1/1',
                width: '48px',
                height: '48px',
                padding: '0',
                marginTop: '8px',
              }}
            >
              <SlidersHorizontal className="lucide lucide-sliders-horizontal h-5 w-5" />
            </button>
          </div>
        )}

        <main
          className="flex-1 overflow-y-auto filter-panel-scrollbar transition-all duration-500 ease-in-out bg-[#1a1428]"
          style={{
            maxHeight: navMaxHeight,
            marginLeft: !isFilterOpen && activeNavItem === 'Library' ? '80px' : '0'
          }}
        >
          {activeNavItem === 'Library' && (
            <>
              {/* Fixed header section */}
              <div className="flex-shrink-0 bg-[#1a1428] sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 pt-6 lg:px-8 lg:pt-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      {/* filter open button removed from the header search area */}
                      <div className="relative w-1/2">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search Library"
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                          className="w-full bg-[rgb(168,85,247)]/10 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white/10 transition-all"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Clear search"
                          >
                            <X className="h-4 w-4 text-gray-400" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h1 className="text-3xl font-bold">
                        <span>Library</span>
                      </h1>
                      <div className="flex items-center gap-3">
                        <div className="relative" ref={sortDropdownRef}>
                          <button
                            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
                          >
                            <span>{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${isSortDropdownOpen ? 'rotate-180' : ''}`}
                            />
                          </button>

                          <AnimatePresence>
                            {isSortDropdownOpen && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  y: -10,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: -10,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                                className="absolute right-0 w-40 bg-[#2a1e3a] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
                                style={{
                                  marginTop: 'calc(var(--spacing) * 0.3)',
                                }}
                              >
                                {sortOptions.map(option => (
                                  <button
                                    key={option.value}
                                    onClick={() => {
                                      setSortBy(option.value);
                                      setIsSortDropdownOpen(false);
                                    }}
                                    className={`w-full px-4 py-3 text-left text-sm transition-colors cursor-pointer ${sortBy === option.value ? 'bg-purple-500/20 text-purple-300' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                                  >
                                    <span>{option.label}</span>
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <span className="text-sm text-gray-400">
                          <span>{filteredOverlays.length} results</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            {/* Scrollable content section */}
            <div className="flex-1 overflow-y-auto filter-panel-scrollbar">
              <div className="max-w-7xl mx-auto p-6 lg:p-8">
                {filteredOverlays.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">
                      <span>No overlays found matching your criteria</span>
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
                    {filteredOverlays.map(overlay => (
                    <motion.div
                      key={overlay.id}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="group relative bg-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/10 rounded-2xl"
                      style={{ aspectRatio: '4/3' }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add eye icon functionality here
                        }}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-20"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>

                      <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(overlay.id);
                          }}
                          className={`p-2 rounded-full transition-colors ${
                            bookmarkedOverlays.has(overlay.id)
                              ? 'bg-yellow-500/30 hover:bg-yellow-500/40'
                              : 'bg-white/10 hover:bg-white/20'
                          }`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={bookmarkedOverlays.has(overlay.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={bookmarkedOverlays.has(overlay.id) ? 'text-yellow-400' : 'text-white'}>
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </button>
                        {overlay.isNew && (
                          <span className="bg-[#d97706] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide flex-shrink-0">
                            NEW
                          </span>
                        )}
                      </div>

                      {/* Full card with gradient background - stays fixed, extends full height */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 group-hover:from-purple-900/25 group-hover:via-purple-800/15 group-hover:to-pink-900/25 transition-all duration-300 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
                        <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]" style={{ marginBottom: '60px' }}>
                          <span className="text-gray-400 text-xs font-medium">Preview</span>
                        </div>
                      </div>

                      {/* Caption card overlay - slides up on hover to reveal additional content */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/60 pt-3 px-4 pb-4 transition-transform duration-[400ms] ease-in-out translate-y-[calc(100%-40px)] group-hover:translate-y-0">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="font-semibold text-white group-hover:text-[oklch(.837_.128_66.29)] text-[15px] leading-tight transition-colors duration-300">
                            <span>{overlay.name}</span>
                          </h3>
                          <span className="bg-[#d97706] text-black text-[11px] font-bold px-2 py-1 rounded uppercase tracking-wide flex-shrink-0" style={{ transform: 'scale(1.1)' }}>
                            ${overlay.price}
                          </span>
                        </div>

                        {/* Description and action icons */}
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 flex-1">
                            {overlay.type.charAt(0).toUpperCase() + overlay.type.slice(1)} overlay for {overlay.category.toUpperCase()} with {overlay.theme} theme
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(overlay.id);
                            }}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {activeNavItem === 'Tools' && (
          <div className="max-w-7xl mx-auto p-6 lg:p-8">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">
                  <span>Tools Dashboard</span>
                </h1>
                <p className="text-gray-300 text-lg">
                  <span>Access your breaker tools and utilities here.</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {[
                    'Breaker Inventory',
                    'Comps Finder',
                    'Pop Report Lookup',
                    'ROI Tracker',
                    'Schedule Manager',
                    'Price Guide',
                  ].map(tool => {
                    // Map landing page tool names to library page tool names
                    const toolMapping: Record<string, string> = {
                      'Inventory Manager': 'Breaker Inventory',
                      'Comps Finder': 'Comps Finder',
                      'Pop Lookup': 'Pop Report Lookup',
                      'ROI Tracker': 'ROI Tracker',
                      'Price Guide': 'Price Guide',
                    };
                    // Check if highlighted from navigation or clicked locally
                    const isHighlighted = selectedTool
                      ? (toolMapping[selectedTool] === tool || selectedTool === tool)
                      : false;

                    // Check if this tool is selected for My Tools
                    const isSelected = selectedTools.has(tool);

                    return (
                      <motion.div
                        key={tool}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        onClick={() => toggleToolSelection(tool)}
                        className={`bg-gradient-to-b from-[#2a1e3a]/60 to-[#1a1428]/40 rounded-2xl p-6 border transition-all cursor-pointer group ${
                          isSelected || isHighlighted
                            ? 'border-orange-500/50 ring-2 ring-orange-500/30 shadow-lg shadow-orange-500/20'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                            isSelected || isHighlighted
                              ? 'bg-orange-500/30'
                              : 'bg-purple-500/20 group-hover:bg-purple-500/30'
                          }`}>
                            <Wrench className={`h-6 w-6 ${isSelected || isHighlighted ? 'text-orange-300' : 'text-purple-300'}`} />
                          </div>
                          <h3 className="font-semibold text-lg text-white">
                            <span>{tool}</span>
                          </h3>
                        </div>
                        <p className="text-sm text-gray-400">
                          <span>Access your {tool.toLowerCase()} tools</span>
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeNavItem === 'Account' && (
            <div className="max-w-7xl mx-auto p-6 lg:p-8">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">
                  <span>Account Settings</span>
                </h1>
                <div className="bg-gradient-to-b from-[#2a1e3a]/60 to-[#1a1428]/40 rounded-2xl p-8 border border-white/10">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        <span>Profile Information</span>
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            <span>Username</span>
                          </label>
                          <input
                            type="text"
                            className="w-full bg-[#1a1428]/80 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                            placeholder="Your username"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            <span>Email</span>
                          </label>
                          <input
                            type="email"
                            className="w-full bg-[#1a1428]/80 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <button className="px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-white font-medium transition-colors">
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <button className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-white font-medium transition-colors cursor-pointer">
                    <span>Logout</span>
                  </button>
                  <button className="text-sm text-red-400 hover:text-red-300 underline transition-colors cursor-pointer">
                    <span>Delete Account</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeNavItem === 'Pricing' && (
            <div className="max-w-5xl mx-auto p-6 lg:p-8 text-center">
              <h2 className="text-5xl font-bold mb-6 cursor-default">
                <span>Level Up Your Production</span>
              </h2>
              <p className="text-xl text-gray-300 mb-16 cursor-default">
                <span>
                  Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.
                </span>
              </p>

              <div className="flex items-center justify-center mb-16">
                <div className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 relative inline-flex">
                  {/* Slider track */}
                  <div className="absolute inset-2 rounded-xl bg-white/5" aria-hidden="true" />
                  {/* Sliding handle */}
                  <span
                    className={`absolute top-2 h-[calc(100%-1rem)] rounded-xl bg-orange-500 shadow-lg will-change-transform transition-transform duration-300 ease-out`}
                    style={{
                      width: 'calc(50% - 0.25rem)',
                      transform: pricingToggle === 'monthly' ? 'translateX(0)' : 'translateX(100%)',
                    }}
                    aria-hidden="true"
                  />
                  <button
                    onClick={() => setPricingToggle('monthly')}
                    className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer ${pricingToggle === 'monthly' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                    aria-pressed={pricingToggle === 'monthly'}
                    aria-label="Select monthly pricing"
                  >
                    <span>Monthly</span>
                  </button>
                  <button
                    onClick={() => setPricingToggle('yearly')}
                    className={`relative z-[1] px-8 py-3 rounded-xl transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer ${pricingToggle === 'yearly' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                    aria-pressed={pricingToggle === 'yearly'}
                    aria-label="Select yearly pricing"
                  >
                    <span>Yearly</span>
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Free Plan */}
                <motion.div
                  className="bg-white/10 rounded-3xl p-10 border border-white/10 h-full cursor-default"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className="flex h-full flex-col">
                    <h3 className="text-3xl font-bold mb-2">
                      <span>BreakDance Starter</span>
                    </h3>
                    <p className="text-gray-300 mb-6 text-base">
                      <span>Get started and explore BreakDance with no cost or no commitment</span>
                    </p>
                    <div className="text-5xl font-bold mb-8">
                      <span>$0.00</span>
                    </div>
                    <ul className="space-y-4 mb-10 text-left">
                      <li
                        className="flex items-center"
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">Full access to the overlay library</span>
                      </li>
                      <li
                        className="flex items-center"
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">Full access to the 'break editor' ui</span>
                      </li>
                      <li
                        className="flex items-center"
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">Save unlimited overlays to your collection</span>
                      </li>
                      <li
                        className="flex items-center"
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">Limited access to break tools dashboard</span>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <button
                        onClick={() => setShowSignUpOverlay(true)}
                        className="mx-auto w-full py-4 px-6 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl font-semibold text-lg text-center hover:bg-slate-800 transition-colors duration-150 cursor-pointer"
                      >
                        <span>Start Free</span>
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Plus Plan */}
                <motion.div
                  className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative cursor-default"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1,
                  }}
                >
                  <div className="flex h-full flex-col">
                    {pricingToggle === 'yearly' && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        <span>Save 17%</span>
                      </div>
                    )}
                    <h3 className="text-3xl font-bold mb-2">
                      <span>BreakDance Pro</span>
                    </h3>
                    <p className="text-gray-300 mb-6 text-base">
                      <span>
                        Best for regular users who want to experience the full functionality of the
                        platform
                      </span>
                    </p>
                    <div className="text-5xl font-bold mb-8 h-12 leading-[48px]">
                      <span>{pricingToggle === 'monthly' ? '$4.99' : '$49.99'}</span>
                      <span className="text-lg text-gray-400 font-normal">
                        /{pricingToggle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    <ul className="space-y-4 mb-10 text-left">
                      <li
                        className="flex items-center"
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">Everything in Free</span>
                      </li>
                      <li
                        className="flex items-center"
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">Full access to break tools dashboard</span>
                      </li>
                      <li
                        className="flex items-center"
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">Get featured every time you go live</span>
                      </li>
                      <li
                        className="flex items-center"
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                        }}
                      >
                        <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                        <span className="text-lg">Get notified first for LE collection drops</span>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <button
                        onClick={() => setShowSignUpOverlay(true)}
                        className="mx-auto w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors text-center cursor-pointer"
                      >
                        <span>Get Pro</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Custom Assets Card */}
              <motion.div
                className="bg-white/10 rounded-3xl p-10 border border-orange-500/30 relative cursor-default mt-8 max-w-2xl mx-auto"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                }}
              >
                <h3 className="text-3xl font-bold mb-4">
                  <span>Custom Assets</span>
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  <span>For custom needs like rich animations, logo's, and more</span>
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors cursor-pointer"
                >
                  <span>Contact Us</span>
                </button>
              </motion.div>
            </div>
          )}
        </main>
      </div>

      {/* Sign Up Overlay */}
      {showSignUpOverlay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowSignUpOverlay(false)}
        >
          <div className="relative w-full max-w-md" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowSignUpOverlay(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <SignUpCard
              onSwitchToSignIn={() => {
                setShowSignUpOverlay(false);
                setShowLoginOverlay(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Login Overlay */}
      {showLoginOverlay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowLoginOverlay(false)}
        >
          <div className="relative w-full max-w-md" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowLoginOverlay(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <SignInCard
              onSwitchToSignUp={() => {
                setShowLoginOverlay(false);
                setShowSignUpOverlay(true);
              }}
              onSwitchToPasswordReset={() => {
                setShowLoginOverlay(false);
                setShowPasswordResetOverlay(true);
              }}
              onSignIn={() => {
                setIsAuthenticated(true);
                setShowLoginOverlay(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Password Reset Overlay */}
      {showPasswordResetOverlay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowPasswordResetOverlay(false)}
        >
          <div className="relative w-full max-w-md" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowPasswordResetOverlay(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <PasswordResetCard
              onBack={() => {
                setShowPasswordResetOverlay(false);
                setShowLoginOverlay(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
