"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ClearForm: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const myApi = 'https://script.google.com/macros/s/AKfycbzitlE0NG-qX6HvCx7PKWP1Vsd8_BIEtVl59U4NZme6v5IUOuVHnxFuOqaoicWztHSe_Q/exec';

    try {
      const response = await fetch(myApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        const result = await response.text();
        setSuccessMessage(result || 'Your message has been successfully sent!');
        setFormData({ Name: '', Email: '', Message: '' }); // Clear the form
      } else {
        setErrorMessage('Information was successfully received. We will get back to you soon!');
      }
    } catch (error) {
      setErrorMessage('Information was successfully received. We will get back to you soon!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-[60vh] text-white flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10 text-center px-[20px]">
          <h1 className="text-5xl font-bold text-orange-500">Welcome to Shop.com</h1>
          <p className="mt-4 text-lg max-w-[800px] mx-auto">
            Your one-stop shop for quality products at amazing prices. Reach out to us for inquiries or support!
          </p>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        className="py-[60px] text-center bg-orange-500 text-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2 className="text-4xl font-semibold mb-6">Contact Information</h2>
        <p className="text-lg max-w-[700px] mx-auto mb-8">
          We're here to assist with any questions or concerns you may have about your shopping experience.
        </p>

        <div className="flex flex-wrap justify-center gap-[40px]">
          {[
            {
              Icon: FaPhone,
              title: 'Call Us',
              description: 'Speak directly with our support team for assistance.',
              link: 'tel:+2349044174371',
              linkText: '+2349044174371',
            },
            {
              Icon: FaEnvelope,
              title: 'Email Us',
              description: "Drop us an email and we'll get back to you shortly.",
              link: 'mailto:odeyemiibrahim49@gmail.com',
              linkText: 'odeyemiibrahim49@gmail.com',
            },
            {
              Icon: FaWhatsapp,
              title: 'WhatsApp Us',
              description: 'Chat with us on WhatsApp for quick responses.',
              link: 'https://wa.me/2349044174371',
              linkText: 'Chat on WhatsApp',
            },
          ].map(({ Icon, title, description, link, linkText }, index) => (
            <motion.div
              key={index}
              className="w-[280px] bg-white p-[30px] rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
              variants={fadeIn}
            >
              <Icon className="text-5xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="mt-4 text-gray-700">{description}</p>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 text-orange-500 hover:underline">
                  {linkText}
                </a>
              ) : (
                <p className="mt-4 text-orange-500">{linkText}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        id="quote-form"
        className="py-[60px] bg-white text-black"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-orange-500">Send Us a Message</h2>
          <p className="text-lg mt-4 max-w-[700px] mx-auto">
            Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[900px] mx-auto bg-white p-[30px] rounded-lg shadow-lg"
        >
          <div className="flex gap-4 mb-6">
            <div className="w-full">
              <label htmlFor="name" className="block text-lg text-gray-600">Full Name</label>
              <input
                type="text"
                id="name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-[15px] mt-2 bg-gray-100 text-black border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-lg text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-[15px] mt-2 bg-gray-100 text-black border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg text-gray-600">Message</label>
            <textarea
              id="message"
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              rows={6}
              placeholder="Your message here"
              required
              className="w-full p-[15px] mt-2 bg-gray-100 text-black border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>

          {successMessage && (
            <p className="text-green-500 text-center mb-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-green-500 text-center mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-[15px] bg-orange-500 text-white text-xl font-bold rounded-md hover:bg-orange-400 transform transition duration-300 hover:scale-105"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default ClearForm;
