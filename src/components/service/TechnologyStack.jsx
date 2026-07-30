import {
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  Zap,
  LineChart,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const technologies = [

  {
    icon: Code2,
    title: "Modern Development",
    description:
      "Building responsive digital experiences using modern frameworks and scalable architecture.",
  },

  {
    icon: Database,
    title: "Reliable Systems",
    description:
      "Structured databases and backend systems designed for performance and future expansion.",
  },

  {
    icon: Cloud,
    title: "Cloud Ready",
    description:
      "Deployment strategies designed for reliability, speed, and global accessibility.",
  },

  {
    icon: ShieldCheck,
    title: "Security Focus",
    description:
      "Digital products built with security, stability, and best practices in mind.",
  },

  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimized experiences focused on speed, responsiveness, and user satisfaction.",
  },

  {
    icon: LineChart,
    title: "Analytics Driven",
    description:
      "Data-informed improvements that help digital products continuously grow.",
  },

];


export default function TechnologyStack(){

  return (

    <section className="py-32">


      <Container>


        <Reveal>


          <div className="max-w-3xl">


            <p
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-cyan-400
              "
            >
              Technology & Innovation
            </p>



            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-tight
                text-white
                md:text-6xl
              "
            >

              Built with technology

              <span
                className="
                  block
                  text-yellow-500
                "
              >
                designed for tomorrow
              </span>

            </h2>



            <p
              className="
                mt-6
                leading-8
                text-gray-400
              "
            >

              We combine modern technology,
              thoughtful architecture, and performance
              optimization to create digital systems
              ready for the future.

            </p>


          </div>


        </Reveal>



        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >


          {technologies.map((item)=>(


            <Reveal key={item.title}>


              <div
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                "
              >


                <item.icon
                  size={34}
                  className="
                    text-cyan-400
                  "
                />



                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                    mt-4
                    leading-7
                    text-gray-400
                  "
                >
                  {item.description}
                </p>


              </div>


            </Reveal>


          ))}


        </div>


      </Container>


    </section>

  );

}