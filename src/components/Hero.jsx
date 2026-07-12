import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white pt-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-blue-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            <span className="text-white">
              Ramkrushn
            </span>

            <br />

            <span className="text-blue-500">
              Kadam
            </span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-blue-400 h-16">
            <TypeAnimation
              sequence={[
                "Information Technology Student",
                2000,
                "Python Developer",
                2000,
                "Android Developer",
                2000,
                "AI & ML Enthusiast",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
            I am an Information Technology Engineering student passionate
            about Python, Java, Artificial Intelligence,
            Machine Learning, IoT, and Full Stack Web Development.
            I enjoy creating innovative software solutions that solve
            real-world problems.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
  href="#projects"
  className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition duration-300 inline-block"
>
  View Projects
</a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-xl border border-blue-500 hover:bg-blue-600 transition duration-300"
            >
              Download Resume
            </a>

          </div>

          {/* Social Buttons */}

          <div className="flex gap-4 mt-8">

            <a
              href="https://github.com/ramkrushnkadam"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-blue-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ramkrushn-kadam-783242306"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-blue-600 transition"
            >
              LinkedIn
            </a>

          </div>

          

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >
          <div className="relative">

            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <img
              src="/images/profile.png"
              alt="Ramkrushn Kadam"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.7)] hover:scale-105 transition-all duration-500"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;