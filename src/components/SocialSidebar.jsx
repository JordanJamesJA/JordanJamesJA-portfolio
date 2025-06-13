import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/3 left-20 hidden md:flex flex-col space-y-6 z-50">
      <a
        href="https://github.com/jordanjamesja"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <FaGithub className="w-8 h-8 text-white hover:scale-110 transition-transform" />
        <span
          className="absolute -right-24 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded 
          opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
        >
          GitHub
        </span>
      </a>

      <a href="mailto:jordanjamesdev@gmail.com" className="group relative">
        <HiOutlineMail className="w-8 h-8 text-white hover:scale-110 transition-transform" />
        <span
          className="absolute -right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded 
          opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
        >
          Email
        </span>
      </a>

      <a
        href="https://linkedin.com/in/jordanjamesja"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <FaLinkedin className="w-8 h-8 text-white hover:scale-110 transition-transform" />
        <span
          className="absolute -right-25 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded 
          opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
        >
          LinkedIn
        </span>
      </a>
    </div>
  );
};

export default SocialSidebar;
