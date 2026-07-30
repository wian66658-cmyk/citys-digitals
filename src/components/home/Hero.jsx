import {
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  Monitor,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


export default function Hero() {

  return (

    <section
      className="
        relative
        min-h-screen
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
          via-[#061016]
          to-black
        "
      />


      {/* Cyan atmosphere */}
      <div
        className="
          absolute
          right-[-150px]
          top-1/4
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />


      {/* Gold atmosphere */}
      <div
        className="
          absolute
          left-[-150px]
          bottom-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-yellow-500/10
          blur-[140px]
        "
      />


      <Container>

        <div
          className="
            relative
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >


          {/* TEXT */}

          <Reveal>

            <div>


              <p
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  uppercase
                  tracking-[0.4em]
                  text-cyan-400
                "
              >

                <Sparkles size={16}/>

                Digital Product Studio

              </p>



              <h1
                className="
                  mt-8
                  text-5xl
                  font-black
                  leading-[1.05]
                  text-white
                  md:text-7xl
                "
              >

                Building Digital

                <br />

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

                  Products For Impact

                </span>

              </h1>



              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-8
                  text-gray-400
                "
              >

                We design and engineer premium digital
                experiences, web platforms, and scalable
                products for ambitious companies shaping
                the future.

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
                    inline-flex
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

                  Explore Work

                </a>


              </div>


            </div>

          </Reveal>




          {/* DIGITAL PRODUCT SHOWCASE */}

          <Reveal>

            <div
              className="
                relative
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-2xl
                shadow-[0_40px_100px_rgba(0,0,0,.5)]
              "
            >


              {/* top badge */}

              <div
                className="
                  absolute
                  -top-5
                  left-8
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-black
                  px-5
                  py-2
                  text-sm
                  text-cyan-400
                "
              >

                Future Digital Systems

              </div>




              {/* Main screen */}

              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-black
                  p-6
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
                      gap-2
                    "
                  >

                    <span className="h-3 w-3 rounded-full bg-red-400"/>
                    <span className="h-3 w-3 rounded-full bg-yellow-400"/>
                    <span className="h-3 w-3 rounded-full bg-green-400"/>

                  </div>


                  <Monitor
                    className="text-cyan-400"
                    size={22}
                  />

                </div>




                <div
                  className="
                    mt-8
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500/20
                    via-transparent
                    to-yellow-500/20
                    p-8
                  "
                >

                  <Activity
                    size={70}
                    className="
                      text-cyan-400
                    "
                  />

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      text-white
                    "
                  >

                    Intelligent Digital Platforms

                  </h3>


                  <p
                    className="
                      mt-3
                      text-gray-400
                    "
                  >

                    Scalable websites, applications,
                    and experiences built for tomorrow.

                  </p>


                </div>


              </div>





              {/* Floating cards */}

              <div
                className="
                  absolute
                  -left-8
                  bottom-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/80
                  p-5
                  backdrop-blur-xl
                "
              >

                <Layers
                  className="text-yellow-400"
                  size={28}
                />

                <p className="mt-3 text-sm text-gray-400">
                  Digital Architecture
                </p>

              </div>




              <div
                className="
                  absolute
                  -right-8
                  top-20
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/80
                  p-5
                  backdrop-blur-xl
                "
              >

                <p
                  className="
                    text-3xl
                    font-black
                    text-white
                  "
                >
                  99%
                </p>


                <p
                  className="
                    text-sm
                    text-gray-400
                  "
                >
                  Performance Focus
                </p>


              </div>



            </div>


          </Reveal>


        </div>


      </Container>


    </section>

  );

}