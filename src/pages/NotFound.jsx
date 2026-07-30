import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-yellow-500 text-sm uppercase tracking-[0.3em]">
        404 Error
      </p>

      <h1 className="mt-6 text-6xl font-black text-white">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-gray-400">
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="mt-8">
        <Button>Back Home</Button>
      </Link>
    </div>
  );
}