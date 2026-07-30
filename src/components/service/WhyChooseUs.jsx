import {
  Award,
  Target,
  Layers,
  Handshake,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const reasons = [

  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every project is crafted with attention to detail, modern design principles, and performance standards.",
  },

  {
    icon: Target,
    title: "Business Focused",
    description:
      "We create digital solutions around your goals, customers, and measurable business outcomes.",
  },

  {
    icon: Layers,
    title: "Built To Scale",
    description:
      "Our systems are designed to grow with your organization and adapt to future opportunities.",
  },

  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't just deliver projects. We build relationships that support continuous digital growth.",
  },

];


export default function WhyChooseUs(){

  return (

    <section className="py-32">


      <Container>


        <Reveal>


          <div
            className="
              rounded-[2.5rem]
              border
              border-white/10
              bg-white/5
              p-10
              md:p-16
            "
          >


            <div className="max-w-3xl">


              <p
                className="
                  uppercase
                  tracking-[0.35em]
                  text-sm
                  text-cyan-400
                "
              >
                Why Choose Us
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

                A digital partner

                <span
                  className="
                    block
                    text-yellow-500
                  "
                >
                  built for impact
                </span>

              </h2>



              <p
                className="
                  mt-6
                  leading-8
                  text-gray-400
                "
              >

                We combine creativity, technology,
                and strategic thinking to help ambitious
                businesses build digital experiences
                that matter.

              </p>


            </div>



            <div
              className="
                mt-14
                grid
                gap-8
                md:grid-cols-2
              "
            >


              {reasons.map((item)=>(


                <Reveal key={item.title}>


                  <div
                    className="
                      flex
                      gap-5
                      rounded-3xl
                      border
                      border-white/10
                      bg-black/20
                      p-7
                    "
                  >


                    <item.icon
                      size={34}
                      className="
                        shrink-0
                        text-yellow-500
                      "
                    />



                    <div>


                      <h3
                        className="
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        {item.title}
                      </h3>



                      <p
                        className="
                          mt-3
                          leading-7
                          text-gray-400
                        "
                      >
                        {item.description}
                      </p>


                    </div>


                  </div>


                </Reveal>


              ))}


            </div>


          </div>


        </Reveal>


      </Container>


    </section>

  );

}