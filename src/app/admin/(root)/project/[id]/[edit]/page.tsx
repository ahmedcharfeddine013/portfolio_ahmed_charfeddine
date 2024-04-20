import PageHeader from "@/components/PageHeader";
import db from "@/db/db";
import React from "react";
import ProjectForm from "../../_components/ProjectForm";

export default async function EditProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = await db.project.findUnique({
    where: { id },
  });
  return (
    <div>
      <PageHeader>Edit Project</PageHeader>
      <ProjectForm project={project} />
    </div>
  );
}
