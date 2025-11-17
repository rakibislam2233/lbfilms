"use client";

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section bg-primary-50">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us for your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-secondary-800 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="bg-primary-100 p-2.5 md:p-3 rounded-full mr-0 md:mr-4 mb-2 md:mb-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-800">Phone</h4>
                  <p className="text-secondary-600">+880 1234-567890</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="bg-primary-100 p-2.5 md:p-3 rounded-full mr-0 md:mr-4 mb-2 md:mb-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-800">Email</h4>
                  <p className="text-secondary-600">info@lbfilms.com</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="bg-primary-100 p-2.5 md:p-3 rounded-full mr-0 md:mr-4 mb-2 md:mb-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-800">Office</h4>
                  <p className="text-secondary-600">
                    123 Photography Street, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start space-x-3 md:space-x-4 mt-6">
                <a
                  href="#"
                  className="bg-primary-100 p-2.5 md:p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors"
                >
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="#"
                  className="bg-primary-100 p-2.5 md:p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="#"
                  className="bg-primary-100 p-2.5 md:p-3 rounded-full text-primary-600 hover:bg-primary-200 transition-colors"
                >
                  <Youtube className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map and WhatsApp Button */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277769832909!2d90.4053793749914!3d23.77658647894169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77608e5c5b7%3A0x939e78a8b6c8e5b!2sDhaka!5e0!3m2!1sen!2sbd!4v1617777777777!5m2!1sen!2sbd"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
