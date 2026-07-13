import Container from "../ui/Container";
import Button from "../ui/Button";
import portfolio from "../../data/portfolio";

export default function Portfolio() {
  return (
    <section className="bg-[#0d0d0d] py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-500">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Selected Projects
          </h2>

          <p className="mt-6 text-gray-400">
            Every project is crafted with attention to detail,
            performance, and business growth.
          </p>
        </div>

        <div className="mt-20 space-y-12">
          {portfolio.map((project) => (
            <div
              key={project.id}
              className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#111] lg:grid-cols-2"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-yellow-500/10 to-black p-12">
                <div className="flex h-72 w-full items-center justify-center rounded-2xl border border-dashed border-yellow-500/30 text-yellow-500">
                  Project Preview
                </div>
              </div>

              <div className="flex flex-col justify-center p-10">
                <p className="text-sm uppercase tracking-widest text-yellow-500">
                  {project.category}
                </p>

                <h3 className="mt-4 text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-yellow-500/20 px-3 py-1 text-sm text-yellow-400"
                    >
                      {service}
                    </span>
                  ))}
                </div>

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
