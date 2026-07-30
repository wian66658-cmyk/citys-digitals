import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


export default function PortfolioCTA(){

  return (

    <section
      className="
        relative
        overflow-hidden
        py-32
      "
    >


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
              rounded-[3rem]
              border
              border-white/10
              bg-gradient-to-br
              from-white/10
              via-white/5
              to-transparent
              px-8
              py-20
              text-center
              md:px-16
            "
          >



            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                rounded-full
                bg-yellow-500/10
                blur-[120px]
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
                  justify-center
                  text-cyan-400
                "
              >

                <Sparkles size={26}/>

              </div>





              <p
                className="
                  mt-6
                  text-sm
                  uppercase
                  tracking-[0.4em]
                  text-cyan-300
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

                  digital system

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
                engineer, and scale premium digital
                experiences that help organizations
                create meaningful impact.

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
                  href="/services"
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

                  Explore Services

                </a>




              </div>



            </div>



          </div>



        </Reveal>


      </Container>


    </section>

  );

}