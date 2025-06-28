import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm('service_3t20nkb', 'template_crxzitp', formRef.current, 'e1QMfXX20f8GQU8UB')
        .then(
          () => {
            alert('Thank you for your inquiry! We will contact you soon.');
            setFormData({
              name: '',
              email: '',
              phone: '',
              date: '',
              message: ''
            });
          },
          (error) => {
            console.error('EmailJS Error:', error.text);
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: 'Phone Numbers',
      details: ['+91 98421 78102', '+91 75982 87102'],
      description: 'Call us anytime for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'Email Addresses',
      details: ['lakshmitravelsmadurai@gmail.com'],
      description: 'Send us your queries and requirements'
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: 'Office Address',
      details: ['No. 28, Arun Nagar', 'Madakkulam Main Road', 'Ponmeni', 'Madurai - 625016'],
      description: 'Visit our office for personalized service'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      description: 'We are here to assist you during these hours'
    }
  ];

  // Utility to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">Get in Touch to Plan Your Perfect Madurai Tour</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    min={getTodayDate()}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Tell us about your requirements, group size, or any special requests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info and WhatsApp */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">We're here to help you plan the perfect Madurai experience. Contact us through any of the following methods:</p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp Button */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">WhatsApp Support</h3>
                </div>
                <p className="text-green-700 mb-3">For instant responses and quick bookings, message us on WhatsApp:</p>
                <a
                  href="https://wa.me/919842178102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Chat on WhatsApp: +91 98421 78102
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h2>
            <p className="text-lg text-gray-600">Located in the heart of Madurai, near the famous Meenakshi Temple</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg mb-4">
            <iframe
              title="Lakshmi Travels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.692274927038!2d78.09136077486956!3d9.910708974229313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c54c1b6f7b95%3A0x6ffbb6e6b4b10f0a!2sArun%20Nagar%2C%20Madakkulam%20Main%20Rd%2C%20Ponmeni%2C%20Madurai%2C%20Tamil%20Nadu%20625016!5e0!3m2!1sen!2sin!4v1719499236074!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] border-0"
            ></iframe>
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps?q=No.+28,+Arun+Nagar,+Madakkulam+Main+Road,+Ponmeni,+Madurai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              View in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
