import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

import ProjectCard from "./ProjectCard";

import projects from "../../data/projects";


export default function ProjectGrid() {


  const featuredProject =
    projects.find((project)=>project.featured);


  const otherProjects =
    projects.filter((project)=>!project.featured);



  return (

    <section
      id="projects"
      className="
        relative
        py-32
      "
    >


      <Container>



        <Reveal>

          <div
            className="
              mb-16
              max-w-3xl
            "
          >

            <p
              className="
                text-sm
                uppercase
                tracking-[0.4em]
                text-yellow-500
              "
            >
              Featured Work
            </p>


            <h2
              className="
                mt-5
                text-4xl
                font-black
                text-white
                md:text-6xl
              "
            >
              Digital Experiences
              <span
                className="
                  block
                  text-cyan-400
                "
              >
                Built For Impact
              </span>
            </h2>


            <p
              className="
                mt-6
                text-lg
                leading-8
                text-gray-400
              "
            >
              Selected digital products, platforms,
              and experiences created through strategy,
              design, and modern engineering.
            </p>


          </div>


        </Reveal>





        {/* Featured Project */}

        {featuredProject && (

          <div
            className="
              mb-12
            "
          >

            <ProjectCard
              project={featuredProject}
            />

          </div>

        )}






        {/* Remaining Projects */}

        <div
          className="
            grid
            gap-10
            md:grid-cols-2
          "
        >

          {otherProjects.map((project)=>(

            <ProjectCard

              key={project.id}

              project={project}

            />

          ))}


        </div>



      </Container>


    </section>

  );

}