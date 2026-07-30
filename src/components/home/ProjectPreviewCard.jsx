import { ArrowRight } from "lucide-react";


export default function ProjectPreviewCard({
  project,
}) {

  return (

    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
      "
    >


      <div
        className="
          overflow-hidden
          aspect-video
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
            group-hover:scale-105
          "
        />

      </div>



      <div className="p-7">


        <p
          className="
            text-sm
            text-cyan-400
          "
        >
          {project.category}
        </p>



        <h3
          className="
            mt-3
            text-2xl
            font-bold
            text-white
          "
        >
          {project.title}
        </h3>



        <p
          className="
            mt-4
            leading-7
            text-gray-400
          "
        >
          {project.headline}
        </p>



        <button
          className="
            mt-6
            flex
            items-center
            gap-2
            font-semibold
            text-yellow-400
          "
        >

          View Case Study

          <ArrowRight
            size={18}
            className="
              transition
              group-hover:translate-x-1
            "
          />

        </button>


      </div>


    </div>

  );

}