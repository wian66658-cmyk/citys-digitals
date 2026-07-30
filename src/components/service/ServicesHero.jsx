import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


export default function ServicesHero(){

  return (

    <section
      className="
        relative
        min-h-[85vh]
        overflow-hidden
        flex
        items-center
        pt-32
      "
    >


      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-black
          via-[#050b12]
          to-black
        "
      />


      {/* Cyan Glow */}

      <div
        className="
          absolute
          right-0
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />


      {/* Gold Glow */}

      <div
        className="
          absolute
          left-0
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-yellow-500/10
          blur-[140px]
        "
      />


      <Container>


        <div
          className="
            relative
            max-w-5xl
          "
        >


          <Reveal>


            <p
              className="
                uppercase
                tracking-[0.4em]
                text-sm
                text-cyan-400
              "
            >
              Digital Solutions
            </p>



            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-tight
                text-white
                md:text-7xl
              "
            >

              Building Digital

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
                Systems That Scale
              </span>

            </h1>



            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-gray-400
              "
            >

              From premium websites to digital products
              and scalable platforms, we design and
              engineer experiences that help ambitious
              organizations grow.

            </p>



            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-5
              "
            >


              <a
                href="/contact"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-yellow-500
                  px-8
                  py-4
                  font-bold
                  text-black
                  transition
                  hover:bg-yellow-400
                "
              >

                Start A Project

                <ArrowRight size={18}/>

              </a>



              <a
                href="/portfolio"
                className="
                  rounded-full
                  border
                  border-white/20
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition
                  hover:border-cyan-400
                  hover:text-cyan-400
                "
              >

                Explore Solutions

              </a>


            </div>


          </Reveal>


        </div>


      </Container>


    </section>

  );

}