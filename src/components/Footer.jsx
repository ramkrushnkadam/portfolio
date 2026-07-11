import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-500">
            Ramkrushn Kadam
          </h2>

          <p className="text-gray-400 mt-2">
            Information Technology Engineering Student
          </p>
        </div>

        

        <p className="text-gray-500 text-center">
          © {new Date().getFullYear()} Ramkrushn Kadam
          <br />
          Built with <FaHeart className="inline text-red-500" /> React + Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;