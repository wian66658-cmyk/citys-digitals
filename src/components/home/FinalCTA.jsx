import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


export default function FinalCTA(){

  return (

    <section
      className="
        relative
        overflow-hidden
        py-32
      "
    >


      {/* Cyan Glow */}

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
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              px-8
              py-16
              text-center
              backdrop-blur-xl
              md:px-16
            "
          >


            {/* Gold Glow */}

            <div
              className="
                absolute
                right-0
                top-0
                h-60
                w-60
                rounded-full
                bg-yellow-500/10
                blur-[100px]
              "
            />


            <div
              className="
                relative
              "
            >


              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-yellow-500/10
                  text-yellow-400
                "
              >

                <Sparkles size={26}/>

              </div>



              <p
                className="
                  mt-8
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-cyan-400
                "
              >
                Start Your Project
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

                Build the next

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
                  digital experience.
                </span>


              </h2>



              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-8
                  text-gray-400
                "
              >

                Partner with City's Digitals to design,
                build, and scale premium digital products
                that create meaningful impact.

              </p>




              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  justify-center
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

                  View Our Work

                </a>


              </div>


            </div>


          </div>


        </Reveal>


      </Container>


    </section>

  );

}