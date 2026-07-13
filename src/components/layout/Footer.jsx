import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-yellow-500">
              City's Digitals
            </h3>

            <p className="mt-2 text-gray-500">
              Design with purpose. Build with excellence. Earn trust.
            </p>
          </div>

          <div className="text-gray-500 text-sm">
            © 2026 City's Digitals. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
