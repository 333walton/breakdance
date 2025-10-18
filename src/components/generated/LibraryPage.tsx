import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
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
  List,
  Trash2,
  FolderPlus,
  ExternalLink,
  Play,
  ShoppingCart,
  Check,
  Box,
  Package,
  TrendingUp,
  Search as SearchIcon,
  BarChart3,
  Calendar,
  LineChart,
  Lock,
  Mail,
  Info,
  Pencil,
  Pin,
  Bookmark,
  Globe,
} from 'lucide-react';
import { SignInCard as SignUpCard } from './SignUpCard';
import { SignInCard } from './SignInCard';
import { LeaderboardInfoModal } from './LeaderboardModal';
import { ProductCard3D } from './ProductCard3D';
import GlobalCartDropdown from '../GlobalCartDropdown';
import ProfileDropdown from '../ProfileDropdown';
import { PasswordResetCard } from './PasswordResetCard';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/cartCore';
import { useNotifications } from '../../contexts/notificationsCore';
import CartControls from '../CartControls';
import overlaysDataRaw, { Overlay } from '../../lib/overlays';
const overlaysData: Overlay[] = overlaysDataRaw;
type FilterState = {
  category: string[];
  type: string[];
  function: string[];
  theme: string[];
};
const filterOptions = {
  category: ['nfl', 'mlb', 'nba', 'nhl', 'mls', 'pokemon'],
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
  pokemon: 'Pokémon',
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
// Short labels to ensure tool titles fit in one line inside the nav panel
const toolShortNames: Record<string, string> = {
  'Breaker Inventory': 'Inventory',
  'Pop Report Lookup': 'Pop Lookup',
  'Schedule Manager': 'Schedule',
  'ROI Tracker': 'ROI',
  'Price Guide': 'Price',
};

const getToolLabel = (tool: string) => toolShortNames[tool] || tool;

// Function to get the appropriate icon for each tool
const getToolIcon = (toolName: string) => {
  switch (toolName) {
    case 'Breaker Inventory':
      return Package;
    case 'Price Guide':
      return DollarSign;
    case 'Comps Finder':
      return SearchIcon;
    case 'ROI Tracker':
      return TrendingUp;
    case 'Pop Report Lookup':
      return BarChart3;
    case 'Schedule Manager':
      return Calendar;
    default:
      return Wrench;
  }
};

type NavItem =
  | 'Tools'
  | 'Library'
  | 'Account'
  | 'Pricing'
  | 'Logout'
  | 'MyOverlays'
  | 'MyImages'
  | 'MyTools';

type TopNavItem = { label: string };
const navigationItems: TopNavItem[] = [
  { label: 'Overlays' },
  { label: 'Tools' },
  { label: 'Pricing' },
  { label: 'How It Works' },
  { label: 'Live Breaks' },
  { label: 'Supplies' },
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
  const { notify } = useNotifications();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const scrollableContentRef = useRef<HTMLDivElement | null>(null);
  const [navMaxHeight, setNavMaxHeight] = useState<string>('calc(100vh - 64px)');
  const [showSignUpOverlay, setShowSignUpOverlay] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
  const [showPasswordResetOverlay, setShowPasswordResetOverlay] = useState(false);
  const [showLeaderboardOverlay, setShowLeaderboardOverlay] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showProductCardModal, setShowProductCardModal] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<Overlay | null>(null);
  const [clickedCardPosition, setClickedCardPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize filters from location state if provided
  const [filters, setFilters] = useState<FilterState>(() => {
    const state = location.state as { filters?: FilterState } | null;
    return (
      state?.filters || {
        category: [],
        type: [],
        function: [],
        theme: [],
      }
    );
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
  const [isNavExpanded, setIsNavExpanded] = useState(() => {
    try {
      const saved = localStorage.getItem('isNavExpanded');
      return saved !== null ? JSON.parse(saved) : true;
    } catch (e) {
      return true;
    }
  });
  const [showNavText, setShowNavText] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState<NavItem>(initialView);
  const [sortBy, setSortBy] = useState<SortOption>('a-to-z');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [myOverlaysExpanded, setMyOverlaysExpanded] = useState(false);
  const [myImagesExpanded, setMyImagesExpanded] = useState(false);
  const [myToolsExpanded, setMyToolsExpanded] = useState(true);
  const [showAsideText, setShowAsideText] = useState(false);
  // Tooltip state for nav-panel tool name hover
  const [navTooltip, setNavTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  // Change Password modal state
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [changePasswordData, setChangePasswordData] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  // Account theme selection state
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('dark');
  // Email editing state
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [emailValue, setEmailValue] = useState('email@gmail.com');
  const [originalEmailValue, setOriginalEmailValue] = useState('email@gmail.com');
  // Name editing state
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [nameValue, setNameValue] = useState(() => {
    try {
      const saved = sessionStorage.getItem('userName');
      return saved || '';
    } catch (e) {
      return '';
    }
  });
  const [originalNameValue, setOriginalNameValue] = useState(() => {
    try {
      const saved = sessionStorage.getItem('userName');
      return saved || '';
    } catch (e) {
      return '';
    }
  });
  // Tools Dashboard info tooltip state
  const [toolsInfoTooltip, setToolsInfoTooltip] = useState<{
    x: number;
    y: number;
  } | null>(null);
  // Tool name editing state
  const [editingTool, setEditingTool] = useState<string | null>(null);
  const [customToolNames, setCustomToolNames] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('customToolNames');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [editNameTooltip, setEditNameTooltip] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [shortlistTooltip, setShortlistTooltip] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [favoriteTooltip, setFavoriteTooltip] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [openToolTooltip, setOpenToolTooltip] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Get highlighted tool from location state or manage with local state
  const initialHighlightedTool = (location.state as { highlightedTool?: string } | null)
    ?.highlightedTool;
  const [selectedTool, setSelectedTool] = useState<string | undefined>(initialHighlightedTool);

  // Get active tool from URL path (e.g., /mytools/roi-tracker or /tools/roi-tracker -> 'ROI Tracker')
  const activeToolFromPath = (() => {
    if (location.pathname.startsWith('/mytools/')) {
      return location.pathname
        .split('/mytools/')[1]
        ?.split('-')
        .map(word => {
          const upperWord = word.toUpperCase();
          if (
            upperWord === 'ROI' ||
            upperWord === 'NBA' ||
            upperWord === 'NFL' ||
            upperWord === 'MLB' ||
            upperWord === 'NHL' ||
            upperWord === 'MLS'
          ) {
            return upperWord;
          }
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
    } else if (location.pathname.startsWith('/tools/')) {
      return location.pathname
        .split('/tools/')[1]
        ?.split('-')
        .map(word => {
          const upperWord = word.toUpperCase();
          if (
            upperWord === 'ROI' ||
            upperWord === 'NBA' ||
            upperWord === 'NFL' ||
            upperWord === 'MLB' ||
            upperWord === 'NHL' ||
            upperWord === 'MLS'
          ) {
            return upperWord;
          }
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
    }
    return undefined;
  })();

  // Get active overlay section from URL path (e.g., /myoverlays/all -> 'all')
  const activeOverlaySectionFromPath = location.pathname.startsWith('/myoverlays/')
    ? location.pathname.split('/myoverlays/')[1]
    : undefined;

  const [selectedTools, setSelectedTools] = useState<Set<string>>(() => {
    // Use sessionStorage instead of localStorage - persists during session but clears on browser close
    try {
      const raw = sessionStorage.getItem('selectedTools');
      if (raw) {
        const arr = JSON.parse(raw) as string[];
        return new Set(arr);
      }
    } catch (e) {
      // ignore JSON parse errors
    }
    return new Set();
  });
  // Track which tools have been pinned/selected *from within* the My Tools section
  // Use localStorage for shortlist persistence - should stay toggled until manually changed
  const [selectedInMyTools, setSelectedInMyTools] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem('selectedInMyTools');
      if (raw) {
        const arr = JSON.parse(raw) as string[];
        return new Set(arr);
      }
    } catch (e) {
      // ignore
    }
    return new Set();
  });
  const [hasRecentlyAddedTool, setHasRecentlyAddedTool] = useState(false);
  const [bookmarkedOverlays, setBookmarkedOverlays] = useState<Set<string>>(new Set());
  const { cart, add, remove, getTotal, isCartOpen, openCart, closeCart, toggleCart } = useCart();
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set());
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
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shortlistNotificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pinTooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup tooltip timeout on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
      if (pinTooltipTimeoutRef.current) {
        clearTimeout(pinTooltipTimeoutRef.current);
      }
    };
  }, []);

  // Update activeNavItem when initialView prop changes
  useEffect(() => {
    setActiveNavItem(initialView);
  }, [initialView]);

  // Update activeNavItem based on URL pathname
  useEffect(() => {
    if (location.pathname.startsWith('/mytools')) {
      setActiveNavItem('MyTools');
    } else if (location.pathname.startsWith('/myoverlays')) {
      setActiveNavItem('MyOverlays');
    } else if (location.pathname === '/library') {
      setActiveNavItem('Library');
    } else if (location.pathname.startsWith('/tools')) {
      setActiveNavItem('Tools');
    } else if (location.pathname === '/account') {
      setActiveNavItem('Account');
    } else if (location.pathname === '/pricing') {
      setActiveNavItem('Pricing');
    }
  }, [location.pathname]);

  // Show sign up overlay if navigated with showSignUp state
  useEffect(() => {
    const state = location.state as { showSignUp?: boolean } | null;
    if (state?.showSignUp) {
      setShowLoginOverlay(false);
      setShowSignUpOverlay(true);
      // Clear the state to prevent showing overlay on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Keep customToolNames in sync with localStorage
  useEffect(() => {
    console.log('Syncing customToolNames to localStorage:', customToolNames);
    try {
      localStorage.setItem('customToolNames', JSON.stringify(customToolNames));
      console.log('localStorage updated successfully');
    } catch (e) {
      console.error('Failed to update localStorage:', e);
    }
  }, [customToolNames]);

  // Note: Do not auto-sync selectedInMyTools with selectedTools
  // Users must explicitly toggle the shortlist button to add/remove tools from My Tools
  // This ensures tools stay removed when the user deselects them

  // Persist nav expanded state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('isNavExpanded', JSON.stringify(isNavExpanded));
    } catch (e) {
      // ignore
    }
  }, [isNavExpanded]);

  // Auto-expand My Overlays dropdown when viewing a MyOverlays section
  useEffect(() => {
    if (activeNavItem === 'MyOverlays') {
      setMyOverlaysExpanded(true);
    }
  }, [activeNavItem]);

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

  // Close tool name editing when clicking outside the card
  useEffect(() => {
    if (!editingTool) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find the card element that contains the editing input
      const editingCard = target.closest('.tool-card-editing');
      if (!editingCard) {
        // Clicked outside any editing card, so cancel editing
        setEditingTool(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingTool]);

  // Close email editing when clicking outside the email container
  useEffect(() => {
    if (!isEmailEditing) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find the email editing container
      const emailContainer = target.closest('.email-editing-container');
      if (!emailContainer) {
        // Clicked outside the email container, so cancel editing and restore original value
        setEmailValue(originalEmailValue);
        setIsEmailEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEmailEditing, originalEmailValue]);

  // Close name editing when clicking outside the name container
  useEffect(() => {
    if (!isNameEditing) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find the name editing container
      const nameContainer = target.closest('.name-editing-container');
      if (!nameContainer) {
        // Clicked outside the name container, so cancel editing and restore original value
        setNameValue(originalNameValue);
        setIsNameEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNameEditing, originalNameValue]);

  // Save name value to sessionStorage whenever the original (saved) value changes
  useEffect(() => {
    try {
      sessionStorage.setItem('userName', originalNameValue);
    } catch (e) {
      // ignore sessionStorage errors
    }
  }, [originalNameValue]);

  // Freeze/unfreeze scrolling when 3D preview modal is shown
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (showProductCardModal) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (showProductCardModal) {
        e.preventDefault();
      }
    };

    if (scrollableContentRef.current) {
      const element = scrollableContentRef.current;

      if (showProductCardModal) {
        // Add event listeners to prevent scrolling
        element.addEventListener('wheel', handleWheel, { passive: false });
        element.addEventListener('touchmove', handleTouchMove, { passive: false });
      } else {
        // Remove event listeners to allow scrolling
        element.removeEventListener('wheel', handleWheel);
        element.removeEventListener('touchmove', handleTouchMove);
      }

      return () => {
        element.removeEventListener('wheel', handleWheel);
        element.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [showProductCardModal]);

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
      const timer = setTimeout(() => setShowNavText(true), 300);
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

  // cart, add, remove, getTotal come from CartContext (persisted in provider)

  // Toggle membership in the My Tools collection (added/removed from /mytools)
  const toggleToolInCollection = (tool: string) => {
    // First, check current state to determine if we're adding or removing
    const isCurrentlySelected = selectedTools.has(tool);
    console.log(
      `toggleToolInCollection called for ${tool}, currently selected:`,
      isCurrentlySelected
    );

    setSelectedTools(prev => {
      const next = new Set(prev);
      if (next.has(tool)) {
        next.delete(tool);
        console.log(`Removing ${tool} from selectedTools`);
      } else {
        next.add(tool);
        console.log(`Adding ${tool} to selectedTools`);
      }
      try {
        sessionStorage.setItem('selectedTools', JSON.stringify(Array.from(next)));
      } catch (e) {
        // ignore storage errors
      }
      return next;
    });

    // Remove custom name when tool is unstarred (if it was previously selected)
    if (isCurrentlySelected) {
      console.log('Tool was selected, removing custom name for:', tool);
      // Also remove from selectedInMyTools when removing from selectedTools
      setSelectedInMyTools(prev => {
        const next = new Set(prev);
        next.delete(tool);
        try {
          localStorage.setItem('selectedInMyTools', JSON.stringify(Array.from(next)));
        } catch (e) {
          // ignore
        }
        return next;
      });
      setCustomToolNames(prev => {
        console.log('Previous custom names:', prev);
        const updatedNames = { ...prev };
        delete updatedNames[tool];
        console.log('Updated custom names after delete:', updatedNames);
        return updatedNames;
      });
    } else {
      console.log('Tool was not selected, adding it (no custom name to remove)');
      // Show indicator when a tool is added
      setHasRecentlyAddedTool(true);
      // Hide indicator after 3 seconds
      setTimeout(() => {
        setHasRecentlyAddedTool(false);
      }, 3000);
    }
  };

  // Toggle pinned state for a tool *within* the My Tools page — this controls
  // which tools appear under the My Tools nav button.
  const toggleToolPinned = (tool: string) => {
    setSelectedInMyTools(prev => {
      const next = new Set(prev);
      if (next.has(tool)) {
        // Allow removing
        next.delete(tool);
      } else {
        // Filter to only count tools that are in selectedTools (in My Tools section)
        const currentlyShortlisted = Array.from(prev).filter(t => selectedTools.has(t));
        // Check if we already have 5 tools shortlisted
        if (currentlyShortlisted.length >= 5) {
          // Show notification only if we haven't shown it recently
          if (!shortlistNotificationTimeoutRef.current) {
            notify({ message: 'Maximum 5 tools can be shortlisted', type: 'warning' });
            // Set timeout to prevent duplicate notifications
            shortlistNotificationTimeoutRef.current = setTimeout(() => {
              shortlistNotificationTimeoutRef.current = null;
            }, 1000);
          }
          return prev; // Return unchanged
        }
        next.add(tool);
      }
      try {
        localStorage.setItem('selectedInMyTools', JSON.stringify(Array.from(next)));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  const saveCustomToolName = (tool: string, newName: string) => {
    const updatedNames = { ...customToolNames, [tool]: newName };
    setCustomToolNames(updatedNames);
    setEditingTool(null);
  };

  const getToolDisplayName = (tool: string) => {
    console.log(`Getting display name for ${tool}:`, customToolNames[tool] || tool);
    return customToolNames[tool] || tool;
  };

  const handleShowNavTooltip = (text: string, e: React.MouseEvent) => {
    // Clear any existing timeout
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }

    const headerHeight = headerRef.current?.getBoundingClientRect().height || 64;
    const estimatedTooltipHeight = 40;
    const estimatedTooltipWidth = 150;

    let x = e.clientX + 12;
    let y = e.clientY + 12;

    // Check header overlap
    if (y - estimatedTooltipHeight < headerHeight) {
      y = headerHeight + 10;
    }

    // Check viewport boundaries
    if (x + estimatedTooltipWidth > window.innerWidth) {
      x = e.clientX - estimatedTooltipWidth - 12;
    }
    if (y + estimatedTooltipHeight > window.innerHeight) {
      y = e.clientY - estimatedTooltipHeight - 12;
    }

    setNavTooltip({ text, x, y });

    // Set new timeout to hide after 2 seconds
    tooltipTimeoutRef.current = setTimeout(() => {
      setNavTooltip(null);
    }, 2000);
  };
  const handleMoveNavTooltip = (e: React.MouseEvent) => {
    setNavTooltip(prev => {
      if (!prev) return prev;

      const headerHeight = headerRef.current?.getBoundingClientRect().height || 64;
      const estimatedTooltipHeight = 40;
      const estimatedTooltipWidth = 150;

      let x = e.clientX + 12;
      let y = e.clientY + 12;

      // Check header overlap
      if (y - estimatedTooltipHeight < headerHeight) {
        y = headerHeight + 10;
      }

      // Check viewport boundaries
      if (x + estimatedTooltipWidth > window.innerWidth) {
        x = e.clientX - estimatedTooltipWidth - 12;
      }
      if (y + estimatedTooltipHeight > window.innerHeight) {
        y = e.clientY - estimatedTooltipHeight - 12;
      }

      return { ...prev, x, y };
    });
  };
  const handleHideNavTooltip = () => {
    // Clear the timeout when manually hiding
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
      tooltipTimeoutRef.current = null;
    }
    setNavTooltip(null);
  };

  const getOverlayDescription = (overlay: Overlay) => {
    return `${overlay.theme.charAt(0).toUpperCase() + overlay.theme.slice(1)} ${overlay.type} for ${overlay.category.toUpperCase()}. ${overlay.function.charAt(0).toUpperCase() + overlay.function.slice(1)} with Stream Deck support.`;
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
        className="bg-gradient-to-b from-[#1f1a30] to-[#261f35] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-[200]"
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
              <span className="text-orange-500" style={{ display: 'none' }}>
                overlays.
              </span>
              <span className="text-white" style={{ display: 'none' }}>
                BreakDance
              </span>
            </div>

            {/* Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8 ml-12"
              style={{ marginLeft: 'calc(var(--spacing) * 21)' }}
            >
              {navigationItems.map(nav => {
                const isActive =
                  (nav.label === 'Overlays' &&
                    (location.pathname === '/library' ||
                      location.pathname.startsWith('/myoverlays'))) ||
                  (nav.label === 'Tools' &&
                    (location.pathname === '/tools' ||
                      location.pathname.startsWith('/tools/') ||
                      location.pathname.startsWith('/mytools'))) ||
                  (nav.label === 'Pricing' && location.pathname === '/pricing');

                return (
                  <a
                    key={nav.label}
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      if (nav.label === 'Overlays') {
                        navigate('/library');
                      } else if (nav.label === 'Tools') {
                        navigate('/tools');
                      } else if (nav.label === 'Pricing') {
                        navigate('/pricing');
                      }
                    }}
                    className={`${
                      isActive ? 'text-orange-300' : 'text-gray-200 hover:text-orange-300'
                    } transition-colors text-sm font-bold tracking-wide relative cursor-pointer`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    <span style={{ fontSize: '16px' }}>
                      {nav.label === 'Pricing' && isAuthenticated ? 'Subscription' : nav.label}
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
                );
              })}
            </nav>
          </div>

          {/* Auth & Cart */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {!isAuthenticated && (
              <button
                onClick={() => {
                  setShowLoginOverlay(false);
                  setShowSignUpOverlay(true);
                }}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
              >
                Sign up
              </button>
            )}
            {!isAuthenticated ? (
              <button
                onClick={() => {
                  setShowSignUpOverlay(false);
                  setShowLoginOverlay(true);
                }}
                className="px-4 py-2 text-white border border-white/20 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer"
              >
                Login
              </button>
            ) : (
              <>
                {/* Bookmark Icon */}
                <button
                  className="p-2 text-white rounded-full transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer border border-white/20"
                  aria-label="Bookmarks"
                >
                  <Bookmark className="w-5 h-5" />
                </button>

                {/* Globe Icon */}
                <button
                  className="p-2 text-white rounded-full transition-colors duration-150 ease-out hover:bg-white hover:text-slate-900 cursor-pointer border border-white/20"
                  aria-label="Explore"
                >
                  <Globe className="w-5 h-5" />
                </button>

                {/* Get Pro Button or Cart Icon based on route */}
                {location.pathname === '/library' || location.pathname.startsWith('/myoverlays') ? (
                  /* Cart Icon for library routes */
                  <div className="relative">
                    <button
                      data-cart-anchor="true"
                      onClick={() => toggleCart()}
                      className="relative px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2 cursor-pointer"
                    >
                      <ShoppingCart className="w-5 h-5" style={{ color: 'rgb(0 0 0)' }} />
                    </button>
                    {getTotal() > 0 && (
                      <span
                        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                        style={{ fontSize: '10px' }}
                      >
                        {getTotal()}
                      </span>
                    )}
                  </div>
                ) : (
                  /* Get Pro Button for other routes */
                  <button
                    onClick={() => {
                      setShowLoginOverlay(false);
                      setShowSignUpOverlay(true);
                    }}
                    className="px-4 py-2 bg-white text-slate-900 rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-gray-100 cursor-pointer"
                  >
                    Get Pro
                  </button>
                )}

                {/* Profile Image Button */}
                <div className="relative">
                  <button
                    data-profile-anchor="true"
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="w-10 h-10 rounded-full transition-all duration-150 ease-out cursor-pointer overflow-hidden border border-white/20"
                    aria-label="Open profile menu"
                  >
                    {/* Default avatar with purple/yellow gradient */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-yellow-400 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  </button>
                  {/* Ring overlay - only on Account page */}
                  {activeNavItem === 'Account' && (
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/50 ring-2 ring-orange-500/30 pointer-events-none shadow-lg shadow-orange-500/20"></div>
                  )}
                </div>
              </>
            )}
            {/* Hide cart icon on specific routes and all tool subpages */}
            {!(
              ['/library', '/account', '/pricing'].includes(location.pathname) ||
              location.pathname.startsWith('/myoverlays') ||
              location.pathname.startsWith('/tools') ||
              location.pathname.startsWith('/mytools')
            ) && (
              <div className="relative">
                <button
                  data-cart-anchor="true"
                  onClick={() => toggleCart()}
                  className="relative px-4 py-2 bg-[#FFC543] text-slate-900 border rounded-full text-sm font-medium transition-colors duration-150 ease-out hover:bg-white hover:text-[#FFC543] hover:border-white flex items-center space-x-2 cursor-pointer"
                >
                  <ShoppingCart className="w-5 h-5" style={{ color: 'rgb(0 0 0)' }} />
                </button>
                {getTotal() > 0 && (
                  <span
                    className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    style={{ fontSize: '10px' }}
                  >
                    {getTotal()}
                  </span>
                )}
              </div>
            )}
            <GlobalCartDropdown />
            <ProfileDropdown
              isOpen={isProfileDropdownOpen}
              onClose={() => setIsProfileDropdownOpen(false)}
              onLogout={() => setIsAuthenticated(false)}
              userName="User Name"
              userEmail="user@example.com"
            />
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
            width: isNavExpanded ? 218 : 80,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="border-r border-purple-500/30 bg-[#0f0a1a]/95 backdrop-blur-sm flex flex-col flex-shrink-0 relative z-30"
          ref={el => {
            navRef.current = el as HTMLDivElement | null;
          }}
          style={{
            height: navMaxHeight,
            maxHeight: navMaxHeight,
            contain: 'layout style',
          }}
        >
          <div
            className="flex items-end pb-0 px-4"
            style={{ paddingTop: 'calc(var(--spacing) * 10)' }}
          >
            <button
              onClick={() => setIsGoLiveActive(!isGoLiveActive)}
              onMouseEnter={e => !isNavExpanded && handleShowNavTooltip('Go Live', e)}
              onMouseMove={e => !isNavExpanded && handleMoveNavTooltip(e)}
              onMouseLeave={() => !isNavExpanded && handleHideNavTooltip()}
              className={`bg-gradient-to-r from-[#FF5C25] to-[#FFC542] hover:from-[#FF4D1F] hover:to-[#FFB838] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out rounded-full font-bold text-black focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:outline-none cursor-pointer flex items-center justify-center h-12 overflow-hidden ${isGoLiveActive ? 'go-live-active' : ''}`}
              style={{
                fontFamily: 'Nunito, sans-serif',
                width: isNavExpanded ? '100%' : '48px',
              }}
            >
              <Play
                className="w-5 h-5 transition-opacity duration-200 absolute"
                style={{
                  opacity: !isNavExpanded ? 1 : 0,
                  pointerEvents: !isNavExpanded ? 'auto' : 'none',
                }}
              />
              {isNavExpanded && showNavText && (
                <div className="flex items-center space-x-2">
                  <span>Go Live</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              )}
            </button>
          </div>
          <div
            className="p-4 overflow-hidden mt-[30px]"
            style={{
              flex: '1 1 auto',
              contain: 'layout',
              isolation: 'isolate',
              minHeight: 0,
              paddingBottom: '280px',
            }}
          >
            <div className="space-y-2">
              <button
                onClick={() => navigate('/library')}
                onMouseEnter={e => !isNavExpanded && handleShowNavTooltip('Overlays', e)}
                onMouseMove={e => !isNavExpanded && handleMoveNavTooltip(e)}
                onMouseLeave={() => !isNavExpanded && handleHideNavTooltip()}
                className={`w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer border whitespace-nowrap overflow-hidden ${activeNavItem === 'Library' ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-white border-yellow-500/40' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                style={{
                  height: '48px',
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: '48px' }}
                >
                  <Library className="h-5 w-5" />
                </div>
                {isNavExpanded && showNavText && (
                  <span
                    className="text-sm font-medium"
                    style={{
                      paddingLeft: '12px',
                    }}
                  >
                    Overlays
                  </span>
                )}
              </button>

              <button
                onClick={() => navigate('/tools')}
                onMouseEnter={e => !isNavExpanded && handleShowNavTooltip('Tools', e)}
                onMouseMove={e => !isNavExpanded && handleMoveNavTooltip(e)}
                onMouseLeave={() => !isNavExpanded && handleHideNavTooltip()}
                className={`w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer border whitespace-nowrap overflow-hidden ${activeNavItem === 'Tools' ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-white border-yellow-500/40' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                style={{
                  height: '48px',
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: '48px' }}
                >
                  <Wrench className="h-5 w-5" />
                </div>
                {isNavExpanded && showNavText && (
                  <span
                    className="text-sm font-medium"
                    style={{
                      paddingLeft: '12px',
                    }}
                  >
                    Tools
                  </span>
                )}
              </button>

              {/* Show active tool below Tools button when viewing a tool from /tools - Expanded */}
              {isNavExpanded &&
                activeNavItem === 'Tools' &&
                activeToolFromPath &&
                location.pathname.startsWith('/tools/') && (
                  <div className="overflow-hidden pl-1 space-y-1 mt-1">
                    {(() => {
                      const toolSlug = activeToolFromPath.toLowerCase().replace(/\s+/g, '-');
                      const ToolIcon = getToolIcon(activeToolFromPath);
                      return (
                        <button
                          key={activeToolFromPath}
                          aria-label={`Open ${activeToolFromPath} in Tools`}
                          onClick={() => {
                            navigate(`/tools/${toolSlug}`);
                            setActiveNavItem('Tools');
                          }}
                          onMouseEnter={e => handleShowNavTooltip(activeToolFromPath, e)}
                          onMouseMove={e => handleMoveNavTooltip(e)}
                          onMouseLeave={() => handleHideNavTooltip()}
                          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-sm text-gray-400"
                        >
                          <ToolIcon className="h-4 w-4 flex-shrink-0" />
                          <span
                            className="block text-sm truncate whitespace-nowrap text-[oklch(.837_.128_66.29)]"
                            style={{ maxWidth: '200px' }}
                          >
                            {activeToolFromPath}
                          </span>
                        </button>
                      );
                    })()}
                  </div>
                )}

              {/* Show active tool below Tools button when viewing a tool from /tools - Collapsed */}
              {!isNavExpanded &&
                activeNavItem === 'Tools' &&
                activeToolFromPath &&
                location.pathname.startsWith('/tools/') && (
                  <div className="overflow-hidden space-y-1 mt-1 flex flex-col items-center">
                    {(() => {
                      const toolSlug = activeToolFromPath.toLowerCase().replace(/\s+/g, '-');
                      const ToolIcon = getToolIcon(activeToolFromPath);
                      return (
                        <button
                          key={activeToolFromPath}
                          aria-label={`Open ${activeToolFromPath} in Tools`}
                          onClick={() => {
                            navigate(`/tools/${toolSlug}`);
                            setActiveNavItem('Tools');
                          }}
                          onMouseEnter={e => handleShowNavTooltip(activeToolFromPath, e)}
                          onMouseMove={e => handleMoveNavTooltip(e)}
                          onMouseLeave={() => handleHideNavTooltip()}
                          className="flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer bg-purple-500/20 text-white"
                          style={{
                            width: '36px',
                            height: '36px',
                            padding: '0',
                          }}
                        >
                          <ToolIcon className="h-4 w-4 flex-shrink-0" />
                        </button>
                      );
                    })()}
                  </div>
                )}

              {isNavExpanded && (activeNavItem === 'Tools' || activeNavItem === 'MyTools') && (
                <div className="space-y-2">
                  <div
                    className="border-t border-white/5 my-4"
                    style={{
                      borderTopWidth: '2px',
                      borderColor: 'color-mix(in oklab, var(--color-white) 15%, transparent)',
                    }}
                  />

                  <button
                    onClick={() => {
                      setActiveNavItem('MyTools');
                      navigate('/mytools');
                    }}
                    className={`w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer border whitespace-nowrap overflow-hidden ${activeNavItem === 'MyTools' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                    style={{
                      height: '48px',
                    }}
                    title={!isNavExpanded ? 'My Tools' : undefined}
                  >
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{ width: '48px' }}
                    >
                      <Star className="h-5 w-5" />
                    </div>
                    {showNavText && (
                      <span
                        className="text-sm font-medium"
                        style={{
                          paddingLeft: '12px',
                        }}
                      >
                        My Tools
                      </span>
                    )}
                  </button>
                  {/* If expanded, show list of selected tools below the button (max 5) */}
                  {selectedInMyTools.size > 0 && (
                    <div className="overflow-hidden pl-1 space-y-1 mt-1">
                      {Array.from(selectedInMyTools)
                        .filter(tool => selectedTools.has(tool))
                        .slice(0, 5)
                        .map(tool => {
                          const isActiveTool =
                            activeToolFromPath === tool &&
                            location.pathname.startsWith('/mytools/');
                          const toolSlug = tool.toLowerCase().replace(/\s+/g, '-');
                          const ToolIcon = getToolIcon(tool);
                          return (
                            <button
                              key={tool}
                              aria-label={`Open ${getToolDisplayName(tool)} in My Tools`}
                              onClick={() => {
                                navigate(`/mytools/${toolSlug}`);
                                setActiveNavItem('MyTools');
                              }}
                              onMouseEnter={e => handleShowNavTooltip(tool, e)}
                              onMouseMove={e => handleMoveNavTooltip(e)}
                              onMouseLeave={() => handleHideNavTooltip()}
                              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-sm ${
                                isActiveTool
                                  ? 'text-gray-400'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              <ToolIcon className="h-4 w-4 flex-shrink-0" />
                              <span
                                className={`block text-sm truncate whitespace-nowrap ${
                                  isActiveTool ? 'text-[oklch(.837_.128_66.29)]' : ''
                                }`}
                                style={{ maxWidth: '200px' }}
                              >
                                {getToolDisplayName(tool)}
                              </span>
                            </button>
                          );
                        })}
                    </div>
                  )}
                </div>
              )}

              {isNavExpanded && (
                <div className="space-y-2">
                  {!(activeNavItem === 'Tools' || activeNavItem === 'MyTools') && (
                    <div
                      className="border-t border-white/5 my-4"
                      style={{
                        borderTopWidth: '2px',
                      }}
                    />
                  )}

                  {(activeNavItem === 'Library' || activeNavItem === 'MyOverlays') && (
                    <div>
                      <button
                        onClick={() => navigate('/myoverlays')}
                        className={`w-full flex items-center rounded-lg transition-all duration-300 cursor-pointer border whitespace-nowrap overflow-hidden ${activeNavItem === 'MyOverlays' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`}
                        style={{
                          height: '48px',
                        }}
                      >
                        <div
                          className="flex items-center justify-center flex-shrink-0"
                          style={{ width: '48px' }}
                        >
                          <Layers className="h-5 w-5" />
                        </div>
                        {isNavExpanded && showNavText && (
                          <span
                            className="text-sm font-medium"
                            style={{
                              paddingLeft: '12px',
                            }}
                          >
                            My Overlays
                          </span>
                        )}
                      </button>

                      {isNavExpanded && (
                        <div className="overflow-hidden pl-4 space-y-1 mt-1">
                          <button
                            onClick={() => {
                              navigate('/myoverlays/all');
                              setActiveNavItem('MyOverlays');
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-sm ${
                              activeOverlaySectionFromPath === 'all'
                                ? 'text-gray-400'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <Folder className="h-4 w-4 flex-shrink-0" />
                            <span
                              className={
                                activeOverlaySectionFromPath === 'all'
                                  ? 'text-[oklch(.837_.128_66.29)]'
                                  : ''
                              }
                            >
                              All
                            </span>
                          </button>
                          <button
                            onClick={() => {
                              navigate('/myoverlays/favorites');
                              setActiveNavItem('MyOverlays');
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-sm ${
                              activeOverlaySectionFromPath === 'favorites'
                                ? 'text-gray-400'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <Star className="h-4 w-4 flex-shrink-0" />
                            <span
                              className={
                                activeOverlaySectionFromPath === 'favorites'
                                  ? 'text-[oklch(.837_.128_66.29)]'
                                  : ''
                              }
                            >
                              Favorites
                            </span>
                          </button>
                          <button
                            onClick={() => {
                              navigate('/myoverlays/myimages');
                              setActiveNavItem('MyOverlays');
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-sm ${
                              activeOverlaySectionFromPath === 'myimages'
                                ? 'text-gray-400'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <Image className="h-4 w-4 flex-shrink-0" />
                            <span
                              className={
                                activeOverlaySectionFromPath === 'myimages'
                                  ? 'text-[oklch(.837_.128_66.29)]'
                                  : ''
                              }
                            >
                              My Images
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {!isNavExpanded &&
                (activeNavItem === 'Library' || activeNavItem === 'MyOverlays') && (
                  <div className="space-y-2">
                    <div
                      className="border-t border-white/5 my-4"
                      style={{
                        borderTopWidth: '2px',
                        borderColor: 'color-mix(in oklab, var(--color-white) 15%, transparent)',
                      }}
                    />

                    <button
                      onClick={() => {
                        setActiveNavItem('MyOverlays');
                        navigate('/myoverlays');
                      }}
                      onMouseEnter={e => handleShowNavTooltip('My Overlays', e)}
                      onMouseMove={e => handleMoveNavTooltip(e)}
                      onMouseLeave={() => handleHideNavTooltip()}
                      className={`w-full flex items-center justify-center px-0 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                        activeNavItem === 'MyOverlays'
                          ? 'bg-purple-500/20 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                      style={{
                        aspectRatio: '1/1',
                        width: '48px',
                        height: '48px',
                        padding: '0',
                      }}
                    >
                      <Layers className="h-5 w-5 flex-shrink-0" />
                    </button>

                    {/* Show My Overlays items in collapsed state */}
                    <div className="overflow-hidden space-y-1 mt-1 flex flex-col items-center">
                      <button
                        onClick={() => {
                          navigate('/myoverlays/all');
                          setActiveNavItem('MyOverlays');
                        }}
                        onMouseEnter={e => handleShowNavTooltip('All', e)}
                        onMouseMove={e => handleMoveNavTooltip(e)}
                        onMouseLeave={() => handleHideNavTooltip()}
                        className={`flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
                          activeOverlaySectionFromPath === 'all'
                            ? 'bg-purple-500/20 text-white'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                        style={{
                          width: '36px',
                          height: '36px',
                          padding: '0',
                        }}
                      >
                        <Folder className="h-4 w-4 flex-shrink-0" />
                      </button>
                      <button
                        onClick={() => {
                          navigate('/myoverlays/favorites');
                          setActiveNavItem('MyOverlays');
                        }}
                        onMouseEnter={e => handleShowNavTooltip('Favorites', e)}
                        onMouseMove={e => handleMoveNavTooltip(e)}
                        onMouseLeave={() => handleHideNavTooltip()}
                        className={`flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
                          activeOverlaySectionFromPath === 'favorites'
                            ? 'bg-purple-500/20 text-white'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                        style={{
                          width: '36px',
                          height: '36px',
                          padding: '0',
                        }}
                      >
                        <Star className="h-4 w-4 flex-shrink-0" />
                      </button>
                      <button
                        onClick={() => {
                          navigate('/myoverlays/myimages');
                          setActiveNavItem('MyOverlays');
                        }}
                        onMouseEnter={e => handleShowNavTooltip('My Images', e)}
                        onMouseMove={e => handleMoveNavTooltip(e)}
                        onMouseLeave={() => handleHideNavTooltip()}
                        className={`flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
                          activeOverlaySectionFromPath === 'myimages'
                            ? 'bg-purple-500/20 text-white'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                        style={{
                          width: '36px',
                          height: '36px',
                          padding: '0',
                        }}
                      >
                        <Image className="h-4 w-4 flex-shrink-0" />
                      </button>
                    </div>
                  </div>
                )}

              {!isNavExpanded && (activeNavItem === 'Tools' || activeNavItem === 'MyTools') && (
                <div className="space-y-2">
                  <div
                    className="border-t border-white/5 my-4"
                    style={{
                      borderTopWidth: '2px',
                      borderColor: 'color-mix(in oklab, var(--color-white) 15%, transparent)',
                    }}
                  />

                  <button
                    onClick={() => {
                      setActiveNavItem('MyTools');
                      navigate('/mytools');
                    }}
                    onMouseEnter={e => handleShowNavTooltip('My Tools', e)}
                    onMouseMove={e => handleMoveNavTooltip(e)}
                    onMouseLeave={() => handleHideNavTooltip()}
                    className={`w-full flex items-center justify-center px-0 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                      activeNavItem === 'MyTools'
                        ? 'bg-purple-500/20 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    style={{
                      aspectRatio: '1/1',
                      width: '48px',
                      height: '48px',
                      padding: '0',
                    }}
                  >
                    <div className="relative">
                      <Box className="h-5 w-5 flex-shrink-0" />
                      {hasRecentlyAddedTool && (
                        <span className="absolute top-0 right-0 inline-flex w-2 h-2 rounded-full bg-orange-500"></span>
                      )}
                    </div>
                  </button>

                  {/* Show selected tools in collapsed state (max 5) */}
                  {selectedInMyTools.size > 0 && (
                    <div className="overflow-hidden space-y-1 mt-1 flex flex-col items-center">
                      {Array.from(selectedInMyTools)
                        .slice(0, 5)
                        .map(tool => {
                          const isActiveTool =
                            activeToolFromPath === tool &&
                            location.pathname.startsWith('/mytools/');
                          const toolSlug = tool.toLowerCase().replace(/\s+/g, '-');
                          const ToolIcon = getToolIcon(tool);
                          return (
                            <button
                              key={tool}
                              aria-label={`Open ${getToolDisplayName(tool)} in My Tools`}
                              onClick={() => {
                                navigate(`/mytools/${toolSlug}`);
                                setActiveNavItem('MyTools');
                              }}
                              onMouseEnter={e => handleShowNavTooltip(tool, e)}
                              onMouseMove={e => handleMoveNavTooltip(e)}
                              onMouseLeave={() => handleHideNavTooltip()}
                              className={`flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
                                isActiveTool
                                  ? 'bg-purple-500/20 text-white'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                              }`}
                              style={{
                                width: '36px',
                                height: '36px',
                                padding: '0',
                              }}
                            >
                              <ToolIcon className="h-4 w-4 flex-shrink-0" />
                            </button>
                          );
                        })}
                    </div>
                  )}
                </div>
              )}

              {!isNavExpanded && (activeNavItem === 'Account' || activeNavItem === 'Pricing') && (
                <div className="space-y-2">
                  <div
                    className="border-t border-white/5 my-4"
                    style={{
                      borderTopWidth: '2px',
                      borderColor: 'color-mix(in oklab, var(--color-white) 15%, transparent)',
                    }}
                  />
                </div>
              )}

              {/* bottom controls moved below so they stay anchored to the bottom */}
            </div>
          </div>
        </motion.nav>

        {/* bottom controls container: Pricing, Account, divider, Collapse - OUTSIDE motion.nav */}
        <div
          className="border-r border-purple-500/30 backdrop-blur-sm"
          style={{
            position: 'fixed',
            bottom: '0px',
            left: '0px',
            width: isNavExpanded ? '218px' : '80px',
            height: '194px',
            backgroundColor: 'rgba(15, 10, 26, 0.95)',
            zIndex: 99,
            pointerEvents: 'auto',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0) translateZ(0)',
            isolation: 'isolate',
            contain: 'strict',
            transition: 'width 0.3s ease-in-out',
          }}
        >
          <div
            style={{
              padding: '16px',
              paddingBottom: '0px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <div
              className="border-t border-white/5"
              style={{
                marginLeft: '3px',
                marginRight: '3px',
                paddingTop: '16px',
                borderColor: 'color-mix(in oklab, var(--color-white) 15%, transparent)',
                borderTopWidth: '2px',
              }}
            >
              <div className="space-y-2">
                <button
                  onClick={() => navigate('/pricing')}
                  onMouseEnter={e =>
                    !isNavExpanded &&
                    handleShowNavTooltip(isAuthenticated ? 'Subscription' : 'Pricing', e)
                  }
                  onMouseMove={e => !isNavExpanded && handleMoveNavTooltip(e)}
                  onMouseLeave={() => !isNavExpanded && handleHideNavTooltip()}
                  className={`flex items-center rounded-lg cursor-pointer border whitespace-nowrap overflow-hidden ${
                    isNavExpanded
                      ? `w-full ${activeNavItem === 'Pricing' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`
                      : `${activeNavItem === 'Pricing' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`
                  }`}
                  style={{
                    height: '48px',
                    width: isNavExpanded ? '100%' : '48px',
                    transition: 'none',
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: '48px', height: '48px' }}
                  >
                    <DollarSign className="h-5 w-5" />
                  </div>
                  {isNavExpanded && showNavText && (
                    <span
                      className="text-sm font-medium"
                      style={{
                        paddingLeft: '12px',
                      }}
                    >
                      {isAuthenticated ? 'Subscription' : 'Pricing'}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => navigate('/account')}
                  onMouseEnter={e => !isNavExpanded && handleShowNavTooltip('Account', e)}
                  onMouseMove={e => !isNavExpanded && handleMoveNavTooltip(e)}
                  onMouseLeave={() => !isNavExpanded && handleHideNavTooltip()}
                  className={`flex items-center rounded-lg cursor-pointer border whitespace-nowrap overflow-hidden ${
                    isNavExpanded
                      ? `w-full ${activeNavItem === 'Account' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`
                      : `${activeNavItem === 'Account' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'text-gray-300 hover:bg-white/5 hover:text-white border-transparent'}`
                  }`}
                  style={{
                    height: '48px',
                    width: isNavExpanded ? '100%' : '48px',
                    transition: 'none',
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: '48px', height: '48px' }}
                  >
                    <User className="h-5 w-5" />
                  </div>
                  {isNavExpanded && showNavText && (
                    <span
                      className="text-sm font-medium"
                      style={{
                        paddingLeft: '12px',
                      }}
                    >
                      Account
                    </span>
                  )}
                </button>

                <div
                  className="border-t border-white/5 my-2"
                  style={{
                    borderColor: 'color-mix(in oklab, var(--color-white) 15%, transparent)',
                    marginLeft: '-16px',
                    marginRight: '-16px',
                  }}
                />

                <button
                  onClick={() => setIsNavExpanded(!isNavExpanded)}
                  onMouseEnter={e => !isNavExpanded && handleShowNavTooltip('Expand', e)}
                  onMouseMove={e => !isNavExpanded && handleMoveNavTooltip(e)}
                  onMouseLeave={() => !isNavExpanded && handleHideNavTooltip()}
                  className={`flex items-center rounded-lg cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white ${isNavExpanded ? 'w-full' : ''}`}
                  style={{
                    height: '48px',
                    width: isNavExpanded ? '100%' : '48px',
                    transition: 'none',
                    marginBottom: '5px',
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: '48px', height: '48px' }}
                  >
                    {isNavExpanded ? (
                      <ChevronsLeft className="h-5 w-5" />
                    ) : (
                      <ChevronsRight className="h-5 w-5" />
                    )}
                  </div>
                  {isNavExpanded && showNavText && (
                    <span
                      className="text-sm font-medium"
                      style={{
                        paddingLeft: '12px',
                      }}
                    >
                      Collapse
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

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
                onMouseEnter={e => handleShowNavTooltip('Collapse Filters', e)}
                onMouseMove={e => handleMoveNavTooltip(e)}
                onMouseLeave={() => handleHideNavTooltip()}
                aria-label="Collapse filters"
                className="absolute top-3 right-3 p-2 rounded-md hover:bg-white/5 transition-colors z-50 cursor-pointer"
              >
                <ChevronsLeft className="h-4 w-4" />
              </button>
              <div
                className="p-11 filter-panel-text"
                style={{ minWidth: '236px', padding: 'calc(var(--spacing) * 8)' }}
              >
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
                              <ChevronDown className="h-4 w-4 cursor-pointer" />
                            ) : (
                              <ChevronRight className="h-4 w-4 cursor-pointer" />
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
                                        className="flex items-center gap-3 px-2 py-[1px] -my-[1px] rounded hover:bg-white/5 cursor-pointer transition-colors group"
                                        style={{ paddingBottom: '3px' }}
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
              left: `${isNavExpanded ? 218 : 80}px`,
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
              onMouseEnter={e => handleShowNavTooltip('Open Filters', e)}
              onMouseMove={e => handleMoveNavTooltip(e)}
              onMouseLeave={() => handleHideNavTooltip()}
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
          className="relative flex-1 overflow-y-auto filter-panel-scrollbar transition-all duration-500 ease-in-out bg-[#1a1428]"
          style={{
            maxHeight: navMaxHeight,
            marginLeft: !isFilterOpen && activeNavItem === 'Library' ? '80px' : '0',
          }}
        >
          {activeNavItem === 'Library' && (
            <>
              {/* Fixed header section */}
              <div
                className="flex-shrink-0 bg-[#1a1428] sticky top-0 z-[110]"
                style={{ paddingBottom: '12px' }}
              >
                <div className="max-w-7xl mx-auto px-6 pt-4 lg:px-8 lg:pt-6">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      {/* filter open button removed from the header search area */}
                      <div className="relative ml-auto" style={{ width: '35%' }}>
                        <Search className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search Overlays"
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                          className="w-full bg-[rgb(168,85,247)]/10 border border-white/10 rounded-full py-3 pl-6 pr-14 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white/10 transition-all"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-12 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Clear search"
                          >
                            <X className="h-4 w-4 text-gray-400" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-between"
                      style={{ marginTop: '-12px' }}
                    >
                      <h1
                        className="text-3xl font-bold"
                        style={{ fontSize: 'clamp(24px, calc(2vw + 1rem), 30px)' }}
                      >
                        <span>Browse Overlays</span>
                      </h1>
                      <div className="flex items-end gap-3">
                        <span className="text-sm text-gray-400">
                          <span>{filteredOverlays.length} results</span>
                        </span>
                        <div className="relative" ref={sortDropdownRef}>
                          <button
                            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
                          >
                            <span>{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
                            <ChevronDown
                              className={`h-4 w-4 cursor-pointer transition-transform duration-200 ${isSortDropdownOpen ? 'rotate-180' : ''}`}
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
                                className="absolute right-0 w-40 bg-[#2a1e3a] border border-white/10 rounded-lg shadow-xl overflow-hidden z-[120]"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable content section */}
              <div
                ref={scrollableContentRef}
                className={`relative flex-1 filter-panel-scrollbar ${showProductCardModal ? 'overflow-hidden' : 'overflow-y-auto'}`}
              >
                <div
                  className="max-w-7xl mx-auto"
                  style={{ padding: 'calc(var(--spacing) * 7)', paddingTop: 'calc(1.0rem)' }}
                >
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
                          onClick={() => {
                            setActiveOverlay(overlay);
                            setShowLeaderboardOverlay(true);
                          }}
                          style={{ aspectRatio: '4/3' }}
                        >
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              const clickedCard = (e.currentTarget as HTMLElement).closest(
                                '.group'
                              ) as HTMLElement;
                              if (clickedCard && scrollableContentRef.current) {
                                const grid = clickedCard.parentElement?.parentElement;
                                if (grid) {
                                  // Get all cards in the grid
                                  const allCards = Array.from(
                                    grid.querySelectorAll('.group')
                                  ) as HTMLElement[];
                                  const clickedIndex = allCards.indexOf(clickedCard);

                                  // Determine grid columns (lg:3, sm:2, default:1)
                                  const gridWidth = grid.clientWidth;
                                  let columns = 1;
                                  if (window.matchMedia('(min-width: 1024px)').matches) {
                                    columns = 3;
                                  } else if (window.matchMedia('(min-width: 640px)').matches) {
                                    columns = 2;
                                  }

                                  // Calculate which row the clicked card is in
                                  const rowIndex = Math.floor(clickedIndex / columns);

                                  // Find the middle card of that row
                                  const middleColumnIndex = Math.floor(columns / 2);
                                  const middleCardIndex = rowIndex * columns + middleColumnIndex;
                                  const middleCard = allCards[middleCardIndex];

                                  if (middleCard) {
                                    const cardRect = middleCard.getBoundingClientRect();
                                    const containerRect =
                                      scrollableContentRef.current.getBoundingClientRect();

                                    let topPosition =
                                      cardRect.top -
                                      containerRect.top +
                                      scrollableContentRef.current.scrollTop;

                                    // Calculate total number of rows
                                    const totalRows = Math.ceil(allCards.length / columns);
                                    const lastRowIndex = totalRows - 1;

                                    // If this is the top row (rowIndex === 0), position between this row and the next
                                    if (rowIndex === 0) {
                                      const nextRowMiddleCardIndex =
                                        (rowIndex + 1) * columns + middleColumnIndex;
                                      const nextRowMiddleCard = allCards[nextRowMiddleCardIndex];

                                      if (nextRowMiddleCard) {
                                        const nextCardRect =
                                          nextRowMiddleCard.getBoundingClientRect();
                                        const nextCardTop =
                                          nextCardRect.top -
                                          containerRect.top +
                                          scrollableContentRef.current.scrollTop;
                                        // Position at the midpoint between the two cards
                                        topPosition =
                                          (topPosition +
                                            cardRect.height / 2 +
                                            nextCardTop +
                                            nextCardRect.height / 2) /
                                          2;
                                      } else {
                                        // If there's no next row, just center on the current card
                                        topPosition = topPosition + cardRect.height / 2;
                                      }
                                    }
                                    // If this is the bottom row, position between this row and the previous
                                    else if (rowIndex === lastRowIndex) {
                                      const prevRowMiddleCardIndex =
                                        (rowIndex - 1) * columns + middleColumnIndex;
                                      const prevRowMiddleCard = allCards[prevRowMiddleCardIndex];

                                      if (prevRowMiddleCard) {
                                        const prevCardRect =
                                          prevRowMiddleCard.getBoundingClientRect();
                                        const prevCardTop =
                                          prevCardRect.top -
                                          containerRect.top +
                                          scrollableContentRef.current.scrollTop;
                                        // Position at the midpoint between the two cards
                                        topPosition =
                                          (prevCardTop +
                                            prevCardRect.height / 2 +
                                            topPosition +
                                            cardRect.height / 2) /
                                          2;
                                      } else {
                                        // If there's no previous row, just center on the current card
                                        topPosition = topPosition + cardRect.height / 2;
                                      }
                                    } else {
                                      // For middle rows, center on the middle card
                                      topPosition = topPosition + cardRect.height / 2;
                                    }

                                    setClickedCardPosition({
                                      top: topPosition,
                                      left: cardRect.left - containerRect.left + cardRect.width / 2,
                                      width: cardRect.width,
                                      height: cardRect.height,
                                    });
                                  }
                                }
                              }
                              setActiveOverlay(overlay);
                              setShowProductCardModal(true);
                            }}
                            className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-20"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </button>

                          <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                            <button
                              onClick={e => {
                                e.stopPropagation();
                                toggleBookmark(overlay.id);
                              }}
                              className={`p-2 rounded-full transition-colors cursor-pointer ${
                                bookmarkedOverlays.has(overlay.id)
                                  ? 'bg-transparent hover:bg-white/20'
                                  : 'bg-transparent hover:bg-white/20'
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill={bookmarkedOverlays.has(overlay.id) ? 'currentColor' : 'none'}
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={
                                  bookmarkedOverlays.has(overlay.id)
                                    ? 'text-yellow-400'
                                    : 'text-white'
                                }
                              >
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
                            <div
                              className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                              style={{ marginBottom: '60px' }}
                            >
                              <span className="text-gray-400 text-xs font-medium">Preview</span>
                            </div>
                          </div>

                          {/* Caption card overlay - slides up on hover to reveal additional content */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/60 pt-3 px-4 pb-4 transition-transform duration-[400ms] ease-in-out translate-y-[calc(83%-40px)] group-hover:translate-y-[8%] cursor-default">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <h3 className="font-semibold text-white group-hover:text-[oklch(.837_.128_66.29)] text-[17px] leading-tight transition-colors duration-300 cursor-pointer">
                                <span>{overlay.name}</span>
                              </h3>
                            </div>
                            {/* price badge sits attached to top edge of the bottom overlay for aesthetic */}
                            <span
                              className="absolute top-0 right-4 z-30 bg-[#d97706] text-black text-[11px] font-bold px-2 py-1 rounded uppercase tracking-wide cursor-default"
                              style={{ transform: 'translateY(-50%) scale(1.05)' }}
                            >
                              ${overlay.price}
                            </span>

                            {/* Description and action icons */}
                            <div className="flex items-start justify-between gap-3 cursor-default opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]">
                              <p
                                className="text-gray-400 text-xs leading-relaxed line-clamp-2 cursor-default"
                                style={{ width: '60%' }}
                              >
                                {getOverlayDescription(overlay)}
                              </p>
                              {(cart[overlay.id] || 0) === 0 ? (
                                <button
                                  onClick={e => {
                                    e.stopPropagation();
                                    add(overlay.id);
                                    if (!isCartOpen) {
                                      openCart();
                                    }
                                  }}
                                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0 cursor-pointer"
                                  aria-label={`Add ${overlay.name} to cart`}
                                  title={`Add ${overlay.name}`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-white"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                  <span className="text-sm">Add</span>
                                </button>
                              ) : (
                                <div className="flex items-center gap-2 bg-white/5 rounded-md px-2 py-1">
                                  <button
                                    onClick={e => {
                                      e.stopPropagation();
                                      remove(overlay.id);
                                      if (!isCartOpen) {
                                        openCart();
                                      }
                                    }}
                                    className="w-7 h-7 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white text-sm cursor-pointer"
                                    aria-label={`Decrease quantity for ${overlay.name}`}
                                    title={`Remove one ${overlay.name}`}
                                  >
                                    −
                                  </button>
                                  <div className="px-2 text-white text-sm cursor-default">
                                    {cart[overlay.id]}
                                  </div>
                                  <button
                                    onClick={e => {
                                      e.stopPropagation();
                                      add(overlay.id);
                                      if (!isCartOpen) {
                                        openCart();
                                      }
                                    }}
                                    className="w-7 h-7 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white text-sm cursor-pointer"
                                    aria-label={`Increase quantity for ${overlay.name}`}
                                    title={`Add one ${overlay.name}`}
                                  >
                                    +
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Card 3D Modal - Positioned over clicked card */}
                {showProductCardModal && activeOverlay && clickedCardPosition && (
                  <div
                    className="absolute inset-0 z-[50] bg-black/50 backdrop-blur-sm"
                    onClick={() => setShowProductCardModal(false)}
                  >
                    <div
                      className="absolute"
                      style={{
                        top: `${clickedCardPosition.top}px`,
                        left: `${clickedCardPosition.left}px`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      <ProductCard3D
                        overlay={activeOverlay}
                        onPreview={() => {
                          setShowProductCardModal(false);
                          setShowLeaderboardOverlay(true);
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {activeNavItem === 'Tools' && !activeToolFromPath && (
            <div className="max-w-7xl mx-auto p-6 lg:p-8">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                  <span>Tools Dashboard</span>
                  <div
                    className="relative inline-flex cursor-help"
                    onMouseEnter={e => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const headerHeight = headerRef.current?.getBoundingClientRect().height || 64;

                      // Calculate tooltip position - align to right of icon
                      let x = rect.right + 10;
                      let y = rect.top - 10;

                      // Check if tooltip would overlap header (assuming tooltip height ~40px)
                      const estimatedTooltipHeight = 40;
                      if (y - estimatedTooltipHeight < headerHeight) {
                        // Position below the icon instead
                        y = rect.bottom + 10;
                      }

                      setToolsInfoTooltip({ x, y });
                    }}
                    onMouseLeave={() => setToolsInfoTooltip(null)}
                  >
                    <Info className="h-6 w-6 text-gray-400 hover:text-gray-300 transition-colors" />
                  </div>
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
                      ? toolMapping[selectedTool] === tool || selectedTool === tool
                      : false;

                    // Check if this tool is selected for My Tools
                    const isSelected = selectedTools.has(tool);

                    // Get the appropriate icon for this tool
                    const ToolIcon = getToolIcon(tool);

                    const toolSlug = tool.toLowerCase().replace(/\s+/g, '-');

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
                        className={`relative bg-gradient-to-b from-[#2a1e3a]/60 to-[#1a1428]/40 rounded-2xl pt-6 px-6 border transition-all group ${
                          isSelected || isHighlighted
                            ? 'border-orange-500/50 ring-2 ring-orange-500/30 shadow-lg shadow-orange-500/20'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        {/* Star icon in top right corner */}
                        <div
                          className="absolute top-4 right-4 cursor-pointer"
                          onClick={e => {
                            e.stopPropagation();
                            toggleToolInCollection(tool);
                          }}
                          onMouseEnter={e => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const headerHeight =
                              headerRef.current?.getBoundingClientRect().height || 64;

                            let x = rect.left + rect.width / 2;
                            let y = rect.top - 10;

                            const estimatedTooltipHeight = 40;
                            if (y - estimatedTooltipHeight < headerHeight) {
                              y = rect.bottom + 10;
                            }

                            setFavoriteTooltip({ x, y });
                          }}
                          onMouseLeave={() => setFavoriteTooltip(null)}
                        >
                          <Star
                            className={`h-6 w-6 transition-all ${
                              isSelected || isHighlighted
                                ? 'text-orange-400 fill-orange-400'
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                          />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                              isSelected || isHighlighted
                                ? 'bg-orange-500/30'
                                : 'bg-purple-500/20 group-hover:bg-purple-500/30'
                            }`}
                          >
                            <ToolIcon className="h-6 w-6 text-gray-200" />
                          </div>
                          <h3 className="font-semibold text-lg text-white">
                            <span>{tool}</span>
                          </h3>
                        </div>
                        <div className="flex justify-between gap-3" style={{ paddingBottom: '20px', paddingRight: '20px', marginLeft: '-24px', marginRight: '-24px', paddingLeft: '24px', minHeight: '60px' }}>
                          <p className="text-sm text-gray-400 self-start" style={{ maxWidth: '60%' }}>
                            <span>Access your {tool.toLowerCase()} tools</span>
                          </p>
                          {/* Open Tool button */}
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              navigate(`/tools/${toolSlug}`);
                              setActiveNavItem('Tools');
                            }}
                            className="flex items-center gap-2 px-6 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0 cursor-pointer self-end text-white text-sm font-medium"
                          >
                            {isAuthenticated ? 'Open' : 'Preview'}
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeNavItem === 'MyTools' && !activeToolFromPath && (
            <div className="max-w-7xl mx-auto p-6 lg:p-8">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                  <span>My Tools</span>
                  <div
                    className="relative inline-flex cursor-help"
                    onMouseEnter={e => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const headerHeight = headerRef.current?.getBoundingClientRect().height || 64;

                      // Calculate tooltip position - align to right of icon
                      let x = rect.right + 10;
                      let y = rect.top - 10;

                      // Check if tooltip would overlap header (assuming tooltip height ~40px)
                      const estimatedTooltipHeight = 40;
                      if (y - estimatedTooltipHeight < headerHeight) {
                        // Position below the icon instead
                        y = rect.bottom + 10;
                      }

                      setToolsInfoTooltip({ x, y });
                    }}
                    onMouseLeave={() => setToolsInfoTooltip(null)}
                  >
                    <Info className="h-6 w-6 text-gray-400 hover:text-gray-300 transition-colors" />
                  </div>
                </h1>
                <p className="text-gray-300 text-lg">
                  <span>Your selected breaker tools and utilities.</span>
                </p>
                {selectedTools.size === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-gray-400 text-lg mb-4">
                      <span>No tools selected yet</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      <span>Visit the Tools page to select your favorite tools</span>
                    </p>
                    <button
                      onClick={() => navigate('/tools')}
                      className="mt-6 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-white font-medium transition-colors cursor-pointer"
                    >
                      <span>Go to Tools</span>
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {Array.from(selectedTools).map(tool => {
                      const toolSlug = tool.toLowerCase().replace(/\s+/g, '-');
                      const ToolIcon = getToolIcon(tool);
                      const displayName = getToolDisplayName(tool);
                      const isEditing = editingTool === tool;
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
                          className={`relative bg-gradient-to-b from-[#2a1e3a]/60 to-[#1a1428]/40 rounded-2xl pt-6 px-6 border transition-all group border-white/10 hover:border-white/20 ${isEditing ? 'tool-card-editing' : ''}`}
                        >
                          {/* Edit and Star icons in top right corner */}
                          <div className="absolute top-4 right-4 flex items-center gap-2">
                            <div
                              className="edit-icon"
                              onClick={e => {
                                e.stopPropagation();
                                setEditingTool(tool);
                              }}
                              onMouseEnter={e => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const headerHeight =
                                  headerRef.current?.getBoundingClientRect().height || 64;

                                let x = rect.left + rect.width / 2;
                                let y = rect.top - 10;

                                const estimatedTooltipHeight = 40;
                                if (y - estimatedTooltipHeight < headerHeight) {
                                  y = rect.bottom + 10;
                                }

                                setEditNameTooltip({ x, y });
                              }}
                              onMouseLeave={() => setEditNameTooltip(null)}
                            >
                              <Pencil className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer" />
                            </div>
                            <div
                              className="star-icon"
                              onClick={e => {
                                e.stopPropagation();
                                toggleToolPinned(tool);
                              }}
                              onMouseEnter={e => {
                                // Clear any existing timeout
                                if (pinTooltipTimeoutRef.current) {
                                  clearTimeout(pinTooltipTimeoutRef.current);
                                  pinTooltipTimeoutRef.current = null;
                                }

                                const rect = e.currentTarget.getBoundingClientRect();
                                const headerHeight =
                                  headerRef.current?.getBoundingClientRect().height || 64;

                                let x = rect.left + rect.width / 2;
                                let y = rect.top - 10;

                                const estimatedTooltipHeight = 40;
                                if (y - estimatedTooltipHeight < headerHeight) {
                                  y = rect.bottom + 10;
                                }

                                setShortlistTooltip({ x, y });
                              }}
                              onMouseLeave={() => {
                                // Fast hide for Pin tooltip (100ms delay)
                                pinTooltipTimeoutRef.current = setTimeout(() => {
                                  setShortlistTooltip(null);
                                }, 100);
                              }}
                            >
                              <Pin
                                className={`h-6 w-6 transition-all cursor-pointer ${
                                  selectedInMyTools.has(tool)
                                    ? 'text-orange-400 fill-current'
                                    : 'text-gray-400 hover:text-gray-300'
                                }`}
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mb-4" style={{ minHeight: '48px' }}>
                            <div
                              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors bg-purple-500/20 group-hover:bg-purple-500/30`}
                            >
                              <ToolIcon className="h-6 w-6 text-gray-200" />
                            </div>
                            {isEditing ? (
                              <div className="flex items-center gap-2 flex-1">
                                <input
                                  type="text"
                                  defaultValue={displayName}
                                  maxLength={17}
                                  autoFocus
                                  onKeyDown={e => {
                                    if (e.key === 'Escape') {
                                      setEditingTool(null);
                                    } else if (
                                      e.currentTarget.value.length >= 17 &&
                                      e.key.length === 1 &&
                                      !e.ctrlKey &&
                                      !e.metaKey &&
                                      !e.altKey
                                    ) {
                                      // User is trying to type past the limit
                                      notify({
                                        message: 'Tool name limited to 17 characters',
                                        type: 'warning',
                                      });
                                    }
                                  }}
                                  onClick={e => e.stopPropagation()}
                                  className="rounded-lg px-4 py-2 text-white text-base border border-white/5 focus:outline-none focus:border-purple-500/50 transition-colors"
                                  style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    maxWidth: '180px',
                                    height: '40px',
                                  }}
                                  id={`edit-tool-${tool}`}
                                />
                                <button
                                  onClick={e => {
                                    e.stopPropagation();
                                    const input = document.getElementById(
                                      `edit-tool-${tool}`
                                    ) as HTMLInputElement;
                                    if (input) {
                                      saveCustomToolName(tool, input.value);
                                    }
                                  }}
                                  className="px-[10px] py-[5px] bg-transparent border border-white/10 rounded-md text-[#C7B9E8] text-[10px] font-medium hover:border-white/20 hover:text-[#D5CBEF] transition-colors cursor-pointer flex-shrink-0"
                                  style={{ fontSize: '10px', lineHeight: '1.2' }}
                                >
                                  Save
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center flex-1" style={{ minHeight: '40px' }}>
                                <h3 className="font-semibold text-lg text-white">
                                  <span>{displayName}</span>
                                </h3>
                              </div>
                            )}
                          </div>
                          <div className="flex justify-between gap-3" style={{ paddingBottom: '20px', paddingRight: '20px', marginLeft: '-24px', marginRight: '-24px', paddingLeft: '24px', minHeight: '60px' }}>
                            <p className="text-sm text-gray-400 self-start" style={{ maxWidth: '60%' }}>
                              <span>Access your {displayName.toLowerCase()} tools</span>
                            </p>
                            {/* Open Tool button */}
                            <button
                              onClick={e => {
                                e.stopPropagation();
                                navigate(`/mytools/${toolSlug}`);
                              }}
                              className="flex items-center gap-2 px-6 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0 cursor-pointer self-end text-white text-sm font-medium"
                            >
                              Open
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {((activeNavItem === 'MyTools' && activeToolFromPath) ||
            (activeNavItem === 'Tools' && activeToolFromPath)) && (
            <div className="w-full h-full">
              {/* Empty main content area for individual tool - ready for tool implementation */}
            </div>
          )}

          {activeNavItem === 'MyOverlays' && activeOverlaySectionFromPath === 'all' && (
            <div className="w-full h-full">
              {/* Empty main content area for All overlays section - ready for implementation */}
            </div>
          )}

          {activeNavItem === 'MyOverlays' && activeOverlaySectionFromPath === 'favorites' && (
            <div className="w-full h-full">
              {/* Empty main content area for Favorites section - ready for implementation */}
            </div>
          )}

          {activeNavItem === 'MyOverlays' && activeOverlaySectionFromPath === 'myimages' && (
            <div className="w-full h-full">
              {/* Empty main content area for My Images section - ready for implementation */}
            </div>
          )}

          {activeNavItem === 'Account' && (
            <div className="mx-auto p-6 lg:p-8">
              <div className="space-y-8 max-w-[720px]">
                <h1 className="text-3xl font-bold text-white">
                  <span>Account Settings</span>
                </h1>

                {/* Form Container with Gradient Background */}
                <div
                  className="rounded-2xl py-6 px-8 border border-white/5 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to bottom, #1b1126, #0e0916)',
                    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)',
                    minHeight: '200px',
                  }}
                >
                  <div className="space-y-5 w-full max-w-2xl">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="block text-[0.875rem] font-semibold tracking-wide text-[#B0A6C1] uppercase">
                        <span>Name</span>
                      </label>
                      <div className="flex items-end gap-3 name-editing-container" style={{ minHeight: '48px' }}>
                        {isNameEditing ? (
                          <input
                            type="text"
                            value={nameValue}
                            maxLength={17}
                            name="fullName"
                            data-sentry-source-file="NameForm.tsx"
                            onChange={e => setNameValue(e.target.value)}
                            onKeyDown={e => {
                              if (
                                e.currentTarget.value.length >= 17 &&
                                e.key.length === 1 &&
                                !e.ctrlKey &&
                                !e.metaKey &&
                                !e.altKey
                              ) {
                                // User is trying to type past the limit
                                notify({
                                  message: 'Name limited to 17 characters',
                                  type: 'warning',
                                });
                              }
                            }}
                            className="rounded-lg px-4 py-3 text-white text-base border border-white/5 focus:outline-none focus:border-purple-500/50 transition-colors"
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              width: '49%',
                              height: '48px',
                            }}
                          />
                        ) : (
                          <div
                            className="text-white text-base px-4 py-3 flex items-center"
                            style={{
                              width: '49%',
                              height: '48px',
                            }}
                          >
                            {nameValue}
                          </div>
                        )}
                        <button
                          onClick={() => {
                            if (isNameEditing) {
                              // Save: update the original value to the current value
                              setOriginalNameValue(nameValue);
                              setIsNameEditing(false);
                            } else {
                              // Change: store current value as original before editing
                              setOriginalNameValue(nameValue);
                              setIsNameEditing(true);
                            }
                          }}
                          className="px-[10px] py-[5px] bg-transparent border border-white/10 rounded-md text-[#C7B9E8] text-[10px] font-medium hover:border-white/20 hover:text-[#D5CBEF] transition-colors cursor-pointer flex-shrink-0"
                          style={{ fontSize: '10px', lineHeight: '1.2' }}
                        >
                          <span>{isNameEditing ? 'Save' : 'Change'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-[0.875rem] font-semibold tracking-wide text-[#B0A6C1] uppercase">
                        <span>Email</span>
                      </label>
                      <div className="flex items-end gap-3 email-editing-container" style={{ minHeight: '48px' }}>
                        {isEmailEditing ? (
                          <input
                            type="email"
                            value={emailValue}
                            onChange={e => setEmailValue(e.target.value)}
                            className="rounded-lg px-4 py-3 text-white text-base border border-white/5 focus:outline-none focus:border-purple-500/50 transition-colors"
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              width: '49%',
                              height: '48px',
                            }}
                          />
                        ) : (
                          <div
                            className="text-white text-base px-4 py-3 flex items-center"
                            style={{
                              width: '49%',
                              height: '48px',
                            }}
                          >
                            {emailValue}
                          </div>
                        )}
                        <button
                          onClick={() => {
                            if (isEmailEditing) {
                              // Save: update the original value to the current value
                              setOriginalEmailValue(emailValue);
                              setIsEmailEditing(false);
                            } else {
                              // Change: store current value as original before editing
                              setOriginalEmailValue(emailValue);
                              setIsEmailEditing(true);
                            }
                          }}
                          className="px-[10px] py-[5px] bg-transparent border border-white/10 rounded-md text-[#C7B9E8] text-[10px] font-medium hover:border-white/20 hover:text-[#D5CBEF] transition-colors cursor-pointer flex-shrink-0"
                          style={{ fontSize: '10px', lineHeight: '1.2' }}
                        >
                          <span>{isEmailEditing ? 'Save' : 'Change'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Theme */}
                  <div className="space-y-3">
                    <label className="block text-[0.875rem] font-semibold tracking-wide text-[#B0A6C1] uppercase">
                      <span>Theme</span>
                    </label>
                    <div className="flex gap-6">
                      <button
                        onClick={() => setSelectedTheme('light')}
                        className="flex flex-col items-center gap-2.5 group cursor-pointer"
                      >
                        <div
                          className={`w-[134px] h-[90px] bg-[#2d2840] rounded-[6px] flex items-center justify-center transition-colors p-4 ${
                            selectedTheme === 'light'
                              ? 'border-[2px] border-[#e8753a]'
                              : 'border-[1.5px] border-[#4a4558]'
                          }`}
                        >
                          <div className="grid grid-cols-4 gap-[5px]">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={`light-${i}`}
                                className="w-[14px] h-[14px] bg-[#8a8294] rounded-[2px]"
                              ></div>
                            ))}
                          </div>
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            selectedTheme === 'light' ? 'text-white' : 'text-gray-300'
                          }`}
                        >
                          Light
                        </span>
                      </button>
                      <button
                        onClick={() => setSelectedTheme('dark')}
                        className="flex flex-col items-center gap-2.5 group cursor-pointer"
                      >
                        <div
                          className={`w-[134px] h-[90px] bg-[#1f1a2e] rounded-[6px] flex items-center justify-center transition-colors p-4 ${
                            selectedTheme === 'dark'
                              ? 'border-[2px] border-[#e8753a]'
                              : 'border-[1.5px] border-[#4a4558]'
                          }`}
                        >
                          <div className="grid grid-cols-4 gap-[5px]">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={`dark-${i}`}
                                className="w-[14px] h-[14px] bg-[#6b4e8a] rounded-[2px]"
                              ></div>
                            ))}
                          </div>
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            selectedTheme === 'dark' ? 'text-white' : 'text-gray-300'
                          }`}
                        >
                          Dark
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Subscribe for email updates */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      id="subscribe-checkbox"
                      className="w-4 h-4 bg-transparent border border-gray-500 rounded-[2px] checked:bg-white checked:border-gray-600 cursor-pointer accent-white"
                    />
                    <label
                      htmlFor="subscribe-checkbox"
                      className="text-sm font-medium text-[#B0A6C1] cursor-pointer"
                    >
                      <span>Subscribe for email updates</span>
                    </label>
                  </div>

                  {/* Divider */}
                  <div className="my-8 mx-4">
                    <div className="border-t border-white/5"></div>
                  </div>

                  {/* Action Buttons - Left and Right Aligned */}
                  <div className="flex justify-between items-center gap-4 mt-6">
                    <div className="flex gap-4">
                      <button
                        onClick={() => setIsAuthenticated(false)}
                        className="px-11 py-3 bg-transparent border border-white/10 rounded-xl text-[#C7B9E8] text-sm font-medium hover:border-white/20 hover:text-[#D5CBEF] transition-colors cursor-pointer h-[48px]"
                      >
                        <span>Sign Out</span>
                      </button>
                      <button
                        onClick={() => setIsChangePasswordOpen(true)}
                        className="px-11 py-3 bg-transparent border border-white/10 rounded-xl text-[#C7B9E8] text-sm font-medium hover:border-white/20 hover:text-[#D5CBEF] transition-colors cursor-pointer h-[48px]"
                      >
                        <span>Reset Password</span>
                      </button>
                    </div>
                    <button className="px-11 py-3 bg-transparent border border-red-500/30 rounded-xl text-[#FF4D4D] text-sm font-medium hover:bg-red-500/5 hover:border-red-500/50 transition-colors cursor-pointer h-[48px]">
                      <span>Delete Account</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeNavItem === 'Pricing' && (
            <div
              className="max-w-5xl mx-auto p-6 lg:p-8 text-center"
              style={{ transform: 'scale(0.95)', transformOrigin: 'top center' }}
            >
              <h1 className="text-5xl font-bold flex items-center gap-3 justify-center mb-6 cursor-default">
                <span>Level Up Your Production</span>
              </h1>
              <p className="text-xl text-gray-300 mb-16 cursor-default">
                <span>
                  Ready for a breakthrough? Upgrade to Pro for premium tools and bigger reach.
                </span>
              </p>

              <div className="flex items-center justify-center mb-8">
                <div className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 relative inline-flex">
                  {/* Slider track */}
                  <div className="absolute inset-2 rounded-xl bg-white/5" aria-hidden="true" />
                  {/* Sliding handle */}
                  <span
                    className={`absolute top-2 left-2 h-[calc(100%-1rem)] rounded-xl bg-orange-500 shadow-lg will-change-transform transition-transform duration-300 ease-out`}
                    style={{
                      width: 'calc(50% - 0.5rem)',
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
                        onClick={() => {
                          setShowLoginOverlay(false);
                          setShowSignUpOverlay(true);
                        }}
                        className="mx-auto w-full py-4 px-6 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl font-semibold text-lg text-center hover:bg-slate-800 transition-colors duration-150 cursor-pointer"
                      >
                        <span>{isAuthenticated ? 'Current Plan' : 'Start Free'}</span>
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
                        onClick={() => {
                          setShowLoginOverlay(false);
                          setShowSignUpOverlay(true);
                        }}
                        className="mx-auto w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-lg transition-colors text-center cursor-pointer"
                      >
                        <span>{isAuthenticated ? 'Upgrade' : 'Get Pro'}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Compare Plans & Features Table */}
              <div className="mt-16 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span>Compare Plans & Features</span>
                </h2>
                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-6 text-gray-400 font-semibold text-lg">Features</th>
                        <th className="p-6 text-center text-white font-semibold text-lg">
                          <div className="flex flex-col items-center gap-2">
                            <span>BreakDance Starter</span>
                            {isAuthenticated && (
                              <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                                Current Plan
                              </span>
                            )}
                          </div>
                        </th>
                        <th className="p-6 text-center text-white font-semibold text-lg">
                          <div className="flex flex-col items-center gap-2">
                            <span>BreakDance Pro</span>
                            <span className="inline-block px-3 py-1 bg-transparent text-transparent text-xs font-semibold rounded-full" style={{ height: '28px' }}>
                              &nbsp;
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Overlay Downloads</td>
                        <td className="p-6 text-center text-gray-300">5 per month</td>
                        <td className="p-6 text-center text-white font-semibold">Unlimited</td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Overlay Library Access</td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Custom Branding</td>
                        <td className="p-6 text-center text-gray-500">
                          <X className="w-5 h-5 mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Premium Overlays</td>
                        <td className="p-6 text-center text-gray-500">
                          <X className="w-5 h-5 mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Stream Deck Integration</td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Break Tools Dashboard</td>
                        <td className="p-6 text-center text-gray-300">Limited Access</td>
                        <td className="p-6 text-center text-white font-semibold">Full Access</td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Cloud Storage</td>
                        <td className="p-6 text-center text-gray-300">1 GB</td>
                        <td className="p-6 text-center text-white font-semibold">50 GB</td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Priority Support</td>
                        <td className="p-6 text-center text-gray-500">
                          <X className="w-5 h-5 mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Early Access to New Features</td>
                        <td className="p-6 text-center text-gray-500">
                          <X className="w-5 h-5 mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Custom Asset Requests</td>
                        <td className="p-6 text-center text-gray-300">1 per year</td>
                        <td className="p-6 text-center text-white font-semibold">3 per year</td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Limited Edition Collections</td>
                        <td className="p-6 text-center text-gray-500">
                          <X className="w-5 h-5 mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300">Commercial License</td>
                        <td className="p-6 text-center text-gray-500">
                          <X className="w-5 h-5 mx-auto" />
                        </td>
                        <td className="p-6 text-center">
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

              {/* FAQ Section */}
              <div className="mt-24 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "How do I download and use the overlays?",
                      answer: "Once you've added overlays to your cart and completed checkout, you'll receive instant download links. Simply download the overlay files, import them into OBS Studio or your preferred streaming software, and customize them to match your brand. Each overlay comes with detailed instructions."
                    },
                    {
                      question: "Can I use BreakDance overlays for commercial streams?",
                      answer: "BreakDance Pro subscribers receive a commercial license allowing unlimited use across all streaming platforms, including monetized content. Free tier users have a personal use license. Upgrade to Pro to unlock commercial rights."
                    },
                    {
                      question: "What streaming software is compatible with BreakDance?",
                      answer: "Our overlays are fully compatible with OBS Studio, Streamlabs OBS, XSplit, and most popular streaming software. We also provide Stream Deck integration for quick overlay switching and real-time control during your breaks."
                    },
                    {
                      question: "How does the Break Tools Dashboard work?",
                      answer: "The Break Tools Dashboard provides inventory management, ROI tracking, price guides, and scheduling tools specifically designed for card breakers. Pro subscribers get full access to all tools, while free tier users have limited access to basic features."
                    },
                    {
                      question: "Can I customize the overlays with my own branding?",
                      answer: "Yes! Pro subscribers can fully customize overlays with their own logos, colors, and branding elements. We provide editable source files and templates. Free tier users can use overlays as-is with limited customization options."
                    },
                    {
                      question: "What happens to my overlays if I cancel my subscription?",
                      answer: "All overlays you've downloaded during your subscription remain yours to use indefinitely. However, you'll lose access to future downloads, premium overlays, and Pro-exclusive features. You can resubscribe at any time to regain full access."
                    },
                    {
                      question: "Do you offer refunds?",
                      answer: "We offer a 14-day money-back guarantee for Pro subscriptions. If you're not satisfied with BreakDance, contact our support team within 14 days of purchase for a full refund. Digital downloads may affect refund eligibility."
                    }
                  ].map((faq, index) => {
                    const isExpanded = expandedFAQs.has(index);
                    return (
                      <div
                        key={index}
                        className="bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => {
                            setExpandedFAQs(prev => {
                              const next = new Set(prev);
                              if (next.has(index)) {
                                next.delete(index);
                              } else {
                                next.add(index);
                              }
                              return next;
                            });
                          }}
                          className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
                        >
                          <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-0 text-gray-300 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Sign Up Overlay */}
      {showSignUpOverlay && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
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
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
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
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
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

      {/* Leaderboard Info Overlay */}
      {showLeaderboardOverlay && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowLeaderboardOverlay(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowLeaderboardOverlay(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <LeaderboardInfoModal
              onClose={() => setShowLeaderboardOverlay(false)}
              overlay={activeOverlay}
              isBookmarked={activeOverlay ? bookmarkedOverlays.has(activeOverlay.id) : false}
              onToggleBookmark={() => {
                if (activeOverlay) {
                  toggleBookmark(activeOverlay.id);
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      <AnimatePresence>
        {isChangePasswordOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
              onClick={() => setIsChangePasswordOpen(false)}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
                onClick={e => e.stopPropagation()}
              >
                <div
                  className="rounded-2xl shadow-xl border overflow-hidden"
                  style={{ backgroundColor: '#271e37' }}
                >
                  <div className="px-8 py-10">
                    <div className="text-center mb-8 cursor-default">
                      <h1 className="text-2xl font-bold text-white mb-2">
                        <span>Change your password</span>
                      </h1>
                      <p className="text-gray-500">
                        <span>Enter your current password and choose a new one</span>
                      </p>
                    </div>

                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        // Handle password change logic here
                        notify({ message: 'Password changed successfully', type: 'success' });
                        setIsChangePasswordOpen(false);
                        setChangePasswordData({
                          email: '',
                          currentPassword: '',
                          newPassword: '',
                          confirmPassword: '',
                        });
                      }}
                      className="space-y-4"
                    >
                      {/* Email Field */}
                      <div className="space-y-1">
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={changePasswordData.email}
                            onChange={e =>
                              setChangePasswordData(prev => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
                            style={{
                              backgroundColor:
                                'color-mix(in oklab, var(--color-white) 10%, transparent)',
                              borderColor: 'oklch(0.446 0.03 256.802)',
                            }}
                          />
                        </div>
                      </div>

                      {/* Current Password Field */}
                      <div className="space-y-1">
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="password"
                            placeholder="Enter your current password"
                            value={changePasswordData.currentPassword}
                            onChange={e =>
                              setChangePasswordData(prev => ({
                                ...prev,
                                currentPassword: e.target.value,
                              }))
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
                            style={{
                              backgroundColor:
                                'color-mix(in oklab, var(--color-white) 10%, transparent)',
                              borderColor: 'oklch(0.446 0.03 256.802)',
                            }}
                          />
                        </div>
                      </div>

                      {/* New Password Field */}
                      <div className="space-y-1">
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="password"
                            placeholder="Enter your new password"
                            value={changePasswordData.newPassword}
                            onChange={e =>
                              setChangePasswordData(prev => ({
                                ...prev,
                                newPassword: e.target.value,
                              }))
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
                            style={{
                              backgroundColor:
                                'color-mix(in oklab, var(--color-white) 10%, transparent)',
                              borderColor: 'oklch(0.446 0.03 256.802)',
                            }}
                          />
                        </div>
                      </div>

                      {/* Confirm Password Field */}
                      <div className="space-y-1">
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="password"
                            placeholder="Re-enter your new password"
                            value={changePasswordData.confirmPassword}
                            onChange={e =>
                              setChangePasswordData(prev => ({
                                ...prev,
                                confirmPassword: e.target.value,
                              }))
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
                            style={{
                              backgroundColor:
                                'color-mix(in oklab, var(--color-white) 10%, transparent)',
                              borderColor: 'oklch(0.446 0.03 256.802)',
                            }}
                          />
                        </div>
                      </div>

                      {/* Reset Password Button */}
                      <motion.button
                        type="submit"
                        disabled={
                          !changePasswordData.email ||
                          !changePasswordData.currentPassword ||
                          !changePasswordData.newPassword ||
                          !changePasswordData.confirmPassword
                        }
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <span>Reset My Password</span>
                      </motion.button>
                    </form>

                    <div className="mt-6 text-center">
                      <button
                        onClick={() => {
                          setIsChangePasswordOpen(false);
                          setChangePasswordData({
                            email: '',
                            currentPassword: '',
                            newPassword: '',
                            confirmPassword: '',
                          });
                        }}
                        className="text-gray-400 hover:text-gray-300 text-sm transition-colors cursor-pointer"
                      >
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Custom nav tooltip (for tool names in the nav panel) */}
      {navTooltip && (
        <div
          className="fixed z-[120] pointer-events-none bg-black/90 text-white text-sm px-3 py-1 rounded shadow-lg max-w-xs truncate"
          style={{ left: navTooltip.x, top: navTooltip.y, transform: 'translate(0, 0)' }}
          aria-hidden="true"
        >
          {navTooltip.text}
        </div>
      )}

      {/* Tools Dashboard info tooltip */}
      {toolsInfoTooltip && (
        <div
          className="fixed z-[120] pointer-events-none bg-black/90 text-white text-sm px-4 py-2 rounded-lg shadow-lg max-w-xs"
          style={{
            left: toolsInfoTooltip.x,
            top: toolsInfoTooltip.y,
            transform: 'translate(0, -100%)',
          }}
          aria-hidden="true"
        >
          {activeNavItem === 'Tools'
            ? 'Star all tools seen below that you would like to add to your "My Tools" list'
            : 'Pin up to 5 tools below that you would like quick-access to in the side panel.'}
        </div>
      )}

      {/* Edit name tooltip */}
      {editNameTooltip && (
        <div
          className="fixed z-[120] pointer-events-none bg-black/90 text-white text-sm px-3 py-1 rounded shadow-lg"
          style={{
            left: editNameTooltip.x,
            top: editNameTooltip.y,
            transform: 'translate(-50%, -100%)',
          }}
          aria-hidden="true"
        >
          Edit Name
        </div>
      )}

      {/* Shortlist tooltip */}
      {shortlistTooltip && (
        <div
          className="fixed z-[120] pointer-events-none bg-black/90 text-white text-sm px-3 py-1 rounded shadow-lg"
          style={{
            left: shortlistTooltip.x,
            top: shortlistTooltip.y,
            transform: 'translate(-50%, -100%)',
          }}
          aria-hidden="true"
        >
          Pin
        </div>
      )}

      {/* Favorite tooltip */}
      {favoriteTooltip && (
        <div
          className="fixed z-[120] pointer-events-none bg-black/90 text-white text-sm px-3 py-1 rounded shadow-lg"
          style={{
            left: favoriteTooltip.x,
            top: favoriteTooltip.y,
            transform: 'translate(-50%, -100%)',
          }}
          aria-hidden="true"
        >
          Favorite
        </div>
      )}

      {/* Open Tool tooltip */}
      {openToolTooltip && (
        <div
          className="fixed z-[120] pointer-events-none bg-black/90 text-white text-sm px-3 py-1 rounded shadow-lg"
          style={{
            left: openToolTooltip.x,
            top: openToolTooltip.y,
            transform: 'translate(-50%, -100%)',
          }}
          aria-hidden="true"
        >
          Open Tool
        </div>
      )}
    </div>
  );
};
