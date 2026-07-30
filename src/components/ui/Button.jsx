import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Button({
  children,

  variant = "primary",

  fullWidth = false,

  disabled = false,

  loading = false,

  className = "",

  to,

  href,

  target,

  rel,

  onClick,

  type = "button",

  ...props
}) {

  const baseClasses = `
    inline-flex
    items-center
    justify-center
    rounded-2xl
    px-7
    py-4
    text-sm
    font-semibold
    transition-all
    duration-300
    ease-out
    active:scale-[0.98]
    disabled:cursor-not-allowed
    disabled:opacity-50
  `;

  const variants = {

    primary: `
      bg-yellow-500
      text-black
      shadow-[0_10px_30px_rgba(234,179,8,0.25)]
      hover:-translate-y-1
      hover:bg-yellow-400
      hover:shadow-[0_20px_40px_rgba(234,179,8,0.35)]
    `,

    secondary: `
      border
      border-yellow-500/30
      bg-white/5
      text-white
      backdrop-blur-xl
      hover:-translate-y-1
      hover:border-yellow-500
      hover:bg-yellow-500/10
    `,

    ghost: `
      text-gray-300
      hover:bg-white/5
      hover:text-white
    `,
  };

  const classes = clsx(
    baseClasses,
    variants[variant],
    fullWidth && "w-full",
    className
  );

  // Internal React Router Link

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  // External Link

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  // Standard Button

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {loading ? (
        <>
          <span className="mr-3 h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}