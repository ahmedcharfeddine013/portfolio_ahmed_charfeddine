import React from "react";
import PageHeader from "../../../../components/PageHeader";
import Image from "next/image";
import logo from "../../../../../public/Logo.png";

export default function AboutMePage() {
  return (
    <div className="py-10 lg:py-[8rem] mx-10 flex flex-col items-center justify-center space-y-10">
      <PageHeader>About Me</PageHeader>
      <div className=" flex flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-2 w-full h-full lg:items-center  lg:place-items-center">
        {/* Left Side  */}
        <div className="flex items-start justify-center flex-col space-y-4">
          <h1 className="text-2xl font-bold">Want to know more about me?</h1>
          <div>
            {/* <p>
              I am 20 years old <span>Computer science </span> student. <br />I
              have just completed my <span>Baccalaureat in Mathematics</span> in
              2023. <br />I came from a <span>Designer</span> and{" "}
              <span>Editor</span> background and that&apos;s one thing that
              motivated me to get into <span>Frontend Development</span>
            </p> */}
            <p>
              👋 I&apos;m [Ahmed Charfeddine], a budding talent in the world of
              technology, specializing in <span>Frontend Development</span>. 🎓
              Armed with a solid foundation in Mathematics from my recent{" "}
              <span>Baccalaureat</span>, I&apos;ve embarked on an exciting
              journey into the realm of <span>Computer Science</span>. ✨
              Drawing inspiration from my background in <span>Design</span> and{" "}
              <span>Editing</span>, I&apos;m passionate about bringing
              creativity and innovation to the digital landscape. 🌟 While I may
              be new to the frontend scene, my enthusiasm and dedication make me
              a quick learner and a natural problem-solver. 🚀 I&apos;m on a
              mission to hone my skills and make a mark in the industry, and
              I&apos;m eager to collaborate on projects big and small.
              Let&apos;s turn visions into reality together!
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
