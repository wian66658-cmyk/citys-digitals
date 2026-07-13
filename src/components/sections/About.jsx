import Container from "../ui/Container";
import Button from "../ui/Button";

export default function About() {
  return (
    <section className="bg-black py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold">
              About Us
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Building brands that people trust.
            </h2>

            <p className="mt-8 text-gray-400 leading-8">
              City's Digitals is a premium digital agency based in Kenya,
              helping businesses establish a powerful online presence through
              modern websites, branding, UI/UX design and digital strategy.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Every project is designed with one goal:
              creating digital experiences that inspire confidence,
              increase visibility and help businesses grow.
            </p>

            <div className="mt-10">
              <Button>Let's Build Together</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-black p-12">
            <div className="aspect-square rounded-2xl border border-dashed border-yellow-500/40 flex items-center justify-center">
              Company Image
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
