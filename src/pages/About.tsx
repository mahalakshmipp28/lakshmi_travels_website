import React from 'react';
import { Clock, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl">Discover the Story Behind Lakshmi Travels</p>
          </div>
        </div>
      </section>

      {/* About Lakshmi Travels */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Lakshmi Travels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving travelers with passion and professionalism since 1996
            </p>
          </div>

          <div className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto space-y-6">
            <p>
              Lakshmi Travels was established in 1996 with a vision to provide seamless travel experiences
              in and around Madurai. From humble beginnings, we have grown into a trusted name in the
              regional tourism industry, offering reliable, affordable, and personalized travel services
              to thousands of happy customers.
            </p>
            <p>
              With decades of experience, deep local knowledge, and a passion for showcasing the rich
              heritage of Tamil Nadu and South India, Lakshmi Travels continues to be a preferred choice for families,
              pilgrims, tourists, and corporate groups. We are operating with all types of tourist vehicles.
            </p>
            <p>
              Whether it's temple visits, airport transfers, family functions, happy tours, school tours, coporate services or custom tours — we ensure every journey
              is safe, comfortable, and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-700">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p>
                To provide authentic, enriching travel experiences rooted in trust, local expertise,
                and personalized service — helping our guests discover the true soul of Tamil Nadu.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p>
                To be the most trusted travel partner in South India by setting benchmarks in
                customer satisfaction, service quality, and cultural tourism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p>
                Integrity, respect for culture and community, transparency, customer-first attitude,
                and a commitment to safety and comfort on every journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="text-xl font-semibold text-gray-900">1996</h4>
              <p className="text-sm text-gray-600">Year Established</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h4 className="text-xl font-semibold text-gray-900">5000+</h4>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h4 className="text-xl font-semibold text-gray-900">Madurai Based</h4>
              <p className="text-sm text-gray-600">Serving South India</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <Award className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <h4 className="text-xl font-semibold text-gray-900">Reliable Service</h4>
              <p className="text-sm text-gray-600">Trusted for Decades</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
