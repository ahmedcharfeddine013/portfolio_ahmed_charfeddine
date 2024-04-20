import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DeleteDropdownItem,
  PublishedToggleDropdownItem,
} from "../_components/ProjectActions";

function getProducts() {
  return db.project.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}

export default function AdminPage() {
  return <div></div>;
}

// function ProjectCard({
//   name,
//   githubLink,
//   imagePath,
// }: {
//   name: string;
//   githubLink: string;
//   imagePath: string;
// }) {
//   return (
//     <Card>
//       <div>
//         <Image src={imagePath} alt={name} height={300} width={300} />
//       </div>
//       <CardHeader>
//         <CardTitle>{name}</CardTitle>
//         <CardDescription>{githubLink}</CardDescription>
//       </CardHeader>
//     </Card>
//   );
// }

async function ProjectsTable() {
  const projects = await db.project.findMany({
    select: {
      id: true,
      name: true,
      published: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <span className="sr-only">Published</span>
          </TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>
              {project.published ? (
                <>
                  <span className="sr-only">Published</span>
                  <CheckCircle2 />
                </>
              ) : (
                <>
                  <span className="sr-only">Not Published</span>
                  <XCircle className="text-red-500" />
                </>
              )}
            </TableCell>
            <TableCell>{project.name}</TableCell>
            <TableCell>
              <DropdownMenu>
                <PublishedToggleDropdownItem
                  id={project.id}
                  published={project.published}
                />
                <DeleteDropdownItem
                  id={project.id}
                  disabled={project.published === true}
                />
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
