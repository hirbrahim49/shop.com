'use client'; // Ensure this is a client-side component

import React, { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useCart } from "../Context/cartContext";
import { FaWhatsapp } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownLinks = [
    { name: "Clothing", path: "/Clothing" },
    { name: "Electronics & Appliances", path: "/Electronics" },
    { name: "Health & Beauty", path: "/Health" },
    { name: "Food Stuff", path: "/Food" },
    { name: "Books & Stationery", path: "/Books" },
  ];
  const { cart } = useCart();

  // Calculate total number of items in the cart based on quantity
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          <Link href="#">Shop.com</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-600">
          <li className="hover:text-gray-800 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-gray-800 transition"
            >
              Shop
              <span className="ml-2 text-sm">&#x25BC;</span>
            </button>
            {/* Dropdown */}
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-10 left-0 bg-white shadow-lg rounded-lg py-2 w-48"
              >
                {dropdownLinks.map(({ name, path }) => (
                  <li
                    key={name}
                    className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer"
                  >
                    <Link href={path}>{name}</Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
          <li className="hover:text-gray-800 transition">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:text-gray-800 transition">
            <Link href="/Contact">Contact</Link>
          </li>
          <li className="hover:text-gray-800 transition">
            <Link href="/FAQs">FAQs</Link>
          </li>
        </ul>

        {/* Cart & Contact Icon */}
        <div className="flex items-center space-x-4">
          <Link
          target="_blank"
           href="https://wa.me/2349044174371">
          <FaWhatsapp 
            className="text-2xl text-gray-800 cursor-pointer hover:text-gray-600"
            title="Contact Us"
          />
          </Link>
          <Link href="/CartPage" className="relative flex items-center">
            <FaShoppingCart className="text-2xl text-gray-800 cursor-pointer hover:text-gray-600" />
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs rounded-full px-2 py-1">
              {totalItems}
            </span>
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {!isMenuOpen ? (
                <HiMenuAlt3
                  className="text-3xl text-gray-800 cursor-pointer"
                  onClick={() => setIsMenuOpen(true)}
                />
              ) : (
                <HiX
                  className="text-3xl text-gray-800 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 md:hidden"
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              className="text-2xl text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <HiX />
            </button>
          </div>
          <ul className="flex flex-col space-y-6 p-6 font-medium text-gray-800">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex justify-between items-center w-full"
              >
                Shop
                <span className="text-sm">&#x25BC;</span>
              </button>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="ml-4 mt-2 space-y-2"
                >
                  {dropdownLinks.map(({ name, path }) => (
                    <li key={name} className="pl-4 hover:text-gray-600">
                      <Link href={path} onClick={() => setIsMenuOpen(false)}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
            <li>
              <Link href="/About" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/FAQs" onClick={() => setIsMenuOpen(false)}>
                FAQs
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
