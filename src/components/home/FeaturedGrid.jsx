import projects from "../../data/projects";

import ProjectPreviewCard from "./ProjectPreviewCard";

import Reveal from "../ui/Reveal";


export default function FeaturedGrid() {


  const featuredProjects = projects.slice(1,4);



  return (

    <Reveal>

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {featuredProjects.map((project)=>(

          <ProjectPreviewCard

            key={project.id}

            project={project}

          />

        ))}


      </div>


    </Reveal>

  );

}