import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";

function Experience() {

  const experiences = [

    {
      icon: <FaBriefcase />,
      title: "AICTE - Edunet Foundation IBM SkillsBuild",
      subtitle: "Virtual Internship",
      year: "Nov 2025 - Dec 2025",
      description:
        "Completed a 6-week AICTE virtual internship focused on Artificial Intelligence, digital literacy, teamwork, professional communication, problem-solving, and workplace readiness through IBM SkillsBuild.",
    },

    {
      icon: <FaCertificate />,
      title: "NPTEL Certification",
      subtitle: "Data Structures & Algorithms using Java",
      year: "2025",
      description:
        "Strengthened problem-solving, algorithm design, and Java programming through the NPTEL certification program.",
    },

    {
      icon: <FaCertificate />,
      title: "HackerRank",
      subtitle: "Java (Basic) Certificate",
      year: "2025",
      description:
        "Successfully earned the Java (Basic) certification by solving coding assessments and programming challenges.",
    },

    {
      icon: <FaGraduationCap />,
      title: "Bachelor of Technology",
      subtitle: "Information Technology",
      year: "2024 - Present",
      description:
        "Currently pursuing B.Tech in Information Technology at Sanjivani College of Engineering with a CGPA of 8.73.",
    },

  ];

  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden"
    >

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16">

          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            Journey
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Experience &
            <span className="text-blue-500">
              {" "}Certifications
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            My internship experience, certifications, and academic journey that
            continue to strengthen my technical expertise.
          </p>

        </div>

        <div className="space-y-8">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-7 hover:border-blue-500 transition"
            >

              <div className="flex gap-6">

                <div className="bg-blue-600/20 p-5 rounded-2xl h-fit text-3xl text-blue-400">
                  {item.icon}
                </div>

                <div className="flex-1">

                  <div className="flex flex-wrap justify-between items-center">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-blue-400 mt-1">
                        {item.subtitle}
                      </p>

                    </div>

                    <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mt-3 lg:mt-0">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-gray-400 leading-8 mt-5">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;