import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 ">
      <Hero />
      <div className="w-[90%] mx-auto space-y-10">
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
