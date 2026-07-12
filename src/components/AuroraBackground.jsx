import { motion } from "framer-motion";

function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[140px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -250, 150, 0],
          y: [0, 150, -120, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[650px] h-[650px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 120, -180, 0],
          y: [0, -120, 100, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[150px]"
      />

    </div>
  );
}

export default AuroraBackground;