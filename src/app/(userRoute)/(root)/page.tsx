import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Technologies from '../../../components/Technologies';

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pb-10">
      <div className="px-10">
        <Hero />
      </div>
      <div className="mx-auto px-10 space-y-10">
        <Technologies />
      </div>
    </main>
  );
}
