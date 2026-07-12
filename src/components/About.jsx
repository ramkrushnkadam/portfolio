import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg leading-8">
            I'm a passionate Information Technology Engineering student with a
            strong interest in Full Stack Development, Artificial Intelligence,
            Machine Learning, Data Analytics, and IoT. I enjoy building
            scalable, user-friendly applications that solve real-world problems
            while continuously learning modern technologies and software
            development practices.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {/* Education */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300"
          >
            <FaGraduationCap className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-2xl font-bold">
              Education
            </h3>

            <p className="mt-5 text-gray-300 font-medium">
              B.Tech Information Technology
            </p>

            <p className="text-gray-400 mt-2">
              Sanjivani College of Engineering
            </p>

            <p className="mt-4 text-blue-400 font-semibold text-lg">
              CGPA : 8.73
            </p>
          </motion.div>

          {/* Development */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300"
          >
            <FaLaptopCode className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-2xl font-bold">
              Development
            </h3>

            <div className="mt-5 space-y-2 text-gray-300">
              <p>Python</p>
              <p>Java</p>
              <p>React</p>
              <p>JavaScript</p>
            </div>
          </motion.div>

          {/* AI & ML */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300"
          >
            <FaBrain className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-2xl font-bold">
              AI & ML
            </h3>

            <div className="mt-5 space-y-2 text-gray-300">
              <p>Machine Learning</p>
              <p>OpenCV</p>
              <p>Scikit-Learn</p>
              <p>Data Analytics</p>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300"
          >
            <FaCode className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-2xl font-bold">
              Interests
            </h3>

            <div className="mt-5 space-y-2 text-gray-300">
              <p>Full Stack Development</p>
              <p>IoT Projects</p>
              <p>Artificial Intelligence</p>
              <p>Open Source</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;