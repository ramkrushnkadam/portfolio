import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Smart Campus Assistant",
    description:
      "An AI-powered Smart Campus system featuring Face Recognition Attendance, AI Chatbot for college queries, Student Performance Prediction, Attendance Analytics, and an Admin Dashboard. Designed to improve campus automation and student management.",
    tech: [
      "Python",
      "Flask",
      "OpenCV",
      "SQLite",
      "Machine Learning",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/images/smartcampus.png",
    github: "https://github.com/ramkrushnkadam/smart-campus",
    demo: "#",
  },

  {
    title: "Traffic Demand Prediction",
    description:
      "A Machine Learning project that predicts future traffic demand using feature engineering and regression models. Includes data preprocessing, visualization, model training, evaluation, and prediction.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "XGBoost",
      "Matplotlib",
    ],
    image: "/images/traffic.png",
    github: "https://github.com/ramkrushnkadam/traffic_prediction_model",
    demo: "#",
  },

  {
    title: "Smart Irrigation System",
    description:
      "An IoT-based Smart Irrigation System that automatically controls water pumps using soil moisture data. Built with ESP8266, relay module, DHT11 sensor, and Blynk for remote monitoring.",
    tech: [
      "ESP8266",
      "Arduino",
      "IoT",
      "Blynk",
      "DHT11",
      "Soil Moisture Sensor",
    ],
    image: "/images/irrigation.png",
    github: "https://github.com/ramkrushnkadam",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Here are some of my featured projects that showcase my skills in
            Artificial Intelligence, Machine Learning, Web Development, and IoT.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-70 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5 text-sm leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 border border-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;