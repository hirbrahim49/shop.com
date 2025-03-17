"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PaystackCheckout from "../components/PaystackCheckout";

const Checkout: React.FC = () => {
  const searchParams = useSearchParams();
  const amountFromQuery = searchParams.get("amount");

  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [deliveryAddress, setDeliveryAddress] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  useEffect(() => {
    if (amountFromQuery) {
      setAmount(parseFloat(amountFromQuery)); // Convert string to number
    }
  }, [amountFromQuery]);

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
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      {/* Email Input */}
      <label className="block mb-2">Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className={`w-full p-2 border rounded-md mb-2 ${
          emailError ? "border-red-500" : "border-gray-300"
        }`}
        required
      />
      {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

      {/* Phone Number Input */}
      <label className="block mb-2">Phone Number:</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      {/* Delivery Address Input */}
      <label className="block mb-2">Delivery Address:</label>
      <input
        type="text"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      {/* Total Amount */}
      <h3 className="text-lg font-semibold">Total: ₦{amount.toFixed(2)}</h3>

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
