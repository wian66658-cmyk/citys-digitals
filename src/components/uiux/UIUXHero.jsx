import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function UIUXHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-40 pb-28">

      <div className="
        absolute
        left-0
        top-0
        h-[600px]
        w-[600px]
        rounded-full
        bg-yellow-500/10
        blur-[180px]
      "/>


      <Container>

        <Reveal className="mx-auto max-w-4xl text-center">

          <p className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-yellow-500
          ">
            UI / UX Design
          </p>


          <h1 className="
            mt-8
            text-5xl
            font-black
            leading-tight
            text-white
            md:text-7xl
          ">
            Beautiful Interfaces
            <span className="block text-yellow-500">
              Built Around Users
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
            We design intuitive digital experiences that combine
            user psychology, modern aesthetics, and business goals
            to create products people love to use.
          </p>


        </Reveal>

      </Container>

    </section>
  );
}