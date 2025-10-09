import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MessageCircle,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Dribbble,
  ChevronDown,
  ExternalLink,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SignInCard as SignUpCard } from './SignUpCard';
import { SignInCard } from './SignInCard';
import { PasswordResetCard } from './PasswordResetCard';

// Checkbox styling
const checkboxStyles = `
  .custom-checkbox {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: color-mix(in oklab, var(--color-white) 5%, transparent) !important;
    border: 1px solid rgba(0, 0, 0, 0.3) !important;
    position: relative;
  }
  .custom-checkbox:checked {
    background-color: color-mix(in oklab, var(--color-white) 2%, transparent) !important;
    border: 1px solid rgba(0, 0, 0, 0.3) !important;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.2) !important;
  }
  .custom-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 7px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .group:hover .custom-checkbox:not(:checked) {
    box-shadow: 0 0 0 3px rgba(128, 128, 128, 0.2) !important;
  }
  .country-option:hover {
    background-color: color-mix(in oklab, var(--color-white) 5%, transparent) !important;
  }
`;

const navigationItems = [
  {
    label: 'Library',
  },
  {
    label: 'Tools',
  },
  {
    label: 'How It Works',
  },
  {
    label: 'Live Breaks',
  },
  {
    label: 'Shop',
  },
  {
    label: 'About',
  },
] as any[];
interface FormData {
  firstName: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
  desiredOptions: {
    customAnimations: boolean;
    customBreathmats: boolean;
    customCardDecks: boolean;
    other: boolean;
  };
}
interface FormErrors {
  firstName?: string;
  companyName?: string;
  email?: string;
  message?: string;
}
const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    desiredOptions: {
      customAnimations: false,
      customBreathmats: false,
      customCardDecks: false,
      other: false,
    },
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showSignUpOverlay, setShowSignUpOverlay] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
  const [showPasswordResetOverlay, setShowPasswordResetOverlay] = useState(false);

  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCountryDropdown) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showCountryDropdown]);
  const countries = [
    {
      code: 'US',
      name: 'United States',
      flag: '🇺🇸',
    },
    {
      code: 'GB',
      name: 'United Kingdom',
      flag: '🇬🇧',
    },
    {
      code: 'CA',
      name: 'Canada',
      flag: '🇨🇦',
    },
    {
      code: 'AU',
      name: 'Australia',
      flag: '🇦🇺',
    },
  ] as any[];
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Required';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        firstName: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
        desiredOptions: {
          customAnimations: false,
          customBreathmats: false,
          customCardDecks: false,
          other: false,
        },
      });
      setSubmitSuccess(false);
    }, 3000);
  };
  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };
  const handleDesiredOptionChange = (option: keyof FormData['desiredOptions']) => {
    setFormData(prev => ({
      ...prev,
      desiredOptions: {
        ...prev.desiredOptions,
        [option]: !prev.desiredOptions[option],
      },
    }));
  };
  return (
    <div className="min-h-screen">
      <style>{checkboxStyles}</style>
      {/* Header */}
      <header className="bg-gradient-to-b from-[#1f1a30] to-[#261f35] backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-50">
        <div
          className="w-full px-6 flex items-center justify-between"
          style={{ paddingTop: '4px', paddingBottom: '4px' }}
        >
          <div className="flex items-center">
              {/* Logo */}
              <div className="text-2xl font-bold flex items-center flex-shrink-0" style={{ marginLeft: '4px' }}>
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
              <nav className="hidden md:flex items-center space-x-8 ml-12" style={{ marginLeft: 'calc(var(--spacing) * 21)' }}>
                {navigationItems.map(nav => (
                  <a
                    key={nav.label}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (nav.label === 'Library') {
                        navigate('/library');
                      } else if (nav.label === 'Tools') {
                        navigate('/tools');
                      }
                    }}
                    className="text-gray-200 hover:text-orange-300 transition-colors text-sm font-bold tracking-wide relative cursor-pointer"
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

      <div className="px-6 pt-0 pb-24 bg-gradient-to-b from-[#302742] to-[#1F1A30]">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information Section */}
            <div className="space-y-8 cursor-default">
              <div>
                <h1 className="text-3xl lg:text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]">
                  Get in touch
                </h1>
                <p className="text-muted-foreground text-lg">
                  We'd love to hear from you. Our friendly team is always here to chat.
                </p>
              </div>

              <div className="space-y-6">
                {/* Chat to us */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Write us</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Our friendly team is here to help
                    </p>
                    <a
                      href="mailto:hi@untitledui.com"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      hi@untitledui.com
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground text-sm mb-2">Come say hello</p>
                    <div className="text-sm">
                      <p className="text-primary font-medium">Philadelphia, PA</p>
                      <p className="text-primary font-medium"></p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm mb-2">Mon-Fri / 9am to 5pm EST</p>
                    <span className="text-primary text-sm font-medium">
                      +1 (555) 000-0000
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 pt-8">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form Section */}
            <div
              className="rounded-xl p-8 border"
              style={{
                backgroundColor: 'color-mix(in oklab, var(--color-white) 5%, transparent)',
                borderColor: 'color-mix(in oklab, var(--color-orange-500) 30%, transparent)',
                borderTopColor: 'color-mix(in oklab, oklch(0.705 0.213 47.604) 30%, transparent)',
                borderRightColor: 'color-mix(in oklab, oklch(0.705 0.213 47.604) 30%, transparent)',
                borderBottomColor: 'color-mix(in oklab, oklch(0.705 0.213 47.604) 30%, transparent)',
                borderLeftColor: 'color-mix(in oklab, oklch(0.705 0.213 47.604) 30%, transparent)'
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={e => handleInputChange('firstName', e.target.value)}
                      placeholder="First"
                      className={`w-full px-3 py-2 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors ${errors.firstName ? 'border-destructive' : 'border-border'}`}
                      style={{
                        backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)',
                      }}
                    />
                    {errors.firstName && (
                      <p className="text-destructive text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.companyName}
                      onChange={e => handleInputChange('companyName', e.target.value)}
                      placeholder="Last"
                      className={`w-full px-3 py-2 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors ${errors.companyName ? 'border-destructive' : 'border-border'}`}
                      style={{
                        backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)',
                      }}
                    />
                    {errors.companyName && (
                      <p className="text-destructive text-xs mt-1">{errors.companyName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    placeholder="you@company.com"
                    className={`w-full px-3 py-2 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors ${errors.email ? 'border-destructive' : 'border-border'}`}
                    style={{
                      backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)',
                    }}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <div className="flex">
                      <div className="relative">
                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation();
                          setShowCountryDropdown(!showCountryDropdown);
                        }}
                        className="flex items-center px-3 py-2 border border-r-0 rounded-l-lg text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 h-[42px]"
                        style={{
                          backgroundColor:
                            'color-mix(in oklab, var(--color-white) 10%, transparent)',
                        }}
                      >
                        <span className="text-sm">{selectedCountry}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      {showCountryDropdown && (
                        <div
                          className="absolute top-full left-0 z-10 border border-border rounded-lg shadow-lg mt-0 min-w-[150px] overflow-hidden"
                          style={{ backgroundColor: '#231835' }}
                        >
                          {countries.map(country => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country.code);
                                setShowCountryDropdown(false);
                              }}
                              className="country-option w-full flex items-center px-3 py-2 text-sm transition-colors"
                            >
                              <span>{country.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={e => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="flex-1 px-3 py-2 border rounded-r-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      style={{
                        backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)',
                        width: '95%'
                      }}
                    />
                  </div>
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      placeholder="Company"
                      className="w-full px-3 py-2 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      style={{
                        backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)',
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={e => handleInputChange('message', e.target.value)}
                    placeholder="Leave us a message..."
                    className={`w-full px-3 py-2 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
                    style={{
                      backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)',
                    }}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Desired Section */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Desired</label>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    <label className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={formData.desiredOptions.customAnimations}
                          onChange={() => handleDesiredOptionChange('customAnimations')}
                          className="custom-checkbox w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                        />
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        Custom Animations / Graphics
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={formData.desiredOptions.customBreathmats}
                          onChange={() => handleDesiredOptionChange('customBreathmats')}
                          className="custom-checkbox w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                        />
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        Custom Branded Breakmats
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={formData.desiredOptions.customCardDecks}
                          onChange={() => handleDesiredOptionChange('customCardDecks')}
                          className="custom-checkbox w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                        />
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        Custom Branded Team Card Decks
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={formData.desiredOptions.other}
                          onChange={() => handleDesiredOptionChange('other')}
                          className="custom-checkbox w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                        />
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        Other
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${submitSuccess ? 'bg-green-600 text-white' : 'bg-slate-900/80 backdrop-blur-sm text-white hover:bg-slate-900/90'} cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </span>
                  ) : submitSuccess ? (
                    'Message sent!'
                  ) : (
                    'Send message'
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gradient-to-b from-[#1F1A30] to-[#582864] text-white font-normal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#" aria-label="overlays.uno home" className="mb-10 mt-4">
              <h2 className="text-[44px] leading-none font-bold tracking-tight">
                <span className="sr-only">BreakDance</span>
                <span aria-hidden="true" className="align-middle">
                  Break
                </span>
                <span
                  aria-hidden="true"
                  className="align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C25] to-[#FFC542]"
                >
                  Dance
                </span>
              </h2>
            </a>

            <nav aria-label="Footer links" className="mb-4">
              <ul className="flex items-center gap-6">
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    <span>Terms</span>
                  </a>
                </li>
              </ul>
            </nav>

            <p className="text-xs text-white/60">
              <span>© 2025 All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Sign Up Overlay */}
      {showSignUpOverlay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowSignUpOverlay(false)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSignUpOverlay(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <SignUpCard onSwitchToSignIn={() => {
              setShowSignUpOverlay(false);
              setShowLoginOverlay(true);
            }} />
          </div>
        </div>
      )}

      {/* Login Overlay */}
      {showLoginOverlay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowLoginOverlay(false)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
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
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPasswordResetOverlay(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <PasswordResetCard onBack={() => {
              setShowPasswordResetOverlay(false);
              setShowLoginOverlay(true);
            }} />
          </div>
        </div>
      )}
    </div>
  );
};
export default ContactPage;
