import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star, Users, Award, Clock,
  Briefcase, Users2, BookOpenCheck, BusFront, Globe
} from 'lucide-react';
import ImageSlideshow from '../components/ImageSlideshow';
import ProprietorImage from '../assets/proprietor-photo.png';

const Home = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Expert Guides',
      description: 'Professional guides with deep knowledge of South India\'s history and culture'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Group & Private Tours',
      description: 'Flexible tour options for families, couples, and large groups'
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: '25+ Years Experience',
      description: 'Trusted by thousands of visitors since 1996'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Flexible Timings',
      description: 'Tours scheduled according to your convenience'
    }
  ];

  const services = [
    {
      icon: <Users2 className="w-8 h-8 text-red-500" />,
      title: 'Family Tours',
      description: 'Personalized and comfortable trips tailored for families of all sizes.'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
      title: 'Corporate Logistics',
      description: 'Seamless travel and transport for officials, personnel, and business events.'
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: 'LFC & LTC Tours',
      description: 'Enjoy government travel allowances with well-organized LFC and LTC packages.'
    },
    {
      icon: <BookOpenCheck className="w-8 h-8 text-amber-600" />,
      title: 'Student Educational Tours',
      description: 'Engaging, safe, and educational trips for students and academic institutions.'
    },
    {
      icon: <BusFront className="w-8 h-8 text-pink-600" />,
      title: 'Pilgrim Tours',
      description: 'Spiritual journeys to India’s most revered temples and pilgrimage sites.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-700" />,
      title: 'Function Transportation',
      description: 'Travel solutions for weddings, temple rituals, and all family functions.'
    }
  ];

  return (
    <div>
      <ImageSlideshow />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Services Do We Offer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From family getaways to corporate travel, our range of services caters to every traveller’s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                to="/services"
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 block"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Lakshmi Travels?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best of Madurai with our premium tour services and local expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Proprietor */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Meet the Proprietor
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
              <img
                src={ProprietorImage}
                alt="Mr. R Perumal"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-600"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. R Perumal</h3>
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  “With over 30 years of experience in the travel and tourism industry,
                  Mr. R Perumal has guided thousands of travellers through the cultural heart of Madurai
                  with unmatched dedication and warmth.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your tour today and discover the magnificent temples, palaces, and cultural treasures of the Temple City
          </p>
          <div className="space-x-4">
            <Link to="/services" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-8 rounded-lg transition">
              View Our Services
            </Link>
            <Link to="/contact" className="border-2 border-white hover:bg-white hover:text-blue-800 font-semibold py-3 px-8 rounded-lg transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
