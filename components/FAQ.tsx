"use client";

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";

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

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section bg-primary-50">
      <div ref={ref} className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary-100"
            >
              <motion.button
                className="w-full flex justify-between items-center p-5 md:p-6 text-left"
                onClick={() => toggleFAQ(faq.id)}
                whileHover={{ backgroundColor: "#fff5f7" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-base md:text-lg font-semibold text-secondary-800">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-primary-500" />
                </motion.div>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: openId === faq.id ? "auto" : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-secondary-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
