import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        onFinish();
      }, 600);

    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[#090909]
        transition-all
        duration-700
        ${
          hide
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }
      `}
    >
      <div className="text-center">

        <h1 className="text-5xl font-bold tracking-tight">

          <span className="text-white">
            City's
          </span>

          <span className="text-yellow-500">
            {" "}Digitals
          </span>

        </h1>

        <p className="mt-4 uppercase tracking-[0.45em] text-sm text-gray-500">
          Premium Digital Agency
        </p>

        <div className="mx-auto mt-10 h-[2px] w-60 overflow-hidden rounded-full bg-white/10">

          <div className="loader-bar h-full bg-yellow-500" />

        </div>

      </div>
    </div>
  );
}