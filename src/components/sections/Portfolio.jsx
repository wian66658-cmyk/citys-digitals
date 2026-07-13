import Container from "../ui/Container";
import Button from "../ui/Button";

const projects = [
  {
    title: "Veloura",
    category: "Luxury Fashion Brand",
    description:
      "A premium fashion identity featuring elegant branding, website design, and luxury visual assets.",
  },
  {
    title: "Auren",
    category: "Modern Business Brand",
    description:
      "A clean, modern brand identity focused on trust, clarity, and premium digital experiences.",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#0d0d0d] py-28">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Selected Projects
          </h2>

          <p className="mt-6 text-gray-400">
            Every project is crafted with attention to detail, performance,
            and business growth.
          </p>

        </div>

        <div className="mt-20 space-y-12">

          {projects.map((project) => (

            <div
              key={project.title}
              className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#111] lg:grid-cols-2"
            >

              <div className="flex items-center justify-center bg-gradient-to-br from-yellow-500/10 to-black p-12">

                <div className="text-center">

                  <div className="mb-6 h-52 w-full rounded-2xl border border-dashed border-yellow-500/40 flex items-center justify-center text-yellow-500">
                    Project Preview
                  </div>

                </div>

              </div>

              <div className="flex flex-col justify-center p-10">

                <p className="text-yellow-500 uppercase tracking-widest text-sm">
                  {project.category}
                </p>

                <h3 className="mt-4 text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-8">
                  <Button>
                    View Case Study
                  </Button>
                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}
