import React from "react";
import PageHeader from "../../../../components/PageHeader";
import Image from "next/image";
import logo from '../../../../../public/Logo.png'

export default function AboutMePage() {
  return (
    <div className="py-10 lg:py-[8rem] mx-10 flex flex-col items-center justify-center space-y-10">
      <PageHeader>About Me</PageHeader>
      <div className=" flex flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-2 w-full h-full lg:items-start  lg:place-items-center">
        {/* Left Side  */}
        <div className="flex items-start justify-center flex-col space-y-4">
          <h1 className="text-2xl font-bold">Want to know more about me?</h1>
          <div>
            <p>
              I am 20 years old <span>Computer science </span> student
            </p>
          </div>
        </div>

        {/* Right side  */}
        <div>
          <Image src={logo} width={300} height={300} alt="Ac" />
        </div>
      </div>
    </div>
  );
}
