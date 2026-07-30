import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


export default function PortfolioHero(){

  return (

    <section
      className="
        relative
        overflow-hidden
        py-32
        lg:py-44
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-black
          via-[#061016]
          to-black
        "
      />


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


        <Reveal>


          <div
            className="
              relative
              max-w-5xl
            "
          >


            <div
              className="
                flex
                items-center
                gap-3
                text-cyan-400
              "
            >

              <Sparkles size={18}/>


              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.4em]
                "
              >
                Digital Product Studio
              </p>


            </div>




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

              Engineering Digital

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
                Experiences That Matter
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

              Explore premium websites, digital products,
              and scalable platforms engineered through
              strategy, design, and modern technology
              to create measurable impact.

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
                href="#projects"
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

                Explore Projects

                <ArrowRight size={18}/>

              </a>





              <a
                href="/contact"
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

                Start A Project

              </a>


            </div>



          </div>


        </Reveal>


      </Container>


    </section>

  );

}