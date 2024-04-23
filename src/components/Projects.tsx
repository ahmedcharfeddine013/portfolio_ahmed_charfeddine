// "use  client";
import db from "@/db/db";
import { Project } from "@prisma/client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

async function getProjects() {
  return db.project.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}

export default function Projects() {
  return (
    <section id="projects">
      <ProjectsFetcher projectFetcher={getProjects} />
    </section>
  );
}

async function ProjectsFetcher({
  projectFetcher,
}: {
  projectFetcher: () => Promise<Project[]>;
}) {
  return (await projectFetcher()).map((project) => (
    <ProjectCard key={project.id} {...project} />
  ));
}

type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  imagePath: string;
};

function ProjectCard({ id, name, imagePath, description }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
            <Image src={imagePath} alt="name" height={200} width={200} />
        </div>
      </CardContent>
    </Card>
  );
}
