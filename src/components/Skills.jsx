import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaReact,
  FaDatabase,
  FaFire,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiScikitlearn,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    level: 90,
    icon: <FaPython className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Java",
    level: 85,
    icon: <FaJava className="text-red-500 text-3xl" />,
  },
  {
    name: "JavaScript",
    level: 80,
    icon: <SiJavascript className="text-yellow-300 text-3xl" />,
  },
  {
    name: "HTML & CSS",
    level: 90,
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
  },
  {
    name: "React",
    level: 75,
    icon: <FaReact className="text-cyan-400 text-3xl" />,
  },
  {
    name: "MySQL",
    level: 80,
    icon: <SiMysql className="text-blue-400 text-3xl" />,
  },
  {
    name: "Firebase",
    level: 75,
    icon: <FaFire className="text-orange-400 text-3xl" />,
  },
  {
    name: "Machine Learning",
    level: 70,
    icon: <SiScikitlearn className="text-orange-500 text-3xl" />,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            A collection of programming languages, frameworks,
            databases, and technologies I use to build modern,
            scalable software solutions.
          </p>
        </motion.div>

        {/* Skills */}

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300"
            >

              {/* Skill Name */}

              <div className="flex items-center justify-between mb-5">

                <div className="flex items-center gap-4">
                  {skill.icon}

                  <div>
                    <h3 className="text-xl font-semibold">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <span className="text-blue-400 font-bold text-lg">
                  {skill.level}%
                </span>

              </div>

              {/* Progress */}

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1.4,
                  }}
                  viewport={{ once: true }}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;