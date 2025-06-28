import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Lakshmi Travels</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for exploring the magnificent heritage of Madurai. 
              Discover ancient temples, royal palaces, and cultural treasures with our 
              expert guided tours.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/lakshmitravels_madurai" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
              </a>
              <a href="https://wa.me/919842178102" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 text-green-400 hover:text-green-300 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 98421 78102</p>
                  <p className="text-gray-300">+91 75982 87102</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">lakshmitravelsmadurai@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    No. 28, Arun Nagar,<br />
                    Madakkulam Main Road,<br />
                    Ponmeni,<br />
                    Madurai - 625016,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours & Emergency Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Office Hours</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300">Monday - Saturday</p>
                  <p className="text-gray-300">9:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-gray-300">10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-yellow-400">Emergency Contact</h4>
              <p className="text-gray-300">24/7 Support: +91 98421 78102</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 Lakshmi Travels. All rights reserved. | Exploring Madurai's Heritage Since 1996
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
