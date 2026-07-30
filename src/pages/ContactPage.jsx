import Container from "../components/ui/Container";


export default function ContactPage(){

  return (

    <section className="py-32">

      <Container>

        <div className="max-w-3xl">

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-yellow-500
            "
          >
            Contact
          </p>


          <h1
            className="
              mt-6
              text-5xl
              font-black
              text-white
            "
          >
            Let's Build Something
            <span className="text-yellow-500">
              {" "}Impactful
            </span>
          </h1>


          <p
            className="
              mt-6
              text-lg
              leading-8
              text-gray-400
            "
          >
            Have a digital product, platform, or experience
            you want to build? Let's create something
            designed for the future.
          </p>


          <div className="mt-10 space-y-4 text-gray-300">

            <p>
              Email:
              <span className="text-yellow-500">
                {" "}citysdigitals@gmail.com
              </span>
            </p>


            <p>
              Location:
              <span className="text-yellow-500">
                {" "}Global Digital Studio
              </span>
            </p>


          </div>


        </div>


      </Container>

    </section>

  );

}