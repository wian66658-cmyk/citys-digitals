import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Container from "../ui/Container";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Premium Websites",
  "UI / UX Design",
  "Brand Identity",
  "Web Applications",
  "SEO Optimization",
  "Website Maintenance",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">

      <Container>

        <div className="grid gap-14 py-20 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-black">

              <span className="text-white">
                City's
              </span>

              <span className="text-yellow-500">
                {" "}Digitals
              </span>

            </h2>

            <p className="mt-6 leading-8 text-gray-400">

              Premium web design, branding and digital
              experiences crafted for ambitious businesses.

            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Navigation
            </h3>

            <ul className="mt-6 space-y-3">

              {navigation.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="text-gray-400 transition hover:text-yellow-500"
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3">

              {services.map((service) => (

                <li
                  key={service}
                  className="text-gray-400"
                >
                  {service}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-yellow-500"
                />

                <a
                  href="mailto:citysdigitals@gmail.com"
                  className="text-gray-400 transition hover:text-yellow-500"
                >
                  citysdigitals@gmail.com
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-yellow-500"
                />

                <a
                  href="tel:+254707700261"
                  className="text-gray-400 transition hover:text-yellow-500"
                >
                  +254 707 700 261
                </a>

              </div>

              <div className="flex items-center gap-3">

                <MapPin
                  size={18}
                  className="text-yellow-500"
                />

                <span className="text-gray-400">
                  Nairobi, Kenya
                </span>

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-8 flex gap-6">

              <a
                href="#"
                className="text-gray-400 transition hover:text-yellow-500"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-gray-400 transition hover:text-yellow-500"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-gray-500">

              © {new Date().getFullYear()} City's Digitals.
              All rights reserved.

            </p>

            <p className="text-sm text-gray-500">

              Designed & Developed by City's Digitals.

            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}