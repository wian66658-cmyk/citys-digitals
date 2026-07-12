import Container from "../ui/Container";

const stats = [
  {
    number: "99+",
    label: "Projects Designed",
  },
  {
    number: "100%",
    label: "Responsive Design",
  },
  {
    number: "24h",
    label: "Average Response",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#0d0d0d] py-20">
      <Container>
        <div className="grid gap-10 text-center md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="transition duration-300 hover:-translate-y-2"
            >
              <h2 className="text-5xl font-bold text-yellow-500">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
