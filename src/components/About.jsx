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

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            I am a passionate Information Technology Engineering student
            who enjoys creating innovative software solutions using
            Python, Java, Android, AI/ML and Full Stack Development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <FaGraduationCap className="text-5xl text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold">
              Education
            </h3>

            <p className="mt-4 text-gray-400">
              B.Tech Information Technology
            </p>

            <p className="text-gray-400">
              Sanjivani College of Engineering
            </p>

            <p className="mt-3 text-blue-400">
              CGPA : 8.8
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <FaLaptopCode className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-2xl font-bold">
              Development
            </h3>

            <p className="mt-4 text-gray-400">
              Python
            </p>

            <p className="text-gray-400">
              Java
            </p>

            <p className="text-gray-400">
              Kotlin
            </p>

            <p className="text-gray-400">
              JavaScript
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <FaBrain className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-2xl font-bold">
              AI & ML
            </h3>

            <p className="mt-4 text-gray-400">
              Machine Learning
            </p>

            <p className="text-gray-400">
              OpenCV
            </p>

            <p className="text-gray-400">
              Scikit-Learn
            </p>

            <p className="text-gray-400">
              Data Analytics
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >
            <FaCode className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-2xl font-bold">
              Interests
            </h3>

            <p className="mt-4 text-gray-400">
              Android Development
            </p>

            <p className="text-gray-400">
              IoT Projects
            </p>

            <p className="text-gray-400">
              Full Stack
            </p>

            <p className="text-gray-400">
              Open Source
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;