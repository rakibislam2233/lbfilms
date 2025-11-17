import Link from 'next/link';
import { Camera, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 md:pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo and Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-2 rounded-full">
                <Camera className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold">
                LB <span className="text-primary-400">Films</span>
              </span>
            </div>
            <p className="text-secondary-400 text-sm mb-4">
              Capturing your precious moments with professional photography and videography services.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Youtube className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Home</Link></li>
              <li><Link href="#gallery" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Gallery</Link></li>
              <li><Link href="#packages" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Packages</Link></li>
              <li><Link href="#about" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">About</Link></li>
              <li><Link href="#contact" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="#" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Wedding Photography</Link></li>
              <li><Link href="#" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Corporate Events</Link></li>
              <li><Link href="#" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Portrait Sessions</Link></li>
              <li><Link href="#" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Event Videography</Link></li>
              <li><Link href="#" className="text-secondary-400 hover:text-white transition-colors text-sm md:text-base">Photo Editing</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Contact Info</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary-400 mr-2 md:mr-3 mt-0.5" />
                <span className="text-secondary-400 text-sm md:text-base">+880 1234-567890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary-400 mr-2 md:mr-3 mt-0.5" />
                <span className="text-secondary-400 text-sm md:text-base">info@lbfilms.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary-400 mr-2 md:mr-3 mt-0.5" />
                <span className="text-secondary-400 text-sm md:text-base">123 Photography Street, Dhaka, Bangladesh</span>
              </li>
            </ul>

            <div className="mt-4 md:mt-6">
              <h4 className="font-bold text-sm md:text-base mb-2 md:mb-3">Newsletter</h4>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-secondary-800 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 w-full text-sm"
                />
                <button className="bg-gradient-to-r from-primary-500 to-primary-700 px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:from-primary-600 hover:to-primary-800 transition-all text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-secondary-500 text-sm">
          <p>© 2025 LB Films. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;