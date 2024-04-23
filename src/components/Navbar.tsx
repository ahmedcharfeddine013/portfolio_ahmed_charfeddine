"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Briefcase } from "lucide-react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const [hide, setHide] = useState<boolean>();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth > 1024) {
        setHide(true);
      } else {
        setHide(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    window.addEventListener("scroll", handleScroll);
    // handleScroll(); // You can choose to omit this call if you want the initial state to be set based on user's scroll behavior.
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`flex flex-row space-x-4 fixed w-screen justify-center lg:justify-between items-center z-50 duration-100 transition-all ease-in ${scrolling && hide ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div
        className={`absolute lg:relative flex flex-col w-84 space-y-8 lg:flex-row h-screen top-0 left-0  bg-opacity-20 lg:h-full lg:bg-transparent lg:space-y-0 lg:justify-between lg:w-full justify-center items-center text-center lg:items-center lg:py6 py-8 px-8  ease-in transform transition-all duration-100  ${
          toggled ? "translate-x-0 bg-gray-900/80 backdrop-blur-md" : "translate-x-[-100%] lg:translate-x-0 bg-transparent"
        }`}
      >
        <ul className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 text-xl">
          <li className="relative ">
            <Link href="#">Home</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
          <li className="relative">
            <Link href="#skills">Skills</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
          <li className="relative">
            <Link href="#projects">Featured projects</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
          <li className="relative">
            <Link href="#about-me">About me</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
          <li className="relative">
            <Link href="#contact-me">Contact me</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
        </ul>
        <Button className="flex flex-row gap-4 text-blue-400">
          View Resume <Briefcase />{" "}
        </Button>
      </div>
      <Button
        onClick={() => setToggled(false)}
        className=" absolute top-8 right-8 lg:hidden cursor-pointer"
        style={{ display: toggled && !hide ? "flex" : "none" }}
      >
        <X />
      </Button>
      <Button
        className="absolute top-8 right-8 flex lg:hidden"
        onClick={() => setToggled(true)}
        style={{ display: toggled || hide ? "none" : "flex" }}
      >
        <Menu />
      </Button>
    </nav>
  );
}
