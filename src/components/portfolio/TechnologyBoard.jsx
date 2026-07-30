import {
  Code2,
  Server,
  Cloud,
  ShieldCheck,
  Zap,
  BarChart3,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const technologies = [

  {
    icon: Code2,
    title: "Modern Development",
    description:
      "Building responsive digital experiences using modern frameworks, scalable architecture, and refined engineering practices.",
  },

  {
    icon: Server,
    title: "Reliable Systems",
    description:
      "Structured backend systems and technical foundations designed for stability, performance, and future expansion.",
  },

  {
    icon: Cloud,
    title: "Cloud Ready",
    description:
      "Deployment strategies designed for reliability, speed, accessibility, and global digital experiences.",
  },

  {
    icon: ShieldCheck,
    title: "Security Focus",
    description:
      "Digital products built with security principles, stability, and responsible engineering practices.",
  },

  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Optimized experiences focused on speed, responsiveness, and exceptional user satisfaction.",
  },

  {
    icon: BarChart3,
    title: "Analytics Driven",
    description:
      "Data-informed improvements that help digital products continuously evolve and grow.",
  },

];


export default function TechnologyBoard(){

  return (

    <section
      className="
        relative
        overflow-hidden
        py-32
      "
    >


      <div
        className="
          absolute
          left-0
          top-1/3
          h-[350px]
          w-[350px]
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />



      <Container>


        <Reveal>


          <div
            className="
              max-w-3xl
            "
          >


            <p
              className="
                text-sm
                uppercase
                tracking-[0.4em]
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
                  bg-gradient-to-r
                  from-yellow-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                designed for tomorrow
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


            <Reveal
              key={item.title}
            >


              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/10
                  to-white/[0.02]
                  p-8
                  transition
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                "
              >



                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                  "
                >

                  <item.icon
                    size={30}
                    className="
                      text-cyan-400
                    "
                  />

                </div>





                <h3
                  className="
                    mt-7
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




                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-gradient-to-r
                    from-cyan-400
                    to-yellow-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />


              </div>


            </Reveal>


          ))}


        </div>


      </Container>


    </section>

  );

}