"use client";
import React from "react";
import { MouseParallax } from "react-just-parallax";
import Image from "next/image";
import hero_bg from "../../public/bg.jpg";

export default function Hero() {
  return (
    <div className=" max-w-full w-full h-[500px] flex flex-col  items-center justify-center ">
      <div className="text-center flex items-center justify-center flex-col space-y-4 z-50">
        <h1 className="text-3xl ">
          Hi, I am <span className="text-blue-400">Ahmed Charfeddine</span>
        </h1>
        <p>
          A seasoned <span className="text-blue-400">Frontend Developer</span>{" "}
          transforming ideas into stunning digital experiences. Let&apos;s
          create something amazing!{" "}
        </p>
      </div>
      <div className=" h-[500px] overflow-hidden  w-screen">
        <div className="absolute h-[500px]  overflow-hidden left-0 top-[0px] w-screen text-violet-700 z-[-50]">
          <MouseParallax strength={0.05}>
            <Image
              src={hero_bg}
              className="w-full scale-110"
              alt="hero"
              height={2000}
            ></Image>
          </MouseParallax>
        </div>
      </div>
    </div>
  );
}
