import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Our Statics Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
        <div className="w-[90%] mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">Our Statics</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                description: "Experience swift delivery services tailored to your needs.",
              },
              {
                icon: "🔒",
                title: "Secure Payment",
                description: "Pay with confidence through our secure gateway.",
              },
              {
                icon: "⭐",
                title: "Customer Satisfaction",
                description: "Over 10,000 happy customers and counting.",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description: "We're here for you anytime, any day.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-orange-500 p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white text-gray-800 py-8">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Shop */}
          <div>
            <h2 className="text-lg font-bold text-orange-500 mb-4">Shop</h2>
            <ul className="space-y-2">
              {["Accessories", "Footwear", "Dress Collection", "Jewelry"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-sm hover:text-orange-500 transition duration-300"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h2 className="text-lg font-bold text-orange-500 mb-4">About Us</h2>
            <ul className="space-y-2">
              {["Our Story", "Careers", "Sustainability"].map((item, index) => (
                <li
                  key={index}
                  className="text-sm hover:text-orange-500 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-bold text-orange-500 mb-4">Support</h2>
            <ul className="space-y-2">
              {["FAQs", "Shipping Policy", "Return Policy"].map((item, index) => (
                <li
                  key={index}
                  className="text-sm hover:text-orange-500 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold text-orange-500 mb-4">
              Contact Us
            </h2>
            <ul className="space-y-2">
              <li className="text-sm">Email: odeyemiibrahim49@gmail.com</li>
              <li className="text-sm">Phone: +234 904 417 4371</li>
              <li className="flex space-x-3 text-orange-500 mt-2">
                <a 
                target="_blank"
                href="https://www.instagram.com/hirbrahim?igsh=cHcxeXByaHn2MzJ6" className="cursor-pointer hover:text-gray-800 transition duration-300">
                  Instagram
                </a>
                <a 
                target="_blank"
                href="https://www.facebook.com/share/15bmclAcu9/" className="cursor-pointer hover:text-gray-800 transition duration-300">
                  Facebook
                </a>
                <a className="cursor-pointer hover:text-gray-800 transition duration-300">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-8 text-gray-500">
          &copy; {new Date().getFullYear()} shp.com - All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
