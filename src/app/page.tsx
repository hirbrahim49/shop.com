"use client"
import React from "react";
import HeroSlider from "./components/HeroSlider";
import SecondHero from "./components/SecondHero";
import ThirdHero from "./components/ThirdHero";
import Footer from "./components/HeroFooter";
import { RecoilRoot } from "recoil";
export default function HomePage() {

  return (
   <RecoilRoot>
    <div className="flex flex-col gap-[70px]">
      <section><HeroSlider/></section>
      <section><SecondHero/></section>
      <section><ThirdHero/></section>
      <section><Footer/></section>

    </div>
   </RecoilRoot>
  );
}