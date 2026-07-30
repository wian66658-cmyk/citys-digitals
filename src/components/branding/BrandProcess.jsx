import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, competitors, and brand goals.",
  },

  {
    number: "02",
    title: "Brand Strategy",
    description:
      "We create the strategic direction that defines your brand positioning.",
  },

  {
    number: "03",
    title: "Visual Design",
    description:
      "We develop your logo, colors, typography, and complete visual identity.",
  },

  {
    number: "04",
    title: "Refinement",
    description:
      "We improve and polish every detail based on feedback.",
  },

  {
    number: "05",
    title: "Brand Launch",
    description:
      "We deliver complete assets ready for marketing and growth.",
  },
];


export default function BrandProcess() {

  return (

    <section className="relative py-24">

      <Container>

        <Reveal className="mx-auto max-w-3xl text-center">

          <p className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-yellow-500
          ">
            Our Process
          </p>


          <h2 className="
            mt-6
            text-4xl
            font-black
            text-white
            md:text-6xl
          ">
            Creating Brands
            <span className="text-yellow-500">
              {" "}With Purpose
            </span>
          </h2>


        </Reveal>


        <div className="
          mt-16
          grid
          gap-6
          md:grid-cols-5
        ">

          {steps.map((step,index)=>(

            <Reveal
              key={step.number}
              delay={index * 0.1}
            >

              <div
                className="
                  h-full
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                "
              >

                <span className="
                  text-3xl
                  font-black
                  text-yellow-500
                ">
                  {step.number}
                </span>


                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  text-white
                ">
                  {step.title}
                </h3>


                <p className="
                  mt-4
                  text-sm
                  leading-6
                  text-gray-400
                ">
                  {step.description}
                </p>


              </div>

            </Reveal>

          ))}

        </div>


      </Container>

    </section>

  );
}