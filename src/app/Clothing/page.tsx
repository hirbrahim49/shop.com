"use client";
import React from "react";
import { motion } from "framer-motion";
import { data } from "../data/products";
import ProductCard from "../components/ProductCard"; // Adjust the import path

const Page = () => {
  const clothingProducts = data.find(
    (category) => category.category === "Clothing & Fashion"
  )?.products;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center bg-white px-6">
        <motion.h1
          className="text-5xl font-serif font-bold text-orange-600 bg-white py-5 px-10 shadow-lg rounded-lg inline-block relative border-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Clothing & Fashion
        </motion.h1>

        <motion.h2
          className="mt-4 text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover a blend of elegance and comfort. Explore a curated collection
          that fits your style and personality.
        </motion.h2>
      </section>

      {/* Product Section */}
      <section className="py-8 px-4 w-[90%] mx-auto">
        <div className="flex flex-wrap justify-center gap-10">
          {clothingProducts && clothingProducts.length > 0 ? (
            clothingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No clothing products available right now. Check back later!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Page;