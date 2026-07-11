import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          duration: 1
        }}
        className="text-7xl font-bold text-blue-500"
      >
        RK
      </motion.h1>
    </div>
  );
}

export default Loading;