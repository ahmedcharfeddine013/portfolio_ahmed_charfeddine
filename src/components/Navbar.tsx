"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Briefcase } from "lucide-react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("home");
  return (
    <nav className="flex flex-row space-x-4 w-full justify-between items-center py-6 px-8">
      <ul className="flex flex-row space-x-8 text-xl">
        <li className="relative">
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
    </nav>
  );
}
