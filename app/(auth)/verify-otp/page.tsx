'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const VerifyOTPPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if current is filled
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setVerified(true);
    }, 1500);
  };

  const handleResend = () => {
    console.log('Resend OTP');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="bg-white py-8 px-6 shadow rounded-2xl">
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-secondary-800">
              Verify Your Email
            </h2>
            <p className="mt-2 text-secondary-600">
              Enter the 6-digit code sent to your email
            </p>
          </div>

          {verified ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="mx-auto flex justify-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold text-secondary-800">Verification Successful</h3>
              <p className="mt-2 text-secondary-600">
                Your account has been verified successfully.
              </p>
              <Link 
                href="/reset-password" 
                className="mt-6 inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium"
              >
                Continue to Reset Password
              </Link>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-secondary-700 mb-2">
                  Verification Code
                </label>
                <div className="flex justify-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-input-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="w-12 h-14 text-center text-2xl border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ))}
                </div>
              </div>

              <div className="text-center text-sm text-secondary-600">
                Didn't receive the code?{' '}
                <button 
                  type="button" 
                  onClick={handleResend}
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Resend Code
                </button>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading || otp.some(digit => !digit)}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    'Verify Code'
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link href="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500 flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyOTPPage;