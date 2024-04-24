import React from "react";
import PageHeader from "./PageHeader";
import { Card, CardTitle } from "./ui/card";

export default function Technologies() {
  return (
    <div className="space-y-10">
      <PageHeader>Technologies</PageHeader>
      <TechnologiesCard />
    </div>
  );
}

function TechnologiesCard() {
  return (
    <Card className="border-2 border-blue-700/50 rounded p-4 space-y-6 ">
      <CardTitle>Experience with:</CardTitle>
      <ul className="">
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>React</li>
        <li>Next Js</li>
        <li>Framer-Motion</li>
        <li>Material UI</li>
        <li>ShadCn UI</li>
        <li>Chakra UI</li>
        <li>Node Js / Express Js</li>
        <li>MongoDB</li>
        <li>Prisma</li>
        <li>MySQL</li>
      </ul>
    </Card>
  );
}
