import Link from "next/link";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialMedia() {
  return (
    <section className="w-full flex flex-row space-x-6 justify-center items-center">
      <a href="https://github.com/ahmedcharfeddine013">
        <div className="border-2 p-3 rounded-full border-blue-400 hover:bg-white/80 hover:text-blue-400 transition-all duration-100 ease-in ">
          <Github />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/ahmed-charfeddine-677156245/">
        <div className="border-2 p-3 rounded-full border-blue-400 hover:bg-white/80 hover:text-blue-400 transition-all duration-100 ease-in ">
          <Linkedin />
        </div>
      </a>
      <a href="ahmedcharfeddine75@gmail.com">
        <div className="border-2 p-3 rounded-full border-blue-400 hover:bg-white/80 hover:text-blue-400 transition-all duration-100 ease-in ">
          <Mail />
        </div>
      </a>
    </section>
  );
}
