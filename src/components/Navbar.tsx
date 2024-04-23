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
    <nav className="flex flex-row space-x-4 fixed px-10 w-full justify-center lg:justify-between items-center z-50 ">
      <div
        className={`relative lg:flex flex-col space-y-8 lg:flex-row  top-0 right-0  h-full bg-opacity-20 lg:space-y-0 lg:justify-between w-full  items-center text-center lg:items-center lg:py6 py-8 px-8  transition-opacity duration-100  ${
          toggled ? "flex" : " hidden"
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
        style={{ display: toggled ? "flex" : "none" }}
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

// export function Nav() {
//   return (
//     <nav className="border-gray-200 flex flex-row bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//       <div></div>
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <button
//           data-collapse-toggle="navbar-solid-bg"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-solid-bg"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
//           <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <div>
//             <Button className="flex flex-row gap-4">
//               View Resume <Briefcase />{" "}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
