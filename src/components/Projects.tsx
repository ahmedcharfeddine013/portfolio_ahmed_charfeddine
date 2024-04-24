// "use  client";
import db from "@/db/db";
import { Project } from "@prisma/client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import PageHeader from "./PageHeader";

async function getProjects() {
  return db.project.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col space-y-8 pt-10 lg:pt-20"
    >
      <PageHeader>Projects</PageHeader>
      <div className="flex flex-wrap items-center justify-center">
        {/* <ProjectsFetcher projectFetcher={getProjects} /> */}
      </div>
    </section>
  );
}






