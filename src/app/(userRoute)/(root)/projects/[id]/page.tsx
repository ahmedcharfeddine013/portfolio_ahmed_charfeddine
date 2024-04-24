import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

export default async function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = await db.project.findUnique({
    where: { published: true, id },
  });

  if (project == null) return notFound();

  return (
    <div className="py-10 lg:py-[8rem] mx-10  ">
      <div className="flex flex-col items-center justify-center gap-10">
        {/* left side  */}
        <div className="overflow-hidden relative border-2 rounded-sm border-purple-700 ">
          <Image
            src={project.imagePath}
            alt={project.name}
            objectFit="cover"
            className="h-fit "
            height={800}
            width={800}
          />
          <div className="absolute bottom-0 bg-gradient-to-t from-background to-transparent h-36 w-full"></div>
        </div>

        {/* right side  */}
        <div>
          <Card className="w-[300px] md:w-full flex flex-wrap flex-col border-2 border-purple-700 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-blue-400"> {project.name}</CardTitle>
              <CardContent className="px-0 ">
                <a
                  href={project.githubLink}
                  className="flex flex-row items-center gap-5 relative w-fit"
                >
                  {project.githubLink.slice(0, 30)}... <SquareArrowOutUpRight />{" "}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300"></span>
                </a>
              </CardContent>
              <CardDescription> {project.description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Button asChild>
          <Link href={"/projects"}> <ArrowBigLeft /> Back To Projects</Link>
        </Button>
      </div>
    </div>
  );
}
