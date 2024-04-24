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
    <div className="py-10 lg:py-[8rem] mx-10 ">
      <div className="grid grid-cols-2 place-items-center gap-20 ">
        {/* left side  */}
        <div className="w-[500] overflow-hidden h-[400] ">
          <Image
            src={project.imagePath}
            alt={project.name}
            objectFit="cover"
            width={400}
            height={400}
          />
        </div>

        {/* right side  */}
        <div>
          <Card className="w-full flex flex-col border-2 border-purple-700">
            <CardHeader>
              <CardTitle className="text-blue-400"> {project.name}</CardTitle>
              <CardContent>
                <a
                  href={project.githubLink}
                  className="flex flex-row items-center gap-5 relative w-fit"
                >
                  {project.githubLink} <SquareArrowOutUpRight />{" "}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300"></span>
                </a>
              </CardContent>
              <CardDescription> {project.description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
