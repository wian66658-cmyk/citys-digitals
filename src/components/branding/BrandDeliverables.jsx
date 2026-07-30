import {
  Check,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";


const deliverables = [
  "Professional Logo Package",
  "Brand Guidelines Document",
  "Color Palette System",
  "Typography Selection",
  "Social Media Templates",
  "Marketing Assets",
  "Packaging Design Concepts",
  "Brand Strategy Direction",
];


export default function BrandDeliverables() {

  return (

    <section className="relative py-24">

      <Container>


        <Reveal className="text-center">

          <p className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-yellow-500
          ">
            Deliverables
          </p>


          <h2 className="
            mt-6
            text-4xl
            font-black
            text-white
            md:text-6xl
          ">
            Everything Your Brand
            <span className="text-yellow-500">
              {" "}Needs
            </span>
          </h2>


        </Reveal>


        <div className="
          mx-auto
          mt-16
          max-w-4xl
          grid
          gap-5
          md:grid-cols-2
        ">


          {deliverables.map((item,index)=>(

            <Reveal
              key={item}
              delay={index * 0.08}
            >

              <GlassCard
                className="
                  flex
                  items-center
                  gap-4
                  p-6
                "
              >

                <div className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-500/10
                  text-yellow-500
                ">

                  <Check size={20}/>

                </div>


                <p className="
                  font-semibold
                  text-white
                ">
                  {item}
                </p>


              </GlassCard>

            </Reveal>

          ))}


        </div>


      </Container>

    </section>

  );
}