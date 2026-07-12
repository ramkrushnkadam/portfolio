import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-500 cursor-pointer">
          RK
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-blue-500 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a></li>
          <li>
            <a
              href="/resume.pdf"
              download
            
              className="hover:text-blue-500 transition duration-300"
            >
              Resume
            </a>

            
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/ramkrushnkadam"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="p-3 rounded-full bg-slate-800 hover:bg-gray-600 transition-all duration-300 hover:scale-110"
          >
            <FaGithub className="text-xl text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ramkrushn-kadam-783242306"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin className="text-xl text-white" />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/ramkrushn_123/"
            target="_blank"
            rel="noreferrer"
            title="LeetCode"
            className="p-3 rounded-full bg-slate-800 hover:bg-yellow-500 transition-all duration-300 hover:scale-110"
          >
            <SiLeetcode className="text-xl text-white" />
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/profile/ramkrushn57"
            target="_blank"
            rel="noreferrer"
            title="HackerRank"
            className="p-3 rounded-full bg-slate-800 hover:bg-green-600 transition-all duration-300 hover:scale-110"
          >
            <SiHackerrank className="text-xl text-white" />
          </a>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;