import React from 'react';
import {
  Users2, Briefcase, Globe, BookOpenCheck, BusFront, Users,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users2 className="w-10 h-10 text-red-500" />,
      title: 'Family Tours',
      description: 'Personalized and comfortable trips tailored for families of all sizes.',
      details: 'We understand the importance of family time. Our packages are carefully crafted to provide enjoyable and stress-free experiences for everyone, from children to elders.'
    },
    {
      icon: <Briefcase className="w-10 h-10 text-indigo-500" />,
      title: 'Corporate Logistics',
      description: 'Seamless travel and transport for officials, personnel, and business events.',
      details: 'Our corporate logistics team ensures timely pickups, professional handling, and customized transport solutions for your business requirements.'
    },
    {
      icon: <Globe className="w-10 h-10 text-teal-500" />,
      title: 'LFC & LTC Tours',
      description: 'Enjoy government travel allowances with well-organized LFC and LTC packages.',
      details: 'We assist government employees and PSU staff in planning their Leave Fare Concession (LFC) and Leave Travel Concession (LTC) trips with full documentation and itinerary planning.'
    },
    {
      icon: <BookOpenCheck className="w-10 h-10 text-amber-600" />,
      title: 'Student Educational Tours',
      description: 'Engaging, safe, and educational trips for students and academic institutions.',
      details: 'We offer curated educational tours for schools and colleges that blend learning with exploration, including local history, industries, and interactive activities.'
    },
    {
      icon: <BusFront className="w-10 h-10 text-pink-600" />,
      title: 'Pilgrim Tours',
      description: 'Spiritual journeys to India’s most revered temples and pilgrimage sites.',
      details: 'Whether it’s a single-day darshan or multi-destination yatra, our pilgrim packages are designed for comfort, devotion, and safe travel.'
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-700" />,
      title: 'Function Transportation',
      description: 'Travel solutions for weddings, temple rituals, and all family functions.',
      details: 'From small cars to large buses, we provide transport solutions for events, with punctual service and courteous drivers ensuring smooth travel.'
    }
  ];

  const includedServices = [
    'Professional multilingual guides',
    'Air-conditioned transportation',
    'Story-telling about history of places',
    'Assist in Room bookings',
    'Photography assistance',
    '24/7 customer support',
    'Flexible itinerary options',
    'Assistance with temple darshan and rituals'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-80 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl">Tailored travel solutions for every occasion</p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cater to various travel needs including family, corporate, student and spiritual groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
                <p className="text-gray-600 text-sm">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What’s Included in Our Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive services to ensure your tour experience is comfortable, informative, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedServices.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book or Customize Your Tour?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your travel requirements or create a personalized itinerary.
          </p>
          <div className="space-x-4">
            <a href="tel:+919842178102" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition">
              Call Now: +91 98421 78102
            </a>
            <a href="https://wa.me/919842178102" target="_blank" rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-blue-800 font-semibold py-3 px-8 rounded-lg transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
