"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const ref = useRef(null);

  return (
    <section className="section bg-primary-50">
      <div ref={ref} className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our services
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className={cn(
                "rounded-xl mb-3 bg-white",
                "transition-all duration-200",
                "hover:border-primary-300" // Only change border color on hover, no shadow
              )}
            >
              <AccordionTrigger className="px-6 py-4 text-left text-secondary-800 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-secondary-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
