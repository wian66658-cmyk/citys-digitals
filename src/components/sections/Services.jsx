import {
  Monitor,
  Palette,
  Smartphone,
  Search,
  ShoppingCart,
  Bot,
} from "lucide-react";

import Container from "../ui/Container";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Modern, responsive websites built to grow your business.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Premium logos, visual identity and branding systems.",
  },
  {
    icon: Smartphone,
    title: "UI / UX Design",
    description:
      "Clean user experiences designed for engagement.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Fast websites optimized for search engines and performance.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Beautiful online stores designed to increase sales.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Smart AI workflows and automations that save time.",
  },
];

export default function Services() {
  return (
    <section className="py-28 bg-black">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-yellow-500 font-semibold uppercase tracking-[0.25em]">
            Services
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Premium Digital Solutions
          </h2>

          <p className="mt-6 text-gray-400">
            We help ambitious businesses build premium digital
            experiences that inspire trust and drive growth.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40"
              >

                <div className="inline-flex rounded-2xl bg-yellow-500/10 p-4">

                  <Icon
                    size={30}
                    className="text-yellow-500"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

              </div>

            );
          })}

        </div>

      </Container>
    </section>
  );
}
