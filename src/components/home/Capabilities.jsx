import {
  Layers,
  Monitor,
  Palette,
  Code2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const capabilities = [

  {
    number: "01",
    title: "Digital Products",
    description:
      "Scalable platforms, SaaS experiences, and digital solutions designed to solve meaningful problems.",
    icon: Layers,
  },

  {
    number: "02",
    title: "Premium Web Experiences",
    description:
      "High-performance websites crafted to build trust, communicate value, and convert visitors.",
    icon: Monitor,
  },

  {
    number: "03",
    title: "Product Design",
    description:
      "Human-centered UI/UX systems that transform complex ideas into simple experiences.",
    icon: Palette,
  },

  {
    number: "04",
    title: "Web Engineering",
    description:
      "Modern, reliable, and scalable development built with performance and future growth in mind.",
    icon: Code2,
  },

  {
    number: "05",
    title: "Growth Systems",
    description:
      "Digital foundations optimized for visibility, speed, and sustainable business growth.",
    icon: TrendingUp,
  },

  {
    number: "06",
    title: "Future Innovation",
    description:
      "Exploring emerging technology to create digital experiences ready for tomorrow.",
    icon: Sparkles,
  },

];


export default function Capabilities() {


  return (

    <section
      className="
        relative
        overflow-hidden
        py-32
      "
    >


      {/* Cyan glow */}

      <div
        className="
          absolute
          right-[-200px]
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />


      {/* Gold glow */}

      <div
        className="
          absolute
          left-[-200px]
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-yellow-500/10
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
                tracking-[0.4em]
                text-cyan-400
              "
            >

              Our Capabilities

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
                  bg-gradient-to-r
                  from-yellow-400
                  via-white
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >

                {" "}for impact

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

              Strategy, design, and technology combined
              to create premium digital experiences
              for ambitious organizations worldwide.

            </p>


          </div>

        </Reveal>





        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >


          {capabilities.map((item)=>(

            <Reveal key={item.number}>


              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                "
              >


                {/* Hover glow */}

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



                <div
                  className="
                    relative
                  "
                >


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
                        text-yellow-400
                      "
                    >
                      {item.number}
                    </span>


                    <item.icon
                      size={30}
                      className="
                        text-cyan-400
                        transition
                        duration-300
                        group-hover:scale-110
                      "
                    />

                  </div>



                  <h3
                    className="
                      mt-10
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
                      mt-8
                      h-px
                      w-full
                      bg-white/10
                    "
                  />


                </div>


              </div>


            </Reveal>

          ))}


        </div>


      </Container>


    </section>

  );

}