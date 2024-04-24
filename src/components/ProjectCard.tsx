import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

type ProjectCardProps = {
    name: string;
    description: string;
    imagePath: string;
  };
  
  export default function ProjectCard({ name, imagePath, description }: ProjectCardProps) {
    return (
      <Card className="flex flex-col items-center justify-center relative h-[400px] w-[300px] overflow-hidden ">
        <div>
          <Image src={imagePath} alt="name" objectFit="cover" fill />
        </div>
  
        <CardHeader className="absolute bottom-0 items-center flex justify-center text-center bg-gray-900/80 backdrop-blur-md w-full rounded-t-lg">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description.slice(0, 80)}...</CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
