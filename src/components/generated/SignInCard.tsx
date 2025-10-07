import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Github } from 'lucide-react';
import { cn } from '../../lib/utils';
interface FormData {
  email: string;
  password: string;
}
interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

// @component: SignInCard
interface SignInCardProps {
  onSwitchToSignUp?: () => void;
  onSwitchToPasswordReset?: () => void;
}

export const SignInCard = ({ onSwitchToSignUp, onSwitchToPasswordReset }: SignInCardProps = {}) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email';
    return undefined;
  };
  const validatePassword = (password: string): string | undefined => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    return undefined;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };
    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      return;
    }
    setIsLoading(true);
    setErrors({});

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };
  const handleSocialSignIn = async (provider: string) => {
    setSocialLoading(provider);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSocialLoading(null);
  };

  // @return
  return (
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
        duration: 0.5,
      }}
      className="w-full max-w-md mx-auto"
    >
      <div className="rounded-2xl shadow-xl border overflow-hidden" style={{ backgroundColor: '#271e37' }}>
        <div className="px-8 py-10">
          <div className="text-center mb-8 cursor-default">
            <h1 className="text-2xl font-bold text-white mb-2">
              <span>Welcome back</span>
            </h1>
            <p className="text-gray-500">
              <span>Sign in to continue to your account</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className={cn(
                    'w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500',
                    errors.email
                      ? 'border-red-300 bg-red-50'
                      : ''
                  )}
                  style={{
                    backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)',
                    borderColor: 'oklch(0.446 0.03 256.802)'
                  }}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600 ml-1">
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div className="space-y-1" style={{ marginBlockEnd: 'calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))' }}>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className={cn(
                    'w-full pl-10 pr-12 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500',
                    errors.password
                      ? 'border-red-300 bg-red-50'
                      : ''
                  )}
                  style={{
                    backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)',
                    borderColor: 'oklch(0.446 0.03 256.802)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 ml-1">
                  <span>{errors.password}</span>
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={onSwitchToPasswordReset}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer"
              >
                <span
                  style={{
                    fontSize: '14px',
                  }}
                >
                  Forgot password?
                </span>
              </button>
            </div>

            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                <p className="text-sm text-red-600">
                  <span>{errors.general}</span>
                </p>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{
                scale: 0.98,
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>{isLoading ? 'Signing in...' : 'Sign in'}</span>
            </motion.button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-between">
                <div className="w-[40%] border-t border-gray-500"></div>
                <div className="w-[40%] border-t border-gray-500"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 font-bold cursor-default" style={{ backgroundColor: 'color-mix(in oklab, var(--color-white) 10%, transparent)' }}>
                  <span>Or</span>
                </span>
              </div>
            </div>

            <div className="mt-6">
              <motion.button
                type="button"
                onClick={() => handleSocialSignIn('google')}
                disabled={socialLoading !== null}
                whileTap={{
                  scale: 0.98,
                }}
                className="w-full flex items-center justify-center px-4 py-3 border rounded-xl text-white font-medium hover:!bg-white hover:text-black hover:border-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500/20 disabled:opacity-50 cursor-pointer"
                style={{ backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' }}
              >
                {socialLoading === 'google' ? (
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </div>
                )}
              </motion.button>

              <motion.button
                type="button"
                onClick={() => handleSocialSignIn('github')}
                disabled={socialLoading !== null}
                whileTap={{
                  scale: 0.98,
                }}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500/20 disabled:opacity-50"
                style={{
                  display: 'none',
                }}
              >
                {socialLoading === 'github' ? (
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </div>
                )}
              </motion.button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 cursor-default">
              <span>Don't have an account? </span>
              <button
                onClick={onSwitchToSignUp}
                className="text-blue-600 hover:text-blue-700 font-medium hover:font-bold transition-colors cursor-pointer relative inline-block">
                <span className="invisible font-bold">Sign up now!</span>
                <span className="absolute inset-0 font-medium hover:font-bold">Sign up now!</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
