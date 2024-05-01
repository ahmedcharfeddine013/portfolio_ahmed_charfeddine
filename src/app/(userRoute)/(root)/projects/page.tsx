import ProjectCard from "@/components/ProjectCard";
import db from "@/db/db";
import { Project } from "@prisma/client";
import React, { Suspense } from "react";
import PageHeader from "../../../../components/PageHeader";
import { projects } from "@/data/projects";

async function getProjects() {
  return db.project.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}

export default function ProjectsPage() {
  return (
    <div className="py-10 mx-10 lg:py-[8rem] flex flex-col items-center space-y-10">
      <PageHeader>Projects</PageHeader>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

