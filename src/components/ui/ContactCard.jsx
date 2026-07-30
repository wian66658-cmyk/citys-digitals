export default function ContactCard({
  icon,
  title,
  value,
  href,
}) {
  return (
    <div
      className="
        flex items-start gap-5
        rounded-2xl
        border border-white/10
        bg-white/[0.02]
        p-5
        transition-all
        duration-300
        hover:border-yellow-500/30
        hover:bg-yellow-500/[0.03]
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          {title}
        </p>

        {href ? (
          <a
            href={href}
            className="mt-2 block text-lg font-medium text-white transition hover:text-yellow-500"
          >
            {value}
          </a>
        ) : (
          <p className="mt-2 text-lg font-medium text-white">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}