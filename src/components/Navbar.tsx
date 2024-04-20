"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Briefcase } from "lucide-react";



export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("home");
  return (
    <nav className="flex flex-row space-x-4 w-full justify-between items-center py-6 px-8">
      <ul className="flex flex-row space-x-5 text-xl">
        <li>
          <Link href={"#home"}>Home</Link>
        </li>
        <li>
          <Link href={"#skills"}>Skills</Link>
        </li>

        <li>
          <Link href={"#projects"}>Featured projects</Link>
        </li>
        <li>
          <Link href={"#about-me"}>About me</Link>
        </li>
        <li>
          <Link href={"#contact-me"}>Contact me</Link>
        </li>
      </ul>
      <Button className="flex flex-row gap-4" >View Resume <Briefcase />  </Button>
    </nav>
  );
}
