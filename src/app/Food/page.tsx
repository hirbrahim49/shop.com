"use client";
import React from "react";
import { motion } from "framer-motion";
import { data } from "../../../data/products";
import { useCart } from "../Context/cartContext";
import { Product } from "../../../data/products";
const page = () => {

      const { addToCart } = useCart();
      // Add to cart handler function
      const handleAddToCart = (product: Product) => {
        addToCart(product); // Adds the selected product to the cart
      }; 

  const foodStuffProducts = data.find(
    (category) => category.category === "Food Stuff"
  )?.products;

  return (
    <div className="min-h-screen">
      <section className="text-center bg-white px-6">
        <motion.h1
          className="text-5xl font-serif font-bold text-orange-600 bg-white py-5 px-10 shadow-lg rounded-lg inline-block relative border-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Food Stuff
        </motion.h1>

        <motion.h2
          className="mt-4 text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fresh and quality food items for your daily needs.
        </motion.h2>

        <div className="mt-16 text-left mx-auto max-w-[95%]">
          <h1 className="text-4xl font-serif font-bold text-orange-800">
            Latest Food Items Available For Sale
          </h1>
          <div className="bg-orange-500 w-[60%] h-[2px] my-6"></div>
        </div>
      </section>

      <section className="py-8 px-4 w-[90%] mx-auto">
        <div className="flex flex-wrap justify-center gap-10">
          {foodStuffProducts &&
            foodStuffProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                style={{
                  width: "320px",
                  height: "480px",
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-orange-600 font-bold text-lg">
                      ₦{product.price.toFixed(2)}
                    </span>
                    <span className="text-yellow-500 text-sm">
                      ⭐ {product.rating}
                    </span>
                  </div>
                  <button 
                   onClick={() => handleAddToCart(product)} // Pass product to addToCart
                  className="bg-orange-600 text-white py-2 mt-4 w-full rounded-lg hover:bg-orange-500 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default page;
