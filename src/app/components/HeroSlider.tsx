"use client";
import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { HeroDataBase } from "../Data/HeroData";
import Link from "next/link";

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <motion.div
      className="w-full max-w-[1440px] mx-auto overflow-hidden px-4"
      initial="hidden"
      animate="visible"
    >
      <Slider {...settings}>
        {HeroDataBase.map((item) => (
          <div
            key={item.id}
            className="relative h-[400px] md:h-[600px] lg:h-[600px] flex justify-center items-center overflow-hidden"
          >
            {/* Image Background */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.h1}
                layout="fill"
                objectFit="cover"
                quality={90}
                className="z-0 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60" />
            </div>

            {/* Centered Content */}
            <motion.div
              className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center md:w-[80%] md:items-start  md:mb- text-white px-6"
              variants={slideVariants}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                {item.h1}
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 max-w-[800px] font-light leading-relaxed drop-shadow-sm">
                Discover the latest trends and collections. Style that fits your personality!
              </p>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="/Clothing"
                  className="px-8 py-3 text-sm md:text-base bg-orange-500 hover:bg-orange-700 text-white font-semibold rounded-md shadow-lg transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Now
                </motion.a>
                <motion.a
                target="_blank"
                href="https://wa.me/2349044174371"
                  className="px-8 py-3 text-sm md:text-base bg-white hover:bg-gray-100 text-black font-semibold rounded-md shadow-lg transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}

export default Slide;
