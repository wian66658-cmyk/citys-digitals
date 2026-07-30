import {
  TrendingUp,
  Layers,
  Zap,
  Globe,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const stats = [
  {
    number: "50+",
    label: "Digital Experiences",
    icon: Layers,
    description:
      "Premium websites, platforms, and digital products designed for modern businesses.",
  },

  {
    number: "99%",
    label: "Performance Focus",
    icon: Zap,
    description:
      "Fast, optimized, and scalable digital systems built with performance in mind.",
  },

  {
    number: "24/7",
    label: "Digital Reliability",
    icon: Globe,
    description:
      "Solutions engineered to support businesses beyond launch.",
  },

  {
    number: "100%",
    label: "Custom Solutions",
    icon: TrendingUp,
    description:
      "Every experience is strategically designed around unique business goals.",
  },
];


export default function Impact() {

  return (

    <section
      className="
        relative
        overflow-hidden
        py-32
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
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
                tracking-[0.35em]
                text-cyan-400
              "
            >
              Our Impact
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

              Building digital solutions

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-yellow-400
                  via-white
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                that create measurable impact.
              </span>

            </h2>


            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-gray-400
              "
            >

              We combine strategy, design, and technology
              to create scalable digital experiences that
              help organizations grow, connect, and compete
              in a changing digital world.

            </p>


          </div>

        </Reveal>



        {/* Stats Grid */}

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

         {stats.map((item)=>{

            const Icon = item.icon;


            return (

              <Reveal key={item.label}>


                <div

                  className="
                    group
                    h-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                    transition
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/40
                  "

                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-yellow-500/10
                      text-yellow-400
                    "
                  >

                    <Icon size={24}/>

                  </div>



                  <h3
                    className="
                      mt-8
                      text-4xl
                      font-black
                      text-white
                    "
                  >

                    {item.number}

                  </h3>


                  <p
                    className="
                      mt-2
                      text-lg
                      font-bold
                      text-white
                    "
                  >

                    {item.label}

                  </p>


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


                </div>


              </Reveal>

            );

          })}

        </div>


      </Container>


    </section>

  );

}