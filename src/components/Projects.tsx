// "use  client";
import db from "@/db/db";
import { Project } from "@prisma/client";
import React, { useState } from "react";
import Card from "react-animated-3d-card";

async function getProjects() {
    return db.project.findMany({
        where: {published : true},
        orderBy :{createdAt : 'desc'}
    })
}

export default function Projects() {
  return <section id="projects"></section>;
}

async function ProjectsFetcher({
  projectFetcher,
}: {
  projectFetcher: () => Promise<Project[]>;
}) {
    return (await projectFetcher()).map(project => (
        <ProjectCard key={project.id} {...project} />
    ))
}

function ProjectCard() {
  const [showFront, setShowFront] = useState("Max Verstappen");
  return (
    <div
      className="App"
      style={{
        padding: "200px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        background: "linear-gradient(to right, black, #24243e)",
        height: "100vh",
      }}
    >
      <Card
        cursorPointer={false}
        shineStrength={0.75}
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          width: "300px",
          height: "400px",
          cursor: "pointer",
        }}
        onClick={() => setShowFront("Lewis Hamilton")}
      >
        <p>test</p>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontFamily: "Fira Code",
              color: "white",
            }}
            onClick={console.log("prova")}
          >
            <label>1234</label>
          </div>
        </div>
        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "25px",
              opacity: 0.5,
            }}
          >
            Card holder
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              right: "25px",
              opacity: 0.5,
            }}
          >
            Expires
          </label>
        </div>

        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              left: "25px",
              opacity: 1,
              fontSize: "25px",
            }}
          >
            {showFront}
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              right: "25px",
              opacity: 1,
              fontSize: "25px",
            }}
          >
            10/22
          </label>
        </div>
      </Card>
    </div>
  );
}
