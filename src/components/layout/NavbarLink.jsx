import { NavLink } from "react-router-dom";

export default function NavbarLink({
  to,
  children,
  onClick,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) =>
        `
        relative
        rounded-full
        px-5
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-300

        ${
          isActive
            ? `
              border
              border-yellow-500/20
              bg-yellow-500/10
              text-yellow-400
            `
            : `
              text-gray-300
              hover:bg-white/5
              hover:text-white
            `
        }
        `
      }
    >
      {children}
    </NavLink>
  );
}