"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getPackageById, packages } from "@/data";
import { bookingSchema, type BookingFormData } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  CheckCircle,
  Clock,
  MessageSquare,
  User,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const BookingPage = () => {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      packageId: packageId || "",
      eventDate: "",
      eventLocation: "",
      notes: "",
    },
  });

  const selectedPackageId = watch("packageId");
  const selectedPkg = selectedPackageId
    ? getPackageById(selectedPackageId)
    : null;

  const onSubmit = async (data: BookingFormData) => {
    console.log("Booking data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-black pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-20 h-20 rounded-full bg-linear-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-gray-400 mb-6">
            Thank you for booking with LB Films. We'll contact you within 24
            hours to confirm the details.
          </p>
          <p className="text-sm text-gray-500">
            Booking Reference: LBF-{Date.now().toString().slice(-6)}
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Calendar size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-white/80">
                Book Now
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your{" "}
              <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
                Session
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Fill in the details below and we'll get back to you shortly
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <User size={18} className="text-purple-400" />
                  Personal Information
                </h3>
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    className="bg-white/5 border-white/10 text-white"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/5 border-white/10 text-white"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-white/5 border-white/10 text-white"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Camera size={18} className="text-pink-400" />
                  Event Details
                </h3>
                <div>
                  <Label htmlFor="packageId">Select Package *</Label>
                  <Controller
                    name="packageId"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="Select Package" />
                        </SelectTrigger>
                        <SelectContent>
                          {packages.map((pkg) => (
                            <SelectItem key={pkg.id} value={pkg.id}>
                              {pkg.name} - {pkg.price.toLocaleString()} TK
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.packageId && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.packageId.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="eventDate">Event Date *</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    className="bg-white/5 border-white/10 text-white"
                    {...register("eventDate")}
                  />
                  {errors.eventDate && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.eventDate.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="eventLocation">Event Location *</Label>
                  <Input
                    id="eventLocation"
                    type="text"
                    placeholder="Event Location"
                    className="bg-white/5 border-white/10 text-white"
                    {...register("eventLocation")}
                  />
                  {errors.eventLocation && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.eventLocation.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Selected Package Info */}
            {selectedPkg && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">
                      {selectedPkg.name}
                    </h4>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock size={14} />
                      {selectedPkg.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {selectedPkg.price.toLocaleString()} TK
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Additional Notes */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-cyan-400" />
                Additional Notes
              </h3>
              <Textarea
                placeholder="Tell us more about your event, special requirements, or any questions..."
                className="bg-white/5 border-white/10 text-white"
                {...register("notes")}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 py-4 rounded-xl bg-linear-to-r from-purple-600  to-pink-600 text-white font-semibold text-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
              ) : (
                "Confirm Booking"
              )}
            </motion.button>

            <p className="text-center text-gray-500 text-sm mt-4">
              By submitting, you agree to our terms and conditions. We'll
              contact you within 24 hours.
            </p>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
