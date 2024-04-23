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

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      // console.log(newWidth);
      if (newWidth > 1024) {
        setHide(true);
      } else {
        setHide(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="flex flex-row space-x-4 fixed w-screen justify-center lg:justify-between items-center z-50 ">
      <div
        className={`absolute lg:relative flex flex-col w-84 space-y-8 lg:flex-row bg-blue-800/80  h-screen top-0 left-0  bg-opacity-20 lg:h-full lg:bg-transparent lg:space-y-0 lg:justify-between lg:w-full justify-center items-center text-center lg:items-center lg:py6 py-8 px-8  ease-in transition-transform duration-300  ${
          toggled ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        }`}
      >
        <ul className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 text-xl">
          <li className="relative ">
            <Link href={"#home"}>Home</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
          <li className="relative">
            <Link href={"#skills"}>Skills</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
          <li className="relative">
            <Link href={"#projects"}>Featured projects</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
          <li className="relative">
            <Link href={"#about-me"}>About me</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
          <li className="relative">
            <Link href={"#contact-me"}>Contact me</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300"></span>
          </li>
        </ul>
        <Button className="flex flex-row gap-4">
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
        style={{ display: toggled || hide  ? "none" : "flex" }}
      >
        <Menu />
      </Button>
    </nav>
  );
}
