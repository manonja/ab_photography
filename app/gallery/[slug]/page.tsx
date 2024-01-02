  import React from 'react';
import { Project } from "@prisma/client";
import { getProjects } from "../../../lib/prisma";

export async function generateStaticParams() {
    return getProjects.map((project: Project) => ({
      slug: project.title.toLowerCase().replace(/\s/g, ""),
      title: project.title,
      description: project.description,
    }))
  }


// TODO: test and remove
const PageComponent = () => {
return (
    <div>
    <h1>Hello, World!</h1>
    <p>This is a standard React page component.</p>
    </div>
);
}

export default PageComponent;