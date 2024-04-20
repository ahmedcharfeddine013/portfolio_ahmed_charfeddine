import PageHeader from "@/components/PageHeader";
import React from "react";
import ProjectForm from "../_components/ProjectForm";
import db from "@/db/db";
import { Table } from "@/components/ui/table";


export default function AddProjectPage() {
  return (
    <div>
      <PageHeader>Add Project</PageHeader>
      <ProjectForm />
    </div>
  );
}


