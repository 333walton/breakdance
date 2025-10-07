import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FormData {
  email: string;
}

interface FormErrors {
  email?: string;
}

interface PasswordResetCardProps {
  onBack?: () => void;
}

export const PasswordResetCard = ({ onBack }: PasswordResetCardProps = {}) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email';
    return undefined;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);

    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    setIsLoading(true);
    setErrors({});

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

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
              <span>Reset your password</span>
            </h1>
            <p className="text-gray-500">
              <span>Enter your email to receive a reset link</span>
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

            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{
                scale: 0.98,
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>{isLoading ? 'Sending...' : 'Submit'}</span>
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 cursor-default">
              <span>Remember your password? </span>
              <button
                onClick={onBack}
                className="text-blue-600 hover:text-blue-700 font-medium hover:font-bold transition-colors cursor-pointer relative inline-block">
                <span className="invisible font-bold">Back to sign in</span>
                <span className="absolute inset-0 font-medium hover:font-bold">Back to sign in</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
