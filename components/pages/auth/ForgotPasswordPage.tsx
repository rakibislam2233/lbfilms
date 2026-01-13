"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log("Forgot password data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-16 h-16 rounded-full bg-linear-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">&#9993;&#65039;</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Check Your Email</h1>
        <p className="text-gray-400 mb-8">
          We've sent a password reset link to your email address.
        </p>
        <Link
          href="/auth/login"
          className="text-purple-400 hover:text-purple-300 flex items-center gap-2 justify-center"
        >
          <ArrowLeft size={18} /> Back to Login
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">&#128272;</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Forgot Password?</h1>
        <p className="text-gray-400">
          Enter your email and we'll send you a reset link
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10"
            />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="pl-12 bg-white/5 border-white/10 text-white"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl cursor-pointer bg-linear-to-r  from-purple-600 to-pink-600 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Send <ArrowRight size={18} />
            </>
          )}
        </motion.button>
      </form>

      <p className="text-center text-gray-400 mt-8">
        <Link
          href="/auth/login"
          className="text-purple-400 hover:text-purple-300 flex items-center gap-2 justify-center"
        >
          <ArrowLeft size={18} /> Back to Login
        </Link>
      </p>
    </motion.div>
  );
}
