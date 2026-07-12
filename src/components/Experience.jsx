import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate, FaGraduationCap } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      icon: <FaBriefcase />,
      title: "AICTE - Edunet Foundation IBM SkillsBuild Virtual Internship",
      subtitle: "Employability Skills & Digital Literacy with AI",
      year: "Nov 2025 - Dec 2025",
      description:
    "Successfully completed a 6-week virtual internship on Employability Skills & Digital Literacy with Artificial Intelligence, organized by AICTE in collaboration with Edunet Foundation and IBM SkillsBuild. Gained practical knowledge of AI fundamentals, digital literacy, professional communication, problem-solving, teamwork, and workplace readiness through hands-on learning activities and assessments.",
    },
    {
      icon: <FaCertificate />,
      title: "NPTEL Certification",
      subtitle: "Data Structures and Algorithms using Java",
      year: "2025",
      description:
        "Successfully completed the NPTEL certification course and strengthened problem-solving and algorithmic thinking.",
    },
    {
      icon: <FaCertificate />,
      title: "HackerRank",
      subtitle: "Java (Basic) Certificate",
      year: "2025",
      description:
        "Earned the HackerRank Java (Basic) certification by solving programming challenges and coding assessments.",
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
    <section id="experience" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Experience & <span className="text-blue-500">Certifications</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My learning journey, certifications, and professional experience.
          </p>
        </div>

        <div className="space-y-8">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <div className="flex items-start gap-5">

                <div className="text-3xl text-blue-500">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between flex-wrap">
                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <span className="text-blue-400">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-lg text-gray-300 mt-1">
                    {item.subtitle}
                  </h4>

                  <p className="text-gray-400 mt-3 leading-7">
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