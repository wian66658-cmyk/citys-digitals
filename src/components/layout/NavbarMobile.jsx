import { Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";

import NavbarLink from "./NavbarLink";
import Button from "../ui/Button";

export default function NavbarMobile({
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <div className="lg:hidden">

      {/* Toggle Button */}

      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="
          rounded-xl
          p-2
          text-white
          transition
          hover:bg-white/10
        "
        aria-label="Toggle Navigation"
      >
        {mobileOpen ? (
          <X size={26} />
        ) : (
          <Menu size={26} />
        )}
      </button>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            mt-4
            rounded-2xl
            border
            border-white/10
            bg-[#0B0B0B]/95
            p-6
            shadow-2xl
            backdrop-blur-2xl
          "
        >
          <div className="flex flex-col gap-3">

            {navigation.map((item) => (
              <NavbarLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </NavbarLink>
            ))}

            <Button
              to="/contact"
              className="mt-4"
              fullWidth
            >
              Request Quote
            </Button>

          </div>
        </div>
      )}

    </div>
  );
}