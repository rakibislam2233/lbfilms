'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Phone, 
  Mail, 
  Package, 
  User, 
  MessageCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    package: '',
    eventType: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        package: '',
        eventType: '',
        location: '',
        message: ''
      });
    }, 1500);
  };

  const packages = [
    { id: 'basic', name: 'Basic Package (৳15,000)' },
    { id: 'standard', name: 'Standard Package (৳30,000)' },
    { id: 'premium', name: 'Premium Package (৳50,000)' }
  ];

  const eventTypes = [
    { id: 'wedding', name: 'Wedding' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'corporate', name: 'Corporate Event' },
    { id: 'portrait', name: 'Portrait Session' },
    { id: 'other', name: 'Other' }
  ];

  return (
    <section id="booking" className="section">
      <div ref={ref} className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title">Book Your Session</h2>
          <p className="section-subtitle">
            Fill out the form below to reserve your date
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-6 md:p-8 rounded-2xl text-center mb-8 md:mb-12"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Thank You for Your Booking!</h3>
            <p className="mb-4 md:mb-6 text-sm md:text-base">We've received your request and will contact you shortly to confirm your session.</p>
            <a 
              href="https://wa.me/8801234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp bg-whatsapp text-white inline-flex items-center gap-2 text-sm md:text-base"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              WhatsApp Us
            </a>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6">
              <div className="relative">
                <label className="block text-secondary-700 font-medium mb-2 text-sm md:text-base">Full Name *</label>
                <div className="relative">
                  <User className="h-4 w-4 md:h-5 md:w-5 text-secondary-400 absolute left-3 top-3.5" />
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-secondary-700 font-medium mb-2 text-sm md:text-base">Phone Number *</label>
                <div className="relative">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-secondary-400 absolute left-3 top-3.5" />
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-secondary-700 font-medium mb-2 text-sm md:text-base">Email (Optional)</label>
                <div className="relative">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-secondary-400 absolute left-3 top-3.5" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="relative">
                  <label className="block text-secondary-700 font-medium mb-2 text-sm md:text-base">Event Date</label>
                  <div className="relative">
                    <CalendarIcon className="h-4 w-4 md:h-5 md:w-5 text-secondary-400 absolute left-3 top-3.5" />
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-secondary-700 font-medium mb-2 text-sm md:text-base">Event Type</label>
                  <div className="relative">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-secondary-400 absolute left-3 top-3.5" />
                    <Select value={formData.eventType} onValueChange={handleSelectChange('eventType')}>
                      <SelectTrigger className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map(type => (
                          <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-secondary-700 font-medium mb-2 text-sm md:text-base">Package Selection</label>
                <div className="relative">
                  <Package className="h-4 w-4 md:h-5 md:w-5 text-secondary-400 absolute left-3 top-3.5" />
                  <Select value={formData.package} onValueChange={handleSelectChange('package')}>
                    <SelectTrigger className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map(pkg => (
                        <SelectItem key={pkg.id} value={pkg.id}>{pkg.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-secondary-700 font-medium mb-2 text-sm md:text-base">Location</label>
                <div className="relative">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-secondary-400 absolute left-3 top-3.5" />
                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Event location"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-secondary-700 font-medium mb-2 text-sm md:text-base">Additional Message</label>
                <div className="relative">
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-secondary-400 absolute left-3 top-3.5" />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Tell us more about your event..."
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-3 md:p-4 rounded-lg mb-6">
              <p className="text-center text-secondary-700 font-medium text-sm md:text-base">Payment Method: <span className="pink-gradient-text font-bold">Cash on Service</span></p>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-800 transition-all w-full md:w-auto text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit Order'
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default BookingForm;