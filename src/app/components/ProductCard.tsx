"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "../data/products";
import { useCart } from "../Context/cartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    setIsAnimating(true);
    addToCart(product);

    // Reset animation after a short delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Adjust the delay to match the animation duration
  };

  return (
    <motion.div
      key={product.id}
      className="group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
      style={{
        width: "320px",
        height: "480px",
      }}
      animate={isAnimating ? { scale: 0.9, opacity: 0.5 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
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
          onClick={handleAddToCart}
          className="bg-orange-600 text-white py-2 mt-4 w-full rounded-lg hover:bg-orange-500 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;