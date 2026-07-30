import {
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const process = [

  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We analyze goals, audiences, challenges, and opportunities to create a clear digital roadmap.",
  },

  {
    icon: PenTool,
    number: "02",
    title: "Experience Design",
    description:
      "We design premium interfaces, brand systems, and user experiences focused on clarity and impact.",
  },

  {
    icon: Code2,
    number: "03",
    title: "Engineering",
    description:
      "We transform concepts into fast, scalable, and reliable digital products using modern technology.",
  },

  {
    icon: Rocket,
    number: "04",
    title: "Launch & Delivery",
    description:
      "We test, deploy, and optimize digital experiences built for real-world performance.",
  },

  {
    icon: TrendingUp,
    number: "05",
    title: "Growth & Evolution",
    description:
      "We continuously improve digital systems through insights, optimization, and future-focused thinking.",
  },

];


export default function PortfolioProcess(){

  return (

    <section
      className="
        relative
        py-32
        overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
          absolute
          right-0
          top-1/3
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-500/10
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
              Our Process
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

              A refined process

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
                built for excellence
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

              Every successful digital product requires
              strategy, creativity, and engineering.
              Our process combines these disciplines
              to create experiences that deliver lasting
              impact.

            </p>


          </div>


        </Reveal>





        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-5
          "
        >


          {process.map((item)=>(


            <Reveal
              key={item.number}
            >


              <div
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/10
                  to-white/[0.02]
                  p-7
                  transition
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                "
              >



                {/* Icon */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-yellow-500/20
                    bg-yellow-500/10
                  "
                >

                  <item.icon
                    size={28}
                    className="
                      text-yellow-400
                    "
                  />

                </div>





                <p
                  className="
                    mt-8
                    text-xs
                    font-bold
                    tracking-[0.35em]
                    text-cyan-300
                  "
                >

                  {item.number}

                </p>





                <h3
                  className="
                    mt-4
                    text-xl
                    font-bold
                    text-white
                  "
                >

                  {item.title}

                </h3>





                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-gray-400
                  "
                >

                  {item.description}

                </p>





                {/* Hover Accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-gradient-to-r
                    from-yellow-400
                    to-cyan-400
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