import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialSidebar = () => {
  return (
    <div
      className="
        flex justify-center gap-8 py-4 w-full
        md:fixed md:top-1/3 md:left-20 md:flex-col md:space-y-6 md:w-auto md:gap-6
      "
    >
      {/* GitHub */}
      <a
        href="https://github.com/jordanjamesja"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <FaGithub className="w-8 h-8 text-white hover:scale-110 transition-transform" />
        <span
          className="absolute -right-24 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded 
          opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-8px] transition-all duration-300"
        >
          GitHub
        </span>
      </a>

      {/* Email */}
      <a href="mailto:jordanjamesdev@gmail.com" className="group relative">
        <HiOutlineMail className="w-8 h-8 text-white hover:scale-110 transition-transform" />
        <span
          className="absolute -right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded 
          opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-8px] transition-all duration-300"
        >
          Email
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/jordanjamesja"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <FaLinkedin className="w-8 h-8 text-white hover:scale-110 transition-transform" />
        <span
          className="absolute -right-24 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded 
          opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-8px] transition-all duration-300"
        >
          LinkedIn
        </span>
      </a>
    </div>
  );
};

export default SocialSidebar;
