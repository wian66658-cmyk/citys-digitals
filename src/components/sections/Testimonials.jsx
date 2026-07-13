import Container from "../ui/Container";

const testimonials = [
  {
    name: "Sarah W.",
    company: "Fashion Brand",
    quote:
      "City's Digitals transformed our online presence with a premium website and branding that exceeded our expectations.",
  },
  {
    name: "James K.",
    company: "Business Owner",
    quote:
      "Professional, responsive and detail-oriented. The final product gave our company a completely new image.",
  },
  {
    name: "Mercy A.",
    company: "Startup Founder",
    quote:
      "The quality of work and communication was exceptional. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0d0d0d] py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Trusted by Growing Brands
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-[#111] p-8"
            >
              <p className="leading-8 text-gray-400">
                "{item.quote}"
              </p>

              <h3 className="mt-8 text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-yellow-500">
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
