import { navigation } from "../../data/navigation";
import NavbarLink from "./NavbarLink";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex items-center gap-3">
      {navigation.map((item) => (
        <NavbarLink
          key={item.path}
          to={item.path}
        >
          {item.name}
        </NavbarLink>
      ))}
    </div>
  );
}