import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


export default function SEOHero() {

  return (

    <section className="
      relative
      overflow-hidden
      bg-[#050505]
      pt-40
      pb-28
    ">

      <div
        className="
          absolute
          right-[-150px]
          top-[-100px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-yellow-500/10
          blur-[180px]
        "
      />


      <Container>

        <Reveal className="
          mx-auto
          max-w-4xl
          text-center
        ">


          <p className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-yellow-500
          ">
            SEO Optimization
          </p>



          <h1 className="
            mt-8
            text-5xl
            font-black
            leading-tight
            text-white
            md:text-7xl
          ">

            Get Found
            <span className="block text-yellow-500">
              Grow Faster
            </span>

          </h1>



          <p className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-gray-400
          ">
            We improve your online visibility through
            technical SEO, content strategy, and
            performance optimization that attracts
            the right customers.
          </p>


        </Reveal>


      </Container>


    </section>

  );

}