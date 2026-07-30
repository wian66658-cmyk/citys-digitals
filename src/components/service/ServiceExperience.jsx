import {
  Compass,
  Palette,
  Rocket,
  BarChart3,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const experiences = [

  {
    icon: Compass,
    title: "Strategy First",
    description:
      "Every project begins with understanding your goals, audience, market, and opportunities before design or development begins.",
  },

  {
    icon: Palette,
    title: "Experience Design",
    description:
      "We create intuitive interfaces and digital experiences that combine aesthetics, usability, and business objectives.",
  },

  {
    icon: Rocket,
    title: "Engineering Excellence",
    description:
      "We transform ideas into fast, scalable, and reliable digital products using modern technology.",
  },

  {
    icon: BarChart3,
    title: "Continuous Growth",
    description:
      "We optimize digital systems with performance improvements, analytics, and long-term thinking.",
  },

];


export default function ServiceExperience(){

  return (

    <section className="py-32">


      <Container>


        <Reveal>


          <div
            className="
              grid
              gap-12
              lg:grid-cols-2
              items-center
            "
          >


            <div>


              <p
                className="
                  uppercase
                  tracking-[0.35em]
                  text-sm
                  text-cyan-400
                "
              >
                Our Approach
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

                More than services.

                <span
                  className="
                    block
                    text-yellow-500
                  "
                >
                  We build digital systems.
                </span>

              </h2>



              <p
                className="
                  mt-6
                  max-w-xl
                  leading-8
                  text-gray-400
                "
              >

                Successful digital products require more
                than beautiful designs. They require strategy,
                technology, and a clear understanding of users.

                Our process combines creativity and engineering
                to create experiences that deliver real impact.

              </p>


            </div>



            <div
              className="
                grid
                gap-6
                sm:grid-cols-2
              "
            >


              {experiences.map((item)=>(


                <Reveal key={item.title}>


                  <div
                    className="
                      group
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      p-7
                      transition
                      duration-500
                      hover:-translate-y-2
                      hover:border-yellow-500/40
                    "
                  >


                    <item.icon
                      size={32}
                      className="
                        text-cyan-400
                      "
                    />



                    <h3
                      className="
                        mt-6
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>



                    <p
                      className="
                        mt-3
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


          </div>


        </Reveal>


      </Container>


    </section>

  );

}