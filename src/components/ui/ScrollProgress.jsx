import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-[3px] bg-yellow-500 transition-all"
      style={{ width: `${progress}%` }}
    />
  );
}