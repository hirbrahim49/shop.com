import React from 'react';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Discover our mission and values on this page." />
      </Head>
      <div className="bg-gradient-to-b from-orange-300 to-white min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 py-16 space-y-20">
          {/* Header Section */}
          <section className="text-center">
            <h1 className="text-5xl font-extrabold text-orange-600 mb-6">About Us</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Welcome to our platform! We strive to provide the best services tailored to your needs.
            </p>
          </section>

          {/* Stats Section */}
          <section className="bg-orange-100 py-10 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">Our Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-gray-600">Experience swift delivery services tailored to your needs.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-gray-800">Secure Payment</h3>
                <p className="text-gray-600">Pay with confidence through our secure gateway.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-gray-800">Customer Satisfaction</h3>
                <p className="text-gray-600">Over 10,000 happy customers and counting.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-gray-600">We're here for you anytime, any day.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Links Section */}
        <section className="bg-gray-100 w-full py-10">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Accessories</li>
                  <li>Footwear</li>
                  <li>Dress Collection</li>
                  <li>Jewelry</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">About Us</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Our Story</li>
                  <li>Careers</li>
                  <li>Sustainability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Email: support@shp.com</li>
                  <li>Phone: +234 904 417 4371</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
