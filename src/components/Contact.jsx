import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Feel free to reach out for internships, projects, or collaboration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-blue-500" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">ramkrushn57@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-blue-500" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">+91 9322686252</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-blue-500" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">Nashik, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex gap-5 text-3xl pt-4">
              <a
                href="https://github.com/ramkrushnkadam"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-blue-500 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/ramkrushn-kadam-783242306"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-blue-500 transition" />
              </a>
            </div>

          </div>

          {/* Right Side */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;