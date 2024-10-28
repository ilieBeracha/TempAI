import { motion } from "framer-motion";

export default function TemplateHeader() {
  return (
    <motion.div
      className="h-[60vh] w-full flex flex-col items-center justify-center space-y-6 text-white bg-gradient-to-b from-[#1F2E4F] to-[#2C3E67] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Animated background particles */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle, rgba(31,46,79,0.3) 0%, rgba(44,62,103,0) 50%)",
            "radial-gradient(circle, rgba(31,46,79,0) 50%, rgba(44,62,103,0.3) 100%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Existing grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.png')] bg-repeat q" />

      {/* Floating elements decoration */}
      <div className="absolute inset-0 overflow-hidden ">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.75,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center px-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white bg-size-200 animate-gradient"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
      >
        Explore Our Template Journey
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-blue-200 text-center px-4 max-w-2xl"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        Scroll through a curated selection of templates
      </motion.p>

      <motion.div
        className="mt-12 animate-bounce cursor-pointer hover:text-blue-200 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.2 }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
