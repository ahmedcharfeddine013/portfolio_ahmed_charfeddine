import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Suspense } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type ProjectCardProps = {
  id: number;
  name: string;
  description: string;
  imagePath: StaticImageData;
  
};

export default function ProjectCard({
  id,
  name,
  imagePath,
  description,
}: ProjectCardProps) {
  return (
    <Card className=" relative h-[400px] w-[300px] overflow-hidden ">
      <Link href={`/projects/${id}`} className="flex flex-col items-center justify-center">
        <div>
          <Image
            src={imagePath}
            alt="name"
            objectFit="cover"
            fill
            className="hover:scale-110 duration-100 ease-in transition-all"
          />
        </div>
        <CardHeader className="absolute bottom-0 items-center flex justify-center text-center bg-gray-900/80 backdrop-blur-md w-full rounded-t-lg">
          <CardTitle className="text-blue-500">{name}</CardTitle>
          <CardDescription className="text-white">{description.slice(0, 80)}...</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse h-[400px] w-[300px]">
      <div className="w-full aspect-video bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  );
}
