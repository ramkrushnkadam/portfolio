import { FaHeart, FaCode } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const codingQuotes = [
    "Turning ideas into reality through code.",
    "Building digital experiences with passion.",
    "Always learning. Always building.",
    "Code. Create. Innovate.",
    "Crafting clean and scalable solutions.",
  ];

  const quote =
    codingQuotes[new Date().getDate() % codingQuotes.length];

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Name */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {" "}
            <span className="text-blue-500"></span>
          </h2>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 text-sm text-gray-300 backdrop-blur">
            <FaCode className="text-blue-400" />
            <span>{quote}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-gray-400 text-sm">
            Thank you for visiting my portfolio. I appreciate your time and
            interest in my work.
          </p>

          <p className="text-gray-500 text-sm">
            © {year} Ramkrushn Kadam. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;