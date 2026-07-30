import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Main Glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-200px]
          top-[-150px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-yellow-500/10
          blur-[180px]
        "
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-250px]
          bottom-[-200px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-yellow-400/5
          blur-[180px]
        "
      />

      {/* Small Floating Orb */}

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[35%]
          left-[70%]
          h-44
          w-44
          rounded-full
          bg-yellow-500/10
          blur-[100px]
        "
      />

    </div>
  );
}