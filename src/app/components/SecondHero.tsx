"use client";
import React from "react";
import { HeroCategory } from "../Database/HeroData";
import { MdOutlineStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import Link from "next/link";

const SecondHero = () => {
  return (
    <div className="py-10">
      <section className="flex flex-col gap-[10px]">
        <h1 className="font-bold text-[22px] font-sans text-center pb-4 text-gray-800">
          <span className="border-b-2 border-dotted border-orange-500 px-2">
            COLLECTION
          </span>
        </h1>
        <h1 className="font-extrabold text-[30px] font-sans text-center text-gray-900 relative">
          Our Top Collection
          <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-yellow-500 animate-underline" />
        </h1>
      </section>
      <section className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-8 px-4 mx-auto">
          {HeroCategory.map((category) => (
            <div
              key={category.id}
              className="w-[300px] h-[350px] border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col"
            >
              <div className="h-[70%] w-full">
                <img
                  src={category.image}
                  alt={category.h1}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col justify-between h-[30%] p-4">
                <h1 className="font-semibold text-lg text-gray-800 mb-2 text-left">
                  {category.h1}
                </h1>
                <div className="flex justify-between items-center">
                  <Link
                    href="/Clothing"
                    className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md shadow hover:bg-orange-600 hover:shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Shop Now
                  </Link>
                  <div className="flex text-orange-500 space-x-1">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => {
                        if (category.rating >= index + 1) {
                          return <MdOutlineStar key={index} />;
                        } else if (
                          category.rating > index &&
                          category.rating < index + 1
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

export default SecondHero;
