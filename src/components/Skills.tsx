import React from "react";
import { skills } from "../../constants";
import Image from "next/image";
export default function Skills() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center space-x-5">
      {skills.map((skill) => (
        <div
          key={skill.skill}
          className=" flex items-center justify-center rounded-full bg-white border-blue-400 h-[100px] w-[100px] border-2"
        >
          <Image src={skill.image} alt={skill.skill} height={50} width={50} />
        </div>
      ))}
    </div>
  );
}
