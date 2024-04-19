import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import Image from "next/image";
import React from "react";

function getProducts() {
  return db.project.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}

export default function AdminPage() {
  return <div></div>;
}

function ProjectCard({
  name,
  githubLink,
  imagePath,
}: {
  name: string;
  githubLink: string;
  imagePath: string;
}) {
  return (
    <Card>
      <div>
        <Image src={imagePath} alt={name} height={300} width={300} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{githubLink}</CardDescription>
      </CardHeader>
    </Card>
  );
}
