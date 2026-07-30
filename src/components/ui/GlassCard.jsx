import clsx from "clsx";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={clsx(
        `
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        transition-all
        duration-500
        shadow-[0_15px_50px_rgba(0,0,0,0.25)]
        `,
        hover &&
          `
          hover:-translate-y-2
          hover:border-yellow-500/30
          hover:bg-white/[0.05]
          hover:shadow-[0_25px_80px_rgba(234,179,8,0.12)]
        `,
        className
      )}
    >
      {/* Premium top glow */}

      <div
        className="
        absolute
        inset-x-0
        top-0
        h-px
        bg-gradient-to-r
        from-transparent
        via-yellow-500/60
        to-transparent
      "
      />

      {children}
    </div>
  );
}