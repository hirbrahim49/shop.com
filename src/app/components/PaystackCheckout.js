"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PaystackCheckout = ({ email, amount, phoneNumber, deliveryAddress, isDisabled }) => {
  const publicKey = "pk_live_f99a4060a01d3d525e695ec18c5c5780435e0e23";
  const [paystackLoaded, setPaystackLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setPaystackLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (typeof window === 'undefined' || !paystackLoaded || !window.PaystackPop) {
      alert("Paystack is still loading, please try again...");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100,
      currency: "NGN",
      metadata: {
        custom_fields: [
          { display_name: "Phone Number", variable_name: "phone_number", value: phoneNumber },
          { display_name: "Delivery Address", variable_name: "delivery_address", value: deliveryAddress },
        ],
      },
      callback: function (response) {
        alert(`Payment Successful! Transaction Ref: ${response.reference}`);
      },
      onClose: function () {
        alert("Payment Cancelled");
      },
    });
    handler.openIframe();
  };

  return (
    <button
      onClick={handlePayment}
      className={`bg-blue-500 px-4 py-2 text-white rounded-md ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      }`}
      disabled={isDisabled || !paystackLoaded}
    >
      {paystackLoaded ? "Pay Now" : "Loading..."}
    </button>
  );
};

PaystackCheckout.propTypes = {
  email: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string,
  deliveryAddress: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default PaystackCheckout;
