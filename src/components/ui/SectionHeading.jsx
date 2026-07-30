import Reveal from "./Reveal";

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
}) {
  return (
    <Reveal>

      <div
        className={`mb-20 ${
          align === "center"
            ? "mx-auto text-center"
            : "text-left"
        }`}
      >
        {/* Badge */}

        {badge && (
          <span
            className="
              inline-flex
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-yellow-500
            "
          >
            {badge}
          </span>
        )}

        {/* Title */}

        <h2
          className="
            mt-8
            text-4xl
            font-black
            leading-tight
            text-white
            md:text-6xl
          "
        >
          {title}

          {highlight && (
            <span className="block text-yellow-500">
              {highlight}
            </span>
          )}
        </h2>

        {/* Description */}

        {description && (
          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            {description}
          </p>
        )}
      </div>

    </Reveal>
  );
}