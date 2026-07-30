import clsx from "clsx";

export default function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <input
        className={clsx(
          `
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-4
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-gray-500
          focus:border-yellow-500/50
          focus:bg-white/[0.05]
          focus:ring-4
          focus:ring-yellow-500/10
          `,
          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-500/10",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}