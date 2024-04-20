'use client'

import { addProject, updateProject } from "@/app/admin/_actions/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Project } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function ProjectForm({ project }: { project?: Project | null }) {
  const [error, action] = useFormState(
    project == null ? addProject : updateProject.bind(null, project.id),
    {}
  );

  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={project?.name || ""}
        />
        {error.name && <div className="text-red-500">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="githubLink">Github</Label>
        <Input
          type="text"
          id="githubLink"
          name="githubLink"
          required
          defaultValue={project?.githubLink || ""}
        />
        {error.githubLink && (
          <div className="text-red-500">{error.githubLink}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Description</Label>
        <Input
          type="text"
          id="description"
          name="description"
          required
          defaultValue={project?.description}
        />
        {error.description && (
          <div className="text-red-500">{error.description}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required={project == null} />
        {project != null && (
          <Image
            src={project.imagePath}
            height="400"
            width="400"
            alt="Product Image"
          />
        )}
        {error.image && <div className="text-destructive">{error.image}</div>}
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
