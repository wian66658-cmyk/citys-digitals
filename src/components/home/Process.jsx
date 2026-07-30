import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const process = [
  {
    number: "01",
    title: "Discovery & Strategy",
    icon: Search,
    description:
      "We analyze your goals, audience, challenges, and opportunities to create a clear digital roadmap.",
    points: [
      "Business objectives",
      "User research",
      "Product strategy",
      "Technical planning",
    ],
  },

  {
    number: "02",
    title: "Experience Design",
    icon: PenTool,
    description:
      "We transform ideas into intuitive interfaces and premium digital experiences.",
    points: [
      "UX architecture",
      "UI systems",
      "Brand direction",
      "Interactive prototypes",
    ],
  },

  {
    number: "03",
    title: "Engineering",
    icon: Code2,
    description:
      "We build scalable, reliable, and high-performance digital products using modern technology.",
    points: [
      "Frontend development",
      "Web applications",
      "Performance optimization",
      "Quality testing",
    ],
  },

  {
    number: "04",
    title: "Launch & Growth",
    icon: Rocket,
    description:
      "We launch, optimize, and support your digital product for long-term success.",
    points: [
      "Deployment",
      "Analytics",
      "Optimization",
      "Continuous improvement",
    ],
  },
];


export default function Process(){

  return (

    <section className="relative py-32 overflow-hidden">

      <div
        className="
          absolute
          right-0
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-yellow-500/10
          blur-[130px]
        "
      />


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
              Our Process
            </p>


            <h2
              className="
                mt-6
                text-4xl
                font-black
                text-white
                md:text-6xl
              "
            >

              A refined system

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
                built for excellence.
              </span>

            </h2>

          </div>

        </Reveal>



        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-2
          "
        >

          {process.map((item)=>(

            <Reveal key={item.number}>

              <div
                className="
                  group
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
                    items-center
                    justify-between
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
                      bg-cyan-400/10
                      text-cyan-400
                    "
                  >

                    <item.icon size={26}/>

                  </div>


                  <span
                    className="
                      text-5xl
                      font-black
                      text-white/10
                    "
                  >
                    {item.number}
                  </span>


                </div>


                <h3
                  className="
                    mt-8
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


                <ul className="mt-6 space-y-3">

                  {item.points.map((point)=>(

                    <li
                      key={point}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-300
                      "
                    >

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-yellow-400
                        "
                      />

                      {point}

                    </li>

                  ))}

                </ul>


              </div>

            </Reveal>

          ))}

        </div>


      </Container>


    </section>

  );

}