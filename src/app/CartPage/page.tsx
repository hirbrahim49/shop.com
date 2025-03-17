"use client";
import React, { useState } from "react";
import { useCart } from "../Context/cartContext"; // Import the cart context
import { motion } from "framer-motion"; // Optional animation
import { useRouter } from "next/navigation"; // For navigation

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleCheckout = () => {
    const totalAmount = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    router.push(`/checkout?amount=${totalAmount}`);
  };
  

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <section className="text-center px-6">
        <motion.h1
          className="text-5xl font-serif font-bold text-orange-600 bg-white py-5 px-10 shadow-lg rounded-lg inline-block relative border-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Your Cart
        </motion.h1>
      </section>

      {successMessage && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          <p>{successMessage}</p>
        </div>
      )}

      <section className="py-8 px-4 w-[90%] mx-auto">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="mt-4">Add some products to your cart to get started!</p>
          </div>
        ) : (
          <div>
            <div className="flex flex-col gap-8">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between border-b pb-4">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover" />
                  <div className="flex-grow ml-4">
                    <h3 className="text-lg font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">{item.product.description}</p>
                    <span className="text-sm text-gray-800">Price: ₦{item.product.price}</span>
                    <div className="mt-2">
                      <span className="text-sm text-gray-600">Quantity: {item.quantity}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-10 flex justify-between items-center">
              <button
                onClick={clearCart}
                className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition duration-300"
              >
                Clear Cart
              </button>

              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-800">Total:</h3>
                <span className="text-3xl font-bold text-orange-600">
                  ₦{cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="mt-6 text-center">
              <button
                onClick={handleCheckout}
                className="bg-orange-600 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-orange-500 transition duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CartPage;
