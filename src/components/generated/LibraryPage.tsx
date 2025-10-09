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
} from 'lucide-react';
type Overlay = {
  id: string;
  name: string;
  category: string;
  type: string;
  function: string;
  theme: string;
  isNew?: boolean;
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
  },
  {
    id: '2',
    name: 'Lower Third - Future',
    category: 'mlb',
    type: 'lower third',
    function: 'team board',
    theme: 'downtown',
    isNew: false,
  },
  {
    id: '3',
    name: 'Ticker - Zombie',
    category: 'nba',
    type: 'baseline',
    function: 'text scroller',
    theme: 'kaboom',
    isNew: true,
  },
  {
    id: '4',
    name: 'Panel - Stadium',
    category: 'nhl',
    type: 'panel',
    function: 'counter',
    theme: 'color blast',
    isNew: false,
  },
  {
    id: '5',
    name: 'Image Loop - Retro',
    category: 'mls',
    type: 'image loop',
    function: 'timer',
    theme: 'base',
    isNew: true,
  },
  {
    id: '6',
    name: 'Scoreboard - Classic',
    category: 'nfl',
    type: 'panel',
    function: 'team board',
    theme: 'downtown',
    isNew: false,
  },
  {
    id: '7',
    name: 'Counter - Modern',
    category: 'mlb',
    type: 'baseline',
    function: 'counter',
    theme: 'kaboom',
    isNew: false,
  },
  {
    id: '8',
    name: 'Timer - Neon',
    category: 'nba',
    type: 'bug',
    function: 'timer',
    theme: 'color blast',
    isNew: true,
  },
  {
    id: '9',
    name: 'Scroller - Wave',
    category: 'nhl',
    type: 'image loop',
    function: 'text scroller',
    theme: 'base',
    isNew: false,
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
  type: ['panel', 'image loop', 'bug', 'baseline'],
  function: ['team board', 'counter', 'timer', 'text scroller'],
  theme: ['base', 'downtown', 'kaboom', 'color blast'],
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
type SortOption = 'popular' | 'trending' | 'a-to-z' | 'recent';
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
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [navMaxHeight, setNavMaxHeight] = useState<string>('calc(100vh - 64px)');
  const [showSignUpOverlay, setShowSignUpOverlay] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
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
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState<NavItem>(initialView);
  const [sortBy, setSortBy] = useState<SortOption>('a-to-z');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [myOverlaysExpanded, setMyOverlaysExpanded] = useState(false);
  const [myImagesExpanded, setMyImagesExpanded] = useState(false);

  // Get highlighted tool from location state or manage with local state
  const initialHighlightedTool = (location.state as { highlightedTool?: string } | null)?.highlightedTool;
  const [selectedTool, setSelectedTool] = useState<string | undefined>(initialHighlightedTool);
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

    // Apply sorting
    if (sortBy === 'a-to-z') {
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
  }, [searchQuery, filters, sortBy]);

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
            <button
              onClick={() => setShowSignUpOverlay(true)}
              className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
            >
              <span>Sign up</span>
            </button>
            <button
              onClick={() => setShowLoginOverlay(true)}
              className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
            >
              <span>Login</span>
            </button>
            <button className="px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2 cursor-pointer">
              <span
                style={{
                  color: 'rgb(0 0 0)',
                }}
              >
                Launch App
              </span>
              <ExternalLink
                className="w-4 h-4"
                style={{
                  color: 'rgb(0 0 0)',
                }}
              />
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
          <div className="p-4 overflow-y-auto flex-1 pb-28">
            <div className="space-y-2">
              <button
                onClick={() => navigate('/tools')}
                className={`w-full flex items-center ${isNavExpanded ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-lg transition-all duration-200 cursor-pointer border ${activeNavItem === 'Tools' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                style={
                  !isNavExpanded
                    ? {
                        aspectRatio: '1/1',
                        width: '48px',
                        height: '48px',
                        padding: '0',
                      }
                    : undefined
                }
                title={!isNavExpanded ? 'Tools' : undefined}
              >
                <Wrench className="h-5 w-5 flex-shrink-0" />
                {isNavExpanded && <span className="text-sm font-medium">Tools</span>}
              </button>

              <button
                onClick={() => navigate('/library')}
                className={`w-full flex items-center ${isNavExpanded ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-lg transition-all duration-200 cursor-pointer border ${activeNavItem === 'Library' ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/40' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                style={
                  !isNavExpanded
                    ? {
                        aspectRatio: '1/1',
                        width: '48px',
                        height: '48px',
                        padding: '0',
                      }
                    : undefined
                }
                title={!isNavExpanded ? 'Library' : undefined}
              >
                <Library className="h-5 w-5 flex-shrink-0" />
                {isNavExpanded && <span className="text-sm font-medium">Library</span>}
              </button>

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
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      <div className="flex items-center gap-3">
                        <Layers className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">My Overlays</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${myOverlaysExpanded ? 'rotate-180' : ''}`}
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
                            <Trash2 className="h-4 w-4 flex-shrink-0" />
                            <span>Trash</span>
                          </button>
                          <div className="flex items-center justify-between px-4 py-2 text-gray-400 text-sm">
                            <span>Root folder</span>
                            <button className="hover:text-white transition-colors">
                              <FolderPlus className="h-4 w-4" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    className="border-t border-white/5 my-4"
                    style={{
                      borderTopWidth: '2px',
                    }}
                  />

                  <div>
                    <button
                      onClick={() => setMyImagesExpanded(!myImagesExpanded)}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      <div className="flex items-center gap-3">
                        <Image className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">My Images</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${myImagesExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {myImagesExpanded && (
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
                            <Trash2 className="h-4 w-4 flex-shrink-0" />
                            <span>Trash</span>
                          </button>
                          <div className="flex items-center justify-between px-4 py-2 text-gray-400 text-sm">
                            <span>Root folder</span>
                            <button className="hover:text-white transition-colors">
                              <FolderPlus className="h-4 w-4" />
                            </button>
                          </div>
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
                  className={`w-full flex items-center ${isNavExpanded ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-lg transition-all duration-200 cursor-pointer border ${activeNavItem === 'Pricing' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                  style={
                    !isNavExpanded
                      ? {
                          aspectRatio: '1/1',
                          width: '48px',
                          height: '48px',
                          padding: '0',
                        }
                      : undefined
                  }
                  title={!isNavExpanded ? 'Pricing' : undefined}
                >
                  <DollarSign className="h-5 w-5 flex-shrink-0" />
                  {isNavExpanded && <span className="text-sm font-medium">Pricing</span>}
                </button>

                <button
                  onClick={() => navigate('/account')}
                  className={`w-full flex items-center ${isNavExpanded ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-lg transition-all duration-200 cursor-pointer border ${activeNavItem === 'Account' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                  style={
                    !isNavExpanded
                      ? {
                          aspectRatio: '1/1',
                          width: '48px',
                          height: '48px',
                          padding: '0',
                        }
                      : undefined
                  }
                  title={!isNavExpanded ? 'Account' : undefined}
                >
                  <User className="h-5 w-5 flex-shrink-0" />
                  {isNavExpanded && <span className="text-sm font-medium">Account</span>}
                </button>

                <div className="border-t border-white/5 my-2" />

                <button
                  onClick={() => setIsNavExpanded(!isNavExpanded)}
                  className={`w-full flex items-center ${isNavExpanded ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-lg transition-all duration-200 cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white`}
                  style={
                    !isNavExpanded
                      ? {
                          aspectRatio: '1/1',
                          width: '48px',
                          height: '48px',
                          padding: '0',
                        }
                      : undefined
                  }
                  title={!isNavExpanded ? 'Expand' : 'Collapse'}
                >
                  {isNavExpanded ? (
                    <>
                      <ChevronsLeft className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm font-medium">Collapse</span>
                    </>
                  ) : (
                    <ChevronsRight className="h-5 w-5 flex-shrink-0" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>

        <AnimatePresence mode="wait">
          {isFilterOpen && activeNavItem === 'Library' && (
            <motion.aside
              initial={{
                x: -256,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: -256,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className="w-64 border-r border-white/10 bg-[#1a1428]/80 backdrop-blur-sm overflow-y-auto filter-panel-scrollbar relative z-0"
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
              <div className="p-11">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    <span>Filters</span>
                  </h2>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
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
                          className="border-b border-white/5 pb-4"
                          style={{
                            borderBottomWidth: '3px',
                          }}
                        >
                          <button
                            onClick={() => toggleSection(filterKey)}
                            className="w-full flex items-center justify-between py-2 hover:text-white/90 transition-colors"
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
          className="flex-1 overflow-y-auto filter-panel-scrollbar"
          style={{ maxHeight: navMaxHeight }}
        >
          <div className="max-w-7xl mx-auto p-6 lg:p-8">
            {activeNavItem === 'Library' && (
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  {/* filter open button removed from the header search area */}
                  <div className="relative w-1/2">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search Library"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full bg-[#2a1e3a]/60 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white/10 transition-all"
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
            )}

            {activeNavItem === 'Library' &&
              (filteredOverlays.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg">
                    <span>No overlays found matching your criteria</span>
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      className="group relative bg-gradient-to-b from-[#2a1e3a]/60 to-[#1a1428]/40 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="aspect-video bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
                        <span className="text-gray-500 text-sm font-medium z-10">Preview</span>
                      </div>

                      <div className="p-5 space-y-3 group-hover:bg-white/5 transition-colors duration-300 relative">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-semibold text-lg text-white transition-colors">
                            <span>{overlay.name}</span>
                          </h3>
                          {overlay.isNew && (
                            <span className="bg-[#d97706] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide flex-shrink-0">
                              NEW
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            <span>{overlay.type}</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}

            {activeNavItem === 'Tools' && (
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
                        onClick={() => setSelectedTool(tool)}
                        className={`bg-gradient-to-b from-[#2a1e3a]/60 to-[#1a1428]/40 rounded-2xl p-6 border transition-all cursor-pointer group ${
                          isHighlighted
                            ? 'border-orange-500/50 ring-2 ring-orange-500/30 shadow-lg shadow-orange-500/20'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                            isHighlighted
                              ? 'bg-orange-500/30'
                              : 'bg-purple-500/20 group-hover:bg-purple-500/30'
                          }`}>
                            <Wrench className={`h-6 w-6 ${isHighlighted ? 'text-orange-300' : 'text-purple-300'}`} />
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
            )}

            {activeNavItem === 'Account' && (
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
                <button className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-white font-medium transition-colors cursor-pointer">
                  <span>Logout</span>
                </button>
              </div>
            )}

            {activeNavItem === 'Pricing' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">
                  <span>Pricing Plans</span>
                </h1>
                <p className="text-gray-300 text-lg">
                  <span>Choose the plan that's right for you</span>
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <motion.div
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
                    className="bg-gradient-to-b from-[#2a1e3a]/60 to-[#1a1428]/40 rounded-2xl p-8 border border-white/10"
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      <span>Free</span>
                    </h3>
                    <p className="text-gray-400 mb-6">
                      <span>Perfect for getting started</span>
                    </p>
                    <div className="text-4xl font-bold mb-6">
                      <span>$0</span>
                      <span className="text-lg text-gray-400 font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <span className="text-purple-300 text-xs">✓</span>
                        </div>
                        <span className="text-gray-300">Basic overlay library access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <span className="text-purple-300 text-xs">✓</span>
                        </div>
                        <span className="text-gray-300">Limited tools access</span>
                      </li>
                    </ul>
                    <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors">
                      <span>Current Plan</span>
                    </button>
                  </motion.div>
                  <motion.div
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
                    className="bg-gradient-to-b from-purple-500/20 to-[#1a1428]/40 rounded-2xl p-8 border border-purple-500/30"
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      <span>Pro</span>
                    </h3>
                    <p className="text-gray-400 mb-6">
                      <span>For serious breakers</span>
                    </p>
                    <div className="text-4xl font-bold mb-6">
                      <span>$3.99</span>
                      <span className="text-lg text-gray-400 font-normal">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-500/40 flex items-center justify-center">
                          <span className="text-purple-200 text-xs">✓</span>
                        </div>
                        <span className="text-white">Full overlay library</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-500/40 flex items-center justify-center">
                          <span className="text-purple-200 text-xs">✓</span>
                        </div>
                        <span className="text-white">All tools unlocked</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-500/40 flex items-center justify-center">
                          <span className="text-purple-200 text-xs">✓</span>
                        </div>
                        <span className="text-white">Priority support</span>
                      </li>
                    </ul>
                    <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors">
                      <span>Upgrade to Pro</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
