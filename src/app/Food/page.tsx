"use client";
import React from "react";
import { motion } from "framer-motion";
import { data } from "../data/products";
import ProductCard from "../components/ProductCard";// Adjust the import path

const Page = () => {
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
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Page;