import { Link } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      className="
        flex
        items-center
        gap-2
        transition-transform
        duration-300
        hover:scale-[1.02]
      "
    >
      <span className="text-2xl font-black tracking-tight text-white">
        City's
      </span>

      <span className="text-2xl font-black tracking-tight text-yellow-500">
        Digitals
      </span>
    </Link>
  );
}