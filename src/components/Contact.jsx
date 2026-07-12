import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold tracking-widest uppercase">
            Let's Connect
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            I'm always open to internship opportunities, freelance work,
            innovative projects, and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-5">
                <div className="bg-blue-600/20 p-4 rounded-xl">
                  <FaEnvelope className="text-yellow-400 text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-400">
                    ramkrushn57@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-5">
                <div className="bg-blue-600/20 p-4 rounded-xl">
                  <FaPhone className="text-green-400 text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400">
                    +91 9322686252
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-5">
                <div className="bg-blue-600/20 p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-red-400 text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-400">
                    Nashik, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/ramkrushnkadam"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 border border-slate-700 p-4 rounded-xl hover:bg-gray-600 hover:border-green-600 transition"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/ramkrushn-kadam-783242306"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 border border-slate-700 p-4 rounded-xl hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>

            </div>

          </motion.div>

          {/* Form */}
          <motion.form
            action="https://formspree.io/f/mpqvaone"
            method="POST"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none resize-none"
            ></textarea>

            <input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition duration-300"
            >
              Send Message 🚀
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;