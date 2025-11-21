"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What areas do you cover?",
    answer:
      "We provide photography and videography services throughout Bangladesh, including Dhaka, Chittagong, Sylhet, and other major cities. For locations outside our standard coverage, additional travel fees may apply.",
  },
  {
    id: 2,
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 months in advance to secure your preferred date. During peak seasons, we suggest booking 4-6 months ahead to ensure availability.",
  },
  {
    id: 3,
    question: "Do you provide raw photos?",
    answer:
      "Yes, we include a selection of raw, unedited photos with all our packages. The number of raw photos varies by package, with premium packages including more raw files.",
  },
  {
    id: 4,
    question: "What's your cancellation policy?",
    answer:
      "Cancellations made more than 30 days before the event are eligible for a full refund. Cancellations made 15-30 days before receive a 50% refund. Cancellations made less than 15 days before are non-refundable but can be rescheduled with a 25% rescheduling fee.",
  },
  {
    id: 5,
    question: "Can we customize packages?",
    answer:
      "Absolutely! We understand that every event is unique. Our packages can be customized to meet your specific needs. Simply contact us to discuss your requirements and we'll create a tailored package for you.",
  },
  {
    id: 6,
    question: "How long until we receive photos/videos?",
    answer:
      "For photos, you can expect to receive the edited gallery within 7-10 business days. For videography, the timeline is slightly longer at 10-14 business days. We always strive to deliver sooner when possible.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <HelpCircle size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-white/80">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our photography and videography
            services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openId === faq.id
                    ? "bg-white/10 border-purple-500/30"
                    : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openId === faq.id
                        ? "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                        : "bg-white/10"
                    }`}
                  >
                    {openId === faq.id ? (
                      <Minus size={16} className="text-white" />
                    ) : (
                      <Plus size={16} className="text-white" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-medium"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
