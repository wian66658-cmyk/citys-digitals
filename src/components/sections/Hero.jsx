import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
            Premium Digital Agency
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            We Build Websites That
            <span className="block text-yellow-500">
              Grow Businesses.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            City's Digitals creates premium websites, branding, and digital
            experiences that help ambitious businesses stand out and win more
            clients.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button>
              Start Your Project
            </Button>

            <Button variant="secondary">
              View Portfolio
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
