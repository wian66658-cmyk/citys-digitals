import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

import FeaturedHero from "./FeaturedHero";
import FeaturedGrid from "./FeaturedGrid";


export default function FeaturedProjects() {

  return (

    <section className="relative py-32 overflow-hidden">


      {/* Background glow */}

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


      <Container>


        <Reveal>

          <div className="max-w-3xl">


            <p
              className="
                text-sm
                uppercase
                tracking-[0.4em]
                text-cyan-400
              "
            >
              Selected Work
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

              Digital products

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
                {" "}built for impact
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

              A collection of premium digital experiences,
              platforms, and products designed to solve
              meaningful problems.

            </p>


          </div>


        </Reveal>



        {/* Featured Project */}

        <div className="mt-20">

          <FeaturedHero />

        </div>



        {/* Supporting Projects */}

        <div className="mt-10">

          <FeaturedGrid />

        </div>



      </Container>


    </section>

  );

}