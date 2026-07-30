import { ArrowRight, ExternalLink } from "lucide-react";

import Reveal from "../ui/Reveal";


export default function FeaturedHero() {

  return (

    <Reveal>

      <article
        className="
          group
          relative
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/10
          bg-[#080b0f]
        "
      >


        {/* Glow */}

        <div
          className="
            absolute
            right-0
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />


        <div
          className="
            grid
            gap-10
            p-8
            lg:grid-cols-2
            lg:p-12
          "
        >


          {/* Content */}

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >

            <p
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-cyan-400
              "
            >
              Featured Project
            </p>


            <h3
              className="
                mt-5
                text-4xl
                font-black
                text-white
                md:text-5xl
              "
            >

              Veloura

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
                Luxury Fashion Experience
              </span>

            </h3>



            <p
              className="
                mt-6
                leading-8
                text-gray-400
              "
            >

              A premium e-commerce platform crafted with
              luxury branding, immersive visuals, seamless
              shopping experience, and conversion-focused
              design.

            </p>



            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >

              {[
                "UI/UX Design",
                "Web Development",
                "E-Commerce",
                "Brand System",
              ].map((item)=>(
                
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-gray-300
                  "
                >
                  {item}
                </span>

              ))}

            </div>



            <button
              className="
                mt-10
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-yellow-500
                px-7
                py-4
                font-bold
                text-black
                transition
                hover:bg-yellow-400
              "
            >

              View Case Study

              <ArrowRight size={18}/>

            </button>


          </div>



          {/* Visual */}

          <div
            className="
              relative
              min-h-[420px]
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-black
            "
          >

            <img
              src="/assets/projects/veloura.jpg"
              alt="Veloura Luxury Fashion"
              className="
                h-full
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />


            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
              "
            />


            <div
              className="
                absolute
                bottom-6
                left-6
                flex
                items-center
                gap-2
                text-sm
                text-white
              "
            >

              <ExternalLink size={16}/>

              Luxury Commerce Platform

            </div>


          </div>


        </div>


      </article>


    </Reveal>

  );

}