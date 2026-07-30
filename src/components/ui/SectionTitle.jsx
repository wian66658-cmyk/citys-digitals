export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-500">
        {badge}
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
        {title}

        {highlight && (
          <span className="block text-yellow-500">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}