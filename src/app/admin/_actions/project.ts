import { z } from "zod";
import fs from "fs/promises";
import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  githubLink: z.string().min(1),
  image: imageSchema.refine((image) => image.size > 0, "Required"),
});

export async function addProject(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success == false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  await fs.mkdir("public/projects", { recursive: true });
  const imagePath = `/projects/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  await db.project.create({
    data: {
      name: data.name,
      descripion: data.description,
      githubLink: data.githubLink,
      imagePath,
    },
  });

  revalidatePath("/");
  revalidatePath("/projects");

  redirect("/admin");
}

const editSchema = addSchema.extend({
  image: imageSchema.optional(),
});
