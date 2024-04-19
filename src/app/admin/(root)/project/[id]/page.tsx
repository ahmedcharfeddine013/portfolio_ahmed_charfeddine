import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import db from "@/db/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <div></div>;
}

async function ProjectCardFetcher(id: string) {
  const project = await db.project.findUnique({
    where: { id },
  });
  if (project == null) return notFound();
  return (
    <ProjectCard
      id={project.id}
      name={project.name}
      description={project.description}
      imagePath={project.imagePath}
      published={project.published}
      githubLink={project.githubLink}
    />
  );
}

type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  published: boolean;
  githubLink: string;
};

function ProjectCard({
  id,
  name,
  description,
  imagePath,
  published,
  githubLink,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription>{githubLink}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <Image src={imagePath} alt={name} height={500} width={500} />
        </div>
      </CardContent>
    </Card>
  );
}
