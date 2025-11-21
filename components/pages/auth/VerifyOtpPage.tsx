'use client';

import { motion } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export default function VerifyOtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">&#128231;</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Verify Email</h1>
        <p className="text-gray-400">
          We've sent a 6-digit code to <span className="text-white">demo@example.com</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-xl font-bold rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50"
            />
          ))}
        </div>

        <motion.button
          type="submit"
          disabled={loading || otp.some((d) => !d)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl cursor-pointer bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Verify <ArrowRight size={18} />
            </>
          )}
        </motion.button>

        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">Didn't receive the code?</p>
          <button type="button" className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 mx-auto">
            <RotateCcw size={14} /> Resend Code
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-sm mt-8">
        <Link href="/auth/login" className="text-purple-400 hover:text-purple-300">Back to Login</Link>
      </p>
    </motion.div>
  );
}
