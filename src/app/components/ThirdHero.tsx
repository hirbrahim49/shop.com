"use client";
import React from "react";
import { MdOutlineStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { heroProducts } from "../Data/HeroData";

const ThirdHero = () => {
  return (
    <div className="py-10">
      <section className="flex flex-col gap-[10px]">
        <h1 className="font-bold text-[22px] font-sans text-center pb-4 text-gray-800">
          <span className="border-b-2 border-dotted border-orange-400 px-2">
            PRODUCTS
          </span>
        </h1>
        <h1 className="font-extrabold text-[30px] font-sans text-center text-gray-900 relative">
          Our Latest Product
          <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-yellow-500 animate-underline" />
        </h1>
      </section>
      <section className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-[80%] max-w-[1200px] justify-center items-center">
          {heroProducts.map((product) => (
            <div
              key={product.id}
              className="w-[305px] h-[400px] border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col"
            >
              <div className="h-[70%] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col justify-between h-[30%] p-4">
                <h1 className="font-semibold text-lg text-gray-800 mb-1 text-left">
                  {product.name}
                </h1>
                <h2 className="text-sm text-gray-500 mb-2 text-left">
                  Color: {product.color}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md shadow">
                    ₦{product.price.toLocaleString()}
                  </div>
                  <div className="flex text-orange-500 space-x-1">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => {
                        if (product.ratings >= index + 1) {
                          return <MdOutlineStar key={index} />;
                        } else if (
                          product.ratings > index &&
                          product.ratings < index + 1
                        ) {
                          return <MdStarHalf key={index} />;
                        } else {
                          return <MdStarBorder key={index} />;
                        }
                      })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ThirdHero;
