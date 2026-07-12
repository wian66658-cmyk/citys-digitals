import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-yellow-500">
          City's Digitals
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="transition hover:text-yellow-400">
            Home
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Services
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Portfolio
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            About
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Contact
          </a>
        </nav>

        <Button>Get Quote</Button>
      </Container>
    </header>
  );
}
