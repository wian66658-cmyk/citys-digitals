import {
  Layers,
  Globe,
  PenTool,
  Code2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const solutions = [
  {
    number: "01",
    title: "Digital Products",
    description:
      "Scalable platforms, SaaS experiences, and digital solutions designed to solve meaningful business problems.",
    icon: Layers,
  },

  {
    number: "02",
    title: "Premium Web Experiences",
    description:
      "High-performance websites built to communicate value, build trust, and convert audiences.",
    icon: Globe,
  },

  {
    number: "03",
    title: "Product Design",
    description:
      "Human-centered UI/UX systems that transform complex ideas into intuitive experiences.",
    icon: PenTool,
  },

  {
    number: "04",
    title: "Web Engineering",
    description:
      "Modern scalable development focused on performance, security, and future growth.",
    icon: Code2,
  },

  {
    number: "05",
    title: "Growth Systems",
    description:
      "Digital foundations optimized for visibility, analytics, and sustainable expansion.",
    icon: TrendingUp,
  },

  {
    number: "06",
    title: "Future Innovation",
    description:
      "Emerging technology solutions designed for tomorrow's digital landscape.",
    icon: Sparkles,
  },
];


export default function SolutionsGrid() {

  return (

    <section className="py-32">


      <Container>


        <Reveal>


          <div className="max-w-3xl">


            <p
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-cyan-400
              "
            >
              Our Solutions
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

              Building digital systems

              <span
                className="
                  block
                  text-yellow-500
                "
              >
                that create impact
              </span>

            </h2>


            <p
              className="
                mt-6
                max-w-2xl
                leading-8
                text-gray-400
              "
            >

              Strategy, design, and technology combined
              into premium digital experiences built for
              ambitious organizations worldwide.

            </p>


          </div>


        </Reveal>



        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >


          {solutions.map((solution) => {


            const Icon = solution.icon;


            return (

              <Reveal key={solution.title}>


                <article
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-cyan-400/40
                  "
                >


                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-cyan-500/10
                      via-transparent
                      to-yellow-500/10
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />


                  <div className="relative">


                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-sm
                          font-bold
                          text-yellow-500
                        "
                      >
                        {solution.number}
                      </span>


                      <Icon
                        size={30}
                        className="
                          text-cyan-400
                        "
                      />

                    </div>



                    <h3
                      className="
                        mt-8
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      {solution.title}
                    </h3>



                    <p
                      className="
                        mt-4
                        leading-7
                        text-gray-400
                      "
                    >
                      {solution.description}
                    </p>


                  </div>


                </article>


              </Reveal>

            );


          })}


        </div>


      </Container>


    </section>

  );

}