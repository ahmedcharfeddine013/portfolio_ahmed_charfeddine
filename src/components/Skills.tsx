import React from "react";
import { skills } from "../../constants";
import Image from "next/image";
import PageHeader from "./PageHeader";
export default function Skills() {
  return (
    <div className="flex items-center justify-center flex-col space-y-10 pt-[5rem]" id="skills">
      <PageHeader>Skills</PageHeader>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5">
        {skills.map((skill) => (
          <div
            key={skill.skill}
            className=" flex items-center justify-center rounded-full bg-white border-blue-400 h-[100px] w-[100px] border-2"
          >
            <Image src={skill.image} alt={skill.skill} height={50} width={50} />
          </div>
        ))}
      </div>
    </div>
  );
}
