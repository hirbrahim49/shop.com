"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Shop.com?",
      answer:
        "Shop.com is a comprehensive e-commerce platform that offers a diverse range of products, including fashion, electronics, home essentials, and more.",
    },
    {
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse our catalog, add your desired items to the cart, and proceed to checkout. Complete your payment securely, provide your delivery details, and expect your order to arrive within 2 business days.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support multiple secure payment methods, including credit/debit cards, PayPal, and bank transfers, ensuring a smooth and protected transaction process.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is processed, you will receive real-time updates via email or SMS. Additionally, you can reach out to our support team for instant assistance regarding your order status.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a hassle-free 14-day return policy on most products. Items must remain unused and in their original packaging. For detailed return instructions, please visit our Returns & Refunds page.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our support team is available 24/7 to assist you. Reach out to us via email at support@shop.com or call +234 904 417 4371 for prompt assistance.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-orange-500 py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 ${
              activeIndex === index
                ? "bg-white border-l-4 border-orange-500"
                : "bg-white hover:shadow-lg"
            }`}
          >
            <div
              className="p-6 flex justify-between items-center cursor-pointer group"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`text-lg font-semibold transition-colors duration-300 group-hover:text-orange-500 ${
                  activeIndex === index ? "text-orange-500" : "text-gray-800"
                }`}
              >
                {faq.question}
              </h3>
              <span
                className={`text-3xl transition-transform duration-300 ${
                  activeIndex === index
                    ? "text-orange-500 rotate-180"
                    : "text-gray-800 group-hover:text-orange-500"
                }`}
              >
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`transition-all duration-500 ${
                activeIndex === index
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-6 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
