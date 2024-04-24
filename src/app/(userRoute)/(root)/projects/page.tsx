import ProjectCard from "@/components/ProjectCard";
import db from "@/db/db";
import { Project } from "@prisma/client";
import React from "react";
import PageHeader from "../../../../components/PageHeader";

async function getProjects() {
  return db.project.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader>Projects</PageHeader>
      <ProjectsFetcher projectFetcher={getProjects} />
    </div>
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
