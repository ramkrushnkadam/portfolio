import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-500">
          RK
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl text-white">
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

      </nav>
    </header>
  );
}

export default Navbar;