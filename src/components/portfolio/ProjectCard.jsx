import { ArrowUpRight } from "lucide-react";

import Reveal from "../ui/Reveal";


export default function ProjectCard({ project }) {

  return (

    <Reveal>

      <article
        className="
          group
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/10
          bg-[#080808]
          transition
          duration-500
          hover:-translate-y-3
          hover:border-cyan-400/40
          hover:shadow-2xl
          hover:shadow-cyan-500/10
        "
      >


        {/* Image */}

        <div
          className="
            relative
            aspect-[16/10]
            overflow-hidden
          "
        >

          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-110
            "
          />


          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/30
              to-transparent
            "
          />



          {/* Category */}

          <span
            className="
              absolute
              left-6
              top-6
              rounded-full
              border
              border-cyan-400/30
              bg-black/60
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-cyan-400
              backdrop-blur
            "
          >

            {project.category}

          </span>



          {/* Industry */}

          {project.industry && (

            <span
              className="
                absolute
                bottom-6
                left-6
                text-sm
                text-gray-300
              "
            >

              {project.industry}

            </span>

          )}


        </div>




        {/* Content */}

        <div
          className="
            p-8
          "
        >



          <h3
            className="
              text-3xl
              font-black
              text-white
            "
          >

            {project.title}

          </h3>



          {project.headline && (

            <p
              className="
                mt-4
                font-medium
                text-cyan-300
              "
            >

              {project.headline}

            </p>

          )}



          <p
            className="
              mt-4
              leading-7
              text-gray-400
            "
          >

            {project.description}

          </p>




          {/* Services */}

          {project.services && (

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-3
              "
            >

              {project.services.map((service)=>(

                <span
                  key={service}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1
                    text-xs
                    text-gray-300
                  "
                >

                  {service}

                </span>

              ))}


            </div>

          )}






          {/* Outcome */}

          {project.outcome && (

            <p
              className="
                mt-6
                border-l
                border-yellow-500
                pl-4
                text-sm
                text-gray-400
              "
            >

              {project.outcome}

            </p>

          )}






          {/* CTA */}

          <button
            className="
              mt-8
              flex
              items-center
              gap-2
              font-bold
              text-yellow-500
              transition
              hover:text-yellow-400
            "
          >

            View Case Study

            <ArrowUpRight size={18}/>

          </button>



        </div>



      </article>


    </Reveal>

  );

}