import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  { name: "Kotlin", level: 75 },
  { name: "JavaScript", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "React", level: 75 },
  { name: "MySQL", level: 80 },
  { name: "Firebase", level: 75 },
  { name: "Machine Learning", level: 70 },
  { name: "Android Development", level: 85 },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

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

          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
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