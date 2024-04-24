"use client";
import React, { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import Image from "next/image";
import hero_bg from "../../public/bg.jpg";
import { ScrollParallax } from "react-just-parallax";
import SocialMedia from "./SocialMedia";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [name, setName] = useState("");
  const fullName = "Ahmed Charfeddine";
  const typingSpeed = 150; // Adjust typing speed as needed
  const eraseSpeed = 50; // Adjust erasing speed as needed

  useEffect(() => {
    const typeWriter = () => {
      let i = 0;
      const type = () => {
        if (i < fullName.length) {
          setName((prevName) => prevName + fullName.charAt(i));
          i++;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(erase, 1000);
        }
      };

      const erase = () => {
        if (i >= 0) {
          setName((prevName) => prevName.slice(0, -1));
          i--;
          setTimeout(erase, eraseSpeed);
        } else {
          setTimeout(type, 1000);
        }
      };

      type();
    };

    typeWriter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" w-full h-[500px] z-10 flex flex-col items-center justify-center ">
      <ScrollParallax strength={0.1}>
        <div className="text-center flex items-center justify-center flex-col space-y-7 h-[500px] ">
          <h1 className="text-3xl">
            Hi, I am
            <TypeAnimation
              sequence={[
                " Ahmed Charfeddine",
                1000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-blue-400 font-bold"
              deletionSpeed={50}
              omitDeletionAnimation={true}
              speed={50}
            ></TypeAnimation>
          </h1>
          <p>
            A seasoned <span className="text-blue-400">Frontend Developer</span>{" "}
            transforming ideas into stunning digital experiences. Let&apos;s
            create something amazing!{" "}
          </p>
          <SocialMedia />
        </div>
      </ScrollParallax>
      <div className=" h-[500px] overflow-hidden  w-screen">
        <div className="absolute h-[500px]  overflow-hidden left-0 top-[0px] w-screen z-[-50]">
          <MouseParallax strength={0.05}>
            <Image
              src={hero_bg}
              className=" scale-125 opacity-50"
              fill
              alt="hero"
              objectFit="cover"
            ></Image>
          </MouseParallax>
          <div className="absolute bottom-0 bg-gradient-to-t from-background to-transparent h-24 w-full"></div>
        </div>
      </div>
    </div>
  );
}
