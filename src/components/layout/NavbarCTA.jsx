import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function NavbarCTA() {
  return (
    <div className="hidden lg:flex items-center">

      <Button
  to="/contact"
  variant="primary"
>
  Start Project

  <ArrowRight
    size={18}
    className="ml-2"
  />

</Button>

    </div>
  );
}