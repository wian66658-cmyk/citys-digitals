import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-28 bg-black">
      <Container>
        <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-black p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to build something exceptional?
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Let's create a premium digital experience that helps your business
            stand out and grow.
          </p>

          <div className="mt-10">
            <Button>Start Your Project</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
