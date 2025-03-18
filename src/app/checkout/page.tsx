'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PaystackCheckout from "../components/PaystackCheckout";

const Checkout: React.FC = () => {
  const searchParams = useSearchParams();

  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [deliveryAddress, setDeliveryAddress] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  useEffect(() => {
    const amountFromQuery = searchParams.get("amount");
    if (amountFromQuery) {
      setAmount(parseFloat(amountFromQuery));
    }
  }, [searchParams]);

  const validateEmail = (email: string): boolean => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setEmailError(validateEmail(inputEmail) ? "" : "Please enter a valid Gmail address.");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Checkout</h2>

      {/* Email Input */}
      <label className="block mb-2 text-gray-700 font-medium">Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className={`w-full p-3 border rounded-md mb-2 focus:outline-none ${
          emailError ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="Enter your Gmail address"
        required
      />
      {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}

      {/* Phone Number Input */}
      <label className="block mb-2 text-gray-700 font-medium">Phone Number:</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
        placeholder="Enter your phone number"
        required
      />

      {/* Delivery Address Input */}
      <label className="block mb-2 text-gray-700 font-medium">Delivery Address:</label>
      <input
        type="text"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none"
        placeholder="Enter delivery address"
        required
      />

      {/* Total Amount */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Total:</h3>
        <span className="text-2xl font-bold text-orange-600">₦{amount.toFixed(2)}</span>
      </div>

      {/* Paystack Checkout Button */}
      <PaystackCheckout
        email={email}
        amount={amount}
        deliveryAddress={deliveryAddress}
        phoneNumber={phoneNumber}
        isDisabled={!!emailError || email === "" || phoneNumber === ""}
      />
    </div>
  );
};

export default Checkout;
