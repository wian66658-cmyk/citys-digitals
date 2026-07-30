import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    text:
      "We understand your goals, audience, challenges, and opportunities before creating a digital roadmap.",
  },

  {
    number: "02",
    title: "Design & Experience",
    text:
      "We create premium interfaces and experiences focused on usability, clarity, and business impact.",
  },

  {
    number: "03",
    title: "Development & Testing",
    text:
      "We engineer fast, reliable, and scalable digital products using modern technology.",
  },

  {
    number: "04",
    title: "Launch & Growth",
    text:
      "We optimize, improve, and support your digital system for long-term success.",
  },
];


export default function ProcessTimeline(){

  return (

    <section className="py-32">


      <Container>


        <Reveal>

          <div className="max-w-3xl">

            <p
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-cyan-400
              "
            >
              Our Process
            </p>


            <h2
              className="
                mt-6
                text-4xl
                font-black
                text-white
                md:text-6xl
              "
            >

              A refined process

              <span className="block text-yellow-500">
                built for excellence
              </span>

            </h2>


          </div>


        </Reveal>



        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {steps.map((step)=>(

            <Reveal key={step.number}>


              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                "
              >

                <span
                  className="
                    text-yellow-500
                    font-bold
                  "
                >
                  {step.number}
                </span>


                <h3
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {step.title}
                </h3>


                <p
                  className="
                    mt-4
                    leading-7
                    text-gray-400
                  "
                >
                  {step.text}
                </p>


              </div>


            </Reveal>

          ))}

        </div>


      </Container>


    </section>

  );

}