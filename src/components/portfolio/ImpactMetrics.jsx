import {
  Layers,
  Gauge,
  Globe2,
  ShieldCheck,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const metrics = [

  {
    icon: Layers,
    value: "50+",
    title: "Digital Experiences",
    description:
      "Premium websites, platforms, and digital products designed for modern organizations.",
  },

  {
    icon: Gauge,
    value: "99%",
    title: "Performance Focus",
    description:
      "Optimized digital systems built around speed, reliability, and user experience.",
  },

  {
    icon: Globe2,
    value: "Global",
    title: "Digital Reach",
    description:
      "Creating scalable experiences ready for businesses and audiences worldwide.",
  },

  {
    icon: ShieldCheck,
    value: "100%",
    title: "Quality Commitment",
    description:
      "Every project receives strategic thinking, refined design, and engineering attention.",
  },

];


export default function ImpactMetrics(){

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
          right-0
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
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                that create impact
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

              We measure success through performance,
              reliability, and the meaningful results
              our digital experiences create.

            </p>


          </div>


        </Reveal>





        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >


          {metrics.map((item)=>(


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
                  hover:border-yellow-500/40
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
                    border-yellow-500/20
                    bg-yellow-500/10
                  "
                >

                  <item.icon
                    size={30}
                    className="
                      text-yellow-400
                    "
                  />

                </div>




                <h3
                  className="
                    mt-8
                    text-4xl
                    font-black
                    text-white
                  "
                >

                  {item.value}

                </h3>




                <h4
                  className="
                    mt-3
                    text-xl
                    font-bold
                    text-white
                  "
                >

                  {item.title}

                </h4>




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


          ))}


        </div>


      </Container>


    </section>

  );

}